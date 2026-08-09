# Anush Rai Portfolio - Python Backend & Deployment Guide

This directory contains complete **Python Flask** and **FastAPI** backends with SQLite / PostgreSQL database support for the **Anush Rai Software Engineering Portfolio**.

---

## 🚀 Quick Start (Local Development)

### 1. Prerequisites
- Python 3.9+
- Git

### 2. Setup Virtual Environment
```bash
# Navigate to the python_backend folder
cd python_backend

# Create virtual environment
python3 -m venv venv

# Activate virtual environment
# On Linux/macOS:
source venv/bin/activate
# On Windows:
venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt
```

---

## 🏃 Running the Servers

### Option A: Running Flask API
```bash
python app_flask.py
```
- API Endpoint: `http://localhost:5000`
- Database: Creates `portfolio.db` automatically in the folder.

### Option B: Running FastAPI API (Recommended for Async & High Performance)
```bash
uvicorn main_fastapi:app --reload --port 8000
```
- API Endpoint: `http://localhost:8000`
- Interactive Swagger API Docs: `http://localhost:8000/docs`

---

## 📦 How to Push to GitHub & Deploy Live

### Step 1: Push Code to GitHub

1. Open your terminal in the project root directory:
```bash
git init
git add .
git commit -m "Initial commit: Anush Rai Software Engineering Portfolio"
```

2. Create a new repository on [GitHub](https://github.com/new) named `anush-rai-portfolio`.

3. Connect your local git repository and push:
```bash
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/anush-rai-portfolio.git
git branch -M main
git push -u origin main
```

---

### Step 2: Deploy Live Web Page (Frontend + Backend)

#### Option 1: Deploy on Render (Free Tier - Flask / FastAPI)
1. Sign up on [Render.com](https://render.com).
2. Click **New +** -> **Web Service**.
3. Connect your GitHub repository `anush-rai-portfolio`.
4. Configure service settings:
   - **Name**: `anush-rai-backend`
   - **Root Directory**: `python_backend`
   - **Environment**: `Python 3`
   - **Build Command**: `pip install -r requirements.txt`
   - **Start Command (for FastAPI)**: `uvicorn main_fastapi:app --host 0.0.0.0 --port $PORT`
   - **Start Command (for Flask)**: `python app_flask.py`
5. Click **Create Web Service**. Your live backend URL will be provided (e.g. `https://anush-rai-backend.onrender.com`).

#### Option 2: Deploy Frontend on Vercel / Netlify
1. Connect your GitHub repo to [Vercel](https://vercel.com) or [Netlify](https://netlify.com).
2. Set Build Command: `npm run build`
3. Set Output Directory: `dist`
4. Set Environment Variable `VITE_API_URL` to your Render backend URL.

---

## 🗄️ Database Setup (PostgreSQL)

By default, the Python backends use **SQLite** (`portfolio.db`). For live production on Render/Railway:
1. Create a free PostgreSQL database on Render or Supabase.
2. Set the `DATABASE_URL` environment variable in Render dashboard:
   ```env
   DATABASE_URL=postgresql://user:password@hostname:5432/dbname
   ```
3. SQLAlchemy automatically manages database connections and table creation!
