export function getSkillIcon(skillName) {
    const name = skillName.toLowerCase().replace(/\s+/g, "").replace(/\//g, "");

    const iconMap = {
        "reactnext.js": "react",
        "react/next.js": "react",
        react: "react",
        nextjs: "nextjs",
        "next.js": "nextjs",
        typescript: "typescript",
        javascript: "javascript",
        "vue.js": "vuejs",
        vuejs: "vuejs",
        vue: "vuejs",
        html5: "html5",
        csstailwind: "css3",
        "css/tailwind": "css3",
        css: "css3",
        tailwind: "tailwindcss",
        tailwindcss: "tailwindcss",
        "node.js": "nodejs",
        nodejs: "nodejs",
        python: "python",
        fastapi: "fastapi",
        django: "django",
        pandas: "pandas",
        php: "php",
        laravel: "laravel",
        symfony: "symfony",
        go: "go",
        aiogram: "python",
        telethon: "python",
        telegrambotapi: "python",
        postgresql: "postgresql",
        mongodb: "mongodb",
        redis: "redis",
        mysql: "mysql",
        docker: "docker",
        kubernetes: "kubernetes",
        git: "git",
        gitlab: "gitlab",
        nginx: "nginx",
        linux: "linux",
        jest: "jest",
        githubactions: "githubactions",
        pytest: "pytest",
    };

    const iconFolder = iconMap[name] || name;

    const specialCases = {
        django: ["plain", "original", "line"],
        nginx: ["original", "plain", "line"],
        githubactions: ["original", "plain", "line"],
        jest: ["plain", "original", "line"],
    };

    const fileVariants = specialCases[iconFolder] || [
        "original",
        "plain",
        "line",
    ];
    const baseUrl = import.meta.env.BASE_URL || "/";
    const iconPath = `${baseUrl}icons/${iconFolder}/${iconFolder}-${fileVariants[0]}.svg`;

    return iconPath;
}
