from sqlalchemy.orm import Session
from .models import Task

def get_all_tasks(db: Session):
    return db.query(Task).all()

def get_task_by_id(db: Session, task_id: int):
    return db.query(Task).filter(Task.id == task_id).first()

def create_task(db: Session, task_data: dict):
    task = Task(**task_data)
    db.add(task)
    db.commit()
    db.refresh(task)
    return task

def update_task(db: Session, task: Task, updates: dict):
    for key, value in updates.items():
        setattr(task, key, value)
    db.commit()
    db.refresh(task)
    return task

def delete_task(db: Session, task: Task):
    db.delete(task)
    db.commit()
