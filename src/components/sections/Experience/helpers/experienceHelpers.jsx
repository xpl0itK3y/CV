import React from "react";

export const renderDescription = (text, styles = {}) => {
  // Улучшенное регулярное выражение: захватываем URL полностью, но исключаем знаки препинания в САМОМ конце
  const urlRegex =
    /(https?:\/\/[^\s]+?|github\.com\/[^\s]+?|pavlodar\.hh\.kz\/[^\s]+?|[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}|[a-zA-Z0-9.-]+\.(?!js\b)[a-z]{2,}(?:\/[^\s]+?)?)(?=[.,!?;:]*(?:\s|$))/g;
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

// A project's repository goes under its last point and closes its stretch
// of the rule. `links` follow the projects' order in the description
export const withProjectLinks = (items, links = []) => {
  if (!links.length) return items;
  let project = -1;
  let name = "";
  return items.flatMap((item) => {
    if (item.kind === "project") {
      project += 1;
      name = item.text;
    }
    const url = item.last && links[project];
    return url
      ? [{ ...item, last: false }, { kind: "link", url, name, inProject: true, last: true }]
      : [item];
  });
};

// Where the collapsed preview ends: after `max` sentences, links not counted,
// so a project's link is never what the fade swallows
export const previewEnd = (items, max) => {
  let count = 0;
  for (let i = 0; i < items.length; i += 1) {
    if (items[i].kind !== "link") count += 1;
    if (count === max) return i + 1;
  }
  return items.length;
};

export const splitIntoSentences = (text) => {
  // Names like "Next.js" keep their dot too
  const textWithProtectedUrls = text
    .replace(/([a-zA-Z0-9.-]+)\.(com|ru|org|net|kz|io|ai|me)/g, "$1[DOT]$2")
    .replace(/\b([a-zA-Z0-9]+)\.js\b/g, "$1[DOT]js");

  return textWithProtectedUrls
    .split(/\.|\n/)
    .map((sentence) => sentence.trim())
    .filter((sentence) => sentence.length > 0)
    .map((sentence) => {
      const fixedSentence = sentence.replace(/\[DOT\]/g, ".");
      // Не добавляем точку, если предложение заканчивается или является URL
      if (/[a-zA-Z0-9.-]+\.(?!js\b)[a-z]{2,}(?:\/[^\s,.]*[^/\s,.])?$/.test(fixedSentence)) {
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
