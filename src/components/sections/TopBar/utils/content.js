import { splitDescription, renderTextWithLinks } from "./helpers";

export const generateContent = (translations, lang) => {
  return [
    // Заголовок "Резюме"
    {
      text: lang === "ru" ? "CV" : "CV",
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

    // Разделитель
    {
      canvas: [
        {
          type: "line",
          x1: 0,
          y1: 0,
          x2: 495,
          y2: 0,
          lineWidth: 2,
          lineColor: "#d14b88",
        },
      ],
      margin: [0, 8, 0, 0],
    },

    // Контакты
    {
      text: translations.contactsTitle.replace(/📬\s*/, "").toUpperCase(),
      style: "sectionTitle",
    },
    {
      table: {
        widths: ["44%", "44%", "44%"],
        body: [
          [
            {
              stack: [
                { text: "Email", style: "contactLabel" },
                { text: translations.email, style: "contactValue" },
              ],
            },
            {
              stack: [
                {
                  text: lang === "ru" ? "Местоположение" : "Location",
                  style: "contactLabel",
                },
                { text: translations.location, style: "contactValue" },
              ],
            },
            {
              stack: [
                { text: "GitHub", style: "contactLabel" },
                {
                  text: translations.github.replace(/github\.com\//, ""),
                  style: "contactValue",
                  link: `https://${translations.github}`,
                },
              ],
            },
          ],
          [
            {
              stack: [
                { text: "Telegram", style: "contactLabel" },
                {
                  text: translations.telegram,
                  style: "contactValue",
                  link: `https://t.me/${translations.telegram.replace("@", "")}`,
                },
              ],
            },
            translations.linkedin
              ? {
                  stack: [
                    { text: "LinkedIn", style: "contactLabel" },
                    {
                      text: "linkedin.com/in/CV",
                      style: "contactValue",
                      link: `https://${translations.linkedin}`,
                    },
                  ],
                }
              : { text: "" },
            translations.headhunter
              ? {
                  stack: [
                    { text: "HeadHunter", style: "contactLabel" },
                    {
                      text: "hh.kz/CV",
                      style: "contactValue",
                      link: `https://${translations.headhunter}`,
                    },
                  ],
                }
              : { text: "" },
          ],
        ],
      },
      layout: {
        hLineWidth: () => 0,
        vLineWidth: () => 0,
        paddingLeft: () => 0,
        paddingRight: () => 0,
        paddingTop: () => 0,
        paddingBottom: () => 2,
      },
      margin: [0, 0, 0, 0],
    },

    // О себе
    {
      text: translations.aboutTitle.replace(/👤\s*/, "").toUpperCase(),
      style: "sectionTitle",
    },
    {
      text: translations.aboutText,
      style: "aboutText",
      margin: [0, 0, 0, 0],
    },

    // Образование
    {
      text: translations.educationTitle.replace(/🎓\s*/, "").toUpperCase(),
      style: "sectionTitle",
    },
    ...translations.education.flatMap((edu) => [
      {
        text: edu.degree,
        style: "eduDegree",
      },
      {
        text: edu.institution,
        style: "eduInstitution",
      },
      {
        text: edu.period,
        style: "eduPeriod",
      },
    ]),

    // Технические навыки (Полный список по категориям)
    {
      text: translations.skillsTitle.replace(/🚀\s*/, "").toUpperCase(),
      style: "sectionTitle",
    },
    {
      columns: [
        {
          width: "50%",
          stack: translations.technicalSkills
            .slice(0, Math.ceil(translations.technicalSkills.length / 2))
            .flatMap((group) => [
              {
                text: group.category,
                style: "skillHeader",
                margin: [0, 3, 0, 0],
              },
              {
                text: group.items.map((s) => s.name).join(", "),
                style: "skillText",
                margin: [0, 0, 0, 4],
              },
            ]),
        },
        {
          width: "50%",
          stack: translations.technicalSkills
            .slice(Math.ceil(translations.technicalSkills.length / 2))
            .flatMap((group) => [
              {
                text: group.category,
                style: "skillHeader",
                margin: [0, 3, 0, 0],
              },
              {
                text: group.items.map((s) => s.name).join(", "),
                style: "skillText",
                margin: [0, 0, 0, 4],
              },
            ]),
        },
      ],
      columnGap: 20,
    },

    // Soft Skills и Языки рядом внизу
    {
      columns: [
        {
          width: "50%",
          stack: [
            {
              text: translations.softSkillsTitle
                .replace(/💡\s*/, "")
                .toUpperCase(),
              style: "sectionTitle",
              margin: [0, 10, 0, 6],
            },
            {
              text: translations.softSkills.join(" • "),
              style: "skillText",
            },
          ],
        },
        {
          width: "50%",
          stack: [
            ...(translations.workPractices?.length
              ? [
                  {
                    text: (lang === "ru"
                      ? "Подходы к работе"
                      : "Work Practices"
                    ).toUpperCase(),
                    style: "sectionTitle",
                    margin: [0, 10, 0, 6],
                  },
                  {
                    text: translations.workPractices.join(" • "),
                    style: "skillText",
                    margin: [0, 0, 0, 8],
                  },
                ]
              : []),
            {
              text: translations.languagesTitle
                .replace(/🌐\s*/, "")
                .toUpperCase(),
              style: "sectionTitle",
              margin: [0, 10, 0, 6],
            },
            ...translations.languages.map((l) => ({
              text: `${l.name}: ${l.level}`,
              style: "skillText",
              margin: [0, 0, 0, 2],
            })),
          ],
        },
      ],
      columnGap: 20,
      margin: [0, 0, 0, 10],
    },

    // Заголовок "Опыт работы"
    {
      columns: [
        {
          width: "*",
          text: translations.experienceTitle.replace(/💼\s*/, "").toUpperCase(),
          fontSize: 14,
          bold: true,
          color: "#7a1f49",
          decoration: "underline",
          decorationStyle: "solid",
          decorationThickness: 2,
          alignment: "left",
        },
        ...(translations.totalExperience
          ? [
              {
                width: "auto",
                text: translations.totalExperience,
                fontSize: 14,
                bold: true,
                color: "#7a1f49",
                decoration: "underline",
                decorationStyle: "solid",
                decorationThickness: 2,
                italics: true,
                alignment: "right",
              },
            ]
          : []),
      ],
      margin: [0, 15, 0, 15],
    },
    {
      table: {
        widths: [15, "*"], // Отступ для текста от линии (которая теперь слева)
        body: translations.experiences.flatMap((job, jobIdx) => {
          const descriptionChunks = splitDescription(job.description);
          const rows = [];

          // 1. Заголовок вакансии (точка на линии)
          rows.push([
            {
              canvas: [
                {
                  type: "ellipse",
                  x: -0.75,
                  y: 7,
                  r1: 3,
                  r2: 3,
                  color: "#d14b88",
                },
              ],
            },
            {
              stack: [
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
                      text: job.period,
                      style: "jobPeriod",
                      alignment: "right",
                    },
                  ],
                  columnGap: 8,
                  margin: [0, 0, 0, 4],
                },
              ],
              margin: [0, 0, 0, 0],
            },
          ]);

          // 2. Описание и проекты (обёрнуты в таблицу с вертикальной линией)
          const descriptionRows = [];
          descriptionChunks.forEach((sentence, sIdx) => {
            const projectTitleMatch = sentence.match(/^(\d+\)\s+[^.]+)/);
            if (projectTitleMatch) {
              // Это заголовок проекта
              const title = projectTitleMatch[1].replace(/[:.]+$/, "").trim();
              // Удаляем двоеточия, пробелы И ТОЧКИ из начала остатка (но оставляем дефис, если он есть)
              const rest = sentence
                .slice(projectTitleMatch[1].length)
                .replace(/^[:\s.]+/, "");

              descriptionRows.push([
                {
                  text: title,
                  bold: true,
                  color: "#d14b88",
                  fontSize: 12,
                  margin: [0, 4, 0, 2],
                },
              ]);

              if (rest) {
                const restSentences = rest
                  .split(/\.\s+/)
                  .map((s) => s.trim())
                  .filter((s) => s.length > 0 && s !== ".");
                restSentences.forEach((rs) => {
                  const normalizedSentence = rs.endsWith(".") ? rs : `${rs}.`;
                  const isDashed = normalizedSentence.trim().startsWith("-");
                  const sentenceText = isDashed
                    ? normalizedSentence.trim().replace(/^-\s*/, "")
                    : normalizedSentence;

                  descriptionRows.push([
                    isDashed
                      ? {
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
                                  color: "#4b8f97",
                                },
                              ],
                              margin: [0, 1, 0, 1],
                            },
                            {
                              width: "*",
                              ...renderTextWithLinks(sentenceText, {
                                style: "jobDescription",
                              }),
                              margin: [2.5, 1, 0, 1],
                            },
                          ],
                          columnGap: 4,
                        }
                      : {
                          ...renderTextWithLinks(normalizedSentence, {
                            style: "jobDescription",
                          }),
                          margin: [0, 1, 0, 1],
                        },
                  ]);
                });
              }
            } else {
              let cleanSentence = sentence;
              if (
                cleanSentence.includes("Ключевые проекты") ||
                cleanSentence.includes("Key Projects")
              ) {
                cleanSentence = cleanSentence.replace(/[.]+$/, "");
              }
              const isDashed = cleanSentence.trim().startsWith("-");
              const sentenceText = isDashed
                ? cleanSentence.trim().replace(/^-\s*/, "")
                : cleanSentence;
              descriptionRows.push([
                isDashed
                  ? {
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
                              color: "#4b8f97",
                            },
                          ],
                          margin: [0, 1, 0, 1],
                        },
                        {
                          width: "*",
                          ...renderTextWithLinks(sentenceText, {
                            style: "jobDescription",
                          }),
                          margin: [2.5, 1, 0, 1],
                        },
                      ],
                      columnGap: 4,
                    }
                  : {
                      ...renderTextWithLinks(cleanSentence, {
                        style: "jobDescription",
                      }),
                      margin: [0, 1, 0, 1],
                    },
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
                layout: {
                  vLineWidth: (i) => (i === 0 ? 1 : 0),
                  vLineColor: () => "#4b8f97",
                  hLineWidth: () => 0,
                  paddingLeft: () => 8,
                  paddingRight: () => 0,
                  paddingTop: () => 0,
                  paddingBottom: () => 0,
                },
                margin: [0, 4, 0, 4],
              },
            ]);
          }

          // 3. Технологии
          if (job.techGroups && job.techGroups.length > 0) {
            rows.push([
              {
                canvas: [
                  {
                    type: "ellipse",
                    x: -0.75,
                    y: 22,
                    r1: 3,
                    r2: 3,
                    color: "#d14b88",
                  },
                ],
              },
              {
                stack: [
                  {
                    text: (
                      translations.stackTitle ||
                      (lang === "ru" ? "Стек технологий" : "Tech Stack")
                    ).toUpperCase(),
                    fontSize: 13.5,
                    bold: true,
                    color: "#4b8f97",
                    margin: [0, 10, 0, 6],
                  },
                  ...job.techGroups.map((group) => ({
                    text: [
                      {
                        text: `${group.label}: `,
                        fontSize: 12,
                        bold: true,
                        color: "#d14b88",
                      },
                      {
                        text: group.items.join(" • "),
                        fontSize: 12,
                        color: "#1d1116",
                      },
                    ],
                    margin: [0, 1, 0, 1],
                  })),
                ],
                margin: [0, 5, 0, 15],
              },
            ]);
          } else {
            rows.push([{ text: "" }, { text: "", margin: [0, 0, 0, 15] }]);
          }

          // Горизонтальный разделитель между опытами (кроме последнего)
          if (jobIdx < translations.experiences.length - 1) {
            rows.push([
              { text: "" },
              {
                canvas: [
                  {
                    type: "line",
                    x1: 0,
                    y1: 0,
                    x2: 480,
                    y2: 0,
                    lineWidth: 0.75,
                    lineColor: "#d14b88",
                  },
                ],
                margin: [0, 5, 0, 15],
              },
            ]);
          }

          return rows;
        }),
      },
      layout: {
        vLineWidth: (i) => (i === 0 ? 1.5 : 0), // Линия СЛЕВА (i=0)
        vLineColor: (i) => (i === 0 ? "#d14b88" : "white"),
        hLineWidth: (i) => 0,
        paddingLeft: (i) => 0,
        paddingRight: (i) => 0,
        paddingTop: (i, node) => 0,
        paddingBottom: (i, node) => 0,
      },
    },
  ];
};
