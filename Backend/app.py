from flask import Flask, request, jsonify
from flask_cors import CORS
import smtplib
from email.message import EmailMessage
import os

app = Flask(__name__)
CORS(app)

# ================================
# CONFIG (CHANGE THESE)
# ================================
SMTP_EMAIL = "munabiswal955@gmail.com"
SMTP_PASSWORD = "fnazvueuxkyquliw"

# ================================
# ROUTE
# ================================
@app.route("/send-email", methods=["POST"])
def send_email():
    data = request.json

    name = data.get("name")
    email = data.get("email")
    message = data.get("message")

    if not name or not email or not message:
        return jsonify({"error": "Missing fields"}), 400

    try:
        msg = EmailMessage()
        msg["Subject"] = f"New Contact Message from {name}"
        msg["From"] = SMTP_EMAIL
        msg["To"] = SMTP_EMAIL
        msg.set_content(
            f"""
You received a new message from your portfolio website.

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


if __name__ == "__main__":
    app.run(debug=True, port=5000)
