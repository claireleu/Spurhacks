import amongus from "./assets/amongus.png";
import { Word } from "./components.jsx";
import React, { useState } from "react";

function FillTheBlank() {
    
    const correctAnswer = "sigma";
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [showFeedback, setShowFeedback] = useState(false);

    const handleWordClick = (word) => {
        console.log("Selected word:", word);
        setSelectedAnswer(word);
        setShowFeedback(false); // Reset feedback when new answer is selected
    };

    const handleCheck = () => {
        console.log("Check clicked, selectedAnswer:", selectedAnswer);
        if (selectedAnswer) {
            setShowFeedback(true);
            console.log("Feedback shown, isCorrect:", selectedAnswer === correctAnswer);
        }
    };

    const isCorrect = selectedAnswer === correctAnswer;
    console.log("Current state - selectedAnswer:", selectedAnswer, "isCorrect:", isCorrect, "showFeedback:", showFeedback);

    return (
        <div className="bg-[var(--color-grey)] min-h-screen w-full flex flex-col items-center justify-center p-4 sm:p-6 md:p-8">
            <div className="w-full max-w-7xl mx-auto flex flex-col items-center justify-between h-full">
                <div className="w-full flex justify-between items-center px-4 py-2">
                    <button
                        onClick={() => window.location.href = '/'}
                        className="[font-Jersey-15 font-normal text-gray-400 text-5xl cursor-pointer"
                    >
                        X
                    </button>
                    <div></div>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 w-full my-8">
                    <img
                        className="w-1/2 md:w-1/3 lg:w-1/4 h-auto"
                        alt="Among Us"
                        src={amongus}
                    />
                    <div className="flex items-center justify-center gap-2">
                        <div className="font-Jersey-15 font-normal text-[#3c3c3c] text-4xl sm:text-5xl md:text-6xl tracking-wide">
                            Erm what the
                        </div>
                        <div className="font-Jersey-15 font-normal text-[#3c3c3c] text-4xl sm:text-5xl md:text-6xl tracking-wide">
                            {showFeedback && isCorrect ? correctAnswer : "________"}
                        </div>
                        <div className="font-Jersey-15 font-normal text-[#3c3c3c] text-4xl sm:text-5xl md:text-6xl">
                            .
                        </div>
                    </div>
                </div>

                {/* Word Bank */}
                <div className="flex flex-wrap items-center justify-center gap-4 my-8">
                    {["sigma", "sus", "skibidi", "toilet"].map((word, index) => (
                    <Word
                        key={index}
                        divClassName={`text-2xl md:text-3xl font-Jersey-15 transition-all duration-200 ${
                        selectedAnswer === word 
                            ? "bg-gray-600 text-white shadow-lg transform scale-105" 
                            : "bg-white hover:bg-gray-100"
                        }`}
                        text={word}
                        onClick={() => handleWordClick(word)} 
                    />
                    ))}
                </div>

                {/* Check Button */}
                <div className="w-full flex justify-end px-4 py-2">
                <button
                    className={`w-full max-w-xs rounded-full cursor-pointer text-center p-4 font-Jersey-15 font-normal text-3xl md:text-4xl transition-all duration-200 ${
                        selectedAnswer 
                            ? "bg-blue-500 hover:bg-blue-600 text-white" 
                            : "bg-gray-300 text-gray-500 cursor-not-allowed"
                    }`}
                    onClick={handleCheck}
                    disabled={!selectedAnswer}
                >
                    CHECK
                </button>
                </div>

                {/* Feedback */}
                {showFeedback && selectedAnswer && (
                    <div className="w-full flex justify-center px-4 py-2 mb-8">
                        <div className={`text-3xl font-Jersey-15 font-bold px-8 py-4 rounded-lg shadow-lg ${
                            isCorrect 
                                ? "bg-green-500 text-white border-4 border-green-600" 
                                : "bg-red-500 text-white border-4 border-red-600"
                        }`}>
                            {isCorrect ? "✓ CORRECT! Well done!" : "✗ INCORRECT! Try again!"}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default FillTheBlank;