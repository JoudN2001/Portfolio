// src/constants/data.ts

export const PORTFOLIO_DATA = {
    personal: {
        name: "Joud Kayyali",
        title: "Software Engineer | Full-Stack Developer | System Architect",
        bio: "A Results-driven Computer Science undergraduate (GPA: 3.54) at W.I.S.E University (2023–2027). Specializing in Full-Stack web development, system architecture, and algorithmic optimization. Possesses a strong graphic design background, blending strict logical problem-solving (OS schedulers, graph algorithms) with beautiful, user-centric interfaces.",
        contact: {
            email: "joud.kayale@gmail.com",
            phone: "+962 7 8742 3661",
            linkedin: "https://www.linkedin.com/in/joudn2001/",
            github: "https://github.com/JoudN2001",
            x: "https://x.com/JoudN2001",
            instagram: "https://www.instagram.com/joud303_n/",
        }
    },
    experience: [
        {
            company: "The VentureX",
            role: "Frontend Developer Intern",
            date: "Oct 2024 – Present",
            location: "Amman, Jordan",
            highlights: [
                "Transitioned to developing dynamic and scalable web interfaces utilizing modern frameworks including React and Next.js.",
                "Built a custom Browser Extension Manager UI from scratch using Vanilla JS (demonstrating pure DOM manipulation mastery).",
                "Engineered type-safe components and scalable codebases using TypeScript, significantly improving code maintainability.",
                "Integrated and managed data flows with backend systems using RESTful APIs, Node.js, and PostgreSQL to ensure seamless user experiences."
            ]
        },
        {
            company: "Shalati Print",
            role: "Graphic Designer & IT Support",
            date: "Aug 2024 – Oct 2024",
            location: "Amman, Jordan",
            highlights: [
                "Managed technical troubleshooting for production hardware/software to minimize downtime.",
                "Designed digital and print assets using Adobe Creative Suite."
            ]
        },
        {
            company: "YouTube Channel (Remote)",
            role: "Content Creator",
            date: "2020 – 2021",
            location: "Remote",
            highlights: [
                "Produced technology-focused content, building PC Hardware & Software.",
                "Built a community and managed audience engagement."
            ]
        }
    ],
    flagshipProjects: [
        {
            title: "Startup Investment Platform (Full-Stack Migration)",
            techStack: ["Next.js", "TypeScript", "Supabase", "Prisma ORM", "RBAC"],
            repo: "https://github.com/JoudN2001/Startup-Investment-Platform",
            description: "A Phase 4 migration from a React/Vite CSR prototype to a production-ready Next.js Full-Stack Backend-For-Frontend (BFF) architecture. Implements strict Role-Based Access Control (RBAC) and a secure Data Access Layer (DAL) using Supabase and Prisma ORM.",
            links: [
                { label: "System Flow (Lucidchart)", url: "https://lucid.app/lucidchart/72062dc7-26e1-49d7-8713-306f64dbdccf/edit" },
                { label: "Database Schema (Lucidchart)", url: "https://lucid.app/lucidchart/33eff361-3831-4b43-bf38-9b7e1ec494a3/edit" }
            ]
        },
        {
            title: "Route Optimization & Algorithm Analyzer",
            techStack: ["JavaScript", "Data Structures", "Min-Heap", "Graph Theory"],
            repo: "https://github.com/JoudN2001/Algorithm_Project",
            description: "Web-based visualization platform for Dijkstra and Bellman-Ford algorithms. Optimized with a custom Priority Queue (Min-Heap) for large-scale graphs and stress-tested against complex negative weight cycles."
        },
        {
            title: "OS CPU Scheduling Simulator",
            techStack: ["JavaScript", "HTML5", "CSS3", "Algorithms"],
            repo: "https://github.com/JoudN2001/OS-Scheduler-Simulation-Project",
            description: "A team-engineered simulation engine animating FCFS, SJF, Round Robin, and Priority algorithms with real-time Gantt charts. Managed full software engineering lifecycle and comprehensive documentation."
        },
        {
            title: "Library Management System",
            techStack: ["Java", "OOP", "SQL", "JDBC", "Swing GUI"],
            repo: "https://github.com/JoudN2001/Library_Management_in_Java_GUI",
            description: "A robust Java OOP desktop application with a Swing GUI, integrated seamlessly with a relational SQL database via JDBC for full CRUD and authentication operations."
        },
        {
            title: "Weather Application (API Integration)",
            techStack: ["React.js", "RESTful APIs", "Postman", "i18n"],
            repo: "https://github.com/JoudN2001/Weather-App",
            description: "Dynamic React.js app fetching real-time geolocation/climate data via RESTful APIs, thoroughly tested via Postman, featuring full Arabic/English i18n support."
        },
        {
            title: "Browser Extension Manager UI",
            techStack: ["Vanilla JS", "DOM Manipulation", "CSS Variables"],
            repo: "https://github.com/JoudN2001/Browser-extension-manager-UI",
            description: "Built completely from scratch using Vanilla JS and CSS, demonstrating pure DOM manipulation and persistent custom state management for dark/light themes without external libraries."
        }
    ],
    archive: [
        { title: "CampusConnect", url: "https://github.com/JoudN2001/Campus-Connect" },
        { title: "Todo-List-React", url: "https://github.com/JoudN2001/Todo-List-React" },
        { title: "Portfolio (HTML/CSS)", url: "https://github.com/JoudN2001/Build_portfolio_website_using_HTML_CSS" },
        { title: "YouTube Clone", url: "https://github.com/JoudN2001/Build_Youtube_clone" },
        { title: "Open Source First Contribution", url: "https://github.com/Yarob50/First-Contribution-ARABIC" }
    ]
};