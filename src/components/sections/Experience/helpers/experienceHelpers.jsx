import React from "react";

export const renderDescription = (text, styles = {}) => {
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

// Sorts the sentences into plain text, project names ("1) Name") and points
// ("- Point"). The points under a name belong to that project, so it can be
// drawn as one stretch of the rule; `last` marks where that stretch ends
export const classifySentences = (sentences) => {
  let inProject = false;
  const items = sentences.map((sentence) => {
    const name = sentence.match(/^\d+\)\s*(.+)$/s);
    if (name) {
      inProject = true;
      return { kind: "project", text: name[1], inProject };
    }
    const point = sentence.match(/^-\s*(.+)$/s);
    if (!point) inProject = false;
    return point
      ? { kind: "point", text: point[1], inProject }
      : { kind: "text", text: sentence, inProject };
  });
  return items.map((item, index) => ({
    ...item,
    last: item.inProject && items[index + 1]?.kind !== "point",
  }));
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
