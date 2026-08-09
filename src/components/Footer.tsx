import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContact }) => {
  return (
    <footer className="border-t border-white/10 bg-[#0d0d17] py-12 relative z-20">
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <span className="font-headline-md text-xl font-bold text-white tracking-tight">
            Anush Rai
          </span>
          <p className="text-xs text-[#bbc9cf] mt-1">
            Software Engineer | Project Lead • AI Solutions & Data Analytics
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-primary hover:border-primary transition-all"
            title="GitHub Profile"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-primary hover:border-primary transition-all"
            title="LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <button
            onClick={onOpenContact}
            className="p-2.5 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-primary hover:border-primary transition-all cursor-pointer"
            title="Contact Anush Rai"
          >
            <Mail className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 mt-8 pt-6 border-t border-white/5 text-center text-xs text-gray-500 flex flex-col sm:flex-row justify-between items-center gap-2">
        <span>© 2026 Anush Rai. Built with Technical Elegance.</span>
        <span className="flex items-center gap-1 text-gray-400">
          Software Engineering, AI Development & Data Analytics
        </span>
      </div>
    </footer>
  );
};
