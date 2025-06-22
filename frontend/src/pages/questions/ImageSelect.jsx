import React, { useState } from "react";
import {
  QuestionBackground,
  QuestionContent,
  QuestionQuestion,
  QuestionCheck,
  FeedbackBanner,
} from "./components";
import imageDataset from "../../data/imageDataset.json";

function ImageSelect() {
  // Map options to retrieve images from the dataset
  const options = imageDataset.map((item) => ({
    id: item.id,
    src: item.image, 
    alt: item.label,
  }));

  const correctAnswerId = imageDataset.find(
    (item) => item.label === "Bombardiro Crocodilo"
  )?.id;

  const [selectedOption, setSelectedOption] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const handleImageClick = (id) => {
    if (!showFeedback) {
      setSelectedOption(id);
    }
  };

  const handleCheck = () => {
    if (selectedOption) {
      setShowFeedback(true);
    } else {
      alert("Please select an option first!");
    }
  };

  const handleContinue = () => {
    setSelectedOption(null);
    setShowFeedback(false);
  };

  const isCorrect = selectedOption === correctAnswerId;

  return (
    <QuestionBackground>
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
        <QuestionQuestion question="Select the correct image:" />
        
        {/* Test if vite.svg loads */}
        <div className="mb-4 p-4 bg-white rounded-lg">
          <h3 className="text-lg font-bold mb-2">Testing static assets:</h3>
          <img 
            src="/vite.svg" 
            alt="Vite Logo" 
            className="w-16 h-16 border-2 border-gray-300"
            onError={(e) => {
              console.error("Vite.svg failed to load");
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'block';
            }}
          />
          <div style={{display: 'none'}} className="w-16 h-16 bg-red-200 flex items-center justify-center text-red-600 text-xs">
            Vite.svg failed
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 my-8">
          {options.map((option) => {
            const stateClasses = showFeedback
              ? option.id === correctAnswerId
                ? "border-green-500"
                : option.id === selectedOption
                ? "border-red-500"
                : "border-gray-300"
              : option.id === selectedOption
              ? "border-blue-500"
              : "border-gray-300";

            return (
              <div
                key={option.id}
                className={`w-64 h-64 border-4 rounded-lg overflow-hidden cursor-pointer transition-all duration-200 ${stateClasses}`}
                onClick={() => handleImageClick(option.id)}
              >
                <img
                  src={option.src}
                  alt={option.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            );
          })}
        </div>
      </QuestionContent>
      <div className="relative w-full" style={{ height: "125px" }}>
        <QuestionCheck
          showFeedback={showFeedback}
          handleCheck={handleCheck}
          selectedAnswer={selectedOption}
        />
        {showFeedback && (
          <FeedbackBanner isCorrect={isCorrect} handleContinue={handleContinue} />
        )}
      </div>
    </QuestionBackground>
  );
}

export default ImageSelect;