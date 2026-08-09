import React from 'react';
import { motion } from 'motion/react';
import { PROJECTS } from '../data/portfolioData';
import { Brain, ArrowRight, TrendingUp, CheckCircle, Wallet, Zap, Lock, Package } from 'lucide-react';

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
  const renderProjectIcon = (iconName: string) => {
    switch (iconName) {
      case 'psychology':
        return <Brain className="w-8 h-8 text-[#00d2ff]" />;
      case 'alt_route':
        return <TrendingUp className="w-8 h-8 text-[#f6d1ff]" />;
      case 'account_balance_wallet':
        return <Wallet className="w-8 h-8 text-[#00d2ff]" />;
      case 'bolt':
        return <Zap className="w-8 h-8 text-[#00fdee]" />;
      case 'inventory_2':
        return <Package className="w-8 h-8 text-[#f6d1ff]" />;
      default:
        return <Zap className="w-8 h-8 text-primary" />;
    }
  };

  const handleAction = (projId: string, title: string) => {
    if (projId === 'sop-analyzer') {
      onOpenSopAnalyzer();
    } else if (projId === 'ticket-engine') {
      onOpenTicketEngine();
    } else if (projId === 'expense-tracker') {
      onOpenPipelineModal(
        'AI Agent Expense Tracker Architecture',
        'System uses n8n webhook triggers connected to OpenAI GPT Vision & OCR models to extract receipt line items, perform line-item reconciliation against ERP database, and post structured JSON accounting entries.'
      );
    } else if (projId === 'workflow-automation') {
      onOpenPipelineModal(
        'Make.com + Gemini Flash Workflow Pipeline',
        'Orchestrates multi-channel incoming REST webhooks, routes structured payloads through Gemini Flash for 200ms text classification, and executes automated multi-API downstream updates.'
      );
    } else {
      onOpenPipelineModal(
        'WesHealth Replenishment (Enterprise Internal)',
        'Legacy SAP GUI automation script written in Python with robust exception handlers, automated purchase order re-orders, and stock depletion forecast calculation.'
      );
    }
  };

  return (
    <section id="projects" className="py-24 max-w-[1200px] mx-auto px-6 overflow-hidden">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="mb-16"
      >
        <h2 className="font-headline-lg text-4xl sm:text-5xl font-bold inline-block pb-2 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-primary to-[#00fdee] mb-4">
          Engineering Solutions
        </h2>
        <p className="font-body-lg text-lg text-[#bbc9cf] max-w-2xl leading-relaxed">
          A showcase of technical architecture, machine learning implementations, and automated workflows designed to solve complex operational challenges with precision.
        </p>
      </motion.div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PROJECTS.map((proj, idx) => {
          const isFeatured = proj.isFeatured;
          return (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.12, ease: 'easeOut' }}
              className={`glass-card glass-card-hover rounded-2xl p-8 flex flex-col justify-between ${
                isFeatured ? 'md:col-span-2 bg-gradient-to-br from-white/10 via-white/5 to-[#00d2ff]/10' : ''
              }`}
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <h3
                    className={`font-headline-lg font-bold text-white ${
                      isFeatured ? 'text-3xl' : 'text-2xl'
                    }`}
                  >
                    {proj.title}
                  </h3>
                  {renderProjectIcon(proj.icon)}
                </div>

                <p className="text-[#bbc9cf] font-body-md text-sm sm:text-base leading-relaxed mb-6">
                  {proj.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {proj.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#003543]/40 border border-[#00d2ff]/30 text-[#a5e7ff]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer / Metrics / Action */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 mt-auto">
                {proj.impactMetric && (
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-[#00fdee]" />
                    <span className="text-xs font-bold uppercase tracking-wider text-[#00fdee]">
                      {proj.impactMetric.label}
                    </span>
                    <span className="text-white font-bold text-sm">
                      {proj.impactMetric.value}
                    </span>
                  </div>
                )}

                {proj.accuracyMetric && (
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#f6d1ff]" />
                    <span className="text-xs font-bold uppercase tracking-wider text-[#f6d1ff]">
                      Accuracy:
                    </span>
                    <span className="text-white font-bold text-lg">
                      {proj.accuracyMetric}
                    </span>
                  </div>
                )}

                {proj.isInternal ? (
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#859399] uppercase tracking-wider ml-auto">
                    <Lock className="w-3.5 h-3.5" />
                    Enterprise Internal
                  </div>
                ) : (
                  <button
                    onClick={() => handleAction(proj.id, proj.title)}
                    className="text-xs font-bold uppercase tracking-wider text-primary hover:text-[#00fdee] transition-colors flex items-center gap-1.5 group cursor-pointer ml-auto"
                  >
                    <span>{proj.actionText || 'View Details'}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
