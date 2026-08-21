import { 
  Profile, 
  ProjectDetail, 
  ExperienceItem, 
  BusinessDomain, 
  TechCategory, 
  EngineeringStep, 
  EducationInfo 
} from '../types';

export const profileData: Profile = {
  name: "DANH",
  title: "Middle Frontend Engineer",
  dob: "09/02/2001",
  experienceYears: "3.5+",
  location: "Binh Thanh District, Ho Chi Minh City, Vietnam",
  email: "tdanhdtd@gmail.com",
  phone: "0965624981",
  portfolioUrl: "",
  status: "Available for Frontend & Mobile Opportunities",
  headline: "Frontend Engineer with 3.5+ years building production-grade web & mobile apps.",
  subheadline: "Specializing in React.js, Next.js, and React Native for logistics, transportation, port operations, and enterprise systems.",
  aboutParagraphs: [
    "Frontend Engineer with 3.5+ years of experience building production-grade web and mobile applications using React.js, Next.js, and React Native.",
    "Experienced in developing complex business workflows for logistics and transportation platforms, including order lifecycle management, booking, driver operations, shipment tracking, and port inspection systems.",
    "Strong background in frontend architecture, reusable component development, state management, REST API integration, and performance optimization.",
    "Proficient in AI-assisted software development using Cursor and Claude for code generation, refactoring, debugging, code analysis, documentation, and problem solving, with careful review and validation of AI-generated code before production use."
  ],
  aiSummary: "Proficient in AI-assisted software development using Cursor and Claude with rigorous human verification and architecture consistency before production deployment."
};

export const statsData = [
  {
    value: "3.5+",
    label: "Years Experience",
    detail: "Production engineering in enterprise & operations"
  },
  {
    value: "3",
    label: "Core Domains",
    detail: "Logistics, Port Operations & Enterprise Systems"
  },
  {
    value: "Web + Mobile",
    label: "Platforms",
    detail: "Cross-platform React & React Native ecosystems"
  },
  {
    value: "React",
    label: "Primary Ecosystem",
    detail: "React.js, Next.js, React Native & Modern State"
  }
];

export const aboutHighlights = [
  {
    title: "Frontend Architecture",
    description: "Designing modular, reusable component hierarchies, clean directory layouts, and predictable state structures."
  },
  {
    title: "Complex Business Logic",
    description: "Translating intricate multi-step domain rules (gate passes, inspection records, order lifecycles) into robust UI states."
  },
  {
    title: "Web & Mobile Development",
    description: "Building responsive desktop web dashboards alongside performant cross-platform mobile apps for field workers."
  },
  {
    title: "API Integration",
    description: "Handling asynchronous RESTful data pipelines, robust error handling, interceptors, and caching layers."
  },
  {
    title: "State Management",
    description: "Expertise across Redux, Redux Toolkit, Zustand, and TanStack Query tailored to operational requirements."
  },
  {
    title: "Performance Optimization",
    description: "Optimizing render cycles, bundle sizes, field image annotations, and offline-resilient user experiences."
  }
];

export const coreExpertise = [
  {
    id: "frontend",
    title: "Frontend Development",
    description: "Build scalable, responsive web applications using React.js and Next.js with strong component architectures and clean UX.",
    icon: "Layout"
  },
  {
    id: "mobile",
    title: "Mobile Development",
    description: "Build cross-platform mobile applications using React Native optimized for drivers and field inspectors in demanding environments.",
    icon: "Smartphone"
  },
  {
    id: "business-logic",
    title: "Business Logic",
    description: "Implement complex real-world workflows, multi-step state transitions, order tracking, and operational validation rules.",
    icon: "GitBranch"
  },
  {
    id: "state-mgmt",
    title: "State Management",
    description: "Architect robust global and server states utilizing Redux, Redux Toolkit, Zustand, and TanStack Query.",
    icon: "Layers"
  },
  {
    id: "api-integration",
    title: "API Integration",
    description: "Integrate RESTful APIs with Axios, manage asynchronous error boundaries, loading states, and data synchronization.",
    icon: "Workflow"
  },
  {
    id: "production-systems",
    title: "Production Systems",
    description: "Build maintainable, battle-tested software deployed in daily operational logistics and enterprise management environments.",
    icon: "ShieldCheck"
  }
];

