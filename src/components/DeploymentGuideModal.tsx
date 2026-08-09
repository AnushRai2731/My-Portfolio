import React, { useState, useEffect } from 'react';
import { Code2, X, Github, Server, Database, Terminal, Copy, Check, ExternalLink } from 'lucide-react';

interface DeploymentGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DeploymentGuideModal: React.FC<DeploymentGuideModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [selectedFile, setSelectedFile] = useState<string>('app_flask.py');
  const [fileContent, setFileContent] = useState<string>('Loading Python code...');
  const [copied, setCopied] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'instructions' | 'code'>('instructions');

  useEffect(() => {
    if (!isOpen) return;

    fetch(`/api/python-code/${selectedFile}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.content) {
          setFileContent(data.content);
        } else {
          setFileContent('// File content ready in python_backend directory.');
        }
      })
      .catch(() => {
        setFileContent('// Error loading file content.');
      });
  }, [isOpen, selectedFile]);

  if (!isOpen) return null;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(fileContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in">
      <div className="glass-modal rounded-2xl max-w-4xl w-full max-h-[90vh] flex flex-col relative overflow-hidden">
        {/* Header */}
        <div className="p-6 border-b border-white/10 flex justify-between items-center bg-[#1b1b25]">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-[#00fdee]/20 text-[#00fdee]">
              <Code2 className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">Python Flask / FastAPI & GitHub Deployment Guide</h2>
              <p className="text-xs text-[#bbc9cf]">Full instructions for database setup, GitHub pushing, and live web hosting</p>
            </div>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-white/10 bg-[#0d0d17] px-6 pt-3 gap-4">
          <button
            onClick={() => setActiveTab('instructions')}
            className={`pb-3 text-xs font-bold uppercase tracking-wider flex items-center gap-2 border-b-2 transition-all ${
              activeTab === 'instructions'
                ? 'border-[#00fdee] text-[#00fdee]'
                : 'border-transparent text-gray-400 hover:text-white'
            }`}
          >
            <Terminal className="w-4 h-4" />
            Deployment Instructions
          </button>
          <button
            onClick={() => setActiveTab('code')}
            className={`pb-3 text-xs font-bold uppercase tracking-wider flex items-center gap-2 border-b-2 transition-all ${
              activeTab === 'code'
                ? 'border-[#00fdee] text-[#00fdee]'
                : 'border-transparent text-gray-400 hover:text-white'
            }`}
          >
            <Server className="w-4 h-4" />
            Python Backend Source Code
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-xs text-[#bbc9cf]">
          {activeTab === 'instructions' ? (
            <div className="space-y-6">
              {/* Step 1: GitHub Push */}
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-3">
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  <Github className="w-4 h-4 text-primary" /> Step 1: Initialize Git & Push to GitHub
                </h3>
                <p className="text-gray-300">Run the following commands in your terminal to commit and upload code:</p>
                <div className="p-3 rounded-lg bg-black/60 border border-white/10 font-mono text-emerald-400 space-y-1">
                  <p>git init</p>
                  <p>git add .</p>
                  <p>git commit -m "Initial commit: Anush Rai Software Engineering Portfolio"</p>
                  <p>git branch -M main</p>
                  <p>git remote add origin https://github.com/YOUR_USERNAME/anush-rai-portfolio.git</p>
                  <p>git push -u origin main</p>
                </div>
              </div>

              {/* Step 2: Python Backend Execution */}
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-3">
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  <Server className="w-4 h-4 text-[#e9aaff]" /> Step 2: Running Python Flask or FastAPI
                </h3>
                <p className="text-gray-300">The project includes ready-to-run backends in the <code className="text-primary font-mono">/python_backend</code> folder:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 font-mono">
                  <div className="p-3 rounded-lg bg-black/60 border border-white/10">
                    <span className="text-[#00d2ff] font-bold block mb-1"># Option A: Flask API</span>
                    <p className="text-gray-300">cd python_backend</p>
                    <p className="text-gray-300">pip install -r requirements.txt</p>
                    <p className="text-emerald-400">python app_flask.py</p>
                  </div>
                  <div className="p-3 rounded-lg bg-black/60 border border-white/10">
                    <span className="text-[#e9aaff] font-bold block mb-1"># Option B: FastAPI</span>
                    <p className="text-gray-300">cd python_backend</p>
                    <p className="text-gray-300">pip install -r requirements.txt</p>
                    <p className="text-emerald-400">uvicorn main_fastapi:app --reload --port 8000</p>
                  </div>
                </div>
              </div>

              {/* Step 3: Database Setup */}
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-3">
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  <Database className="w-4 h-4 text-[#00fdee]" /> Step 3: Database Integration (SQLite / PostgreSQL)
                </h3>
                <p className="text-gray-300">
                  By default, the backend automatically provisions SQLite (<code className="text-primary font-mono">portfolio.db</code>). To use PostgreSQL on Render / Supabase / Neon:
                </p>
                <div className="p-3 rounded-lg bg-black/60 border border-white/10 font-mono text-emerald-400">
                  export DATABASE_URL="postgresql://user:password@host:5432/portfolio_db"
                </div>
              </div>

              {/* Step 4: Live Web Hosting */}
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-3">
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  <ExternalLink className="w-4 h-4 text-amber-400" /> Step 4: Free Live Web Hosting (Render / Vercel)
                </h3>
                <ul className="space-y-1.5 text-gray-300 list-disc list-inside">
                  <li><strong>Render.com:</strong> Connect your GitHub repo, select <code className="text-primary">python_backend</code> root, set Start Command to <code className="text-emerald-400">uvicorn main_fastapi:app --host 0.0.0.0 --port $PORT</code>.</li>
                  <li><strong>Vercel / Netlify:</strong> Connect GitHub repo, set build command to <code className="text-emerald-400">npm run build</code>, output directory <code className="text-emerald-400">dist</code>.</li>
                </ul>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              {/* File Selector */}
              <div className="flex items-center gap-2 flex-wrap border-b border-white/10 pb-3">
                {['app_flask.py', 'main_fastapi.py', 'database.py', 'models.py', 'requirements.txt', 'README.md'].map((file) => (
                  <button
                    key={file}
                    onClick={() => setSelectedFile(file)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                      selectedFile === file
                        ? 'bg-[#00fdee] text-[#003543] font-bold shadow-[0_0_12px_rgba(0,253,238,0.4)]'
                        : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {file}
                  </button>
                ))}

                <button
                  onClick={handleCopyCode}
                  className="ml-auto px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-bold flex items-center gap-1.5"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  {copied ? 'Copied!' : 'Copy Code'}
                </button>
              </div>

              {/* Code Display */}
              <pre className="p-4 rounded-xl bg-[#06060F] border border-white/10 font-mono text-xs text-gray-300 overflow-x-auto max-h-[400px] leading-relaxed">
                {fileContent}
              </pre>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-white/10 bg-[#1b1b25] flex justify-between items-center text-xs">
          <span className="text-gray-400">All Python & Database setup files generated in /python_backend</span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-primary text-[#003543] font-bold uppercase tracking-wider hover:bg-[#00d2ff]"
          >
            Close Guide
          </button>
        </div>
      </div>
    </div>
  );
};
