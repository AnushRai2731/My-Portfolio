import React, { useState } from 'react';
import { Download, Menu, X, FileText } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onNavigate,
  onOpenResume,
}) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { id: 'work', label: 'Work' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'accolades', label: 'Honors & Certs' },
  ];

  const handleNav = (id: string) => {
    onNavigate(id);
    setMobileOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 glass-nav">
      <div className="flex justify-between items-center max-w-[1200px] mx-auto px-6 py-4">
        {/* Brand */}
        <button
          onClick={() => handleNav('work')}
          className="font-headline-md text-2xl font-bold text-[#e4e1ef] tracking-tighter hover:text-[#00d2ff] transition-colors text-left flex items-center gap-2"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#00d2ff] shadow-[0_0_10px_#00d2ff]" />
          Anush Rai
        </button>

        {/* Desktop Nav Items */}
        <div className="hidden md:flex gap-2 items-center font-headline-md bg-white/5 p-1.5 rounded-full border border-white/10 backdrop-blur-md">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className={`px-5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 ${
                  isActive
                    ? 'bg-[#00d2ff]/20 text-[#a5e7ff] border border-[#00d2ff]/40 shadow-[0_0_12px_rgba(0,210,255,0.3)]'
                    : 'text-[#bbc9cf] hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={onOpenResume}
            className="px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest text-[#a5e7ff] border border-[#00d2ff]/40 bg-gradient-to-r from-[#00d2ff]/15 to-[#e9aaff]/15 hover:bg-[#00d2ff]/25 hover:border-[#00d2ff] transition-all flex items-center gap-2 shadow-[0_0_15px_rgba(0,210,255,0.15)] hover:shadow-[0_0_25px_rgba(0,210,255,0.35)]"
          >
            <FileText className="w-3.5 h-3.5" />
            Resume
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-[#e4e1ef] p-2 rounded-lg bg-surface-variant/50 border border-white/10"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-[#0d0d17]/95 border-b border-white/10 px-6 py-6 flex flex-col gap-4 animate-in slide-in-from-top duration-200">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNav(item.id)}
              className={`text-left text-lg font-medium py-2 border-b border-white/5 ${
                activeSection === item.id ? 'text-primary font-bold' : 'text-[#bbc9cf]'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="flex flex-col gap-3 pt-2">
            <button
              onClick={() => {
                onOpenResume();
                setMobileOpen(false);
              }}
              className="w-full py-3 rounded-xl text-center text-sm font-bold text-primary border border-primary/40 bg-primary/10 flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
