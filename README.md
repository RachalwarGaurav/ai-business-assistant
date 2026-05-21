# AI-Powered Business Automation Assistant

A full-stack application with separate user and admin dashboards, featuring an AI chatbot, lead management system, and complete user authentication.

## Project Overview

AI-Powered Business Automation Assistant is a full-stack web application designed to automate business interactions using AI. The system allows users to interact with an AI chatbot, submit lead information through a form, and enables administrators to manage and view submitted leads through a secure dashboard.

The application integrates:
- AI response generation using OpenRouter APIs
- Cloud database storage using MongoDB
- REST APIs using FastAPI
- Responsive frontend built with React.js
- Complete authentication system for users and admins

This project demonstrates:
- AI/LLM Integration
- Full-Stack Development
- REST API Development
- User Authentication & Authorization
- Automation Workflows
- Database Management

---

## ✨ Features

### User Dashboard
- **User Authentication** - Sign up and login system
- **AI Chatbot** - Powered by OpenRouter for intelligent conversations
- **Lead Form** - Submit leads with name, email, phone, and query
- **Admin Access** - Quick link to admin panel (requires admin login)

### Admin Dashboard
- **Secure Admin Login** - Protected admin authentication
- **Leads Management** - View all submitted leads in a formatted table
- **Real-time Data** - View total leads count and submission details
- **Dashboard Navigation** - Easy access back to user dashboard

### General Features
- Responsive design with Tailwind CSS
- Separate user and admin sessions
- Token-based authentication
- Easy navigation between dashboards
- Error handling and validation
- CORS enabled for cross-origin requests



## 📁 Project Structure

```
Ai_assistant/
├── backend/
│   ├── routes/
│   │   ├── auth.py          # Authentication endpoints
│   │   ├── chat.py          # Chatbot endpoint
│   │   └── leads.py         # Leads management
│   ├── models.py            # Data models
│   ├── database.py          # MongoDB connection
│   ├── main.py              # FastAPI app setup
│   └── requirements.txt      # Python dependencies
│
└── frontend/
    ├── src/
    │   ├── components/
    │   │   ├── UserLogin.jsx       # User login/signup/admin login
    │   │   ├── UserDashboard.jsx   # User dashboard
    │   │   ├── AdminDashboard.jsx  # Admin dashboard
    │   │   ├── Chatbot.jsx         # AI chatbot component
    │   │   └── LeadForm.jsx        # Lead submission form
    │   ├── App.jsx          # Main app with routing
    │   ├── config.js        # API configuration
    │   ├── main.jsx         # React entry point
    │   └── index.css        # Styles
    ├── .env.local           # Environment variables
    ├── package.json
    └── vite.config.js
```

## 🛠 Tech Stack

### Frontend
- **React 19** - UI library
- **Vite** - Build tool
- **React Router** - Navigation
- **Axios** - HTTP client
- **Tailwind CSS** - Styling

### Backend
- **FastAPI** - Modern Python web framework
- **MongoDB** - NoSQL database
- **Python 3.x** - Programming language
- **OpenRouter API** - AI chat completions

### Deployment
- Frontend: Vercel
- Backend: Render

---

## 📦 Prerequisites

- Python 3.8+
- Node.js 16+
- MongoDB (local or Atlas)
- OpenRouter API key (for chatbot)

---

## 🚀 Installation & Setup

### Backend Setup

1. Navigate to backend directory:
```bash
cd backend
```

2. Create virtual environment:
```bash
python -m venv .venv
```

3. Activate virtual environment:
- **Windows:**
```bash
.venv\Scripts\activate
```
- **Mac/Linux:**
```bash
source .venv/bin/activate
```

4. Install dependencies:
```bash
pip install -r requirements.txt
```

5. Create `.env` file in backend directory:
```env
OPENROUTER_API_KEY=your_api_key_here
MONGODB_URL=mongodb://localhost:27017
```

### Frontend Setup

1. Navigate to frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env.local` file in frontend directory:
```env
VITE_API_URL=http://localhost:8000
```

---

## ▶️ Running the Application

### Start Backend
```bash
cd backend
python -m uvicorn main:app --reload
```
**Backend runs on:** `http://localhost:8000`

### Start Frontend (in a new terminal)
```bash
cd frontend
npm run dev
```
**Frontend runs on:** `http://localhost:5173`

---

## 🔐 Authentication

### Admin Credentials
```
Username: admin
Password: Admin@2024
```

### User Authentication
- Create new account via **Sign Up** tab
- Login with your credentials via **Login** tab
- Session stored in localStorage

### Tab Navigation on Login Page
1. **Login** - Existing user login
2. **Sign Up** - Create new user account
3. **Admin** - Admin panel login

---

## 📡 API Endpoints

### Authentication Routes
- `POST /auth/signup` - Register new user
  - Body: `{ username, email, password }`
  
- `POST /auth/user-login` - User login
  - Body: `{ username, password }`
  
- `POST /auth/admin-login` - Admin login
  - Body: `{ username, password }`

### Chat Routes
- `POST /chat` - Send message to AI chatbot
  - Body: `{ message }`

### Leads Routes
- `POST /lead` - Submit a new lead
  - Body: `{ name, email, phone, query }`
  
- `GET /leads` - Get all submitted leads

---

## 🎯 Features in Detail

### User Dashboard
- **AI Chatbot**
  - Real-time chat interface
  - Powered by OpenRouter API
  - Handles various business queries

- **Lead Form**
  - Collect user information
  - Submit queries
  - Real-time form validation

- **Navigation**
  - Link to Admin Panel
  - Logout functionality
  - Welcome message with username

### Admin Dashboard
- **Leads Table**
  - View all submitted leads
  - Display: Name, Email, Phone, Query
  - Clean, professional table layout

- **Analytics**
  - Total leads count
  - Real-time data updates

- **Navigation**
  - Link back to User Dashboard
  - Logout functionality

---

## 🔄 User Workflow

1. **First Time Visit**
   - User lands on login page
   - Choose to Sign Up or Login
   - Admin can access via Admin tab

2. **User Registration**
   - Click Sign Up tab
   - Enter username, email, password
   - Create account and auto-login

3. **User Actions**
   - Chat with AI assistant
   - Submit lead forms
   - Click Admin Panel (requires admin login)

4. **Admin Access**
   - Click Admin tab on login page
   - Enter admin credentials
   - View all submitted leads
   - Logout to return to user mode

---

## 📝 Environment Variables

### Backend (.env)
```
OPENROUTER_API_KEY=your_openrouter_api_key
MONGODB_URL=mongodb://localhost:27017
```

### Frontend (.env.local)
```
VITE_API_URL=http://localhost:8000
```

---

## 🚢 Deployment

### Frontend Deployment (Vercel)
1. Push code to GitHub
2. Connect repository to Vercel
3. Set environment variables
4. Deploy automatically

### Backend Deployment (Render)
1. Push code to GitHub
2. Create new Web Service on Render
3. Set environment variables
4. Deploy from GitHub

---

## 🐛 Troubleshooting

### CORS Errors
- Ensure backend is running on `http://localhost:8000`
- Check `.env.local` has correct `VITE_API_URL`

### MongoDB Connection Issues
- Verify MongoDB is running locally
- Check connection string in backend `.env`

### API Key Issues
- Verify OpenRouter API key is valid
- Check key is set in backend `.env`

---

## 📧 Support

For issues or questions, please:
- Open an issue on GitHub
- Check existing documentation
- Contact the development team

---

## 📄 License

This project is licensed under the MIT License.

---

**Last Updated:** May 2026
**Version:** 2.0.0 (With Authentication System)

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
