const translations = {
  ru: {
    // TopBar
    portfolio: "CV",
    downloadResume: "Скачать CV",

    // Header
    name: "Денис Максимович",
    title: "Fullstack Developer",

    // About
    aboutTitle: "👤 О себе",
    aboutText:
      "Fullstack-разработчик с опытом разработки комплексных веб-приложений и AI-powered решений. Начинал карьеру с frontend-разработки, углубился в backend-технологии, сейчас специализируюсь на fullstack-разработке с акцентом на создание масштабируемых приложений. Владею широким стеком технологий: JavaScript/TypeScript (React, Node.js), Python (FastAPI), Go, PHP, а также опытом работы с Docker, базами данных и интеграцией AI-сервисов. Разрабатывал чат-боты, системы автоматизации и веб-приложения с интеграцией языковых моделей. Имею опыт оптимизации производительности, работы с многопоточностью и построения CI/CD пайплайнов.",

    // Contacts
    contactsTitle: "📬 Контакты",
    email: "latundenis55@gmail.com",
    // phone: "номер",
    location: "Казахстан, Павлодар",
    github: "github.com/xpl0itK3y",
    telegram: "@xpl0itK3y",
    linkedin: "linkedin.com",
    headhunter: "pavlodar.hh.kz/resume/0338ebe5ff0f1d55450039ed1f52566f696257",

    // Experience
    experienceTitle: "💼 Опыт работы",
    experiences: [
      {
        position: "Fullstack-разработчик",
        company: "Фриланс",
        period: "Июль 2025 - настоящее время",
        description:
          "Проектирование и разработка fullstack веб-приложений с интеграцией AI-сервисов и языковых моделей. Разработка Telegram-ботов различной сложности: от простых уведомлений до сложных диалоговых систем с AI-функционалом, обработкой команд, платёжными системами и автоматизацией бизнес-процессов. Реализация RESTful API на FastAPI с асинхронной архитектурой, JWT-аутентификацией, системами ролей и real-time обновлениями. Интеграция Telegram Bot API через aiogram и Telethon для создания интеллектуальных чат-ботов, автоответчиков и CRM-систем. Создание адаптивных пользовательских интерфейсов с использованием React, Vue и Vanilla JavaScript. Оптимизация производительности через многопоточность (asyncio, threading, ThreadPoolExecutor) для обработки высоких нагрузок. Проектирование баз данных (PostgreSQL, SQLite, MongoDB), реализация кэширования (Redis). Контейнеризация приложений с Docker/Docker Compose для быстрого развёртывания.",
        technologies: [
          "Python",
          "FastAPI",
          "Aiogram",
          "Telethon",
          "JavaScript",
          "React",
          "Vue.js",
          "Docker",
          "Docker Compose",
          "PostgreSQL",
          "SQLite",
          "MongoDB",
          "Redis",
          "DeepSeek API",
          "Asyncio",
          "Threading",
          "JWT",
          "Git",
          "aiohttp",
          "Webhooks",
        ],
      },
      {
        position: "Fullstack-разработчик",
        company: "Фриланс: PrestigeFly",
        period: "Декабрь 2024 - Июнь 2025",
        description:
          "Разрабатывал и внедрял веб-решения для внутренних систем компании на основе бизнес-требований. Поддерживал и оптимизировал существующий код, повышая стабильность и производительность. Участвовал в проектировании архитектуры и интеграции с внешними сервисами. Проводил тестирование, отладку и рефакторинг кода. Сотрудничал с командой дизайнеров и менеджеров для реализации функционала в срок. Контакты: artemis@prestigefly.com",
        technologies: ["React", "JavaScript", "Node.js"],
      },
      {
        position: "Frontend-разработчик",
        company: "Комитет по делам молодежи ИНЕУ",
        period: "Февраль 2024 - Июнь 2024",
        description:
          "Разработал веб-платформу для молодежных клубов университета - мини социальную сеть для студентов. Реализовал систему клубов с возможностью вступления и управления участниками. Создал функционал группового чата для общения внутри клубов в режиме реального времени. Разработал ленту новостей с публикацией событий и объявлений от клубов. Внедрил ролевую модель доступа (участник/модератор клуба/администратор) с использованием Django ORM. Создал личный профиль пользователя с отображением клубов и активности. Настроил систему уведомлений о новых сообщениях и событиях. Развернул приложение в Docker для упрощения деплоя",
        technologies: [
          "Python",
          "Django",
          "SQLite",
          "WebSockets/Django Channels",
          "Docker",
          "HTML/CSS/JavaScript",
          "Bootstrap",
        ],
      },
      {
        position: "Fullstack PHP разработчик",
        company: "Фриланс",
        period: "Октябрь 2023 - Январь 2024",
        description:
          "Разработал интернет-магазин на Laravel с применением архитектурных паттернов Repository и Service Layer. Реализовал каталог товаров с фильтрацией, поиском и пагинацией. Создал личный кабинет пользователя с историей заказов и административную панель для управления товарами. Разработал систему скидок, промокодов и бонусную программу с начислением баллов за покупки. Настроил автоматические email-уведомления о статусе заказов через Laravel Mail. Реализовал авторизацию и регистрацию с подтверждением email",
        technologies: [
          "PHP",
          "Laravel",
          "MySQL",
          "Docker",
          "Repository Pattern",
          "Service Layer",
          "Laravel Mail",
          "Authentication",
        ],
      },
      {
        position: "1С-разработчик (1С:Предприятие 8.3)",
        company: "Фриланс",
        period: "Сентябрь 2023 - Декабрь 2023",
        description:
          "Разработал систему автоматизации для книжного магазина на 1С:Предприятие. Реализовал функционал продаж: оформление заказов, работа с клиентами, печать документов (накладные, счета). Создал отчеты по продажам и остаткам товаров на складе. Настроил разграничение прав доступа для разных ролей (продавец, кассир, менеджер, администратор). Внедрил учет товаров с контролем остатков. Результат: переход с Excel на автоматизированную систему, ускорение обработки заказов в 2-3 раза",
        technologies: [
          "1С:Предприятие 8.3",
          "Встроенный язык 1С",
          "Механизм ролей",
          "Печатные формы",
          "Отчеты",
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
      // Frontend
      { name: "React / Next.js", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "JavaScript", level: 90 },
      { name: "Vue.js", level: 80 },
      { name: "HTML5", level: 95 },
      { name: "CSS / Tailwind", level: 88 },

      // Backend
      { name: "Node.js", level: 85 },
      { name: "Python", level: 80 },
      { name: "FastAPI", level: 80 },
      { name: "Django", level: 75 },
      { name: "Pandas", level: 75 },
      { name: "PHP", level: 75 },
      { name: "Laravel", level: 75 },
      { name: "Symfony", level: 70 },
      { name: "Go", level: 70 },

      // Databases
      { name: "PostgreSQL", level: 85 },
      { name: "MongoDB", level: 80 },
      { name: "Redis", level: 75 },
      { name: "MySQL", level: 80 },
      { name: "Sqlite", level: 80 },

      // DevOps & Tools
      { name: "Docker", level: 85 },
      { name: "Kubernetes", level: 75 },
      { name: "Git", level: 90 },
      { name: "Nginx", level: 80 },
      { name: "Linux", level: 85 },

      // Testing & CI/CD
      { name: "Jest", level: 80 },
      { name: "GitHub Actions", level: 75 },
      { name: "Pytest", level: 75 },
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

    // Header
    name: "Denis Maksimovich",
    title: "Full-stack Developer",

    // About
    aboutTitle: "👤 About Me",
    aboutText:
      "Full-stack developer with experience in developing complex web applications and AI-powered solutions. I started my career in front-end development, delved into back-end technologies, and now specialize in full-stack development with a focus on creating scalable applications. I have a broad technology stack: JavaScript/TypeScript (React, Node.js), Python (FastAPI), Go, PHP, as well as experience with Docker, databases, and AI service integration. I have developed chatbots, automation systems, and web applications with language model integration. I have experience in performance optimization, multithreading, and building CI/CD pipelines.",

    // Contacts
    contactsTitle: "📬 Contacts",
    email: "latundenis55@gmail.com",
    // phone: "номер",
    location: "Kazakhstan, Pavlodar",
    github: "github.com/xpl0itK3y",
    telegram: "@xpl0itK3y",
    linkedin: "linkedin.com",
    headhunter: "pavlodar.hh.kz/resume/0338ebe5ff0f1d55450039ed1f52566f696257",

    // Experience
    experienceTitle: "💼 Work Experience",
    experiences: [
      {
        position: "Full-stack developer",
        company: "Freelance",
        period: "July 2025 - present",
        description:
          "Design and development of fullstack web applications with AI service and language model integration. Development of Telegram bots of varying complexity: from simple notifications to sophisticated conversational systems with AI functionality, command processing, payment systems, and business process automation. Implementation of RESTful APIs on FastAPI with asynchronous architecture, JWT authentication, role-based systems, and real-time updates. Integration of Telegram Bot API via aiogram and Telethon to create intelligent chatbots, auto-responders, and CRM systems. Creation of responsive user interfaces using React, Vue, and Vanilla JavaScript. Performance optimization through multithreading (asyncio, threading, ThreadPoolExecutor) for high-load processing. Database design (PostgreSQL, SQLite, MongoDB), caching implementation (Redis). Application containerization with Docker/Docker Compose for rapid deployment.",
        technologies: [
          "Python",
          "FastAPI",
          "Aiogram",
          "Telethon",
          "JavaScript",
          "React",
          "Vue.js",
          "Docker",
          "Docker Compose",
          "PostgreSQL",
          "SQLite",
          "MongoDB",
          "Redis",
          "DeepSeek API",
          "Asyncio",
          "Threading",
          "JWT",
          "Git",
          "aiohttp",
          "Webhooks",
        ],
      },
      {
        position: "Full-stack developer",
        company: "Freelance: PrestigeFly",
        period: "December 2024 - June 2025",
        description:
          "Developed and implemented web solutions for internal company systems based on business requirements. Maintained and optimized existing codebase, improving stability and performance. Participated in architecture design and integration with external services. Conducted testing, debugging, and code refactoring. Collaborated with design and management teams to deliver functionality on schedule. Contact: artemis@prestigefly.com",
        technologies: ["React", "JavaScript", "Node.js"],
      },
      {
        position: "Frontend Developer",
        company: "Youth Affairs Committee of INEU",
        period: "February 2024 - June 2024",
        description:
          "Developed a web platform for university youth clubs - a mini social network for students. Implemented a club system with membership joining and participant management. Created group chat functionality for real-time communication within clubs. Built a news feed for publishing events and announcements from clubs. Implemented role-based access control (member/club moderator/administrator) using Django ORM. Created user profiles displaying clubs and activity. Set up notification system for new messages and events. Deployed the application using Docker for simplified deployment",
        technologies: [
          "Python",
          "Django",
          "SQLite",
          "WebSockets/Django Channels",
          "Docker",
          "HTML/CSS/JavaScript",
          "Bootstrap",
        ],
      },
      {
        position: "Fullstack PHP Developer",
        company: "Freelance",
        period: "October 2023 - January 2024",
        description:
          "Developed an e-commerce store on Laravel using Repository and Service Layer architectural patterns. Implemented product catalog with filtering, search, and pagination. Created user dashboard with order history and admin panel for product management. Developed discount system, promo codes, and loyalty program with points rewards for purchases. Set up automated email notifications for order status updates via Laravel Mail. Implemented authentication and registration with email verification",
        technologies: [
          "PHP",
          "Laravel",
          "MySQL",
          "Docker",
          "Repository Pattern",
          "Service Layer",
          "Laravel Mail",
          "Authentication",
        ],
      },
      {
        position: "1C Developer (1C:Enterprise 8.3)",
        company: "Freelance",
        period: "September 2023 - December 2023",
        description:
          "Developed an automation system for a bookstore on 1C:Enterprise platform. Implemented sales functionality: order processing, customer management, document printing (invoices, bills). Created reports for sales and inventory stock levels. Configured role-based access control for different roles (salesperson, cashier, manager, administrator). Implemented inventory management with stock control. Result: migrated from Excel to an automated system, accelerated order processing by 2-3 times",
        technologies: [
          "1C:Enterprise 8.3",
          "1C Built-in Language",
          "Role Mechanism",
          "Print Forms",
          "Reports",
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
      // Frontend
      { name: "React / Next.js", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "JavaScript", level: 90 },
      { name: "Vue.js", level: 80 },
      { name: "HTML5", level: 95 },
      { name: "CSS / Tailwind", level: 88 },

      // Backend
      { name: "Node.js", level: 85 },
      { name: "Python", level: 80 },
      { name: "FastAPI", level: 80 },
      { name: "Django", level: 75 },
      { name: "Pandas", level: 75 },
      { name: "PHP", level: 75 },
      { name: "Laravel", level: 75 },
      { name: "Symfony", level: 70 },
      { name: "Go", level: 70 },

      // Databases
      { name: "PostgreSQL", level: 85 },
      { name: "MongoDB", level: 80 },
      { name: "Redis", level: 75 },
      { name: "MySQL", level: 80 },
      { name: "Sqlite", level: 80 },

      // DevOps & Tools
      { name: "Docker", level: 85 },
      { name: "Kubernetes", level: 75 },
      { name: "Git", level: 90 },
      { name: "Nginx", level: 80 },
      { name: "Linux", level: 85 },

      // Testing & CI/CD
      { name: "Jest", level: 80 },
      { name: "GitHub Actions", level: 75 },
      { name: "Pytest", level: 75 },
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
