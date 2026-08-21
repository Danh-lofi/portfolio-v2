import React from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { engineeringSteps } from '../../data/portfolioData';
import { Check } from 'lucide-react';

export const EngineeringApproach: React.FC = () => {
  return (
    <section id="approach" className="py-24 border-b border-[#27272A] bg-[#09090B] bg-dot-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          number="07"
          tag="WORKFLOW METHODOLOGY"
          title="How I Build Products"
          subtitle="A structured 4-stage engineering approach ensuring software durability, maintainability, and domain alignment."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {engineeringSteps.map((step) => (
            <div
              key={step.number}
              className="p-6 rounded-2xl bg-[#111113] border border-[#27272A] hover:border-cyan-500/40 transition-all duration-150 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-mono font-extrabold text-cyan-400">
                    {step.number}
                  </span>
                  <span className="text-[10px] font-mono uppercase px-2.5 py-0.5 rounded-full bg-[#09090B] text-[#A1A1AA] border border-[#27272A]">
                    Stage {step.number}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#FAFAFA] font-sans">
                  {step.title}
                </h3>
                <div className="text-xs font-mono text-cyan-400/90 mt-0.5 mb-3 font-semibold">
                  {step.subtitle}
                </div>

                <p className="text-xs text-[#A1A1AA] leading-relaxed mb-4">
                  {step.description}
                </p>

                <div className="pt-3 border-t border-[#27272A] space-y-2">
                  {step.actionPoints.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-[11px] text-zinc-300">
                      <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-[#27272A] text-[10px] font-mono text-[#A1A1AA] text-right">
                Engineering Discipline
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
