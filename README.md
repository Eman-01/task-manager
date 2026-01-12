# Task Management System

A simple full-stack task management web application that allows users to create, view, update, and delete tasks. The project focuses on clean structure, clear logic, and working core features rather than over-engineering.

---

## Tech Stack

### Frontend

* React (Vite)
* JavaScript
* CSS (Flexbox for layout)
* Fetch API for HTTP requests

### Backend

* FastAPI (Python)
* SQLAlchemy (ORM)
* PostgreSQL (Relational Database)

---

## Features

* Create tasks
* View all tasks
* Update task title and status
* Delete tasks
* Visual indication of task status
* Graceful loading and error handling
* RESTful API communication (no hardcoded data)

---

## Project Structure

```
task-manager/
│── frontend/
│   ├── src/
│   │   ├── api/
│   │   ├── components/
│   │   ├── pages/
│   │   └── index.css
│   └── package.json
│
│── backend/
│   ├── app/
│   │   ├── main.py
│   │   ├── database.py
│   │   ├── models.py
│   │   ├── schemas.py
│   │   └── crud.py
│   └── requirements.txt
```

---

## Database Schema

```sql
CREATE TABLE tasks (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    status VARCHAR(20) NOT NULL DEFAULT 'pending',
    create_date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    due_date DATE
);
```

Status values:

* pending
* in_progress
* completed

---

## Backend Setup

### 1. Create Database

Run this inside PostgreSQL:

```sql
CREATE DATABASE tasks_db;
```

### 2. Environment Variables

Create a `.env` file inside the `backend/` directory:

```env
DATABASE_URL=postgresql://username:password@localhost:5432/tasks_db
```

> Do not commit this file to version control. Add `.env` to `.gitignore`.

### 3. Install Dependencies

```bash
cd backend
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

### 4. Run Backend Server

```bash
uvicorn app.main:app --reload
```

API documentation will be available at:

```
http://localhost:8000/docs
```

---

## Frontend Setup

### 1. Install Dependencies

```bash
cd frontend
npm install
```

### 2. Run Frontend

```bash
npm run dev
```

Frontend will be available at:

```
http://localhost:5173
```

---

## API Endpoints

| Method | Endpoint        | Description     |
| ------ | --------------- | --------------- |
| POST   | /api/tasks      | Create a task   |
| GET    | /api/tasks      | Get all tasks   |
| GET    | /api/tasks/{id} | Get single task |
| PUT    | /api/tasks/{id} | Update task     |
| DELETE | /api/tasks/{id} | Delete task     |

---

## Notes

* The frontend communicates with the backend via REST API calls
* CORS is enabled for local development
* SQLAlchemy automatically creates database tables on startup
* Focus was placed on clarity, maintainability, and correct architecture

---

## Author

Emmanuel Odhiambo
