import React from 'react';
import { ArrowUpRight, ArrowDown, TrendingUp, Zap, ShieldCheck, Sparkles } from 'lucide-react';
import { ThreeSphere } from './ThreeSphere';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroSectionProps {
  onOpenResume: () => void;
  onOpenContact: () => void;
  onNavigate: (sectionId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenResume,
  onOpenContact,
  onNavigate,
}) => {
  const coreStackTags = [
    { name: 'Agents', cat: 'GENERATIVE AI' },
    { name: 'Prompt engineering', cat: 'LLM OPS' },
    { name: 'Stitch with Google & Figma', cat: 'FRONTEND' },
    { name: 'Gemini AI API', cat: 'LLM & GENAI' },
    { name: 'n8n Workflows', cat: 'AUTOMATION' },
    { name: 'Claude & OpenAI', cat: 'MULTI-MODAL' },
    { name: 'Python & win32com', cat: 'RPA & SAP' },
    { name: 'Azure Infrastructure', cat: 'CLOUD & DEVOPS' },
  ];

  return (
    <section id="work" className="relative min-h-[780px] pt-32 pb-16 max-w-[1280px] mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center w-full">
        {/* Left Column: Text */}
        <div className="lg:col-span-7 z-20 flex flex-col items-start h-full w-full">
          <div className="w-full h-full rounded-3xl bg-[#0e172a]/40 border border-white/10 p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden group transition-all duration-300 backdrop-blur-xl">
            <div className="absolute -top-24 -left-24 w-72 h-72 bg-[#ff6b81]/15 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-[#c084fc]/15 rounded-full blur-3xl pointer-events-none"></div>
            
            <div>
              {/* Status Capsule / Pill */}
              <div className="flex items-center gap-3 mb-6 flex-wrap relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider text-[#00fdee] bg-[#00fdee]/10 border border-[#00fdee]/30 backdrop-blur-md shadow-[0_0_20px_rgba(0,253,238,0.2)]">
                  <span className="w-2 h-2 rounded-full bg-[#00fdee] animate-ping"></span>
                  <span>AVAILABLE FOR OPPORTUNITIES</span>
                </div>
                <span className="text-xs font-semibold text-[#94A3B8] tracking-widest uppercase">
                  {PERSONAL_INFO.badgeRole}
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12] mb-6 relative z-10">
                <span>Building </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d2ff] via-[#00fdee] to-[#c084fc]">Intelligent Products</span> 
                <span> with Strategic </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff6b81] via-[#c084fc] to-[#2dd4bf]">AI & Automation</span>
              </h1>

              {/* Subtitle / Bio */}
              <p className="font-sans text-base sm:text-lg text-[#94A3B8] max-w-2xl mb-8 leading-relaxed relative z-10">
                {PERSONAL_INFO.bio}
              </p>

              {/* Three Primary CTAs */}
              <div className="flex flex-wrap gap-3 mb-8 relative z-10">
                <button
                  onClick={onOpenContact}
                  className="px-7 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#003543] bg-gradient-to-r from-[#00d2ff] to-[#00fdee] hover:shadow-[0_0_30px_rgba(0,210,255,0.5)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center gap-2 cursor-pointer shadow-lg"
                >
                  Let&apos;s Connect
                  <ArrowUpRight className="w-4 h-4 text-[#003543]" />
                </button>

                <button
                  onClick={onOpenResume}
                  className="px-7 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-white border border-white/20 bg-white/5 hover:bg-white/10 hover:border-[#00d2ff]/50 hover:shadow-[0_0_20px_rgba(0,210,255,0.2)] transition-all duration-300 flex items-center gap-2 cursor-pointer"
                >
                  View Resume
                  <ArrowDown className="w-4 h-4 text-[#00fdee]" />
                </button>

                <button
                  onClick={() => onNavigate('projects')}
                  className="px-7 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#00fdee] border border-[#00fdee]/30 bg-[#00fdee]/10 hover:bg-[#00fdee]/20 transition-all duration-300 flex items-center gap-2 cursor-pointer"
                >
                  Explore Work
                  <ArrowUpRight className="w-4 h-4 text-[#00fdee]" />
                </button>
              </div>
            </div>

            {/* Social Links Row */}
            <div className="pt-6 border-t border-white/10 flex items-center justify-between gap-4 text-xs font-semibold text-[#94A3B8] relative z-10">
              <div className="flex items-center gap-4 sm:gap-6 ml-auto">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1 group"
                >
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-[#ff6b81]" />
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1 group"
                >
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-[#38bdf8]" />
                </a>
                <button
                  onClick={onOpenContact}
                  className="hover:text-white transition-colors flex items-center gap-1 group cursor-pointer"
                >
                  <span>Email</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-[#2dd4bf]" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: 3D Interactive Sphere Card */}
        <div className="lg:col-span-5 w-full h-full z-10 mt-6 lg:mt-0 flex items-center justify-center">
          <ThreeSphere />
        </div>
      </div>

      {/* Core Stack Marquee Ribbon */}
      <div className="mt-8 glass-card rounded-2xl p-4 border border-white/10 flex items-center gap-6 overflow-hidden shadow-lg relative">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#00fdee] shrink-0 border-r border-white/10 pr-6 z-10 bg-[#0e172a]/80 backdrop-blur-md">
          <Sparkles className="w-4 h-4 text-[#00fdee]" />
          <span>Core Stack</span>
        </div>
        <div className="overflow-hidden w-full relative">
          <div className="animate-ticker flex items-center gap-3">
            {/* Double the array for seamless scrolling */}
            {[...coreStackTags, ...coreStackTags].map((tag, idx) => (
              <div key={idx} className="px-3.5 py-1.5 rounded-xl bg-white/5 border border-white/10 hover:border-[#00d2ff]/40 hover:bg-white/10 transition-all flex items-center gap-2 text-xs font-semibold text-white shrink-0 cursor-default">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00fdee]"></span>
                <span>{tag.name}</span>
                <span className="text-[10px] text-[#94A3B8] uppercase tracking-wider">• {tag.cat}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 3 Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {/* Metric Card 1 */}
        <div className="glass-card rounded-2xl p-7 flex flex-col justify-between transition-all duration-300 group hover:border-[#22D3EE]/40 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]">
          <div>
            <div className="flex items-start justify-between mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#22D3EE]/15 flex items-center justify-center text-[#22D3EE] border border-[#22D3EE]/30">
                <TrendingUp className="w-5 h-5" />
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-sans font-semibold text-[#22D3EE] bg-[#22D3EE]/10 border border-[#22D3EE]/25 flex items-center gap-1">
                ↑ High Growth Impact
              </span>
            </div>
            <div className="font-mono text-3xl sm:text-4xl font-bold text-white tracking-tight">
              4+ Years
            </div>
            <div className="font-mono text-[11px] text-[#22D3EE] uppercase tracking-wider font-semibold mt-1">
              FULL-STACK & DATA ARCHITECTURE
            </div>
          </div>
          <p className="font-sans text-sm text-[#94A3B8] mt-4 leading-relaxed">
            Proven track record leading production AI systems, data pipelines, and ERP software tools.
          </p>
        </div>

        {/* Metric Card 2 */}
        <div className="glass-card rounded-2xl p-7 flex flex-col justify-between transition-all duration-300 group hover:border-[#A78BFA]/40 hover:shadow-[0_0_30px_rgba(167,139,250,0.15)]">
          <div>
            <div className="flex items-start justify-between mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#A78BFA]/15 flex items-center justify-center text-[#A78BFA] border border-[#A78BFA]/30">
                <Zap className="w-5 h-5" />
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-sans font-semibold text-[#A78BFA] bg-[#A78BFA]/10 border border-[#A78BFA]/25 flex items-center gap-1">
                ↑ 70% Time Saved
              </span>
            </div>
            <div className="font-mono text-3xl sm:text-4xl font-bold text-white tracking-tight">
              15+ Workflows
            </div>
            <div className="font-mono text-[11px] text-[#A78BFA] uppercase tracking-wider font-semibold mt-1">
              AUTOMATED PROCESS ENGINES
            </div>
          </div>
          <p className="font-sans text-sm text-[#94A3B8] mt-4 leading-relaxed">
            Designed webhook, LLM, and RPA flows removing repetitive manual workload across operations.
          </p>
        </div>

        {/* Metric Card 3 */}
        <div className="glass-card rounded-2xl p-7 flex flex-col justify-between transition-all duration-300 group hover:border-[#38BDF8]/40 hover:shadow-[0_0_30px_rgba(56,189,248,0.15)]">
          <div>
            <div className="flex items-start justify-between mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#38BDF8]/15 flex items-center justify-center text-[#38BDF8] border border-[#38BDF8]/30">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-sans font-semibold text-[#38BDF8] bg-[#38BDF8]/10 border border-[#38BDF8]/25 flex items-center gap-1">
                Microsoft Certified
              </span>
            </div>
            <div className="font-mono text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Azure Pro
            </div>
            <div className="font-mono text-[11px] text-[#38BDF8] uppercase tracking-wider font-semibold mt-1">
              CLOUD & AI INFRASTRUCTURE
            </div>
          </div>
          <p className="font-sans text-sm text-[#94A3B8] mt-4 leading-relaxed">
            Certified in Azure AI Fundamentals, cloud deployments, and enterprise security standards.
          </p>
        </div>
      </div>
    </section>
  );
};

