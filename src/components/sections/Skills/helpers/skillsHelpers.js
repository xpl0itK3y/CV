// Функция для получения цвета навыка
export const getSkillColor = (skillName) => {
  const name = skillName.toLowerCase();

  // Frontend
  if (name.includes("react")) return "#61DAFB";
  if (name.includes("nextjs") || name.includes("next.js")) return "#ffffff";
  if (name.includes("typescript")) return "#3178C6";
  if (name.includes("javascript")) return "#F7DF1E";
  if (name.includes("vue.js") || name.includes("vuejs")) return "#4FC08D";
  if (name.includes("html5")) return "#E34F26";
  if (name.includes("css3")) return "#1572B6";
  if (name.includes("tailwind")) return "#38bdf8";
  if (name.includes("bootstrap")) return "#7952B3";

  // Backend & AI
  if (name.includes("python")) return "#3776AB";
  if (name.includes("fastapi")) return "#05998B";
  if (name.includes("django")) return "#092E20";
  if (name.includes("flask")) return "#010101";
  if (name.includes("sqlalchemy")) return "#ca2727";
  if (name.includes("graphql")) return "#E10098";
  if (name.includes("pandas")) return "#150458";
  if (name.includes("numpy")) return "#013243";
  if (name.includes("pytorch")) return "#EE4C2C";
  if (name.includes("tensorflow")) return "#FF6F00";
  if (name.includes("jupyter")) return "#F37626";
  if (name.includes("streamlit")) return "#FF4B4B";
  if (name.includes("elasticsearch")) return "#005571";
  if (name.includes("prisma")) return "#2D3748";

  // Databases
  if (name.includes("postgresql")) return "#336791";
  if (name.includes("mongodb")) return "#47A248";
  if (name.includes("redis")) return "#DC382D";
  if (name.includes("mysql")) return "#4479A1";
  if (name.includes("sqlite")) return "#003B57";

  // DevOps & Infrastructure
  if (name.includes("docker")) return "#2496ED";
  if (name.includes("git") && !name.includes("hub") && !name.includes("lab"))
    return "#F34F29";
  if (name.includes("prometheus")) return "#E6522C";
  if (name.includes("grafana")) return "#F46800";
  if (name.includes("nginx")) return "#009900";
  if (name.includes("linux")) return "#333333";
  if (name.includes("bash")) return "#293138";
  if (name.includes("aws") || name.includes("amazon")) return "#FF9900";
  if (name.includes("google cloud") || name.includes("gcp")) return "#4285F4";
  if (name.includes("digitalocean")) return "#0080ff";
  if (name.includes("vercel")) return "#000000";
  if (name.includes("azure")) return "#008AD7";
  if (name.includes("firebase")) return "#FFCA28";
  if (name.includes("supabase")) return "#3ECF8E";
  if (name.includes("heroku")) return "#430098";
  if (name.includes("railway")) return "#ffffff";
  if (name.includes("traefik")) return "#24A1C1";
  if (name.includes("selenium")) return "#CF0A2C";
  if (name.includes("pinecone")) return "#00CC96";
  if (name.includes("weaviate")) return "#FA0141";
  if (name.includes("chroma")) return "#FBB03B";
  if (name.includes("qdrant")) return "#00D2FF";
  if (name.includes("faiss")) return "#0467DF";
  if (name.includes("rest api") || name.includes("restapi")) return "#005C97";
  if (name.includes("websockets")) return "#E44D26";
  if (name.includes("sse")) return "#43B02A";

  // Testing
  if (name.includes("jest")) return "#99425B";
  if (name.includes("github actions")) return "#2088ff";
  if (name.includes("pytest")) return "#0A9EDC";

  return "#61DAFB";
};

export const getSkillIcon = (skillName) => {
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
    sqlite: "sqlite",
    prometheus: "prometheus",
    grafana: "grafana",
    pytorch: "pytorch",
    tensorflow: "tensorflow",
    numpy: "numpy",
    sqlalchemy: "sqlalchemy",
    flask: "flask",
    graphql: "graphql",
    bash: "bash",
    aws: "amazonwebservices",
    amazonwebservices: "amazonwebservices",
    googlecloud: "googlecloud",
    gcp: "googlecloud",
    digitalocean: "digitalocean",
    vercel: "vercel",
    azure: "azure",
    bootstrap: "bootstrap",
    firebase: "firebase",
    heroku: "heroku",
    jupyter: "jupyter",
    prisma: "prisma",
    selenium: "selenium",
    supabase: "supabase",
    traefika: "traefikproxy",
    traefik: "traefikproxy",
    traefikproxy: "traefikproxy",
    elasticsearch: "elasticsearch",
    railway: "railway",
    streamlit: "streamlit",
    css3: "css3",
    pinecone: "pinecone",
    weaviate: "weaviate",
    chromadb: "chromadb",
    chroma: "chromadb",
    qdrant: "qdrant",
    faiss: "faiss",
    restapi: "restapi",
    websockets: "websockets",
    sse: "sse",
  };

  const iconFolder = iconMap[name] || name;

  const specialCases = {
    django: ["plain", "original", "line"],
    nginx: ["original", "plain", "line"],
    githubactions: ["original", "plain", "line"],
    jest: ["plain", "original", "line"],
    amazonwebservices: ["original-wordmark", "plain-wordmark", "line-wordmark"],
    graphql: ["plain", "plain-wordmark"],
    flask: ["original", "original-wordmark"],
    sqlalchemy: ["plain", "original", "plain-wordmark", "original-wordmark"],
    bash: ["plain", "original"],
    pandas: ["original", "plain"],
    azure: ["original", "plain"],
    bootstrap: ["plain"],
    elasticsearch: ["original", "plain"],
    firebase: ["plain"],
    heroku: ["original", "plain"],
    prisma: ["original", "original-wordmark"],
    railway: ["original", "original-wordmark"],
    selenium: ["original"],
    streamlit: ["original", "plain"],
    supabase: ["original", "plain"],
    traefikproxy: ["original", "original-wordmark"],
  };

  const fileVariants = specialCases[iconFolder] || [
    "original",
    "plain",
    "line",
  ];
  const baseUrl = import.meta.env.BASE_URL || "/";
  const iconPath = `${baseUrl}icons/${iconFolder}/${iconFolder}-${fileVariants[0]}.svg`;

  return iconPath;
};