export const experiencesData: ExperienceItem[] = [
  {
    id: "ceh",
    company: "CEH TECHNOLOGY PLATFORM JOINT STOCK COMPANY",
    role: "Front End Developer",
    period: "03/2024 – 08/2026",
    isCurrent: true,
    projects: [
      {
        title: "VietnamHub – Logistics & Container Transportation Platform",
        description: "Enterprise logistics system enabling customers to book trucks, manage container shipments, track real-time order status and monitor operational statistics across web and mobile platforms.",
        responsibilities: [
          "Designed scalable frontend architecture using React.js and Ant Design.",
          "Developed cross-platform mobile applications using React Native.",
          "Implemented complete order lifecycle workflows.",
          "Built customer mobile applications.",
          "Built driver mobile applications.",
          "Created reusable UI components.",
          "Managed global state using Redux.",
          "Integrated RESTful APIs using Axios.",
          "Worked closely with backend engineers, QA and product teams.",
          "Improved application performance and usability."
        ],
        tech: ["React.js", "React Native", "Redux", "Ant Design", "Axios", "REST APIs"]
      },
      {
        title: "Hateco & HICT Driver Mobile App",
        description: "Mobile application supporting truck drivers in managing transportation orders and gate appointments in real-world port operations.",
        responsibilities: [
          "Developed React Native application.",
          "Implemented order lifecycle: Accept, Start, Complete, Cancel.",
          "Built gate appointment scheduling.",
          "Developed order management and tracking.",
          "Integrated APIs using Axios.",
          "Managed state using Redux.",
          "Improved usability and performance."
        ],
        tech: ["React Native", "Redux", "Axios", "REST APIs"]
      },
      {
        title: "HICT Container Inspection App",
        description: "Mobile inspection application allowing inspectors to capture container images, record notes and manage inspection records directly in port environments.",
        responsibilities: [
          "Built container inspection workflows.",
          "Implemented image capture and annotation.",
          "Developed inspection record management.",
          "Managed server state using TanStack Query.",
          "Managed local state using Zustand.",
          "Integrated REST APIs.",
          "Optimized performance for field usage."
        ],
        tech: ["React Native", "Zustand", "TanStack Query", "Axios", "REST APIs"]
      }
    ]
  },
  {
    id: "tech-source",
    company: "Tech Source",
    role: "Frontend Developer",
    period: "04/2023 - 02/2024",
    projects: [
      {
        title: "HRM (Human Resource Management)",
        description: "HRM website for personnel statistics and management of employee information including personal details, insurance, taxes and contracts.",
        responsibilities: [
          "Developed frontend features using React.",
          "Collaborated closely with backend developers.",
          "Implemented personnel management features.",
          "Built forms and business workflows.",
          "Contributed to frontend architecture."
        ],
        tech: ["Next.js", "MUI", "Redux Toolkit", "React Hook Form", "Yup", "REST APIs"]
      }
    ]
  }
];

