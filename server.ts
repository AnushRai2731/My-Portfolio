import express from 'express';
import path from 'path';
import fs from 'fs';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // In-memory store for contact form messages
  const contactMessages: Array<{
    id: number;
    name: string;
    email: string;
    subject: string;
    message: string;
    timestamp: string;
  }> = [];

  // Lazy Gemini initialization helper
  function getGeminiClient(): GoogleGenAI | null {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return null;
    }
    return new GoogleGenAI({ apiKey });
  }

  // --- API ROUTES ---

  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', service: 'Anush Rai Portfolio Server' });
  });

  // Contact API
  app.post('/api/contact', (req, res) => {
    const { name, email, subject, message } = req.body;
    if (!email || !message) {
      return res.status(400).json({ error: 'Email and message are required.' });
    }

    const newMessage = {
      id: Date.now(),
      name: name || 'Anonymous visitor',
      email,
      subject: subject || 'Portfolio Contact Inquiry',
      message,
      timestamp: new Date().toISOString(),
    };

    contactMessages.push(newMessage);
    console.log('[Contact Message Received]:', newMessage);

    return res.json({
      success: true,
      message: 'Thank you for getting in touch! Anush Rai will respond shortly.',
      receivedMessage: newMessage,
    });
  });

  // SOP Analyzer Endpoint with Gemini AI / Fallback
  app.post('/api/sop-analyzer', async (req, res) => {
    const { text } = req.body;
    if (!text || typeof text !== 'string' || text.trim().length < 10) {
      return res.status(400).json({ error: 'Please enter a valid SOP text to analyze.' });
    }

    const ai = getGeminiClient();
    if (ai) {
      try {
        const response = await ai.models.generateContent({
          model: 'gemini-2.5-flash',
          contents: `You are an expert Enterprise AI Process & Compliance Auditor for Software & Pipeline Engineering.
Analyze the following Standard Operating Procedure (SOP) text:
"${text}"

Provide a JSON object response matching this format exactly:
{
  "summary": "Concise 2-sentence executive summary of the SOP and its key dependencies.",
  "riskScore": 25 (integer 0-100 indicating operational vulnerability/manual risk),
  "complianceLevel": "High" or "Medium" or "Low",
  "keyActionItems": ["3 actionable recommendations to improve or automate"],
  "extractedMetrics": {
    "ruleCount": 5 (number of rules extracted),
    "estimatedAutomationSavings": "e.g. 70% effort reduction",
    "criticalGaps": ["1 or 2 operational gaps or missing fallback logic"]
  }
}
Return ONLY raw JSON, no markdown formatting.`,
        });

        const rawText = response.text || '';
        const cleanedJson = rawText.replace(/```json/g, '').replace(/```/g, '').trim();
        const parsed = JSON.parse(cleanedJson);
        return res.json(parsed);
      } catch (err) {
        console.error('Gemini SOP analysis error, falling back to rule-based parser:', err);
      }
    }

    // Fallback rule-based analysis
    const wordCount = text.split(/\s+/).length;
    const risk = Math.min(95, Math.max(20, Math.floor(100 - wordCount / 4)));

    return res.json({
      summary: `Parsed SOP document with ${wordCount} words. Workflow contains multi-tier operational checkpoints and manual validation gates.`,
      riskScore: risk,
      complianceLevel: risk < 40 ? 'High' : 'Medium',
      keyActionItems: [
        'Automate manual approval steps in section 3.2 using async queues',
        'Establish automated exception monitoring and alerting logs',
        'Implement SLA alert triggers for bottleneck processing nodes',
      ],
      extractedMetrics: {
        ruleCount: Math.max(3, Math.floor(wordCount / 18)),
        estimatedAutomationSavings: '65% - 75% effort reduction',
        criticalGaps: [
          'Unverified legacy API timeout fallback logic',
          'Manual double-entry check required during high traffic',
        ],
      },
    });
  });

  // Ticket Classifier Endpoint with Gemini AI / Fallback
  app.post('/api/classify-ticket', async (req, res) => {
    const { ticketText } = req.body;
    if (!ticketText || typeof ticketText !== 'string' || !ticketText.trim()) {
      return res.status(400).json({ error: 'Ticket text is required.' });
    }

    const ai = getGeminiClient();
    if (ai) {
      try {
        const response = await ai.models.generateContent({
          model: 'gemini-2.5-flash',
          contents: `You are an AI Support Triage Classifier.
Classify the following support ticket text:
"${ticketText}"

Return a JSON object in this exact format:
{
  "category": "e.g. Data Pipeline Automation / SAP ERP / Infrastructure / ML Model Triage",
  "priority": "Low" or "Medium" or "High" or "Critical",
  "assignedTeam": "e.g. Data Ops Engineering / Platform Team / Automation Lead",
  "confidenceScore": 0.94,
  "suggestedSolution": "Short automated resolution recommendation"
}
Return ONLY raw JSON.`,
        });

        const rawText = response.text || '';
        const cleanedJson = rawText.replace(/```json/g, '').replace(/```/g, '').trim();
        const parsed = JSON.parse(cleanedJson);
        return res.json(parsed);
      } catch (err) {
        console.error('Gemini ticket classification error:', err);
      }
    }

    // Fallback
    const textLower = ticketText.toLowerCase();
    let category = 'Infrastructure & DevOps';
    let priority: 'Low' | 'Medium' | 'High' | 'Critical' = 'Medium';
    let team = 'Platform Engineering';

    if (textLower.includes('pipeline') || textLower.includes('data') || textLower.includes('migration')) {
      category = 'Data Engineering & Pipeline';
      priority = 'High';
      team = 'Data Ops Team';
    } else if (textLower.includes('sap') || textLower.includes('replenishment') || textLower.includes('rpa')) {
      category = 'Enterprise ERP & SAP RPA';
      priority = 'Critical';
      team = 'Automation Solutions';
    } else if (textLower.includes('ml') || textLower.includes('model') || textLower.includes('accuracy')) {
      category = 'Machine Learning Operations (MLOps)';
      priority = 'High';
      team = 'AI & Data Science';
    }

    return res.json({
      category,
      priority,
      assignedTeam: team,
      confidenceScore: 0.92,
      suggestedSolution:
        'Ticket classified via intelligent triage rules. Auto-routed to sprint queue with priority tag.',
    });
  });

  // Endpoint to fetch Python backend code samples for the Deployment modal
  app.get('/api/python-code/:file', (req, res) => {
    const fileName = req.params.file;
    const allowedFiles = ['app_flask.py', 'main_fastapi.py', 'database.py', 'models.py', 'requirements.txt', 'README.md'];

    if (!allowedFiles.includes(fileName)) {
      return res.status(400).json({ error: 'File not permitted' });
    }

    const filePath = path.join(process.cwd(), 'python_backend', fileName);
    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath, 'utf-8');
      return res.json({ fileName, content });
    }

    return res.status(404).json({ error: 'File not found' });
  });

  // --- VITE MIDDLEWARE OR PRODUCTION STATIC SERVING ---
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server listening at http://localhost:${PORT}`);
  });
}

startServer();
