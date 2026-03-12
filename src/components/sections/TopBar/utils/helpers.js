/**
 * Сплит текста на предложения/пункты как на сайте
 */
export const splitDescription = (text) => {
    if (!text) return [];
    // Защищаем URL с точками
    const protectedText = text.replace(
        /([a-zA-Z0-9.-]+)\.(com|ru|org|net|kz|io|ai|me)/g,
        "$1[DOT]$2"
    );

    const chunks = protectedText
        .split(/\n|\s(?=\d+\))/) // Сплитим по новой строке или перед "1)", "2)" и т.д.
        .map((s) => s.trim())
        .filter((s) => s.length > 0)
        .flatMap((s) => {
            // Если строка длинная и содержит точки (не URL), сплитим по точкам
            if (s.length > 100 && s.includes(". ") && !/^\d+\)/.test(s)) {
                return s
                    .split(/\.\s+/)
                    .map((p) => p.trim())
                    .filter((p) => p.length > 0)
                    .map((p) => {
                        const cleanP = p.replace(/\[DOT\]/g, ".");
                        // Не добавляем точку, если предложение заканчивается на URL
                        if (/[a-zA-Z0-9.-]+\.[a-z]{2,}(\/[^\s]*)?$/.test(cleanP)) {
                            return p;
                        }
                        return p.endsWith(".") ? p : p + ".";
                    });
            }
            return [s];
        });

    // Восстанавливаем точки во всех чанках
    return chunks.map((chunk) => chunk.replace(/\[DOT\]/g, "."));
};

/**
 * Рендерит текст с кликабельными ссылками для pdfMake
 */
export const renderTextWithLinks = (text, baseStyle = {}) => {
    if (!text) return { text: "", ...baseStyle };
    // Улучшенное регулярное выражение: захватываем URL полностью, но исключаем знаки препинания в САМОМ конце
    const urlRegex =
        /(https?:\/\/[^\s]+?|github\.com\/[^\s]+?|pavlodar\.hh\.kz\/[^\s]+?|[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}|[a-zA-Z0-9.-]+\.[a-z]{2,}(?:\/[^\s]+?)?)(?=[.,!?;:]*(?:\s|$))/g;
    const parts = text.split(urlRegex);
    const matches = text.match(urlRegex);

    if (!matches) return { text, ...baseStyle };

    const spans = parts
        .map((part) => {
            if (part && matches.includes(part)) {
                const isEmail =
                    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(part);
                const url = isEmail
                    ? `mailto:${part}`
                    : part.startsWith("http")
                        ? part
                        : `https://${part}`;

                return {
                    text: part,
                    link: url,
                };
            }
            return part;
        })
        .filter((p) => p !== undefined && p !== "");

    return { text: spans, ...baseStyle };
};
