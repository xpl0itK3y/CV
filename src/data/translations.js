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

    // Header
    name: "Денис Максимович",
    title: "Python Backend and AI Engineer",

    // About
    aboutTitle: "О себе",
    aboutText:
      "Python Engineer с треком от backend-разработки к AI-инженерии и 2 годами опыта. Начинал с построения сервисов на FastAPI и Django, проектирования баз данных PostgreSQL, Redis, контейнеризации Docker и участия в развитии микросервисной архитектуры. Постепенно сфокусировался на AI-направлении теперь создаю решения с использованием LLM и RAG для прикладных бизнес-задач. Сильный бэкенд-фундамент позволяет мне доводить AI-функциональность до надёжных, масштабируемых production-систем. Ищу позиции AI Engineer в продуктовых командах, где смогу приносить максимальную пользу на стыке инженерии и искусственного интеллекта.",

    // Contacts
    contactsTitle: "Контакты",
    email: "latundenis55@gmail.com",
    // phone: "",
    location: "Казахстан",
    github: "github.com/xpl0itK3y",
    telegram: "@xpl0itK3y",
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
        period: "Декабрь 2025 - настоящее время",
        description:
          "Разрабатываю AI решения и open-source проекты в свободное время для углубления практической экспертизы в области RAG, мультиагентных систем, distributed architecture и applied AI. 1) Multi-language RAG Document Assistant. - Разработал production-ready RAG-систему с полным пайплайном обработки документов: chunking, embeddings, semantic retrieval и генерация ответов. - Использовал FAISS и Chroma для векторного хранения и similarity search. - Реализовал source attribution и prompt engineering для повышения точности и управляемости ответов. 2) Multi-Agent Deep Research System. - Разработал мультиагентную систему глубокого исследования с полным пайплайном: динамическая декомпозиция запроса, параллельный веб-поиск и извлечение контента, анализ-синтез и граф-финализация на LangGraph. - Реализовал слой верифицируемости как ключевой дифференциатор: пер-утверждённый аудит цитат, адверсариальный red-team с поиском контр-доказательств, числовую проверку фактов, анализ независимости источников и confidence-фьюжн solid / contested / speculative. - Спроектировал отказоустойчивую обработку задач atomic claim, dead-letter, авто-восстановление, идемпотентная финализация с нативным ускорителем на Rust / PyO3, live-стримингом прогресса SSE и защитой SSRF / CSRF / JWT. 3) Self-hosted RAG-платформа для работы с приватной базой знаний. - Разработал self-hosted AI-ассистент с ingestion документов, RAG-поиском по pgvector и стриминговым чатом с цитированием источников на базе durable workflows Temporal. - Построил FastAPI backend со streaming responses SSE, multi-tenant аутентификацией по API-ключам и оркестрацией фоновых задач на Temporal для ingestion, генерации эмбеддингов и human-in-the-loop approval. - Реализовал tool-calling агентов на PydanticAI с типизированным structured output, семантический кэш на Redis, аналитику использования и стоимости LLM на ClickHouse, observability через Langfuse и кастомную i18n-систему во Vue 3 фронтенде. 4) Krisha Agent - Autonomous Real Estate AI Agent. - Разработал мультиагентную систему на LangGraph для автономного поиска квартир на Krisha.kz. - Реализовал асинхронный граф с параллельным обогащением данных через внешние API, structured outputs на Pydantic v2 и LLM-based scoring для ранжирования объявлений. - Настроил персистентную память, human-in-the-loop сценарии, Telegram-уведомления и observability через LangSmith и Sentry. 5) Crypto Sentiment Analysis Pipeline. - Спроектировал распределенную платформу из 4 Python-сервисов и Vue 3 SPA для real-time мониторинга крипторынка, включая цены, Telegram-стримы и новости. - Построил event-driven pipeline на asyncio, Redis Pub/Sub и FastAPI WebSockets с низкой задержкой доставки данных. - Реализовал ingestion данных через Telethon и REST polling, а также CI/CD и архитектурную документацию. Все проекты доступны: github.com/xpl0itK3y",
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
              "Telethon",
              "Trafilatura",
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
              "FAISS",
              "Chroma",
              "pgvector",
              "fastembed",
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
              "CoinGecko API",
              "CryptoPanic API",
              "Binance WSS",
              "GitHub source ingestion",
              "URL / HTTP fetch ingestion",
            ],
          },
        ],
      },
      {
        position: "Backend Developer",
        company: "Private Startup (NDA)",
        period: "Июнь 2025 - Май 2026",
        description:
          "Разрабатывал AI-функциональность и бэкенд-сервисы production-платформы для автоматической обработки и классификации текстовых данных в кросс-функциональной команде, отвечал за AI-модуль и связанные сервисы. - Участвовал в проектировании микросервисной архитектуры на FastAPI для обработки конкурентной нагрузки и масштабирования backend-компонентов. - Реализовал инфраструктурные решения на своей зоне ответственности для повышения стабильности, отказоустойчивости и гибкости маршрутизации сервиса. - Разработал AI-функциональность для автоматизации обработки текстовых данных и сопутствующих сценариев. - Настроил процесс развертывания совместно с командой с использованием Docker Compose и multi-stage builds, что улучшило воспроизводимость окружения и сопровождение проекта. - Участвовал в настройке мониторинга и observability с real-time метриками и health checks; реализовал кэширование через Redis для оптимизации производительности AI-пайплайна. - Участвовал в архитектурных обсуждениях и внедрении инженерных best practices внутри команды. - Усилил безопасность сервисов через механизмы аутентификации, шифрования, хеширования и ограничения запросов. - Участвовал в развитии практик тестирования, включая unit/integration и нагрузочные тесты. - Система работает в production под реальной операционной нагрузкой.",
        techGroups: [
          {
            label: "Языки",
            items: ["Python"],
          },
          {
            label: "AI и обработка текста",
            items: [
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
            label: "Базы данных и кэширование",
            items: ["PostgreSQL", "Redis"],
          },
          {
            label: "DevOps и мониторинг",
            items: [
              "Docker",
              "Docker Compose",
              "Prometheus",
              "Grafana",
              "ELK Stack",
            ],
          },
          {
            label: "Безопасность и тестирование",
            items: ["JWT", "bcrypt", "Fernet", "Pytest", "Locust"],
          },
        ],
      },
      {
        position: "Python/Django Developer (Diploma Project)",
        company: "Комитет по делам молодежи ИнЕУ",
        period: "Февраль 2024 - Июнь 2024",
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
    projects: [
      {
        name: "E-commerce Platform",
        tech: "React, Redux, Node.js",
        description:
          "Полнофункциональная платформа электронной коммерции с корзиной, оплатой и админ-панелью",
      },
      {
        name: "Social Network",
        tech: "Next.js, MongoDB, Socket.io",
        description: "Социальная сеть с real-time чатом и лентой новостей",
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

    // Header
    name: "Denis Maksimovich",
    title: "Python Backend and AI Engineer",

    // About
    aboutTitle: "About Me",
    aboutText:
      "Python Engineer with a track from backend development to AI engineering and 2 years of experience. Started by building services with FastAPI and Django, designing PostgreSQL and Redis databases, containerizing with Docker, and contributing to microservices architecture. Gradually shifted focus to AI now building solutions with LLMs and RAG for real-world business use cases. A strong backend foundation lets me bring AI functionality all the way to reliable, scalable production systems. Looking for AI Engineer positions in product teams where I can deliver maximum impact at the intersection of engineering and artificial intelligence.",
    // Contacts
    contactsTitle: "Contacts",
    email: "latundenis55@gmail.com",
    //phone: "",
    location: "Kazakhstan",
    github: "github.com/xpl0itK3y",
    telegram: "@xpl0itK3y",
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
        period: "December 2025 - Present",
        description:
          "Developing AI solutions and open-source projects in personal time to deepen practical expertise in RAG, multi-agent systems, distributed architecture, and applied AI. 1) Multi-language RAG Document Assistant. - Built a production-ready RAG system with a full document processing pipeline: chunking, embeddings, semantic retrieval, and answer generation. - Used FAISS and Chroma for vector storage and similarity search. - Implemented source attribution and prompt engineering to improve answer accuracy and controllability. 2) Multi-Agent Deep Research System. - Developed a multi-agent deep research system with a full pipeline: dynamic query decomposition, parallel web search and content extraction, analysis-synthesis, and graph finalization on LangGraph. - Implemented a verifiability layer as a key differentiator: per-claim citation audit, adversarial red-team with counter-evidence search, numerical fact-checking, source independence analysis, and confidence fusion solid / contested / speculative. - Designed fault-tolerant task processing atomic claim, dead-letter, auto-recovery, idempotent finalization with a native Rust/PyO3 accelerator, live progress streaming SSE, and SSRF/CSRF/JWT protection. 3) Self-hosted RAG platform for private knowledge base. - Built a self-hosted AI assistant with document ingestion, RAG search over pgvector, and streaming chat with source citation on top of durable workflows Temporal. - Developed a FastAPI backend with streaming responses SSE, multi-tenant API key authentication, and background task orchestration on Temporal for ingestion, embedding generation, and human-in-the-loop approval. - Implemented tool-calling agents with PydanticAI with typed structured output, semantic cache on Redis, LLM usage and cost analytics on ClickHouse, observability via Langfuse, and a custom i18n system in a Vue 3 frontend. 4) Krisha Agent - Autonomous Real Estate AI Agent. - Developed a multi-agent system on LangGraph for autonomous apartment search on Krisha.kz. - Implemented an asynchronous graph with parallel data enrichment via external APIs, structured outputs with Pydantic v2, and LLM-based scoring for ranking listings. - Added persistent memory, human-in-the-loop workflows, Telegram notifications, and observability via LangSmith and Sentry. 5) Crypto Sentiment Analysis Pipeline. - Designed a distributed platform of 4 Python services and a Vue 3 SPA for real-time crypto market monitoring, including prices, Telegram streams, and news. - Built an event-driven pipeline on asyncio, Redis Pub/Sub, and FastAPI WebSockets with low-latency data delivery. - Implemented data ingestion via Telethon and REST polling, as well as CI/CD and architecture documentation. All projects available at: github.com/xpl0itK3y",
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
              "Telethon",
              "Trafilatura",
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
              "FAISS",
              "Chroma",
              "pgvector",
              "fastembed",
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
              "CoinGecko API",
              "CryptoPanic API",
              "Binance WSS",
              "GitHub source ingestion",
              "URL / HTTP fetch ingestion",
            ],
          },
        ],
      },
      {
        position: "Backend Developer",
        company: "Private Startup (NDA)",
        period: "June 2025 - May 2026",
        description:
          "Developed AI functionality and backend services for a production platform for automated text data processing and classification within a cross-functional team. Responsible for the AI module and related services. - Participated in designing a FastAPI-based microservices architecture to handle concurrent workloads and scale backend components. - Implemented infrastructure solutions within my area of responsibility to improve service stability, fault tolerance, and routing flexibility. - Developed AI-powered functionality to automate text data processing and related workflows. - Collaborated with the team to set up the deployment process using Docker Compose and multi-stage builds, improving environment reproducibility and maintainability. - Participated in configuring monitoring and observability with real-time metrics and health checks; implemented Redis caching to optimize AI pipeline performance. - Participated in architectural discussions and the adoption of engineering best practices within the team. - Strengthened service security through authentication, encryption, hashing, and request-limiting mechanisms. - Contributed to testing practices, including unit, integration, and load testing. - The system has been running in production under real operational load.",

        techGroups: [
          {
            label: "Languages",
            items: ["Python"],
          },
          {
            label: "AI and Text Processing",
            items: [
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
            label: "Databases and Caching",
            items: ["PostgreSQL", "Redis"],
          },
          {
            label: "DevOps and Monitoring",
            items: [
              "Docker",
              "Docker Compose",
              "Prometheus",
              "Grafana",
              "ELK Stack",
            ],
          },
          {
            label: "Security and Testing",
            items: ["JWT", "bcrypt", "Fernet", "Pytest", "Locust"],
          },
        ],
      },
      {
        position: "Python/Django Developer (Diploma Project)",
        company: "Youth Affairs Committee of INEU",
        period: "February 2024 - June 2024",
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
    projects: [
      {
        name: "E-commerce Platform",
        tech: "React, Redux, Node.js",
        description:
          "Full-featured e-commerce platform with cart, payment and admin panel",
      },
      {
        name: "Social Network",
        tech: "Next.js, MongoDB, Socket.io",
        description: "Social network with real-time chat and news feed",
      },
    ],
  },
};

export default translations;
