export const resumeData = {
  name: "Muhamad Amri Bin Azri",
  title: "Information Systems Engineering Graduate  ·  Aspiring Software Engineer",
  contact: {
    email: "amriazri89@gmail.com",
    phone: "+60 11-2899 5103",
    linkedin: { label: "linkedin.com/in/amriazri", url: "https://linkedin.com/in/amriazri" },
    github: { label: "github.com/amriazri89", url: "https://github.com/amriazri89" },
    location: "Wangsa Maju, Kuala Lumpur",
  },

  summary:
    "Recent Information Systems Engineering graduate (CGPA 3.71, Dean's List every semester) with a rare combination of academic excellence and real production delivery. Progressed from diploma intern → full-time Lead Developer → retained freelance consultant, architecting and shipping monolithic Java/Grails systems serving 1,500+ tenants across 13 business units. Primary backend languages are Java and C#. Current focus: full-stack .NET development using Clean Architecture, CQRS, Dapper, FluentValidation, and AWS — demonstrated by a live-deployed HRMS with a full CI/CD pipeline and AWS deployment.",

  highlights: [
    { icon: "🏆", label: "CGPA",             value: "3.71 · Dean's Every Sem" },
    { icon: "🏗️", label: "Production Systems", value: "1,500+ tenants · 13 BUs" },
    { icon: "🗃️", label: "Data Migrated",     value: "30,000+ records" },
    { icon: "🧪", label: "Automated Tests",   value: "unit + integration + E2E system testing" },
  ],

  skills: [
    { group: "Primary Languages",       tags: ["Java", "C#"],                                                primary: true },
    { group: "Other Languages",         tags: ["Groovy", "JavaScript", "TypeScript", "PHP", "Python", "Dart"] },
    { group: "Backend — Active",        tags: ["ASP.NET Core 8", "Clean Architecture", "CQRS", "MediatR", "Dapper", "FluentValidation"], active: true },
    { group: "Backend — Experienced",   tags: ["Grails", "Spring Boot", "Hibernate", "Laravel"] },
    { group: "Frontend",                tags: ["React.js", "HTML5", "Sass / BEM", "Flutter"] },
    { group: "Databases",               tags: ["SQL Server", "MySQL", "MongoDB", "Oracle SQL", "AWS RDS"] },
    { group: "Cloud & DevOps",          tags: ["AWS EC2", "GitHub CI/CD", "Apache Tomcat"] },
    { group: "Testing",                 tags: ["xUnit", "Moq", "FluentAssertions", "Cypress", "Postman"] },
    { group: "Middleware",              tags: ["Apache Camel", "ActiveMQ"] },
  ],

  experience: [
    {
      company: "The Access Group",
      roles: [
        {
          title: "Software Engineering Intern",
          period: "Sep 2025 – Feb 2026",
          bullets: [
            "Developed a Territory Planning App prototype using the Access Evo Development Kit (ASP.NET, React, SQL Server), delivering a half-functional internal tool within the internship period.",
            "Built a fully responsive marketing homepage using Access Volcanic (Ixcanul Tools), applying Sass, media queries, and BEM methodology to meet cross-device design standards.",
          ],
        },
      ],
    },
    {
      company: "Prisma Harta Sdn. Bhd.",
      roles: [
        {
          title: "Lead Software Developer",
          subtitle: "Full-Time",
          period: "Mar 2023 – Sep 2023",
          bullets: [
            "Architected and led development of a Tenancy Management System (TMS) from scratch using Grails / Java and MySQL, serving 1,500 properties across 13 business units under Agile methodology.",
            "Oversaw migration of 30,000+ historical tenancy records into MySQL, ensuring data integrity and production readiness ahead of go-live.",
            "Built reporting and dashboard modules with PDF/Excel export and Chart.js visualizations, improving management's ability to monitor KPIs and make data-driven decisions.",
            "Managed server setup and deployment on Apache Tomcat; authored automated database backup scripts to safeguard production data.",
            "Conducted user training across Tenancy, Asset, and Finance departments, driving system adoption and reducing onboarding time for new staff.",
            "Mentored interns in requirement gathering, test automation, and technical documentation.",
          ],
        },
        {
          title: "Freelance Software Developer",
          subtitle: "Retained — continued while pursuing degree",
          note: "Retained part-time while pursuing degree — company lacked budget for full replacement",
          period: "Oct 2023 – July 2025",
          bullets: [
            "Led development of an Asset Management System (AMS) fully integrated with TMS, built as a monolithic Grails/Java web application, improving complaint traceability and work order management.",
            "Designed and implemented Schedule Management sub-modules and analytics dashboards, enabling daily, monthly, and yearly operational reporting.",
            "Sole developer maintaining, optimizing, and deploying both TMS and AMS in production throughout the engagement.",
            "Produced system documentation and simplified business process rules to reduce operational ambiguity across departments.",
          ],
        },
      ],
    },
    {
      company: "Iskandar Regional Development Authority (IRDA)",
      roles: [
        {
          title: "Software Tester Intern",
          period: "Sep 2022 – Feb 2023",
          bullets: [
            "Developed automated E2E test scripts from scratch using Cypress, including JSON data setup and version control — the first Cypress implementation at the organization.",
            "Conducted manual and automated testing across multiple user roles; created UAT reports and Cypress documentation adopted as a company reference standard.",
            "Analyzed business rules and system requirements to design ePMS screen flows and UI/UX improvements.",
            "Collaborated with developers and domain experts to reproduce, debug, and validate system defects and enhancements.",
          ],
        },
      ],
    },
  ],

  projects: [
    {
      name: "CDN HRMS Payroll System",
      period: "Feb 2026",
      demo: "https://cdnhrms.vercel.app/cdn/hrms/login",
      source: "https://gitfront.io/r/amriazri89/gDerSTjthLnu/CDN-HRMS-Code/",
      stack: ["ASP.NET Core 8", "React 18", "Clean Architecture", "CQRS + MediatR", "Dapper", "FluentValidation", "AWS EC2 & RDS", "GitHub Actions CI/CD", "xUnit · Moq"],
      bullets: [
        "Built a full stack, independently architected from design to live deployment.",
        "Implemented strict 4-layer Clean Architecture (API → Application → Domain → Infrastructure) with CQRS + MediatR, ensuring complete read/write separation and framework independence.",
        "Payroll engine with birthday bonus logic, JWT role-based auth, server-side pagination, soft delete, and pure Dapper ORM — no Entity Framework.",
        "unit and integration tests using xUnit, Moq, and FluentAssertions following the Testing Pyramid; >80% coverage on Application and Infrastructure layers.",
        "Deployed to AWS EC2 (Windows Server + NSSM) + AWS RDS SQL Server + Vercel, with full GitHub Actions pipeline — zero manual deployment steps.",
      ],
    },
  ],

  fyp: {
    name: "Energy Resilience Assessment System (ERAS)",
    stack: ["Chart.js", "Descriptive Analytics", "Prototyping Model", "Data Visualization"],
    bullets: [
      "Commissioned by UiTM Solar Research Institute (SRI) to design and build a web system evaluating Solar Park and Rooftop resilience across UiTM solar sites.",
      "Applied descriptive analytics to identify critical energy infrastructure threats and vulnerabilities.",
      "Upon completion, SRI formally acquired the system for active mitigation planning — full client delivery from brief to handover as a student project.",
    ],
  },

  education: [
    {
      degree: "Bachelor of Information Systems (Hons.) — Information Systems Engineering",
      school: "UiTM Shah Alam, Selangor",
      period: "Oct 2023 – Jan 2026",
      cgpa: "3.71 · Dean's List every semester",
    },
    {
      degree: "Diploma of Computer Science",
      school: "UiTM Segamat, Johor",
      period: "Oct 2020 – Feb 2023",
      cgpa: "3.34 · Dean's List 2 semesters",
    },
  ],

  achievements: [
    { icon: "🥇", title: "Gold Award — PIID 2025",          desc: "Penang International Invention, Innovation & Design. FYP recognized among top entries from Malaysian universities." },
    { icon: "🌏", title: "ASEAN Smart Grid Congress (ASGC8)", desc: "Presented UiTM Solar Research Institute findings at the 8th ASEAN congress." },
    { icon: "🏅", title: "Software Test Design Competition 2025", desc: "Competed in TDC 2025 national competition." },
  ],

  references: [
    {
      name: "Ms. Shahma Ahmed",
      role: "Technical Solutions & Services Lead",
      company: "The Access Group",
      phone: "+60 17-620 4979",
      email: "Shahma.Ahmed@theaccessgroup.com",
    },
    {
      name: "Mrs. Hamdi Mohd Yusuf",
      role: "Vice President, Information & Communication Technology",
      company: "Iskandar Regional Development Authority (IRDA)",
      phone: "+60 19-775 2661",
      email: "hamdi@irda.com.my",
    },
  ],
}
