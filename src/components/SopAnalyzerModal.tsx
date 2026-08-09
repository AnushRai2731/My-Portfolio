import React, { useState } from 'react';
import { Brain, X, Play, Loader2, Sparkles, CheckCircle2, AlertTriangle, ShieldCheck } from 'lucide-react';
import { SOPAnalysisResult } from '../types';

interface SopAnalyzerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SAMPLE_SOPS = [
  {
    title: 'Enterprise Data Migration SOP',
    text: `Standard Operating Procedure: Tier-1 Database Migration
1. Pre-Migration Audit: Extract database schema and count records across source clusters. Verify row hashes.
2. Staging Replication: Deploy staging async replica and test delta synchronization for 15 minutes.
3. Manual Approval Gate: Tech Lead must inspect staging replication logs and manually sign off in JIRA ticket.
4. Cutover Execution: Switch primary connection endpoints. Run automated validation queries for response time under 50ms.
5. Legacy Cleanup: Archive legacy tables after 72 hours.`,
  },
  {
    title: 'Retail Store Automated Provisioning SOP',
    text: `Standard Operating Procedure: Store Node Provisioning
1. Device Registration: Register POS MAC addresses in central inventory DB.
2. Configuration Push: Trigger Ansible playbook to push store network rules and SSL certificates.
3. Health Check: Execute ping sweep and database connectivity validation.
4. Exception Handling: If ping fails after 3 retries, notify local store IT admin via SMS.`,
  },
];

export const SopAnalyzerModal: React.FC<SopAnalyzerModalProps> = ({ isOpen, onClose }) => {
  const [sopText, setSopText] = useState(SAMPLE_SOPS[0].text);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<SOPAnalysisResult | null>(null);

  if (!isOpen) return null;

  const handleAnalyze = async () => {
    if (!sopText.trim()) return;
    setLoading(true);
    setResult(null);

    try {
      const res = await fetch('/api/sop-analyzer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: sopText }),
      });
      const data = await res.json();
      if (res.ok) {
        setResult(data);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in">
      <div className="glass-modal rounded-2xl max-w-3xl w-full max-h-[90vh] flex flex-col relative">
        {/* Header */}
        <div className="p-6 border-b border-white/10 flex justify-between items-center bg-[#1b1b25]">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-[#00d2ff]/20 text-primary">
              <Brain className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">AI-Powered SOP Analyzer Sandbox</h2>
              <p className="text-xs text-[#bbc9cf]">Live Semantic & Compliance Vector Parsing Demo</p>
            </div>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Sample Loader */}
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs font-bold text-[#bbc9cf] uppercase">Load Sample SOP:</span>
            {SAMPLE_SOPS.map((sample, idx) => (
              <button
                key={idx}
                onClick={() => setSopText(sample.text)}
                className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs text-primary hover:bg-primary/20 transition-colors"
              >
                {sample.title}
              </button>
            ))}
          </div>

          {/* SOP Input */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#bbc9cf] mb-1">
              Standard Operating Procedure Input Text
            </label>
            <textarea
              rows={6}
              value={sopText}
              onChange={(e) => setSopText(e.target.value)}
              className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 text-xs font-mono focus:outline-none focus:border-primary resize-none"
              placeholder="Paste any procedure or workflow steps here..."
            />
          </div>

          {/* Action */}
          <button
            onClick={handleAnalyze}
            disabled={loading || !sopText.trim()}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-primary via-[#00d2ff] to-[#e9aaff] text-[#003543] font-bold text-xs uppercase tracking-wider hover:shadow-[0_0_25px_rgba(0,210,255,0.5)] transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Parsing Vector Checkpoints & Rules...
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4" />
                Run AI SOP Analysis
              </>
            )}
          </button>

          {/* Results Output */}
          {result && (
            <div className="p-5 rounded-2xl bg-[#1f1f29] border border-primary/40 space-y-4 animate-in fade-in">
              <div className="flex justify-between items-center border-b border-white/10 pb-3">
                <span className="text-xs font-bold uppercase text-primary flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4" /> Analysis Complete
                </span>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-primary/20 text-primary border border-primary/30">
                  Risk Score: {result.riskScore}/100 ({result.complianceLevel})
                </span>
              </div>

              <div>
                <strong className="text-xs font-bold text-white block mb-1">Executive Summary:</strong>
                <p className="text-xs text-[#bbc9cf] leading-relaxed">{result.summary}</p>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-black/40 border border-white/5">
                  <span className="text-gray-400 block text-[11px]">Extracted Rules</span>
                  <span className="text-white font-bold text-base">{result.extractedMetrics?.ruleCount || 4} Rules</span>
                </div>
                <div className="p-3 rounded-xl bg-black/40 border border-white/5">
                  <span className="text-gray-400 block text-[11px]">Estimated Effort Savings</span>
                  <span className="text-[#00fdee] font-bold text-base">{result.extractedMetrics?.estimatedAutomationSavings}</span>
                </div>
              </div>

              <div>
                <strong className="text-xs font-bold text-white block mb-2">Recommended Automation Actions:</strong>
                <ul className="space-y-1.5 text-xs text-[#bbc9cf]">
                  {result.keyActionItems.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#00fdee] flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {result.extractedMetrics?.criticalGaps?.length > 0 && (
                <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block mb-0.5">Identified Vulnerability Gaps:</strong>
                    {result.extractedMetrics.criticalGaps.join(' • ')}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
