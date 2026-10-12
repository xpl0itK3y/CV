import { splitDescription, renderTextWithLinks } from "./helpers";

// A4 minus the 40pt side margins
const CONTENT_WIDTH = 515;
const COLUMN_GAP = 20;
const HALF_WIDTH = (CONTENT_WIDTH - COLUMN_GAP) / 2;

const ACCENT = "#d14b88";
const TEAL = "#4b8f97";
const HAIRLINE = "#ecd5e0";
const TILE = "#fbf1f6";

// The experience timeline: a gutter with the rule on its left edge
const TIMELINE_GUTTER = 15;
const TIMELINE_RULE = 1.5;
const TIMELINE_TEXT_WIDTH = CONTENT_WIDTH - TIMELINE_GUTTER - TIMELINE_RULE;
// From the text column back onto the rule
const TIMELINE_DOT_X = -TIMELINE_GUTTER - 0.75;

// One table per job: the rule on the left edge, the text in the second
// column. Stacked tables join into one continuous timeline
const timelineLayout = {
  vLineWidth: (i) => (i === 0 ? TIMELINE_RULE : 0),
  vLineColor: () => ACCENT,
  hLineWidth: () => 0,
  paddingLeft: () => 0,
  paddingRight: () => 0,
  paddingTop: () => 0,
  paddingBottom: () => 0,
};

// Description text on a thin teal rule, its bullets sitting on the rule
const descriptionLayout = {
  vLineWidth: (i) => (i === 0 ? 1 : 0),
  vLineColor: () => TEAL,
  hLineWidth: () => 0,
  paddingLeft: () => 8,
  paddingRight: () => 0,
  paddingTop: () => 0,
  paddingBottom: () => 0,
};

// Rows only: no lines and no padding, just page breaks between them
const plainLayout = {
  hLineWidth: () => 0,
  vLineWidth: () => 0,
  paddingLeft: () => 0,
  paddingRight: () => 0,
  paddingTop: () => 0,
  paddingBottom: () => 0,
};

// Label/value grid without borders for the contacts
const contactsTableLayout = {
  hLineWidth: () => 0,
  vLineWidth: () => 0,
  paddingLeft: () => 0,
  paddingRight: () => 0,
  paddingTop: () => 0,
  paddingBottom: () => 7,
};

// A soft tile with an accent edge, like the facts on the site
const factTileLayout = {
  hLineWidth: () => 0,
  vLineWidth: (i) => (i === 0 ? 2 : 0),
  vLineColor: () => ACCENT,
  paddingLeft: () => 8,
  paddingRight: () => 6,
  paddingTop: () => 5,
  paddingBottom: () => 5,
};

// "2020 - 2024" → "2020 – 2024": a real en dash that stays on the line of
// the word before it
const withEnDash = (text) => text.replace(/\s+-\s+/g, " – ");

// Section titles in the data may still start with an emoji
const titleText = (title) => title.replace(/^[^\p{L}\p{N}]+/u, "").toUpperCase();

// Items separated by accent bullets; the bullet sticks to the item before
// it, so a wrapped line never starts with one
const bulletList = (items) =>
  items.flatMap((item, index) =>
    index === 0 ? [item] : [{ text: " • ", color: ACCENT }, item],
  );

// Tracked uppercase title over a hairline with a short accent bar.
// headlineLevel 1 keeps it with the content below (see generatePDF)
const sectionTitle = (
  text,
  { width = CONTENT_WIDTH, aside, keepWithNext = true, margin = [0, 16, 0, 8] } = {},
) => ({
  stack: [
    aside
      ? {
          columns: [
            { width: "*", text, style: "sectionTitle" },
            { width: "auto", text: aside, style: "sectionAside" },
          ],
        }
      : { text, style: "sectionTitle" },
    {
      canvas: [
        {
          type: "line",
          x1: 0,
          y1: 0,
          x2: width,
          y2: 0,
          lineWidth: 0.75,
          lineColor: HAIRLINE,
        },
        {
          type: "line",
          x1: 0,
          y1: 0,
          x2: 28,
          y2: 0,
          lineWidth: 2,
          lineColor: ACCENT,
        },
      ],
      margin: [0, 3, 0, 0],
    },
  ],
  headlineLevel: keepWithNext ? 1 : undefined,
  margin,
});

const labelled = (label, value) => ({
  stack: [
    { text: label.toUpperCase(), style: "contactLabel" },
    typeof value === "string" ? { text: value, style: "contactValue" } : value,
  ],
});

// Drawn from inside the text cell, so the dot always lands on the same page
// as the line it marks; detached, so it takes no room
const timelineDot = (y) => ({
  canvas: [{ type: "ellipse", x: 0, y: 0, r1: 3, r2: 3, color: ACCENT }],
  relativePosition: { x: TIMELINE_DOT_X, y },
});

