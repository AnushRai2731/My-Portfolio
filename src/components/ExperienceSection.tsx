import React, { useState } from 'react';
import { motion } from 'motion/react';
import { EXPERIENCES } from '../data/portfolioData';
import { TrendingUp, Store, ShieldCheck, Cpu, Database, RefreshCw, Sparkles, CheckCircle2 } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  const [selectedExpId, setSelectedExpId] = useState<string | null>(null);

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'insights':
        return <TrendingUp className="w-5 h-5 text-[#ecb2ff]" />;
      case 'storefront':
        return <Store className="w-5 h-5 text-[#ecb2ff]" />;
      case 'shield_locked':
        return <ShieldCheck className="w-5 h-5 text-[#ecb2ff]" />;
      case 'model_training':
        return <Cpu className="w-5 h-5 text-[#47d6ff]" />;
      case 'database':
        return <Database className="w-5 h-5 text-[#47d6ff]" />;
      case 'swap_driving_apps_wheel':
        return <RefreshCw className="w-5 h-5 text-[#47d6ff]" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-primary" />;
    }
  };

  return (
    <section id="experience" className="py-24 max-w-[1200px] mx-auto px-6 overflow-hidden">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="mb-16"
      >
        <h2 className="font-headline-lg text-4xl sm:text-5xl font-bold inline-block pb-2 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-primary to-[#bbc9cf] mb-4">
          Professional Trajectory
        </h2>
        <p className="font-body-lg text-lg text-[#bbc9cf] max-w-2xl leading-relaxed">
          A chronicle of engineering impact, highlighting milestones in automation, machine learning architecture, and large-scale system migrations.
        </p>
      </motion.div>

      {/* Experience Timeline */}
      <div className="relative w-full">
        {/* Vertical Timeline Line */}
        <div className="absolute left-[15px] md:left-[31px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-[#a5e7ff] to-[#f6d1ff] opacity-40 rounded-full hidden sm:block" />

        <div className="flex flex-col gap-12 md:gap-16">
          {EXPERIENCES.map((exp, idx) => {
            const isPrimary = exp.colorTheme === 'primary';
            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: idx * 0.15, ease: 'easeOut' }}
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
                  {/* Subtle Background Glow */}
                  <div
                    className={`absolute -right-20 -top-20 w-48 h-48 ${
                      isPrimary ? 'bg-[#00d2ff]/10' : 'bg-[#e9aaff]/10'
                    } blur-3xl rounded-full pointer-events-none group-hover:opacity-100 transition-opacity duration-500`}
                  />

                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4 border-b border-white/5 pb-4">
                    <div>
                      <h3 className="font-headline-lg text-2xl font-bold text-white mb-1">
                        {exp.role}
                      </h3>
                      <p className={`font-body-md font-semibold ${isPrimary ? 'text-[#a5e7ff]' : 'text-[#f6d1ff]'}`}>
                        {exp.company}
                      </p>
                    </div>

                    <div className="inline-flex items-center px-4 py-2 rounded-full border border-[#3c494e]/60 bg-[#34343f]/30 font-label-caps text-xs text-[#bbc9cf] font-bold w-fit">
                      {exp.period}
                    </div>
                  </div>

                  <ul className="space-y-4 font-body-md text-[#bbc9cf] leading-relaxed relative z-10">
                    {exp.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="mt-1 flex-shrink-0">{renderIcon(h.icon)}</span>
                        <span>
                          {h.text.split(h.boldText)[0]}
                          <strong className="text-white font-semibold underline decoration-primary/40 underline-offset-4">
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
                      className="text-xs font-bold uppercase tracking-wider text-primary hover:text-white transition-colors flex items-center gap-1 cursor-pointer"
                    >
                      View Detailed Highlights & Scope
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
          <div className="bg-[#13121c] border border-white/20 rounded-2xl p-8 max-w-xl w-full shadow-2xl relative">
            <button
              onClick={() => setSelectedExpId(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl font-bold p-2"
            >
              ✕
            </button>
            {selectedExpId === 'exp-1' ? (
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#00d2ff]">
                  Current Role Scope
                </span>
                <h3 className="text-2xl font-bold text-white mt-1">Project Lead @ TCS</h3>
                <p className="text-sm text-[#bbc9cf] mt-3 leading-relaxed">
                  Leading multi-disciplinary engineering squads across cloud automation, retail store provisioning pipelines, and enterprise GRC compliance controls.
                </p>
                <div className="mt-4 p-4 rounded-xl bg-white/5 border border-white/10 space-y-2 text-xs text-gray-300">
                  <p>• Automated provisioning pipeline scaling across 100+ stores using custom Python & Azure infrastructure scripts.</p>
                  <p>• Engineered zero-trust compliance gates reducing audit cycles by 65%.</p>
                  <p>• Mentored junior developers and established automated CI/CD deployment standards.</p>
                </div>
              </div>
            ) : (
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#e9aaff]">
                  Milestones & Engineering Scope
                </span>
                <h3 className="text-2xl font-bold text-white mt-1">Software Developer @ TCS</h3>
                <p className="text-sm text-[#bbc9cf] mt-3 leading-relaxed">
                  Specialized in core data services refactoring, ML model training, and massive database migrations.
                </p>
                <div className="mt-4 p-4 rounded-xl bg-white/5 border border-white/10 space-y-2 text-xs text-gray-300">
                  <p>• Built ML predictive sorting algorithms with Scikit-learn reaching 85% validation accuracy.</p>
                  <p>• Refactored heavy SQL querying services, lowering query latency by 30%.</p>
                  <p>• Managed zero-downtime ETL migration of 5M+ records into unified cloud storage.</p>
                </div>
              </div>
            )}
            <button
              onClick={() => setSelectedExpId(null)}
              className="mt-6 w-full py-2.5 rounded-xl bg-primary/20 text-primary border border-primary/40 font-bold text-xs uppercase tracking-wider hover:bg-primary/30"
            >
              Close Window
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
