import React from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { coreExpertise } from '../../data/portfolioData';
import { Layout, Smartphone, GitBranch, Layers, Workflow, ShieldCheck } from 'lucide-react';

export const CoreExpertise: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layout':
        return <Layout className="w-5 h-5 text-cyan-400" />;
      case 'Smartphone':
        return <Smartphone className="w-5 h-5 text-cyan-400" />;
      case 'GitBranch':
        return <GitBranch className="w-5 h-5 text-cyan-400" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-cyan-400" />;
      case 'Workflow':
        return <Workflow className="w-5 h-5 text-cyan-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-cyan-400" />;
      default:
        return <Layout className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="expertise" className="py-24 border-b border-[#27272A] bg-[#09090B] bg-dot-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          number="02"
          tag="CORE EXPERTISE"
          title="What I Do"
          subtitle="Specialized capabilities refined across 3.5+ years of production engineering."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreExpertise.map((item, index) => (
            <div
              key={item.id}
              className="group p-6 rounded-2xl bg-[#111113] border border-[#27272A] hover:border-cyan-500/40 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#09090B] border border-[#27272A] flex items-center justify-center group-hover:border-cyan-500/50 transition-colors">
                    {getIcon(item.icon)}
                  </div>
                  <span className="text-xs font-mono text-[#A1A1AA]">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#FAFAFA] mb-2 font-sans group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-[#A1A1AA] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#27272A] flex items-center justify-between text-xs font-mono text-[#A1A1AA]">
                <span>Core Competency</span>
                <span className="text-cyan-400 font-semibold">Production Level</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
