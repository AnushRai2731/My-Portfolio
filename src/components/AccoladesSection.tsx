import React, { useState } from 'react';
import { motion } from 'motion/react';
import { AWARDS, CERTIFICATIONS } from '../data/portfolioData';
import { Award, Star, Zap, Users, Gem, CheckCircle2, Medal, GraduationCap, ShieldCheck } from 'lucide-react';

export const AccoladesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'awards' | 'certs'>('awards');
  const [certCategory, setCertCategory] = useState<string>('all');

  const filteredCerts =
    certCategory === 'all'
      ? CERTIFICATIONS
      : CERTIFICATIONS.filter((c) => c.category === certCategory);

  const renderAwardIcon = (iconName: string) => {
    switch (iconName) {
      case 'Star':
        return <Star className="w-5 h-5 text-[#22D3EE]" />;
      case 'Zap':
        return <Zap className="w-5 h-5 text-[#38BDF8]" />;
      case 'Users':
        return <Users className="w-5 h-5 text-[#A78BFA]" />;
      case 'Gem':
        return <Gem className="w-5 h-5 text-[#22D3EE]" />;
      default:
        return <Award className="w-5 h-5 text-[#22D3EE]" />;
    }
  };

  return (
    <section id="accolades" className="py-24 max-w-[1280px] mx-auto px-6 overflow-hidden relative">
      {/* Background glow orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#ff6b81]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6 relative z-10"
      >
        <div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold inline-block pb-2 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-[#ff6b81] to-[#c084fc]">
            Honors &amp; Mastery
          </h2>
          <p className="font-sans text-base sm:text-lg text-[#94A3B8] max-w-2xl mt-2 leading-relaxed">
            Distinguished performance awards, enterprise recognition, and certified domain expertise across AI, cloud architecture, and data engineering.
          </p>
        </div>

        {/* Tab Selector Buttons */}
        <div className="flex gap-2 p-1.5 glass-pill rounded-full border border-white/10 w-fit">
          <button
            onClick={() => setActiveTab('awards')}
            className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === 'awards'
                ? 'bg-gradient-to-r from-[#00d2ff] to-[#00fdee] text-[#003543] shadow-[0_0_20px_rgba(0,210,255,0.4)]'
                : 'text-[#bbc9cf] hover:text-white hover:bg-white/5'
            }`}
          >
            <Award className="w-4 h-4" />
            Honors &amp; Awards ({AWARDS.length})
          </button>
          <button
            onClick={() => setActiveTab('certs')}
            className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === 'certs'
                ? 'bg-gradient-to-r from-[#00d2ff] to-[#00fdee] text-[#003543] shadow-[0_0_20px_rgba(0,210,255,0.4)]'
                : 'text-[#bbc9cf] hover:text-white hover:bg-white/5'
            }`}
          >
            <GraduationCap className="w-4 h-4" />
            Certifications ({CERTIFICATIONS.length})
          </button>
        </div>
      </motion.div>

      {/* Tab Content: Honors & Awards */}
      {activeTab === 'awards' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
          {AWARDS.map((award, idx) => {
            // Pick color styles depending on index to match HTML
            const colors = [
              { color: 'rgb(0, 253, 238)', hex: '#00fdee' },
              { color: 'rgb(0, 210, 255)', hex: '#00d2ff' },
              { color: 'rgb(0, 253, 238)', hex: '#00fdee' },
              { color: 'rgb(233, 170, 255)', hex: '#e9aaff' },
              { color: 'rgb(165, 231, 255)', hex: '#a5e7ff' },
            ];
            const current = colors[idx % colors.length];

            return (
              <motion.div
                key={award.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: 'easeOut' }}
                className="glass-card glass-card-hover rounded-2xl p-8 flex flex-col justify-between relative overflow-hidden group border border-white/10"
              >
                <div 
                  className="absolute -top-12 -right-12 w-32 h-32 rounded-full blur-2xl opacity-30 group-hover:opacity-70 transition-opacity" 
                  style={{ backgroundColor: current.color }}
                />
                
                <div>
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div 
                      className="p-3.5 rounded-2xl border glass-pill shadow-lg flex items-center justify-center"
                      style={{ backgroundColor: `rgba(${current.hex === '#00fdee' ? '0, 253, 238' : current.hex === '#00d2ff' ? '0, 210, 255' : current.hex === '#e9aaff' ? '233, 170, 255' : '165, 231, 255'}, 0.08)`, borderColor: `rgba(${current.hex === '#00fdee' ? '0, 253, 238' : current.hex === '#00d2ff' ? '0, 210, 255' : current.hex === '#e9aaff' ? '233, 170, 255' : '165, 231, 255'}, 0.25)` }}
                    >
                      <div style={{ color: current.color }}>{renderAwardIcon(award.iconName)}</div>
                    </div>

                    <span 
                      className="px-3 py-1 rounded-full text-[11px] font-bold tracking-wide uppercase border glass-pill"
                      style={{ color: current.color, borderColor: `rgba(${current.hex === '#00fdee' ? '0, 253, 238' : current.hex === '#00d2ff' ? '0, 210, 255' : current.hex === '#e9aaff' ? '233, 170, 255' : '165, 231, 255'}, 0.25)`, backgroundColor: `rgba(${current.hex === '#00fdee' ? '0, 253, 238' : current.hex === '#00d2ff' ? '0, 210, 255' : current.hex === '#e9aaff' ? '233, 170, 255' : '165, 231, 255'}, 0.06)` }}
                    >
                      {award.tag}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-white mb-1 group-hover:text-[#a5e7ff] transition-colors">
                    {award.title}
                  </h3>
                  {award.subtitle && (
                    <p className="font-sans text-xs font-semibold uppercase tracking-wider text-[#00fdee] mb-4">
                      {award.subtitle}
                    </p>
                  )}

                  <p className="font-sans text-sm text-[#94A3B8] leading-relaxed">
                    {award.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2 text-xs text-gray-400">
                  <CheckCircle2 className="w-4 h-4 text-[#00fdee]" />
                  <span>Verified Enterprise Performance Recognition</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      )}

      {/* Tab Content: Certifications */}
      {activeTab === 'certs' && (
        <div className="relative z-10 space-y-6">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2 mb-6">
            {['all', 'AI & Data', 'Cloud', 'Machine Learning', 'Software Engineering'].map((cat) => (
              <button
                key={cat}
                onClick={() => setCertCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-mono font-semibold uppercase tracking-wide transition-all cursor-pointer ${
                  certCategory === cat
                    ? 'bg-[#22D3EE] text-[#070B14] shadow-[0_0_12px_rgba(34,211,238,0.3)]'
                    : 'bg-white/[0.04] text-[#94A3B8] border border-white/[0.08] hover:text-white hover:bg-white/[0.08]'
                }`}
              >
                {cat === 'all' ? 'All Credentials' : cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredCerts.map((cert, idx) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: idx * 0.06, ease: 'easeOut' }}
                className={`glass-card glass-card-hover rounded-2xl p-6 sm:p-7 flex flex-col justify-between ${
                  cert.featured ? 'border-[#22D3EE]/40 bg-[#0D1321]/80' : ''
                }`}
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-xl bg-[#22D3EE]/15 text-[#22D3EE] border border-[#22D3EE]/30">
                        <ShieldCheck className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="font-sans text-xs font-bold uppercase tracking-wider text-[#22D3EE]">
                          {cert.issuer}
                        </span>
                        {cert.date && (
                          <span className="font-mono text-xs text-[#94A3B8] block">
                            Issued: {cert.date}
                          </span>
                        )}
                      </div>
                    </div>

                    <span className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium tracking-wide bg-white/[0.04] border border-white/[0.08] text-[#A78BFA]">
                      {cert.category}
                    </span>
                  </div>

                  <h4 className="font-display text-lg font-bold text-white mb-3 group-hover:text-[#22D3EE] transition-colors">
                    {cert.title}
                  </h4>

                  {cert.skillsGained && cert.skillsGained.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {cert.skillsGained.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2.5 py-1 rounded-lg text-xs font-sans bg-white/[0.04] border border-white/[0.08] text-[#CBD5E1]"
                        >
                          ✓ {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {cert.credentialId && (
                  <div className="mt-4 pt-3 border-t border-white/[0.08] flex justify-between items-center text-xs text-[#94A3B8]">
                    <span className="font-mono text-xs text-[#22D3EE]">
                      ID: {cert.credentialId}
                    </span>
                    <span className="font-sans flex items-center gap-1 text-[#38BDF8] font-medium">
                      Verified Credential
                    </span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};
