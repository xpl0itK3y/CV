import React, { useState, useEffect } from "react";
import GlassBlock from "../GlassBlock";

const Experience = ({ title, experience, totalExperience }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Функция для разбивки текста на предложения с защитой .com от переноса
  const splitIntoSentences = (text) => {
    // Заменяем точку в email на временный маркер
    const textWithProtectedEmails = text.replace(/@(\S+)\.com/g, "@$1[DOT]com");

    return textWithProtectedEmails
      .split(".")
      .map((sentence) => sentence.trim())
      .filter((sentence) => sentence.length > 0)
      .map((sentence) => {
        // Возвращаем точку обратно без пробела, но добавляем неразрывный пробел перед .com
        const fixedSentence = sentence.replace(/@(\S+)\[DOT\]com/g, "@$1.com");
        return fixedSentence + ".";
      });
  };

  return (
    <GlassBlock delay={0.3}>
      {title && (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: isMobile ? "1rem" : "1.5rem",
          }}
        >
          <h2
            style={{
              color: "#fff",
              marginTop: "0",
              fontSize: isMobile ? "1.3rem" : "1.5rem",
              marginBottom: "0",
            }}
          >
            {title}
          </h2>
          {totalExperience && (
            <div
              style={{
                border: "1px solid rgba(102, 126, 234, 0.7)",
                borderRadius: "12px",
                padding: isMobile ? "0.5rem 1rem" : "0.6rem 1.2rem",
                color: "#fff",
                fontSize: isMobile ? "1.0rem" : "1.1rem",
                fontWeight: "700",
                fontStyle: "italic",
              }}
            >
              {totalExperience}
            </div>
          )}
        </div>
      )}
      {experience.map((job, index) => (
        <div
          key={index}
          style={{
            marginBottom: "0",
            paddingBottom: "0",
            borderBottom: "none",
            position: "relative",
            paddingLeft: "1.5rem",
          }}
        >
          {/* Декоративная вертикальная линия слева */}
          <div
            style={{
              position: "absolute",
              left: "0",
              top: "0",
              bottom: "0",
              width: "4px",
              background: "linear-gradient(180deg, #667eea 0%, #764ba2 100%)",
              borderRadius: "2px",
              boxShadow: "0 0 15px rgba(102, 126, 234, 0.5)",
            }}
          />

          {/* Декоративная точка на линии */}
          <div
            style={{
              position: "absolute",
              left: "-4px",
              top: "8px",
              width: "12px",
              height: "12px",
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              borderRadius: "50%",
              border: "2px solid rgba(255, 255, 255, 0.3)",
              boxShadow:
                "0 0 15px rgba(102, 126, 234, 0.8), inset 0 0 5px rgba(255, 255, 255, 0.3)",
            }}
          />

          <h3
            style={{
              color: "#fff",
              margin: "0 0 0.75rem 0",
              fontSize: isMobile ? "1.15rem" : "1.3rem",
              fontWeight: "700",
              textShadow: "0 2px 10px rgba(102, 126, 234, 0.3)",
            }}
          >
            {job.position}
          </h3>

          <div
            style={{
              color: "rgba(255, 255, 255, 0.8)",
              fontSize: isMobile ? "0.9rem" : "0.95rem",
              marginBottom: "1rem",
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              flexWrap: "wrap",
              cursor: "default",
            }}
          >
            <span
              style={{
                fontWeight: "600",
                color: "#fff",
                background:
                  "linear-gradient(135deg, rgba(102, 126, 234, 0.2), rgba(118, 75, 162, 0.2))",
                padding: "0.25rem 0.75rem",
                borderRadius: "6px",
                border: "1px solid rgba(102, 126, 234, 0.3)",
              }}
            >
              {job.company}
            </span>

            <span
              style={{
                color: "rgba(102, 126, 234, 0.8)",
                fontSize: "1.2rem",
                lineHeight: "1",
              }}
            >
              •
            </span>

            <span
              style={{
                color: "rgba(255, 255, 255, 0.7)",
                fontStyle: "italic",
              }}
            >
              {job.period}
            </span>
          </div>

          {/* Описание с разбивкой на предложения */}
          <div
            style={{
              color: "rgba(255, 255, 255, 0.9)",
              lineHeight: "1.7",
              margin: "0 0 1rem 0",
              fontSize: isMobile ? "0.95rem" : "1rem",
              paddingLeft: "0.5rem",
              borderLeft: "2px solid rgba(102, 126, 234, 0.2)",
            }}
          >
            {splitIntoSentences(job.description).map(
              (sentence, sentenceIndex) => (
                <div key={sentenceIndex} style={{ marginBottom: "0.5rem" }}>
                  {sentence}
                </div>
              ),
            )}
          </div>

          {/* Технологии */}
          {job.technologies && job.technologies.length > 0 && (
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.5rem",
                marginTop: "1rem",
              }}
            >
              {job.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  style={{
                    background: "transparent",
                    border: "1px solid rgba(102, 126, 234, 0.5)",
                    padding: isMobile ? "0.3rem 0.6rem" : "0.4rem 0.75rem",
                    borderRadius: "8px",
                    color: "rgba(255, 255, 255, 0.9)",
                    fontSize: isMobile ? "0.8rem" : "0.85rem",
                    fontWeight: "500",
                    cursor: "default",
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
      ))}
    </GlassBlock>
  );
};

export default Experience;
