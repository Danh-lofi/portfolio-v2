import React, { useState } from 'react';
import { 
  profileData, 
  experiencesData, 
  techCategories, 
  educationData, 
  aiAssistedDevelopmentData 
} from '../../data/portfolioData';
import { 
  Printer, 
  Copy, 
  Check, 
  Mail, 
  Phone, 
  ExternalLink, 
  MapPin, 
  Download, 
  FileText,
  Share2
} from 'lucide-react';

export const OfficialResumeTemplate: React.FC = () => {
  const [copiedAll, setCopiedAll] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(profileData.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleCopyMarkdown = () => {
    const markdown = `# DO THANH DANH
**Middle Frontend Engineer**
${profileData.phone} | ${profileData.dob} | ${profileData.email} | Portfolio: ${profileData.portfolioUrl} | ${profileData.location}

## PROFESSIONAL SUMMARY
${profileData.aboutParagraphs.join('\n\n')}

## TECHNICAL SKILLS
- **Frontend**: React.js, Next.js, React Native, TypeScript, JavaScript, HTML5, CSS3
- **State & Data**: Redux / Redux Toolkit, Zustand, TanStack Query, React Hook Form
- **UI**: Ant Design, Material UI, Tailwind CSS
- **API & Tools**: Axios, RESTful APIs, Git, Vite, Webpack
- **AI-Assisted Development**: Cursor, Claude, AI-assisted coding, refactoring, debugging, code analysis

## WORK EXPERIENCE
### CEH TECHNOLOGY PLATFORM JOINT STOCK COMPANY
**Front End Developer | 03/2024 – 08/2026**
- VietnamHub – Logistics & Container Transportation Platform (Web & Mobile)
- Hateco & HICT Driver Mobile App
- HICT Container Inspection App

### TECH SOURCE
**Front End Developer | 04/2023 – 02/2024**
- HRM (Personnel statistics and management)

## EDUCATION
**Industrial University of Ho Chi Minh City | 2019 – 2023**
Bachelor of Science in Software Engineering

## AI-ASSISTED DEVELOPMENT
- Proficient in using Cursor and Claude to accelerate software development workflows.
- Use AI for code generation, refactoring, debugging, code analysis, documentation, and technical problem solving.
- Leverage AI to explore unfamiliar codebases and improve existing implementations while maintaining architecture consistency.
- Review and validate AI-generated code before integrating it into production systems.
`;
    navigator.clipboard.writeText(markdown);
    setCopiedAll(true);
    setTimeout(() => setCopiedAll(false), 2000);
  };

  return (
    <div className="bg-[#18181B] min-h-screen py-10 px-4 sm:px-6 lg:px-8 font-sans antialiased selection:bg-cyan-500/30">
      
      {/* Top Floating Control Bar */}
      <div className="max-w-4xl mx-auto mb-8 bg-[#111113] border border-[#27272A] rounded-2xl p-4 shadow-xl flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
            <FileText className="w-5 h-5" />
          </div>
          <div>
            <div className="text-sm font-bold text-white font-sans">
              Official ATS Curriculum Vitae
            </div>
            <div className="text-xs text-[#A1A1AA] font-mono">
              1:1 High-Fidelity Match with Original Attached PDF
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={handlePrint}
            id="print-cv-btn"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-cyan-500 hover:bg-cyan-400 text-zinc-950 font-bold text-xs transition-all shadow-md active:scale-95"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print / Save PDF</span>
          </button>

          <button
            onClick={handleCopyMarkdown}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#09090B] border border-[#27272A] hover:border-cyan-500/40 text-xs font-mono text-[#FAFAFA] transition-colors"
          >
            {copiedAll ? <Check className="w-3.5 h-3.5 text-cyan-400" /> : <Copy className="w-3.5 h-3.5 text-[#A1A1AA]" />}
            <span>{copiedAll ? 'Copied Markdown' : 'Copy All Text'}</span>
          </button>

          <button
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-full bg-[#09090B] border border-[#27272A] hover:border-cyan-500/40 text-xs font-mono text-[#A1A1AA] hover:text-white transition-colors"
          >
            {copiedEmail ? <Check className="w-3.5 h-3.5 text-cyan-400" /> : <Mail className="w-3.5 h-3.5" />}
            <span>Email</span>
          </button>

          <button
            onClick={handleCopyPhone}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-full bg-[#09090B] border border-[#27272A] hover:border-cyan-500/40 text-xs font-mono text-[#A1A1AA] hover:text-white transition-colors"
          >
            {copiedPhone ? <Check className="w-3.5 h-3.5 text-cyan-400" /> : <Phone className="w-3.5 h-3.5" />}
            <span>Phone</span>
          </button>
        </div>
      </div>

      {/* Printable Two-Page Paper Simulation */}
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* PAGE 1 */}
        <div className="bg-white text-slate-900 rounded-none shadow-2xl p-8 sm:p-14 border border-slate-300 font-sans leading-relaxed relative print:p-0 print:border-none print:shadow-none">
          
          {/* Header watermark in print */}
          <div className="text-right text-[11px] font-mono text-slate-400 mb-6 border-b border-slate-100 pb-1">
            Do Thanh Danh | CV • Page 1
          </div>

          {/* Document Header */}
          <div className="space-y-1.5 pb-4 border-b border-slate-200">
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-950 uppercase font-sans">
              DO THANH DANH
            </h1>
            <div className="text-sm font-semibold text-slate-800">
              Middle Frontend Engineer
            </div>
            <div className="text-xs text-slate-600 font-sans flex flex-wrap items-center gap-x-2 gap-y-1 pt-1">
              <span>{profileData.phone}</span>
              <span className="text-slate-300">|</span>
              <span>{profileData.dob}</span>
              <span className="text-slate-300">|</span>
              <a href={`mailto:${profileData.email}`} className="text-blue-600 hover:underline">
                {profileData.email}
              </a>
              <span className="text-slate-300">|</span>
              <span>Portfolio: </span>
              <a href={profileData.portfolioUrl} target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">
                {profileData.portfolioUrl}
              </a>
              <span className="text-slate-300">|</span>
              <span>{profileData.location}</span>
            </div>
          </div>

          {/* Section: PROFESSIONAL SUMMARY */}
          <div className="pt-4 space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-950 border-b border-slate-300 pb-1">
              PROFESSIONAL SUMMARY
            </h2>
            <p className="text-xs text-slate-700 text-justify leading-relaxed">
              Frontend Engineer with 3.5+ years of experience building production-grade web and mobile applications using React.js, Next.js, and React Native. Experienced in developing complex business workflows for logistics and transportation platforms, including order lifecycle management, booking, driver operations, shipment tracking, and port inspection systems. Strong background in frontend architecture, reusable component development, state management, REST API integration, and performance optimization. Proficient in AI-assisted software development using Cursor and Claude for code generation, refactoring, debugging, code analysis, documentation, and problem solving, with careful review and validation of AI-generated code before production use.
            </p>
          </div>

          {/* Section: TECHNICAL SKILLS */}
          <div className="pt-4 space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-950 border-b border-slate-300 pb-1">
              TECHNICAL SKILLS
            </h2>
            <div className="text-xs text-slate-800 space-y-1">
              <div>
                <span className="font-bold text-slate-900">Frontend: </span>
                <span>React.js, Next.js, React Native, TypeScript, JavaScript, HTML5, CSS3</span>
              </div>
              <div>
                <span className="font-bold text-slate-900">State & Data: </span>
                <span>Redux / Redux Toolkit, Zustand, TanStack Query, React Hook Form</span>
              </div>
              <div>
                <span className="font-bold text-slate-900">UI: </span>
                <span>Ant Design, Material UI, Tailwind CSS</span>
              </div>
              <div>
                <span className="font-bold text-slate-900">API & Tools: </span>
                <span>Axios, RESTful APIs, Git, Vite, Webpack</span>
              </div>
              <div>
                <span className="font-bold text-slate-900">AI-Assisted Development: </span>
                <span>Cursor, Claude, AI-assisted coding, refactoring, debugging, code analysis</span>
              </div>
            </div>
          </div>

          {/* Section: WORK EXPERIENCE - Company 1 */}
          <div className="pt-4 space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-950 border-b border-slate-300 pb-1">
              WORK EXPERIENCE
            </h2>

            {/* CEH */}
            <div className="space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <span className="font-bold text-xs uppercase tracking-wide text-slate-950">
                  CEH TECHNOLOGY PLATFORM JOINT STOCK COMPANY
                </span>
              </div>
              <div className="text-xs font-bold text-slate-800 flex items-center justify-between">
                <span>Front End Developer</span>
                <span className="font-normal font-mono text-slate-600">03/2024 – 08/2026</span>
              </div>

              {/* Project 1.1 */}
              <div className="space-y-1 pt-1">
                <div className="text-xs font-bold text-slate-900">
                  VietnamHub – Logistics & Container Transportation Platform (Web & Mobile)
                </div>
                <p className="text-[11px] text-slate-600 leading-relaxed italic">
                  Enterprise logistics system enabling customers to book trucks, manage container shipments, track real-time order status, and monitor operational statistics across web and mobile platforms.
                </p>
                <ul className="list-disc list-outside pl-4 space-y-0.5 text-xs text-slate-800">
                  <li>Designed and developed scalable frontend architecture for the web platform using React.js and Ant Design.</li>
                  <li>Developed cross-platform customer and driver applications using React Native.</li>
                  <li>Implemented end-to-end order lifecycle workflows including booking, assignment, tracking, execution, and completion.</li>
                  <li>Built customer mobile workflows for order creation, shipment tracking, and order management.</li>
                  <li>Built driver workflows supporting order acceptance, execution, and real-time operational status updates.</li>
                  <li>Created reusable and maintainable UI components across web and mobile platforms.</li>
                  <li>Managed global state using Redux and integrated RESTful APIs with Axios for complex asynchronous business logic.</li>
                  <li>Collaborated with backend engineers, QA, and product teams to deliver reliable production-ready applications.</li>
                  <li>Optimized frontend performance and usability for real-world logistics operations.</li>
                </ul>
                <div className="text-xs pt-0.5">
                  <span className="font-bold text-slate-900">Tech Stack: </span>
                  <span className="text-slate-700">React.js, React Native, Redux, Ant Design, Axios, REST APIs</span>
                </div>
              </div>

              {/* Project 1.2 */}
              <div className="space-y-1 pt-2">
                <div className="text-xs font-bold text-slate-900">
                  Hateco & HICT Driver Mobile App
                </div>
                <p className="text-[11px] text-slate-600 leading-relaxed italic">
                  Mobile application supporting truck drivers in managing transportation orders and gate appointments in real-world port operations.
                </p>
                <ul className="list-disc list-outside pl-4 space-y-0.5 text-xs text-slate-800">
                  <li>Developed cross-platform mobile application using React Native.</li>
                  <li>Implemented complete order lifecycle: accept, start, complete, and cancel.</li>
                  <li>Built gate appointment scheduling, order management, and tracking features.</li>
                  <li>Managed state with Redux and integrated APIs using Axios.</li>
                  <li>Improved usability and performance for operational efficiency.</li>
                </ul>
                <div className="text-xs pt-0.5">
                  <span className="font-bold text-slate-900">Tech Stack: </span>
                  <span className="text-slate-700">React Native, Redux, Axios</span>
                </div>
              </div>

              {/* Project 1.3 */}
              <div className="space-y-1 pt-2">
                <div className="text-xs font-bold text-slate-900">
                  HICT Container Inspection App
                </div>
                <p className="text-[11px] text-slate-600 leading-relaxed italic">
                  Mobile inspection application allowing inspectors to capture container images, record notes, and manage inspection records directly in port environments.
                </p>
                <ul className="list-disc list-outside pl-4 space-y-0.5 text-xs text-slate-800">
                  <li>Built inspection workflows with image capture and annotation features.</li>
                  <li>Developed container inspection record management module.</li>
                  <li>Managed server state with TanStack Query and local state with Zustand.</li>
                  <li>Integrated REST APIs and optimized performance for field usage.</li>
                </ul>
                <div className="text-xs pt-0.5">
                  <span className="font-bold text-slate-900">Tech Stack: </span>
                  <span className="text-slate-700">React Native, Zustand, TanStack Query, Axios</span>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* PAGE 2 */}
        <div className="bg-white text-slate-900 rounded-none shadow-2xl p-8 sm:p-14 border border-slate-300 font-sans leading-relaxed relative print:p-0 print:border-none print:shadow-none">
          
          <div className="text-right text-[11px] font-mono text-slate-400 mb-6 border-b border-slate-100 pb-1">
            Do Thanh Danh | CV • Page 2
          </div>

          {/* Section: WORK EXPERIENCE - Company 2 */}
          <div className="space-y-3">
            
            <div className="space-y-2">
              <div className="font-bold text-xs uppercase tracking-wide text-slate-950">
                TECH SOURCE
              </div>
              <div className="text-xs font-bold text-slate-800 flex items-center justify-between">
                <span>Front End Developer</span>
                <span className="font-normal font-mono text-slate-600">04/2023 – 02/2024</span>
              </div>

              <div className="space-y-1 pt-1">
                <div className="text-xs font-bold text-slate-900">
                  HRM
                </div>
                <p className="text-[11px] text-slate-600 leading-relaxed italic">
                  HRM website for personnel statistics and management of employee information including personal details, insurance, taxes, and contracts.
                </p>
                <ul className="list-disc list-outside pl-4 space-y-0.5 text-xs text-slate-800">
                  <li>Collaborated on frontend development while working closely with backend developers.</li>
                  <li>Developed user-facing HRM features using React, MUI, Redux Toolkit, and React Hook Form.</li>
                  <li>Contributed to platform architecture and features for personnel, insurance, tax, and contract management.</li>
                </ul>
                <div className="text-xs pt-0.5">
                  <span className="font-bold text-slate-900">Tech Stack: </span>
                  <span className="text-slate-700">Next.js, MUI, Redux Toolkit, React Hook Form, Yup</span>
                </div>
              </div>
            </div>

          </div>

          {/* Section: EDUCATION */}
          <div className="pt-6 space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-950 border-b border-slate-300 pb-1">
              EDUCATION
            </h2>
            <div className="text-xs space-y-0.5">
              <div className="flex items-center justify-between font-bold text-slate-900">
                <span>Industrial University of Ho Chi Minh City</span>
                <span className="font-mono font-normal text-slate-600">2019 – 2023</span>
              </div>
              <div className="text-slate-700">
                Bachelor of Science in Software Engineering
              </div>
            </div>
          </div>

          {/* Section: AI-ASSISTED DEVELOPMENT */}
          <div className="pt-6 space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-950 border-b border-slate-300 pb-1">
              AI-ASSISTED DEVELOPMENT
            </h2>
            <ul className="list-disc list-outside pl-4 space-y-1 text-xs text-slate-800">
              <li>Proficient in using Cursor and Claude to accelerate software development workflows.</li>
              <li>Use AI for code generation, refactoring, debugging, code analysis, documentation, and technical problem solving.</li>
              <li>Leverage AI to explore unfamiliar codebases and improve existing implementations while maintaining architecture consistency.</li>
              <li>Review and validate AI-generated code before integrating it into production systems.</li>
            </ul>
          </div>

          {/* Document Footer Signoff */}
          <div className="mt-16 pt-4 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-400 font-mono">
            <span>Verified Official Document • DO THANH Danh</span>
            <a href={profileData.portfolioUrl} target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">
              {profileData.portfolioUrl}
            </a>
          </div>

        </div>

      </div>
    </div>
  );
};
