# Duoslango

A fun React + Vite web app to learn internet slang through interactive, humorous modules — powered by a Flask backend with AI-generated content.

---

## Table of Contents
- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Setup Instructions](#setup-instructions)
  - [Backend (Python Flask)](#backend-python-flask)
  - [Frontend (React + Vite)](#frontend-react--vite)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

---

## Project Overview

Duoslango is an educational and entertaining web app designed to teach modern internet slang and memes. The frontend is built with React and Vite, while the backend uses Flask to generate slang content dynamically via AI APIs.

---

## Features

- Multiple interactive question types (multiple choice, fill in the blank, image select)
- AI-powered question generation with Gemini API
- Lives system for game-like engagement
- Community leaderboard and progress tracking (planned)
- TailwindCSS for modern styling

---

## Tech Stack

- **Frontend:** React, Vite, TailwindCSS  
- **Backend:** Python, Flask, Flask-CORS, dotenv  
- **AI:** Google Gemini API (for slang content generation)  
- **Other:** ESLint for linting, Python virtual environment for backend dependencies

---

## Setup Instructions

### Backend (Python Flask)

1. Install Python (>=3.8 recommended)  
2. Create and activate a virtual environment:

   ```bash
   # macOS / Linux
   python3 -m venv venv
   source venv/bin/activate

   # Windows (PowerShell)
   python -m venv venv
   .\venv\Scripts\Activate.ps1
   ```
   
3. Install required packages:

   ```bash
   pip install flask flask-cors python-dotenv google
   ```

4. Run the Flask backend:

  ```bash
  python app.py
 ```

### Frontend (React + Vite)

1. Install Node.js (>=16 recommended)  
2. Install project dependencies:

   ```bash
   npm install
   ```
3. Install TailwindCSS plugin for Vite:

   ```bash
   npm install tailwindcss @tailwindcss/vite
   ```
4. Start the development server:

   ```bash
   npm run dev
   ```

## Usage

- Visit `http://localhost:5173`  
- Play through and level up your vocabulary!

