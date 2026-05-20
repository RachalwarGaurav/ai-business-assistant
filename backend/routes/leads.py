from fastapi import APIRouter
from models import Lead
from database import leads_collection
from datetime import datetime
from fastapi_mail import FastMail, MessageSchema, ConnectionConfig
import os

router = APIRouter()

@router.post("/lead")
def submit_lead(lead: Lead):

    lead_data = lead.dict()

    lead_data["created_at"] = datetime.now()

    leads_collection.insert_one(lead_data)

    return {
        "message": "Lead submitted successfully"
    }

@router.get("/leads")
def get_leads():

    leads = []

    for lead in leads_collection.find():

        lead["_id"] = str(lead["_id"])

        leads.append(lead)

    return leads