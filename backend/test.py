import os
import json
from google import genai
from dotenv import load_dotenv
from flask import Flask, jsonify

load_dotenv()
client = genai.Client(api_key=os.getenv("GEMINI_API_KEY"))
response = client.models.generate_content(
        model="gemini-2.0-flash",
        contents="Write one sentence with meaning. Use at most 4 words from 2024–2025 brainrot language," \
        "internet slang, pop culture references, or TikTok comment sections. Keep the sentence between 15 - 25 words, with a clear focus and no emojis." \
        "Then, randomly replace one slang or pop culture word with a blank (____). Return 5 multiple choice options for that blank — 1 correct word and" \
        "4 plausible distractors. Return the result in this exact JSON format:{ sentence: ..., choices: [...], answer: ...}",
        config={
        "response_mime_type": "application/json",
        "temperature": 0.5,
        },
    )

print(response.text)
jsonres = json.loads(response.text)
#jsonres = jsonify(jsonres)
print(jsonres)