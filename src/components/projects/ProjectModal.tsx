import React, { useEffect } from 'react';
import { ProjectDetail } from '../../types';
import { Badge } from '../common/Badge';
import { X, Check, Monitor, Smartphone, Building2, Calendar, Cpu, Layers, GitFork, ShieldCheck, ArrowRight } from 'lucide-react';

interface ProjectModalProps {
  project: ProjectDetail | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md">
      
      {/* Modal Container */}
      <div className="relative w-full max-w-4xl bg-[#111113] border border-[#27272A] rounded-2xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="p-6 sm:p-8 bg-[#09090B] border-b border-[#27272A] flex items-start justify-between gap-4 sticky top-0 z-10">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              {project.platform.map(p => (
                <span key={p} className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-mono uppercase bg-[#111113] text-cyan-400 border border-[#27272A]">
                  {p === 'Web' ? <Monitor className="w-3.5 h-3.5" /> : <Smartphone className="w-3.5 h-3.5" />}
                  {p}
                </span>
              ))}
              <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                {project.domain}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#FAFAFA] font-sans">
              {project.title}
            </h3>

            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#A1A1AA]">
              <span className="flex items-center gap-1">
                <Building2 className="w-3.5 h-3.5 text-[#A1A1AA]" />
                {project.company}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-[#A1A1AA]" />
                {project.timeline}
              </span>
              <span>•</span>
              <span className="text-cyan-400 font-semibold">{project.role}</span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-[#111113] border border-[#27272A] text-[#A1A1AA] hover:text-white hover:border-cyan-500/50 transition-colors"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 text-[#A1A1AA] text-sm leading-relaxed">
          
          {/* Section 1: Overview */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold mb-2">
              01 — Product Overview
            </h4>
            <p className="text-base text-[#FAFAFA]">
              {project.overview}
            </p>
          </div>

          {/* Section 2: Business Problem Solved */}
          <div className="p-5 rounded-2xl bg-[#09090B] border border-[#27272A]">
            <h4 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold mb-2 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4" />
              02 — Operational Problem Solved
            </h4>
            <p className="text-zinc-300">
              {project.businessProblem}
            </p>
          </div>

          {/* Section 3: My Personal Role */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold mb-2">
              03 — Engineering Responsibilities
            </h4>
            <p className="text-zinc-300">
              {project.myRole}
            </p>
          </div>

          {/* Section 4: Key Features List */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold mb-3">
              04 — Key Features Implemented
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.keyFeatures.map((feat, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-[#09090B] border border-[#27272A] flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span className="text-xs text-zinc-200">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Section 5: Technical Implementation Deep-Dive */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold mb-3">
              05 — Technical Implementation Breakdown
            </h4>
            <div className="space-y-3">
              <div className="p-4 rounded-xl bg-[#09090B] border border-[#27272A]">
                <div className="text-xs font-mono font-bold text-cyan-400 mb-1 flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5" /> Component Architecture
                </div>
                <p className="text-xs text-zinc-300">{project.technicalImplementation.architecture}</p>
              </div>

              <div className="p-4 rounded-xl bg-[#09090B] border border-[#27272A]">
                <div className="text-xs font-mono font-bold text-cyan-400 mb-1 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5" /> State Management Architecture
                </div>
                <p className="text-xs text-zinc-300">{project.technicalImplementation.stateManagement}</p>
              </div>

              <div className="p-4 rounded-xl bg-[#09090B] border border-[#27272A]">
                <div className="text-xs font-mono font-bold text-cyan-400 mb-1 flex items-center gap-1.5">
                  <GitFork className="w-3.5 h-3.5" /> API Integration & Networking
                </div>
                <p className="text-xs text-zinc-300">{project.technicalImplementation.apiIntegration}</p>
              </div>

              <div className="p-4 rounded-xl bg-[#09090B] border border-[#27272A]">
                <div className="text-xs font-mono font-bold text-cyan-400 mb-1 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5" /> Complex Business Logic & Guardrails
                </div>
                <p className="text-xs text-zinc-300">{project.technicalImplementation.businessLogic}</p>
              </div>

              <div className="p-4 rounded-xl bg-[#09090B] border border-[#27272A]">
                <div className="text-xs font-mono font-bold text-cyan-400 mb-1 flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5" /> Performance & Field Usability
                </div>
                <p className="text-xs text-zinc-300">{project.technicalImplementation.performanceAndUsability}</p>
              </div>
            </div>
          </div>

          {/* Section 6: Tech Stack Badges */}
          <div className="pt-2">
            <h4 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold mb-2.5">
              06 — Verified Technologies
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map(t => (
                <Badge key={t} variant="default" size="md">
                  {t}
                </Badge>
              ))}
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="p-5 bg-[#09090B] border-t border-[#27272A] flex items-center justify-between">
          <span className="text-xs font-mono text-[#A1A1AA]">
            Source: Verified Production Experience
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-full bg-[#FAFAFA] hover:bg-cyan-400 text-[#09090B] font-semibold text-xs transition-all"
          >
            Close Case Study
          </button>
        </div>

      </div>

    </div>
  );
};
