from pymongo import MongoClient
import os
from dotenv import load_dotenv

load_dotenv()

mongo_uri = os.getenv("MONGO_URI")

if not mongo_uri:
    print("MONGO_URI missing")
    mongo_uri = ""

try:

    client = MongoClient(mongo_uri)

    db = client["business_ai"]

    leads_collection = db["leads"]

    client.admin.command('ping')

    print("Successfully connected to MongoDB Atlas!")

except Exception as e:

    print("MongoDB Connection Failed")

    print(e)