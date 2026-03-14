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
      "Python Backend Engineer с 2+ годами опыта в разработке backend-систем, API и интеграционных решений. Имею практический опыт создания сервисов на FastAPI и Django, проектирования баз данных, разработки бизнес-логики и интеграции внешних систем. Работал с PostgreSQL, Redis и Docker, участвовал в развитии микросервисной архитектуры и принятии технических решений внутри команды. Также имею опыт AI-интеграций, включая LLM и RAG-подходы для прикладных задач. Рассматриваю backend и AI-focused роли в продуктовых командах, где могу приносить пользу через создание надёжных, масштабируемых и полезных решений.",

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
    totalExperience: "2+ года",
    experiences: [
      {
        position: "AI Engineer / LLM Engineer (Personal Projects)",
        company: "Open Source / GitHub",
        period: "Декабрь 2025 - настоящее время",
        description:
          "Разрабатываю AI/LLM-решения и open-source проекты в свободное время для углубления практической экспертизы в области RAG, мультиагентных систем, distributed architecture и applied AI. 1) Multi-language RAG Document Assistant. - Разработал production-ready RAG-систему с полным пайплайном обработки документов: chunking, embeddings, semantic retrieval и генерация ответов. - Использовал FAISS и Chroma для векторного хранения и similarity search. - Реализовал source attribution и prompt engineering для повышения точности и управляемости ответов. 2) Krisha Agent - Autonomous Real Estate AI Agent. - Разработал мультиагентную систему на LangGraph для автономного поиска квартир на Krisha.kz. - Реализовал асинхронный граф с параллельным обогащением данных через внешние API, structured outputs на Pydantic v2 и LLM-based scoring для ранжирования объявлений. - Настроил персистентную память, human-in-the-loop сценарии, Telegram-уведомления и observability через LangSmith и Sentry. 3) Crypto Sentiment Analysis Pipeline. - Спроектировал распределенную платформу из 4 Python-сервисов и Vue 3 SPA для real-time мониторинга крипторынка, включая цены, Telegram-стримы и новости. - Построил event-driven pipeline на asyncio, Redis Pub/Sub и FastAPI WebSockets с низкой задержкой доставки данных. - Реализовал ingestion данных через Telethon и REST polling, а также CI/CD и архитектурную документацию. 4) Multi-Agent Search and Research Optimizer (Perplexity-like). - Разработал мультиагентную систему на LangGraph для автономного поиска, парсинга и синтеза информации из интернета. - Реализовал динамическую декомпозицию сложных запросов, параллельное выполнение поисковых узлов и многоуровневый пайплайн сбора и очистки данных. - Использовал Pydantic v2, checkpointing и LangSmith для управления состоянием, типизации и трассировки выполнения. 5) Chrome Extension for Content Simplification. - Разработал Chrome Extension на Manifest V3 для упрощения сложного веб-контента с использованием LLM. - Построил FastAPI backend со streaming responses, SSE, JWT-based authentication и Google OAuth2. - Реализовал prompt engineering с несколькими режимами упрощения, кастомную i18n-систему и безопасное взаимодействие extension с backend. Все проекты доступны: github.com/xpl0itK3y",
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
              "Vue 3",
              "Vanilla JavaScript",
            ],
          },
          {
            label: "AI / LLM",
            items: [
              "OpenAI API",
              "DeepSeek API",
              "LangChain",
              "LangGraph",
              "LangSmith",
              "LlamaIndex",
              "RAG",
              "FAISS",
              "Chroma",
              "Structured Outputs",
              "Function Calling",
            ],
          },
          {
            label: "Базы данных и очереди",
            items: [
              "PostgreSQL",
              "SQLite",
              "MongoDB",
              "Redis",
              "Celery",
              "ARQ",
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
              "Sentry",
            ],
          },
          {
            label: "Интеграции и источники данных",
            items: [
              "DuckDuckGo Search",
              "2GIS API",
              "CoinGecko API",
              "CryptoPanic API",
              "Binance WSS",
            ],
          },
          {
            label: "Браузерные расширения",
            items: [
              "Manifest V3",
              "Chrome Extension API",
              "Shadow DOM",
              "Asyncio",
            ],
          },
        ],
      },
      {
        position: "Backend Developer",
        company: "Private Startup (NDA)",
        period: "Июнь 2025 - настоящее время",
        description:
          "Играл ведущую роль в backend-разработке и участвовал в принятии ключевых технических решений, связанных с архитектурой системы, выбором стека и инфраструктурой. - Спроектировал и разработал микросервисную архитектуру на FastAPI для обработки конкурентной нагрузки и масштабирования backend-компонентов. - Реализовал инфраструктурные решения для повышения стабильности, отказоустойчивости и гибкости маршрутизации сервиса. - Разработал AI-функциональность для автоматизации обработки текстовых данных и связанных бизнес-сценариев. - Настроил процесс развертывания с использованием Docker Compose и multi-stage builds, что улучшило воспроизводимость окружения и сопровождение проекта. - Внедрил мониторинг и observability с real-time метриками и health checks, а также использовал Redis для оптимизации производительности. - Участвовал в архитектурных обсуждениях и внедрении инженерных best practices внутри команды. - Усилил безопасность системы через механизмы аутентификации, шифрования, хеширования и ограничения запросов. - Также участвовал в развитии практик тестирования, включая unit/integration и нагрузочные тесты. - Система работает в production под реальной операционной нагрузкой.",
        techGroups: [
          {
            label: "Языки",
            items: ["Python"],
          },
          {
            label: "Backend",
            items: [
              "FastAPI",
              "Pydantic",
              "SQLAlchemy",
              "REST API",
              "Microservices",
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
          {
            label: "AI и обработка текста",
            items: ["OpenAI API", "NLP"],
          },
        ],
      },
      {
        position: "Backend Developer (Freelance Project)",
        company: "PrestigeFly (via freelance collaboration)",
        period: "Декабрь 2024 - Июнь 2025",
        description:
          "Участвовал в backend разработке CRM-системы для управления продажами авиабилетов премиум-класса в рамках проектной работы с другими backend разработчиками. - Система охватывала полный цикл работы с клиентом - от обработки лида до закрытия сделки. - Внес вклад в проектирование PostgreSQL базы данных с учетом сложной бизнес-логики, включая управление лидами, многоэтапный процесс продаж, финансовую отчетность и ролевую модель доступа. - Разрабатывал REST API на FastAPI для взаимодействия с frontend частью. - Реализовал backend функциональность, связанную с расчетом прибыли, поддержкой тарифных таблиц, транзакционной логикой и финансовой аналитикой. - Участвовал в интеграции Stripe и SendGrid, а также в реализации системы авторизации, разграничения прав доступа и логики управления лидами. - Система успешно работает в production несколько месяцев, обрабатывая высокие нагрузки.",
        techGroups: [
          {
            label: "Языки",
            items: ["Python"],
          },
          {
            label: "Backend-разработка",
            items: ["FastAPI", "Pydantic", "SQLAlchemy", "REST API", "JWT"],
          },
          {
            label: "Базы данных и кэширование",
            items: ["PostgreSQL", "Redis"],
          },
          {
            label: "Внешние сервисы и интеграции",
            items: ["Stripe API", "SendGrid"],
          },
        ],
      },
      {
        position: "Python/Django Developer (Diploma Project)",
        company: "Комитет по делам молодежи ИНЕУ",
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
      "Python Backend Engineer with 2+ years of experience in developing backend systems, APIs, and integration solutions. I have hands-on experience building services with FastAPI and Django, designing databases, implementing business logic, and integrating external systems. I have worked with PostgreSQL, Redis, and Docker, and contributed to the development of microservices architecture and technical decision-making within the team. I also have experience with AI integrations, including LLMs and RAG-based solutions for practical use cases. I am seeking backend or AI-focused roles in product teams where I can contribute by building reliable, scalable, and impactful solutions.",
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
    totalExperience: "2+ years",
    experiences: [
      {
        position: "AI Engineer / LLM Engineer (Personal Projects)",
        company: "Open Source / GitHub",
        period: "December 2025 - Present",
        description:
          "Developing AI/LLM solutions and open-source projects in personal time to deepen practical expertise in RAG, multi-agent systems, distributed architecture, and applied AI. Key projects:\n1) Multi-language RAG Document Assistant. - Built a production-ready RAG system with a full document processing pipeline: chunking, embeddings, semantic retrieval, and answer generation. - Used FAISS and Chroma for vector storage and similarity search. - Implemented source attribution and prompt engineering to improve answer accuracy and controllability. 2) Krisha Agent - Autonomous Real Estate AI Agent. - Developed a multi-agent system on LangGraph for autonomous apartment search on Krisha.kz. - Implemented an asynchronous graph with parallel data enrichment via external APIs, structured outputs with Pydantic v2, and LLM-based scoring for ranking listings. - Added persistent memory, human-in-the-loop workflows, Telegram notifications, and observability through LangSmith and Sentry. 3) Crypto Sentiment Analysis Pipeline. - Designed a distributed platform consisting of 4 Python services and a Vue 3 SPA for real-time crypto market monitoring, including prices, Telegram streams, and news. - Built an event-driven pipeline using asyncio, Redis Pub/Sub, and FastAPI WebSockets with low-latency data delivery. - Implemented data ingestion via Telethon and REST polling, as well as CI/CD and architecture documentation. 4) Multi-Agent Search & Research Optimizer (Perplexity-like). - Developed a multi-agent system on LangGraph for autonomous web search, parsing, and synthesis of online information. - Implemented dynamic decomposition of complex queries, parallel execution of search nodes, and a multi-stage pipeline for data collection and content cleaning. - Used Pydantic v2, checkpointing, and LangSmith for state management, typing, and execution tracing. 5) Chrome Extension for Content Simplification. - Built a Chrome Extension on Manifest V3 for simplifying complex web content with LLM support. - Developed a FastAPI backend with streaming responses, SSE, JWT-based authentication, and Google OAuth2. - Implemented prompt engineering with multiple simplification modes, a custom i18n system, and secure interaction between the extension and backend. All projects are available at: github.com/xpl0itK3y",
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
              "Vue 3",
              "Vanilla JavaScript",
            ],
          },
          {
            label: "AI / LLM",
            items: [
              "OpenAI API",
              "DeepSeek API",
              "LangChain",
              "LangGraph",
              "LangSmith",
              "LlamaIndex",
              "RAG",
              "FAISS",
              "Chroma",
              "Structured Outputs",
              "Function Calling",
            ],
          },
          {
            label: "Databases and Queues",
            items: [
              "PostgreSQL",
              "SQLite",
              "MongoDB",
              "Redis",
              "Celery",
              "ARQ",
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
              "Sentry",
            ],
          },
          {
            label: "Integrations and Data Sources",
            items: [
              "DuckDuckGo Search",
              "2GIS API",
              "CoinGecko API",
              "CryptoPanic API",
              "Binance WSS",
            ],
          },
          {
            label: "Browser Extensions",
            items: [
              "Manifest V3",
              "Chrome Extension API",
              "Shadow DOM",
              "Asyncio",
            ],
          },
        ],
      },
      {
        position: "Backend Developer",
        company: "Private Startup (NDA)",
        period: "June 2025 - Present",
        description:
          "Played a leading role in backend development and contributed to key technical decisions related to system architecture, technology selection, and infrastructure. - Designed and developed a FastAPI-based microservices architecture to handle concurrent workloads and scale backend components. - Implemented infrastructure solutions to improve service stability, fault tolerance, and routing flexibility. - Developed AI-powered functionality to automate text processing and related business workflows. - Set up the deployment process using Docker Compose and multi-stage builds, improving environment reproducibility and maintainability. - Implemented monitoring and observability with real-time metrics and health checks, and used Redis to optimize performance. - Participated in architectural discussions and the adoption of engineering best practices within the team. - Strengthened system security through authentication, encryption, hashing, and rate-limiting mechanisms. - Also contributed to testing practices, including unit, integration, and load testing. - The system has been running in production under real operational load.",

        techGroups: [
          {
            label: "Languages",
            items: ["Python"],
          },
          {
            label: "Backend Development",
            items: [
              "FastAPI",
              "Pydantic",
              "SQLAlchemy",
              "REST API",
              "Microservices",
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
          {
            label: "AI and Text Processing",
            items: ["OpenAI API", "NLP"],
          },
        ],
      },
      {
        position: "Backend Developer (Freelance Project)",
        company: "PrestigeFly (via freelance collaboration)",
        period: "December 2024 - June 2025",
        description:
          "Contributed to the backend development of a CRM system for managing premium-class airline ticket sales as part of a project collaboration with other backend developers. - The system covered the full customer lifecycle, from lead processing to deal closure. - Contributed to the design of a PostgreSQL database that supported complex business logic, including lead management, a multi-stage sales process, financial reporting, and a role-based access model. - Developed REST APIs with FastAPI for interaction with the frontend. - Implemented backend functionality related to profit calculation, pricing table support, transaction logic, and financial analytics. - Participated in the integration of Stripe and SendGrid, as well as in the implementation of authentication, access control, and lead management logic. - The system has been running successfully in production for several months, handling high workloads.",

        techGroups: [
          {
            label: "Languages",
            items: ["Python"],
          },
          {
            label: "Backend Development",
            items: ["FastAPI", "Pydantic", "SQLAlchemy", "REST API", "JWT"],
          },
          {
            label: "Databases and Caching",
            items: ["PostgreSQL", "Redis"],
          },
          {
            label: "External Services and Integrations",
            items: ["Stripe API", "SendGrid"],
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
