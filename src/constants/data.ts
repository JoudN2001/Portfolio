export interface Project {
  id: string;
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  tech: string[];
  github?: string;
  demo?: string;
  image?: string;
  year: string;
  isFlagship: boolean;
  extraLinks?: { label: string; labelAr: string; url: string }[];
  bullets?: string[];
  bulletsAr?: string[];
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  roleAr: string;
  location: string;
  locationAr: string;
  period: string;
  periodAr: string;
  bullets: string[];
  bulletsAr: string[];
}

// ─── HERO TYPEWRITER DATA ────────────────────────────────────────────────────
export const heroData = {
  roles: {
    en: [
      "Software Engineer",
      "Full-Stack Architect",
      "Next.js Developer",
      "Algorithm Enthusiast",
      "Computer Science Student"
    ],
    ar: [
      "مهندس برمجيات",
      "مطور Full-Stack",
      "مطور Next.js",
      "شغوف بالخوارزميات وهندسة النظم",
      "طالب علوم حاسوب"
    ]
  }
};

export const personalInfo = {
  name: "Joud Kayyali",
  nameAr: "جود كيالي",
  title: "Software Engineer | Full-Stack Developer | System Architect",
  titleAr: "مهندس برمجيات | مطور متكامل (Full-Stack) | مهندس نظم",
  email: "joud.kayale@gmail.com",
  phone: "+962 7 8742 3661",
  linkedin: "https://linkedin.com/in/joudn2001",
  github: "https://github.com/JoudN2001",
  education: "W.I.S.E University (2023–2027) | Bachelor of Computer Science | GPA: 3.54",
  educationAr: "جامعة العلوم الإسلامية العالمية (2023–2027) | بكالوريوس في علم الحاسوب | المعدل: 3.54",
  location: "Amman, Jordan",
  locationAr: "عمان، الأردن"
};

export const experiences: Experience[] = [
  {
    id: "venturex",
    company: "The VentureX",
    role: "Frontend Developer Intern",
    roleAr: "متدرب - مطور واجهات أمامية",
    location: "Amman, Jordan",
    locationAr: "عمان، الأردن",
    period: "Oct 2024 – Present",
    periodAr: "أكتوبر 2024 – الحاضر",
    bullets: [
      "Architected and deployed dynamic, highly scalable web interfaces utilizing modern frameworks like React, Next.js, and TypeScript.",
      "Engineered type-safe components and modular codebases, drastically reducing runtime errors and significantly improving code maintainability.",
      "Integrated and managed complex data pipelines with backend systems utilizing RESTful APIs, Node.js, and PostgreSQL to ensure seamless, real-time user experiences.",
      "Developed a custom Browser Extension UI from scratch using strictly Vanilla JavaScript, demonstrating deep mastery of DOM manipulation and dynamic state management without relying on external libraries."
    ],
    bulletsAr: [
      "هندسة وبناء واجهات ويب تفاعلية وقابلة للتوسع باستخدام أحدث التقنيات مثل React و Next.js و TypeScript.",
      "برمجة مكونات آمنة ونظيفة (Type-safe) ساهمت في تقليل الأخطاء البرمجية وتحسين قابلية صيانة النظام وتطويره.",
      "ربط وإدارة تدفق البيانات المعقدة مع أنظمة الواجهة الخلفية (Backend) عبر واجهات RESTful APIs وقواعد بيانات PostgreSQL لضمان تجربة مستخدم سلسة وفورية.",
      "تطوير واجهة مدير إضافات متصفح (Browser Extension) من الصفر باستخدام Vanilla JavaScript، مما يعكس تحكماً عميقاً في الـ DOM وإدارة الحالة محلياً دون الاعتماد على مكتبات خارجية."
    ]
  },
  {
    id: "shalati",
    company: "SHALATI PRINT",
    role: "IT Support Specialist & Graphic Designer",
    roleAr: "أخصائي دعم فني ومصمم جرافيك",
    location: "Amman, Jordan",
    locationAr: "عمان، الأردن",
    period: "Aug 2024 – Oct 2024",
    periodAr: "أغسطس 2024 – أكتوبر 2024",
    bullets: [
      "Managed rapid technical troubleshooting for production hardware and software systems, successfully minimizing operational downtime.",
      "Designed compelling digital and print assets using Adobe Creative Suite, blending visual aesthetics with functional requirements."
    ],
    bulletsAr: [
      "إدارة الحلول التقنية السريعة لأعطال أنظمة الإنتاج (أجهزة وبرمجيات)، مما ساهم في تقليل أوقات التوقف عن العمل وضمان استمرارية الإنتاج.",
      "تصميم أصول رقمية ومطبوعة احترافية باستخدام حزمة Adobe Creative Suite، مع دمج اللمسة الجمالية بالمتطلبات الوظيفية."
    ]
  },
  {
    id: "youtube",
    company: "TECH YOUTUBE CHANNEL",
    role: "Content Creator & Hardware Enthusiast",
    roleAr: "صانع محتوى تقني",
    location: "Remote",
    locationAr: "عن بعد",
    period: "2020 – 2021",
    periodAr: "2020 – 2021",
    bullets: [
      "Produced engaging, technology-focused content specializing in PC hardware building, software optimization, and tech reviews.",
      "Built and managed a highly interactive digital community, translating complex technical concepts into accessible content for a broad audience."
    ],
    bulletsAr: [
      "إنتاج محتوى مرئي متخصص في تكنولوجيا الحاسوب، تجميع الأجهزة (PC Building)، وتحسين أداء البرمجيات.",
      "بناء وإدارة مجتمع رقمي متفاعل، وتبسيط المفاهيم التقنية المعقدة لتكون في متناول الجمهور الواسع."
    ]
  }
];

