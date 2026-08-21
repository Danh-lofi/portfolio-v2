import React, { useState } from 'react';
import { ArrowDown, FileText, CheckCircle2, Terminal, Code2, Layers, MapPin, Sparkles } from 'lucide-react';
import { profileData } from '../../data/portfolioData';
import { Badge } from '../common/Badge';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [activeTab, setActiveTab] = useState<'ts' | 'stack' | 'terminal'>('ts');
  const [copiedSnippet, setCopiedSnippet] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(`const engineer = {
  name: "${profileData.name}",
  role: "${profileData.title}",
  experience: "${profileData.experienceYears} years",
  location: "${profileData.location}",
  email: "${profileData.email}",
  coreStack: ["React.js", "Next.js", "React Native", "Redux", "Zustand", "TanStack Query"]
};`);
    setCopiedSnippet(true);
    setTimeout(() => setCopiedSnippet(false), 2000);
  };

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grid-pattern">
      {/* Background Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[380px] bg-cyan-500/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Information & CTAs */}
          <div className="lg:col-span-7 space-y-7">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#111113] border border-[#27272A] text-xs font-mono text-[#A1A1AA] shadow-sm">
              <span className="w-2 h-2 rounded-full bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.6)] animate-pulse"></span>
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#A1A1AA]">{profileData.status}</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-[#A1A1AA] uppercase tracking-widest">
                <span>{profileData.name}</span>
                <span>•</span>
                <span className="text-cyan-400 font-semibold">{profileData.title}</span>
                <span>•</span>
                <span className="inline-flex items-center gap-1"><MapPin className="w-3 h-3 text-[#A1A1AA]" /> Ho Chi Minh City</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-[58px] font-bold tracking-tight text-[#FAFAFA] leading-[1.08] font-sans">
                Building scalable <br className="hidden sm:inline" />
                digital products <br className="hidden sm:inline" />
                with <span className="text-cyan-400">React.</span>
              </h1>

              <p className="text-base sm:text-lg text-[#A1A1AA] leading-relaxed max-w-2xl">
                {profileData.subheadline}
              </p>
            </div>

            {/* Core highlights row */}
            <div className="flex flex-wrap gap-2 pt-1">
              <Badge variant="accent">3.5+ Years Experience</Badge>
              <Badge variant="default">React.js & Next.js</Badge>
              <Badge variant="default">React Native</Badge>
              <Badge variant="default">Logistics & Port Ops</Badge>
              <Badge variant="default">Redux & Zustand</Badge>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                id="hero-view-work-cta"
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#FAFAFA] hover:bg-cyan-400 text-[#09090B] font-semibold text-sm transition-all duration-150 shadow-md hover:shadow-cyan-500/25 active:scale-[0.98]"
              >
                <span>View Projects</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <button
                id="hero-resume-cta"
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#111113] hover:bg-[#18181B] border border-[#27272A] hover:border-cyan-500/50 text-[#FAFAFA] hover:text-cyan-400 font-medium text-sm transition-all duration-150 active:scale-[0.98]"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>View Full Resume</span>
              </button>

              <a
                id="hero-contact-cta"
                href="#contact"
                className="inline-flex items-center gap-1.5 px-4 py-3 text-xs font-mono text-[#A1A1AA] hover:text-cyan-400 transition-colors"
              >
                <span>Contact Direct →</span>
              </a>
            </div>
          </div>

          {/* Right Column: Technical Editor Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl border border-[#27272A] bg-[#111113] shadow-2xl overflow-hidden">
              
              {/* Card Window Header */}
              <div className="flex items-center justify-between px-4 py-2.5 bg-[#09090B] border-b border-[#27272A]">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#ef4444]/80 border border-[#ef4444]" />
                  <div className="w-3 h-3 rounded-full bg-[#eab308]/80 border border-[#eab308]" />
                  <div className="w-3 h-3 rounded-full bg-[#22c55e]/80 border border-[#22c55e]" />
                  <span className="ml-2 text-xs font-mono text-[#A1A1AA] hidden sm:inline">engineer.config.ts</span>
                </div>

                {/* Tabs */}
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setActiveTab('ts')}
                    className={`px-2.5 py-1 rounded-md text-xs font-mono transition-colors ${
                      activeTab === 'ts' ? 'bg-[#18181B] text-cyan-400 border border-cyan-500/30' : 'text-[#A1A1AA] hover:text-[#FAFAFA]'
                    }`}
                  >
                    <Code2 className="w-3 h-3 inline mr-1" />
                    TS
                  </button>
                  <button
                    onClick={() => setActiveTab('stack')}
                    className={`px-2.5 py-1 rounded-md text-xs font-mono transition-colors ${
                      activeTab === 'stack' ? 'bg-[#18181B] text-cyan-400 border border-cyan-500/30' : 'text-[#A1A1AA] hover:text-[#FAFAFA]'
                    }`}
                  >
                    <Layers className="w-3 h-3 inline mr-1" />
                    Stack
                  </button>
                  <button
                    onClick={() => setActiveTab('terminal')}
                    className={`px-2.5 py-1 rounded-md text-xs font-mono transition-colors ${
                      activeTab === 'terminal' ? 'bg-[#18181B] text-cyan-400 border border-cyan-500/30' : 'text-[#A1A1AA] hover:text-[#FAFAFA]'
                    }`}
                  >
                    <Terminal className="w-3 h-3 inline mr-1" />
                    CLI
                  </button>
                </div>
              </div>

              {/* Code Content */}
              <div className="p-5 font-mono text-xs leading-relaxed overflow-x-auto min-h-[300px]">
                {activeTab === 'ts' && (
                  <div className="space-y-1 text-[#FAFAFA]">
                    <div><span className="text-purple-400">interface</span> <span className="text-yellow-300">EngineerProfile</span> &#123;</div>
                    <div className="pl-4"><span className="text-[#A1A1AA]">name:</span> <span className="text-cyan-300">string</span>;</div>
                    <div className="pl-4"><span className="text-[#A1A1AA]">title:</span> <span className="text-cyan-300">string</span>;</div>
                    <div className="pl-4"><span className="text-[#A1A1AA]">experience:</span> <span className="text-cyan-300">string</span>;</div>
                    <div className="pl-4"><span className="text-[#A1A1AA]">primaryDomain:</span> <span className="text-cyan-300">string</span>;</div>
                    <div className="pl-4"><span className="text-[#A1A1AA]">coreStack:</span> <span className="text-cyan-300">string[]</span>;</div>
                    <div>&#125;</div>
                    <div className="pt-2 text-zinc-500">// Production configuration</div>
                    <div>
                      <span className="text-purple-400">export const</span> <span className="text-cyan-400">engineer</span>: <span className="text-yellow-300">EngineerProfile</span> = &#123;
                    </div>
                    <div className="pl-4">
                      <span className="text-[#A1A1AA]">name:</span> <span className="text-emerald-300">"Danh"</span>,
                    </div>
                    <div className="pl-4">
                      <span className="text-[#A1A1AA]">title:</span> <span className="text-emerald-300">"Middle Frontend Engineer"</span>,
                    </div>
                    <div className="pl-4">
                      <span className="text-[#A1A1AA]">experience:</span> <span className="text-emerald-300">"3.5+ years"</span>,
                    </div>
                    <div className="pl-4">
                      <span className="text-[#A1A1AA]">primaryDomain:</span> <span className="text-emerald-300">"Logistics & Port Operations"</span>,
                    </div>
                    <div className="pl-4">
                      <span className="text-[#A1A1AA]">coreStack:</span> [
                    </div>
                    <div className="pl-8 text-cyan-300">
                      "React.js", "Next.js", "React Native", "Redux", "Zustand", "TanStack Query"
                    </div>
                    <div className="pl-4">],</div>
                    <div>&#125;;</div>
                  </div>
                )}

                {activeTab === 'stack' && (
                  <div className="space-y-3 text-[#FAFAFA]">
                    <div className="text-zinc-500">// Technical capabilities breakdown</div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="p-2.5 rounded-xl bg-[#09090B] border border-[#27272A]">
                        <div className="text-cyan-400 font-semibold">Web Platforms</div>
                        <div className="text-[#A1A1AA] text-[11px] mt-1">React.js, Next.js, Ant Design, MUI, Tailwind CSS</div>
                      </div>
                      <div className="p-2.5 rounded-xl bg-[#09090B] border border-[#27272A]">
                        <div className="text-cyan-400 font-semibold">Mobile Apps</div>
                        <div className="text-[#A1A1AA] text-[11px] mt-1">React Native for Field Inspectors & Truck Drivers</div>
                      </div>
                      <div className="p-2.5 rounded-xl bg-[#09090B] border border-[#27272A]">
                        <div className="text-cyan-400 font-semibold">State Machinery</div>
                        <div className="text-[#A1A1AA] text-[11px] mt-1">Redux Toolkit, Zustand, TanStack Query</div>
                      </div>
                      <div className="p-2.5 rounded-xl bg-[#09090B] border border-[#27272A]">
                        <div className="text-cyan-400 font-semibold">API & Validation</div>
                        <div className="text-[#A1A1AA] text-[11px] mt-1">Axios Interceptors, React Hook Form, Yup</div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'terminal' && (
                  <div className="space-y-2 text-[#FAFAFA]">
                    <div className="text-zinc-500">$ danh --version</div>
                    <div className="text-cyan-400">danh-cli v3.5.0 (Middle Frontend Engineer)</div>
                    <div className="text-zinc-500">$ danh info --current-status</div>
                    <div className="text-[#A1A1AA]">
                      • Company: CEH Technology Platform JSC<br />
                      • Focus: VietnamHub & Port Transportation Apps<br />
                      • Location: Ho Chi Minh City, Vietnam<br />
                      • Status: Ready for high-impact frontend challenges
                    </div>
                    <div className="text-zinc-500">$ danh contact</div>
                    <div className="text-cyan-300">email: tdanhdtd@gmail.com | tel: 0965624981</div>
                  </div>
                )}
              </div>

              {/* Bottom bar of editor */}
              <div className="flex items-center justify-between px-4 py-2 bg-[#09090B] border-t border-[#27272A] text-[11px] font-mono text-[#A1A1AA]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_6px_rgba(6,182,212,0.6)]" />
                  <span>UTF-8</span>
                  <span>TypeScript 5.8</span>
                </div>
                <button
                  onClick={handleCopy}
                  className="hover:text-cyan-400 transition-colors text-xs text-[#FAFAFA] font-medium"
                >
                  {copiedSnippet ? 'Copied snippet!' : 'Copy snippet'}
                </button>
              </div>

            </div>

            {/* Quick Tech Badge Ribbon */}
            <div className="mt-4 flex flex-wrap items-center justify-center lg:justify-start gap-2">
              <span className="text-xs font-mono text-[#A1A1AA] mr-1">Ecosystem:</span>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-[#111113] border border-[#27272A] text-[#A1A1AA]">React</span>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-[#111113] border border-[#27272A] text-[#A1A1AA]">Next.js</span>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-[#111113] border border-[#27272A] text-[#A1A1AA]">React Native</span>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-[#111113] border border-[#27272A] text-[#A1A1AA]">Redux</span>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-[#111113] border border-[#27272A] text-[#A1A1AA]">Zustand</span>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-[#111113] border border-[#27272A] text-[#A1A1AA]">TanStack Query</span>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-[#111113] border border-[#27272A] text-[#A1A1AA]">Tailwind CSS</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
