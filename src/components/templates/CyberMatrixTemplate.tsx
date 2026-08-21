import React from 'react';
import { Hero } from '../hero/Hero';
import { QuickStats } from '../hero/QuickStats';
import { About } from '../about/About';
import { CoreExpertise } from '../expertise/CoreExpertise';
import { ExperienceTimeline } from '../experience/ExperienceTimeline';
import { ProjectGrid } from '../projects/ProjectGrid';
import { BusinessDomains } from '../domains/BusinessDomains';
import { TechStack } from '../skills/TechStack';
import { EngineeringApproach } from '../approach/EngineeringApproach';
import { Education } from '../education/Education';
import { ContactSection } from '../contact/ContactSection';
import { Footer } from '../layout/Footer';
import { ProjectDetail } from '../../types';

interface CyberMatrixTemplateProps {
  onSelectProject: (project: ProjectDetail) => void;
  onSelectProjectById: (projectId: string) => void;
  onOpenResume: () => void;
}

export const CyberMatrixTemplate: React.FC<CyberMatrixTemplateProps> = ({
  onSelectProject,
  onSelectProjectById,
  onOpenResume,
}) => {
  return (
    <div>
      {/* Hero Section with Interactive Editor */}
      <Hero onOpenResume={onOpenResume} />

      {/* 4 Core Quick Stats */}
      <QuickStats />

      {/* 01 - About Me */}
      <About />

      {/* 02 - What I Do */}
      <CoreExpertise />

      {/* 03 - Professional Experience */}
      <ExperienceTimeline onSelectProject={onSelectProjectById} />

      {/* 04 - Featured Projects */}
      <ProjectGrid onSelectProject={onSelectProject} />

      {/* 05 - Real-World Operations & Business Domains */}
      <BusinessDomains />

      {/* 06 - Technology Stack */}
      <TechStack />

      {/* 07 - How I Build Products */}
      <EngineeringApproach />

      {/* 08 - Education */}
      <Education />

      {/* 09 - Contact CTA */}
      <ContactSection onOpenResume={onOpenResume} />

      {/* Footer */}
      <Footer />
    </div>
  );
};
