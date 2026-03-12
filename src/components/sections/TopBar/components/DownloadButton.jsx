import React from "react";
import { generateResumePDF } from "../utils/generatePDF";
import { DownloadIcon } from "../helpers/topBarIcons";
import styles from "../styles/TopBar.module.css";

const DownloadButton = ({ translations, currentLang, isMobile }) => {
  const handleDownloadResume = async () => {
    try {
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
