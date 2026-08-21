import React, { useState } from 'react';
import { 
  profileData, 
  featuredProjects, 
  techCategories, 
  experiencesData, 
  businessDomains, 
  educationData, 
  aiAssistedDevelopmentData 
} from '../../data/portfolioData';
import { ProjectDetail } from '../../types';
import { 
  Truck, 
  Anchor, 
  Building2, 
  Smartphone, 
  Layout, 
  Sparkles, 
  Code, 
  Layers, 
  CheckCircle2, 
  ArrowRight, 
  Search, 
  Camera, 
  QrCode, 
  Clock, 
  Send, 
  Check, 
  Copy, 
  Mail, 
  Phone, 
  ExternalLink,
  ChevronRight,
  ShieldCheck,
  Zap,
  Bot
} from 'lucide-react';

interface BentoDashboardTemplateProps {
  onSelectProject: (project: ProjectDetail) => void;
  onOpenResume: () => void;
}

export const BentoDashboardTemplate: React.FC<BentoDashboardTemplateProps> = ({
  onSelectProject,
  onOpenResume,
}) => {
  const [activeWorkflow, setActiveWorkflow] = useState<'logistics' | 'driver' | 'inspection'>('logistics');
  const [activeStep, setActiveStep] = useState<number>(0);
  const [skillSearch, setSkillSearch] = useState('');
  const [selectedPlatform, setSelectedPlatform] = useState<'all' | 'Web' | 'Mobile'>('all');
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Workflow Simulation Steps
  const workflows = {
    logistics: {
      title: "VietnamHub Order Dispatch Engine",
      subtitle: "Multi-party truck booking & status transition machine",
      steps: [
        { label: "1. Order Booking", desc: "Customer inputs 40ft High Cube Container booking & pickup coordinates.", status: "Created", state: "state: BOOKED" },
        { label: "2. Dispatch Matching", desc: "Dispatcher assigns truck fleet & driver based on yard proximity.", status: "Dispatched", state: "state: ASSIGNED" },
        { label: "3. Live Tracking", desc: "Driver mobile updates GPS waypoints & estimated gate-in time.", status: "In Transit", state: "state: IN_TRANSIT" },
        { label: "4. POD Verification", desc: "Digital Bill of Lading signed & real-time delivery clearance recorded.", status: "Completed", state: "state: DELIVERED" }
      ]
    },
    driver: {
      title: "Hateco / HICT Gate Pass Workflow",
      subtitle: "Driver terminal mobile check-in & gate slot reservation",
      steps: [
        { label: "1. Shift Start", desc: "Driver logs in via React Native app and loads assigned port trips.", status: "Active Shift", state: "driver_id: DRV_8821" },
        { label: "2. Gate Slot Selection", desc: "Driver reserves 14:00 - 15:00 appointment slot at HICT Terminal Gate 3.", status: "Slot Reserved", state: "slot: HICT_G03_1400" },
        { label: "3. QR Code Generation", desc: "App compiles encrypted QR pass for optical barrier scanner.", status: "Pass Issued", state: "qr_token: VERIFIED" },
        { label: "4. Gate Entry & Clear", desc: "Driver scans QR at terminal booth; order shifts to unloading status.", status: "Gate In", state: "status: GATE_ENTERED" }
      ]
    },
    inspection: {
      title: "HICT Field Container Inspection",
      subtitle: "Mobile defect annotation & TOS synchronization",
      steps: [
        { label: "1. Scan ISO Prefix", desc: "Inspector scans container identifier (e.g. TEMU-892182-3) in yard.", status: "Matched", state: "iso: 45G1 / 40HC" },
        { label: "2. Photo & Annotation", desc: "Camera snaps door hinge scratch and overlays vector damage marker.", status: "Annotated", state: "defect: DOOR_DENT_L2" },
        { label: "3. Local Cache (Zustand)", desc: "Record saved to offline draft with image compression pipeline.", status: "Draft Saved", state: "sync_queue: 1_PENDING" },
        { label: "4. TanStack Sync", desc: "Multipart payload sent to terminal API; damage report recorded.", status: "Uploaded", state: "http: 201_CREATED" }
      ]
    }
  };

  const currentWorkflow = workflows[activeWorkflow];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const filteredProjects = featuredProjects.filter(p => {
    if (selectedPlatform === 'all') return true;
    return p.platform.includes(selectedPlatform);
  });

  return (
    <div className="bg-[#09090B] text-[#FAFAFA] min-h-screen font-sans selection:bg-cyan-500/30 selection:text-cyan-300 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Top Bento Header Bar */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#111113] border border-[#27272A] relative overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 blur-[100px] pointer-events-none" />
          
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>Interactive Bento Suite • React & React Native</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-sans">
              {profileData.name}
            </h1>
            <p className="text-sm text-[#A1A1AA] max-w-2xl leading-relaxed">
              Middle Frontend Engineer with 3.5+ years building high-impact logistics, terminal operations, and enterprise software.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#18181B] border border-[#27272A] hover:border-cyan-500/40 text-xs font-mono text-[#FAFAFA] transition-colors"
            >
              {copiedEmail ? <Check className="w-3.5 h-3.5 text-cyan-400" /> : <Copy className="w-3.5 h-3.5 text-[#A1A1AA]" />}
              <span>{copiedEmail ? 'Copied' : profileData.email}</span>
            </button>

            <a
              href={`mailto:${profileData.email}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FAFAFA] hover:bg-cyan-400 text-[#09090B] font-semibold text-xs transition-all shadow-md active:scale-95"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Contact</span>
            </a>

            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#18181B] border border-[#27272A] hover:border-cyan-500/40 text-xs font-mono text-cyan-400 transition-colors"
            >
              <span>View Resume</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* 3-Column Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Card 1: Live Interactive Workflow Engine Simulator (8 cols) */}
          <div className="md:col-span-8 p-6 sm:p-8 rounded-3xl bg-[#111113] border border-[#27272A] flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-400 flex items-center gap-2">
                    <Zap className="w-4 h-4" />
                    <span>Operational Workflow Simulator</span>
                  </div>
                  <h2 className="text-lg font-bold text-white mt-1">
                    {currentWorkflow.title}
                  </h2>
                  <p className="text-xs text-[#A1A1AA]">
                    {currentWorkflow.subtitle}
                  </p>
                </div>

                {/* Workflow Selector Tabs */}
                <div className="flex items-center gap-1.5 p-1 bg-[#09090B] rounded-full border border-[#27272A] self-start sm:self-auto">
                  <button
                    onClick={() => { setActiveWorkflow('logistics'); setActiveStep(0); }}
                    className={`px-3 py-1 rounded-full text-xs font-mono transition-all ${
                      activeWorkflow === 'logistics' ? 'bg-cyan-500 text-zinc-950 font-bold' : 'text-[#A1A1AA] hover:text-white'
                    }`}
                  >
                    Logistics
                  </button>
                  <button
                    onClick={() => { setActiveWorkflow('driver'); setActiveStep(0); }}
                    className={`px-3 py-1 rounded-full text-xs font-mono transition-all ${
                      activeWorkflow === 'driver' ? 'bg-cyan-500 text-zinc-950 font-bold' : 'text-[#A1A1AA] hover:text-white'
                    }`}
                  >
                    Driver App
                  </button>
                  <button
                    onClick={() => { setActiveWorkflow('inspection'); setActiveStep(0); }}
                    className={`px-3 py-1 rounded-full text-xs font-mono transition-all ${
                      activeWorkflow === 'inspection' ? 'bg-cyan-500 text-zinc-950 font-bold' : 'text-[#A1A1AA] hover:text-white'
                    }`}
                  >
                    Inspection
                  </button>
                </div>
              </div>

              {/* Interactive Step Machine */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2">
                {currentWorkflow.steps.map((step, idx) => {
                  const isCurrent = activeStep === idx;
                  const isDone = activeStep > idx;
                  return (
                    <button
                      key={idx}
                      onClick={() => setActiveStep(idx)}
                      className={`p-3 rounded-2xl border text-left transition-all flex flex-col justify-between ${
                        isCurrent
                          ? 'bg-cyan-500/10 border-cyan-500/60 shadow-[0_0_12px_rgba(6,182,212,0.2)]'
                          : isDone
                          ? 'bg-[#18181B]/80 border-[#27272A] opacity-80'
                          : 'bg-[#09090B] border-[#27272A]/60 opacity-60 hover:opacity-100'
                      }`}
                    >
                      <div className="text-[11px] font-mono font-bold text-cyan-400">
                        {step.label.split(' ')[0]}
                      </div>
                      <div className="text-xs font-semibold text-white truncate mt-1">
                        {step.label.split('. ')[1]}
                      </div>
                      <span className="text-[10px] font-mono text-[#A1A1AA] mt-2 block">
                        {step.status}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Active Step Details Terminal View */}
              <div className="p-5 rounded-2xl bg-[#09090B] border border-[#27272A] font-mono text-xs space-y-2">
                <div className="flex items-center justify-between text-[#A1A1AA] border-b border-[#27272A] pb-2">
                  <span className="text-cyan-400 font-bold">
                    STEP {activeStep + 1} OF 4: {currentWorkflow.steps[activeStep].label}
                  </span>
                  <span className="text-[10px] bg-[#18181B] px-2 py-0.5 rounded text-[#FAFAFA] border border-[#27272A]">
                    {currentWorkflow.steps[activeStep].state}
                  </span>
                </div>
                <p className="text-[#FAFAFA] text-xs pt-1 leading-relaxed font-sans">
                  {currentWorkflow.steps[activeStep].desc}
                </p>
              </div>

            </div>

            <div className="flex items-center justify-between text-xs text-[#A1A1AA]">
              <span>Click any step above to inspect interactive business state machine</span>
              <button
                onClick={() => setActiveStep((prev) => (prev + 1) % 4)}
                className="inline-flex items-center gap-1.5 text-cyan-400 font-mono hover:text-white font-semibold"
              >
                <span>Next Step</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Card 2: AI-Assisted Development Box (4 cols) */}
          <div className="md:col-span-4 p-6 sm:p-8 rounded-3xl bg-[#111113] border border-[#27272A] flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-cyan-400">
                <Bot className="w-4 h-4" />
                <span>AI Engineering Rigor</span>
              </div>
              <h3 className="text-xl font-bold text-white">
                Cursor & Claude Workflow
              </h3>
              <p className="text-xs text-[#A1A1AA] leading-relaxed">
                Accelerating component scaffolding, refactoring, and state machine prototyping with strict human validation before production merges.
              </p>

              <div className="space-y-2.5 pt-2">
                {aiAssistedDevelopmentData.slice(0, 3).map((item, idx) => (
                  <div key={idx} className="p-3 rounded-2xl bg-[#09090B] border border-[#27272A] space-y-1">
                    <div className="text-xs font-bold text-white flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span>{item.title}</span>
                    </div>
                    <p className="text-[11px] text-[#A1A1AA] leading-normal line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2 border-t border-[#27272A] flex items-center justify-between text-xs font-mono text-[#A1A1AA]">
              <span>Validation: 100% Pre-prod Tested</span>
              <span className="text-cyan-400">Cursor + Claude</span>
            </div>
          </div>

          {/* Card 3: Interactive Skills & Tech Matrix (5 cols) */}
          <div className="md:col-span-5 p-6 sm:p-8 rounded-3xl bg-[#111113] border border-[#27272A] space-y-5">
            <div className="flex items-center justify-between">
              <div className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-400 flex items-center gap-2">
                <Code className="w-4 h-4" />
                <span>Tech Stack Matrix</span>
              </div>
              <span className="text-xs font-mono text-[#A1A1AA]">3.5+ Yrs</span>
            </div>

            {/* Quick Skill Search */}
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#A1A1AA]" />
              <input
                type="text"
                placeholder="Filter technologies (e.g. Redux, React Native, MUI)..."
                value={skillSearch}
                onChange={(e) => setSkillSearch(e.target.value)}
                className="w-full pl-9 pr-4 py-2 rounded-full bg-[#09090B] border border-[#27272A] text-xs font-mono text-[#FAFAFA] placeholder:text-zinc-600 focus:outline-none focus:border-cyan-500"
              />
            </div>

            {/* Skill Tags */}
            <div className="space-y-4 max-h-[360px] overflow-y-auto pr-1">
              {techCategories.map((cat) => {
                const matchingItems = cat.items.filter(i => 
                  i.name.toLowerCase().includes(skillSearch.toLowerCase()) ||
                  (i.detail && i.detail.toLowerCase().includes(skillSearch.toLowerCase()))
                );

                if (matchingItems.length === 0) return null;

                return (
                  <div key={cat.title} className="space-y-2">
                    <div className="text-[11px] font-mono text-[#A1A1AA] uppercase tracking-wider">
                      {cat.title}
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {matchingItems.map((item) => (
                        <span
                          key={item.name}
                          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-[#09090B] border border-[#27272A] hover:border-cyan-500/50 text-[#FAFAFA] transition-all"
                        >
                          <span>{item.name}</span>
                          {item.badge && (
                            <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                              {item.badge}
                            </span>
                          )}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Card 4: Filterable Project Portfolio (7 cols) */}
          <div className="md:col-span-7 p-6 sm:p-8 rounded-3xl bg-[#111113] border border-[#27272A] flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-400 flex items-center gap-2">
                    <Layers className="w-4 h-4" />
                    <span>Featured Production Projects</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mt-1">
                    Logistics, Terminal & Enterprise Apps
                  </h3>
                </div>

                {/* Platform filter */}
                <div className="flex items-center gap-1 p-1 bg-[#09090B] rounded-full border border-[#27272A] self-start sm:self-auto">
                  {(['all', 'Web', 'Mobile'] as const).map((platform) => (
                    <button
                      key={platform}
                      onClick={() => setSelectedPlatform(platform)}
                      className={`px-3 py-1 rounded-full text-xs font-mono transition-all ${
                        selectedPlatform === platform
                          ? 'bg-[#18181B] text-cyan-400 font-bold border border-cyan-500/40'
                          : 'text-[#A1A1AA] hover:text-white'
                      }`}
                    >
                      {platform === 'all' ? 'All' : platform}
                    </button>
                  ))}
                </div>
              </div>

              {/* Projects Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
                {filteredProjects.map((proj) => (
                  <div
                    key={proj.id}
                    onClick={() => onSelectProject(proj)}
                    className="p-4 rounded-2xl bg-[#09090B] border border-[#27272A] hover:border-cyan-500/50 transition-all cursor-pointer group flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between text-[11px] font-mono text-[#A1A1AA] mb-1.5">
                        <span className="text-cyan-400 font-semibold">{proj.domain}</span>
                        <div className="flex gap-1">
                          {proj.platform.map(p => (
                            <span key={p} className="px-1.5 py-0.5 rounded bg-[#18181B] text-[#FAFAFA]">
                              {p}
                            </span>
                          ))}
                        </div>
                      </div>

                      <h4 className="text-sm font-bold text-white group-hover:text-cyan-400 transition-colors">
                        {proj.title}
                      </h4>
                      <p className="text-xs text-[#A1A1AA] mt-1 line-clamp-2 leading-relaxed">
                        {proj.subtitle}
                      </p>
                    </div>

                    <div className="mt-3 pt-2.5 border-t border-[#27272A] flex items-center justify-between text-[11px] font-mono text-cyan-400">
                      <span>View Architecture</span>
                      <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                ))}
              </div>

            </div>

            <div className="pt-2 text-xs font-mono text-[#A1A1AA] flex items-center justify-between">
              <span>All 4 production case studies available</span>
              <button onClick={onOpenResume} className="text-cyan-400 hover:underline">
                Open Full CV Details →
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
