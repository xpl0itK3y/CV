import React from "react";

export const renderDescription = (text, styles = {}) => {
  const projectTitleRegex = /^(\s*\d+\)\s+[^.]+)/;
  const projectMatch = text.match(projectTitleRegex);

  if (projectMatch) {
    const title = projectMatch[1];
    const rest = text.slice(title.length);
    return (
      <>
        <span className={styles.projectTitle}>
          {title}
        </span>
        {renderDescription(rest, styles)}
      </>
    );
  }

  // Улучшенное регулярное выражение: захватываем URL полностью, но исключаем знаки препинания в САМОМ конце
  const urlRegex =
    /(https?:\/\/[^\s]+?|github\.com\/[^\s]+?|pavlodar\.hh\.kz\/[^\s]+?|[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}|[a-zA-Z0-9.-]+\.[a-z]{2,}(?:\/[^\s]+?)?)(?=[.,!?;:]*(?:\s|$))/g;
  const parts = text.split(urlRegex);
  const matches = text.match(urlRegex);

  if (!matches) return text;

  return parts.map((part, i) => {
    if (part && matches.includes(part)) {
      const isEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
        part,
      );
      const url = isEmail
        ? `mailto:${part}`
        : part.startsWith("http")
          ? part
          : `https://${part}`;

      return (
        <a
          key={i}
          href={url}
          target={isEmail ? "_self" : "_blank"}
          rel="noopener noreferrer"
          className={styles.jobLink}
        >
          {part}
        </a>
      );
    }
    return part;
  });
};

export const splitIntoSentences = (text) => {
  const textWithProtectedUrls = text.replace(
    /([a-zA-Z0-9.-]+)\.(com|ru|org|net|kz|io|ai|me)/g,
    "$1[DOT]$2",
  );

  return textWithProtectedUrls
    .split(/\.|\n/)
    .map((sentence) => sentence.trim())
    .filter((sentence) => sentence.length > 0)
    .map((sentence) => {
      const fixedSentence = sentence.replace(/\[DOT\]/g, ".");
      // Не добавляем точку, если предложение заканчивается или является URL
      if (/[a-zA-Z0-9.-]+\.[a-z]{2,}(?:\/[^\s,.]*[^/\s,.])?$/.test(fixedSentence)) {
        return fixedSentence;
      }
      if (/^\d+\)/.test(fixedSentence)) {
        return fixedSentence;
      }
      if (/[.:!?]$/.test(fixedSentence)) {
        return fixedSentence;
      }
      return fixedSentence + ".";
    });
};
