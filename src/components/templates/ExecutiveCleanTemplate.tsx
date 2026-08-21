import React, { useState } from 'react';
import { 
  profileData, 
  experiencesData, 
  featuredProjects, 
  techCategories, 
  educationData, 
  aiAssistedDevelopmentData,
  businessDomains 
} from '../../data/portfolioData';
import { ProjectDetail } from '../../types';
import { 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink, 
  FileText, 
  Briefcase, 
  GraduationCap, 
  Code2, 
  Sparkles, 
  ChevronRight, 
  Layers, 
  CheckCircle2, 
  ArrowUpRight,
  Printer,
  Copy,
  Check
} from 'lucide-react';

interface ExecutiveCleanTemplateProps {
  onSelectProject: (project: ProjectDetail) => void;
  onOpenResume: () => void;
}

export const ExecutiveCleanTemplate: React.FC<ExecutiveCleanTemplateProps> = ({
  onSelectProject,
  onOpenResume,
}) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [activeTab, setActiveTab] = useState<'all' | 'experience' | 'projects' | 'skills' | 'ai'>('all');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <div className="bg-[#FAFAFC] text-[#0F172A] min-h-screen font-sans selection:bg-blue-500/20 selection:text-blue-700 antialiased">
      
      {/* Header Banner */}
      <header className="border-b border-slate-200 bg-white/80 backdrop-blur-md sticky top-12 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center font-bold text-lg shadow-sm">
              D
            </div>
            <div>
              <h1 className="text-base font-bold text-slate-900 tracking-tight">
                {profileData.name}
              </h1>
              <p className="text-xs text-slate-500 font-medium">
                {profileData.title} • {profileData.experienceYears} Years Production Experience
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs font-medium transition-colors"
            >
              {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-slate-500" />}
              <span>{copiedEmail ? 'Email Copied' : profileData.email}</span>
            </button>

            <a
              href={`mailto:${profileData.email}`}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-xs transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Contact Directly</span>
            </a>

            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 text-xs font-medium transition-colors"
            >
              <FileText className="w-3.5 h-3.5 text-blue-600" />
              <span>Full CV</span>
            </button>
          </div>

        </div>
      </header>

      {/* Main Grid Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Profile Card & Quick Info (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Identity Card */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-6">
              
              <div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200 mb-3">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Available for Roles
                </div>
                <h2 className="text-2xl font-black text-slate-950 tracking-tight">
                  {profileData.name}
                </h2>
                <div className="text-sm font-semibold text-blue-600 mt-0.5">
                  {profileData.title}
                </div>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Specializing in React.js, Next.js, and React Native for logistics, port operations, and complex enterprise software.
                </p>
              </div>

              {/* Contact Meta Details */}
              <div className="pt-4 border-t border-slate-100 space-y-2.5 text-xs text-slate-600">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400 font-medium">Location:</span>
                  <span className="font-medium text-slate-800">{profileData.location}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400 font-medium">Date of Birth:</span>
                  <span className="font-mono text-slate-800">{profileData.dob}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400 font-medium">Phone:</span>
                  <a href={`tel:${profileData.phone}`} className="font-mono font-medium text-blue-600 hover:underline">
                    {profileData.phone}
                  </a>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400 font-medium">Portfolio:</span>
                  <a href={profileData.portfolioUrl} target="_blank" rel="noreferrer" className="font-mono text-blue-600 hover:underline inline-flex items-center gap-1">
                    <span>porfolio-f463f</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Education Mini Tile */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-800 mb-1">
                  <GraduationCap className="w-4 h-4 text-blue-600" />
                  <span>{educationData.institution}</span>
                </div>
                <div className="text-xs text-slate-600">
                  {educationData.degree} ({educationData.period})
                </div>
              </div>

              {/* AI-Assisted Highlight Box */}
              <div className="p-4 rounded-xl bg-blue-50/50 border border-blue-100">
                <div className="flex items-center gap-2 text-xs font-bold text-blue-900 mb-1.5">
                  <Sparkles className="w-4 h-4 text-blue-600" />
                  <span>AI-Assisted Development</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Proficient in leveraging Cursor and Claude to accelerate code generation, refactoring, and debugging with rigorous human validation before production.
                </p>
              </div>

            </div>

            {/* Business Domains Summary */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Core Business Domains
              </h3>
              <div className="space-y-3">
                {businessDomains.map((domain) => (
                  <div key={domain.id} className="p-3 rounded-lg border border-slate-100 bg-slate-50/50 hover:bg-slate-100/60 transition-colors">
                    <div className="text-xs font-bold text-slate-900">{domain.title}</div>
                    <div className="text-[11px] text-slate-500 mt-0.5">{domain.subtitle}</div>
                    <div className="text-[11px] text-slate-600 mt-1.5 leading-normal">
                      {domain.workflows[0]}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: In-Depth Resume & Project Experience (8 cols) */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Executive Summary */}
            <section className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-4">
              <h2 className="text-xs font-bold uppercase tracking-wider text-blue-600 flex items-center gap-2">
                <FileText className="w-4 h-4" />
                Professional Summary
              </h2>
              <div className="space-y-3 text-sm text-slate-700 leading-relaxed">
                {profileData.aboutParagraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </section>

            {/* Technical Skills Matrix */}
            <section className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-6">
              <h2 className="text-xs font-bold uppercase tracking-wider text-blue-600 flex items-center gap-2">
                <Code2 className="w-4 h-4" />
                Technical Skills & Tools
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {techCategories.map((cat) => (
                  <div key={cat.title} className="p-4 rounded-xl border border-slate-200/80 bg-slate-50/40 space-y-2.5">
                    <div className="text-xs font-bold text-slate-900 flex items-center justify-between">
                      <span>{cat.title}</span>
                      <span className="text-[10px] font-normal text-slate-400">{cat.subtitle}</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {cat.items.map((item) => (
                        <span
                          key={item.name}
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs bg-white border border-slate-200 text-slate-800 font-medium shadow-2xs"
                        >
                          <span>{item.name}</span>
                          {item.badge && (
                            <span className="text-[10px] text-blue-600 font-mono bg-blue-50 px-1 rounded">
                              {item.badge}
                            </span>
                          )}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Work Experience Timeline */}
            <section className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-6">
              <h2 className="text-xs font-bold uppercase tracking-wider text-blue-600 flex items-center gap-2">
                <Briefcase className="w-4 h-4" />
                Work Experience
              </h2>

              <div className="space-y-8">
                {experiencesData.map((exp) => (
                  <div key={exp.id} className="relative pl-6 border-l-2 border-slate-200 space-y-4">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-600 border-4 border-white shadow-xs" />
                    
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                      <div>
                        <h3 className="text-base font-bold text-slate-950">
                          {exp.company}
                        </h3>
                        <div className="text-xs font-semibold text-blue-600 font-mono mt-0.5">
                          {exp.role}
                        </div>
                      </div>
                      <span className="text-xs font-mono font-medium text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md">
                        {exp.period}
                      </span>
                    </div>

                    {/* Projects under this company */}
                    <div className="space-y-6 pt-2">
                      {exp.projects.map((proj, pIdx) => (
                        <div key={pIdx} className="p-4 sm:p-5 rounded-xl border border-slate-200/80 bg-slate-50/50 space-y-3">
                          <div className="flex items-start justify-between gap-2">
                            <h4 className="text-sm font-bold text-slate-900">
                              {proj.title}
                            </h4>
                          </div>

                          <p className="text-xs text-slate-600 leading-relaxed">
                            {proj.description}
                          </p>

                          {/* Responsibilities */}
                          <div className="space-y-1.5 pt-1">
                            <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                              Key Responsibilities:
                            </div>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate-700">
                              {proj.responsibilities.map((r, rIdx) => (
                                <li key={rIdx} className="flex items-start gap-1.5">
                                  <span className="text-blue-600 font-bold shrink-0">•</span>
                                  <span>{r}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Tech Stack */}
                          <div className="pt-2 border-t border-slate-200/60 flex flex-wrap items-center gap-1.5">
                            <span className="text-[11px] font-mono text-slate-400">Stack:</span>
                            {proj.tech.map((t) => (
                              <span key={t} className="px-2 py-0.5 rounded text-[11px] font-mono bg-white border border-slate-200 text-slate-700">
                                {t}
                              </span>
                            ))}
                          </div>

                        </div>
                      ))}
                    </div>

                  </div>
                ))}
              </div>
            </section>

            {/* Featured Projects Highlight with Modal Links */}
            <section className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xs font-bold uppercase tracking-wider text-blue-600 flex items-center gap-2">
                  <Layers className="w-4 h-4" />
                  Detailed Project Case Studies
                </h2>
                <span className="text-xs text-slate-400 font-medium">
                  Click any project to view complete architecture breakdown
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {featuredProjects.map((project) => (
                  <div
                    key={project.id}
                    onClick={() => onSelectProject(project)}
                    className="p-5 rounded-xl border border-slate-200 hover:border-blue-400 hover:shadow-md bg-white transition-all cursor-pointer group flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-xs font-mono text-blue-600 font-semibold">
                          {project.domain}
                        </span>
                        <div className="flex gap-1">
                          {project.platform.map(p => (
                            <span key={p} className="px-2 py-0.5 text-[10px] font-mono font-medium rounded bg-slate-100 text-slate-600">
                              {p}
                            </span>
                          ))}
                        </div>
                      </div>

                      <h3 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors flex items-center justify-between">
                        <span>{project.title}</span>
                        <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </h3>

                      <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                        {project.subtitle}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap gap-1">
                      {project.techStack.slice(0, 4).map((tech) => (
                        <span key={tech} className="px-2 py-0.5 text-[10px] font-mono rounded bg-slate-50 border border-slate-200 text-slate-600">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* AI-Assisted Development Deep Dive */}
            <section className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-4">
              <h2 className="text-xs font-bold uppercase tracking-wider text-blue-600 flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                AI-Assisted Development Methodology
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {aiAssistedDevelopmentData.map((item, idx) => (
                  <div key={idx} className="p-4 rounded-xl border border-slate-200 bg-slate-50/60 space-y-1.5">
                    <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                      <span>{item.title}</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

          </div>

        </div>
      </div>

      {/* Clean Footer */}
      <footer className="border-t border-slate-200 bg-white py-8 text-center text-xs text-slate-500 font-mono">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            © 2026 {profileData.name} • Middle Frontend Engineer (React / Next.js / React Native)
          </div>
          <div className="flex items-center gap-4">
            <a href={`mailto:${profileData.email}`} className="text-blue-600 hover:underline">
              {profileData.email}
            </a>
            <span>•</span>
            <a href={`tel:${profileData.phone}`} className="text-blue-600 hover:underline">
              {profileData.phone}
            </a>
          </div>
        </div>
      </footer>

    </div>
  );
};
