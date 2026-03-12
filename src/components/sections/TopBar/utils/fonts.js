import pdfMake from "pdfmake/build/pdfmake.min.js";

// Импорт шрифтов для поддержки кириллицы (Roboto поддерживает кириллицу)
let fontsLoaded = false;

export const loadFonts = async () => {
    if (fontsLoaded || pdfMake.vfs) {
        fontsLoaded = true;
        return;
    }

    try {
        // Пробуем разные способы импорта для совместимости с Vite
        const pdfFonts = await import("pdfmake/build/vfs_fonts.js");

        if (pdfFonts.default?.pdfMake?.vfs) {
            pdfMake.vfs = pdfFonts.default.pdfMake.vfs;
        } else if (pdfFonts.pdfMake?.vfs) {
            pdfMake.vfs = pdfFonts.pdfMake.vfs;
        } else if (pdfFonts.default) {
            pdfMake.vfs = pdfFonts.default;
        } else if (pdfFonts) {
            pdfMake.vfs = pdfFonts;
        }

        fontsLoaded = true;
    } catch (e) {
        try {
            const pdfFonts2 = await import("pdfmake/build/vfs_fonts");
            if (pdfFonts2.default?.pdfMake?.vfs) {
                pdfMake.vfs = pdfFonts2.default.pdfMake.vfs;
            } else if (pdfFonts2.pdfMake?.vfs) {
                pdfMake.vfs = pdfFonts2.pdfMake.vfs;
            } else if (pdfFonts2.default) {
                pdfMake.vfs = pdfFonts2.default;
            }
            fontsLoaded = true;
        } catch (e2) {
            console.error(
                "Failed to load pdfmake fonts. PDF generation may not work correctly.",
                e2
            );
        }
    }
};
