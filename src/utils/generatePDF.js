import pdfMake from "pdfmake/build/pdfmake.min.js";

// Импорт шрифтов для поддержки кириллицы (Roboto поддерживает кириллицу)
let fontsLoaded = false;

const loadFonts = async () => {
  if (fontsLoaded || pdfMake.vfs) {
    fontsLoaded = true;
    return;
  }

  try {
    // Пробуем разные способы импорта для совместимости с Vite
    const pdfFonts = await import("pdfmake/build/vfs_fonts.js");

    if (pdfFonts.default?.pdfMake?.vfs) {
      pdfMake.vfs = pdfFonts.default.pdfMake.vfs;
    } else if (pdfFonts.pdfMake?.vfs) {
      pdfMake.vfs = pdfFonts.pdfMake.vfs;
    } else if (pdfFonts.default) {
      pdfMake.vfs = pdfFonts.default;
    } else if (pdfFonts) {
      pdfMake.vfs = pdfFonts;
    }

    fontsLoaded = true;
  } catch (e) {
    try {
      const pdfFonts2 = await import("pdfmake/build/vfs_fonts");
      if (pdfFonts2.default?.pdfMake?.vfs) {
        pdfMake.vfs = pdfFonts2.default.pdfMake.vfs;
      } else if (pdfFonts2.pdfMake?.vfs) {
        pdfMake.vfs = pdfFonts2.pdfMake.vfs;
      } else if (pdfFonts2.default) {
        pdfMake.vfs = pdfFonts2.default;
      }
      fontsLoaded = true;
    } catch (e2) {
      console.error(
        "Failed to load pdfmake fonts. PDF generation may not work correctly.",
        e2,
      );
    }
  }
};

/**
 * Генерирует PDF резюме из данных переводов
 * @param {Object} translations - Данные переводов для текущего языка
 * @param {string} lang - Текущий язык ('ru' или 'en')
 */
