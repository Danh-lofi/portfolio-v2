import React, { useState } from 'react';
import { VioletGlowTemplate } from './components/templates/VioletGlowTemplate';
import { ProjectModal } from './components/projects/ProjectModal';
import { ResumeModal } from './components/resume/ResumeModal';
import { ProjectDetail } from './types';
import { featuredProjects } from './data/portfolioData';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<ProjectDetail | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState<boolean>(false);

  const handleSelectProjectById = (projectId: string) => {
    const found = featuredProjects.find(p => p.id === projectId);
    if (found) {
      setSelectedProject(found);
    }
  };

  return (
    <div className="min-h-screen bg-[#0B071A] text-[#F3F0FA] font-sans selection:bg-purple-500/30 selection:text-purple-300">
      {/* Primary Portfolio Showcase */}
      <main>
        <VioletGlowTemplate
          onSelectProject={(project) => setSelectedProject(project)}
          onOpenResume={() => setIsResumeOpen(true)}
        />
      </main>

      {/* Case Study Deep-Dive Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Interactive Printable Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}

