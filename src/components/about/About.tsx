import React from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { profileData, aboutHighlights } from '../../data/portfolioData';
import { MapPin, Mail, Phone, ExternalLink, Award, CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 border-b border-[#27272A]/80 bg-[#09090B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          number="01"
          tag="ABOUT"
          title="About Me"
          subtitle="Engineering resilient frontend systems for complex business domains."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Narrative & Contact Meta */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-4 text-zinc-300 text-base sm:text-lg leading-relaxed">
              {profileData.aboutParagraphs.map((para, i) => (
                <p key={i} className="text-zinc-300">
                  {para}
                </p>
              ))}
            </div>

            {/* Verification / Metadata Block */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs">
              <div className="p-3.5 rounded-xl bg-[#111113] border border-[#27272A] flex items-center gap-3">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                <div>
                  <div className="text-[#A1A1AA] uppercase text-[10px] tracking-wider">Location</div>
                  <div className="text-[#FAFAFA] font-medium">{profileData.location}</div>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#111113] border border-[#27272A] flex items-center gap-3">
                <Award className="w-4 h-4 text-cyan-400 shrink-0" />
                <div>
                  <div className="text-[#A1A1AA] uppercase text-[10px] tracking-wider">Degree</div>
                  <div className="text-[#FAFAFA] font-medium">B.S. Software Engineering (2019-2023)</div>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#111113] border border-[#27272A] flex items-center gap-3">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <div className="truncate">
                  <div className="text-[#A1A1AA] uppercase text-[10px] tracking-wider">Email</div>
                  <a href={`mailto:${profileData.email}`} className="text-cyan-300 hover:underline truncate block">
                    {profileData.email}
                  </a>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#111113] border border-[#27272A] flex items-center gap-3">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                <div>
                  <div className="text-[#A1A1AA] uppercase text-[10px] tracking-wider">Phone</div>
                  <a href={`tel:${profileData.phone}`} className="text-[#FAFAFA] hover:text-cyan-400">
                    {profileData.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Quick reference to previous portfolio */}
            <div className="pt-2">
              <a 
                href={profileData.portfolioUrl} 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-[#A1A1AA] hover:text-cyan-400 transition-colors"
              >
                <span>Reference Previous Archive</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Right Column: 6 Core Engineering Pillars */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {aboutHighlights.map((item, idx) => (
                <div
                  key={item.title}
                  className="p-5 rounded-2xl bg-[#111113] border border-[#27272A] hover:border-cyan-500/40 transition-all duration-150 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2.5">
                      <h3 className="font-semibold text-sm text-[#FAFAFA] font-sans group-hover:text-cyan-300 transition-colors">
                        {item.title}
                      </h3>
                      <span className="text-[10px] font-mono text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded-full border border-cyan-500/20">
                        0{idx + 1}
                      </span>
                    </div>
                    <p className="text-xs text-[#A1A1AA] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-[#27272A]/80 flex items-center gap-1.5 text-[11px] font-mono text-[#A1A1AA]">
                    <CheckCircle2 className="w-3 h-3 text-cyan-400" />
                    <span>Production Verified</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
