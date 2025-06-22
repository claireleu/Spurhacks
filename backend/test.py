import os
import json
import random
from google import genai
from dotenv import load_dotenv
from flask import Flask, jsonify

with open('../frontend/src/data/imageDataset.json') as f:
    image_dataset = json.load(f)

set = random.choice(image_dataset)
correct_label = set['label']
print(correct_label)
correct_image = set['image']

others = []
for item in image_dataset:
    if item['label'] != correct_label:
        others.append(item['image'])

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


