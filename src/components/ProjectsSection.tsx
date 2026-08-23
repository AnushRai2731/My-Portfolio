import React, { useState } from 'react';
import { motion } from 'motion/react';
import { PROJECTS } from '../data/portfolioData';
import { Brain, ArrowUpRight, TrendingUp, CheckCircle, Wallet, Zap, Package, Layers } from 'lucide-react';

interface ProjectsSectionProps {
  onOpenSopAnalyzer: () => void;
  onOpenTicketEngine: () => void;
  onOpenPipelineModal: (title: string, detail: string) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  onOpenSopAnalyzer,
  onOpenTicketEngine,
  onOpenPipelineModal,
}) => {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Automation' | 'AI / ML' | 'Analytics'>('All');

  const renderProjectIcon = (iconName: string) => {
    switch (iconName) {
      case 'psychology':
        return <Brain className="w-6 h-6 text-[#22D3EE]" />;
      case 'alt_route':
        return <TrendingUp className="w-6 h-6 text-[#38BDF8]" />;
      case 'account_balance_wallet':
        return <Wallet className="w-6 h-6 text-[#22D3EE]" />;
      case 'bolt':
        return <Zap className="w-6 h-6 text-[#F472B6]" />;
      case 'inventory_2':
        return <Package className="w-6 h-6 text-[#22D3EE]" />;
      default:
        return <Layers className="w-6 h-6 text-[#22D3EE]" />;
    }
  };

  const handleAction = (projId: string) => {
    if (projId === 'sop-analyzer') {
      onOpenSopAnalyzer();
    } else if (projId === 'ticket-engine') {
      onOpenTicketEngine();
    } else if (projId === 'sap-excel-automation') {
      onOpenPipelineModal(
        'Enterprise SAP & Excel Automation Engine Architecture',
        'Built with Python (win32com/Excel COM & SAP GUI Scripting API), this engine automates complex cross-system reconciliation, scheduled batch extractions, and transactional ERP data updates across 100+ stores with multi-layered error recovery.'
      );
    } else if (projId === 'aistudio-stitch-suite') {
      onOpenPipelineModal(
        'Full-Stack AI Application Suite (Google AI Studio & Stitch)',
        'Combines Stitch frontend components with Google AI Studio server-side Gemini 2.5/Flash APIs for production-grade, streaming AI interfaces.'
      );
    } else if (projId === 'ai-expense-tracker') {
      onOpenPipelineModal(
        'Autonomous Expense Tracker Agent (n8n & OpenAI)',
        'Autonomous multi-node agent orchestrated via n8n with OpenAI Vision and LLMs, connected to Google Sheets DB and automated Gmail notification hooks.'
      );
    } else if (projId === 'make-gemini-pipeline') {
      onOpenPipelineModal(
        'Real-Time Gemini Flash Automation Pipeline (Make.com)',
        'Low-latency Make.com visual pipeline executing sub-500ms Gemini Flash classification and structured JSON transformation into downstream enterprise tools.'
      );
    }
  };

  const filteredProjects = PROJECTS.filter((proj) => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Automation') {
      return proj.tags.some((t) => ['RPA', 'SAP GUI SCRIPTING', 'N8N AGENT', 'MAKE.COM'].includes(t));
    }
    if (activeFilter === 'AI / ML') {
      return proj.tags.some((t) => ['RAG ARCHITECTURE', 'GPT-4', 'NLP', 'GOOGLE AI STUDIO', 'GEMINI FLASH 2.5'].includes(t));
    }
    if (activeFilter === 'Analytics') {
      return proj.tags.some((t) => ['SCIKIT-LEARN', 'TF-IDF', 'PYTHON'].includes(t));
    }
    return true;
  });

  return (
    <section id="projects" className="py-24 max-w-[1280px] mx-auto px-6 overflow-hidden">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6"
      >
        <div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold inline-block pb-2 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-[#00fdee] to-[#c084fc] mb-2">
            Featured Engineering Work
          </h2>
          <p className="font-sans text-base sm:text-lg text-[#94A3B8] max-w-2xl leading-relaxed">
            A showcase of technical architecture, machine learning implementations, and automated workflows designed to solve complex operational challenges.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="relative group/tab-container flex flex-wrap items-center gap-2 bg-white/5 backdrop-blur-md p-1.5 rounded-2xl border border-white/10 w-fit transition-all duration-300 hover:border-white/20">
          <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_50%_50%,var(--color-primary)_0%,transparent_75%)] opacity-0 group-hover/tab-container:opacity-15 transition-opacity duration-500 pointer-events-none"></div>
          <div className="relative z-10 px-2.5 py-1 text-xs text-[#94A3B8] font-medium flex items-center gap-1.5 border-r border-white/10">
            <span className="hidden sm:inline">Filter:</span>
          </div>
          {(['All', 'Automation', 'AI / ML', 'Analytics'] as const).map((filter) => {
            const isActive = activeFilter === filter;
            return (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`relative px-4 py-2 rounded-xl text-xs font-bold transition-all duration-300 cursor-pointer group/tab overflow-visible ${
                  isActive
                    ? 'bg-gradient-to-r from-[#00d2ff] to-[#00fdee] text-[#003543] shadow-[0_0_20px_rgba(0,210,255,0.45)] border border-[#00fdee]/40 font-bold'
                    : 'text-[#94A3B8] hover:text-white hover:bg-white/10 border border-transparent hover:border-[#00d2ff]/30 hover:shadow-[0_4px_20px_rgba(0,210,255,0.3)]'
                }`}
              >
                <span className="absolute inset-0 rounded-xl bg-[radial-gradient(circle_at_50%_50%,var(--color-primary)_0%,transparent_70%)] opacity-0 group-hover/tab:opacity-20 transition-opacity duration-300 pointer-events-none"></span>
                <span className="relative z-10">{filter}</span>
                {isActive && (
                  <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-4/5 h-[3px] bg-gradient-to-r from-[#00d2ff] via-[#00fdee] to-[#c084fc] rounded-full blur-[1px] shadow-[0_0_12px_#00fdee]"></span>
                )}
                {!isActive && (
                  <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-[#00d2ff] to-[#00fdee] rounded-full blur-[1px] opacity-0 group-hover/tab:opacity-100 group-hover/tab:w-3/4 transition-all duration-300 shadow-[0_0_10px_rgba(0,210,255,0.8)]"></span>
                )}
              </button>
            );
          })}
        </div>
      </motion.div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((proj, idx) => {
          const isFeatured = proj.isFeatured && activeFilter === 'All';
          return (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: 'easeOut' }}
              className={`glass-card rounded-3xl p-8 flex flex-col justify-between border border-white/10 transition-all duration-500 relative overflow-hidden group/card ${
                isFeatured
                  ? 'md:col-span-2 bg-gradient-to-br from-white/10 via-white/5 to-[#00d2ff]/10 border-[#00d2ff]/40 shadow-[0_0_35px_rgba(0,210,255,0.18)] hover:border-[#00fdee] hover:shadow-[0_20px_50px_rgba(0,210,255,0.3)]'
                  : 'hover:border-[#00d2ff]/50 hover:shadow-[0_20px_45px_rgba(0,210,255,0.22)]'
              }`}
            >
              <div className="absolute -bottom-16 inset-x-8 h-32 bg-gradient-to-r from-[#00d2ff]/25 via-[#00fdee]/35 to-[#c084fc]/25 rounded-full blur-2xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-white/[0.05] via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              <div className="absolute bottom-0 inset-x-12 h-[2px] bg-gradient-to-r from-transparent via-[#00fdee] to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 shadow-[0_0_12px_#00fdee] pointer-events-none"></div>

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-4 gap-4">
                  <h3
                    className={`font-display font-bold transition-colors duration-300 group-hover/card:text-white ${
                      isFeatured ? 'text-3xl' : 'text-2xl'
                    }`}
                  >
                    {proj.title}
                  </h3>
                  <div className="p-2.5 rounded-2xl bg-white/5 border border-white/10 flex-shrink-0 shadow-inner group-hover/card:border-[#00fdee]/40 group-hover/card:bg-white/10 transition-all duration-300">
                    {renderProjectIcon(proj.icon)}
                  </div>
                </div>

                <p className="text-[#94A3B8] font-sans text-sm sm:text-base leading-relaxed mb-6">
                  {proj.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {proj.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-white/5 border border-white/10 text-[#00fdee] group-hover/card:border-[#00fdee]/30 transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer / Metrics / Action Button */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 mt-auto relative z-10">
                {proj.impactMetric && (
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-[#00fdee]" />
                    <span className="text-xs font-bold uppercase tracking-wider text-[#00fdee]">
                      {proj.impactMetric.label}:
                    </span>
                    <span className="text-white font-bold text-sm">
                      {proj.impactMetric.value}
                    </span>
                  </div>
                )}

                {proj.accuracyMetric && (
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#c7d2fe]" />
                    <span className="text-xs font-bold uppercase tracking-wider text-[#c7d2fe]">
                      ACCURACY:
                    </span>
                    <span className="text-white font-bold text-base">
                      {proj.accuracyMetric}
                    </span>
                  </div>
                )}

                <button
                  onClick={() => handleAction(proj.id)}
                  className="text-xs font-bold uppercase tracking-wider text-[#00fdee] hover:text-white transition-all duration-300 flex items-center gap-1.5 group/btn cursor-pointer ml-auto px-3.5 py-1.5 rounded-xl bg-[#00fdee]/10 hover:bg-[#00fdee]/20 border border-[#00fdee]/30 hover:border-[#00fdee]/60 hover:shadow-[0_0_15px_rgba(0,253,238,0.35)]"
                >
                  <span>{proj.actionText || 'VIEW DETAILS'}</span>
                  <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform text-[#00fdee]" />
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

