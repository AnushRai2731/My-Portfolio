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
        return <Database className="w-6 h-6 text-[#00d2ff]" />;
      case 'cloud':
        return <Cloud className="w-6 h-6 text-[#e9aaff]" />;
      case 'autorenew':
        return <RefreshCw className="w-6 h-6 text-[#00fdee]" />;
      case 'smart_toy':
        return <Bot className="w-6 h-6 text-[#47d6ff]" />;
      default:
        return <Sparkles className="w-6 h-6 text-primary" />;
    }
  };

  const filteredCategories =
    activeFilter === 'all'
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((c) => c.id === activeFilter);

  return (
    <section id="skills" className="py-24 max-w-[1200px] mx-auto px-6 overflow-hidden">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6"
      >
        <div>
          <h2 className="font-headline-lg text-4xl sm:text-5xl font-bold text-white mb-4">
            Technical Arsenal
          </h2>
          <p className="font-body-lg text-lg text-[#bbc9cf] max-w-2xl leading-relaxed">
            A curated stack of tools and frameworks, engineered for building scalable intelligence and automated pipelines.
          </p>
        </div>

        {/* Filter Chips */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
              activeFilter === 'all'
                ? 'bg-primary text-[#003543] shadow-[0_0_15px_rgba(0,210,255,0.4)]'
                : 'bg-white/5 text-[#bbc9cf] border border-white/10 hover:border-primary'
            }`}
          >
            All Skills
          </button>
          {SKILL_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeFilter === cat.id
                  ? 'bg-primary text-[#003543] shadow-[0_0_15px_rgba(0,210,255,0.4)]'
                  : 'bg-white/5 text-[#bbc9cf] border border-white/10 hover:border-primary'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredCategories.map((cat, idx) => (
          <motion.div
            key={cat.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: idx * 0.12, ease: 'easeOut' }}
            className="glass-card glass-card-hover rounded-2xl p-8 flex flex-col h-full group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="flex items-center mb-6 relative z-10">
              <div className="w-12 h-12 rounded-xl bg-[#34343f]/60 border border-white/10 flex items-center justify-center mr-4 group-hover:bg-[#00d2ff]/20 transition-colors">
                {renderCategoryIcon(cat.icon)}
              </div>
              <h3 className="font-headline-lg text-2xl font-bold text-white">
                {cat.title}
              </h3>
            </div>

            <p className="font-body-md text-sm text-[#bbc9cf] mb-8 flex-grow relative z-10 leading-relaxed">
              {cat.description}
            </p>

            <div className="flex flex-wrap gap-3 relative z-10">
              {cat.skills.map((skill) => {
                const isSelected = selectedSkill === skill;
                return (
                  <button
                    key={skill}
                    onClick={() => setSelectedSkill(isSelected ? null : skill)}
                    className={`px-4 py-2 rounded-full text-xs font-bold font-label-caps uppercase tracking-wider transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-[#00d2ff] text-[#003543] shadow-[0_0_15px_rgba(0,210,255,0.6)] scale-105'
                        : 'bg-black/40 text-white border border-white/10 hover:border-[#00d2ff]/50 hover:bg-[#00d2ff]/10'
                    }`}
                  >
                    {skill}
                  </button>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Selected Skill Quick Detail Banner */}
      {selectedSkill && (
        <div className="mt-8 p-6 rounded-2xl bg-[#1b1b25]/80 border border-primary/30 flex items-center justify-between animate-in fade-in">
          <div className="flex items-center gap-3">
            <Check className="w-5 h-5 text-primary" />
            <span className="text-sm font-semibold text-white">
              <strong className="text-primary">{selectedSkill}</strong> is deeply integrated in Anush Rai's enterprise pipeline architectures at TCS.
            </span>
          </div>
          <button
            onClick={() => setSelectedSkill(null)}
            className="text-xs font-bold text-gray-400 hover:text-white"
          >
            Dismiss
          </button>
        </div>
      )}
    </section>
  );
};