export const featuredProjects: ProjectDetail[] = [
  {
    id: "vietnamhub",
    title: "VietnamHub",
    subtitle: "Logistics & Container Transportation Platform",
    category: "Logistics & Supply Chain",
    domain: "Logistics",
    platform: ["Web", "Mobile"],
    role: "Frontend Developer",
    timeline: "03/2024 — Present",
    company: "CEH Technology Platform JSC",
    overview: "VietnamHub is an enterprise logistics and container transportation platform enabling real-time truck booking, cargo dispatch, shipment tracking, and fleet operations across web and mobile.",
    businessProblem: "Logistics operations face high fragmentation between truck dispatchers, cargo owners, and drivers. Manual paperwork, unclear order status, and lack of unified tracking cause delays and operational bottlenecks in container transport.",
    myRole: "Designed the frontend architecture for the web platform and developed cross-platform mobile apps for both customers and drivers. Handled end-to-end order lifecycle workflows, state persistence, and seamless API integrations.",
    keyFeatures: [
      "Container truck booking engine and route setup",
      "Real-time shipment & order status tracking",
      "Customer mobile application for order creation & live tracking",
      "Driver mobile application for trip dispatching & POD updates",
      "Operational statistics and container fleet analytics dashboard",
      "Reusable UI component system built with Ant Design"
    ],
    technicalImplementation: {
      architecture: "Structured modular React application with clear separation between container logic, presentation components, API service layers, and state slices.",
      stateManagement: "Implemented Redux for centralized global state across multi-step booking workflows, active trips, and driver status updates.",
      apiIntegration: "Configured Axios clients with request/response interceptors, standardized error handling, and authentication tokens.",
      businessLogic: "Implemented complex order state machines ensuring strict transitions (Created -> Dispatched -> In Transit -> Delivered).",
      performanceAndUsability: "Optimized mobile viewports, reduced unnecessary component re-renders, and built responsive forms for fast operational inputs."
    },
    techStack: ["React.js", "React Native", "Redux", "Ant Design", "Axios", "REST APIs"],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop",
    liveDemoUrl: "https://vietnamhub.vn",
    githubUrl: "https://github.com/danhdev/vietnamhub-platform"
  },
  {
    id: "driver-app",
    title: "Hateco & HICT Driver App",
    subtitle: "Port Transportation & Gate Appointment Mobile App",
    category: "Port & Terminal Operations",
    domain: "Port Operations",
    platform: ["Mobile"],
    role: "Frontend Developer",
    timeline: "03/2024 — Present",
    company: "CEH Technology Platform JSC",
    overview: "A dedicated mobile application designed for container truck drivers operating within Hateco and HICT port facilities to manage gate appointments, trip dispatches, and QR gate passes.",
    businessProblem: "Drivers entering high-density international container terminals experience severe gate congestion if appointments and cargo validation are handled manually. Drivers need a rapid, fail-safe tool to accept trips, check gate slots, and update cargo status directly from the vehicle cab.",
    myRole: "Solely focused on developing the React Native mobile application, translating complex port gate rules and order lifecycle states into a quick, high-contrast mobile interface with minimum tap count.",
    keyFeatures: [
      "Order lifecycle execution: Accept -> Start -> Complete -> Cancel",
      "Port gate appointment scheduling and QR pass management",
      "Live order dispatch and cargo transport assignment tracking",
      "Real-time order status synchronization with terminal TOS",
      "Optimized driver UX with clear visual indicators for field operation"
    ],
    technicalImplementation: {
      architecture: "React Native mobile client utilizing clean feature-based folders with native device responsiveness.",
      stateManagement: "Redux store managing active shift state, current dispatch step, and cached appointment passes.",
      apiIntegration: "Axios integration handling terminal appointment endpoints, dispatch events, and connectivity recovery.",
      businessLogic: "Strict guardrails preventing drivers from advancing trip stages without satisfying port validation checks.",
      performanceAndUsability: "Designed high-contrast touch targets for outdoor sunlight visibility and quick single-hand interactions."
    },
    techStack: ["React Native", "Redux", "Axios", "REST APIs"],
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200&auto=format&fit=crop",
    liveDemoUrl: "https://apps.apple.com",
    githubUrl: "https://github.com/danhdev/hict-driver-app"
  },
  {
    id: "container-inspection",
    title: "HICT Container Inspection App",
    subtitle: "Field Quality & Damage Recording Application",
    category: "Terminal Field Operations",
    domain: "Port Operations",
    platform: ["Mobile"],
    role: "Frontend Developer",
    timeline: "03/2024 — Present",
    company: "CEH Technology Platform JSC",
    overview: "A specialized field inspection application empowering HICT terminal inspectors to examine ISO containers upon gate-in/gate-out, capture damage photos with defect annotations, and submit records.",
    businessProblem: "Container condition audits in container yards are fast-paced and prone to disputes. Paper-based or slow inspection processes lead to long turnaround times and missed documentation of pre-existing container damages.",
    myRole: "Built the mobile inspection workflows in React Native, implementing image capture with defect annotation tools, offline-friendly record management, and responsive server state sync.",
    keyFeatures: [
      "Streamlined container inspection checklists & ISO code validation",
      "Camera integration with photo capture and defect annotation overlays",
      "Inspection record history, draft saving, and batch verification",
      "High-speed terminal search by container prefix and booking number",
      "Field-optimized dark/light UI for variable yard lighting conditions"
    ],
    technicalImplementation: {
      architecture: "Modular React Native architecture separating UI view layers, camera native bridges, and query synchronization.",
      stateManagement: "Modern dual-state architecture: Zustand for lightweight local inspection form state & TanStack Query for server state caching and optimistic updates.",
      apiIntegration: "RESTful endpoints integrated via Axios for multipart photo uploads, inspection logs, and terminal validation.",
      businessLogic: "Multi-point inspection validation preventing incomplete damage reports before gate clearance submission.",
      performanceAndUsability: "Optimized image compression on device prior to upload to ensure fast uploads even in low-bandwidth port zones."
    },
    techStack: ["React Native", "Zustand", "TanStack Query", "Axios", "REST APIs"],
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1200&auto=format&fit=crop",
    liveDemoUrl: "https://apps.apple.com",
    githubUrl: "https://github.com/danhdev/hict-inspection-app"
  },
  {
    id: "hrm-system",
    title: "HRM Enterprise System",
    subtitle: "Enterprise Personnel, Tax, Insurance & Contract Management",
    category: "Enterprise Software",
    domain: "Enterprise Systems",
    platform: ["Web"],
    role: "Frontend Developer",
    timeline: "04/2023 — 02/2024",
    company: "Tech Source",
    overview: "A comprehensive enterprise Human Resource Management web portal built with Next.js, centralizing personnel records, personal information, social insurance records, income tax computations, and employment contract lifecycles.",
    businessProblem: "Managing hundreds of employee profiles across distinct departments with complex Vietnamese labor regulations, tax calculations, and insurance updates required an intuitive, secure, and performant web platform.",
    myRole: "Developed core frontend modules, collaborated with backend engineers on API contracts, built complex validated forms using React Hook Form + Yup, and contributed to the Next.js frontend architecture.",
    keyFeatures: [
      "Comprehensive employee profile and organization directory",
      "Social insurance and personal income tax calculation workflows",
      "Employment contract generator, status tracker, and expiration alerts",
      "Personnel statistics, headcount analytics, and department breakdown",
      "Strict form validation schemas preventing erroneous compliance data"
    ],
    technicalImplementation: {
      architecture: "Next.js frontend application with Material UI component styling and clear layout hierarchy.",
      stateManagement: "Redux Toolkit managing user authentication, department structures, and cached employee records.",
      apiIntegration: "Axios integration with standardized pagination, filtering query params, and export handlers.",
      businessLogic: "Complex form logic with dynamic dependent fields (tax exemptions, contract terms, insurance tiers) validated with Yup schemas.",
      performanceAndUsability: "Virtualized table rendering for large employee directories and lazy-loaded form steps."
    },
    techStack: ["Next.js", "React", "MUI", "Redux Toolkit", "React Hook Form", "Yup", "REST APIs"],
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200&auto=format&fit=crop",
    liveDemoUrl: "https://hrm-demo.techsource.vn",
    githubUrl: "https://github.com/danhdev/hrm-enterprise-system"
  },
  {
    id: "cupidify",
    title: "Cupidify",
    subtitle: "Modern Social Discovery & Dating App",
    category: "Social Platform",
    domain: "Enterprise Systems",
    platform: ["Web", "Mobile"],
    role: "Frontend Developer",
    timeline: "2024",
    company: "Personal Project",
    overview: "This is a social discovery platform that helps users find their soulmate with smart filtering, real-time match recommendations, and convenient interactive profile cards.",
    businessProblem: "Creating an engaging, seamless matching experience with responsive swipe gestures, smooth animations, and high privacy standards.",
    myRole: "Built the full interactive frontend client featuring intuitive card swiping, advanced preference filters, and real-time chat preview.",
    keyFeatures: [
      "Smart preference and personality matching filter",
      "Interactive swipe and soulmate discovery feed",
      "Real-time instant messaging and connection requests",
      "Responsive mobile and web responsive interface"
    ],
    technicalImplementation: {
      architecture: "Component-driven React architecture with Framer Motion gesture physics.",
      stateManagement: "Zustand store for user preferences, matches, and messaging state.",
      apiIntegration: "REST and WebSocket endpoints for real-time match notifications.",
      businessLogic: "Dynamic filtering algorithm calculating match compatibility percentage.",
      performanceAndUsability: "Hardware-accelerated touch animations with 60FPS frame rate."
    },
    techStack: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Zustand"],
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
    liveDemoUrl: "https://cupidify-demo.vercel.app",
    githubUrl: "https://github.com/danhdev/cupidify-app"
  }
];

