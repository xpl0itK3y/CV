import React from "react";
import { DownloadIcon } from "../helpers/topBarIcons";
import styles from "../styles/TopBar.module.css";

// pdfmake is ~1.4 MB, so it loads only when a download is about to happen:
// hover or focus starts fetching it (and its fonts) ahead of the click.
const loadPdfGenerator = () => import("../utils/generatePDF");

const preloadPdfGenerator = () => {
  loadPdfGenerator()
    .then(({ preloadResumePDF }) => preloadResumePDF())
    .catch(() => {
      // The click retries the import and reports the failure
    });
};

const DownloadButton = ({ translations, currentLang, isMobile }) => {
  const handleDownloadResume = async () => {
    try {
      const { generateResumePDF } = await loadPdfGenerator();
      await generateResumePDF(translations, currentLang);
    } catch (error) {
      console.error("Error generating PDF:", error);
      alert(
        currentLang === "ru"
          ? "Ошибка при генерации PDF. Пожалуйста, попробуйте еще раз."
          : "Error generating PDF. Please try again.",
      );
    }
  };

  return (
    <button
      onClick={handleDownloadResume}
      onPointerEnter={preloadPdfGenerator}
      onFocus={preloadPdfGenerator}
      className={
        isMobile ? styles.downloadButtonMobile : styles.downloadButtonDesktop
      }
      title={translations.downloadResume}
    >
      <DownloadIcon />
      {!isMobile && <span>{translations.downloadResume}</span>}
    </button>
  );
};

export default DownloadButton;
