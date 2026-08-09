import React from 'react';
import { Download, X, Printer, CheckCircle2, Award, Briefcase, GraduationCap } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleDownload = () => {
    const resumeText = `
ANUSH RAI
Software Engineer | Project Lead
Email: ${PERSONAL_INFO.email} | Location: ${PERSONAL_INFO.location}
GitHub: ${PERSONAL_INFO.github} | LinkedIn: ${PERSONAL_INFO.linkedin}

SUMMARY:
4+ years building intelligent automation and data pipelines that reduce manual effort by up to 70%. Specializing in high-performance enterprise solutions.

EXPERIENCE:
- Project Lead @ Tata Consultancy Services (TCS) [May 2026 — Present]
  * Architected solutions resulting in 65% reduction in manual effort across critical pipelines.
  * Automated deployment and scaling processes for 100+ enterprise stores.
  * Maintained GRC standards across infrastructure upgrades.

- Software Developer @ Tata Consultancy Services (TCS) [July 2022 — May 2026]
  * Engineered ML predictive models achieving 85% accuracy.
  * Refactored core querying services delivering 30% speedup in retrieval.
  * Spearheaded 5M+ record cloud database migration with zero data loss.

SKILLS:
- Data & ML: Python, Scikit-learn, TensorFlow, SQL
- Cloud & DevOps: Azure (AZ-900 Certified), Jenkins, GitLab CI/CD
- Automation: Selenium, SAP GUI, n8n, Make.com
- AI Tools: GitHub Copilot, Claude Code, RAG, Prompt Engineering

EDUCATION & CERTIFICATIONS:
- Microsoft Certified: Azure Fundamentals (AZ-900)
- Bachelor of Engineering in Computer Science
    `;

    const blob = new Blob([resumeText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Anush_Rai_Resume.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in">
      <div className="glass-modal rounded-2xl max-w-3xl w-full max-h-[90vh] flex flex-col relative overflow-hidden">
        {/* Modal Header */}
        <div className="p-6 border-b border-white/10 flex justify-between items-center bg-[#1b1b25]">
          <div>
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-primary" />
              Anush Rai — Curriculum Vitae
            </h2>
            <p className="text-xs text-[#bbc9cf] mt-0.5">Software Engineer | Project Lead</p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => window.print()}
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
              title="Print Resume"
            >
              <Printer className="w-4 h-4" />
            </button>
            <button
              onClick={handleDownload}
              className="px-4 py-2 rounded-lg bg-primary text-[#003543] font-bold text-xs uppercase tracking-wider hover:bg-[#00d2ff] transition-all flex items-center gap-1.5 shadow-[0_0_15px_rgba(0,210,255,0.4)]"
            >
              <Download className="w-4 h-4" />
              Download
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors ml-2"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm text-[#bbc9cf]">
          {/* Header Summary */}
          <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex justify-between flex-wrap gap-4">
            <div>
              <p className="text-white font-bold text-base">Anush Rai</p>
              <p className="text-xs text-primary">{PERSONAL_INFO.title}</p>
              <p className="text-xs text-gray-400 mt-1">{PERSONAL_INFO.location} | {PERSONAL_INFO.email}</p>
            </div>
            <div className="text-right text-xs space-y-1">
              <p><strong className="text-white">Experience:</strong> 4+ Years</p>
              <p><strong className="text-white">Certification:</strong> Azure AZ-900</p>
              <p><strong className="text-white">Specialty:</strong> Automation & Data Pipelines</p>
            </div>
          </div>

          {/* Work Experience */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-primary mb-3 flex items-center gap-2">
              <Briefcase className="w-4 h-4" /> Work Experience
            </h3>
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-surface-variant/30 border border-white/5">
                <div className="flex justify-between items-start">
                  <h4 className="font-bold text-white">Project Lead</h4>
                  <span className="text-xs text-primary font-semibold">May 2026 — Present</span>
                </div>
                <p className="text-xs text-[#a5e7ff]">Tata Consultancy Services (TCS)</p>
                <ul className="mt-2 space-y-1 text-xs text-gray-300 list-disc list-inside">
                  <li>Architected automation solutions yielding <strong>65% reduction in manual effort</strong>.</li>
                  <li>Automated deployment & scaling for <strong>100+ enterprise stores</strong>.</li>
                  <li>Maintained strict Governance, Risk, & Compliance (GRC) infrastructure standards.</li>
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-surface-variant/30 border border-white/5">
                <div className="flex justify-between items-start">
                  <h4 className="font-bold text-white">Software Developer</h4>
                  <span className="text-xs text-gray-400">July 2022 — May 2026</span>
                </div>
                <p className="text-xs text-[#f6d1ff]">Tata Consultancy Services (TCS)</p>
                <ul className="mt-2 space-y-1 text-xs text-gray-300 list-disc list-inside">
                  <li>Engineered ML models achieving <strong>85% predictive accuracy</strong>.</li>
                  <li>Refactored query services delivering <strong>30% speed improvement</strong>.</li>
                  <li>Led zero-downtime database migration of <strong>5M+ records</strong>.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Key Skills */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-primary mb-3 flex items-center gap-2">
              <Award className="w-4 h-4" /> Core Technical Arsenal
            </h3>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-lg bg-white/5 border border-white/5">
                <strong className="text-white block mb-1">Data & Machine Learning</strong>
                Python, Scikit-learn, TensorFlow, SQL
              </div>
              <div className="p-3 rounded-lg bg-white/5 border border-white/5">
                <strong className="text-white block mb-1">Cloud & DevOps</strong>
                Azure (AZ-900), Jenkins, GitLab CI/CD
              </div>
              <div className="p-3 rounded-lg bg-white/5 border border-white/5">
                <strong className="text-white block mb-1">Automation</strong>
                Selenium, SAP GUI, n8n, Make.com
              </div>
              <div className="p-3 rounded-lg bg-white/5 border border-white/5">
                <strong className="text-white block mb-1">AI Tools</strong>
                GitHub Copilot, Claude Code, RAG, Prompt Engineering
              </div>
            </div>
          </div>

          {/* Honors & Awards */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-primary mb-3 flex items-center gap-2">
              <Award className="w-4 h-4 text-[#00fdee]" /> Key Honors & Awards
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 sm:col-span-2 bg-gradient-to-r from-white/10 to-[#00fdee]/10 border-[#00fdee]/30">
                <strong className="text-[#00fdee] block mb-0.5">Quarterly Best Performer Award</strong>
                <p className="text-[11px] text-[#bbc9cf]">Led developer team delivering complex Excel & SAP automation, transforming business requirements into scalable intelligent solutions.</p>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <strong className="text-white block mb-0.5">Spotlight Award</strong>
                <p className="text-[11px] text-[#bbc9cf]">Recognized for translating technical analyses into business insights for senior stakeholders.</p>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <strong className="text-white block mb-0.5">"Above & Beyond" Initiative Award</strong>
                <p className="text-[11px] text-[#bbc9cf]">Led root-cause analysis stabilizing critical production systems and preventing revenue incidents.</p>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <strong className="text-white block mb-0.5">Team Collaboration Star</strong>
                <p className="text-[11px] text-[#bbc9cf]">Mentored junior developers and closed skill gaps within engineering teams.</p>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <strong className="text-white block mb-0.5">GEM Award</strong>
                <p className="text-[11px] text-[#bbc9cf]">Delivered high-performance analytics project ahead of schedule with top code quality.</p>
              </div>
            </div>
          </div>

          {/* Education & Certifications */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-primary mb-2 flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-[#e9aaff]" /> Certifications & Upskilling
            </h3>
            <div className="text-xs space-y-1.5 text-gray-300">
              <p>• <strong>Certified AI-Powered Data Analytics Specialist</strong> — be10x (2026)</p>
              <p>• <strong>Certified AI Office & Productivity Specialist</strong> — be10x (2026)</p>
              <p>• <strong>AI Tools Workshop Certificate</strong> — be10x (2026)</p>
              <p>• <strong>Microsoft Certified: Azure Fundamentals (AZ-900)</strong> — Microsoft (2023)</p>
              <p>• <strong>Machine Learning Foundations (Classification Modeling)</strong> — LinkedIn Learning</p>
              <p>• <strong>NLP with Python for Machine Learning</strong> — Udemy</p>
              <p>• <strong>Python Data Structures & Algorithms</strong> — Coursera</p>
              <p>• <strong>Bachelor of Engineering:</strong> Computer Science Engineering</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-white/10 bg-[#1b1b25] flex justify-between items-center text-xs">
          <span className="text-gray-400">© 2024 Anush Rai. All rights reserved.</span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white font-bold"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
