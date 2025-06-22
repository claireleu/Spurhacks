import React, { useState, useEffect } from "react";
import { QuestionBackground, QuestionContent, QuestionQuestion, QuestionText, QuestionCheck, FeedbackBanner, DisplayPoints } from "./components"
import { usePoints, useHearts } from "../../context/useContext";

function ImageSelect({ onContinue }) {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [questionData, setQuestionData] = useState(null);
  const { hearts, setHearts } = useHearts()
  const { addPoints } = usePoints()

  useEffect(() => {
    fetch("http://127.0.0.1:5000/generate-imageqs")
      .then((res) => res.json())
      .then((data) => {
        console.log("Got response:", data);
        setQuestionData(data);
      })
      .catch((err) => console.error("Error fetching fill-in-the-blank:", err))
  }, []);

  const handleImageClick = (index) => {
    if (!showFeedback) {
      setSelectedIndex(index);
    }
  };

  const handleCheck = () => {
    const isCorrect = selectedIndex === questionData.correctIndex;
    if (!isCorrect) {
      setHearts(prev => prev - 1);
      if (hearts === 1) {
        setTimeout(() => window.location.href = "/gameover", 100);
        return;
      }
    } else {
      addPoints();
    }
    setShowFeedback(true);
  };

  const handleContinue = () => {
    setSelectedIndex(null);
    setShowFeedback(false);
    onContinue();
  };

  if (!questionData) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-gray-500 text-xl animate-pulse">Loading...</p>
      </div>
    );
  }

  const isCorrect = selectedIndex === questionData.correctIndex;

  return (
    <QuestionBackground>
      <DisplayPoints />
      <QuestionContent>

        <div className="w-full flex justify-between items-center px-4 py-2">
          <button
            onClick={() => (window.location.href = "/")}
            className="font-Jersey-15 font-normal text-gray-400 text-5xl cursor-pointer"
          >
            X
          </button>
          <div></div>
        </div>

        <QuestionText
          question={questionData.text}
        />

        <div className="grid grid-cols-3 gap-4 my-6">
          {questionData.options.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Option ${idx + 1}`}
              onClick={() => handleImageClick(idx)}
              className={`cursor-pointer border-4 rounded-2xl transition-all duration-200 h-48 object-cover
                ${selectedIndex === idx ? "border-yellow-400 scale-105" : "border-transparent"}
                ${showFeedback && idx === questionData.correctIndex ? "ring-4 ring-green-400" : ""}
              `}
            />
          ))}
        </div>

      </QuestionContent>


      <div className="relative w-full" style={{ height: "125px" }}>
        <QuestionCheck
          showFeedback={showFeedback}
          handleCheck={handleCheck}
          selectedAnswer={selectedIndex !== null}
        />
        {showFeedback && (
          <FeedbackBanner
            isCorrect={isCorrect}
            handleContinue={handleContinue}
            correctAnswer={`Image: ${questionData.correctIndex + 1}`}
          />
        )}

      </div>
    </QuestionBackground>
  );
}

export default ImageSelect;