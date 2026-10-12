const translations = {
  ru: {
    // TopBar
    portfolio: "CV",
    downloadResume: "Скачать CV",
    readMore: "Читать далее",
    readLess: "Свернуть",
    stackTitle: "Стек технологий",
    showAllTech: "Показать всё",
    hideTech: "Скрыть",
    sourceCode: "Исходный код",

    // Header
    name: "Денис Максимович",
    title: "Python Backend and AI Engineer",

    // About
    aboutTitle: "О себе",
    aboutText:
      "Python Engineer с треком от backend-разработки к AI-инженерии и 2 годами опыта. Начинал с построения сервисов на FastAPI и Django, проектирования баз данных PostgreSQL, Redis, контейнеризации Docker и участия в развитии микросервисной архитектуры. Постепенно сфокусировался на AI-направлении теперь создаю решения с использованием LLM и RAG для прикладных бизнес-задач. Сильный бэкенд-фундамент позволяет мне доводить AI-функциональность до надёжных, масштабируемых production-систем. Ищу позиции AI Engineer в продуктовых командах, где смогу приносить максимальную пользу на стыке инженерии и искусственного интеллекта.",
    aboutFacts: [
      { label: "Возраст", value: "24 года" },
      { label: "Гражданство", value: "Казахстан" },
      { label: "Удалённая работа", value: "Готов" },
      { label: "Командировки", value: "Не готов" },
    ],

    // Contacts
    contactsTitle: "Контакты",
    email: "latundenis55@icloud.com",
    // phone: "",
    location: "Казахстан",
    github: "github.com/xpl0itK3y",
    telegram: "@yubikorm",
    linkedin: "www.linkedin.com/in/denis-latun-556090367",
    headhunter:
      "astana.hh.kz/resume/1c636390ff103c310a0039ed1f304c43507534?customDomain=1&overRideDomainAreaId=159",

    // Experience
    experienceTitle: "Опыт работы",
    totalExperience: "2 года",
    experiences: [
      {
        position: "AI Engineer (Personal Projects)",
        company: "Open Source / GitHub",
        period: "Февраль 2026 - настоящее время",
        employment: "Профессиональное обучение",
        // One per project in the description, in its order
        projectLinks: [
          "https://github.com/Modern-Messiah/Multi-language-RAG-Document-Assistant",
          "https://github.com/xpl0itK3y/multi-agent-search",
          "https://github.com/Modern-Messiah/AI-AGENT-PLATFORM-",
          "https://github.com/Modern-Messiah/Autonomous-Personal-Assistant-AI-Agent-",
        ],
        description:
          "Разрабатываю AI решения и open-source проекты в свободное время для углубления практической экспертизы в области RAG, мультиагентных систем, distributed architecture и applied AI. 1) Multi-language RAG Document Assistant. - Разработал RAG-ассистента для вопросов по документам на 8 языках, включая казахский: FastAPI-бэкенд, Streamlit-интерфейс, Telegram-бот и стриминг ответов со ссылками на источники. - Построил двухэтапный поиск: ChromaDB и BM25 через Reciprocal Rank Fusion отбирают кандидатов, затем cross-encoder (FlashRank / Cohere) перепроверяет каждого на соответствие вопросу; качество измерял на SberQuAD и других датасетах с Hugging Face через Langfuse. - Подготовил к эксплуатации: работа на ключе пользователя для 5 LLM-провайдеров без его хранения, квоты, бэкапы и CI с проверкой Docker-образа. 2) Multi-Agent Deep Research System. - Разработал систему глубокого исследования: оркестратор делит запрос на подзадачи, воркеры параллельно ищут и извлекают контент, а граф на LangGraph при слабом покрытии дособирает источники и пишет отчёт с цитатами. - Построил слой проверки отчёта: аудит цитат, red-team с поиском контраргументов, сверка чисел с источниками, выявление перепечаток одной новости и отозванных статей через Crossref; всё сводится в оценку доверия solid / contested / speculative. - Спроектировал отказоустойчивую очередь на PostgreSQL и Redis: lease, повторы, dead-letter и продолжение графа с последнего шага после падения воркера; прогресс стримится по SSE, мониторинг на Prometheus, Grafana и Loki. 3) Self-hosted RAG-платформа для работы с приватной базой знаний. - Разработал AI-ассистента: документы, сканы и изображения проходят OCR и Vision-анализ в durable workflows Temporal, а ответы стримятся по SSE со ссылками на источники. - Построил двухэтапный поиск: гибрид pgvector и полнотекстового поиска PostgreSQL отбирает кандидатов, а LLM-реранкер оценивает их по вопросу; готовый ответ дополнительно сверяется с источниками по предложениям, и без подтверждения ассистент отказывается отвечать. - Реализовал агентов на PydanticAI, семантический кэш на Redis, учёт стоимости LLM в ClickHouse, изоляцию тенантов через RLS в PostgreSQL, observability через Logfire и CI с порогом качества поиска recall@5 от 90%. 4) Krisha Agent - Autonomous Real Estate AI Agent. - Разработал Telegram-ассистента для поиска квартир на Krisha.kz: пайплайн на LangGraph разбирает запрос, парсит объявления через Playwright, параллельно обогащает их инфраструктурой рядом (OSM / 2GIS) и расчётом ипотеки, а DeepSeek оценивает каждое объявление. - Добавил память и персонализацию: чекпоинты графа в PostgreSQL, рекомендации по сохранённым и отклонённым квартирам, фоновый мониторинг новых объявлений на ARQ и экспорт избранного в Notion. - Подготовил к эксплуатации: лимиты запросов и бюджета платных поисков, защиту от prompt injection в описаниях, canary-проверку парсера с алертом админу, Sentry и LangSmith, CI с mypy strict и циклом миграций Alembic.",
        techGroups: [
          {
            label: "Языки",
            items: ["Python", "JavaScript", "TypeScript"],
          },
          {
            label: "Backend и Frontend",
            items: [
              "FastAPI",
              "Uvicorn",
              "Aiogram",
              "python-telegram-bot",
              "Streamlit",
              "Trafilatura",
              "Playwright",
              "BeautifulSoup",
              "Pydantic",
              "PydanticAI",
              "aiohttp",
              "httpx",
              "Nginx",
              "Vue 3",
              "Vite",
              "Pinia",
              "Vue Router",
              "Vue I18n",
              "Tailwind CSS",
              "markdown-it",
              "KaTeX",
              "PyO3/maturin",
              "ReportLab",
              "python-docx",
              "Vanilla JavaScript",
            ],
          },
          {
            label: "AI / LLM",
            items: [
              "OpenAI API",
              "DeepSeek API",
              "Moonshot/Kimi API",
              "LangChain",
              "LangGraph",
              "LangSmith",
              "RAG",
              "Chroma",
              "BM25",
              "FlashRank",
              "Cohere Rerank",
              "pgvector",
              "fastembed",
              "PaddleOCR",
              "Structured Outputs",
              "Function Calling",
            ],
          },
          {
            label: "Базы данных и очереди",
            items: [
              "PostgreSQL",
              "PgBouncer",
              "JSONB",
              "pgvector",
              "SQLite",
              "MongoDB",
              "Redis",
              "Celery",
              "ARQ",
              "Temporal",
              "ClickHouse",
              "MinIO",
              "Alembic",
            ],
          },
          {
            label: "DevOps и Web",
            items: [
              "Docker",
              "Docker Compose",
              "Podman",
              "GitHub Actions",
              "SSE",
              "WebSockets",
              "JWT",
              "Google OAuth2",
              "CSRF",
              "Sentry",
              "Langfuse",
              "Logfire",
              "OpenTelemetry",
              "Prometheus",
              "Grafana",
              "Loki",
              "Promtail",
            ],
          },
          {
            label: "Интеграции и источники данных",
            items: [
              "DuckDuckGo Search",
              "Tavily API",
              "Crossref API",
              "2GIS API",
              "OpenStreetMap",
              "Notion API",
              "GitHub source ingestion",
              "URL / HTTP fetch ingestion",
            ],
          },
        ],
      },
      {
        position: "Backend Developer (Contract)",
        company: "Private Startup (NDA)",
        period: "Июнь 2025 - Май 2026",
        employment: "Полная занятость",
        description:
          "По контракту в кросс-функциональной команде разрабатывал production-платформу реального времени на Replit, которая сводит данные компании из разных систем в наглядные дашборды. - Разрабатывал сбор данных в реальном времени из 1С, Битрикс, Documentolog и других источников и их подготовку для дашбордов. - Платформа разрослась, и искать в ней данные стало неудобно: обернул её в MCP-сервер и написал инструменты для AI-агента, чтобы через Claude Code нужную информацию можно было получить обычным запросом. - Защитил доступ двухфакторной аутентификацией: даже с украденным токеном злоумышленник не войдёт без второго фактора.",
        techGroups: [
          {
            label: "Языки",
            items: ["Python"],
          },
          {
            label: "AI и LLM",
            items: [
              "MCP",
              "Claude Code",
              "OpenAI API",
              "Prompt Engineering",
              "Structured Outputs (JSON)",
              "Pydantic валидация",
              "NLP",
              "LLM кэширование и retry/rate limiting",
            ],
          },
          {
            label: "Backend",
            items: [
              "FastAPI",
              "Pydantic",
              "SQLAlchemy",
              "REST API",
              "Microservices",
              "asyncio",
              "Multiprocessing",
            ],
          },
          {
            label: "Интеграции",
            items: ["1С", "Битрикс", "Documentolog"],
          },
          {
            label: "Базы данных и кэширование",
            items: ["PostgreSQL", "Redis"],
          },
          {
            label: "DevOps и мониторинг",
            items: [
              "Replit",
              "Docker",
              "Docker Compose",
              "Prometheus",
              "Grafana",
              "ELK Stack",
            ],
          },
          {
            label: "Безопасность и тестирование",
            items: ["2FA", "JWT", "bcrypt", "Fernet", "Pytest", "Locust"],
          },
        ],
      },
      {
        position: "Full-Stack Developer (Freelance)",
        company: "Проекты на заказ",
        period: "Август 2024 - Февраль 2025",
        employment: "Проектная работа",
        description:
          "Разрабатывал веб-приложения и AI-сервисы на заказ вместе с напарником: вели проекты от обсуждения задачи с заказчиком до сдачи. 1) Генератор детских сказок для школы. - Разработал веб-приложение на Next.js и TypeScript, которое пишет сказки с помощью LLM по возрасту, жанру, языку и героям и выводит текст по мере генерации. - Сделал потоковую генерацию через Vercel AI SDK и xAI API, отдельные промпты на русском и казахском и историю сказок в PostgreSQL через Prisma. - Собрал интерфейс на React, Tailwind CSS и React Hook Form с проверкой на Zod, написал тесты на Vitest и упаковал всё в Docker Compose. 2) Мини-CRM для магазина. - Разработал CRM на Next.js и TypeScript для заявок с сайта магазина: встраиваемый виджет и страница статуса заявки для клиента. - Сделал рабочий стол менеджера с очередью, фильтрами, приоритетами и сроками ответа, ролями на Better Auth и сводкой за день, неделю и месяц. - Добавил защиту публичных форм от спама и перебора, хранение в SQLite через Drizzle ORM и тесты основных сценариев. 3) AI-ассистент для цветочного магазина. - Разработал Telegram-бота поддержки покупателей на TypeScript и OpenAI API: он отвечает на вопросы о доставке, оплате и режиме работы магазина. - Подключил бота к каталогу магазина: он находит товары по запросу покупателя и сообщает цены и наличие.",
        techGroups: [
          {
            label: "Языки",
            items: ["TypeScript", "JavaScript"],
          },
          {
            label: "Frontend",
            items: [
              "React",
              "Next.js",
              "Tailwind CSS",
              "React Hook Form",
              "Motion",
            ],
          },
          {
            label: "Backend и базы данных",
            items: [
              "Node.js",
              "Next.js API",
              "REST API",
              "Telegram Bot API",
              "Server-Sent Events",
              "Zod",
              "Better Auth",
              "Prisma",
              "Drizzle ORM",
              "PostgreSQL",
              "SQLite",
            ],
          },
          {
            label: "AI и LLM",
            items: [
              "Vercel AI SDK",
              "OpenAI API",
              "xAI API",
              "Prompt Engineering",
              "Streaming",
            ],
          },
          {
            label: "Тестирование и DevOps",
            items: ["Vitest", "Docker", "Docker Compose"],
          },
        ],
      },
      {
        position: "Python/Django Developer (Diploma Project)",
        company: "Комитет по делам молодежи ИнЕУ",
        period: "Февраль 2024 - Июнь 2024",
        employment: "Стажировка",
        description:
          "Самостоятельно разработал веб-платформу для молодежных клубов университета на Django в формате информационно-управляющего портала. - Реализовал backend и frontend логику приложения: новости и мероприятия, клубы, фотогалерею, страницы руководства, личные кабинеты студентов и руководителей, а также подачу заявок в клубы и на мероприятия. - Настроил систему регистрации, авторизации, восстановления доступа и ролевую модель пользователей с использованием Django Auth, Group и Django ORM. - Реализовал внутренние чаты, публикацию клубных новостей, комментарии, лайки и управление участниками клубов. - Использовал server-side rendering на Django Templates, SQLite для хранения данных и JavaScript для отдельных интерактивных сценариев. - Выполнил контейнеризацию приложения с помощью Docker и подготовил проект к развертыванию, что упростило деплой, воспроизводимость окружения и сопровождение. - Дополнительно настроил Django Admin для управления контентом и основными сущностями системы.",

        techGroups: [
          {
            label: "Языки",
            items: ["Python", "JavaScript"],
          },
          {
            label: "Backend и базы данных",
            items: ["Django", "Django ORM", "Django Auth", "SQLite"],
          },
          {
            label: "Frontend",
            items: ["HTML", "CSS", "Django Templates"],
          },
          {
            label: "DevOps and Tools",
            items: ["Docker", "Linux", "Django Admin"],
          },
        ],
      },
    ],

    // Education
    educationTitle: "Образование",
    education: [
      {
        degree: "Бакалавр, Вычислительная техника и программное обеспечение",
        institution: "Инновационный Евразийский университет",
        period: "2020 - 2024",
      },
    ],

    // Skills
    skillsTitle: "Технические навыки",
    softSkillsTitle: "Мягкие навыки",
    workPracticesTitle: "Подходы к работе",
    languagesTitle: "Языки",
    technicalSkills: [
      {
        category: "Языки",
        items: [
          { name: "Python", level: 90 },
          { name: "JavaScript", level: 90 },
          { name: "TypeScript", level: 85 },
          { name: "Bash", level: 85 },
        ],
      },
      {
        category: "Backend",
        items: [
          { name: "FastAPI", level: 90 },
          { name: "Django", level: 85 },
          { name: "Flask", level: 80 },
          { name: "SQLAlchemy", level: 85 },
          { name: "Prisma", level: 80 },
          { name: "Temporal", level: 75 },
        ],
      },
      {
        category: "AI-агенты и инструменты",
        items: [
          { name: "LangGraph", level: 90 },
          { name: "CrewAI", level: 85 },
          { name: "Pydantic AI", level: 85 },
          { name: "MCP", level: 80 },
          { name: "Honcho", level: 75 },
          { name: "Replit", level: 85 },
          { name: "Claude Code", level: 90 },
          { name: "Codex", level: 80 },
          { name: "OpenCode", level: 75 },
          { name: "Antigravity", level: 75 },
          { name: "Cursor", level: 90 },
          { name: "OpenClaw", level: 75 },
          { name: "Hermes Agent", level: 75 },
        ],
      },
      {
        category: "AI и Data Science",
        items: [
          { name: "Pandas", level: 85 },
          { name: "NumPy", level: 80 },
          { name: "PyTorch", level: 80 },
          { name: "TensorFlow", level: 75 },
          { name: "Streamlit", level: 80 },
          { name: "ChromaDB", level: 85 },
          { name: "FAISS", level: 85 },
        ],
      },
      {
        category: "Базы данных",
        items: [
          { name: "PostgreSQL", level: 85 },
          { name: "Redis", level: 75 },
          { name: "MySQL", level: 80 },
          { name: "Sqlite", level: 80 },
        ],
      },
      {
        category: "DevOps и Инфраструктура",
        items: [
          { name: "Docker", level: 90 },
          { name: "Git", level: 95 },
          { name: "Prometheus", level: 80 },
          { name: "Grafana", level: 80 },
          { name: "Nginx", level: 85 },
          { name: "Linux", level: 90 },
          { name: "Google Cloud", level: 75 },
          { name: "Vercel", level: 85 },
          { name: "GitHub Actions", level: 75 },
        ],
      },
      {
        category: "Frontend",
        items: [
          { name: "React", level: 90 },
          { name: "Vue.js", level: 80 },
          { name: "HTML5", level: 95 },
          { name: "CSS3", level: 90 },
          { name: "Tailwind CSS", level: 90 },
          { name: "Bootstrap", level: 80 },
        ],
      },
      {
        category: "QA и Тестирование",
        items: [
          { name: "Jest", level: 80 },
          { name: "Pytest", level: 75 },
          { name: "Selenium", level: 80 },
        ],
      },
    ],
    softSkills: [
      "Командная работа",
      "Коммуникация",
      "Аналитическое мышление",
      "Решение проблем",
      "Самоорганизация",
      "Внимание к деталям",
      "Системное мышление",
      "Быстрое освоение новых технологий",
    ],
    workPractices: ["Agile", "Scrum", "Kanban"],
    languages: [
      { name: "Русский", level: "C2 - Родной" },
      { name: "Английский", level: "Ниже среднего (A2 - B1)" },
    ],

    // Projects
    projectsTitle: "Проекты",
    latestReleaseLabel: "Последний релиз",
    projects: [
      {
        name: "ModelCrew",
        // Shown until GitHub answers with the newest release of `repo`
        version: "v0.0.21",
        repo: "xpl0itK3y/modelcrew-desktop",
        logo: "icons/modelcrew/modelcrew-logo.svg",
        // The non-breaking space keeps the preposition off the end of a line
        tagline: "Совместная работа AI-агентов над\u00a0общим кодом",
        meta: ["Автор проекта", "В активной разработке", "Open source, MIT", "macOS, Windows, Linux"],
        description:
          "Десктопное приложение, в котором несколько AI-агентов для программирования (Claude Code, Codex, Copilot, OpenCode) работают бок о бок в одном проекте и не затирают правки друг друга.",
        highlights: [
          {
            title: "Захват файлов",
            text: "Перед правкой агент занимает файл через собственный хук. Второй агент получает отказ с причиной в формате своего CLI: exit code, JSON-решение или ошибка плагина. Отклоняется и запись поверх версии, которую агент прочитал до чужих изменений.",
          },
          {
            title: "Сетка терминалов",
            text: "Каждая панель запускает CLI агента из PATH пользователя в собственном PTY. После перезапуска приложения сессии восстанавливаются вместе с диалогами агентов.",
          },
          {
            title: "Git-панель",
            text: "Диффы по файлам в реальном времени, коммит, откат, переключение веток и история с графом.",
          },
        ],
        technologies: ["Tauri 2", "Rust", "TypeScript", "React"],
        links: [
          { label: "Сайт", url: "https://modelcrew-com.vercel.app/" },
          { label: "GitHub", url: "https://github.com/xpl0itK3y/modelcrew-desktop" },
        ],
      },
    ],
  },

  en: {
    // TopBar
    portfolio: "CV",
    downloadResume: "Download CV",
    readMore: "Read more",
    readLess: "Show less",
    stackTitle: "Tech Stack",
    showAllTech: "Show all",
    hideTech: "Hide",
    sourceCode: "Source code",

    // Header
    name: "Denis Maksimovich",
    title: "Python Backend and AI Engineer",

    // About
    aboutTitle: "About Me",
    aboutText:
      "Python Engineer with a track from backend development to AI engineering and 2 years of experience. Started by building services with FastAPI and Django, designing PostgreSQL and Redis databases, containerizing with Docker, and contributing to microservices architecture. Gradually shifted focus to AI now building solutions with LLMs and RAG for real-world business use cases. A strong backend foundation lets me bring AI functionality all the way to reliable, scalable production systems. Looking for AI Engineer positions in product teams where I can deliver maximum impact at the intersection of engineering and artificial intelligence.",
    aboutFacts: [
      { label: "Age", value: "24 years" },
      { label: "Citizenship", value: "Kazakhstan" },
      { label: "Remote work", value: "Available" },
      { label: "Business travel", value: "Not available" },
    ],
    // Contacts
    contactsTitle: "Contacts",
    email: "latundenis55@icloud.com",
    //phone: "",
    location: "Kazakhstan",
    github: "github.com/xpl0itK3y",
    telegram: "@yubikorm",
    linkedin: "www.linkedin.com/in/denis-latun-556090367",
    headhunter:
      "astana.hh.kz/resume/1c636390ff103c310a0039ed1f304c43507534?customDomain=1&overRideDomainAreaId=159",

    // Experience
    experienceTitle: "Work Experience",
    totalExperience: "2 years",
    experiences: [
      {
        position: "AI Engineer (Personal Projects)",
        company: "Open Source / GitHub",
        period: "February 2026 - Present",
        employment: "Professional development",
        // One per project in the description, in its order
        projectLinks: [
          "https://github.com/Modern-Messiah/Multi-language-RAG-Document-Assistant",
          "https://github.com/xpl0itK3y/multi-agent-search",
          "https://github.com/Modern-Messiah/AI-AGENT-PLATFORM-",
          "https://github.com/Modern-Messiah/Autonomous-Personal-Assistant-AI-Agent-",
        ],
        description:
          "Developing AI solutions and open-source projects in personal time to deepen practical expertise in RAG, multi-agent systems, distributed architecture, and applied AI. 1) Multi-language RAG Document Assistant. - Built a RAG assistant for questions over documents in 8 languages, including Kazakh: a FastAPI backend, a Streamlit UI, a Telegram bot and answers streamed with their sources. - Designed a two-stage retrieval pipeline: ChromaDB and BM25 merged with Reciprocal Rank Fusion pick the candidates, then a cross-encoder (FlashRank / Cohere) re-checks each one against the question; measured quality on SberQuAD and other Hugging Face datasets with Langfuse. - Made it production-ready: bring-your-own-key for 5 LLM providers with the key never stored, quotas, backups and CI with a Docker boot check. 2) Multi-Agent Deep Research System. - Built a deep research system: an orchestrator splits the query into subtasks, workers search and extract content in parallel, and a LangGraph graph gathers more sources when coverage is weak and writes a cited report. - Built a report verification layer: citation audit, a red team that searches for counter-evidence, number checks against the sources, detection of reprinted stories and retracted papers via Crossref; it all adds up to a solid / contested / speculative confidence rating. - Designed a fault-tolerant job queue on PostgreSQL and Redis: leases, retries, a dead-letter queue and graph resume from the last step after a worker crash; progress streams over SSE, monitored with Prometheus, Grafana and Loki. 3) Self-hosted RAG platform for private knowledge base. - Built an AI assistant: documents, scans and images go through OCR and Vision analysis in durable Temporal workflows, and answers stream over SSE with their sources. - Designed a two-stage retrieval pipeline: a hybrid of pgvector and PostgreSQL full-text search picks the candidates and an LLM reranker scores them against the question; each answer sentence is then checked against the sources, and an answer with no support becomes a refusal. - Implemented PydanticAI agents, a Redis semantic cache, LLM cost tracking in ClickHouse, tenant isolation with PostgreSQL RLS, observability with Logfire and a CI gate on retrieval quality at recall@5 of 90% or more. 4) Krisha Agent - Autonomous Real Estate AI Agent. - Built a Telegram assistant for apartment search on Krisha.kz: a LangGraph pipeline parses the request, scrapes listings with Playwright, enriches them in parallel with nearby infrastructure (OSM / 2GIS) and a mortgage estimate, and DeepSeek scores every listing. - Added memory and personalization: graph checkpoints in PostgreSQL, recommendations learned from saved and rejected apartments, background monitoring for new listings on ARQ and export of favourites to Notion. - Made it production-ready: rate limits and a budget for paid searches, prompt injection protection in listing descriptions, a parser canary that alerts the admin, Sentry and LangSmith, and CI with strict mypy and an Alembic migration cycle.",
        techGroups: [
          {
            label: "Languages",
            items: ["Python", "JavaScript", "TypeScript"],
          },
          {
            label: "Backend and Frontend",
            items: [
              "FastAPI",
              "Uvicorn",
              "Aiogram",
              "python-telegram-bot",
              "Streamlit",
              "Trafilatura",
              "Playwright",
              "BeautifulSoup",
              "Pydantic",
              "PydanticAI",
              "aiohttp",
              "httpx",
              "Nginx",
              "Vue 3",
              "Vite",
              "Pinia",
              "Vue Router",
              "Vue I18n",
              "Tailwind CSS",
              "markdown-it",
              "KaTeX",
              "PyO3/maturin",
              "ReportLab",
              "python-docx",
              "Vanilla JavaScript",
            ],
          },
          {
            label: "AI / LLM",
            items: [
              "OpenAI API",
              "DeepSeek API",
              "Moonshot/Kimi API",
              "LangChain",
              "LangGraph",
              "LangSmith",
              "RAG",
              "Chroma",
              "BM25",
              "FlashRank",
              "Cohere Rerank",
              "pgvector",
              "fastembed",
              "PaddleOCR",
              "Structured Outputs",
              "Function Calling",
            ],
          },
          {
            label: "Databases and Queues",
            items: [
              "PostgreSQL",
              "PgBouncer",
              "JSONB",
              "pgvector",
              "SQLite",
              "MongoDB",
              "Redis",
              "Celery",
              "ARQ",
              "Temporal",
              "ClickHouse",
              "MinIO",
              "Alembic",
            ],
          },
          {
            label: "DevOps and Web",
            items: [
              "Docker",
              "Docker Compose",
              "Podman",
              "GitHub Actions",
              "SSE",
              "WebSockets",
              "JWT",
              "Google OAuth2",
              "CSRF",
              "Sentry",
              "Langfuse",
              "Logfire",
              "OpenTelemetry",
              "Prometheus",
              "Grafana",
              "Loki",
              "Promtail",
            ],
          },
          {
            label: "Integrations and Data Sources",
            items: [
              "DuckDuckGo Search",
              "Tavily API",
              "Crossref API",
              "2GIS API",
              "OpenStreetMap",
              "Notion API",
              "GitHub source ingestion",
              "URL / HTTP fetch ingestion",
            ],
          },
        ],
      },
      {
        position: "Backend Developer (Contract)",
        company: "Private Startup (NDA)",
        period: "June 2025 - May 2026",
        employment: "Full-time",
        description:
          "Under contract, built a real-time production platform on Replit as part of a cross-functional team, bringing the company's data from different systems together in clear dashboards. - Built real-time data collection from 1C, Bitrix, Documentolog and other sources and prepared it for the dashboards. - As the platform grew, finding data in it got hard: wrapped it in an MCP server with tools for an AI agent, so Claude Code can pull the needed information from a plain request. - Protected access with two-factor authentication: a stolen token alone is not enough to get in.",

        techGroups: [
          {
            label: "Languages",
            items: ["Python"],
          },
          {
            label: "AI / LLM",
            items: [
              "MCP",
              "Claude Code",
              "OpenAI API",
              "Prompt Engineering",
              "Structured Outputs (JSON)",
              "Pydantic validation",
              "NLP",
              "LLM caching and retry/rate limiting",
            ],
          },
          {
            label: "Backend",
            items: [
              "FastAPI",
              "Pydantic",
              "SQLAlchemy",
              "REST API",
              "Microservices",
              "asyncio",
              "Multiprocessing",
            ],
          },
          {
            label: "Integrations",
            items: ["1C", "Bitrix", "Documentolog"],
          },
          {
            label: "Databases and Caching",
            items: ["PostgreSQL", "Redis"],
          },
          {
            label: "DevOps and Monitoring",
            items: [
              "Replit",
              "Docker",
              "Docker Compose",
              "Prometheus",
              "Grafana",
              "ELK Stack",
            ],
          },
          {
            label: "Security and Testing",
            items: ["2FA", "JWT", "bcrypt", "Fernet", "Pytest", "Locust"],
          },
        ],
      },
      {
        position: "Full-Stack Developer (Freelance)",
        company: "Client Projects",
        period: "August 2024 - February 2025",
        employment: "Project-based",
        description:
          "Built web apps and AI services for clients together with a partner, taking each project from the first brief to handover. 1) Children's Story Generator for a School. - Built a Next.js and TypeScript web app that writes fairy tales with an LLM for a chosen age, genre, language and characters, showing the text as it is generated. - Implemented streaming through the Vercel AI SDK and the xAI API, separate prompts in Russian and Kazakh, and a story history in PostgreSQL through Prisma. - Built the interface with React, Tailwind CSS and React Hook Form with Zod validation, wrote Vitest tests and packaged everything with Docker Compose. 2) Mini CRM for a Shop. - Built a Next.js and TypeScript CRM for requests from the shop's website: an embeddable widget and a request status page for customers. - Built a manager desk with a queue, filters, priorities and response deadlines, roles on Better Auth and a summary for the day, week and month. - Added spam and guessing protection to the public forms, SQLite storage through Drizzle ORM and tests of the main flows. 3) AI Assistant for a Flower Shop. - Built a customer support Telegram bot on TypeScript with the OpenAI API: it answers questions about delivery, payment and the shop's opening hours. - Connected the bot to the shop's catalog: it finds products from the customer's request and reports prices and availability.",
        techGroups: [
          {
            label: "Languages",
            items: ["TypeScript", "JavaScript"],
          },
          {
            label: "Frontend",
            items: [
              "React",
              "Next.js",
              "Tailwind CSS",
              "React Hook Form",
              "Motion",
            ],
          },
          {
            label: "Backend and Databases",
            items: [
              "Node.js",
              "Next.js API",
              "REST API",
              "Telegram Bot API",
              "Server-Sent Events",
              "Zod",
              "Better Auth",
              "Prisma",
              "Drizzle ORM",
              "PostgreSQL",
              "SQLite",
            ],
          },
          {
            label: "AI / LLM",
            items: [
              "Vercel AI SDK",
              "OpenAI API",
              "xAI API",
              "Prompt Engineering",
              "Streaming",
            ],
          },
          {
            label: "Testing and DevOps",
            items: ["Vitest", "Docker", "Docker Compose"],
          },
        ],
      },
      {
        position: "Python/Django Developer (Diploma Project)",
        company: "Youth Affairs Committee of INEU",
        period: "February 2024 - June 2024",
        employment: "Internship",
        description:
          "Independently developed a Django-based web platform for the university’s student clubs as an information and management portal. - Implemented both backend and frontend application logic, including news and events, clubs, photo gallery, leadership pages, student and supervisor dashboards, as well as applications for joining clubs and participating in events. - Configured user registration, authentication, password recovery, and a role-based access model using Django Auth, Group, and Django ORM. Implemented internal chats, club news publishing, comments, likes, and club member management. - Used server-side rendering with Django Templates, SQLite for data storage, and JavaScript for interactive client-side features. - Containerized the application with Docker and prepared it for deployment, improving deployment simplicity, environment reproducibility, and maintainability. - Additionally configured Django Admin for managing content and core system entities.",

        techGroups: [
          {
            label: "Languages",
            items: ["Python", "JavaScript"],
          },
          {
            label: "Backend and Databases",
            items: ["Django", "Django ORM", "Django Auth", "SQLite"],
          },
          {
            label: "Frontend",
            items: ["HTML", "CSS", "Django Templates"],
          },
          {
            label: "DevOps and Tools",
            items: ["Docker", "Linux", "Django Admin"],
          },
        ],
      },
    ],

    // Education
    educationTitle: "Education",
    education: [
      {
        degree: "B.Sc. in Computer Engineering and Software",
        institution: "Innovative Eurasian University",
        period: "2020 - 2024",
      },
    ],
    // Skills
    skillsTitle: "Technical Skills",
    softSkillsTitle: "Soft Skills",
    workPracticesTitle: "Work Practices",
    languagesTitle: "Languages",
    technicalSkills: [
      {
        category: "Languages",
        items: [
          { name: "Python", level: 90 },
          { name: "JavaScript", level: 90 },
          { name: "TypeScript", level: 85 },
          { name: "Bash", level: 85 },
        ],
      },
      {
        category: "Backend",
        items: [
          { name: "FastAPI", level: 90 },
          { name: "Django", level: 85 },
          { name: "Flask", level: 80 },
          { name: "SQLAlchemy", level: 85 },
          { name: "Prisma", level: 80 },
          { name: "Temporal", level: 75 },
        ],
      },
      {
        category: "AI Agents & Tools",
        items: [
          { name: "LangGraph", level: 90 },
          { name: "CrewAI", level: 85 },
          { name: "Pydantic AI", level: 85 },
          { name: "MCP", level: 80 },
          { name: "Honcho", level: 75 },
          { name: "Replit", level: 85 },
          { name: "Claude Code", level: 90 },
          { name: "Codex", level: 80 },
          { name: "OpenCode", level: 75 },
          { name: "Antigravity", level: 75 },
          { name: "Cursor", level: 90 },
          { name: "OpenClaw", level: 75 },
          { name: "Hermes Agent", level: 75 },
        ],
      },
      {
        category: "AI and Data Science",
        items: [
          { name: "Pandas", level: 85 },
          { name: "NumPy", level: 80 },
          { name: "PyTorch", level: 80 },
          { name: "TensorFlow", level: 75 },
          { name: "Streamlit", level: 80 },
          { name: "ChromaDB", level: 85 },
          { name: "FAISS", level: 85 },
        ],
      },
      {
        category: "Databases",
        items: [
          { name: "PostgreSQL", level: 85 },
          { name: "Redis", level: 75 },
          { name: "MySQL", level: 80 },
          { name: "Sqlite", level: 80 },
        ],
      },
      {
        category: "DevOps and Infrastructure",
        items: [
          { name: "Docker", level: 90 },
          { name: "Git", level: 95 },
          { name: "Prometheus", level: 80 },
          { name: "Grafana", level: 80 },
          { name: "Nginx", level: 90 },
          { name: "Linux", level: 90 },
          { name: "Google Cloud", level: 75 },
          { name: "Vercel", level: 85 },
          { name: "GitHub Actions", level: 75 },
        ],
      },
      {
        category: "Frontend",
        items: [
          { name: "React", level: 90 },
          { name: "Vue.js", level: 80 },
          { name: "HTML5", level: 95 },
          { name: "CSS3", level: 90 },
          { name: "Tailwind CSS", level: 90 },
          { name: "Bootstrap", level: 80 },
        ],
      },
      {
        category: "QA and Testing",
        items: [
          { name: "Jest", level: 80 },
          { name: "Pytest", level: 75 },
          { name: "Selenium", level: 80 },
        ],
      },
    ],
    softSkills: [
      "Teamwork",
      "Communication",
      "Analytical Thinking",
      "Problem Solving",
      "Self-Organization",
      "Attention to Detail",
      "Systems Thinking",
      "Fast Learning of New Technologies",
    ],
    workPractices: ["Agile", "Scrum", "Kanban"],
    languages: [
      { name: "Russian", level: "C2 - Native" },
      { name: "English", level: "A2 - B1 Pre-Intermediate" },
    ],

    // Projects
    projectsTitle: "Projects",
    latestReleaseLabel: "Latest release",
    projects: [
      {
        name: "ModelCrew",
        // Shown until GitHub answers with the newest release of `repo`
        version: "v0.0.21",
        repo: "xpl0itK3y/modelcrew-desktop",
        logo: "icons/modelcrew/modelcrew-logo.svg",
        tagline: "AI coding agents working together on one codebase",
        meta: ["Project author", "In active development", "Open source, MIT", "macOS, Windows, Linux"],
        description:
          "A desktop app where several AI coding agents (Claude Code, Codex, Copilot, OpenCode) work side by side in one project without overwriting each other's edits.",
        highlights: [
          {
            title: "File claims",
            text: "An agent claims a file through its own hook before editing it. A second agent is refused with a reason, in its own CLI's format: an exit code, a JSON decision or a plugin error. A write over a version the agent read before someone else changed it is refused too.",
          },
          {
            title: "Terminal grid",
            text: "Each panel runs the agent's CLI from the user's PATH in its own PTY. After a restart, sessions come back together with each agent's conversation.",
          },
          {
            title: "Git panel",
            text: "Real-time per-file diffs, commit, revert, branch switching and a history graph.",
          },
        ],
        technologies: ["Tauri 2", "Rust", "TypeScript", "React"],
        links: [
          { label: "Website", url: "https://modelcrew-com.vercel.app/" },
          { label: "GitHub", url: "https://github.com/xpl0itK3y/modelcrew-desktop" },
        ],
      },
    ],
  },
};

export default translations;
