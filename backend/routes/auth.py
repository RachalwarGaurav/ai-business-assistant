from fastapi import APIRouter
from pydantic import BaseModel
from datetime import datetime

router = APIRouter()

# Simple admin credentials (in production, use proper database and hashing)
ADMIN_USERNAME = "admin"
ADMIN_PASSWORD = "Admin@2024"

# Store user credentials (in production, use a database with hashed passwords)
users_db = {}

class LoginRequest(BaseModel):
    username: str
    password: str

class SignupRequest(BaseModel):
    username: str
    email: str
    password: str

@router.post("/auth/admin-login")
def admin_login(data: LoginRequest):
    if data.username == ADMIN_USERNAME and data.password == ADMIN_PASSWORD:
        return {
            "success": True,
            "message": "Admin login successful",
            "token": "admin_token_12345",
            "role": "admin"
        }
    return {
        "success": False,
        "message": "Invalid admin credentials"
    }

@router.post("/auth/signup")
def user_signup(data: SignupRequest):
    if data.username in users_db:
        return {
            "success": False,
            "message": "Username already exists"
        }
    
    users_db[data.username] = {
        "email": data.email,
        "password": data.password,
        "created_at": datetime.now()
    }
    
    return {
        "success": True,
        "message": "User registered successfully",
        "token": f"user_token_{data.username}"
    }

@router.post("/auth/user-login")
def user_login(data: LoginRequest):
    if data.username in users_db and users_db[data.username]["password"] == data.password:
        return {
            "success": True,
            "message": "User login successful",
            "token": f"user_token_{data.username}",
            "role": "user",
            "username": data.username
        }
    return {
        "success": False,
        "message": "Invalid credentials"
    }
