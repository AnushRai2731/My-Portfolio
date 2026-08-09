"""
Anush Rai Portfolio - FastAPI Async Backend API
Run with: uvicorn main_fastapi:app --reload --port 8000
"""

from fastapi import FastAPI, Depends, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr
from sqlalchemy.orm import Session
from typing import List, Optional
from database import engine, get_db, Base
from models import ContactMessage
import os

# Create tables
Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="Anush Rai Portfolio FastAPI Backend",
    description="High-performance async REST API for Software Engineering Portfolio",
    version="1.0.0"
)

# Enable CORS for local & frontend hosting
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Pydantic Schemas
class ContactRequest(BaseModel):
    name: str
    email: str
    subject: str
    message: str

class ContactResponse(BaseModel):
    success: bool
    message: str
    id: int

class SOPRequest(BaseModel):
    text: str

class TicketRequest(BaseModel):
    ticketText: str

@app.get("/")
def read_root():
    return {
        "status": "online",
        "framework": "FastAPI",
        "developer": "Anush Rai",
        "docs": "/docs"
    }

@app.get("/api/health")
def health_check():
    return {"status": "ok", "service": "FastAPI Service"}

@app.post("/api/contact", response_model=ContactResponse, status_code=status.HTTP_201_CREATED)
def submit_contact_form(data: ContactRequest, db: Session = Depends(get_db)):
    try:
        new_msg = ContactMessage(
            name=data.name,
            email=data.email,
            subject=data.subject,
            message=data.message
        )
        db.add(new_msg)
        db.commit()
        db.refresh(new_msg)
        
        return ContactResponse(
            success=True,
            message="Thank you! Your message has been safely received.",
            id=new_msg.id
        )
    except Exception as e:
        db.rollback()
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/api/sop-analyzer")
def analyze_sop(req: SOPRequest):
    text = req.text.strip()
    if len(text) < 10:
        raise HTTPException(status_code=400, detail="SOP text too short.")
    
    words = len(text.split())
    risk_score = min(90, max(15, 95 - (words // 4)))
    
    return {
        "summary": f"FastAPI Analyzed {words} words in SOP document.",
        "riskScore": risk_score,
        "complianceLevel": "High Compliance" if risk_score < 40 else "Standard Compliance",
        "keyActionItems": [
            "Automate manual approval steps in section 3.2",
            "Establish automated exception monitoring log",
            "Implement SLA alert trigger for bottleneck nodes"
        ],
        "extractedMetrics": {
            "ruleCount": max(3, words // 20),
            "estimatedAutomationSavings": "70% manual effort reduction",
            "criticalGaps": ["Legacy API timeout fallback missing"]
        }
    }

@app.post("/api/classify-ticket")
def classify_ticket(req: TicketRequest):
    text = req.ticketText.lower()
    
    if "data" in text or "pipeline" in text:
        category = "Data Pipeline Automation"
        team = "Data Engineering"
    elif "sap" in text or "rpa" in text:
        category = "Enterprise RPA & ERP"
        team = "Automation Ops"
    else:
        category = "Cloud & Infrastructure"
        team = "Platform Ops"

    return {
        "category": category,
        "priority": "High",
        "assignedTeam": team,
        "confidenceScore": 0.94,
        "suggestedSolution": "Auto-assigned ticket to sprint queue based on ML rules."
    }

if __name__ == "__main__":
    import uvicorn
    port = int(os.environ.get("PORT", 8000))
    uvicorn.run("main_fastapi:app", host="0.0.0.0", port=port, reload=True)
