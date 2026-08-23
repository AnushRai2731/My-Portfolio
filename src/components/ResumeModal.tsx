import React from 'react';
import { Download, X, Printer, Award, Briefcase, GraduationCap } from 'lucide-react';
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
      <div className="glass-modal rounded-2xl max-w-3xl w-full max-h-[90vh] flex flex-col relative overflow-hidden border border-white/[0.08] shadow-2xl">
        {/* Modal Header */}
        <div className="p-6 border-b border-white/[0.08] flex justify-between items-center bg-[#0D1321]">
          <div>
            <h2 className="font-display text-xl font-bold text-white flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-[#22D3EE]" />
              Anush Rai — Curriculum Vitae
            </h2>
            <p className="font-sans text-xs text-[#94A3B8] mt-0.5">Software Engineer | Project Lead</p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => window.print()}
              className="p-2 rounded-xl bg-white/[0.04] border border-white/[0.08] text-[#CBD5E1] hover:text-white hover:bg-white/[0.08] transition-colors cursor-pointer"
              title="Print Resume"
              aria-label="Print Resume"
            >
              <Printer className="w-4 h-4" />
            </button>
            <button
              onClick={handleDownload}
              className="px-4 py-2 rounded-xl bg-[#22D3EE] text-[#070B14] font-bold text-xs uppercase tracking-wider hover:bg-[#38BDF8] transition-all flex items-center gap-1.5 shadow-[0_0_15px_rgba(34,211,238,0.4)] cursor-pointer"
            >
              <Download className="w-4 h-4" />
              Download
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-[#94A3B8] hover:text-white hover:bg-white/[0.08] transition-colors ml-2 cursor-pointer"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm text-[#CBD5E1]">
          {/* Header Summary */}
          <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08] flex justify-between flex-wrap gap-4">
            <div>
              <p className="font-display text-white font-bold text-base">Anush Rai</p>
              <p className="font-sans text-xs text-[#22D3EE] font-medium">{PERSONAL_INFO.title}</p>
              <p className="font-mono text-xs text-[#94A3B8] mt-1">{PERSONAL_INFO.location} | {PERSONAL_INFO.email}</p>
            </div>
            <div className="text-right text-xs font-mono space-y-1 text-[#CBD5E1]">
              <p><strong className="text-white font-sans">Experience:</strong> 4+ Years</p>
              <p><strong className="text-white font-sans">Certification:</strong> Azure AZ-900</p>
              <p><strong className="text-white font-sans">Specialty:</strong> Automation & Data Pipelines</p>
            </div>
          </div>

          {/* Work Experience */}
          <div>
            <h3 className="font-display text-xs font-bold uppercase tracking-wider text-[#22D3EE] mb-3 flex items-center gap-2">
              <Briefcase className="w-4 h-4" /> Work Experience
            </h3>
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <div className="flex justify-between items-start">
                  <h4 className="font-display font-bold text-white">Project Lead</h4>
                  <span className="font-mono text-xs text-[#22D3EE] font-semibold">May 2026 — Present</span>
                </div>
                <p className="font-sans text-xs text-[#38BDF8]">Tata Consultancy Services (TCS)</p>
                <ul className="mt-2 space-y-1 font-sans text-xs text-[#CBD5E1] list-disc list-inside">
                  <li>Architected automation solutions yielding <strong className="text-white font-mono">65% reduction in manual effort</strong>.</li>
                  <li>Automated deployment & scaling for <strong className="text-white font-mono">100+ enterprise stores</strong>.</li>
                  <li>Maintained strict Governance, Risk, & Compliance (GRC) infrastructure standards.</li>
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <div className="flex justify-between items-start">
                  <h4 className="font-display font-bold text-white">Software Developer</h4>
                  <span className="font-mono text-xs text-[#94A3B8]">July 2022 — May 2026</span>
                </div>
                <p className="font-sans text-xs text-[#A78BFA]">Tata Consultancy Services (TCS)</p>
                <ul className="mt-2 space-y-1 font-sans text-xs text-[#CBD5E1] list-disc list-inside">
                  <li>Engineered ML models achieving <strong className="text-white font-mono">85% predictive accuracy</strong>.</li>
                  <li>Refactored query services delivering <strong className="text-white font-mono">30% speed improvement</strong>.</li>
                  <li>Led zero-downtime database migration of <strong className="text-white font-mono">5M+ records</strong>.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Key Skills */}
          <div>
            <h3 className="font-display text-xs font-bold uppercase tracking-wider text-[#22D3EE] mb-3 flex items-center gap-2">
              <Award className="w-4 h-4" /> Core Technical Arsenal
            </h3>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                <strong className="text-white font-display block mb-1">Data & Machine Learning</strong>
                <span className="font-mono text-[11px] text-[#CBD5E1]">Python, Scikit-learn, TensorFlow, SQL</span>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                <strong className="text-white font-display block mb-1">Cloud & DevOps</strong>
                <span className="font-mono text-[11px] text-[#CBD5E1]">Azure (AZ-900), Jenkins, GitLab CI/CD</span>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                <strong className="text-white font-display block mb-1">Automation</strong>
                <span className="font-mono text-[11px] text-[#CBD5E1]">Selenium, SAP GUI, n8n, Make.com</span>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                <strong className="text-white font-display block mb-1">AI Tools</strong>
                <span className="font-mono text-[11px] text-[#CBD5E1]">GitHub Copilot, Claude Code, RAG, Prompt Engineering</span>
              </div>
            </div>
          </div>

          {/* Honors & Awards */}
          <div>
            <h3 className="font-display text-xs font-bold uppercase tracking-wider text-[#22D3EE] mb-3 flex items-center gap-2">
              <Award className="w-4 h-4 text-[#A78BFA]" /> Key Honors & Awards
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-white/[0.03] border border-[#22D3EE]/30 sm:col-span-2 bg-gradient-to-r from-white/[0.04] to-[#22D3EE]/10">
                <strong className="text-[#38BDF8] font-display block mb-0.5">Quarterly Best Performer Award</strong>
                <p className="font-sans text-[11px] text-[#CBD5E1]">Led developer team delivering complex Excel & SAP automation, transforming business requirements into scalable intelligent solutions.</p>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                <strong className="text-white font-display block mb-0.5">Spotlight Award</strong>
                <p className="font-sans text-[11px] text-[#CBD5E1]">Recognized for translating technical analyses into business insights for senior stakeholders.</p>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                <strong className="text-white font-display block mb-0.5">"Above & Beyond" Initiative Award</strong>
                <p className="font-sans text-[11px] text-[#CBD5E1]">Led root-cause analysis stabilizing critical production systems and preventing revenue incidents.</p>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                <strong className="text-white font-display block mb-0.5">Team Collaboration Star</strong>
                <p className="font-sans text-[11px] text-[#CBD5E1]">Mentored junior developers and closed skill gaps within engineering teams.</p>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                <strong className="text-white font-display block mb-0.5">GEM Award</strong>
                <p className="font-sans text-[11px] text-[#CBD5E1]">Delivered high-performance analytics project ahead of schedule with top code quality.</p>
              </div>
            </div>
          </div>

          {/* Education & Certifications */}
          <div>
            <h3 className="font-display text-xs font-bold uppercase tracking-wider text-[#22D3EE] mb-2 flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-[#A78BFA]" /> Certifications & Upskilling
            </h3>
            <div className="font-sans text-xs space-y-1.5 text-[#CBD5E1]">
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
        <div className="p-4 border-t border-white/[0.08] bg-[#0D1321] flex justify-between items-center text-xs">
          <span className="font-sans text-[#94A3B8]">© 2026 Anush Rai. All rights reserved.</span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-white/[0.08] hover:bg-white/[0.12] text-white font-semibold cursor-pointer transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
