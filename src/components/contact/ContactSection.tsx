import React, { useState } from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { profileData } from '../../data/portfolioData';
import { Mail, Phone, MapPin, Copy, Check, FileText, ArrowUpRight, Send, MessageSquare } from 'lucide-react';

interface ContactSectionProps {
  onOpenResume: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenResume }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(profileData.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <section id="contact" className="py-24 bg-[#09090B] relative overflow-hidden bg-grid-pattern">
      {/* Background Subtle Ambient Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-cyan-500/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          number="09"
          tag="GET IN TOUCH"
          title="Let's build something meaningful."
          subtitle="I'm always interested in discussing frontend engineering, product development and challenging real-world operational problems."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Direct Action Card */}
          <div className="lg:col-span-7 p-8 rounded-2xl bg-[#111113] border border-[#27272A] hover:border-cyan-500/40 transition-all flex flex-col justify-between space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span>Open for Full-time Roles & High-Impact Contracts</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-[#FAFAFA] font-sans">
                Ready to contribute to your engineering team.
              </h3>

              <p className="text-[#A1A1AA] text-sm leading-relaxed">
                Whether you need someone to architect a scalable web dashboard with React/Next.js, build high-performance mobile applications with React Native, or untangle complex state and business logic in operational software, feel free to reach out directly.
              </p>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                id="contact-email-btn"
                href={`mailto:${profileData.email}?subject=Frontend%20Engineering%20Opportunity`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#FAFAFA] hover:bg-cyan-400 text-[#09090B] font-semibold text-sm transition-all duration-150 shadow-md active:scale-[0.98]"
              >
                <Mail className="w-4 h-4" />
                <span>Email Me Directly</span>
              </a>

              <button
                id="contact-resume-btn"
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#09090B] hover:bg-[#18181B] border border-[#27272A] hover:border-cyan-500/40 text-[#FAFAFA] font-medium text-sm transition-all duration-150 active:scale-[0.98]"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>View Full Resume</span>
              </button>

              <a
                id="contact-phone-call"
                href={`tel:${profileData.phone}`}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#09090B] hover:bg-[#18181B] border border-[#27272A] hover:border-cyan-500/40 text-[#A1A1AA] hover:text-white text-xs font-mono transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-cyan-400" />
                <span>Call {profileData.phone}</span>
              </a>
            </div>
          </div>

          {/* Contact Details & Quick Copy */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card */}
            <div className="p-5 rounded-2xl bg-[#111113] border border-[#27272A] hover:border-cyan-500/40 transition-all flex items-center justify-between gap-4">
              <div className="flex items-center gap-3.5 overflow-hidden">
                <div className="w-10 h-10 rounded-xl bg-[#09090B] border border-[#27272A] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-cyan-400" />
                </div>
                <div className="overflow-hidden">
                  <div className="text-[11px] font-mono text-[#A1A1AA] uppercase tracking-wider">Direct Email</div>
                  <a href={`mailto:${profileData.email}`} className="text-sm font-semibold text-[#FAFAFA] hover:text-cyan-400 transition-colors block truncate font-mono">
                    {profileData.email}
                  </a>
                </div>
              </div>

              <button
                onClick={handleCopyEmail}
                className="p-2.5 rounded-xl bg-[#09090B] border border-[#27272A] text-[#A1A1AA] hover:text-white hover:border-cyan-500/50 shrink-0 transition-colors"
                title="Copy Email"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-cyan-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Phone Card */}
            <div className="p-5 rounded-2xl bg-[#111113] border border-[#27272A] hover:border-cyan-500/40 transition-all flex items-center justify-between gap-4">
              <div className="flex items-center gap-3.5 overflow-hidden">
                <div className="w-10 h-10 rounded-xl bg-[#09090B] border border-[#27272A] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-cyan-400" />
                </div>
                <div className="overflow-hidden">
                  <div className="text-[11px] font-mono text-[#A1A1AA] uppercase tracking-wider">Phone & Zalo</div>
                  <a href={`tel:${profileData.phone}`} className="text-sm font-semibold text-[#FAFAFA] hover:text-cyan-400 transition-colors block truncate font-mono">
                    {profileData.phone}
                  </a>
                </div>
              </div>

              <button
                onClick={handleCopyPhone}
                className="p-2.5 rounded-xl bg-[#09090B] border border-[#27272A] text-[#A1A1AA] hover:text-white hover:border-cyan-500/50 shrink-0 transition-colors"
                title="Copy Phone"
              >
                {copiedPhone ? <Check className="w-4 h-4 text-cyan-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Location Card */}
            <div className="p-5 rounded-2xl bg-[#111113] border border-[#27272A] hover:border-cyan-500/40 transition-all flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-[#09090B] border border-[#27272A] flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-cyan-400" />
              </div>
              <div>
                <div className="text-[11px] font-mono text-[#A1A1AA] uppercase tracking-wider">Location</div>
                <div className="text-sm font-semibold text-[#FAFAFA] font-mono">
                  {profileData.location}
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
