import pdfMake from "pdfmake/build/pdfmake.min.js";
import { loadFonts } from "./fonts";
import { pdfStyles } from "./styles";
import { generateContent } from "./content";

const loadPdfLogo = async () => {
  try {
    const response = await fetch(`${import.meta.env.BASE_URL}cv-icon.svg`);
    if (!response.ok) {
      return null;
    }

    return await response.text();
  } catch {
    return null;
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
  const pdfLogo = await loadPdfLogo();

  const docDefinition = {
    pageSize: "A4",
    pageMargins: [40, 30, 40, 30],
    defaultStyle: {
      font: "Roboto",
      fontSize: 11.5,
      lineHeight: 1.3,
      color: "#000000",
    },
    styles: pdfStyles,
    content: generateContent(translations, lang, pdfLogo),
  };

  // Генерируем и скачиваем PDF
  const fileName = `CV_${translations.name.replace(/\s+/g, "_")}_${lang === "ru" ? "RU" : "EN"
    }.pdf`;
  pdfMake.createPdf(docDefinition).download(fileName);
};
