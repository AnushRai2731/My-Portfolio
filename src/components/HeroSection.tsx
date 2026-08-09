import React from 'react';
import { Download, Mail, TrendingUp, Zap, Award } from 'lucide-react';
import { ThreeSphere } from './ThreeSphere';

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
  return (
    <section id="work" className="relative min-h-[820px] pt-32 pb-16 max-w-[1200px] mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full">
        {/* Left Column: Text */}
        <div className="lg:col-span-7 z-20 flex flex-col gap-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs tracking-[0.2em] text-[#00fdee] uppercase font-bold glass-pill w-fit border border-[#00fdee]/30 shadow-[0_0_15px_rgba(0,253,238,0.15)]">
            <span className="w-2 h-2 rounded-full bg-[#00fdee] animate-pulse" />
            Software Engineer | Project Lead
          </div>

          <h1 className="font-headline-lg text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#e4e1ef] leading-tight">
            <span>Engineering </span>
            <span className="inline-block pb-1 text-transparent bg-clip-text bg-gradient-to-r from-[#47d6ff] via-[#00d2ff] to-[#e9aaff]">
              Intelligent AI & Data
            </span>{' '}
            <span>Solutions</span>
          </h1>

          <p className="font-body-lg text-lg text-[#bbc9cf] max-w-2xl mt-2 leading-relaxed">
            4+ years building intelligent AI applications, data analytics workflows, and scalable software systems that reduce operational effort by up to 70%.
          </p>

          <div className="flex flex-wrap gap-4 mt-6">
            <button
              onClick={onOpenResume}
              className="px-8 py-4 rounded-full text-xs font-bold uppercase tracking-wider text-[#003543] bg-gradient-to-r from-[#00d2ff] to-[#e9aaff] hover:shadow-[0_0_30px_rgba(189,0,255,0.4)] transition-all flex items-center gap-2 group cursor-pointer"
            >
              Download Resume
              <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </button>

            <button
              onClick={onOpenContact}
              className="px-8 py-4 rounded-full text-xs font-bold uppercase tracking-wider text-[#a5e7ff] border border-[#3c494e] bg-white/5 hover:bg-[#00d2ff]/10 hover:border-[#00d2ff] hover:shadow-[0_0_20px_rgba(0,210,255,0.3)] transition-all flex items-center gap-2 cursor-pointer"
            >
              <Mail className="w-4 h-4" />
              Contact Me
            </button>
          </div>
        </div>

        {/* Right Column: 3D Interactive Canvas */}
        <div className="lg:col-span-5 relative h-[380px] lg:h-[520px] w-full z-10 mt-6 lg:mt-0 flex items-center justify-center">
          <ThreeSphere />
        </div>
      </div>

      {/* Mini Stats Teaser Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
        {/* Stat Card 1 */}
        <div className="glass-card bg-white/5 backdrop-blur-xl border border-white/10 hover:border-[#00d2ff]/50 hover:shadow-[0_0_30px_rgba(0,210,255,0.2)] rounded-2xl p-8 flex flex-col gap-3 transition-all duration-300 group">
          <div className="w-12 h-12 rounded-full bg-[#00d2ff]/20 flex items-center justify-center text-[#a5e7ff]">
            <TrendingUp className="w-6 h-6" />
          </div>
          <div className="font-headline-lg text-3xl font-bold text-white">4+ Years</div>
          <div className="font-label-caps text-xs text-[#bbc9cf] uppercase tracking-wider font-bold">
            Engineering Exp.
          </div>
          <p className="font-body-md text-sm text-[#bbc9cf] mt-1 leading-relaxed">
            Driving architecture and delivery across complex technical domains.
          </p>
        </div>

        {/* Stat Card 2 */}
        <div className="glass-card bg-white/5 backdrop-blur-xl border border-white/10 hover:border-[#e9aaff]/50 hover:shadow-[0_0_30px_rgba(189,0,255,0.25)] rounded-2xl p-8 flex flex-col gap-3 transition-all duration-300 relative overflow-hidden group">
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#bd00ff]/20 rounded-full blur-2xl group-hover:opacity-100 transition-opacity" />
          <div className="w-12 h-12 rounded-full bg-[#e9aaff]/20 flex items-center justify-center text-[#ecb2ff] relative z-10">
            <Zap className="w-6 h-6" />
          </div>
          <div className="font-headline-lg text-3xl font-bold text-white relative z-10">70%</div>
          <div className="font-label-caps text-xs text-[#bbc9cf] uppercase tracking-wider font-bold relative z-10">
            Automation Efficiency
          </div>
          <p className="font-body-md text-sm text-[#bbc9cf] mt-1 leading-relaxed relative z-10">
            Reduced manual processing overhead through intelligent data pipelines.
          </p>
        </div>

        {/* Stat Card 3 */}
        <div className="glass-card bg-white/5 backdrop-blur-xl border border-white/10 hover:border-[#00fdee]/50 hover:shadow-[0_0_30px_rgba(0,253,238,0.2)] rounded-2xl p-8 flex flex-col gap-3 transition-all duration-300 group">
          <div className="w-12 h-12 rounded-full bg-[#00fdee]/20 flex items-center justify-center text-[#00fdee]">
            <Award className="w-6 h-6" />
          </div>
          <div className="font-headline-lg text-3xl font-bold text-white">Azure</div>
          <div className="font-label-caps text-xs text-[#bbc9cf] uppercase tracking-wider font-bold">
            Certified Pro
          </div>
          <p className="font-body-md text-sm text-[#bbc9cf] mt-1 leading-relaxed">
            Expertise in cloud infrastructure, deployment, and scalability.
          </p>
        </div>
      </div>
    </section>
  );
};
