from sqlalchemy import Column, Integer, String, Text, DateTime
from datetime import datetime
from database import Base

class ContactMessage(Base):
    __tablename__ = "contact_messages"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(100), nullable=False)
    email = Column(String(100), nullable=False)
    subject = Column(String(200), nullable=False)
    message = Column(Text, nullable=False)
    created_at = Column(DateTime, default=datetime.utcnow)

class PortfolioProject(Base):
    __tablename__ = "portfolio_projects"

    id = Column(String(50), primary_key=True)
    title = Column(String(150), nullable=False)
    description = Column(Text, nullable=False)
    tags = Column(String(255), nullable=False) # Comma separated
    impact_metric = Column(String(150), nullable=True)
    accuracy_metric = Column(String(50), nullable=True)
    is_internal = Column(Integer, default=0)

class ExperienceRecord(Base):
    __tablename__ = "experience_records"

    id = Column(String(50), primary_key=True)
    role = Column(String(100), nullable=False)
    company = Column(String(100), nullable=False)
    period = Column(String(50), nullable=False)
    highlights_json = Column(Text, nullable=False)