export const projects: Project[] = [
  // ── FLAGSHIP ──────────────────────────────────────────────────────────────
  {
    id: "startup-platform",
    year: "2026",
    title: "Startup Investment Platform (Full-Stack MVP)",
    titleAr: "منصة استثمار الشركات الناشئة (منتج متكامل)",
    description: "Successfully architected and deployed a production-ready Full-Stack Backend-For-Frontend (BFF) MVP. Built with Next.js and strict TypeScript. Engineered a highly secure Data Access Layer (DAL) utilizing Prisma ORM and Supabase PostgreSQL. Implemented complex state machines (XState) and enforced rigorous Role-Based Access Control (RBAC) alongside Row Level Security (RLS) to seamlessly manage end-to-end investment lifecycles across Admin, Startup, and Investor dashboards.",
    descriptionAr: "هندسة وتطوير منتج أولي متكامل (MVP) جاهز للإنتاج بنظام Backend-For-Frontend (BFF). تم بناء المنصة باستخدام Next.js و TypeScript، مع تصميم طبقة وصول بيانات (DAL) فائقة الأمان باستخدام Prisma ORM و Supabase PostgreSQL. تم تطبيق تحكم صارم بالصلاحيات (RBAC) وأمان على مستوى السجلات (RLS) لإدارة دورة حياة الاستثمار بالكامل عبر لوحات تحكم مستقلة للإدارة، الشركات الناشئة، والمستثمرين.",
    tech: ["Next.js", "TypeScript", "Supabase", "Prisma ORM", "XState", "PostgreSQL"],
    github: "https://github.com/JoudN2001/Startup-Investment-Platform",
    demo: "https://startup-investment-platform.vercel.app/",
    image: "/projectThumbnail/startup-platform.png",
    isFlagship: true,
    extraLinks: [
      { label: "System Architecture", labelAr: "مخطط هيكلية النظام", url: "https://lucid.app/lucidchart/72062dc7-26e1-49d7-8713-306f64dbdccf/edit" },
      { label: "Database Schema", labelAr: "مخطط قاعدة البيانات", url: "https://lucid.app/lucidchart/33eff361-3831-4b43-bf38-9b7e1ec494a3/edit" }
    ]
  },
  {
    id: "algorithm-project",
    year: "2025",
    title: "Route Optimization & Algorithm Analyzer",
    titleAr: "محلل خوارزميات تحسين المسارات",
    description: "Engineered a visualization platform to rigorously analyze, simulate, and compare shortest-path graph algorithms (Dijkstra, Bellman-Ford). Optimized execution times by implementing a custom Min-Heap Priority Queue, successfully stress-testing the engine against massive datasets and complex negative weight cycles.",
    descriptionAr: "منصة ويب لتحليل ومحاكاة خوارزميات الرسوم البيانية (Dijkstra, Bellman-Ford). تم تحسين الأداء الزمني للخوارزميات عبر بناء هيكل بيانات طابور أولويات مخصص (Min-Heap)، مع إجراء اختبارات جهد قاسية لمعالجة مشكلة الدورات السلبية في البيانات الضخمة.",
    tech: ["JavaScript", "Data Structures", "Min-Heap", "Performance Testing"],
    github: "https://github.com/JoudN2001/Algorithm_Project",
    demo: "https://algorithm-project-silk.vercel.app/",
    image: "/projectThumbnail/algorithm-project.png",
    isFlagship: true
  },
  {
    id: "library-system",
    year: "2024",
    title: "Enterprise Library Management System",
    titleAr: "نظام الإدارة المؤسسية للمكتبات",
    description: "Architected a robust desktop application utilizing strict Java Object-Oriented Programming (OOP) principles and Swing GUI components. Engineered a relational SQL database architecture, integrated seamlessly via JDBC, ensuring data integrity through comprehensive CRUD operations and secure authentication workflows.",
    descriptionAr: "تصميم وبناء تطبيق مكتبي قوي يعتمد على مبادئ البرمجة كائنية التوجه (OOP) بلغة Java مع واجهة Swing. يتصل النظام بقاعدة بيانات SQL علائقية عبر JDBC لضمان تكامل البيانات، مع توفير نظام مصادقة آمن وعمليات إدارة (CRUD) شاملة.",
    tech: ["Java", "SQL", "JDBC", "Swing", "OOP"],
    github: "https://github.com/JoudN2001/Library_Management_in_Java_GUI",
    image: "",
    isFlagship: true
  },
  {
    id: "os-scheduler",
    year: "2025",
    title: "OS CPU Scheduling Simulator",
    titleAr: "محاكي أنظمة تشغيل وحدة المعالجة (OS Scheduler)",
    description: "Collaborated within an agile team to engineer a comprehensive web-based simulation engine animating core OS CPU scheduling algorithms (FCFS, SJF, Round Robin, and Priority). Solved complex process preemption and synchronization logic, computing real-time performance metrics visualized via dynamic Gantt charts.",
    descriptionAr: "تطوير محرك محاكاة متقدم يجسد خوارزميات جدولة المعالج في أنظمة التشغيل (FCFS, SJF, Round Robin, Priority). تم حل مشكلات التزامن المعقدة وحساب مقاييس الأداء في الوقت الفعلي مع عرض مرئي ديناميكي لمخططات Gantt.",
    tech: ["JavaScript", "HTML5", "CSS3", "System Architecture"],
    github: "https://github.com/JoudN2001/OS-Scheduler-Simulation-Project",
    demo: "https://joudn2001.github.io/OS-Scheduler-Simulation-Project",
    image: "/projectThumbnail/os-scheduler.png",
    isFlagship: true
  },
  {
    id: "campus-connect",
    year: "2026",
    title: "CampusConnect (Event Management System)",
    titleAr: "نظام إدارة الفعاليات الجامعية (CampusConnect)",
    description: "Designed and developed a comprehensive admin dashboard and user interface for a university event management platform. Built the dynamic frontend using Vanilla JavaScript, HTML5, and CSS3. Architected the database schema and server-side operations using PHP and MySQL to handle secure user administration, event creation, and registration tracking.",
    descriptionAr: "تصميم وتطوير منصة شاملة لإدارة الفعاليات الجامعية بلوحة تحكم إدارية متكاملة. تم بناء الواجهة الأمامية باستخدام Vanilla JavaScript و CSS3، مع هندسة قواعد البيانات ومعالجة العمليات في الخلفية باستخدام PHP و MySQL لإدارة المستخدمين، إنشاء الفعاليات، وتتبع التسجيلات بأمان.",
    tech: ["PHP", "MySQL", "JavaScript", "HTML5", "CSS3"],
    github: "https://github.com/JoudN2001/Campus-Connect",
    demo: "",
    image: "/projectThumbnail/campus-connect.png",
    isFlagship: true,
  },
  // ── ARCHIVE ───────────────────────────────────────────────────────────────
  {
    id: "weather-app",
    year: "2026",
    title: "Global Weather Tracking Application",
    titleAr: "تطبيق تتبع المناخ العالمي",
    description: "Developed a dynamic tracking application utilizing React.js. Seamlessly integrated third-party RESTful APIs for precise geolocation data. Conducted rigorous endpoint testing via Postman and implemented scalable i18n support for seamless bilingual (Arabic/English) experiences.",
    descriptionAr: "تطبيق React.js ديناميكي يجلب بيانات المناخ الحية عبر ربط واجهات برمجية خارجية (RESTful APIs). تم اختبار نقاط الاتصال بدقة باستخدام Postman، مع دعم كامل لتعدد اللغات (العربية/الإنجليزية) لضمان تجربة مستخدم مثالية.",
    tech: ["React.js", "RESTful APIs", "Postman", "i18n"],
    github: "https://github.com/JoudN2001/Weather-App",
    demo: "https://open-weather-api-app-live.netlify.app/",
    image: "/projectThumbnail/weather-app.png",
    isFlagship: false
  },
  {
    id: "printsmart-architecture",
    year: "2026",
    title: "PrintSmart (System Architecture & Analysis)",
    titleAr: "هيكلية وتحليل النظم (PrintSmart)",
    description: "A comprehensive system analysis and architecture design project. Includes multi-phase technical documentation, Logical/Physical Data Flow Diagrams (DFD), Network topologies, Gantt charts, and Use Case modeling.",
    descriptionAr: "مشروع متكامل لتحليل وهندسة النظم. يتضمن توثيق تقني متعدد المراحل، مخططات تدفق البيانات (DFD) المنطقية والفيزيائية، تصميم الشبكات، مخططات جانت، ونمذجة حالات الاستخدام (Use Cases).",
    tech: ["System Architecture", "UML / DFD", "Network Design", "Documentation"],
    github: "https://github.com/JoudN2001/PrintSmart-System-Architecture",
    demo: "",
    image: "/projectThumbnail/printsmart-architecture.png",
    isFlagship: false,
  },
  {
    id: "distributed-systems-nosql",
    year: "2026",
    title: "Distributed Systems & NoSQL Architecture",
    titleAr: "هيكلية النظم الموزعة وقواعد بيانات NoSQL",
    description: "An architectural exploration of distributed systems and NoSQL databases. Modeled and designed data across multiple paradigms including Graph (Neo4j), Wide-Column (Cassandra), Key-Value (Redis), and Hadoop Distributed File System (HDFS) architectures. Included comprehensive relational database normalization (1NF to 3NF).",
    descriptionAr: "مشروع هندسي لاستكشاف النظم الموزعة وقواعد البيانات غير العلائقية (NoSQL). تم تصميم ونمذجة البيانات عبر عدة هياكل تشمل قواعد البيانات البيانية (Neo4j)، الأعمدة الواسعة (Cassandra)، القيمة-المفتاح (Redis)، ومعمارية نظام ملفات هادوب الموزع (HDFS). تضمن المشروع أيضاً تسوية كاملة لقواعد البيانات العلائقية (Normalization) حتى المستوى الثالث (3NF).",
    tech: ["NoSQL", "Cassandra", "Neo4j", "Redis", "HDFS", "Data Modeling"],
    github: "https://github.com/JoudN2001/Database-Management-Project",
    demo: "",
    image: "/projectThumbnail/nosql-architecture.jpg",
    isFlagship: false,
  },
  {
    id: "python-basics",
    year: "2026",
    title: "Python Utilities (CLI Scripts)",
    titleAr: "أدوات بايثون المصغرة",
    description: "A collection of foundational Python command-line interface (CLI) scripts. Includes logic for utility operations such as generating electricity bills and managing simple course registrations.",
    descriptionAr: "مجموعة من النصوص البرمجية (Scripts) التأسيسية بلغة بايثون وتعمل عبر سطر الأوامر (CLI). تتضمن منطقاً برمجياً لعمليات حسابية مبسطة مثل إصدار فواتير الكهرباء وإدارة تسجيل المواد.",
    tech: ["Python", "CLI"],
    github: "https://github.com/JoudN2001/python-project",
    demo: "",
    image: "",
    isFlagship: false,
  },
  {
    id: "extension-manager",
    year: "2025",
    title: "Vanilla JS Browser Extension Manager UI",
    titleAr: "واجهة مدير الإضافات (Vanilla JS)",
    description: "Built entirely from scratch utilizing strict Vanilla JavaScript, showcasing advanced DOM manipulation. Engineered a persistent custom Dark/Light mode theme toggle through state management and CSS custom properties.",
    descriptionAr: "واجهة بُنيت بالكامل من الصفر دون مكاتب خارجية لإثبات قوة التحكم بالـ DOM باستخدام Vanilla JS. تتضمن نظاماً مبتكراً للتبديل بين الوضع الليلي والنهاري بالاعتماد على إدارة الحالة ومتغيرات CSS.",
    tech: ["Vanilla JS", "DOM Manipulation", "CSS3"],
    github: "https://github.com/JoudN2001/Browser-extension-manager-UI",
    demo: "https://joudn2001.github.io/Browser-extension-manager-UI/",
    image: "/projectThumbnail/extension-manager.png",
    isFlagship: false
  },
  {
    id: "task-manager",
    year: "2026",
    title: "Scalable Task Management SPA",
    titleAr: "تطبيق إدارة المهام (SPA)",
    description: "Engineered a dynamic Single Page Application (SPA) utilizing React.js. Leveraged the React Context API for highly scalable global state management, efficiently handling data filtering and interactive UI modals without prop drilling.",
    descriptionAr: "تطبيق صفحة واحدة (SPA) تفاعلي يدعم عمليات (CRUD) كاملة. تم استخدام React Context API لإدارة الحالة العالمية بكفاءة عالية، وتصفية البيانات بمرونة دون تعقيد نقل الخصائص (Prop Drilling).",
    tech: ["React.js", "Context API", "State Management"],
    github: "https://github.com/JoudN2001/Todo-List-React",
    demo: "https://todos-tasks-react.netlify.app/",
    image: "/projectThumbnail/todos-tasks.png",
    isFlagship: false
  },
  {
    id: "campus-connect",
    year: "2026",
    title: "CampusConnect Event Dashboard",
    titleAr: "لوحة تحكم منصة CampusConnect",
    description: "Designed and structured a comprehensive admin dashboard interface for a university event management platform. Architected the frontend data structures to seamlessly integrate with an upcoming PHP/MySQL server-side backend.",
    descriptionAr: "تصميم لوحة تحكم إدارية متكاملة لمنصة تنظيم الفعاليات الجامعية. تم بناء هياكل واجهة المستخدم لتكون جاهزة للاندماج السلس مع خوادم الواجهة الخلفية (PHP/MySQL).",
    tech: ["HTML5", "CSS3", "JavaScript", "UI Architecture"],
    github: "https://github.com/JoudN2001/Campus-Connect",
    demo: "https://joudn2001.github.io/Campus-Connect/",
    image: "",
    isFlagship: false
  },
  {
    id: "youtube-clone",
    year: "2025",
    title: "Complex UI Architecture (YouTube Clone)",
    titleAr: "هيكلية واجهات معقدة (نسخة يوتيوب)",
    description: "Developed a pixel-perfect, fully responsive web interface clone of YouTube. Demonstrated mastery of complex DOM structuring and pure CSS layout techniques (Flexbox and Grid) without relying on external UI frameworks.",
    descriptionAr: "بناء نسخة مطابقة تماماً ومتجاوبة لواجهة موقع يوتيوب. يثبت هذا المشروع التمكن التام من هيكلة الـ DOM المعقدة وتقنيات التخطيط المتقدمة (Flexbox/Grid) باستخدام CSS نقي دون مكتبات جاهزة.",
    tech: ["HTML5", "CSS Grid", "Flexbox", "Responsive Design"],
    github: "https://github.com/JoudN2001/Build_Youtube_clone",
    isFlagship: false
  },
  {
    id: "first-contribution",
    year: "2026",
    title: "Open Source Contributor",
    titleAr: "مساهمة مفتوحة المصدر",
    description: "Actively participated in the open-source community by making an initial contribution to an Arabic developer repository, gaining practical experience with Git version control and collaborative workflows.",
    descriptionAr: "المشاركة الفعالة في مجتمع المصادر المفتوحة عبر تقديم مساهمة أولية لمستودع مجتمع المطورين العرب، مما عزز من خبرة التعامل مع أنظمة التحكم بالإصدارات (Git) والعمل الجماعي.",
    tech: ["Git", "GitHub", "Open Source"],
    github: "https://github.com/Yarob50/First-Contribution-ARABIC",
    isFlagship: false
  },
  {
    id: "portfolio-html",
    year: "2025",
    title: "Legacy Personal Portfolio",
    titleAr: "المحفظة الشخصية المبدئية",
    description: "The foundational milestone of my web development journey. A fully responsive personal portfolio built entirely from scratch utilizing semantic HTML and custom CSS.",
    descriptionAr: "نقطة الانطلاق في مسيرتي البرمجية. موقع محفظة شخصية متجاوب تم بناؤه من الصفر للاعتماد الكامل على مفاهيم HTML الدلالية وتنسيقات CSS المخصصة.",
    tech: ["HTML", "CSS", "UI Design"],
    github: "https://github.com/JoudN2001/Build_portfolio_website_using_HTML_CSS",
    demo: "https://joudn2001.github.io/Build_portfolio_website_using_HTML_CSS/",
    isFlagship: false
  }
];