// `text`: a string, whose links are made clickable, or ready pdfmake spans
const descriptionBullet = (text) => ({
  unbreakable: true,
  columns: [
    {
      width: 8,
      canvas: [
        {
          type: "ellipse",
          x: -8.5,
          y: 7,
          r1: 2,
          r2: 2,
          color: TEAL,
        },
      ],
      margin: [0, 1, 0, 1],
    },
    {
      width: "*",
      ...(typeof text === "string"
        ? renderTextWithLinks(text, { style: "jobDescription" })
        : { text, style: "jobDescription" }),
      margin: [2.5, 1, 0, 1],
    },
  ],
  columnGap: 4,
});

const descriptionLine = (sentence) => {
  const isDashed = sentence.trim().startsWith("-");
  if (isDashed) {
    return descriptionBullet(sentence.trim().replace(/^-\s*/, ""));
  }
  return {
    ...renderTextWithLinks(sentence, { style: "jobDescription" }),
    margin: [0, 1, 0, 1],
  };
};

// "https://example.com/" → "example.com"
const bareUrl = (url) => url.replace(/^https?:\/\//, "").replace(/\/$/, "");

// A project as on the site: name and one-liner, the facts line, the text on
// the rule, then the stack and the links as labelled lines
const projectBlock = (project, index, stackTitle) => ({
  stack: [
    {
      table: {
        widths: ["*"],
        body: [
          // The header goes to the next page with the description under it
          [
            {
              stack: [
                project.version
                  ? {
                      columns: [
                        { width: "*", text: project.name, style: "jobPosition" },
                        { width: "auto", text: project.version, style: "jobPeriod" },
                      ],
                      columnGap: 10,
                    }
                  : { text: project.name, style: "jobPosition" },
                ...(project.tagline
                  ? [{ text: project.tagline, style: "jobCompany" }]
                  : []),
                ...(project.meta?.length
                  ? [{ text: bulletList(project.meta), style: "projectMeta" }]
                  : []),
                {
                  table: {
                    widths: ["*"],
                    body: [[descriptionLine(project.description)]],
                  },
                  layout: descriptionLayout,
                  margin: [0, 5, 0, 0],
                },
              ],
              unbreakable: true,
            },
          ],
          // Each highlight is unbreakable on its own, so the page may turn
          // between them
          ...(project.highlights ?? []).map(({ title, text }) => [
            {
              table: {
                widths: ["*"],
                body: [
                  [
                    descriptionBullet([
                      { text: `${title}. `, bold: true, color: "#8f2958" },
                      text,
                    ]),
                  ],
                ],
              },
              layout: descriptionLayout,
            },
          ]),
        ],
      },
      layout: plainLayout,
    },
    {
      stack: [
        ...(project.technologies?.length
          ? [
              {
                text: [
                  { text: `${stackTitle}: `, style: "stackLabel" },
                  ...bulletList(project.technologies),
                ],
                style: "stackText",
              },
            ]
          : []),
        ...(project.links?.length
          ? [
              {
                text: bulletList(
                  project.links.map(({ label, url }) => ({
                    text: [
                      { text: `${label}: `, style: "stackLabel" },
                      { text: bareUrl(url), link: url },
                    ],
                  })),
                ),
                style: "stackText",
              },
            ]
          : []),
      ],
      unbreakable: true,
      margin: [0, 6, 0, 0],
    },
  ],
  // Like a job: one that would start at the very bottom of a page moves on
  headlineLevel: 2,
  margin: [0, index === 0 ? 0 : 12, 0, 0],
});

const skillGroup = (group, index) => ({
  stack: [
    { text: group.category, style: "skillHeader" },
    { text: group.items.map((s) => s.name).join(", "), style: "skillText" },
  ],
  unbreakable: true,
  margin: [0, index === 0 ? 0 : 7, 0, 0],
});

export const generateContent = (translations, lang, pdfLogo) => {
  const half = Math.ceil(translations.technicalSkills.length / 2);
  const stackTitle =
    translations.stackTitle || (lang === "ru" ? "Стек технологий" : "Tech Stack");

  return [
    // Заголовок "Резюме"
    pdfLogo
      ? {
          svg: pdfLogo,
          width: 42,
          height: 42,
          alignment: "center",
          margin: [0, 0, 0, 12],
        }
      : {
          text: "CV",
          style: "resumeTitle",
        },

    // ФИО и должность
    {
      text: translations.name,
      style: "headerName",
    },
    {
      text: translations.title,
      style: "headerTitle",
    },

    // Разделитель: из акцентного в бирюзовый, как на сайте
    {
      canvas: [
        {
          type: "rect",
          x: 0,
          y: 0,
          w: CONTENT_WIDTH,
          h: 2,
          r: 1,
          linearGradient: [ACCENT, TEAL],
        },
      ],
      margin: [0, 8, 0, 0],
    },

    // Контакты
    sectionTitle(titleText(translations.contactsTitle)),
    {
      table: {
        widths: ["*", "*", "*"],
        body: [
          [
            labelled("Email", {
              text: translations.email,
              style: "contactValue",
              link: `mailto:${translations.email}`,
            }),
            labelled(
              lang === "ru" ? "Местоположение" : "Location",
              translations.location,
            ),
            labelled("GitHub", {
              text: translations.github.replace(/github\.com\//, ""),
              style: "contactValue",
              link: `https://${translations.github}`,
            }),
          ],
          [
            labelled("Telegram", {
              text: translations.telegram,
              style: "contactValue",
              link: `https://t.me/${translations.telegram.replace("@", "")}`,
            }),
            translations.linkedin
              ? labelled("LinkedIn", {
                  text: "linkedin.com/in/CV",
                  style: "contactValue",
                  link: `https://${translations.linkedin}`,
                })
              : { text: "" },
            translations.headhunter
              ? labelled("HeadHunter", {
                  text: "hh.kz/CV",
                  style: "contactValue",
                  link: `https://${translations.headhunter}`,
                })
              : { text: "" },
          ],
        ],
      },
      layout: contactsTableLayout,
    },

    // О себе
    sectionTitle(titleText(translations.aboutTitle), { margin: [0, 9, 0, 8] }),
    {
      text: translations.aboutText,
      style: "aboutText",
    },
    // Age, citizenship and work format: a labelled tile each
    ...(translations.aboutFacts?.length
      ? [
          {
            columns: translations.aboutFacts.map(({ label, value }) => ({
              width: "*",
              table: {
                widths: ["*"],
                body: [[{ ...labelled(label, value), fillColor: TILE }]],
              },
              layout: factTileLayout,
            })),
            columnGap: 8,
            margin: [0, 10, 0, 0],
          },
        ]
      : []),

    // Образование
    sectionTitle(titleText(translations.educationTitle)),
    ...translations.education.map((edu) => ({
      columns: [
        {
          width: "*",
          stack: [
            { text: edu.degree, style: "eduDegree" },
            { text: edu.institution, style: "eduInstitution" },
          ],
        },
        { width: "auto", text: withEnDash(edu.period), style: "eduPeriod" },
      ],
      columnGap: 12,
      margin: [0, 0, 0, 6],
    })),

    // Технические навыки (Полный список по категориям)
    sectionTitle(titleText(translations.skillsTitle), { margin: [0, 10, 0, 8] }),
    {
      columns: [
        {
          width: "*",
          stack: translations.technicalSkills.slice(0, half).map(skillGroup),
        },
        {
          width: "*",
          stack: translations.technicalSkills.slice(half).map(skillGroup),
        },
      ],
      columnGap: COLUMN_GAP,
    },

    // Soft Skills и Языки рядом внизу
    {
      columns: [
        {
          width: "*",
          stack: [
            sectionTitle(titleText(translations.softSkillsTitle), {
              width: HALF_WIDTH,
              keepWithNext: false,
            }),
            {
              text: bulletList(translations.softSkills),
              style: "skillText",
            },
          ],
        },
        {
          width: "*",
          stack: [
            ...(translations.workPractices?.length
              ? [
                  sectionTitle(
                    titleText(
                      translations.workPracticesTitle ||
                        (lang === "ru" ? "Подходы к работе" : "Work Practices"),
                    ),
                    { width: HALF_WIDTH, keepWithNext: false },
                  ),
                  {
                    text: bulletList(translations.workPractices),
                    style: "skillText",
                  },
                ]
              : []),
            sectionTitle(titleText(translations.languagesTitle), {
              width: HALF_WIDTH,
              keepWithNext: false,
              margin: [0, 12, 0, 8],
            }),
            ...translations.languages.map((l) => ({
              text: [
                { text: `${l.name}: `, bold: true, color: TEAL },
                withEnDash(l.level),
              ],
              style: "skillText",
              margin: [0, 0, 0, 2],
            })),
          ],
        },
      ],
      columnGap: COLUMN_GAP,
      // Small enough to move as a whole instead of splitting a column
      unbreakable: true,
    },

    // Заголовок "Опыт работы" и общий стаж справа
    sectionTitle(titleText(translations.experienceTitle), {
      aside: translations.totalExperience,
      margin: [0, 20, 0, 14],
    }),
    ...translations.experiences.map((job, jobIdx) => {
      const isLast = jobIdx === translations.experiences.length - 1;
      const rows = [];

      // 1. Заголовок вакансии (точка на линии)
      rows.push([
        { text: "" },
        {
          stack: [
            timelineDot(7),
            {
              columns: [
                {
                  width: "*",
                  stack: [
                    { text: job.position, style: "jobPosition" },
                    { text: job.company, style: "jobCompany" },
                  ],
                },
                {
                  width: "auto",
                  text: withEnDash(job.period),
                  style: "jobPeriod",
                },
              ],
              columnGap: 10,
            },
          ],
          margin: [0, 0, 0, 4],
        },
      ]);

      // 2. Описание и проекты (обёрнуты в таблицу с вертикальной линией)
      const descriptionRows = [];
      splitDescription(job.description).forEach((sentence) => {
        const projectTitleMatch = sentence.match(/^(\d+\)\s+[^.]+)/);
        if (projectTitleMatch) {
          // Это заголовок проекта
          const title = projectTitleMatch[1].replace(/[:.]+$/, "").trim();
          // Удаляем двоеточия, пробелы И ТОЧКИ из начала остатка (но оставляем дефис, если он есть)
          const rest = sentence
            .slice(projectTitleMatch[1].length)
            .replace(/^[:\s.]+/, "");

          const lines = rest
            .split(/\.\s+/)
            .map((s) => s.trim())
            .filter((s) => s.length > 0 && s !== ".")
            .map((rs) => descriptionLine(rs.endsWith(".") ? rs : `${rs}.`));

          // The title goes to the next page with its first line
          descriptionRows.push([
            {
              stack: [
                { text: title, style: "projectTitle" },
                ...lines.splice(0, 1),
              ],
              unbreakable: true,
            },
          ]);
          lines.forEach((line) => descriptionRows.push([line]));
        } else {
          const isProjectsLead =
            sentence.includes("Ключевые проекты") ||
            sentence.includes("Key Projects");
          descriptionRows.push([
            descriptionLine(
              isProjectsLead ? sentence.replace(/[.]+$/, "") : sentence,
            ),
          ]);
        }
      });

      // Добавляем описание как вложенную таблицу с линией слева
      if (descriptionRows.length > 0) {
        rows.push([
          { text: "" },
          {
            table: {
              widths: ["*"],
              body: descriptionRows,
            },
            layout: descriptionLayout,
            margin: [0, 4, 0, 4],
          },
        ]);
      }

      // 3. Технологии, и под ними разделитель до следующего места работы.
      // The title keeps its first line and the rule its last one, so
      // neither is left alone at the edge of a page
      const stackLines = (job.techGroups ?? []).map((group) => ({
        text: [
          { text: `${group.label}: `, style: "stackLabel" },
          ...bulletList(group.items),
        ],
        style: "stackText",
        unbreakable: true,
      }));
      const hasStack = stackLines.length > 0;
      const stackBlocks = [];
      if (hasStack) {
        stackBlocks.push({
          stack: [
            timelineDot(6),
            { text: stackTitle.toUpperCase(), style: "stackTitle" },
            stackLines.shift(),
          ],
          unbreakable: true,
        });
      }
      stackBlocks.push(...stackLines);
      if (!isLast) {
        const lastLine = stackBlocks.pop();
        stackBlocks.push({
          stack: [
            ...(lastLine ? [lastLine] : []),
            {
              canvas: [
                {
                  type: "line",
                  x1: 0,
                  y1: 0,
                  x2: TIMELINE_TEXT_WIDTH,
                  y2: 0,
                  lineWidth: 0.75,
                  lineColor: HAIRLINE,
                },
              ],
              margin: [0, lastLine ? 14 : 0, 0, 0],
            },
          ],
          unbreakable: true,
        });
      }

      if (stackBlocks.length > 0) {
        rows.push([
          { text: "" },
          {
            stack: stackBlocks,
            margin: [0, hasStack ? 8 : 4, 0, isLast ? 0 : 16],
          },
        ]);
      }

      // headlineLevel 2: a job that would start at the very bottom of a
      // page moves to the next one whole, header included
      return {
        table: { widths: [TIMELINE_GUTTER, "*"], body: rows },
        layout: timelineLayout,
        headlineLevel: 2,
      };
    }),

    // Проекты, под опытом, как на сайте
    ...(translations.projects?.length
      ? [
          sectionTitle(titleText(translations.projectsTitle), {
            margin: [0, 20, 0, 10],
          }),
          ...translations.projects.map((project, index) =>
            projectBlock(project, index, stackTitle),
          ),
        ]
      : []),
  ];
};
