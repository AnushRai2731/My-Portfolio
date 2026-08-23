import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContact }) => {
  return (
    <footer className="border-t border-white/[0.08] bg-[#050811] py-14 relative z-20">
      <div className="max-w-[1280px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-3.5">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#22D3EE] via-[#38BDF8] to-[#A78BFA] flex items-center justify-center font-mono font-bold text-xs text-[#070B14] shadow-[0_0_12px_rgba(34,211,238,0.4)]">
            AR
          </div>
          <div>
            <span className="font-display text-lg font-bold text-white tracking-tight flex items-center gap-2">
              Anush Rai
            </span>
            <p className="font-sans text-xs text-[#94A3B8] mt-0.5">
              Software Engineer | Project Lead • AI Solutions &amp; Data Analytics
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-[#CBD5E1] hover:text-[#22D3EE] hover:border-[#22D3EE]/50 hover:bg-[#22D3EE]/10 transition-all cursor-pointer"
            title="GitHub Profile"
            aria-label="GitHub Profile"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-[#CBD5E1] hover:text-[#22D3EE] hover:border-[#22D3EE]/50 hover:bg-[#22D3EE]/10 transition-all cursor-pointer"
            title="LinkedIn Profile"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <button
            onClick={onOpenContact}
            className="p-2.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-[#CBD5E1] hover:text-[#22D3EE] hover:border-[#22D3EE]/50 hover:bg-[#22D3EE]/10 transition-all cursor-pointer"
            title="Contact Anush Rai"
            aria-label="Contact Anush Rai"
          >
            <Mail className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 mt-8 pt-6 border-t border-white/[0.04] text-center text-xs font-sans text-[#64748B] flex flex-col sm:flex-row justify-between items-center gap-2">
        <span>© 2026 Anush Rai. Built with Technical Elegance.</span>
        <span className="font-mono text-[11px] text-[#94A3B8]">
          Software Engineering, AI Development &amp; Data Analytics
        </span>
      </div>
    </footer>
  );
};

