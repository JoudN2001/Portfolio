export interface Project {
  id: string;
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  tech: string[];
  github?: string;
  demo?: string;
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

export const personalInfo = {
  name: "Joud Kayyali",
  nameAr: "جود كيالي",
  title: "Software Engineer | Full-Stack Developer | System Architect",
  titleAr: "مهندس برمجيات | مطور Full-Stack | مهندس نظم",
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
    roleAr: "متدرب مطور واجهات أمامية",
    location: "Amman, Jordan",
    locationAr: "عمان، الأردن",
    period: "Oct 2025 – Present",
    periodAr: "أكتوبر 2025 – الحاضر",
    bullets: [
      "Transitioned to developing dynamic and scalable web interfaces utilizing modern frameworks including React and Next.js.",
      "Engineered type-safe components and scalable codebases using TypeScript, significantly improving code maintainability.",
      "Integrated and managed data flows with backend systems using RESTful APIs, Node.js, and PostgreSQL to ensure seamless user experiences.",
      "Collaborated directly with the development team to translate UI/UX wireframes into functional, cross-browser compatible applications."
    ],
    bulletsAr: [
      "التحول إلى تطوير واجهات ويب ديناميكية وقابلة للتوسع باستخدام أطر العمل الحديثة مثل React و Next.js.",
      "تصميم مكونات وقواعد بيانات قابلة للتوسع وآمنة باستخدام TypeScript، مما أدى إلى تحسين صيانة الكود بشكل كبير.",
      "دمج وإدارة تدفق البيانات مع أنظمة الواجهة الخلفية باستخدام واجهات RESTful APIs، Node.js، و PostgreSQL لضمان تجربة مستخدم سلسة.",
      "التعاون المباشر مع فريق التطوير لتحويل المخططات الهيكلية لتجربة/واجهة المستخدم إلى تطبيقات وظيفية متوافقة مع متصفحات متعددة."
    ]
  },
  {
    id: "shalati",
    company: "SHALATI PRINT",
    role: "Graphic Designer & IT Support",
    roleAr: "مصمم جرافيك ودعم فني",
    location: "Amman, Jordan",
    locationAr: "عمان، الأردن",
    period: "Aug 2024 – Oct 2025",
    periodAr: "أغسطس 2024 – أكتوبر 2025",
    bullets: [
      "Designed digital and print assets using Adobe Creative Suite and managed technical troubleshooting for production hardware/software to minimize downtime."
    ],
    bulletsAr: [
      "تصميم الأصول الرقمية والمطبوعة باستخدام حزمة Adobe Creative Suite وإدارة حل المشكلات التقنية لأجهزة/برامج الإنتاج لتقليل وقت التوقف عن العمل."
    ]
  },
  {
    id: "youtube",
    company: "YOUTUBE CHANNEL",
    role: "Content Creator",
    roleAr: "صانع محتوى تقني",
    location: "Remote",
    locationAr: "عن بعد",
    period: "2020 – 2021",
    periodAr: "2020 – 2021",
    bullets: [
      "Produced technology-focused content and building PC Hardware & Software, building a community and managing audience engagement."
    ],
    bulletsAr: [
      "إنتاج محتوى يركز على التكنولوجيا وتجميع الأجهزة/البرامج، مع بناء مجتمع وإدارة تفاعل الجمهور."
    ]
  }
];

