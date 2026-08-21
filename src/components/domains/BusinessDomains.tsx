import React from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { businessDomains } from '../../data/portfolioData';
import { Truck, Anchor, Building2, Check, ArrowRight } from 'lucide-react';

export const BusinessDomains: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Truck':
        return <Truck className="w-6 h-6 text-cyan-400" />;
      case 'Anchor':
        return <Anchor className="w-6 h-6 text-cyan-400" />;
      case 'Building2':
        return <Building2 className="w-6 h-6 text-cyan-400" />;
      default:
        return <Truck className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section id="domains" className="py-24 border-b border-[#27272A] bg-[#09090B] bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          number="05"
          tag="DOMAIN EXPERTISE"
          title="Experience Across Real-World Operations"
          subtitle="Beyond standard UI design: engineering systems directly integrated into field logistics, container yards, and enterprise administration."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {businessDomains.map((domain, index) => (
            <div
              key={domain.id}
              className="rounded-2xl bg-[#111113] border border-[#27272A] p-7 hover:border-cyan-500/40 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#09090B] border border-[#27272A] flex items-center justify-center">
                    {getIcon(domain.iconName)}
                  </div>
                  <span className="text-xs font-mono text-[#A1A1AA]">
                    Domain 0{index + 1}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#FAFAFA] font-sans">
                  {domain.title}
                </h3>
                <div className="text-xs font-mono text-cyan-400 font-semibold mt-1 mb-3">
                  {domain.subtitle}
                </div>

                <p className="text-sm text-[#A1A1AA] leading-relaxed mb-6">
                  {domain.description}
                </p>

                {/* Real-World Workflows */}
                <div className="space-y-3 pt-4 border-t border-[#27272A]">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-[#A1A1AA]">
                    Core Workflows Handled:
                  </div>
                  <ul className="space-y-2 text-xs text-zinc-300">
                    {domain.workflows.map((wf, wIdx) => (
                      <li key={wIdx} className="flex items-start gap-2.5">
                        <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{wf}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Key Capabilities Pills */}
              <div className="mt-8 pt-4 border-t border-[#27272A]">
                <div className="flex flex-wrap gap-1.5">
                  {domain.keyCapabilities.map(cap => (
                    <span
                      key={cap}
                      className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-[#09090B] text-[#A1A1AA] border border-[#27272A]"
                    >
                      {cap}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
