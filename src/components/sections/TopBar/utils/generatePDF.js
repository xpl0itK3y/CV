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

// Room a block needs left on the page when it starts, by headlineLevel:
// a section title wants a few lines of its content under it, a job its
// header and the first lines of the description
const KEEP_WITH_NEXT = { 1: 80, 2: 90 };

// A block that would start at the very bottom of a page, leaving a title
// there alone or splitting a job header, starts the next page instead
const pageBreakBefore = (node) => {
  const room = KEEP_WITH_NEXT[node.headlineLevel];
  if (!room) return false;

  const { verticalRatio, pageInnerHeight } = node.startPosition;
  return (1 - verticalRatio) * pageInnerHeight < room;
};

// Page number in the bottom right corner of every page
const footer = (currentPage, pageCount) => ({
  text: `${currentPage} / ${pageCount}`,
  style: "footer",
  alignment: "right",
  margin: [40, 12, 40, 0],
});

// Warms up the fonts chunk so the first download doesn't wait for it
export const preloadResumePDF = loadFonts;

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
    pageMargins: [40, 30, 40, 38],
    info: {
      title: `${translations.name} — ${translations.title}`,
      author: translations.name,
      subject: lang === "ru" ? "Резюме" : "Resume",
      keywords: translations.title,
    },
    language: lang === "ru" ? "ru-RU" : "en-US",
    defaultStyle: {
      font: "Roboto",
      fontSize: 11.5,
      lineHeight: 1.3,
      color: "#000000",
    },
    styles: pdfStyles,
    content: generateContent(translations, lang, pdfLogo),
    footer,
    pageBreakBefore,
  };

  // Генерируем и скачиваем PDF
  const fileName = `CV_${translations.name.replace(/\s+/g, "_")}_${lang === "ru" ? "RU" : "EN"
    }.pdf`;
  pdfMake.createPdf(docDefinition).download(fileName);
};
