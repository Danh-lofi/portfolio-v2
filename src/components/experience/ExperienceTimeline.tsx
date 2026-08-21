import React, { useState } from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { experiencesData } from '../../data/portfolioData';
import { Badge } from '../common/Badge';
import { Building2, Calendar, Check, ChevronDown, ChevronUp, Briefcase } from 'lucide-react';

interface ExperienceTimelineProps {
  onSelectProject?: (projectId: string) => void;
}

export const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({ onSelectProject }) => {
  const [expandedProjects, setExpandedProjects] = useState<Record<string, boolean>>({
    'ceh-0': true,
    'ceh-1': true,
    'ceh-2': true,
    'tech-source-0': true
  });

  const toggleProject = (key: string) => {
    setExpandedProjects(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <section id="experience" className="py-24 border-b border-[#27272A]/80 bg-[#09090B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          number="03"
          tag="CAREER TIMELINE"
          title="Professional Experience"
          subtitle="3.5+ years building and maintaining business-critical web and mobile applications."
        />

        <div className="relative pl-6 sm:pl-10 border-l border-[#27272A] space-y-16 ml-2 sm:ml-4">
          {experiencesData.map((exp) => (
            <div key={exp.id} className="relative">
              {/* Timeline Indicator Node with Immersive Cyan Glow */}
              <div className={`absolute -left-[31px] sm:-left-[47px] top-4 w-3.5 h-3.5 rounded-full border-4 border-[#09090B] ${
                exp.isCurrent 
                  ? 'bg-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.6)] animate-pulse' 
                  : 'bg-[#27272A]'
              }`} />

              {/* Company Header Card */}
              <div className="p-5 sm:p-6 rounded-2xl bg-[#111113] border border-[#27272A] mb-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-cyan-400" />
                      <h3 className="text-xl font-bold text-[#FAFAFA] font-sans">
                        {exp.company}
                      </h3>
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <Briefcase className="w-3.5 h-3.5 text-[#A1A1AA]" />
                      <span className="text-sm font-semibold text-cyan-400 font-mono">{exp.role}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-[#09090B] border border-[#27272A] text-[#A1A1AA]">
                      <Calendar className="w-3 h-3 text-cyan-400" />
                      {exp.period}
                    </span>
                    {exp.isCurrent && (
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                        Present
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Projects Under This Company */}
              <div className="space-y-6">
                {exp.projects.map((proj, pIdx) => {
                  const key = `${exp.id}-${pIdx}`;
                  const isExpanded = !!expandedProjects[key];

                  return (
                    <div
                      key={proj.title}
                      className="p-5 sm:p-6 rounded-2xl bg-[#111113] border border-[#27272A] hover:border-cyan-500/40 transition-all duration-150"
                    >
                      {/* Project Header */}
                      <div 
                        onClick={() => toggleProject(key)}
                        className="cursor-pointer flex items-start justify-between gap-4"
                      >
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-mono text-cyan-400 font-semibold tracking-wider">
                              PROJECT 0{pIdx + 1}
                            </span>
                          </div>
                          <h4 className="text-lg font-bold text-[#FAFAFA] font-sans mt-0.5">
                            {proj.title}
                          </h4>
                          <p className="text-sm text-[#A1A1AA] mt-2 leading-relaxed">
                            {proj.description}
                          </p>
                        </div>
                        <button
                          type="button"
                          className="p-2 rounded-xl bg-[#09090B] border border-[#27272A] text-[#A1A1AA] hover:text-[#FAFAFA] hover:border-cyan-500/50 shrink-0 transition-colors"
                          aria-label={isExpanded ? "Collapse project details" : "Expand project details"}
                        >
                          {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                        </button>
                      </div>

                      {/* Expandable Project Details */}
                      {isExpanded && (
                        <div className="mt-5 pt-5 border-t border-[#27272A] space-y-4">
                          <div>
                            <h5 className="text-xs font-mono uppercase text-[#A1A1AA] tracking-widest mb-2.5">
                              Key Responsibilities & Contributions:
                            </h5>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#A1A1AA]">
                              {proj.responsibilities.map((resp, rIdx) => (
                                <li key={rIdx} className="flex items-start gap-2">
                                  <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                                  <span className="text-zinc-300">{resp}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Tech Stack used */}
                          <div className="pt-2">
                            <div className="text-[11px] font-mono text-[#A1A1AA] uppercase tracking-wider mb-2">Technologies Used:</div>
                            <div className="flex flex-wrap gap-1.5">
                              {proj.tech.map((t) => (
                                <Badge key={t} size="sm" variant="default">
                                  {t}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
