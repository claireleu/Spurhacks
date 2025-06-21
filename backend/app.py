import os
import json
from google import genai
from dotenv import load_dotenv
from flask import Flask, jsonify
from flask_cors import CORS, cross_origin

load_dotenv()

app = Flask(__name__)
CORS(app, origins=["http://localhost:5173"])

client = genai.Client(api_key=os.getenv("GEMINI_API_KEY"))

@app.route('/generate-fill-in-blank')
@cross_origin(origin='http://localhost:5173')
def generate_brainrot():
    print("Frontend hit the endpoint!")
    response = client.models.generate_content(
        model="gemini-2.0-flash",
        contents="Write one sentence with meaning. Use at most 4 words from 2024–2025 brainrot language," \
        "internet slang, pop culture references, or TikTok comment sections. Keep the sentence between 15 - 25 words, with a clear focus and no emojis." \
        "Then, replace one slang word with a blank in the form of five underscores (_____). Return 5 multiple choice options for that blank — 1 correct word being the one you replaced with the blank and" \
        "4 plausible distractors. Return the result in this exact JSON format:{ sentence: ..., choices: [...], answer: ...}",
        config={
        "response_mime_type": "application/json",
        "temperature": 0.5,
        },
    )
    print(response)
    jsonres = json.loads(response.text)
    print(jsonres)
    return jsonify(jsonres)


if __name__ == '__main__':
    app.run(debug=True)


