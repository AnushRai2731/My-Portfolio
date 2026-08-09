import React, { useState, useEffect } from 'react';
import { AuroraBackground } from './components/AuroraBackground';
import { CursorGlow } from './components/CursorGlow';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ExperienceSection } from './components/ExperienceSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { AccoladesSection } from './components/AccoladesSection';
import { ResumeModal } from './components/ResumeModal';
import { ContactModal } from './components/ContactModal';
import { SopAnalyzerModal } from './components/SopAnalyzerModal';
import { TicketEngineModal } from './components/TicketEngineModal';
import { DeploymentGuideModal } from './components/DeploymentGuideModal';
import { Footer } from './components/Footer';

export function App() {
  const [activeSection, setActiveSection] = useState<string>('work');
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isSopOpen, setIsSopOpen] = useState(false);
  const [isTicketOpen, setIsTicketOpen] = useState(false);
  const [isDeployGuideOpen, setIsDeployGuideOpen] = useState(false);

  // Generic info modal state for project architecture view
  const [genericModal, setGenericModal] = useState<{
    isOpen: boolean;
    title: string;
    detail: string;
  }>({ isOpen: false, title: '', detail: '' });

  // Scroll section observer
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['work', 'experience', 'skills', 'projects', 'accolades'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#06060F] text-[#e4e1ef] font-sans selection:bg-primary selection:text-[#003543] relative overflow-x-hidden">
      {/* Background Aurora Shader Canvas */}
      <AuroraBackground />

      {/* Interactive Cursor Follower */}
      <CursorGlow />

      {/* Top Navbar */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="relative z-10 space-y-12">
        <HeroSection
          onOpenResume={() => setIsResumeOpen(true)}
          onOpenContact={() => setIsContactOpen(true)}
          onNavigate={handleNavigate}
        />

        <ExperienceSection />

        <SkillsSection />

        <ProjectsSection
          onOpenSopAnalyzer={() => setIsSopOpen(true)}
          onOpenTicketEngine={() => setIsTicketOpen(true)}
          onOpenPipelineModal={(title, detail) =>
            setGenericModal({ isOpen: true, title, detail })
          }
        />

        <AccoladesSection />
      </main>

      {/* Footer */}
      <Footer
        onOpenContact={() => setIsContactOpen(true)}
      />

      {/* Modals */}
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />

      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />

      <SopAnalyzerModal isOpen={isSopOpen} onClose={() => setIsSopOpen(false)} />

      <TicketEngineModal isOpen={isTicketOpen} onClose={() => setIsTicketOpen(false)} />

      <DeploymentGuideModal
        isOpen={isDeployGuideOpen}
        onClose={() => setIsDeployGuideOpen(false)}
      />

      {/* Architecture Detail Modal */}
      {genericModal.isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in">
          <div className="bg-[#13121c] border border-white/20 rounded-2xl max-w-lg w-full p-6 shadow-2xl relative">
            <h3 className="text-xl font-bold text-white mb-2">{genericModal.title}</h3>
            <p className="text-sm text-[#bbc9cf] leading-relaxed mb-6">{genericModal.detail}</p>
            <button
              onClick={() => setGenericModal({ isOpen: false, title: '', detail: '' })}
              className="w-full py-2.5 rounded-xl bg-primary text-[#003543] font-bold text-xs uppercase tracking-wider hover:bg-[#00d2ff]"
            >
              Close Architecture View
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
