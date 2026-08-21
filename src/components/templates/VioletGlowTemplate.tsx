import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import cupidifyImg from "../../assets/project-legacy/cupidify.jpg";
import donPeppeImg from "../../assets/project-legacy/donpeppe.png";
import appChatImg from "../../assets/project-legacy/suar.jpg";
import tMovieImg from "../../assets/project-legacy/tmovie.png";
import setSailImg from "../../assets/project-legacy/setsail.png";
import bicycleImg from "../../assets/project-legacy/bike.png";
import labNailImg from "../../assets/project-legacy/labnail.jpg";
import { DevAvatar } from "../common/DevAvatar";
import {
  profileData,
  featuredProjects,
  educationData,
  aiAssistedDevelopmentData,
} from "../../data/portfolioData";
import { downloadCV } from "../../utils/downloadCV";
import { ProjectDetail } from "../../types";
import {
  Sparkles,
  FileText,
  Download,
  Mail,
  Phone,
  ArrowUpRight,
  Layers,
  Check,
  Copy,
  ShieldCheck,
  Bot,
  GraduationCap,
  Smartphone,
  Monitor,
  ExternalLink,
  Code2,
  Terminal,
  Cpu,
  RefreshCw,
  Database,
  Globe,
  Star,
  MapPin,
  Workflow,
  Zap,
  Activity,
  Award,
  ChevronLeft,
  ChevronRight,
  Github,
  Brain,
  Cpu as CpuIcon,
  Sparkle,
  Binary,
  GitBranch,
  Search,
  CheckCircle2,
  Sliders,
  Menu,
  X,
} from "lucide-react";

interface VioletGlowTemplateProps {
  onSelectProject: (project: ProjectDetail) => void;
  onOpenResume: () => void;
}

