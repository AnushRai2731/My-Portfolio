import React, { useState } from 'react';
import { TrendingUp, X, Play, Loader2, Sparkles, CheckCircle2, Bot } from 'lucide-react';
import { TicketClassResult } from '../types';

interface TicketEngineModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SAMPLE_TICKETS = [
  'Database query latency spiked to 2.4s during peak store reconciliation cutover.',
  'SAP GUI automation script failed on re-order step 4 due to session lock.',
  'Data pipeline ETL job #104 failed: duplicate key constraint on migration sync.',
];

export const TicketEngineModal: React.FC<TicketEngineModalProps> = ({ isOpen, onClose }) => {
  const [ticketText, setTicketText] = useState(SAMPLE_TICKETS[0]);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<TicketClassResult | null>(null);

  if (!isOpen) return null;

  const handleClassify = async () => {
    if (!ticketText.trim()) return;
    setLoading(true);
    setResult(null);

    try {
      const res = await fetch('/api/classify-ticket', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ticketText }),
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
      <div className="glass-modal rounded-2xl max-w-2xl w-full p-6 relative">
        <div className="flex justify-between items-center pb-4 border-b border-white/10 mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-[#f6d1ff]/20 text-[#f6d1ff]">
              <Bot className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">Intelligent Ticket Engine Triage</h2>
              <p className="text-xs text-[#bbc9cf]">Machine Learning Classifier Sandbox</p>
            </div>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-2 flex-wrap text-xs">
            <span className="text-gray-400 uppercase font-bold">Presets:</span>
            {SAMPLE_TICKETS.map((t, idx) => (
              <button
                key={idx}
                onClick={() => setTicketText(t)}
                className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-primary hover:bg-primary/20 text-left truncate max-w-[180px]"
              >
                Sample #{idx + 1}
              </button>
            ))}
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#bbc9cf] mb-1">
              Support Ticket / Issue Text
            </label>
            <textarea
              rows={4}
              value={ticketText}
              onChange={(e) => setTicketText(e.target.value)}
              className="w-full p-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 text-xs focus:outline-none focus:border-primary resize-none"
            />
          </div>

          <button
            onClick={handleClassify}
            disabled={loading || !ticketText.trim()}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-primary to-[#f6d1ff] text-[#003543] font-bold text-xs uppercase tracking-wider hover:shadow-[0_0_20px_rgba(246,209,255,0.4)] transition-all flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Classifying Ticket with ML Triage Rules...
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4" />
                Classify Ticket
              </>
            )}
          </button>

          {result && (
            <div className="p-4 rounded-xl bg-[#1f1f29] border border-[#f6d1ff]/40 space-y-3 animate-in fade-in">
              <div className="flex justify-between items-center border-b border-white/10 pb-2">
                <span className="text-xs font-bold text-[#f6d1ff]">Classification Output</span>
                <span className="text-xs font-bold text-emerald-400">
                  Confidence: {Math.round(result.confidenceScore * 100)}%
                </span>
              </div>

              <div className="grid grid-cols-3 gap-2 text-xs">
                <div className="p-2.5 rounded-lg bg-black/40">
                  <span className="text-gray-400 block text-[10px]">Category</span>
                  <span className="text-white font-bold">{result.category}</span>
                </div>
                <div className="p-2.5 rounded-lg bg-black/40">
                  <span className="text-gray-400 block text-[10px]">Priority</span>
                  <span className="text-red-400 font-bold">{result.priority}</span>
                </div>
                <div className="p-2.5 rounded-lg bg-black/40">
                  <span className="text-gray-400 block text-[10px]">Assigned Team</span>
                  <span className="text-primary font-bold">{result.assignedTeam}</span>
                </div>
              </div>

              <div className="text-xs p-3 rounded-lg bg-white/5 border border-white/5">
                <strong className="text-white block mb-0.5">Automated Resolution Recommendation:</strong>
                <p className="text-gray-300">{result.suggestedSolution}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
