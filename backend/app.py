import os
from google import genai
from dotenv import load_dotenv
from flask import Flask, jsonify
from flask_cors import CORS, cross_origin

load_dotenv()

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": ["http://localhost:5000", "http://127.0.0.1:5000"]}})

client = genai.Client(api_key=os.getenv("GEMINI_API_KEY"))

@app.route('/generate-brainrot')
@cross_origin()
def generate_brainrot():
    print("Frontend hit the endpoint!")
    response = client.models.generate_content(
        model="gemini-2.5-flash", contents="Write one sentence in brainrot"
    )
    print(response)
    return jsonify({"text": response.text})


if __name__ == '__main__':
    app.run(debug=True)


