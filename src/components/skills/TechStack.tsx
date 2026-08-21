import React from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { techCategories } from '../../data/portfolioData';
import { Badge } from '../common/Badge';
import { Code, CheckCircle2 } from 'lucide-react';

export const TechStack: React.FC = () => {
  return (
    <section id="skills" className="py-24 border-b border-[#27272A] bg-[#09090B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          number="06"
          tag="TECH MATRIX"
          title="Technology Stack"
          subtitle="Battle-tested libraries and ecosystems utilized across production web and mobile codebases."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {techCategories.map((category) => (
            <div
              key={category.title}
              className="p-6 sm:p-7 rounded-2xl bg-[#111113] border border-[#27272A] hover:border-cyan-500/40 transition-all duration-150"
            >
              <div className="mb-5">
                <h3 className="text-xl font-bold text-[#FAFAFA] font-sans">
                  {category.title}
                </h3>
                <p className="text-xs font-mono text-[#A1A1AA] mt-0.5">
                  {category.subtitle}
                </p>
              </div>

              <div className="space-y-3">
                {category.items.map((item) => (
                  <div
                    key={item.name}
                    className="p-3.5 rounded-xl bg-[#09090B] border border-[#27272A] flex items-center justify-between gap-4"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-[#FAFAFA] font-mono">
                          {item.name}
                        </span>
                        {item.badge && (
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                            {item.badge}
                          </span>
                        )}
                      </div>
                      {item.detail && (
                        <p className="text-xs text-[#A1A1AA] mt-1">
                          {item.detail}
                        </p>
                      )}
                    </div>

                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Note on Standards */}
        <div className="mt-8 p-4 rounded-2xl bg-[#111113] border border-[#27272A] flex items-center gap-3 text-xs font-mono text-[#A1A1AA]">
          <Code className="w-4 h-4 text-cyan-400 shrink-0" />
          <span>
            Strict adherence to TypeScript, semantic component boundaries, predictable state mutations, and standardized RESTful conventions.
          </span>
        </div>

      </div>
    </section>
  );
};
