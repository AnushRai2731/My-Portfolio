import React, { useState } from 'react';
import { Mail, X, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { ContactFormData } from '../types';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.message) {
      setErrorMsg('Please enter your email address and message.');
      return;
    }

    setLoading(true);
    setErrorMsg(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setSubmitted(true);
      } else {
        setErrorMsg(data.error || 'Failed to send message. Please try again.');
      }
    } catch {
      setErrorMsg('Network error. Please check connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setErrorMsg(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in">
      <div className="glass-modal rounded-2xl max-w-lg w-full p-6 sm:p-8 relative border border-white/[0.08] shadow-2xl">
        <div className="flex justify-between items-center pb-4 border-b border-white/[0.08] mb-6">
          <div className="flex items-center gap-2.5">
            <Mail className="w-5 h-5 text-[#22D3EE]" />
            <h2 className="font-display text-xl font-bold text-white">Contact Anush Rai</h2>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-[#94A3B8] hover:text-white hover:bg-white/[0.06] transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <CheckCircle2 className="w-14 h-14 text-[#22D3EE] mx-auto animate-bounce" />
            <h3 className="font-display text-2xl font-bold text-white">Message Sent!</h3>
            <p className="font-sans text-sm text-[#CBD5E1] max-w-sm mx-auto leading-relaxed">
              Thank you for reaching out. Anush Rai has received your message and will reply to <strong className="text-white font-mono">{formData.email}</strong> shortly.
            </p>
            <button
              onClick={handleReset}
              className="mt-6 px-6 py-2.5 rounded-xl bg-[#22D3EE] text-[#070B14] font-bold text-xs uppercase tracking-wider hover:bg-[#38BDF8] transition-all cursor-pointer shadow-[0_0_15px_rgba(34,211,238,0.4)]"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {errorMsg && (
              <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                {errorMsg}
              </div>
            )}

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#94A3B8] mb-1.5 font-sans">
                Your Name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Sarah Jenkins"
                className="w-full px-4 py-2.5 rounded-xl glass-input text-white placeholder-slate-500 text-sm font-sans"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#94A3B8] mb-1.5 font-sans">
                Email Address *
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="sarah@enterprise.com"
                className="w-full px-4 py-2.5 rounded-xl glass-input text-white placeholder-slate-500 text-sm font-sans"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#94A3B8] mb-1.5 font-sans">
                Subject
              </label>
              <input
                type="text"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                placeholder="Project Leadership Opportunity / Data Pipeline Query"
                className="w-full px-4 py-2.5 rounded-xl glass-input text-white placeholder-slate-500 text-sm font-sans"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#94A3B8] mb-1.5 font-sans">
                Message *
              </label>
              <textarea
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Hi Anush, we would love to discuss an automation engineering role..."
                className="w-full px-4 py-2.5 rounded-xl glass-input text-white placeholder-slate-500 text-sm resize-none font-sans"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-xl bg-[#22D3EE] text-[#070B14] font-bold text-xs uppercase tracking-wider hover:bg-[#38BDF8] hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all flex items-center justify-center gap-2 cursor-pointer mt-2"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Sending Message...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Send Inquiry
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