export const businessDomains: BusinessDomain[] = [
  {
    id: "logistics",
    title: "Logistics",
    subtitle: "Freight & Container Transportation",
    description: "Deep experience designing interfaces for multi-party logistics ecosystems: matching cargo demands, scheduling truck routes, tracking active dispatches, and managing freight orders.",
    iconName: "Truck",
    workflows: [
      "Container truck booking & route dispatching",
      "Real-time shipment lifecycle & status transitions",
      "Order monitoring & freight operations tracking"
    ],
    keyCapabilities: ["Multi-step Booking Engines", "Order State Machines", "Customer & Fleet Dashboards"]
  },
  {
    id: "port-ops",
    title: "Port Operations",
    subtitle: "Terminal & Yard Management",
    description: "Hands-on implementation of mobile tools built for high-tempo port environments where speed, contrast, minimal tap count, and reliable data capture are critical.",
    iconName: "Anchor",
    workflows: [
      "Truck driver gate appointment scheduling & passes",
      "Order lifecycle execution: Accept, Start, Complete, Cancel",
      "Container inspection, photo capture & defect recording"
    ],
    keyCapabilities: ["High-Contrast Field UX", "Gate Pass Validation", "Photo Annotation & Fast Sync"]
  },
  {
    id: "enterprise",
    title: "Enterprise Systems",
    subtitle: "HRM & Business Administration",
    description: "Building reliable administrative software with complex business logic, strict data validation, and clear organization of sensitive employee records.",
    iconName: "Building2",
    workflows: [
      "Personnel statistics & organizational directory",
      "Employee information, insurance & tax management",
      "Employment contract lifecycle & compliance validation"
    ],
    keyCapabilities: ["Complex Form Validation (Yup)", "Data Virtualization", "Contract Tracking"]
  }
];