export const projects: Project[] = [
  {
    id: "startup-platform",
    title: "Startup Investment Platform (Full-Stack Migration)",
    titleAr: "منصة استثمار الشركات الناشئة (Full-Stack Migration)",
    description: "Architecting Phase 4 system migration from React/Vite CSR to Next.js BFF. Designing secure DAL using Prisma ORM and Supabase PostgreSQL. Enforcing strict RBAC across 3 roles (Admin, Startup, Investor). Migrating legacy JS to strict TS.",
    descriptionAr: "هندسة وتنفيذ هجرة النظام للمرحلة الرابعة (Phase 4) من نموذج أولي يعتمد على React/Vite CSR إلى بنية متكاملة وجاهزة للإنتاج باستخدام Next.js Full-Stack (BFF). يتضمن بناء طبقة وصول بيانات آمنة (DAL) باستخدام Prisma ORM و Supabase PostgreSQL مع تطبيق نظام صارم للتحكم في الصلاحيات بناءً على الأدوار (RBAC).",
    tech: ["Next.js", "TypeScript", "Supabase", "Prisma ORM"],
    github: "https://github.com/JoudN2001/Startup-Investment-Platform",
    demo: "https://startup-investment-platform.vercel.app/",
    isFlagship: true,
    extraLinks: [
      { label: "System Flow", labelAr: "مخطط تدفق النظام", url: "https://lucid.app/lucidchart/72062dc7-26e1-49d7-8713-306f64dbdccf/edit" },
      { label: "Database Schema", labelAr: "مخطط قاعدة البيانات", url: "https://lucid.app/lucidchart/33eff361-3831-4b43-bf38-9b7e1ec494a3/edit" }
    ]
  },
  {
    id: "algorithm-project",
    title: "Route Optimization & Algorithm Analyzer",
    titleAr: "محلل خوارزميات تحسين المسارات",
    description: "Web platform to analyze Dijkstra and Bellman-Ford. Optimized with custom Priority Queue (Min-Heap). Stress-tested with complex edge cases and negative weight cycles.",
    descriptionAr: "منصة ويب لمحاكاة خوارزميات Dijkstra و Bellman-Ford. تم تحسينها باستخدام طابور أولويات مخصص (Min-Heap) واختبارها ضد تحديات الأوزان السلبية.",
    tech: ["JavaScript", "Data Structures", "Performance Testing"],
    github: "https://github.com/JoudN2001/Algorithm_Project",
    demo: "https://algorithm-project-silk.vercel.app/",
    isFlagship: true
  },
  {
    id: "os-scheduler",
    title: "OS CPU Scheduling Simulator (Team Project)",
    titleAr: "محاكي جدولة المعالج لأنظمة التشغيل",
    description: "Simulation engine animating FCFS, SJF, Round Robin, and Priority. Managed full lifecycle and architecture designs. Implemented synchronization and preemption logic with real-time Gantt charts.",
    descriptionAr: "محرك محاكاة ويب متقدم لتجسيد خوارزميات جدولة وحدة المعالجة المركزية الأساسية (FCFS, SJF, Round Robin, Priority) مع تمثيل مرني فوري عبر مخططات Gantt وتطبيق منطق التزامن الدقيق.",
    tech: ["JavaScript", "HTML5", "CSS3"],
    github: "https://github.com/JoudN2001/OS-Scheduler-Simulation-Project",
    demo: "https://joudn2001.github.io/OS-Scheduler-Simulation-Project",
    isFlagship: true
  },
  {
    id: "library-system",
    title: "Library Management System",
    titleAr: "نظام إدارة المكتبات",
    description: "Desktop app utilizing Java OOP and Swing. Relational SQL database integrated via JDBC for CRUD and authentication.",
    descriptionAr: "تطبيق مكتبي متكامل مبني على مبادئ البرمجة كائنية التوجه (OOP) بلغة Java مع واجهة رسومية باستخدام Swing، متصل بقاعدة بيانات علاقات SQL عن طريق بروتوكول JDBC لعمليات المعالجة المباشرة والتحقق.",
    tech: ["Java", "SQL", "JDBC", "Swing"],
    github: "https://github.com/JoudN2001/Library_Management_in_Java_GUI",
    isFlagship: true
  },
  {
    id: "weather-app",
    title: "Weather Application (API Integration)",
    titleAr: "تطبيق تتبع الطقس العالمي",
    description: "Real-time weather data fetching geolocation/climate data. Implemented i18n for Arabic/English.",
    descriptionAr: "تطبيق React.js يجلب بيانات المناخ والموقع الجغرافي الحية عبر واجهات برمجية RESTful خارجية.",
    tech: ["React.js", "RESTful APIs", "Postman", "JavaScript"],
    github: "https://github.com/JoudN2001/Weather-App",
    demo: "https://open-weather-api-app-live.netlify.app/",
    isFlagship: true
  },
  {
    id: "extension-manager",
    title: "Browser Extension Manager UI",
    titleAr: "واجهة مدير إضافات المتصفح",
    description: "Built from scratch with Vanilla JS (DOM manipulation). Custom Dark/Light mode theme toggle using CSS variables.",
    descriptionAr: "بُنيت بالكامل من الصفر باستخدام Vanilla JS لمعالجة DOM دون مكتبات خارجية. تتضمن إدارة حالة مخصصة للسمات الفاتحة والداكنة.",
    tech: ["JavaScript", "HTML5", "CSS3"],
    github: "https://github.com/JoudN2001/Browser-extension-manager-UI",
    demo: "https://joudn2001.github.io/Browser-extension-manager-UI/",
    isFlagship: true
  },
  {
    id: "task-manager",
    title: "Task Management Application (React.js)",
    titleAr: "تطبيق إدارة المهام التفاعلي",
    description: "SPA with full CRUD. Used Context API for scalable global state management (filtering, modals) without prop drilling.",
    descriptionAr: "تطبيق صفحة واحدة (SPA) مع عمليات CRUD كاملة. تم استخدام Context API لإدارة الحالة العالمية (كالتصفية والنوافذ المنبثقة) لتجنب تمرير الخصائص (Prop drilling).",
    tech: ["React.js", "Context API", "JavaScript", "CSS"],
    github: "https://github.com/JoudN2001/Todo-List-React",
    demo: "https://todos-tasks-react.netlify.app/",
    isFlagship: true
  }
];

export const archiveRepositories = [
  { title: "CampusConnect", titleAr: "CampusConnect", url: "https://github.com/JoudN2001/Campus-Connect", demo: "https://joudn2001.github.io/Campus-Connect/" },
  { title: "Portfolio (HTML/CSS)", titleAr: "Portfolio (HTML/CSS)", url: "https://github.com/JoudN2001/Build_portfolio_website_using_HTML_CSS", demo: "https://joudn2001.github.io/Build_portfolio_website_using_HTML_CSS/" },
  { title: "YouTube Clone", titleAr: "نسخة يوتيوب", url: "https://github.com/JoudN2001/Build_Youtube_clone" },
  { title: "Open Source First Contribution", titleAr: "أول مساهمة مفتوحة المصدر", url: "https://github.com/Yarob50/First-Contribution-ARABIC" }
];