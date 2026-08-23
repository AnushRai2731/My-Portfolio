import React, { useState } from 'react';
import { motion } from 'motion/react';
import { EXPERIENCES } from '../data/portfolioData';
import { TrendingUp, Store, ShieldCheck, Cpu, Database, RefreshCw, Sparkles, CheckCircle2, X } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  const [selectedExpId, setSelectedExpId] = useState<string | null>(null);

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'insights':
        return <TrendingUp className="w-5 h-5 text-[#ff6b81]" />;
      case 'storefront':
        return <Store className="w-5 h-5 text-[#ff6b81]" />;
      case 'shield_locked':
        return <ShieldCheck className="w-5 h-5 text-[#ff6b81]" />;
      case 'model_training':
        return <Cpu className="w-5 h-5 text-[#00fdee]" />;
      case 'database':
        return <Database className="w-5 h-5 text-[#00fdee]" />;
      case 'swap_driving_apps_wheel':
        return <RefreshCw className="w-5 h-5 text-[#00fdee]" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-[#00fdee]" />;
    }
  };

  return (
    <section id="experience" className="py-24 max-w-[1280px] mx-auto px-6 overflow-hidden">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="mb-16"
      >
        <h2 className="font-display text-4xl sm:text-5xl font-bold inline-block pb-2 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-[#00fdee] to-[#c084fc] mb-2">
          Professional Trajectory
        </h2>
        <p className="font-sans text-base sm:text-lg text-[#94A3B8] max-w-2xl leading-relaxed">
          A chronicle of engineering impact, highlighting milestones in automation, machine learning architecture, and large-scale system migrations.
        </p>
      </motion.div>

      {/* Experience Timeline */}
      <div className="relative w-full">
        {/* Vertical Timeline Line */}
        <div className="absolute left-[15px] sm:left-[31px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-[#00d2ff] to-[#c084fc] opacity-40 rounded-full hidden sm:block" />

        <div className="flex flex-col gap-12 md:gap-16">
          {EXPERIENCES.map((exp, idx) => {
            const isPrimary = exp.colorTheme === 'primary';
            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.15, ease: 'easeOut' }}
                className="relative flex flex-col sm:flex-row gap-8 sm:gap-12 group"
              >
                {/* Node Indicator */}
                <div className="hidden sm:flex flex-shrink-0 relative z-10 w-16 h-16 items-start justify-center pt-2">
                  <div
                    className={`w-4 h-4 rounded-full ${
                      isPrimary
                        ? 'bg-[#00d2ff] shadow-[0_0_20px_rgba(0,210,255,0.9)]'
                        : 'bg-[#f6d1ff] shadow-[0_0_20px_rgba(246,209,255,0.8)]'
                    } group-hover:scale-150 transition-transform duration-500 ease-out`}
                  />
                </div>

                {/* Content Glass Card */}
                <div
                  className="flex-grow glass-card glass-card-hover rounded-2xl p-8 relative overflow-hidden group"
                >
                  {/* Background Glow */}
                  <div
                    className={`absolute -right-20 -top-20 w-48 h-48 ${
                      isPrimary ? 'bg-[#00d2ff]/10' : 'bg-[#e9aaff]/10'
                    } blur-3xl rounded-full pointer-events-none group-hover:opacity-100 transition-opacity duration-500`}
                  />

                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4 border-b border-white/5 pb-4">
                    <div>
                      <h3 className="font-display text-2xl font-bold text-white mb-1">
                        {exp.role}
                      </h3>
                      <p className={`font-sans font-semibold ${isPrimary ? 'text-[#a5e7ff]' : 'text-[#f6d1ff]'}`}>
                        {exp.company}
                      </p>
                    </div>

                    <div className="inline-flex items-center px-4 py-2 rounded-full border border-white/15 bg-white/5 font-mono text-xs text-[#94A3B8] font-bold w-fit">
                      {exp.period}
                    </div>
                  </div>

                  <ul className="space-y-4 font-sans text-sm sm:text-base text-[#94A3B8] leading-relaxed relative z-10">
                    {exp.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="mt-1 flex-shrink-0">{renderIcon(h.icon)}</span>
                        <span>
                          {h.text.split(h.boldText)[0]}
                          <strong className="text-white font-semibold underline decoration-[#22D3EE]/40 underline-offset-4">
                            {h.boldText}
                          </strong>
                          {h.text.split(h.boldText)[1]}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 pt-4 flex justify-end">
                    <button
                      onClick={() => setSelectedExpId(exp.id)}
                      className="text-xs font-bold uppercase tracking-wider text-[#22D3EE] hover:text-white transition-colors flex items-center gap-1 cursor-pointer"
                    >
                      <span>View Detailed Highlights & Scope</span>
                      <Sparkles className="w-3.5 h-3.5 text-[#00fdee]" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Role Detail Modal */}
      {selectedExpId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in">
          <div className="glass-modal rounded-2xl p-7 max-w-xl w-full shadow-2xl relative border border-white/15">
            <button
              onClick={() => setSelectedExpId(null)}
              className="absolute top-5 right-5 text-gray-400 hover:text-white p-1 rounded-lg"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>
            {selectedExpId === 'exp-1' ? (
              <div>
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#22D3EE]">
                  Current Role Scope
                </span>
                <h3 className="font-display text-2xl font-bold text-white mt-1">Project Lead @ TCS</h3>
                <p className="font-sans text-sm text-[#CBD5E1] mt-3 leading-relaxed">
                  Leading multi-disciplinary engineering squads across cloud automation, retail store provisioning pipelines, and enterprise GRC compliance controls.
                </p>
                <div className="mt-4 p-4 rounded-xl bg-white/[0.04] border border-white/[0.08] space-y-2.5 text-xs text-[#CBD5E1] font-sans">
                  <p>• Automated provisioning pipeline scaling across 100+ stores using custom Python & Azure infrastructure scripts.</p>
                  <p>• Engineered zero-trust compliance gates reducing audit cycles by 65%.</p>
                  <p>• Mentored junior developers and established automated CI/CD deployment standards.</p>
                </div>
              </div>
            ) : (
              <div>
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#A78BFA]">
                  Milestones & Engineering Scope
                </span>
                <h3 className="font-display text-2xl font-bold text-white mt-1">Software Developer @ TCS</h3>
                <p className="font-sans text-sm text-[#CBD5E1] mt-3 leading-relaxed">
                  Specialized in core data services refactoring, ML model training, and massive database migrations.
                </p>
                <div className="mt-4 p-4 rounded-xl bg-white/[0.04] border border-white/[0.08] space-y-2.5 text-xs text-[#CBD5E1] font-sans">
                  <p>• Built ML predictive sorting algorithms with Scikit-learn reaching 85% validation accuracy.</p>
                  <p>• Refactored heavy SQL querying services, lowering query latency by 30%.</p>
                  <p>• Managed zero-downtime ETL migration of 5M+ records into unified cloud storage.</p>
                </div>
              </div>
            )}
            <button
              onClick={() => setSelectedExpId(null)}
              className="mt-6 w-full py-2.5 rounded-xl bg-[#22D3EE]/20 text-[#22D3EE] border border-[#22D3EE]/40 font-bold text-xs uppercase tracking-wider hover:bg-[#22D3EE]/30 transition-colors"
            >
              Close Window
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
