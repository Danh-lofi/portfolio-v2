import React, { useState } from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { featuredProjects } from '../../data/portfolioData';
import { ProjectCard } from './ProjectCard';
import { ProjectDetail } from '../../types';

interface ProjectGridProps {
  onSelectProject: (project: ProjectDetail) => void;
}

export const ProjectGrid: React.FC<ProjectGridProps> = ({ onSelectProject }) => {
  const [filter, setFilter] = useState<'All' | 'Logistics' | 'Port Operations' | 'Enterprise Systems'>('All');

  const filteredProjects = filter === 'All' 
    ? featuredProjects 
    : featuredProjects.filter(p => p.domain === filter);

  return (
    <section id="projects" className="py-24 border-b border-[#27272A]/80 bg-[#09090B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeader
            number="04"
            tag="FEATURED WORK"
            title="Featured Projects"
            subtitle="Case studies of production web and mobile software powering real enterprise operations."
            className="mb-0"
          />

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-1.5 p-1 bg-[#111113] border border-[#27272A] rounded-full self-start">
            {(['All', 'Logistics', 'Port Operations', 'Enterprise Systems'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`px-4 py-1.5 text-xs font-mono rounded-full transition-all duration-150 ${
                  filter === tab
                    ? 'bg-[#09090B] text-cyan-400 font-semibold border border-cyan-500/30 shadow-sm'
                    : 'text-[#A1A1AA] hover:text-[#FAFAFA]'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Grid of Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={onSelectProject}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
