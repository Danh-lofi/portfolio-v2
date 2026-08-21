import React from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { educationData } from '../../data/portfolioData';
import { GraduationCap, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 border-b border-[#27272A] bg-[#09090B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          number="08"
          tag="ACADEMIC BACKGROUND"
          title="Education"
          subtitle="Formal degree foundation in Software Engineering & Computer Science principles."
        />

        <div className="max-w-3xl">
          <div className="p-6 sm:p-7 rounded-2xl bg-[#111113] border border-[#27272A] hover:border-cyan-500/40 transition-all flex flex-col sm:flex-row items-start justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#09090B] border border-[#27272A] flex items-center justify-center shrink-0">
                <GraduationCap className="w-6 h-6 text-cyan-400" />
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#FAFAFA] font-sans">
                  {educationData.institution}
                </h3>
                <div className="text-sm font-semibold text-cyan-400 font-mono mt-1">
                  {educationData.degree}
                </div>
                {educationData.notes && (
                  <p className="text-xs text-[#A1A1AA] mt-2 leading-relaxed">
                    {educationData.notes}
                  </p>
                )}
              </div>
            </div>

            <div className="flex sm:flex-col items-start sm:items-end gap-2 text-xs font-mono text-[#A1A1AA] shrink-0">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#09090B] border border-[#27272A] text-[#FAFAFA]">
                <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                {educationData.period}
              </span>
              <span className="flex items-center gap-1 text-[#A1A1AA]">
                <MapPin className="w-3 h-3" />
                {educationData.location}
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