export const techCategories: TechCategory[] = [
  {
    title: "Frontend & Core",
    subtitle: "Primary Web & Mobile Engines",
    items: [
      { name: "React.js", badge: "Primary", detail: "Component Architecture & Hooks" },
      { name: "Next.js", badge: "Production", detail: "SSR, Routing & Enterprise Web" },
      { name: "React Native", badge: "Mobile", detail: "Cross-platform iOS & Android" },
      { name: "TypeScript", badge: "Core", detail: "Type-safe Contracts & Interfaces" },
      { name: "JavaScript", badge: "Core", detail: "ES6+ Standards & Async Patterns" },
      { name: "HTML5 & CSS3", badge: "Markup", detail: "Semantic Web & Responsive Layouts" }
    ]
  },
  {
    title: "State & Data",
    subtitle: "Client & Server State Synchronization",
    items: [
      { name: "Redux / Redux Toolkit", badge: "Enterprise", detail: "Centralized Global State & Slices" },
      { name: "Zustand", badge: "Lightweight", detail: "Fast Local State & Field Workflows" },
      { name: "TanStack Query", badge: "Server State", detail: "Async Cache, Invalidation & Optimistic UI" },
      { name: "React Hook Form", badge: "Forms", detail: "Performant Form State & Inputs" }
    ]
  },
  {
    title: "UI Systems & Libraries",
    subtitle: "Production Design Implementations",
    items: [
      { name: "Ant Design", badge: "Enterprise", detail: "Enterprise Dashboards & Data Tables" },
      { name: "Material UI (MUI)", badge: "Component Lib", detail: "Design Systems & Admin Forms" },
      { name: "Tailwind CSS", badge: "Styling", detail: "Modern Utility-First Layouts" },
      { name: "Lucide Icons", badge: "Icons", detail: "Clean Visual Metaphors" }
    ]
  },
  {
    title: "API & Tooling",
    subtitle: "Build & Network Pipelines",
    items: [
      { name: "Axios", badge: "Networking", detail: "Interceptors, Auth & Error Handling" },
      { name: "RESTful APIs", badge: "Architecture", detail: "Standardized Endpoint Integration" },
      { name: "Git", badge: "VCS", detail: "Branching, PRs & Team Workflows" },
      { name: "Vite", badge: "Bundler", detail: "Modern Fast Build Tooling" },
      { name: "Webpack", badge: "Bundler", detail: "Module Bundling & Asset Config" }
    ]
  },
  {
    title: "AI-Assisted Development",
    subtitle: "Cursor, Claude & AI Accelerated Workflow",
    items: [
      { name: "Cursor", badge: "AI Editor", detail: "Contextual Code Generation & Debugging" },
      { name: "Claude", badge: "AI Assistant", detail: "Architectural Analysis & Refactoring" },
      { name: "Code Analysis & Debug", badge: "Workflow", detail: "Deep Code Verification & Problem Solving" },
      { name: "Production Validation", badge: "Discipline", detail: "Strict Human Verification of AI Outputs" }
    ]
  }
];

