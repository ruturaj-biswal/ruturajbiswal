from flask import Flask, request, jsonify
from flask_cors import CORS
import smtplib
from email.message import EmailMessage
import os

app = Flask(__name__)
CORS(app)

@app.route("/", methods=["POST"])
def send_email():
    data = request.json

    name = data.get("name")
    email = data.get("email")
    message = data.get("message")

    if not name or not email or not message:
        return jsonify({"error": "Missing fields"}), 400

    SMTP_EMAIL = os.getenv("SMTP_EMAIL")
    SMTP_PASSWORD = os.getenv("SMTP_PASSWORD")

    if not SMTP_EMAIL or not SMTP_PASSWORD:
        return jsonify({"error": "Email config missing"}), 500

    try:
        msg = EmailMessage()
        msg["Subject"] = f"New Contact Message from {name}"
        msg["From"] = SMTP_EMAIL
        msg["To"] = SMTP_EMAIL
        msg.set_content(
            f"""
Name: {name}
Email: {email}

Message:
{message}
"""
        )

        with smtplib.SMTP_SSL("smtp.gmail.com", 465) as server:
            server.login(SMTP_EMAIL, SMTP_PASSWORD)
            server.send_message(msg)

        return jsonify({"success": True})

    except Exception as e:
        return jsonify({"error": str(e)}), 500
