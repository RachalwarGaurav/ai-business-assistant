````markdown
# AI-Powered Business Automation Assistant

## Project Overview

AI-Powered Business Automation Assistant is a full-stack web application designed to automate business interactions using AI. The system allows users to interact with an AI chatbot, submit lead information through a form, and enables administrators to manage and view submitted leads through a dashboard.

The application integrates AI response generation using OpenRouter APIs, cloud database storage using MongoDB Atlas, REST APIs using FastAPI, and a responsive frontend built with React.js.

This project demonstrates:
- AI/LLM Integration
- Full-Stack Development
- REST API Development
- Cloud Deployment
- Automation Workflows
- Database Management

---

# Features

## AI Chatbot
- AI-powered conversational assistant
- Generates intelligent responses using OpenRouter API
- Handles business/course-related queries

## Lead Capture System
Users can submit:
- Name
- Email
- Phone
- Query

## MongoDB Atlas Integration
- Stores lead data securely in cloud database
- Real-time data retrieval

## Admin Dashboard
- Displays all submitted leads
- Fetches live data from backend APIs

## Automation Workflows
Implemented workflows:
- Lead form submission → Data stored in MongoDB
- Chatbot interaction → Automatic AI response generation
- Dashboard → Real-time lead viewing

## REST API Backend
- Built using FastAPI
- Automatic Swagger API documentation

## Deployment
- Frontend deployed on Vercel
- Backend deployed on Render

---

# Tech Stack

## Frontend
- React.js
- Tailwind CSS
- Axios
- Vite

## Backend
- FastAPI
- Python
- Uvicorn

## Database
- MongoDB Atlas

## AI Integration
- OpenRouter API
- Mistral 7B Instruct Model

## Deployment Platforms
- Vercel (Frontend)
- Render (Backend)

---

# Project Architecture

```text
                ┌─────────────────────┐
                │     React Frontend  │
                │   (Vercel Hosted)   │
                └─────────┬───────────┘
                          │
                          │ API Requests
                          ▼
                ┌─────────────────────┐
                │    FastAPI Backend  │
                │   (Render Hosted)   │
                └───────┬─────┬───────┘
                        │     │
         Chat Requests  │     │ Lead Storage
                        │     │
                        ▼     ▼
             ┌────────────┐  ┌──────────────┐
             │ OpenRouter │  │ MongoDB Atlas│
             │    API     │  │   Database   │
             └────────────┘  └──────────────┘
````

---

# Setup Instructions

## 1. Clone Repository

```bash
git clone https://github.com/RachalwarGaurav/ai-business-assistant.git
```

---

## 2. Backend Setup

```bash
cd backend
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Create `.env` file:

```env
MONGO_URI=your_mongodb_uri
OPENROUTER_API_KEY=your_openrouter_api_key
```

Run backend server:

```bash
uvicorn main:app --reload
```

Backend runs on:

```text
http://127.0.0.1:8000
```

---

## 3. Frontend Setup

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Run frontend server:

```bash
npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

---

# API Documentation

Swagger UI available at:

```text
https://ai-business-assistant-56ms.onrender.com/docs
```

---

# Deployed Links

## Frontend (Vercel)

```text
https://your-vercel-link.vercel.app
```

## Backend (Render)

```text
https://ai-business-assistant-56ms.onrender.com
```

## Swagger API Docs

```text
https://ai-business-assistant-56ms.onrender.com/docs
```

## GitHub Repository

```text
https://github.com/RachalwarGaurav/ai-business-assistant
```

---

# Future Improvements

* User Authentication
* Role-Based Admin Access
* AI Memory & Context
* Email Notifications
* Analytics Dashboard
* Vector Database Integration
* Docker Deployment

---

# Author

**Gaurav Rachalwar**
BE Computer Engineering
Keystone School of Engineering, Pune

---

```
```
