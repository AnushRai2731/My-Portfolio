import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

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
    <nav className="fixed top-0 w-full z-50 glass-nav border-b border-white/[0.08]">
      <div className="flex justify-between items-center max-w-[1280px] mx-auto px-6 py-4">
        {/* Brand with AR Circle Avatar */}
        <button
          onClick={() => handleNav('work')}
          className="flex items-center gap-3 cursor-pointer group"
          aria-label="Anush Rai - Go to Top"
        >
          <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#38BDF8] via-[#22D3EE] to-[#818CF8] flex items-center justify-center text-[#070B14] font-mono font-extrabold text-sm shadow-[0_0_12px_rgba(34,211,238,0.4)]">
            AR
          </div>
          <span className="font-display text-lg font-bold text-white tracking-tight group-hover:text-[#22D3EE] transition-colors">
            Anush Rai
          </span>
        </button>

        {/* Desktop Nav Pills */}
        <div className="hidden md:flex gap-1 items-center bg-[#0C1222]/80 px-2 py-1.5 rounded-full border border-white/[0.08] backdrop-blur-xl">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#22D3EE] text-[#070B14] font-bold shadow-[0_0_12px_rgba(34,211,238,0.4)]'
                    : 'text-[#94A3B8] hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        {/* Action Button: RESUME ↗ */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={onOpenResume}
            className="px-5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-white border border-white/20 bg-white/[0.04] hover:bg-white/[0.1] hover:border-[#22D3EE]/50 hover:text-[#22D3EE] transition-all flex items-center gap-1 cursor-pointer"
          >
            RESUME
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-[#E2E8F0] p-2 rounded-xl bg-white/[0.05] border border-white/[0.1] hover:bg-white/[0.1] transition-colors"
          aria-label="Toggle navigation menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-[#0A0F1A]/95 border-b border-white/10 px-6 py-6 flex flex-col gap-3 backdrop-blur-xl animate-in slide-in-from-top-2 duration-200">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNav(item.id)}
              className={`text-left text-sm font-semibold py-2.5 px-3 rounded-lg border-b border-white/[0.04] transition-colors ${
                activeSection === item.id
                  ? 'text-[#070B14] bg-[#22D3EE] font-bold'
                  : 'text-[#94A3B8] hover:text-white'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-3">
            <button
              onClick={() => {
                onOpenResume();
                setMobileOpen(false);
              }}
              className="w-full py-3 rounded-full text-center text-xs font-bold uppercase tracking-wider text-[#070B14] bg-[#22D3EE] flex items-center justify-center gap-2 hover:bg-[#38BDF8] transition-colors"
            >
              RESUME ↗
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

