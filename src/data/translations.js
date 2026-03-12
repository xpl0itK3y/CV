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
    aboutTitle: "👤 О себе",
    aboutText:
      "Python Backend и AI Engineer с 2+ годами опыта в разработке высоконагруженных систем и интеграции AI/ML решений. Специализируюсь на построении масштабируемых backend архитектур с использованием FastAPI, микросервисов, и современного DevOps стека (Docker, Prometheus, Grafana). Опыт руководства командой разработки, проектирования систем с нуля, и интеграции AI технологий (LangChain, OpenAI GPT, RAG). Открыт к удаленным позициям в международных продуктовых компаниях, где смогу применить опыт в AI/ML и backend разработке.",

    // Contacts
    contactsTitle: "📬 Контакты",
    email: "latundenis55@gmail.com",
    // phone: "",
    location: "Казахстан",
    github: "https://github.com/xpl0itK3y",
    telegram: "@xpl0itK3y",
    linkedin: "www.linkedin.com/in/vladimir-nikolayevich-9092b3321",
    headhunter: "pavlodar.hh.kz/resume/ab79d06cff0d80e57f0039ed1f61695244756d",

    // Experience
    experienceTitle: "💼 Опыт работы",
    totalExperience: "2+ года",
    experiences: [
      {
        position: "AI/ML Engineer (Personal Projects)",
        company: "Open Source / GitHub",
        period: "Декабрь 2025 - настоящее время",
        description:
          "Разработка AI/ML решений и open-source проектов в свободное время для развития навыков и исследования новых технологий. Ключевые проекты:\n1) Multi-language RAG Document Assistant. - Построил production-ready RAG систему с полным pipeline: chunking,embeddings, semantic search. - Использовал векторные БД (FAISS, Chroma) для хранения и поиска эмбеддингов. - Реализовал source attribution для точного указания источников. - Применял промпт-инжиниринг для оптимизации точности ответов. 2) Krisha Agent - Autonomous Real Estate AI Agent. - Разработал multi-agent систему на LangGraph (supervisor + subagent паттерн) для автономного поиска квартир на Krisha.kz. - Реализовал асинхронный LangGraph граф с параллельным обогащением данных через 2GIS API и Нацбанк РК. - Применил structured outputs с Pydantic v2 и LLM scoring (Gemini) для ранжирования объявлений по критериям пользователя. - Настроил персистентную память агента через LangGraph checkpointing + PostgreSQL для дедупликации результатов. - Реализовал human-in-the-loop паттерн и фоновый мониторинг через ARQ task queue с уведомлениями в Telegram. - Обеспечил observability через LangSmith трейсинг и Sentry; задеплоил через Podman rootless containers + GitHub Actions CI/CD. 3) Crypto Sentiment Analysis Pipeline. - Спроектировал distributed microservices платформу 4 Python-сервиса + Vue 3 SPA для real-time мониторинга крипторынка: цены, Telegram-стримы, новости. - Построил event-driven pipeline: Binance WSS → asyncio processor с RSI-расчётом → Redis Pub/Sub FastAPI WebSocket broadcast с миллисекундной латентностью. - Реализовал Telegram ingestion через Telethon (MTProto) и CryptoPanic REST polling с асинхронной персистентностью через Celery + PostgreSQL. - Построил Vue 3 SPA с composable-архитектурой, WebSocket auto-reconnect, KeepAlive-кешированием и infinite scroll. - Задокументировал архитектуру по C4 модели (4 уровня, 14 PlantUML-диаграмм); настроил CI/CD (GitHub Actions + Docker Compose, 8 контейнеров). 4) Multi-Agent Search & Research Optimizer (Perplexity AI Analog). - Разработал распределенную мультиагентную систему на базе LangGraph (паттерн Orchestrator + Specialized Workers) для автономного поиска, парсинга и синтеза информации из интернета. - Реализовал граф на базе LangGraph с поддержкой циклического уточнения запросов и параллельного выполнения поисковых узлов (nodes), что позволило эффективно управлять состоянием агента и контекстом. - Реализовал алгоритм динамической декомпозиции сложных пользовательских запросов на независимые поисковые подзадачи с использованием LLM DeepSeek, что позволило достичь высокой релевантности и параллелизма. - Внедрил многоуровневый пайплайн сбора данных (DuckDuckGo Search + Trafilatura) с автоматической очисткой HTML-шума, фильтрацией рекламы и экстракцией чистого контента. - Использовал Pydantic v2 для гарантии типизации и structured outputs от LLM, а также управления состоянием задач через LangGraph Checkpointing и асинхронный TaskManager. - Интегрировал LangSmith для трейсинга цепочек рассуждений агента и структурированное логирование, обеспечив прозрачность выполнения каждого шага.5) Chrome Extension for Content Simplification. - Разработал High-performance Chrome Extension (Manifest V3) для упрощения сложного веб-контента в реальном времени с использованием LLM. - Разработал Chrome Extension на Vanilla JavaScript (ES6+) с Shadow DOM для изоляции стилей и предотвращения CSS конфликтов. - Построил FastAPI backend с асинхронной архитектурой для интеграции OpenAI GPT-4 с поддержкой real-time streaming. - Реализовал Server-Sent Events (SSE) для token-by-token рендеринга текста с низкойлатентностью (TTFB оптимизация). - Внедрил JWT-based stateless аутентификацию с Google OAuth2.\n- Создал систему промпт-инжиниринга с 4 режимами: Simple, Brief, Key Points, With Examples. - Разработал кастомную i18n систему для динамического переключения языков (EN/RU). - Настроил строгий CORS для безопасного взаимодействия extension backend. Все проекты доступны: github.com/Modern-Messiah",
        techGroups: [
          {
            label: "Языки",
            items: ["Python", "JavaScript"],
          },
          {
            label: "Backend и Frontend",
            items: [
              "FastAPI",
              "Aiogram",
              "Telethon",
              "Trafilatura",
              "Pydantic",
              "aiohttp",
              "React",
              "Vue",
              "Next.js",
            ],
          },
          {
            label: "AI и Vector Search",
            items: [
              "OpenAI API",
              "DeepSeek API",
              "CoinGecko API",
              "CryptoPanic API",
              "LangChain",
              "LangGraph",
              "LangSmith",
              "LlamaIndex",
              "RAG",
              "FAISS",
              "Chroma",
              "Vector Databases",
              "Function Calling",
              "Prompt Engineering",
              "DuckDuckGo Search",
            ],
          },
          {
            label: "Базы данных",
            items: ["PostgreSQL", "SQLite", "MongoDB", "Redis"],
          },
          {
            label: "DevOps и Web",
            items: [
              "Docker",
              "Docker Compose",
              "Git",
              "Webhooks",
              "SSE",
              "Binance WSS",
              "JWT",
              "Google OAuth2",
            ],
          },
          {
            label: "Browser Extensions",
            items: [
              "Manifest V3",
              "Chrome Extension API",
              "Shadow DOM",
              "Asyncio",
              "Threading",
            ],
          },
        ],
      },
      {
        position: "Backend developer",
        company: "Private Startup (NDA)",
        period: "Июнь 2025 - настоящее время",
        description:
          "Принимал все ключевые технические решения: выбор стека, архитектура системы, DevOps инфраструктура. - Спроектировал микросервисную архитектуру на FastAPI с использованием многопроцессорности multiprocessing для обработки высоких нагрузок. - Внедрил масштабируемую прокси-инфраструктуру с ротацией (SOCKS5, HTTP, MTProto) и GeoIP распределением для обеспечения стабильности сервиса. - Разработал систему AI-ассистирования с интеграцией OpenAI GPT для автоматизации NLP-обработки текстов. - Построил DevOps pipeline: Docker Compose с multi-stage builds, автоматизация деплоя. - Внедрил комплексный мониторинг через Prometheus + Grafana + ELK Stack с real-time метриками и custom health checks. - Использовал Redis для оптимизации производительности. - Провел менторинг команды разработки: code review, архитектурные ревью, внедрение best practices. - Обеспечил безопасность системы: JWT авторизация, bcrypt хеширование, Fernet шифрование, rate. - Внедрил культуру тестирования: Pytest unit/integration тесты, нагрузочное тестирование с Locust. - Система успешно работает в production несколько месяцев, обрабатывая высокие нагрузки.",
        techGroups: [
          {
            label: "Языки",
            items: ["Python"],
          },
          {
            label: "Backend и Базы данных",
            items: [
              "FastAPI",
              "Pydantic",
              "SQLAlchemy",
              "REST API",
              "PostgreSQL",
            ],
          },
          {
            label: "Аутентификация & API",
            items: ["JWT Authentication", "Stripe API", "SendGrid"],
          },
        ],
      },
      {
        position:
          "Backend Developer (Freelance, Full-time) PrestigeFly - Premium Aviation Services",
        company: "PrestigeFly",
        period: "Декабрь 2024 - Июнь 2025",
        description:
          "Разработал с нуля в паре с backend разработчиком CRM-систему для управления продажами авиабилетов премиум-класса, обеспечивающую полный цикл от лида до закрытия сделки. - Спроектировал совместно с командой архитектуру PostgreSQL базы данных с учетом сложной бизнес-логики: управление лидами, многоэтапный процесс продаж, финансовая отчетность и ролевая модель доступа. - Разработал REST API на FastAPI для взаимодействия с Vue frontend. - Реализовал модуль продаж с автоматическим расчетом прибыли (Revenue/Award Sales), поддержкой множественных тарифных таблиц и финансовой аналитикой по транзакциям. - Интегрировал платежную систему Stripe с поддержкой дополнительных опций (Ticket Protection), обеспечив безопасное хранение платежных данных с разграничением доступа по ролям. - Реализовал систему автоматических email-уведомлений через SendGrid для отправки предложений клиентам, генерации билетов и уведомлений о статусах заказов. - Внедрил систему авторизации и прав доступа для 5 типов ролей (Administrator, Sales Agent, Supervisor, Customer Support, Expert Agent) с различными уровнями доступа к данным. - Разработал систему управления лидами с автоматическим распределением, отслеживанием статусов и предотвращением дубликатов. - Система успешно запущена в production и используется для обработки продаж премиум авиабилетов.",
        techGroups: [
          {
            label: "Языки",
            items: ["Python"],
          },
          {
            label: "Backend и Базы данных",
            items: [
              "FastAPI",
              "Pydantic",
              "SQLAlchemy",
              "REST API",
              "PostgreSQL",
            ],
          },
          {
            label: "Аутентификация & API",
            items: ["JWT Authentication", "Stripe API", "SendGrid"],
          },
        ],
      },
      {
        position: "Python Developer (Intern)",
        company: "Tele2 Kazakhstan",
        period: "Февраль 2024 - Июнь 2024",
        description:
          "Разработал веб-приложение для автоматизации учета продаж 20+ менеджеров. - Внедрил систему аналитики с Pandas - руководство получило инструмент для принятия решений. - Реализовал ролевую модель доступа (менеджер/администратор) с Django ORM. - Создал дашборд для мониторинга выполнения планов с визуализацией. - Внедрил контроль выполнения планов продаж с визуализацией данных. - Настроил контейнеризацию приложения с помощью Docker.",
        techGroups: [
          {
            label: "Языки",
            items: ["Python"],
          },
          {
            label: "Backend и Базы данных",
            items: ["Django", "SQLite"],
          },
          {
            label: "DevOps & Tools",
            items: ["Docker", "Linux", "Pandas"],
          },
        ],
      },
    ],

    // Education
    educationTitle: "🎓 Образование",
    education: [
      {
        degree: "Вычислительная техника и программное обеспечение",
        institution: "Инновационный Евразийский Университет",
        period: "2020 - 2024",
      },
    ],

    // Skills
    skillsTitle: "🚀 Технические навыки",
    softSkillsTitle: "💡 Мягкие навыки",
    languagesTitle: "🌐 Языки",
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
          { name: "GraphQL", level: 75 },
          { name: "Prisma", level: 80 },
        ],
      },
      {
        category: "AI и Data Science",
        items: [
          { name: "Pandas", level: 85 },
          { name: "NumPy", level: 80 },
          { name: "PyTorch", level: 80 },
          { name: "TensorFlow", level: 75 },
          { name: "Jupyter", level: 85 },
          { name: "Streamlit", level: 80 },
          { name: "Pinecone", level: 85 },
          { name: "Weaviate", level: 80 },
          { name: "ChromaDB", level: 85 },
          { name: "Qdrant", level: 80 },
          { name: "FAISS", level: 85 },
        ],
      },
      {
        category: "Базы данных",
        items: [
          { name: "PostgreSQL", level: 85 },
          { name: "MongoDB", level: 80 },
          { name: "Redis", level: 75 },
          { name: "MySQL", level: 80 },
          { name: "Sqlite", level: 80 },
          { name: "Elasticsearch", level: 75 },
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
          { name: "AWS", level: 75 },
          { name: "Google Cloud", level: 75 },
          { name: "DigitalOcean", level: 80 },
          { name: "Vercel", level: 85 },
          { name: "Azure", level: 75 },
          { name: "Firebase", level: 80 },
          { name: "Supabase", level: 80 },
          { name: "Heroku", level: 75 },
          { name: "Railway", level: 75 },
          { name: "Traefik", level: 75 },
          { name: "GitHub Actions", level: 75 },
        ],
      },
      {
        category: "Frontend",
        items: [
          { name: "React", level: 90 },
          { name: "Next.js", level: 90 },
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
      "Agile/Scrum",
      "Креативность",
      "Самоорганизация",
      "Быстрое обучение",
      "Решение проблем",
      "Внимание к деталям",
      "Техническая документация",
      "Аналитическое мышление",
    ],
    languages: [
      { name: "Русский", level: "C2 - Родной" },
      { name: "Английский", level: "B2 - Средний" },
    ],

    // Projects
    projectsTitle: "🎨 Проекты",
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
    aboutTitle: "👤 About Me",
    aboutText:
      "Python Backend and AI Engineer with 2+ years of experience in developing high-load systems and integrating AI/ML solutions. I specialize in building scalable backend architectures using FastAPI, microservices, and modern DevOps stack (Docker, Prometheus, Grafana). Experience in leading a development team, designing systems from scratch, and integrating AI technologies (LangChain, OpenAI GPT, RAG). Open to remote positions in international product companies where I can apply my experience in AI/ML and backend development.",
    // Contacts
    contactsTitle: "📬 Contacts",
    email: "latundenis55@gmail.com",
    //phone: "",
    location: "Kazakhstan",
    github: "https://github.com/xpl0itK3y",
    telegram: "@xpl0itK3y",
    linkedin: "www.linkedin.com/in/vladimir-nikolayevich-9092b3321",
    headhunter: "pavlodar.hh.kz/resume/ab79d06cff0d80e57f0039ed1f61695244756d",

    // Experience
    experienceTitle: "💼 Work Experience",
    totalExperience: "2+ years",
    experiences: [
      {
        position: "AI/ML Engineer (Personal Projects)",
        company: "Open Source / GitHub",
        period: "December 2025 - Present",
        description:
          "Developing AI/ML solutions and open-source projects in my spare time to grow skills and explore new technologies. Key projects:\n1) Multi-language RAG Document Assistant. - Built a production-ready RAG system with a full pipeline: chunking, embeddings, semantic search. - Used vector databases (FAISS, Chroma) for storing and retrieving embeddings. - Implemented source attribution for precise citation of information sources. - Applied prompt engineering to optimize response accuracy. 2) Krisha Agent - Autonomous Real Estate AI Agent. - Developed a multi-agent system on LangGraph (supervisor + subagent pattern) for autonomous apartment search on Krisha.kz. - Implemented an async LangGraph graph with parallel data enrichment via the 2GIS API and the National Bank of Kazakhstan. - Applied structured outputs with Pydantic v2 and LLM scoring (Gemini) to rank listings by user criteria. - Configured persistent agent memory via LangGraph checkpointing + PostgreSQL for result deduplication. - Implemented a human-in-the-loop pattern and background monitoring via ARQ task queue with Telegram notifications. - Ensured observability via LangSmith tracing and Sentry; deployed via Podman rootless containers + GitHub Actions CI/CD. 3) Crypto Sentiment Analysis Pipeline. - Designed a distributed microservices platform — 4 Python services + Vue 3 SPA — for real-time crypto market monitoring: prices, Telegram streams, and news. - Built an event-driven pipeline: Binance WSS → asyncio processor with RSI calculation → Redis Pub/Sub → FastAPI WebSocket broadcast with millisecond latency. - Implemented Telegram ingestion via Telethon (MTProto) and CryptoPanic REST polling with async persistence via Celery + PostgreSQL. - Built a Vue 3 SPA with a composable architecture, WebSocket auto-reconnect, KeepAlive caching, and infinite scroll. - Documented the architecture following the C4 model (4 levels, 14 PlantUML diagrams); configured CI/CD (GitHub Actions + Docker Compose, 8 containers). 4) Multi-Agent Search & Research Optimizer (Perplexity AI Analog). - Developed a distributed multi-agent system on LangGraph (Orchestrator + Specialized Workers pattern) for autonomous search, parsing, and synthesis of information from the internet. - Implemented a LangGraph graph with support for cyclic query refinement and parallel execution of search nodes, enabling effective agent state and context management. - Implemented a dynamic decomposition algorithm for complex user queries into independent search subtasks using LLM DeepSeek, achieving high relevance and parallelism. - Integrated a multi-layer data collection pipeline (DuckDuckGo Search + Trafilatura) with automatic HTML noise cleaning, ad filtering, and clean content extraction. - Used Pydantic v2 to guarantee typing and structured outputs from LLM, as well as task state management via LangGraph Checkpointing and an async TaskManager. - Integrated LangSmith for tracing agent reasoning chains and structured logging, ensuring transparency at every execution step. 5) Chrome Extension for Content Simplification. - Developed a high-performance Chrome Extension (Manifest V3) for real-time simplification of complex web content using LLM. - Built the Chrome Extension in Vanilla JavaScript (ES6+) with Shadow DOM for style isolation and prevention of CSS conflicts. - Built a FastAPI backend with an async architecture to integrate OpenAI GPT-4 with real-time streaming support. - Implemented Server-Sent Events (SSE) for token-by-token text rendering with low latency (TTFB optimization). - Integrated JWT-based stateless authentication with Google OAuth2.\n- Created a prompt engineering system with 4 modes: Simple, Brief, Key Points, With Examples. - Developed a custom i18n system for dynamic language switching (EN/RU). - Configured strict CORS for secure extension-backend communication. All projects available at: github.com/Modern-Messiah",
        techGroups: [
          {
            label: "Languages",
            items: ["Python", "JavaScript"],
          },
          {
            label: "Backend and Frontend",
            items: [
              "FastAPI",
              "Aiogram",
              "Telethon",
              "Trafilatura",
              "Pydantic",
              "aiohttp",
              "React",
              "Vue",
              "Next.js",
            ],
          },
          {
            label: "AI and Vector Search",
            items: [
              "OpenAI API",
              "DeepSeek API",
              "CoinGecko API",
              "CryptoPanic API",
              "LangChain",
              "LangGraph",
              "LangSmith",
              "LlamaIndex",
              "RAG",
              "FAISS",
              "Chroma",
              "Vector Databases",
              "Function Calling",
              "Prompt Engineering",
              "DuckDuckGo Search",
            ],
          },
          {
            label: "Databases",
            items: ["PostgreSQL", "SQLite", "MongoDB", "Redis"],
          },
          {
            label: "DevOps and Web",
            items: [
              "Docker",
              "Docker Compose",
              "Git",
              "Webhooks",
              "SSE",
              "Binance WSS",
              "JWT",
              "Google OAuth2",
            ],
          },
          {
            label: "Browser Extensions",
            items: [
              "Manifest V3",
              "Chrome Extension API",
              "Shadow DOM",
              "Asyncio",
              "Threading",
            ],
          },
        ],
      },
      {
        position: "Backend developer",
        company: "Private Startup (NDA)",
        period: "June 2025 - Present",
        description:
          "Led a team of 10 people in creating a high-load enterprise platform focusing on real-time communication (team expansion planned).\n- Made all key technical decisions: stack selection, system architecture, DevOps infrastructure.\n- Designed microservice architecture on FastAPI using multiprocessing for handling high loads.\n- Implemented scalable proxy infrastructure with rotation (SOCKS5, HTTP, MTProto) and GeoIP distribution to ensure service stability.\n- Developed an AI assistance system integrating OpenAI GPT for automating NLP text processing.\n- Built DevOps pipeline: Docker Compose with multi-stage builds, deployment automation.\n- Implemented complex monitoring via Prometheus + Grafana + ELK Stack with real-time metrics and custom health checks.\n- Used Redis for performance optimization.\n- Conducted mentoring for the development team: code review, architectural reviews, best practices implementation.\n- Ensured system security: JWT authorization, bcrypt hashing, Fernet encryption, rate limiting.\n- Implemented testing culture: Pytest unit/integration tests, load testing with Locust.\n- System has been successfully operating in production for several months, handling high loads.",
        techGroups: [
          {
            label: "Languages",
            items: ["Python"],
          },
          {
            label: "Backend and Databases",
            items: [
              "FastAPI",
              "Pydantic",
              "SQLAlchemy",
              "REST API",
              "PostgreSQL",
            ],
          },
          {
            label: "Authentication and API",
            items: ["JWT Authentication", "Stripe API", "SendGrid"],
          },
        ],
      },
      {
        position:
          "Backend Developer (Freelance, Full-time) PrestigeFly - Premium Aviation Services",
        company: "PrestigeFly",
        period: "December 2024 - June 2025",
        description:
          "Developed from scratch, paired with a backend developer, a CRM system for managing premium airline ticket sales, ensuring the full cycle from lead to deal closure.\n- Designed, together with the team, the PostgreSQL database architecture considering complex business logic: lead management, multi-stage sales process, financial reporting, and role-based access model.\n- Developed REST API on FastAPI for interaction with Vue.js frontend.\n- Implemented sales module with automatic profit calculation (Revenue/Award Sales), support for multiple tariff tables, and financial analytics on transactions.\n- Integrated Stripe payment system with support for additional options (Ticket Protection), ensuring secure storage of payment data with role-based access control.\n- Implemented automatic email notification system via SendGrid for sending offers to clients, generating tickets, and order status notifications.\n- Implemented authorization and access rights system for 5 role types (Administrator, Sales Agent, Supervisor, Customer Support, Expert Agent) with various data access levels.\n- Developed lead management system with automatic distribution, status tracking, and duplicate prevention.\n- System successfully launched in production and is used for processing premium ticket sales.",
        techGroups: [
          {
            label: "Languages",
            items: ["Python"],
          },
          {
            label: "Backend and Databases",
            items: [
              "FastAPI",
              "Pydantic",
              "SQLAlchemy",
              "REST API",
              "PostgreSQL",
            ],
          },
          {
            label: "Authentication and API",
            items: ["JWT Authentication", "Stripe API", "SendGrid"],
          },
        ],
      },
      {
        position: "Python Developer (Intern)",
        company: "Tele2 Kazakhstan",
        period: "February 2024 - June 2024",
        description:
          "Developed a web application to automate sales accounting for 20+ managers.\n- Implemented analytics system with Pandas - management received a tool for decision making.\n- Implemented role-based access model (manager/administrator) with Django ORM.\n- Created a dashboard for monitoring plan execution with visualization.\n- Implemented sales plan execution control with data visualization.\n- Configured application containerization using Docker.",
        techGroups: [
          {
            label: "Languages",
            items: ["Python"],
          },
          {
            label: "Backend and Databases",
            items: ["Django", "SQLite"],
          },
          {
            label: "DevOps and Tools",
            items: ["Docker", "Linux", "Pandas"],
          },
        ],
      },
    ],

    // Education
    educationTitle: "🎓 Education",
    education: [
      {
        degree: "Computer Engineering and Software",
        institution: "Innovative University of Eurasia",
        period: "2020 - 2024",
      },
    ],

    // Skills
    skillsTitle: "🚀 Technical Skills",
    softSkillsTitle: "💡 Soft Skills",
    languagesTitle: "🌐 Languages",
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
          { name: "GraphQL", level: 75 },
          { name: "Prisma", level: 80 },
        ],
      },
      {
        category: "AI and Data Science",
        items: [
          { name: "Pandas", level: 85 },
          { name: "NumPy", level: 80 },
          { name: "PyTorch", level: 80 },
          { name: "TensorFlow", level: 75 },
          { name: "Jupyter", level: 85 },
          { name: "Streamlit", level: 80 },
          { name: "Pinecone", level: 85 },
          { name: "Weaviate", level: 80 },
          { name: "ChromaDB", level: 85 },
          { name: "Qdrant", level: 80 },
          { name: "FAISS", level: 85 },
        ],
      },
      {
        category: "Databases",
        items: [
          { name: "PostgreSQL", level: 85 },
          { name: "MongoDB", level: 80 },
          { name: "Redis", level: 75 },
          { name: "MySQL", level: 80 },
          { name: "Sqlite", level: 80 },
          { name: "Elasticsearch", level: 75 },
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
          { name: "AWS", level: 75 },
          { name: "Google Cloud", level: 75 },
          { name: "DigitalOcean", level: 80 },
          { name: "Vercel", level: 85 },
          { name: "Azure", level: 75 },
          { name: "Firebase", level: 80 },
          { name: "Supabase", level: 80 },
          { name: "Heroku", level: 75 },
          { name: "Railway", level: 75 },
          { name: "Traefik", level: 75 },
          { name: "GitHub Actions", level: 75 },
        ],
      },
      {
        category: "Frontend",
        items: [
          { name: "React", level: 90 },
          { name: "Next.js", level: 90 },
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
      "Team Collaboration",
      "Agile/Scrum",
      "Creativity",
      "Self-Organization",
      "Fast Learning",
      "Problem Solving",
      "Attention to Detail",
      "Technical Documentation",
      "Analytical Thinking",
    ],
    languages: [
      { name: "Russian", level: "C2 - Native" },
      { name: "English", level: "B2 - Intermediate" },
    ],

    // Projects
    projectsTitle: "🎨 Projects",
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
