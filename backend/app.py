import os
import json
import random
from google import genai
from dotenv import load_dotenv
from flask import Flask, jsonify
from flask_cors import CORS, cross_origin

load_dotenv()

with open('../frontend/src/data/imageDataset.json') as f:
    image_dataset = json.load(f)

app = Flask(__name__)
CORS(app, origins=["http://localhost:5173"])

client = genai.Client(api_key=os.getenv("GEMINI_API_KEY"))

@app.route('/generate-fill-in-blank')
@cross_origin(origin='http://localhost:5173')
def generate_fillinblank():
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

    jsonres = json.loads(response.text)
    return jsonify(jsonres)

@app.route('/generate-definition-mc')
@cross_origin (origin='http://localhost:5173')
def generate_definitionmc():
    print("Frontend hit the endpoint!")
    response = client.models.generate_content(
        model="gemini-2.0-flash",
        contents="give me one brain rot slang word from internet culture, pop culture reference," \
        "tiktok commen section, common recent acronyms like pmo. then give me the normal english translation" \
        "of the slang word along with two distractors. Return the result in this exact" \
        "JSON format:{ word: ..., choices: [...], answer: ...}",
        config={
        "response_mime_type": "application/json",
        "temperature": 0.5,
        },
    )
    print(response)
    jsonres = json.loads(response.text)
    print(jsonres)
    return jsonify(jsonres)

@app.route('/generate-imageqs')
@cross_origin (origin='http://localhost:5173')
def generate_imageq() :
    correct_set = random.choice(image_dataset)
    correct_label = correct_set['label']
    print(correct_label)
    correct_image = correct_set["image"]

    others = []
    for item in image_dataset:
        if item['label'] != correct_label:
            others.append(item["image"])

    distractors = random.sample(others, 2)
    options = [correct_image, distractors[0], distractors[1]]
    random.shuffle(options)

    for idx, img in enumerate(options):
        print(f"  Option {idx}:", img)

    correct_index = next(i for i, opt in enumerate(options) if opt == correct_image)
    print(correct_index)
    question_obj = {
        "text": f'Which of these is "{correct_label}"?',
        "options": options,
        "correctIndex": correct_index
    }
    print(question_obj)

    return jsonify(question_obj)

if __name__ == '__main__':
    app.run(debug=True)


