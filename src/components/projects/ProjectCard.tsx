import React from 'react';
import { ProjectDetail } from '../../types';
import { Badge } from '../common/Badge';
import { ArrowRight, Monitor, Smartphone, Check } from 'lucide-react';

interface ProjectCardProps {
  project: ProjectDetail;
  onSelect: (project: ProjectDetail) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  return (
    <div className="group rounded-2xl bg-[#111113] border border-[#27272A] hover:border-cyan-500/40 transition-all duration-200 flex flex-col justify-between overflow-hidden">
      
      {/* Card Header & Badges */}
      <div className="p-6 sm:p-7 space-y-4">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5">
            {project.platform.map(p => (
              <span 
                key={p} 
                className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono uppercase bg-[#09090B] text-cyan-400 border border-[#27272A]"
              >
                {p === 'Web' ? <Monitor className="w-3 h-3" /> : <Smartphone className="w-3 h-3" />}
                {p}
              </span>
            ))}
          </div>

          <span className="text-xs font-mono text-[#A1A1AA]">
            {project.domain}
          </span>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-[#FAFAFA] font-sans group-hover:text-cyan-300 transition-colors">
            {project.title}
          </h3>
          <p className="text-xs font-mono text-[#A1A1AA] mt-1">
            {project.subtitle}
          </p>
        </div>

        <p className="text-sm text-[#A1A1AA] leading-relaxed">
          {project.overview}
        </p>

        {/* Highlight features */}
        <div className="pt-2">
          <div className="text-[11px] font-mono uppercase tracking-wider text-[#A1A1AA] mb-2">Key Highlights:</div>
          <ul className="space-y-1.5 text-xs text-[#A1A1AA]">
            {project.keyFeatures.slice(0, 3).map((feat, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                <span className="line-clamp-1 text-zinc-300">{feat}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Card Footer: Tech Stack & CTA */}
      <div className="px-6 sm:px-7 py-4 bg-[#09090B]/60 border-t border-[#27272A] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex flex-wrap gap-1.5">
          {project.techStack.slice(0, 4).map(tech => (
            <Badge key={tech} size="sm" variant="default">
              {tech}
            </Badge>
          ))}
          {project.techStack.length > 4 && (
            <Badge size="sm" variant="subtle">
              +{project.techStack.length - 4}
            </Badge>
          )}
        </div>

        <button
          onClick={() => onSelect(project)}
          className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-cyan-400 hover:text-cyan-300 transition-colors group-hover:translate-x-0.5 self-start sm:self-auto"
        >
          <span>View Case Study</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

    </div>
  );
};
