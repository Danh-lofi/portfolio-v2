import React from 'react';
import { statsData } from '../../data/portfolioData';

export const QuickStats: React.FC = () => {
  return (
    <div className="border-y border-[#27272A] bg-[#09090B] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {statsData.map((stat) => (
            <div 
              key={stat.label} 
              className="p-5 border border-[#27272A] rounded-2xl bg-[#111113] hover:border-cyan-500/40 transition-all group"
            >
              <div className="text-3xl font-bold text-cyan-400 font-sans tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs uppercase tracking-wider font-mono text-[#A1A1AA] mt-1 font-semibold group-hover:text-cyan-400 transition-colors">
                {stat.label}
              </div>
              <p className="text-xs text-[#A1A1AA] mt-1.5 leading-normal line-clamp-2">
                {stat.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
