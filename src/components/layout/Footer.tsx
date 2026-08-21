import React from 'react';
import { ArrowUp, Mail, Phone, ExternalLink } from 'lucide-react';
import { profileData } from '../../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#27272A] bg-[#09090B] py-12 text-[#A1A1AA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#27272A]">
          
          {/* Left Brand info */}
          <div className="text-center md:text-left space-y-1">
            <div className="text-base font-bold text-[#FAFAFA] font-sans flex items-center justify-center md:justify-start gap-2">
              <span>Danh</span>
              <span className="text-zinc-600">•</span>
              <span className="text-xs font-mono font-normal text-cyan-400">Middle Frontend Engineer</span>
            </div>
            <div className="text-xs font-mono text-[#A1A1AA]">
              React • Next.js • React Native • Logistics & Enterprise Systems
            </div>
          </div>

          {/* Quick Direct Contacts */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono">
            <a 
              href={`mailto:${profileData.email}`} 
              className="inline-flex items-center gap-1.5 text-[#A1A1AA] hover:text-cyan-400 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-cyan-400" />
              <span>{profileData.email}</span>
            </a>
            <span className="text-zinc-700">•</span>
            <a 
              href={`tel:${profileData.phone}`} 
              className="inline-flex items-center gap-1.5 text-[#A1A1AA] hover:text-cyan-400 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-cyan-400" />
              <span>{profileData.phone}</span>
            </a>
            <span className="text-zinc-700">•</span>
            <a 
              href={profileData.portfolioUrl} 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-[#A1A1AA] hover:text-cyan-400 transition-colors"
            >
              <span>Archived Site</span>
              <ExternalLink className="w-3 h-3 text-cyan-400" />
            </a>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-full bg-[#111113] border border-[#27272A] hover:border-cyan-500/50 text-[#A1A1AA] hover:text-cyan-400 transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        {/* Bottom copyright notice */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-[#A1A1AA]">
          <div>
            © 2026 Danh. All rights reserved.
          </div>
          <div>
            Built with React & Tailwind CSS • Production Ready
          </div>
        </div>
      </div>
    </footer>
  );
};
