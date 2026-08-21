import React from 'react';
import { PortfolioTemplate } from '../../types';
import { Terminal, LayoutGrid, FileText, Sparkles, Check } from 'lucide-react';

interface TemplateSwitcherProps {
  currentTemplate: PortfolioTemplate;
  onSelectTemplate: (template: PortfolioTemplate) => void;
}

export const TemplateSwitcher: React.FC<TemplateSwitcherProps> = ({
  currentTemplate,
  onSelectTemplate,
}) => {
  const templates: {
    id: PortfolioTemplate;
    name: string;
    tag: string;
    icon: React.ReactNode;
    description: string;
  }[] = [
    {
      id: 'violet-glow',
      name: 'Violet Glow (Design Reference)',
      tag: 'Purple Glow / Reference UI',
      icon: <Sparkles className="w-4 h-4 text-purple-400" />,
      description: 'Purple glow, 2x2 experience cards, orbit tech constellation, overlapping case studies',
    },
    {
      id: 'cyber',
      name: 'Cyber Matrix',
      tag: 'Dark / Interactive',
      icon: <Terminal className="w-4 h-4 text-cyan-400" />,
      description: 'Terminal sandbox, cyan glow, deep case studies',
    },
    {
      id: 'executive',
      name: 'Executive Clean',
      tag: 'Light / Minimalist',
      icon: <FileText className="w-4 h-4 text-blue-500" />,
      description: 'Clean typography, high-contrast resume grid',
    },
    {
      id: 'bento',
      name: 'Bento Dashboard',
      tag: 'Interactive Product',
      icon: <LayoutGrid className="w-4 h-4 text-emerald-400" />,
      description: 'Modular bento cards & live workflow simulators',
    },
    {
      id: 'official-cv',
      name: 'Official CV View',
      tag: '2-Page ATS Standard',
      icon: <Sparkles className="w-4 h-4 text-amber-400" />,
      description: '1:1 match with original attached PDF CV',
    },
  ];

  return (
    <div className="sticky top-0 z-50 bg-[#09090B]/95 backdrop-blur-md border-b border-[#27272A] py-2 px-4 shadow-xl">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2.5">
        
        {/* Title & Badge */}
        <div className="flex items-center gap-2.5">
          <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-xs font-mono font-bold tracking-wider text-[#FAFAFA] uppercase">
            Portfolio Template:
          </span>
          <span className="text-xs font-mono text-[#A1A1AA] hidden sm:inline">
            Choose visual layout for DO THANH Danh
          </span>
        </div>

        {/* Template Options */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 p-1 bg-[#111113] rounded-full border border-[#27272A]">
          {templates.map((tpl) => {
            const isActive = currentTemplate === tpl.id;
            return (
              <button
                key={tpl.id}
                onClick={() => onSelectTemplate(tpl.id)}
                id={`template-btn-${tpl.id}`}
                className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono transition-all duration-200 ${
                  isActive
                    ? 'bg-[#18181B] text-[#FAFAFA] border border-cyan-500/50 shadow-[0_0_12px_rgba(6,182,212,0.25)] font-semibold'
                    : 'text-[#A1A1AA] hover:text-[#FAFAFA] hover:bg-[#18181B]/50 border border-transparent'
                }`}
                title={tpl.description}
              >
                {tpl.icon}
                <span>{tpl.name}</span>
                {isActive && <Check className="w-3 h-3 text-cyan-400 shrink-0" />}
              </button>
            );
          })}
        </div>

      </div>
    </div>
  );
};
