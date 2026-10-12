export const pdfStyles = {
    // Core palette synced with the website's magenta/teal glass theme.
    // Заголовок "Резюме"
    resumeTitle: {
        fontSize: 18,
        bold: true,
        color: "#7a1f49",
        margin: [0, 0, 0, 10],
        alignment: "center",
    },
    // ФИО - крупно и заметно
    headerName: {
        fontSize: 26,
        bold: true,
        color: "#8f2958",
        // Large type reads better a touch tighter
        characterSpacing: -0.3,
        margin: [0, 0, 0, 3],
        alignment: "center",
    },
    // Должность
    headerTitle: {
        fontSize: 15,
        color: "#4b8f97",
        characterSpacing: 0.3,
        margin: [0, 0, 0, 2],
        alignment: "center",
    },

    // Заголовки секций: разрядка вместо подчёркивания, линию рисует content.js
    sectionTitle: {
        fontSize: 12.5,
        bold: true,
        color: "#7a1f49",
        characterSpacing: 1.2,
    },
    // Общий стаж справа от заголовка, на одной базовой линии с ним
    sectionAside: {
        fontSize: 11,
        bold: true,
        italics: true,
        color: "#4b8f97",
        alignment: "right",
        margin: [0, 1.4, 0, 0],
    },

    // Контакты
    contactText: {
        fontSize: 11,
        color: "#2b1a22",
        margin: [0, 1, 0, 1],
    },
    // Подписи мелкие, капсом и с разрядкой, как на сайте
    contactLabel: {
        fontSize: 8.5,
        bold: true,
        color: "#4b8f97",
        characterSpacing: 0.8,
        margin: [0, 0, 0, 1],
    },
    contactValue: {
        fontSize: 11.5,
        color: "#2b1a22",
    },

    // О себе
    aboutText: {
        fontSize: 12,
        color: "#1d1116",
        lineHeight: 1.35,
        // Justify left wide gaps after the hyphenated words
        alignment: "left",
    },

    // Опыт работы
    jobPosition: {
        fontSize: 13.5,
        bold: true,
        color: "#8f2958",
        margin: [0, 0, 0, 1],
    },
    jobCompany: {
        fontSize: 12.5,
        bold: true,
        color: "#4b8f97",
        margin: [0, 0, 0, 1],
    },
    jobPeriod: {
        fontSize: 11,
        color: "#6f5964",
        italics: true,
        alignment: "right",
        // Sits on the baseline of the position next to it
        margin: [0, 2.3, 0, 0],
    },
    jobDescription: {
        fontSize: 12,
        color: "#1d1116",
        margin: [0, 0, 0, 6],
        lineHeight: 1.3,
        alignment: "left",
    },
    projectTitle: {
        fontSize: 12,
        bold: true,
        color: "#d14b88",
        margin: [0, 4, 0, 2],
    },
    // Author, licence and platforms under a project's name
    projectMeta: {
        fontSize: 10.5,
        color: "#6f5964",
        margin: [0, 1, 0, 0],
    },
    stackTitle: {
        fontSize: 10,
        bold: true,
        color: "#4b8f97",
        characterSpacing: 1,
        margin: [0, 0, 0, 4],
    },
    stackLabel: {
        bold: true,
        color: "#8f2958",
    },
    stackText: {
        fontSize: 11.5,
        color: "#1d1116",
        lineHeight: 1.3,
        margin: [0, 1, 0, 1],
    },
    techTags: {
        fontSize: 10.5,
        color: "#3d2931",
        margin: [0, 3, 0, 0],
    },

    // Навыки
    skillHeader: {
        fontSize: 11,
        bold: true,
        color: "#4b8f97",
        margin: [0, 0, 0, 2],
    },
    skillText: {
        fontSize: 12,
        color: "#1d1116",
        lineHeight: 1.3,
        alignment: "left",
    },

    // Языки
    languageHeader: {
        fontSize: 12,
        bold: true,
        color: "#8f2958",
        margin: [0, 0, 0, 4],
    },
    languageText: {
        fontSize: 12,
        color: "#1d1116",
        lineHeight: 1.3,
        alignment: "left",
    },

    // Образование
    eduDegree: {
        fontSize: 12,
        bold: true,
        color: "#4b8f97",
        margin: [0, 0, 0, 1],
    },
    eduInstitution: {
        fontSize: 12,
        color: "#2b1a22",
        margin: [0, 0, 0, 1],
    },
    eduPeriod: {
        fontSize: 11,
        color: "#6f5964",
        italics: true,
        alignment: "right",
        margin: [0, 0.9, 0, 0],
    },

    // Колонтитул
    footer: {
        fontSize: 8.5,
        color: "#9b8a92",
        lineHeight: 1,
    },
};
