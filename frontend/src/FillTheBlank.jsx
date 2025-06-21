import amongus from "./assets/amongus.png";
import { Word } from "./components.jsx";
import React, { useState } from "react";

function FillTheBlank() {
    const correctAnswer = "sigma";
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [showFeedback, setShowFeedback] = useState(false);

    const handleWordClick = (word) => {
        if (!showFeedback) {
            setSelectedAnswer(word);
        }
    };

    const handleCheck = () => {
        if (selectedAnswer) {
            setShowFeedback(true);
        }
    };

    const handleContinue = () => {
        setSelectedAnswer(null);
        setShowFeedback(false);
    };

    const isCorrect = selectedAnswer === correctAnswer;

    return (
        <div className="bg-[var(--color-grey)] min-h-screen w-full flex flex-col items-center justify-center p-4 sm:p-6 md:p-8">
            <div className="w-full max-w-7xl mx-auto flex flex-col items-center justify-between h-full">
                <div className="w-full flex justify-between items-center px-4 py-2">
                    <button
                        onClick={() => (window.location.href = "/")}
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
                            {showFeedback && selectedAnswer ? selectedAnswer : "________"}
                        </div>
                        <div className="font-Jersey-15 font-normal text-[#3c3c3c] text-4xl sm:text-5xl md:text-6xl">
                            .
                        </div>
                    </div>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-4 my-8">
                    {["sigma", "sus", "skibidi", "toilet"].map((word) => {
                        let stateClasses = "bg-white";
                        if (showFeedback) {
                            if (isCorrect) {
                                stateClasses =
                                    word === selectedAnswer
                                        ? "bg-[#d7ffb8]"
                                        : "bg-gray-100 text-gray-400";
                            } else {
                                if (word === selectedAnswer) {
                                    stateClasses = "bg-[#ffdfe0]";
                                } else {
                                    stateClasses = "bg-gray-100 text-gray-400";
                                }
                            }
                        } else if (word === selectedAnswer) {
                            stateClasses = "bg-gray-300";
                        }

                        return (
                            <Word
                                key={word}
                                text={word}
                                onClick={() => handleWordClick(word)}
                                disabled={showFeedback}
                                divClassName={`text-2xl md:text-3xl font-Jersey-15 px-6 py-2 rounded-lg transition-all duration-200 ${stateClasses}`}
                            />
                        );
                    })}
                </div>
            </div>

            {/* Spacer and Banners Container */}
            <div className="relative w-full" style={{ height: "125px" }}>
                {/* CHECK Button */}
                {!showFeedback && (
                    <div className="absolute bottom-0 w-full flex justify-end px-4 py-8 max-w-4xl mx-auto">
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
                )}

                {/* Feedback Banner */}
                {showFeedback && (
                    <div
                        className={`fixed bottom-0 left-0 w-full p-6 text-white ${
                            isCorrect ? "bg-[#d7ffb8]" : "bg-[#ffdfe0]"
                        }`}
                    >
                        <div className="max-w-4xl mx-auto flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div
                                    className={`w-10 h-10 flex items-center justify-center bg-white rounded-full text-3xl font-bold ${
                                        isCorrect ? "text-green-500" : "text-red-500"
                                    }`}
                                >
                                    {isCorrect ? "✓" : "✗"}
                                </div>
                            </div>
                            <button
                                onClick={handleContinue}
                                className={`px-8 py-3 rounded-lg text-xl font-bold ${
                                    isCorrect
                                        ? "bg-green-500 text-white"
                                        : "bg-red-500 text-white"
                                }`}
                            >
                                CONTINUE
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default FillTheBlank;