export const VioletGlowTemplate: React.FC<VioletGlowTemplateProps> = ({
  onSelectProject,
  onOpenResume,
}) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [isDescExpanded, setIsDescExpanded] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [isDownloadingCV, setIsDownloadingCV] = useState(false);
  const [projectTabs, setProjectTabs] = useState<
    Record<string, "arch" | "state" | "network">
  >({
    vietnamhub: "arch",
    "hateco-driver": "arch",
    "hict-inspection": "arch",
    "hrm-system": "arch",
  });

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "hero",
        "experience",
        "skills",
        "projects",
        "ai-development",
        "education",
        "contact",
      ];
      const currentPos = window.scrollY + 140;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (currentPos >= top && currentPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const legacyProjects = [
    {
      id: "cupidify",
      title: "Cupidify",
      subtitle: "Dating & Social Discovery",
      domain: "Social Platform",
      platform: ["Web"],
      overview:
        "This is a website that helps users find their soulmate. It has a filter feature to help users find their soulmate more easily and conveniently.",
      image: cupidifyImg,
      techStack: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      liveDemoUrl: "https://cupidiify.vercel.app/",
      githubUrl: "https://github.com/Danh-lofi/cupidify",
      timeline: "2024",
    },
    {
      id: "don-peppe",
      title: "Don Peppe",
      subtitle: "Pizza Ordering Platform",
      domain: "Food & Commerce",
      platform: ["Web"],
      overview:
        "This online pizza ordering website helps users freely choose their favorite dishes. It also has a filter feature to help them find food more easily and conveniently. Moreover, every dish is updated with the shopping cart.",
      image: donPeppeImg,
      techStack: ["React", "SCSS", "State Management", "E-commerce UI"],
      liveDemoUrl: "https://donpeppe-clone-ab92e.web.app/",
      githubUrl: "https://github.com/Danh-lofi/DonPeppe",
      timeline: "2023",
    },
    {
      id: "app-chat",
      title: "App-Chat",
      subtitle: "Realtime Social Messaging",
      domain: "Communication",
      platform: ["Web"],
      overview:
        "This website will help people make friends, create online chat groups with each other.",
      image: appChatImg,
      techStack: ["React", "Chat UI", "Responsive Design", "Realtime UX"],
      liveDemoUrl: "https://suar-chat.web.app/",
      githubUrl:
        "https://github.com/Danh-lofi/App-Chat/tree/master/App/app-reactjs",
      timeline: "2023",
    },
    {
      id: "tmovie",
      title: "TMovie",
      subtitle: "Movie Discovery Dashboard",
      domain: "Entertainment",
      platform: ["Web"],
      overview:
        "With this website, users can search and view information about movies that are popular, or highly rated today.",
      image: tMovieImg,
      techStack: ["React", "API Integration", "Search UX", "Movie UI"],
      liveDemoUrl: "https://tmovie-36680.web.app/",
      githubUrl: "https://github.com/Danh-lofi/TMovie",
      timeline: "2022",
    },
    {
      id: "setsail",
      title: "SetSail",
      subtitle: "Travel Landing Page",
      domain: "UI/UX Showcase",
      platform: ["Web"],
      overview: "This is the UI/UX of a website focused on vacation and travel experiences.",
      image: setSailImg,
      techStack: ["HTML", "CSS", "Landing Page Design", "Responsive Layout"],
      liveDemoUrl: "https://danh-lofi.github.io/SetSail/",
      githubUrl: "https://github.com/Danh-lofi/SetSail",
      timeline: "2022",
    },
    {
      id: "bicycle",
      title: "Bicycle",
      subtitle: "Product Landing Page",
      domain: "UI/UX Showcase",
      platform: ["Web"],
      overview: "This is the UI/UX of a website built for a bicycle brand landing page.",
      image: bicycleImg,
      techStack: ["HTML", "CSS", "Brand Design", "Landing Page"],
      liveDemoUrl: "https://danh-lofi.github.io/Bicycle-Lading-Page/",
      githubUrl: "https://github.com/Danh-lofi/Bicycle-Lading-Page",
      timeline: "2022",
    },
    {
      id: "lab-nail",
      title: "Lab Nail",
      subtitle: "Beauty Brand Landing Page",
      domain: "UI/UX Showcase",
      platform: ["Web"],
      overview: "This is the UI/UX of a website for beauty and nail care brand presentation.",
      image: labNailImg,
      techStack: ["HTML", "CSS", "Branding UI", "Responsive Design"],
      liveDemoUrl: "https://danh-lofi.github.io/nail-lab/src/index",
      githubUrl: "https://github.com/Danh-lofi/nail-lab",
      timeline: "2022",
    },
  ];

  const projectCarouselItems = legacyProjects;

  const handlePrevProject = () => {
    setActiveProjectIndex((prev) =>
      prev === 0 ? projectCarouselItems.length - 1 : prev - 1,
    );
  };

  const handleNextProject = () => {
    setActiveProjectIndex((prev) =>
      prev === projectCarouselItems.length - 1 ? 0 : prev + 1,
    );
  };

  const handleDownloadCV = async () => {
    if (isDownloadingCV) return;

    setIsDownloadingCV(true);

    try {
      await downloadCV();
    } finally {
      window.setTimeout(() => {
        setIsDownloadingCV(false);
      }, 800);
    }
  };

  // Animated Role Typing Effect
  const roles = [
    "Frontend Engineer.",
    "React.js Specialist.",
    "React Native Developer.",
    "Web & Mobile Architect.",
  ];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRoleIndex];
    let timer: NodeJS.Timeout;

    if (!isDeleting && currentText === role) {
      timer = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && currentText === "") {
      setIsDeleting(false);
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      const speed = isDeleting ? 40 : 80;
      timer = setTimeout(() => {
        setCurrentText(
          role.substring(
            0,
            isDeleting ? currentText.length - 1 : currentText.length + 1,
          ),
        );
      }, speed);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentRoleIndex]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSendEmail = () => {
    const subject = encodeURIComponent("Portfolio inquiry");
    const body = encodeURIComponent(
      "Hi Danh,\n\nI would like to connect regarding a frontend opportunity/project.\n\nBest regards,",
    );

    window.location.href = `mailto:${profileData.email}?subject=${subject}&body=${body}`;
  };

  const [activeExpId, setActiveExpId] = useState<string>("vietnamhub");
  const [activeWorkspaceTab, setActiveWorkspaceTab] = useState<
    "overview" | "responsibilities" | "stack" | "impact"
  >("overview");

  // 4 Main Experience highlights with detailed workspace attributes
  const experienceHighlights = [
    {
      id: "vietnamhub",
      title: "VietnamHub Logistics",
      subtitle:
        "Web & Mobile container transportation platform with high-concurrency order tracking.",
      icon: <Sparkles className="w-5 h-5 text-purple-300" />,
      period: "03/2024 – 08/2026",
      company: "CEH Technology Platform",
      role: "Frontend Engineer (Web & Mobile)",
      platform: "Enterprise Web + Cross-Platform Mobile",
      badge: "React.js • React Native • Redux",
      status: "PRODUCTION ACTIVE",
      metrics: [
        { label: "Platform Coverage", value: "Web & iOS/Android" },
        { label: "State Architecture", value: "Redux Global Store" },
        { label: "Order Workflows", value: "Multi-leg Booking" },
      ],
      responsibilities: [
        "Architected scalable React.js web portal with Ant Design for container transport dispatch.",
        "Built cross-platform React Native client app for shippers & customer booking operations.",
        "Engineered real-time order lifecycle tracking with asynchronous Axios network layer.",
        "Created reusable atomic design components used across both web and mobile repositories.",
      ],
      stack: [
        "React.js",
        "React Native",
        "Redux",
        "Ant Design",
        "Axios",
        "REST APIs",
        "TypeScript",
      ],
      color: "from-purple-600/30 to-indigo-900/40",
      accent: "border-purple-500/40 hover:border-purple-400",
    },
    {
      id: "hateco-driver",
      title: "Hateco & HICT Driver",
      subtitle:
        "Mission-critical mobile app for port container truck drivers & electronic gate appointments.",
      icon: <Smartphone className="w-5 h-5 text-violet-300" />,
      period: "03/2024 – 08/2026",
      company: "CEH Technology Platform",
      role: "Mobile Frontend Engineer",
      platform: "React Native Mobile (Driver App)",
      badge: "React Native • Redux • Axios",
      status: "PRODUCTION ACTIVE",
      metrics: [
        { label: "Order Lifecycle", value: "Real-time Dispatch" },
        { label: "Port Integration", value: "Hateco & HICT" },
        { label: "Key Feature", value: "E-Gate Passes" },
      ],
      responsibilities: [
        "Developed end-to-end driver lifecycle: Order Accept -> Gate Pass -> Navigation -> Delivery Completion.",
        "Integrated electronic port gate appointment scheduling connected to terminal operating system.",
        "Engineered persistent offline state handling to prevent order data loss during network dropouts.",
        "Optimized mobile rendering performance and background GPS tracking efficiency.",
      ],
      stack: [
        "React Native",
        "Redux",
        "Axios",
        "REST APIs",
        "TypeScript",
        "Port Gate Integration",
      ],
      color: "from-violet-600/30 to-fuchsia-900/40",
      accent: "border-violet-500/40 hover:border-violet-400",
    },
    {
      id: "hict-inspection",
      title: "HICT Inspection App",
      subtitle:
        "On-site container photo capture, vector defect annotation & instant TOS synchronization.",
      icon: <Layers className="w-5 h-5 text-indigo-300" />,
      period: "03/2024 – 08/2026",
      company: "CEH Technology Platform",
      role: "Mobile Frontend Engineer",
      platform: "React Native Tablet & Mobile",
      badge: "React Native • Zustand • TanStack",
      status: "PRODUCTION ACTIVE",
      metrics: [
        { label: "Annotation Engine", value: "Vector Pinning" },
        { label: "Sync Latency", value: "< 500ms TOS" },
        { label: "State Manager", value: "Zustand Store" },
      ],
      responsibilities: [
        "Built responsive camera photo capture module with dynamic container angle categorization.",
        "Designed vector drawing and defect pin annotation directly on the captured container images.",
        "Streamlined state management using Zustand and TanStack Query for instant backend synchronization.",
        "Engineered zero-latency image caching for seamless field operations in harsh port environments.",
      ],
      stack: [
        "React Native",
        "Zustand",
        "TanStack Query",
        "Camera API",
        "Canvas Annotation",
        "Axios",
      ],
      color: "from-indigo-600/30 to-purple-900/40",
      accent: "border-indigo-500/40 hover:border-indigo-400",
    },
    {
      id: "hrm-system",
      title: "Enterprise HRM",
      subtitle:
        "Personnel statistics & management of employee information, digital contracts, insurance, and taxes.",
      icon: <Monitor className="w-5 h-5 text-fuchsia-300" />,
      period: "04/2023 – 02/2024",
      company: "Tech Source",
      role: "Frontend Developer",
      platform: "Enterprise Web App (Next.js)",
      badge: "Next.js • MUI • Redux Toolkit",
      status: "COMPLETED",
      metrics: [
        { label: "Core Framework", value: "Next.js (SSR)" },
        { label: "UI System", value: "Material UI (MUI)" },
        { label: "Form Engine", value: "React Hook Form + Yup" },
      ],
      responsibilities: [
        "Built responsive HRM web interface for personnel profile statistics and employee records.",
        "Developed comprehensive business forms with React Hook Form and Yup schema validation.",
        "Implemented modules for employee personal info, insurance policies, taxes, and labor contracts.",
        "Utilized Redux Toolkit for predictable state management and synchronized REST API caching.",
      ],
      stack: [
        "Next.js",
        "Material UI (MUI)",
        "Redux Toolkit",
        "React Hook Form",
        "Yup",
        "Axios",
        "REST APIs",
      ],
      color: "from-fuchsia-600/30 to-indigo-900/40",
      accent: "border-fuchsia-500/40 hover:border-fuchsia-400",
    },
  ];

  // Tech items with categories
  const techItems = [
    { name: "React.js", category: "web", badge: "Core Web" },
    { name: "Next.js", category: "web", badge: "SSR & App Router" },
    { name: "React Native", category: "mobile", badge: "Cross Mobile" },
    { name: "TypeScript", category: "core", badge: "Type Safety" },
    { name: "Redux Toolkit", category: "state", badge: "Global State" },
    { name: "Zustand", category: "state", badge: "Lightweight" },
    { name: "TanStack Query", category: "state", badge: "Server Cache" },
    { name: "Tailwind CSS", category: "web", badge: "Styling" },
    { name: "Ant Design", category: "web", badge: "Enterprise UI" },
    { name: "Material UI", category: "web", badge: "HRM Design" },
    { name: "Cursor AI", category: "ai", badge: "Speed & Refactor" },
    { name: "Claude AI", category: "ai", badge: "Logic Verification" },
  ];

  const filteredTech =
    activeCategory === "all"
      ? techItems
      : techItems.filter((t) => t.category === activeCategory);

  return (
    <div className="bg-[#0B071A] text-[#F3F0FA] min-h-screen font-sans selection:bg-purple-500/30 selection:text-purple-200 relative overflow-x-hidden antialiased">
      {/* 1. Background Radiant Glow & Dynamic Mesh */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-15%] left-1/2 -translate-x-1/2 w-[600px] sm:w-[850px] h-[600px] sm:h-[850px] bg-purple-600/20 rounded-full blur-[140px]"
        />
        <motion.div
          animate={{
            x: [0, 40, 0],
            y: [0, -30, 0],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[35%] left-[-100px] w-[500px] h-[500px] bg-indigo-600/15 rounded-full blur-[160px]"
        />
        <motion.div
          animate={{
            x: [0, -40, 0],
            y: [0, 30, 0],
            opacity: [0.12, 0.22, 0.12],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[60%] right-[-100px] w-[550px] h-[550px] bg-violet-600/20 rounded-full blur-[150px]"
        />
        <div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-purple-900/25 rounded-full blur-[180px]" />

        {/* Subtle geometric starfield grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.5) 1px, transparent 1px)`,
            backgroundSize: "36px 36px",
          }}
        />
      </div>

      {/* 2. Primary Top Navigation Bar (Fixed) */}
      <header className="fixed top-0 left-0 right-0 w-full z-50 bg-[#0B071A]/90 backdrop-blur-xl border-b border-purple-900/50 shadow-lg shadow-purple-950/40 transition-all">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#13092B]/80 border border-purple-800/60 rounded-full px-3 py-1.5 backdrop-blur-md">
            {[
              { label: "Home", href: "#hero", id: "hero" },
              { label: "Experience", href: "#experience", id: "experience" },
              { label: "Stack & Skills", href: "#skills", id: "skills" },
              { label: "Projects", href: "#projects", id: "projects" },
              {
                label: "AI Workflow",
                href: "#ai-development",
                id: "ai-development",
              },
              { label: "Education", href: "#education", id: "education" },
              { label: "Contact", href: "#contact", id: "contact" },
            ].map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  className={`px-3 py-1 text-xs font-mono rounded-full transition-all duration-200 ${
                    isActive
                      ? "text-pink-300 bg-purple-900/70 border border-purple-500/50 shadow-[0_0_12px_rgba(236,72,153,0.3)] font-bold"
                      : "text-purple-300/80 hover:text-white hover:bg-purple-950/50 border border-transparent"
                  }`}>
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Action CTAs & Mobile Toggle */}
          <div className="flex items-center gap-2 sm:gap-3 ml-auto">
            <button
              onClick={handleDownloadCV}
              disabled={isDownloadingCV}
              className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-1.5 rounded-full bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 hover:from-pink-400 hover:to-indigo-500 text-white text-xs font-semibold shadow-[0_0_15px_rgba(236,72,153,0.35)] transition-all active:scale-95 cursor-pointer disabled:opacity-80 disabled:cursor-not-allowed"
              title="Download full professional CV">
              {isDownloadingCV ? (
                <RefreshCw className="w-3.5 h-3.5 animate-spin" />
              ) : (
                <Download className="w-3.5 h-3.5" />
              )}
              <span>{isDownloadingCV ? "Preparing..." : "Download CV"}</span>
            </button>

            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-purple-950/70 hover:bg-purple-900/80 border border-purple-700/50 text-purple-200 hover:text-white text-xs font-mono transition-colors">
              <span>Contact</span>
              <ArrowUpRight className="w-3 h-3 text-purple-400" />
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-purple-950/80 border border-purple-800/60 text-purple-200 hover:text-white hover:bg-purple-900/60 transition-colors"
              aria-label="Toggle navigation menu">
              {mobileMenuOpen ? (
                <X className="w-4 h-4" />
              ) : (
                <Menu className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-purple-900/60 bg-[#0E0624]/95 backdrop-blur-xl px-4 py-4 space-y-3">
            <div className="grid grid-cols-2 gap-2">
              {[
                { label: "Home", href: "#hero" },
                { label: "Experience", href: "#experience" },
                { label: "Stack & Skills", href: "#skills" },
                { label: "Projects", href: "#projects" },
                { label: "AI Workflow", href: "#ai-development" },
                { label: "Education", href: "#education" },
                { label: "Contact", href: "#contact" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-xl bg-purple-950/50 border border-purple-800/40 text-xs font-mono text-purple-200 hover:text-white hover:border-pink-500/50 hover:bg-purple-900/50 transition-all">
                  {item.label}
                </a>
              ))}
            </div>

            <div className="pt-2 border-t border-purple-900/50 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleDownloadCV();
                }}
                disabled={isDownloadingCV}
                className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold text-xs shadow-lg disabled:opacity-80 disabled:cursor-not-allowed">
                {isDownloadingCV ? (
                  <RefreshCw className="w-4 h-4 animate-spin" />
                ) : (
                  <Download className="w-4 h-4" />
                )}
                <span>{isDownloadingCV ? "Preparing..." : "Download Official CV"}</span>
              </button>
            </div>
          </motion.div>
        )}
      </header>

      {/* Main Content Container */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10 sm:pt-24 sm:pb-14 relative z-10 space-y-16 sm:space-y-20 lg:space-y-24">
        {/* 1. HERO SECTION */}
        <section
          id="hero"
          className="flex flex-col items-center text-center space-y-8 pt-2 sm:pt-4">
          {/* Avatar Container with Interactive Avatar Switcher */}
          <div className="relative flex flex-col items-center">
            {/* DevAvatar Component with Interactive Switcher & Radiant Aura */}
            <DevAvatar size="lg" showBadge={false} />

            {/* Responsive Floating Speech Bubble 1 (Top Right / Desktop) */}
            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.2,
              }}
              className="mt-3 sm:mt-0 sm:absolute sm:-top-2 sm:-right-24 lg:-right-28 bg-[#180F3B]/95 backdrop-blur-md border border-purple-500/40 rounded-2xl px-4 py-2.5 shadow-xl text-left z-20">
              <div className="text-[11px] font-mono text-purple-200 flex items-center gap-1.5">
                <span>Hello! I Am</span>
                <span className="text-purple-300 font-bold bg-purple-900/60 px-1.5 py-0.5 rounded">
                  Danh
                </span>
              </div>
              <div className="text-[10px] text-purple-400 font-mono flex items-center gap-1 mt-0.5">
                <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                <span>Middle Frontend Engineer (3.5+ YOE)</span>
              </div>
            </motion.div>
          </div>

          {/* Main Hero Headline with Live Typing Animation */}
          <div className="space-y-3 max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-sans flex flex-wrap items-center justify-center gap-2 min-h-[3rem] sm:min-h-[4.5rem]">
              <span>I'm a</span>
              <span className="bg-gradient-to-r from-purple-400 via-violet-300 to-indigo-300 bg-clip-text text-transparent">
                {currentText}
              </span>
              <span className="inline-block w-1 h-8 sm:h-12 bg-purple-400 animate-pulse ml-0.5" />
            </motion.h1>
          </div>

          {/* Quick Contact & Status Badges */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-wrap items-center justify-center gap-2.5 text-xs text-purple-300 font-mono">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-950/70 border border-purple-800/60">
              <MapPin className="w-3.5 h-3.5 text-purple-400" />
              <span>Binh Thanh District, Ho Chi Minh City, Vietnam</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-950/70 border border-purple-800/60">
              <Phone className="w-3.5 h-3.5 text-purple-400" />
              <a
                href={`tel:${profileData.phone}`}
                className="hover:text-purple-200">
                {profileData.phone}
              </a>
            </span>
          </motion.div>

          {/* High-Impact Enterprise Summary */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl text-xs sm:text-sm text-purple-200/80 leading-relaxed font-sans px-2">
            Frontend Engineer with 3.5+ years of experience engineering
            mission-critical logistics, container port operations, driver mobile
            applications, and enterprise HRM platforms using{" "}
            <span className="text-purple-200 font-semibold">
              React.js, Next.js, and React Native
            </span>
            .
          </motion.div>

          {/* Interactive CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              type="button"
              onClick={handleSendEmail}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold text-xs sm:text-sm shadow-[0_0_25px_rgba(168,85,247,0.4)] transition-all hover:scale-105 active:scale-95 cursor-pointer">
              <Mail className="w-4 h-4" />
              <span>Get In Touch</span>
            </button>

            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#160E36] hover:bg-[#20154D] border border-purple-800/60 text-purple-200 text-xs sm:text-sm font-mono transition-all hover:scale-105 active:scale-95 cursor-pointer">
              {copiedEmail ? (
                <Check className="w-4 h-4 text-emerald-400" />
              ) : (
                <Copy className="w-4 h-4 text-purple-400" />
              )}
              <span>{copiedEmail ? "Email Copied!" : profileData.email}</span>
            </button>

            <button
              onClick={handleDownloadCV}
              disabled={isDownloadingCV}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-purple-900/80 to-indigo-900/80 hover:from-purple-800 hover:to-indigo-800 border border-purple-500/50 text-purple-200 text-xs sm:text-sm font-medium transition-all hover:scale-105 active:scale-95 cursor-pointer disabled:opacity-80 disabled:cursor-not-allowed">
              {isDownloadingCV ? (
                <RefreshCw className="w-4 h-4 text-purple-300 animate-spin" />
              ) : (
                <FileText className="w-4 h-4 text-purple-300" />
              )}
              <span>{isDownloadingCV ? "Preparing..." : "Download CV"}</span>
            </button>
          </motion.div>
        </section>

        {/* 2. WORK EXPERIENCE (Split Workspace View - IDE & System Dashboard Style) */}
        <section id="experience" className="space-y-6 scroll-mt-24">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/80 border border-purple-800/60 text-[11px] font-mono text-purple-300">
              <Terminal className="w-3.5 h-3.5 text-purple-400" />
              <span>PRODUCTION WORKSPACE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white flex items-center justify-center gap-2">
              <Sparkles className="w-5 h-5 text-purple-400" />
              <span>Work Experience & Engineering Systems</span>
            </h2>
            <p className="text-xs sm:text-sm text-purple-300/70 max-w-2xl mx-auto">
              Interactive split workspace showcasing core platforms engineered
              across CEH Technology Platform & Tech Source
            </p>
          </div>

          {/* Master Workspace Container */}
          <div className="rounded-3xl bg-[#12092B]/95 border border-purple-700/40 shadow-[0_0_40px_rgba(147,51,234,0.18)] overflow-hidden">
            {/* Top IDE / Terminal Control Bar */}
            <div className="px-4 py-3 bg-[#180D38] border-b border-purple-800/50 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5 mr-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 border border-rose-400/40 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 border border-amber-400/40 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 border border-emerald-400/40 inline-block" />
                </div>
                <div className="hidden sm:flex items-center gap-2 px-2.5 py-1 rounded-lg bg-[#0E0622] border border-purple-900/60 text-[11px] font-mono text-purple-300">
                  <Workflow className="w-3.5 h-3.5 text-purple-400" />
                  <span>workspace://ceh-tech-source/systems</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 text-[10px] font-mono text-emerald-300 bg-emerald-950/70 border border-emerald-500/30 px-2.5 py-1 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>CLUSTER LIVE</span>
                </span>
                <span className="text-[11px] font-mono text-purple-400/70 hidden md:inline">
                  3.5+ YOE Production
                </span>
              </div>
            </div>

            {/* Split Workspace Body: Left Sidebar + Right Active Dashboard */}
            <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[500px]">
              {/* Left Sidebar: Interactive Systems Explorer (4 Columns / lg:col-span-4) */}
              <div className="lg:col-span-4 p-3 sm:p-4 bg-[#140A30]/80 border-b lg:border-b-0 lg:border-r border-purple-800/40 space-y-2">
                <div className="px-2 py-1.5 flex items-center justify-between text-[11px] font-mono font-semibold text-purple-300/70 uppercase tracking-wider">
                  <span>Systems Explorer</span>
                  <span className="text-[10px] bg-purple-950/80 px-2 py-0.5 rounded border border-purple-800/40">
                    4 Modules
                  </span>
                </div>

                <div className="space-y-2">
                  {experienceHighlights.map((item) => {
                    const isSelected = activeExpId === item.id;
                    return (
                      <button
                        key={item.id}
                        onClick={() => setActiveExpId(item.id)}
                        className={`w-full text-left p-3.5 rounded-2xl transition-all relative group cursor-pointer border ${
                          isSelected
                            ? "bg-gradient-to-r from-purple-900/90 to-indigo-900/80 border-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.3)]"
                            : "bg-[#180E38]/50 hover:bg-[#1C1042] border-purple-900/50 hover:border-purple-700/60"
                        }`}>
                        <div className="flex items-start gap-3">
                          <div
                            className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all ${
                              isSelected
                                ? "bg-purple-600 text-white shadow-md"
                                : "bg-purple-950/70 border border-purple-800/60 text-purple-300 group-hover:text-white"
                            }`}>
                            {item.icon}
                          </div>

                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between gap-1">
                              <h4
                                className={`text-xs sm:text-sm font-bold truncate ${
                                  isSelected
                                    ? "text-white"
                                    : "text-purple-100 group-hover:text-white"
                                }`}>
                                {item.title}
                              </h4>
                              {isSelected && (
                                <span className="w-2 h-2 rounded-full bg-purple-300 shadow-[0_0_6px_#c084fc]" />
                              )}
                            </div>

                            <p className="text-[11px] text-purple-300/70 truncate mt-0.5">
                              {item.company}
                            </p>

                            <div className="flex items-center gap-2 mt-2">
                              <span className="text-[9px] font-mono text-purple-300/80 bg-[#0E0622] px-2 py-0.5 rounded border border-purple-900/60">
                                {item.period}
                              </span>
                            </div>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Right Panel: Active System Spec Dashboard (lg:col-span-8) */}
              <div className="lg:col-span-8 p-5 sm:p-7 bg-[#100726]/60 flex flex-col justify-between space-y-6">
                {(() => {
                  const currentExp =
                    experienceHighlights.find((e) => e.id === activeExpId) ||
                    experienceHighlights[0];
                  const matchedProject = featuredProjects.find(
                    (p) => p.id === currentExp.id,
                  );

                  return (
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentExp.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.25 }}
                        className="space-y-6 flex-1 flex flex-col justify-between">
                        {/* Header of Active System */}
                        <div className="space-y-3">
                          <div className="flex flex-wrap items-center justify-between gap-2">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/80 border border-purple-700/60 text-xs font-mono text-purple-200">
                              <span className="w-2 h-2 rounded-full bg-purple-400 animate-ping" />
                              <span className="font-semibold">
                                {currentExp.company}
                              </span>
                              <span className="text-purple-400/60">•</span>
                              <span>{currentExp.period}</span>
                            </div>
                          </div>

                          <div className="space-y-1">
                            <div className="flex items-center gap-3">
                              <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                                {currentExp.title}
                              </h3>
                              <span className="text-xs font-mono text-purple-300/80 px-2.5 py-0.5 rounded-lg bg-purple-900/40 border border-purple-700/50">
                                {currentExp.role}
                              </span>
                            </div>
                            <p className="text-xs sm:text-sm text-purple-200/80 leading-relaxed">
                              {currentExp.subtitle}
                            </p>
                          </div>
                        </div>

                        {/* Top Metrics Ribbon */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                          {currentExp.metrics.map((m, idx) => (
                            <div
                              key={idx}
                              className="p-3 rounded-2xl bg-[#170D36] border border-purple-800/40 text-left">
                              <div className="text-[10px] font-mono text-purple-400/80">
                                {m.label}
                              </div>
                              <div className="text-xs sm:text-sm font-bold text-white mt-0.5">
                                {m.value}
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Interactive Content Tabs */}
                        <div className="space-y-4">
                          <div className="flex items-center gap-2 border-b border-purple-900/50 pb-2">
                            {[
                              {
                                key: "overview",
                                label: "Key Responsibilities",
                              },
                              { key: "stack", label: "Tech Stack & Tools" },
                            ].map((tab) => (
                              <button
                                key={tab.key}
                                onClick={() =>
                                  setActiveWorkspaceTab(tab.key as any)
                                }
                                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold font-mono transition-all cursor-pointer ${
                                  activeWorkspaceTab === tab.key
                                    ? "bg-purple-600 text-white shadow-md"
                                    : "text-purple-300/70 hover:text-white hover:bg-purple-950/60"
                                }`}>
                                {tab.label}
                              </button>
                            ))}
                          </div>

                          {/* Tab Content 1: Responsibilities & Impact */}
                          {activeWorkspaceTab === "overview" && (
                            <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ duration: 0.2 }}
                              className="space-y-2.5">
                              {currentExp.responsibilities.map((resp, rIdx) => (
                                <div
                                  key={rIdx}
                                  className="flex items-start gap-2.5 text-xs sm:text-sm text-purple-200/85">
                                  <div className="w-4 h-4 rounded-full bg-purple-900/70 border border-purple-500/50 flex items-center justify-center mt-0.5 flex-shrink-0 text-purple-300">
                                    <Check className="w-2.5 h-2.5" />
                                  </div>
                                  <span className="leading-relaxed">
                                    {resp}
                                  </span>
                                </div>
                              ))}
                            </motion.div>
                          )}

                          {/* Tab Content 2: Tech Stack */}
                          {activeWorkspaceTab === "stack" && (
                            <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ duration: 0.2 }}
                              className="flex flex-wrap gap-2 pt-1">
                              {currentExp.stack.map((tech, tIdx) => (
                                <span
                                  key={tIdx}
                                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#190F3B] border border-purple-700/60 text-purple-200 text-xs font-mono font-medium shadow-sm hover:border-purple-400 hover:text-white transition-colors">
                                  <Code2 className="w-3.5 h-3.5 text-purple-400" />
                                  <span>{tech}</span>
                                </span>
                              ))}
                            </motion.div>
                          )}
                        </div>

                        {/* Bottom Workspace Action Bar */}
                        <div className="pt-4 border-t border-purple-900/50 flex flex-wrap items-center justify-between gap-3">
                          <div className="text-[11px] font-mono text-purple-400/80 flex items-center gap-1.5">
                            <Layers className="w-3.5 h-3.5 text-purple-400" />
                            <span>
                              Platform:{" "}
                              <strong className="text-purple-200">
                                {currentExp.platform}
                              </strong>
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  );
                })()}
              </div>
            </div>
          </div>
        </section>

        {/* 3. TECH CONSTELLATION & ORBIT SYSTEM */}
        <section
          id="skills"
          className="space-y-6 sm:space-y-8 py-4 sm:py-6 text-center relative z-10 scroll-mt-24">
          <div className="space-y-3 max-w-xl mx-auto px-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/80 border border-purple-800/60 text-[11px] font-mono text-purple-300">
              <Cpu className="w-3.5 h-3.5 text-purple-400" />
              <span>STACK ARCHITECTURE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white flex items-center justify-center gap-2">
              <span>Core Tech Orbit</span>
            </h2>
            <p className="text-xs sm:text-sm text-purple-300/80 leading-relaxed">
              Specialized in scalable frontend architectures, robust state
              orchestration, and high-impact digital systems.
            </p>
          </div>

          {/* Tech Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 px-4">
            {[
              { id: "all", label: "All Technologies" },
              { id: "web", label: "Web & Next.js" },
              { id: "mobile", label: "React Native" },
              { id: "state", label: "State & Caching" },
              { id: "ai", label: "AI Augmented" },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all duration-200 cursor-pointer ${
                  activeCategory === cat.id
                    ? "bg-purple-600 text-white font-bold shadow-[0_0_16px_rgba(168,85,247,0.45)] scale-105 border border-purple-400/60"
                    : "bg-[#140B30]/90 text-purple-300/75 hover:text-white hover:bg-[#1B0F40] border border-purple-800/50"
                }`}>
                {cat.label}
              </button>
            ))}
          </div>

          {/* Tech Badges Grid with smooth AnimatePresence */}
          <div className="min-h-[75px] flex items-center justify-center px-4">
            <motion.div
              layout
              transition={{ type: "spring", stiffness: 350, damping: 30 }}
              className="flex flex-wrap items-center justify-center gap-2.5 max-w-2xl mx-auto">
              <AnimatePresence mode="popLayout">
                {filteredTech.map((tech) => (
                  <motion.div
                    key={tech.name}
                    layout
                    initial={{ opacity: 0, scale: 0.85, y: 8 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.85, y: -8 }}
                    transition={{ duration: 0.22, ease: "easeOut" }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-3.5 py-2 rounded-2xl bg-[#160D36]/90 border border-purple-700/50 hover:border-purple-400 text-xs font-mono text-purple-200 hover:text-white transition-colors shadow-[0_0_12px_rgba(147,51,234,0.15)] flex items-center gap-2 cursor-default backdrop-blur-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 shadow-[0_0_6px_#c084fc]" />
                    <span className="font-semibold">{tech.name}</span>
                    <span className="text-[10px] text-purple-400/70 font-sans">
                      ({tech.badge})
                    </span>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Animated Planetary Orbit Rings - Perfectly Balanced Spacing */}
          <div className="relative w-full max-w-sm sm:max-w-md mx-auto h-56 sm:h-64 flex items-center justify-center my-4 sm:my-6">
            {/* Outer Orbit Glow Backdrop */}
            <div className="absolute inset-0 bg-purple-600/5 rounded-full blur-3xl pointer-events-none" />

            {/* Outer Ring 1 */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
              className="absolute w-64 sm:w-72 h-64 sm:h-72 border border-purple-500/25 rounded-full [transform:rotateX(68deg)] shadow-[0_0_30px_rgba(168,85,247,0.12)] flex items-center justify-between p-2 pointer-events-none">
              <div className="w-3 h-3 rounded-full bg-purple-400 shadow-[0_0_10px_#c084fc]" />
              <div className="w-2.5 h-2.5 rounded-full bg-indigo-400 shadow-[0_0_8px_#818cf8]" />
            </motion.div>

            {/* Inner Ring 2 */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute w-48 sm:w-52 h-48 sm:h-52 border border-purple-500/35 rounded-full [transform:rotateX(68deg)] flex items-center justify-between p-1.5 pointer-events-none">
              <div className="w-2.5 h-2.5 rounded-full bg-violet-300 shadow-[0_0_8px_#a78bfa]" />
              <div className="w-2 h-2 rounded-full bg-fuchsia-400 shadow-[0_0_8px_#e879f9]" />
            </motion.div>

            {/* Glowing Center Core */}
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-20 w-24 h-24 rounded-full bg-gradient-to-tr from-purple-600 via-fuchsia-500 to-indigo-500 p-[2px] shadow-[0_0_40px_rgba(168,85,247,0.55)]">
              <div className="w-full h-full bg-[#0F0726] rounded-full flex flex-col items-center justify-center space-y-1">
                <div className="w-8 h-8 rounded-lg bg-purple-950/80 border border-purple-500/50 flex items-center justify-center text-purple-200 shadow-[0_0_15px_rgba(168,85,247,0.4)]">
                  <Code2 className="w-4.5 h-4.5 text-pink-300" />
                </div>
                <span className="text-[9px] font-mono font-bold text-purple-200 uppercase tracking-widest">
                  Core Stack
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 4. FEATURED PROJECTS - 3D CURVED COVERFLOW / ARC CYLINDER CAROUSEL */}
        <section
          id="projects"
          className="space-y-8 sm:space-y-12 relative z-10 py-4 scroll-mt-24">
          {/* Section Header */}
          <div className="text-center space-y-2 max-w-xl mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white flex items-center justify-center gap-2">
              <span>My</span>
              <span className="bg-gradient-to-r from-pink-500 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <p className="text-xs sm:text-sm text-purple-300/80">
              A curated selection of production-grade web systems, enterprise
              logistics solutions, and mobile applications built with modern
              frontend architecture.
            </p>
          </div>

          {/* 3D Curved Carousel Container */}
          <div className="relative w-full flex flex-col items-center select-none">
            {/* 3D Perspective Stage */}
            <div
              className="relative w-full h-[320px] sm:h-[380px] md:h-[420px] flex items-center justify-center overflow-hidden"
              style={{ perspective: "1100px", transformStyle: "preserve-3d" }}>
              {/* Carousel Navigation Arrow - Left */}
              <button
                onClick={handlePrevProject}
                aria-label="Previous project"
                className="absolute left-2 sm:left-6 z-50 w-11 h-11 rounded-full bg-purple-950/80 hover:bg-purple-900 border border-purple-600/50 text-white flex items-center justify-center shadow-[0_0_20px_rgba(168,85,247,0.35)] backdrop-blur-md transition-all hover:scale-110 active:scale-95 cursor-pointer">
                <ChevronLeft className="w-6 h-6 text-purple-200" />
              </button>

              {/* Carousel Navigation Arrow - Right */}
              <button
                onClick={handleNextProject}
                aria-label="Next project"
                className="absolute right-2 sm:right-6 z-50 w-11 h-11 rounded-full bg-purple-950/80 hover:bg-purple-900 border border-purple-600/50 text-white flex items-center justify-center shadow-[0_0_20px_rgba(168,85,247,0.35)] backdrop-blur-md transition-all hover:scale-110 active:scale-95 cursor-pointer">
                <ChevronRight className="w-6 h-6 text-purple-200" />
              </button>

              {/* 3D Rotating Arc Cards */}
              <div
                className="relative w-full h-full flex items-center justify-center"
                style={{ transformStyle: "preserve-3d" }}>
                {projectCarouselItems.map((project, idx) => {
                  const total = projectCarouselItems.length;
                  // Normalized relative distance
                  let diff = (idx - activeProjectIndex) % total;
                  if (diff > total / 2) diff -= total;
                  if (diff < -total / 2) diff += total;

                  const isCenter = diff === 0;
                  const absDiff = Math.abs(diff);

                  // 3D Arc Mathematical Coordinates
                  // Responsive X spacing
                  const xSpacing =
                    typeof window !== "undefined" && window.innerWidth < 640
                      ? 140
                      : 250;
                  const translateX = diff * xSpacing;
                  const rotateY = diff * -25; // Curved arc cylinder angle
                  const translateZ = isCenter ? 60 : -absDiff * 85;
                  const scale = isCenter
                    ? 1.05
                    : Math.max(0.72, 1 - absDiff * 0.12);
                  const opacity = absDiff > 2 ? 0 : isCenter ? 1 : 0.65;
                  const zIndex = 40 - absDiff * 10;
                  const brightness = isCenter ? 1 : 0.45;

                  return (
                    <motion.div
                      key={project.id}
                      onClick={() => setActiveProjectIndex(idx)}
                      animate={{
                        x: translateX,
                        rotateY: rotateY,
                        z: translateZ,
                        scale: scale,
                        opacity: opacity,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 26,
                      }}
                      style={{
                        zIndex: zIndex,
                        transformStyle: "preserve-3d",
                      }}
                      className={`absolute w-56 sm:w-72 md:w-80 h-[280px] sm:h-[340px] md:h-[370px] rounded-2xl overflow-hidden cursor-pointer transition-shadow duration-300 ${
                        isCenter
                          ? "border-2 border-purple-400 shadow-[0_0_35px_rgba(168,85,247,0.5)] ring-1 ring-purple-300/40"
                          : "border border-purple-800/40 shadow-[0_10px_30px_rgba(0,0,0,0.6)]"
                      }`}>
                      {/* Image Thumbnail */}
                      <div className="relative w-full h-full bg-[#0E0624]">
                        <img
                          src={
                            project.image ||
                            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop"
                          }
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                          style={{ filter: `brightness(${brightness})` }}
                        />

                        {/* Top Gradient & Platform Badge */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0318] via-black/20 to-black/60 pointer-events-none" />

                        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                          <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-purple-950/90 text-purple-300 border border-purple-700/60 uppercase">
                            0{idx + 1}
                          </span>
                          <span className="px-2.5 py-1 rounded-full text-[10px] font-mono text-purple-200 bg-black/60 backdrop-blur-md border border-purple-800/40">
                            {project.platform.join(" & ")}
                          </span>
                        </div>

                        {/* Card Bottom Quick Label */}
                        <div className="absolute bottom-3 left-3 right-3">
                          <h4 className="text-sm sm:text-base font-bold text-white truncate drop-shadow-md">
                            {project.title}
                          </h4>
                          <p className="text-[11px] text-purple-300/80 truncate font-mono">
                            {project.domain}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Pagination Dots */}
            <div className="flex items-center gap-2 mt-4">
              {projectCarouselItems.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setActiveProjectIndex(i);
                    setIsDescExpanded(false);
                  }}
                  aria-label={`Go to project ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    i === activeProjectIndex
                      ? "w-8 bg-gradient-to-r from-pink-500 to-purple-600 shadow-[0_0_10px_rgba(236,72,153,0.6)]"
                      : "w-2 bg-purple-900/60 hover:bg-purple-700"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* ACTIVE PROJECT SPOTLIGHT (Title + Description + 2 Action Buttons) */}
          {projectCarouselItems[activeProjectIndex] && (
            <AnimatePresence mode="wait">
              <motion.div
                key={projectCarouselItems[activeProjectIndex].id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="max-w-2xl mx-auto text-center space-y-4 px-4 pt-2">
                {/* Project Title */}
                <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                  {projectCarouselItems[activeProjectIndex].title}
                </h3>

                {/* Subtitle / Role */}
                <div className="text-xs sm:text-sm font-mono text-purple-300/90 flex items-center justify-center gap-2">
                  <span>{projectCarouselItems[activeProjectIndex].subtitle}</span>
                  <span>•</span>
                  <span className="text-purple-400">
                    {projectCarouselItems[activeProjectIndex].timeline}
                  </span>
                </div>

                {/* Description with Expandable Long-Text Support */}
                <div className="max-w-xl mx-auto space-y-1">
                  <p
                    className={`text-xs sm:text-base text-purple-100/90 leading-relaxed font-sans transition-all duration-300 ${
                      !isDescExpanded ? "line-clamp-3" : ""
                    }`}>
                    {projectCarouselItems[activeProjectIndex].overview}
                  </p>

                  {/* Read More / Show Less Toggle if overview is long */}
                  {projectCarouselItems[activeProjectIndex].overview.length >
                    130 && (
                    <button
                      onClick={() => setIsDescExpanded(!isDescExpanded)}
                      className="text-xs font-mono text-pink-400 hover:text-pink-300 underline underline-offset-4 cursor-pointer transition-colors pt-0.5">
                      {isDescExpanded ? "Show less ▲" : "Read more ▼"}
                    </button>
                  )}
                </div>

                {/* Tech Stack Mini Tags */}
                <div className="flex flex-wrap items-center justify-center gap-1.5 pt-1">
                  {projectCarouselItems[activeProjectIndex].techStack.map(
                    (tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-purple-950/80 border border-purple-800/50 text-purple-300">
                        {tech}
                      </span>
                    ),
                  )}
                </div>

                {/* 2 Primary Buttons: View & Github */}
                <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                  {/* 1. View / Live Demo Button (Pink-Purple Glow) */}
                  <a
                    href={
                      projectCarouselItems[activeProjectIndex].liveDemoUrl || "#"
                    }
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 hover:from-pink-400 hover:to-indigo-500 text-white font-bold text-sm tracking-wide shadow-[0_0_25px_rgba(236,72,153,0.4)] transition-all hover:scale-105 active:scale-95 cursor-pointer">
                    <span>View (Live Demo)</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>

                  {/* 2. Link Github Button (Violet Dark Glow) */}
                  <a
                    href={projectCarouselItems[activeProjectIndex].githubUrl || "#"}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-purple-800 via-violet-900 to-indigo-900 hover:from-purple-700 hover:to-indigo-800 border border-purple-500/50 hover:border-purple-400 text-white font-bold text-sm tracking-wide shadow-[0_0_20px_rgba(147,51,234,0.3)] transition-all hover:scale-105 active:scale-95 cursor-pointer">
                    <span>Github</span>
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          )}
        </section>

        {/* 5. AI-ASSISTED DEVELOPMENT (Futuristic AI Neural Matrix) */}
        <motion.section
          id="ai-development"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative p-6 sm:p-10 rounded-3xl bg-gradient-to-br from-[#1A0C38] via-[#100628] to-[#080218] border border-purple-500/40 shadow-[0_0_50px_rgba(168,85,247,0.22)] overflow-hidden space-y-8">
          {/* Futuristic Background Neural Grid & Laser Sparks */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8b5cf610_1px,transparent_1px),linear-gradient(to_bottom,#8b5cf610_1px,transparent_1px)] bg-[size:28px_28px] pointer-events-none opacity-40" />
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-fuchsia-600/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-violet-600/20 rounded-full blur-3xl pointer-events-none" />

          {/* Section Header with Glowing AI Brain Icon & Live Status */}
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-purple-800/50 pb-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/80 border border-purple-500/50 text-[11px] font-mono text-purple-300 shadow-[0_0_15px_rgba(168,85,247,0.3)]">
                <Brain className="w-3.5 h-3.5 text-pink-400 animate-pulse" />
                <span className="bg-gradient-to-r from-pink-400 to-purple-300 bg-clip-text text-transparent font-bold">
                  AI-AUGMENTED WORKFLOW
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center gap-2">
                <span>AI-Assisted</span>
                <span className="bg-gradient-to-r from-pink-400 via-purple-300 to-indigo-300 bg-clip-text text-transparent">
                  Development
                </span>
              </h2>
              <p className="text-xs sm:text-sm text-purple-300/80 max-w-xl font-sans">
                Leveraging next-gen LLMs (Cursor, Claude 3.7 Sonnet) to
                supercharge frontend prototyping, architectural refactoring, and
                code validation.
              </p>
            </div>

            {/* AI Stack Badges */}
            <div className="flex flex-wrap items-center gap-2">
              {[
                {
                  name: "Cursor AI",
                  icon: Sparkles,
                  glow: "border-pink-500/60 bg-pink-950/40 text-pink-300",
                },
                {
                  name: "Claude 3.7",
                  icon: Bot,
                  glow: "border-purple-500/60 bg-purple-950/50 text-purple-200",
                },
                {
                  name: "Zero-Hallucination Guard",
                  icon: ShieldCheck,
                  glow: "border-emerald-500/50 bg-emerald-950/40 text-emerald-300",
                },
              ].map((tool, tIdx) => {
                const IconComponent = tool.icon;
                return (
                  <div
                    key={tIdx}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-mono backdrop-blur-md shadow-[0_0_12px_rgba(0,0,0,0.5)] ${tool.glow}`}>
                    <IconComponent className="w-3.5 h-3.5" />
                    <span>{tool.name}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* AI Interactive Neural Grid Cards */}
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {aiAssistedDevelopmentData.map((item, idx) => {
              const icons = [Zap, Code2, Search, ShieldCheck];
              const StepIcon = icons[idx % icons.length];
              const colors = [
                "from-pink-500/20 to-purple-900/40 border-pink-500/40 hover:border-pink-400 shadow-pink-500/10",
                "from-purple-500/20 to-indigo-900/40 border-purple-500/40 hover:border-purple-400 shadow-purple-500/10",
                "from-indigo-500/20 to-violet-900/40 border-indigo-500/40 hover:border-indigo-400 shadow-indigo-500/10",
                "from-emerald-500/20 to-purple-900/40 border-emerald-500/40 hover:border-emerald-400 shadow-emerald-500/10",
              ];
              const accentColor = colors[idx % colors.length];

              return (
                <motion.div
                  key={idx}
                  whileHover={{ y: -4, scale: 1.01 }}
                  transition={{ duration: 0.2 }}
                  className={`p-5 rounded-2xl bg-gradient-to-br ${accentColor} border backdrop-blur-md space-y-3 transition-all duration-300 shadow-[0_8px_20px_rgba(0,0,0,0.4)] relative group overflow-hidden`}>
                  {/* Subtle top neon line on hover */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-purple-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-purple-950/80 border border-purple-600/50 flex items-center justify-center text-purple-300 shadow-[0_0_10px_rgba(168,85,247,0.3)] group-hover:scale-110 transition-transform shrink-0">
                      <StepIcon className="w-4 h-4 text-purple-300" />
                    </div>
                    <span className="text-sm sm:text-base font-bold text-white tracking-wide">
                      {item.title}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-purple-200/80 leading-relaxed font-sans pl-0.5">
                    {item.description}
                  </p>

                  {/* Micro context indicator */}
                  <div className="pt-2 border-t border-purple-900/40 flex items-center text-[10px] font-mono text-purple-400/80">
                    <span className="flex items-center gap-1.5">
                      <Binary className="w-3 h-3 text-purple-400" />
                      <span>
                        {idx === 3
                          ? "Human-in-the-loop Verified"
                          : "Deep Context Augmented"}
                      </span>
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* AI Terminal / Live Pipeline Simulation (Responsive Clean Layout) */}
          <div className="relative z-10 p-4 sm:p-5 rounded-2xl bg-[#080214] border border-purple-800/60 font-mono text-xs text-purple-300/90 space-y-3 shadow-inner">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-purple-900/50 pb-2.5">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-pink-400 animate-pulse shrink-0" />
                <span className="text-purple-400 font-bold">$ ai.pipeline</span>
              </div>
              <div className="flex items-center gap-1.5 text-[10px] text-emerald-400 bg-emerald-950/60 px-2.5 py-0.5 rounded-full border border-emerald-500/40">
                <CheckCircle2 className="w-3 h-3" />
                <span>100% Quality Checked</span>
              </div>
            </div>

            {/* Pipeline Stage Badges with arrows */}
            <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
              {[
                {
                  stage: "Prompt Analysis",
                  color: "bg-pink-950/50 border-pink-500/40 text-pink-300",
                },
                {
                  stage: "Architectural Synthesis",
                  color:
                    "bg-purple-950/50 border-purple-500/40 text-purple-200",
                },
                {
                  stage: "Strict TypeScript Typecheck",
                  color:
                    "bg-indigo-950/50 border-indigo-500/40 text-indigo-200",
                },
                {
                  stage: "Production Deploy",
                  color:
                    "bg-emerald-950/50 border-emerald-500/40 text-emerald-300",
                },
              ].map((step, sIdx, arr) => (
                <div key={sIdx} className="flex items-center gap-2">
                  <span
                    className={`px-2.5 py-1 rounded-lg border font-mono text-[11px] sm:text-xs font-semibold ${step.color}`}>
                    {step.stage}
                  </span>
                  {sIdx < arr.length - 1 && (
                    <span className="text-purple-500 font-bold select-none text-xs">
                      ➔
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* 6. EDUCATION & CONTACT SECTION */}
        <section id="contact" className="space-y-10">
          {/* Education Mini Banner */}
          <div
            id="education"
            className="p-6 sm:p-8 rounded-3xl bg-[#140B30] border border-purple-800/40 flex flex-col sm:flex-row items-center justify-between gap-4 scroll-mt-24">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-purple-900/60 border border-purple-700/50 flex items-center justify-center text-purple-300 shrink-0">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">
                  {educationData.institution}
                </h3>
                <p className="text-xs text-purple-300/80">
                  {educationData.degree} ({educationData.period})
                </p>
              </div>
            </div>

            <div className="text-xs font-mono text-purple-300/70 bg-[#0E0624] px-3.5 py-1.5 rounded-xl border border-purple-900/60">
              Bachelor of Software Engineering
            </div>
          </div>

          {/* Let's Talk Hero Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center space-y-6 p-8 sm:p-14 rounded-3xl bg-gradient-to-b from-[#1E1146] via-[#160B36] to-[#0D0524] border border-purple-600/40 shadow-[0_0_50px_rgba(168,85,247,0.25)] relative overflow-hidden">
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-500/20 rounded-full blur-[100px] pointer-events-none" />

            <div className="space-y-3 relative z-10 max-w-xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                Have a project or opportunity in mind?
              </h2>
              <p className="text-xs sm:text-sm text-purple-200/80 leading-relaxed font-sans">
                I am open to Middle Frontend Engineer roles (React / Next.js /
                React Native) in logistics, enterprise, or high-growth
                engineering teams.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-4 relative z-10">
              <button
                type="button"
                onClick={handleSendEmail}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-violet-600 hover:from-purple-400 hover:to-violet-500 text-white font-bold text-xs sm:text-sm shadow-[0_0_25px_rgba(168,85,247,0.5)] transition-all hover:scale-105 active:scale-95 cursor-pointer">
                <Mail className="w-4 h-4" />
                <span>Send Email directly</span>
              </button>

              <a
                href={`tel:${profileData.phone}`}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#12082E] hover:bg-[#1A0C42] border border-purple-700/50 text-purple-200 font-mono text-xs sm:text-sm transition-all hover:scale-105 active:scale-95 cursor-pointer">
                <Phone className="w-4 h-4 text-purple-400" />
                <span>{profileData.phone}</span>
              </a>

              <button
                onClick={handleDownloadCV}
                disabled={isDownloadingCV}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#12082E] hover:bg-[#1A0C42] border border-purple-700/50 text-purple-200 font-mono text-xs sm:text-sm transition-all hover:scale-105 active:scale-95 cursor-pointer disabled:opacity-80 disabled:cursor-not-allowed">
                {isDownloadingCV ? (
                  <RefreshCw className="w-4 h-4 text-purple-400 animate-spin" />
                ) : (
                  <FileText className="w-4 h-4 text-purple-400" />
                )}
                <span>{isDownloadingCV ? "Preparing..." : "Download CV"}</span>
              </button>
            </div>
          </motion.div>
        </section>
      </div>

      {/* Footer */}
      <footer className="border-t border-purple-900/40 bg-[#070412] py-8 text-center text-xs text-purple-400/60 font-mono relative z-10">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            © 2026 {profileData.name} • Middle Frontend Engineer (React.js /
            Next.js / React Native)
          </div>
          <div className="flex items-center gap-4">
            <span>•</span>
            <span className="text-purple-400">{profileData.location}</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

