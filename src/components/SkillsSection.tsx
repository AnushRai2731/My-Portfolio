import React, { useState } from 'react';
import { motion } from 'motion/react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Database, Cloud, RefreshCw, Bot, Sparkles, Check } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  const renderCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'database':
        return <Database className="w-5 h-5 text-[#22D3EE]" />;
      case 'cloud':
        return <Cloud className="w-5 h-5 text-[#A78BFA]" />;
      case 'autorenew':
        return <RefreshCw className="w-5 h-5 text-[#38BDF8]" />;
      case 'smart_toy':
        return <Bot className="w-5 h-5 text-[#F472B6]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#22D3EE]" />;
    }
  };

  const filterTabs = [
    { id: 'all', label: 'All Skills' },
    { id: 'ai-development', label: 'AI Development & Platforms' },
    { id: 'data-ml', label: 'Data Analytics & ML' },
    { id: 'automation', label: 'Automation & Integration' },
    { id: 'cloud-devops', label: 'Development & DevOps' },
  ];

  const filteredCategories =
    activeFilter === 'all'
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((c) => c.id === activeFilter);

  return (
    <section id="skills" className="py-24 max-w-[1280px] mx-auto px-6 overflow-hidden">
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
            Technical Arsenal
          </h2>
          <p className="font-sans text-base sm:text-lg text-[#94A3B8] max-w-2xl leading-relaxed">
            A curated stack of tools, models, and frameworks engineered for building scalable intelligence and automated pipelines.
          </p>
        </div>

        {/* Filter Chips */}
        <div className="flex flex-wrap gap-2">
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-[#00d2ff] to-[#00fdee] text-[#003543] shadow-[0_0_15px_rgba(0,210,255,0.4)]'
                    : 'bg-white/5 text-[#bbc9cf] border border-white/10 hover:border-[#c2e863]'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </motion.div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredCategories.map((cat, idx) => (
          <motion.div
            key={cat.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: idx * 0.1, ease: 'easeOut' }}
            className="glass-card glass-card-hover rounded-2xl p-8 flex flex-col h-full group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="flex items-center mb-6 relative z-10">
              <div className="w-12 h-12 rounded-xl bg-[#1d2a25] border border-white/10 flex items-center justify-center mr-4 group-hover:bg-[#c2e863]/20 transition-colors">
                {renderCategoryIcon(cat.icon)}
              </div>
              <h3 className="font-display text-2xl font-bold text-white group-hover:text-[#00fdee] transition-colors">
                {cat.title}
              </h3>
            </div>

            <p className="font-sans text-sm text-[#94A3B8] mb-8 flex-grow relative z-10 leading-relaxed">
              {cat.description}
            </p>

            <div className="flex flex-wrap gap-3 relative z-10">
              {cat.skills.map((skill) => {
                const isSelected = selectedSkill === skill;
                return (
                  <button
                    key={skill}
                    onClick={() => setSelectedSkill(isSelected ? null : skill)}
                    className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer relative group/skill ${
                      isSelected
                        ? 'bg-[#c2e863] text-[#003543] shadow-[0_0_15px_rgba(194,232,99,0.5)] border border-[#c2e863]'
                        : 'bg-black/40 text-[#E2E8F0] border border-white/10 hover:bg-[#c2e863]/15'
                    }`}
                  >
                    <span className="relative z-10">{skill}</span>
                  </button>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Selected Skill Quick Detail Banner */}
      {selectedSkill && (
        <div className="mt-6 p-4 rounded-2xl glass-card border border-[#22D3EE]/40 flex items-center justify-between gap-4 animate-in fade-in">
          <div className="flex items-center gap-3">
            <Check className="w-5 h-5 text-[#22D3EE] flex-shrink-0" />
            <span className="font-sans text-sm text-[#E2E8F0]">
              <strong className="text-[#22D3EE] font-mono">{selectedSkill}</strong> is integrated into Anush Rai&apos;s enterprise solutions and AI architectures.
            </span>
          </div>
          <button
            onClick={() => setSelectedSkill(null)}
            className="text-xs font-bold uppercase tracking-wider text-[#94A3B8] hover:text-white px-2 py-1 cursor-pointer"
          >
            Dismiss
          </button>
        </div>
      )}
    </section>
  );
};

