export type PortfolioTemplate = 'violet-glow' | 'cyber' | 'executive' | 'bento' | 'official-cv';

export interface Profile {
  name: string;
  title: string;
  dob?: string;
  experienceYears: string;
  location: string;
  email: string;
  phone: string;
  portfolioUrl: string;
  status: string;
  headline: string;
  subheadline: string;
  aboutParagraphs: string[];
  aiSummary?: string;
}

export interface ProjectDetail {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  domain: 'Logistics' | 'Port Operations' | 'Enterprise Systems';
  platform: ('Web' | 'Mobile')[];
  role: string;
  timeline: string;
  company: string;
  overview: string;
  businessProblem: string;
  myRole: string;
  keyFeatures: string[];
  technicalImplementation: {
    architecture: string;
    stateManagement: string;
    apiIntegration: string;
    businessLogic: string;
    performanceAndUsability: string;
  };
  techStack: string[];
  operationalImpact?: string;
  image?: string;
  liveDemoUrl?: string;
  githubUrl?: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  isCurrent?: boolean;
  projects: {
    title: string;
    description: string;
    responsibilities: string[];
    tech: string[];
  }[];
}

export interface BusinessDomain {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  workflows: string[];
  keyCapabilities: string[];
}

export interface TechCategory {
  title: string;
  subtitle: string;
  items: {
    name: string;
    badge?: string;
    detail?: string;
  }[];
}

export interface EngineeringStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  actionPoints: string[];
}

export interface EducationInfo {
  institution: string;
  degree: string;
  period: string;
  location: string;
  notes?: string;
}