export const generateResumePDF = async (translations, lang) => {
  // Загружаем шрифты перед генерацией
  await loadFonts();

  const docDefinition = {
    pageSize: "A4",
    pageMargins: [40, 30, 40, 30],
    defaultStyle: {
      font: "Roboto",
      fontSize: 11.5,
      lineHeight: 1.4,
      color: "#000000",
    },
    styles: {
      // Заголовок "Резюме"
      resumeTitle: {
        fontSize: 13,
        color: "#1e40af",
        margin: [0, 0, 0, 8],
        alignment: "center",
      },
      // ФИО - крупно и заметно
      headerName: {
        fontSize: 26,
        bold: true,
        color: "#1e3a8a",
        margin: [0, 0, 0, 3],
        alignment: "center",
      },
      // Должность
      headerTitle: {
        fontSize: 15,
        color: "#3b82f6",
        margin: [0, 0, 0, 2],
        alignment: "center",
      },

      // Заголовки секций
      sectionTitle: {
        fontSize: 14,
        bold: true,
        color: "#1e40af",
        margin: [0, 12, 0, 6],
        decoration: "underline",
        decorationStyle: "solid",
        decorationThickness: 2,
      },

      // Контакты
      contactText: {
        fontSize: 11,
        color: "#1f2937",
        margin: [0, 1, 0, 1],
      },

      // О себе
      aboutText: {
        fontSize: 12,
        color: "#000000",
        lineHeight: 1.5,
        margin: [0, 0, 0, 6],
        alignment: "left",
      },

      // Опыт работы
      jobPosition: {
        fontSize: 13.5,
        bold: true,
        color: "#059669",
        margin: [0, 0, 0, 1],
      },
      jobCompany: {
        fontSize: 12.5,
        bold: true,
        color: "#047857",
        margin: [0, 0, 0, 1],
      },
      jobPeriod: {
        fontSize: 11,
        color: "#6b7280",
        italics: true,
        margin: [0, 0, 0, 4],
      },
      jobDescription: {
        fontSize: 12,
        color: "#000000",
        margin: [0, 0, 0, 6],
        lineHeight: 1.5,
        alignment: "left",
      },
      techTags: {
        fontSize: 10.5,
        color: "#333333",
        margin: [0, 3, 0, 0],
      },

      // Навыки
      skillHeader: {
        fontSize: 12,
        bold: true,
        color: "#7c3aed",
        margin: [0, 0, 0, 4],
      },
      skillText: {
        fontSize: 12,
        color: "#000000",
        lineHeight: 1.5,
        alignment: "left",
      },

      // Языки
      languageHeader: {
        fontSize: 12,
        bold: true,
        color: "#dc2626",
        margin: [0, 0, 0, 4],
      },
      languageText: {
        fontSize: 12,
        color: "#000000",
        lineHeight: 1.5,
        alignment: "left",
      },

      // Образование
      eduDegree: {
        fontSize: 12,
        bold: true,
        color: "#dc2626",
        margin: [0, 0, 0, 1],
      },
      eduInstitution: {
        fontSize: 12,
        color: "#1f2937",
        margin: [0, 0, 0, 1],
      },
      eduPeriod: {
        fontSize: 11,
        color: "#6b7280",
        italics: true,
        margin: [0, 0, 0, 6],
      },
    },
    content: [
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
            lineColor: "#3b82f6",
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
        columns: [
          {
            width: "50%",
            stack: [
              {
                text: [
                  {
                    text: "Email: ",
                    fontSize: 11,
                    bold: true,
                    color: "#1e40af",
                  },
                  { text: translations.email, style: "contactText" },
                ],
              },
              ...(translations.phone
                ? [
                    {
                      text: [
                        {
                          text: lang === "ru" ? "Телефон: " : "Phone: ",
                          fontSize: 11,
                          bold: true,
                          color: "#1e40af",
                        },
                        { text: translations.phone, style: "contactText" },
                      ],
                    },
                  ]
                : []),
              {
                text: [
                  {
                    text: lang === "ru" ? "Местоположение: " : "Location: ",
                    fontSize: 11,
                    bold: true,
                    color: "#1e40af",
                  },
                  { text: translations.location, style: "contactText" },
                ],
              },
            ],
          },
          {
            width: "50%",
            stack: [
              {
                text: [
                  {
                    text: "GitHub: ",
                    fontSize: 11,
                    bold: true,
                    color: "#1e40af",
                  },
                  {
                    text: translations.github.replace(/github\.com\//, ""),
                    style: "contactText",
                    link: `https://${translations.github}`,
                  },
                ],
              },
              {
                text: [
                  {
                    text: "Telegram: ",
                    fontSize: 11,
                    bold: true,
                    color: "#1e40af",
                  },
                  {
                    text: translations.telegram,
                    style: "contactText",
                    link: `https://t.me/${translations.telegram.replace("@", "")}`,
                  },
                ],
              },
              ...(translations.linkedin
                ? [
                    {
                      text: [
                        {
                          text: "LinkedIn: ",
                          fontSize: 11,
                          bold: true,
                          color: "#1e40af",
                        },
                        {
                          text: "linkedin.com/in/CV",
                          style: "contactText",
                          link: `https://${translations.linkedin}`,
                        },
                      ],
                    },
                  ]
                : []),
              ...(translations.headhunter
                ? [
                    {
                      text: [
                        {
                          text: "HeadHunter: ",
                          fontSize: 11,
                          bold: true,
                          color: "#1e40af",
                        },
                        {
                          text: "hh.kz/CV",
                          style: "contactText",
                          link: `https://${translations.headhunter}`,
                        },
                      ],
                    },
                  ]
                : []),
            ],
          },
        ],
        columnGap: 15,
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

      // Технические навыки и Soft Skills рядом
      {
        columns: [
          {
            width: "50%",
            stack: [
              {
                text: translations.skillsTitle
                  .replace(/🚀\s*/, "")
                  .toUpperCase(),
                style: "sectionTitle",
              },
              {
                text: translations.technicalSkills
                  .map((skill) => skill.name)
                  .join(" • "),
                style: "skillText",
                margin: [0, 0, 0, 0],
              },
            ],
          },
          {
            width: "50%",
            stack: [
              {
                text: translations.softSkillsTitle
                  .replace(/💡\s*/, "")
                  .toUpperCase(),
                style: "sectionTitle",
              },
              {
                text: translations.softSkills.join(" • "),
                style: "skillText",
                margin: [0, 0, 0, 0],
              },
            ],
          },
        ],
        columnGap: 15,
        margin: [0, 0, 0, 0],
      },

      // Языки отдельным блоком внизу
      ...(translations.languages && translations.languages.length > 0
        ? [
            {
              text: translations.languagesTitle
                .replace(/🌐\s*/, "")
                .toUpperCase(),
              style: "sectionTitle",
              margin: [0, 12, 0, 6],
            },
            ...translations.languages.map((language) => ({
              text: `${language.name}: ${language.level}`,
              style: "languageText",
              margin: [0, 0, 0, 3],
            })),
          ]
        : []),

      // Опыт работы
      {
        text: translations.experienceTitle.replace(/💼\s*/, "").toUpperCase(),
        style: "sectionTitle",
      },
      ...translations.experiences.flatMap((job, index) => [
        {
          stack: [
            {
              columns: [
                {
                  width: "*",
                  stack: [
                    {
                      text: job.position,
                      style: "jobPosition",
                    },
                    {
                      text: job.company,
                      style: "jobCompany",
                    },
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
            },
          ],
          margin: [0, 0, 0, 2],
        },
        {
          text: job.description,
          style: "jobDescription",
        },
        ...(job.technologies && job.technologies.length > 0
          ? [
              {
                text: [
                  {
                    text: lang === "ru" ? "Технологии: " : "Technologies: ",
                    fontSize: 10.5,
                    bold: true,
                    color: "#059669",
                  },
                  {
                    text: job.technologies.join(" • "),
                    fontSize: 10.5,
                    color: "#047857",
                  },
                ],
                margin: [0, 3, 0, 0],
              },
            ]
          : [{ text: "", margin: [0, 0, 0, 0] }]),
        ...(index < translations.experiences.length - 1
          ? [
              {
                canvas: [
                  {
                    type: "line",
                    x1: 0,
                    y1: 0,
                    x2: 495,
                    y2: 0,
                    lineWidth: 1,
                    lineColor: "#999999",
                  },
                ],
                margin: [0, 10, 0, 10],
              },
            ]
          : []),
      ]),
    ],
  };

  // Генерируем и скачиваем PDF
  const fileName = `CV_${translations.name.replace(/\s+/g, "_")}_${lang === "ru" ? "RU" : "EN"}.pdf`;
  pdfMake.createPdf(docDefinition).download(fileName);
};
