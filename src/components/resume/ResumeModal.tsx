import React, { useEffect, useState } from 'react';
import { profileData, experiencesData, educationData, techCategories } from '../../data/portfolioData';
import { X, Printer, Copy, Check, Mail, Phone, MapPin, Globe, ArrowDownToLine, Briefcase, GraduationCap, Code } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md">
      
      {/* Modal Container */}
      <div className="relative w-full max-w-4xl bg-[#111113] border border-[#27272A] rounded-2xl shadow-2xl overflow-hidden my-4 max-h-[95vh] flex flex-col">
        
        {/* Top Control Bar */}
        <div className="p-4 sm:px-8 sm:py-4 bg-[#09090B] border-b border-[#27272A] flex items-center justify-between gap-4 sticky top-0 z-20">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-xs font-mono font-semibold text-[#FAFAFA]">
              Resume — {profileData.name}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#111113] border border-[#27272A] hover:border-cyan-500/50 text-xs font-medium text-[#FAFAFA] transition-colors"
              title="Print or save as PDF"
            >
              <Printer className="w-3.5 h-3.5 text-cyan-400" />
              <span className="hidden sm:inline">Print / Save PDF</span>
            </button>

            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#111113] border border-[#27272A] hover:border-cyan-500/50 text-xs font-medium text-[#FAFAFA] transition-colors"
            >
              {copiedEmail ? <Check className="w-3.5 h-3.5 text-cyan-400" /> : <Copy className="w-3.5 h-3.5 text-cyan-400" />}
              <span className="hidden sm:inline">{copiedEmail ? 'Copied Email' : 'Copy Email'}</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-full bg-[#111113] border border-[#27272A] text-[#A1A1AA] hover:text-white hover:border-cyan-500/50 transition-colors ml-2"
              aria-label="Close resume"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Document Content */}
        <div id="printable-cv" className="p-6 sm:p-10 overflow-y-auto space-y-8 bg-[#09090B] text-[#A1A1AA] text-sm">
          
          {/* Resume Header */}
          <div className="border-b border-[#27272A] pb-6">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
              <div>
                <h2 className="text-3xl font-extrabold text-[#FAFAFA] font-sans">
                  {profileData.name}
                </h2>
                <div className="text-base font-semibold text-cyan-400 font-mono mt-1">
                  {profileData.title} • {profileData.experienceYears} Years Experience
                </div>
              </div>

              <div className="space-y-1 text-xs font-mono text-[#A1A1AA]">
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>{profileData.location}</span>
                </div>
                {profileData.dob && (
                  <div className="flex items-center gap-2">
                    <span className="text-zinc-500 font-bold">DOB:</span>
                    <span>{profileData.dob}</span>
                  </div>
                )}
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <a href={`mailto:${profileData.email}`} className="text-cyan-400 hover:underline">
                    {profileData.email}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>{profileData.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <a href={profileData.portfolioUrl} target="_blank" rel="noreferrer" className="text-[#FAFAFA] hover:underline">
                    {profileData.portfolioUrl}
                  </a>
                </div>
              </div>
            </div>

            {/* Professional Summary */}
            <div className="mt-4 pt-4 border-t border-[#27272A] text-xs text-[#A1A1AA] leading-relaxed space-y-2">
              <p>
                Middle Frontend Engineer with 3.5+ years of experience specializing in building scalable web and mobile applications with React.js, Next.js, and React Native.
              </p>
              <p>
                Proven domain experience across logistics, container transportation, port terminal operations (HICT, Hateco), gate appointments, container inspections, and enterprise HR management systems. Skilled in architecting maintainable component systems, complex business logic validation, state synchronization (Redux, Zustand, TanStack Query), and reliable RESTful integrations.
              </p>
            </div>
          </div>

          {/* Section: Technical Skills */}
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-cyan-400 mb-3">
              <Code className="w-4 h-4" />
              Technical Proficiencies
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {techCategories.map(cat => (
                <div key={cat.title} className="p-3.5 rounded-xl bg-[#111113] border border-[#27272A]">
                  <div className="font-mono font-bold text-[#FAFAFA] mb-1">{cat.title}:</div>
                  <div className="text-[#A1A1AA]">
                    {cat.items.map(i => i.name).join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Work Experience */}
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-cyan-400 mb-4">
              <Briefcase className="w-4 h-4" />
              Professional Experience
            </div>
            
            <div className="space-y-6">
              {experiencesData.map((exp) => (
                <div key={exp.id} className="p-5 sm:p-6 rounded-2xl bg-[#111113] border border-[#27272A]">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-3">
                    <div>
                      <h3 className="font-bold text-[#FAFAFA] text-base">{exp.company}</h3>
                      <div className="text-xs font-mono text-cyan-400 font-semibold">{exp.role}</div>
                    </div>
                    <span className="text-xs font-mono text-[#A1A1AA]">{exp.period}</span>
                  </div>

                  <div className="space-y-4 pt-2">
                    {exp.projects.map((proj, pIdx) => (
                      <div key={pIdx} className="space-y-2 border-t border-[#27272A] pt-3">
                        <div className="flex items-baseline justify-between gap-2">
                          <h4 className="text-xs font-bold text-[#FAFAFA] font-sans">{proj.title}</h4>
                        </div>
                        <p className="text-xs text-[#A1A1AA] leading-relaxed">{proj.description}</p>
                        
                        <div className="text-[11px] font-mono uppercase tracking-wider text-[#A1A1AA]">Key Contributions:</div>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-zinc-300">
                          {proj.responsibilities.map((r, rIdx) => (
                            <li key={rIdx} className="flex items-start gap-1.5">
                              <span className="text-cyan-400 font-bold">•</span>
                              <span>{r}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="text-[11px] font-mono text-[#A1A1AA] pt-1">
                          <span className="text-zinc-500">Tech: </span>
                          {proj.tech.join(' • ')}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Education */}
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-cyan-400 mb-3">
              <GraduationCap className="w-4 h-4" />
              Education
            </div>
            <div className="p-4 rounded-xl bg-[#111113] border border-[#27272A] flex items-center justify-between">
              <div>
                <div className="font-bold text-[#FAFAFA]">{educationData.institution}</div>
                <div className="text-xs text-cyan-400 font-mono font-semibold">{educationData.degree}</div>
              </div>
              <div className="text-xs font-mono text-[#A1A1AA]">{educationData.period}</div>
            </div>
          </div>

          {/* Section: AI-Assisted Development */}
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-cyan-400 mb-3">
              <Code className="w-4 h-4" />
              AI-Assisted Development
            </div>
            <div className="p-4 rounded-xl bg-[#111113] border border-[#27272A] space-y-2">
              <ul className="list-disc list-outside pl-4 space-y-1 text-xs text-[#FAFAFA]">
                <li>Proficient in using Cursor and Claude to accelerate software development workflows.</li>
                <li>Use AI for code generation, refactoring, debugging, code analysis, documentation, and technical problem solving.</li>
                <li>Leverage AI to explore unfamiliar codebases and improve existing implementations while maintaining architecture consistency.</li>
                <li>Review and validate AI-generated code before integrating it into production systems.</li>
              </ul>
            </div>
          </div>

        </div>

        {/* Footer info */}
        <div className="p-4 bg-[#09090B] border-t border-[#27272A] flex items-center justify-between text-xs font-mono text-[#A1A1AA]">
          <span>Source: Đỗ Thành Danh Official CV</span>
          <button onClick={onClose} className="text-cyan-400 hover:text-white font-semibold">Close View</button>
        </div>

      </div>

    </div>
  );
};