export const aiAssistedDevelopmentData = [
  {
    title: "Accelerated Engineering Workflows",
    description: "Proficient in using Cursor and Claude to accelerate software development workflows across complex frontend architectures."
  },
  {
    title: "Refactoring, Debugging & Analysis",
    description: "Use AI for rapid code generation, safe refactoring, systematic debugging, code analysis, documentation, and technical problem solving."
  },
  {
    title: "Codebase Exploration & Modernization",
    description: "Leverage AI to quickly explore unfamiliar codebases and improve existing implementations while strictly maintaining architectural consistency."
  },
  {
    title: "Strict Human Review & Validation",
    description: "Carefully review, validate, and test all AI-generated code before integrating it into business-critical production systems."
  }
];

export const engineeringSteps: EngineeringStep[] = [
  {
    number: "01",
    title: "Understand",
    subtitle: "Deconstruct the Business Requirements",
    description: "Analyze the operational domain, user personas (dispatchers, drivers, inspectors, HR managers), and edge cases before writing a line of code.",
    actionPoints: [
      "Deep dive into domain workflows (e.g. port gate logic, order states)",
      "Clarify API contracts and data models with backend teams",
      "Map out user journeys and offline/latency failure points"
    ]
  },
  {
    number: "02",
    title: "Structure",
    subtitle: "Architect Components & State Flows",
    description: "Define clean separation of concerns: choose the right state tool (Redux vs Zustand vs TanStack Query), modularize component trees, and establish data contracts.",
    actionPoints: [
      "Design reusable UI primitives & layout boundaries",
      "Isolate server state caching from client UI states",
      "Plan type-safe API client structures and interceptors"
    ]
  },
  {
    number: "03",
    title: "Build",
    subtitle: "Implement Robust, Production-Ready Code",
    description: "Develop features with clean TypeScript/JavaScript, strong form validation, clear error boundaries, and responsive feedback for every user action.",
    actionPoints: [
      "Implement multi-step forms and state machine transitions",
      "Ensure high-contrast, touch-friendly UI for mobile field workers",
      "Integrate RESTful APIs with defensive error handling"
    ]
  },
  {
    number: "04",
    title: "Improve",
    subtitle: "Refine Usability, Speed & Maintainability",
    description: "Benchmark render cycles, optimize image handling in low-bandwidth field conditions, and iterate based on real feedback from operational users.",
    actionPoints: [
      "Eliminate unnecessary component re-renders",
      "Optimize bundle sizes and asset compression on devices",
      "Maintain clean documentation and component modularity"
    ]
  }
];

export const educationData: EducationInfo = {
  institution: "Industrial University of Ho Chi Minh City",
  degree: "Bachelor of Science in Software Engineering",
  period: "2019 — 2023",
  location: "Ho Chi Minh City, Vietnam",
  notes: "Core foundation in Software Architecture, Algorithms, Object-Oriented Design, and Web Technologies."
};
