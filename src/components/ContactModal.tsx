import React from 'react';
import { Mail, X, ArrowUpRight } from 'lucide-react';
import { Github, Linkedin } from './SocialIcons';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in">
      <div className="glass-modal rounded-2xl max-w-sm w-full p-6 sm:p-8 relative border border-white/[0.08] shadow-2xl">
        <div className="flex justify-between items-center pb-4 border-b border-white/[0.08] mb-6">
          <div className="flex items-center gap-2.5">
            <Mail className="w-5 h-5 text-[#22D3EE]" />
            <h2 className="font-display text-xl font-bold text-white">Let's Connect</h2>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-[#94A3B8] hover:text-white hover:bg-white/[0.06] transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-4">
          <p className="text-sm text-[#94A3B8] font-sans mb-6 text-center leading-relaxed">
            I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
          </p>

          <a
            href="mailto:anushrai2016@gmail.com"
            className="w-full py-4 px-5 rounded-xl border border-white/[0.12] bg-white/[0.04] hover:bg-[#22D3EE]/10 hover:border-[#22D3EE]/50 transition-all flex items-center justify-between group"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-[#22D3EE]/20 text-[#22D3EE]">
                <Mail className="w-5 h-5" />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-semibold text-white text-sm">Email Me</span>
                <span className="text-xs text-[#94A3B8]">anushrai2016@gmail.com</span>
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-[#94A3B8] group-hover:text-[#22D3EE] transition-colors" />
          </a>

          <a
            href="https://www.linkedin.com/in/anush-rai"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-4 px-5 rounded-xl border border-white/[0.12] bg-white/[0.04] hover:bg-[#3b82f6]/10 hover:border-[#3b82f6]/50 transition-all flex items-center justify-between group"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-[#3b82f6]/20 text-[#3b82f6]">
                <Linkedin className="w-5 h-5" />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-semibold text-white text-sm">LinkedIn</span>
                <span className="text-xs text-[#94A3B8]">Professional Network</span>
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-[#94A3B8] group-hover:text-[#3b82f6] transition-colors" />
          </a>

          <a
            href="https://github.com/AnushRai2731"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-4 px-5 rounded-xl border border-white/[0.12] bg-white/[0.04] hover:bg-white/10 hover:border-white/50 transition-all flex items-center justify-between group"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-white/10 text-white">
                <Github className="w-5 h-5" />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-semibold text-white text-sm">GitHub</span>
                <span className="text-xs text-[#94A3B8]">Open Source & Projects</span>
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-[#94A3B8] group-hover:text-white transition-colors" />
          </a>
        </div>
      </div>
    </div>
  );
};
