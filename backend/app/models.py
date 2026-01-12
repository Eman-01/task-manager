from sqlalchemy import Column, Integer, String, Text, Date, DateTime
from sqlalchemy.sql import func
from .database import Base

class Task(Base):
    __tablename__ = "tasks"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String(255), nullable=False)
    description = Column(Text)
    status = Column(String(20), default="pending")
    create_date = Column(DateTime(timezone=True), server_default=func.now())
    due_date = Column(Date)
