import React, { useState } from 'react';
import { motion } from 'motion/react';
import { AWARDS, CERTIFICATIONS } from '../data/portfolioData';
import { Award, Star, Zap, Users, Gem, CheckCircle2, Medal, GraduationCap, ExternalLink, ShieldCheck } from 'lucide-react';

export const AccoladesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'awards' | 'certs'>('awards');
  const [certCategory, setCertCategory] = useState<string>('all');

  const filteredCerts = certCategory === 'all'
    ? CERTIFICATIONS
    : CERTIFICATIONS.filter((c) => c.category === certCategory);

  const renderAwardIcon = (iconName: string, color: string) => {
    switch (iconName) {
      case 'Star':
        return <Star className="w-6 h-6" style={{ color }} />;
      case 'Zap':
        return <Zap className="w-6 h-6" style={{ color }} />;
      case 'Users':
        return <Users className="w-6 h-6" style={{ color }} />;
      case 'Gem':
        return <Gem className="w-6 h-6" style={{ color }} />;
      default:
        return <Award className="w-6 h-6" style={{ color }} />;
    }
  };

  return (
    <section id="accolades" className="py-24 max-w-[1200px] mx-auto px-6 overflow-hidden relative">
      {/* Background glow orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#00d2ff]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6 relative z-10"
      >
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-[#e9aaff] glass-pill border border-[#e9aaff]/30 mb-3">
            <Medal className="w-3.5 h-3.5 text-[#e9aaff]" />
            Recognition & Mastery
          </div>
          <h2 className="font-headline-lg text-4xl sm:text-5xl font-bold inline-block pb-2 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-primary to-[#e9aaff]">
            Honors & Credentials
          </h2>
          <p className="text-[#bbc9cf] text-sm sm:text-base max-w-2xl mt-3 leading-relaxed">
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
            <TrophyIcon className="w-4 h-4" />
            Honors & Awards ({AWARDS.length})
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
          {AWARDS.map((award, idx) => (
            <motion.div
              key={award.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.12, ease: 'easeOut' }}
              className="glass-card glass-card-hover rounded-2xl p-8 flex flex-col justify-between relative overflow-hidden group border border-white/10"
            >
              {/* Subtle glowing accent gradient in card corner */}
              <div
                className="absolute -top-12 -right-12 w-32 h-32 rounded-full blur-2xl opacity-30 group-hover:opacity-70 transition-opacity"
                style={{ backgroundColor: award.color }}
              />

              <div>
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div
                    className="p-3.5 rounded-2xl border border-white/10 glass-pill shadow-lg flex items-center justify-center"
                    style={{ backgroundColor: `${award.color}15`, borderColor: `${award.color}40` }}
                  >
                    {renderAwardIcon(award.iconName, award.color)}
                  </div>

                  <span
                    className="px-3 py-1 rounded-full text-[11px] font-bold tracking-wide uppercase border glass-pill"
                    style={{ color: award.color, borderColor: `${award.color}40`, backgroundColor: `${award.color}10` }}
                  >
                    {award.tag}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[#a5e7ff] transition-colors">
                  {award.title}
                </h3>
                {award.subtitle && (
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#00fdee] mb-4">
                    {award.subtitle}
                  </p>
                )}

                <p className="text-sm text-[#bbc9cf] leading-relaxed">
                  {award.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2 text-xs text-gray-400">
                <CheckCircle2 className="w-4 h-4 text-[#00fdee]" />
                <span>Verified Enterprise Performance Recognition</span>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* Tab Content: Certifications */}
      {activeTab === 'certs' && (
        <div className="relative z-10 space-y-8">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2 mb-6">
            {['all', 'AI & Data', 'Cloud', 'Machine Learning', 'Software Engineering'].map((cat) => (
              <button
                key={cat}
                onClick={() => setCertCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  certCategory === cat
                    ? 'bg-primary text-[#003543] shadow-[0_0_15px_rgba(0,210,255,0.4)]'
                    : 'bg-white/5 text-[#bbc9cf] border border-white/10 hover:border-primary'
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
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.08, ease: 'easeOut' }}
                className={`glass-card glass-card-hover rounded-2xl p-6 flex flex-col justify-between border ${
                  cert.featured
                    ? 'border-[#00d2ff]/40 bg-gradient-to-br from-white/10 via-white/5 to-[#00d2ff]/10'
                    : 'border-white/10'
                }`}
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-xl bg-[#00d2ff]/15 text-[#00d2ff] border border-[#00d2ff]/30">
                        <ShieldCheck className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-[#00fdee]">
                          {cert.issuer}
                        </span>
                        {cert.date && (
                          <span className="text-xs text-gray-400 block">
                            Issued: {cert.date}
                          </span>
                        )}
                      </div>
                    </div>

                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/5 border border-white/10 text-[#a5e7ff]">
                      {cert.category}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-white mb-3 group-hover:text-[#00d2ff] transition-colors">
                    {cert.title}
                  </h4>

                  {cert.skillsGained && cert.skillsGained.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {cert.skillsGained.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2.5 py-1 rounded-lg text-[11px] font-medium bg-white/5 border border-white/10 text-gray-300"
                        >
                          ✓ {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {cert.credentialId && (
                  <div className="mt-4 pt-3 border-t border-white/10 flex justify-between items-center text-xs text-gray-400">
                    <span className="font-mono text-[11px] text-[#00fdee]">
                      ID: {cert.credentialId}
                    </span>
                    <span className="flex items-center gap-1 text-[#a5e7ff]">
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

// Helper trophy icon component
function TrophyIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2z" />
    </svg>
  );
}
