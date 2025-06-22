import crying from "../../assets/crying.png";
import React, { useState } from "react";
import { QuestionBackground, QuestionContent, QuestionQuestion, QuestionAnswers, QuestionCheck, FeedbackBanner, QuestionLongOptions } from "./components";

function SentenceSelect() {

    const sentences = [
        "Bro that fit is giving Ohio energy ngl, looking kinda skibidi toilet if you ask me",
        "Yo my rizz was unmatched, I was giving sigma energy the whole time",
        "Just been mewing all day to get that sigma jawline, gotta lock in and looksmax fr fr",
      ];

    const correctAnswer = "Just been mewing all day to get that sigma jawline, gotta lock in and looksmax fr fr";
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [showFeedback, setShowFeedback] = useState(false);

    const handleWordClick = (word) => {
        if (!showFeedback) {
            setSelectedAnswer(word);
        }
    };

    const handleContinue = () => {
        setSelectedAnswer(null);
        setShowFeedback(false);
    };

    const handleCheck = () => {
        if (selectedAnswer) {
            setShowFeedback(true);
        }
    };
    
    const isCorrect = selectedAnswer === correctAnswer;

  return (
    <QuestionBackground>
            <QuestionContent>
                <div className="w-full flex justify-between items-center px-4 py-2">
                    <button
                        onClick={() => (window.location.href = "/")}
                        className="[font-Jersey-15 font-normal text-gray-400 text-5xl cursor-pointer"
                    >
                        X
                    </button>
                    <div></div>
                </div>
                <QuestionQuestion
                    image={crying}
                    question={`What did you do today?`}
                />
                <QuestionLongOptions
                    answers={[
                        "Bro that fit is giving Ohio energy ngl, looking kinda skibidi toilet if you ask me",
                        "Yo my rizz was unmatched, I was giving sigma energy the whole time",
                        "Just been mewing all day to get that sigma jawline, gotta lock in and looksmax fr fr",
                    ]}
                    selectedAnswer={selectedAnswer}
                    handleWordClick={(answer) => console.log("Selected answer:", answer)}
                    showFeedback={false}
                    isCorrect={false}
                />
            </QuestionContent>
            <div className="relative w-full" style={{ height: "125px" }}>
                <QuestionCheck showFeedback={showFeedback} handleCheck={handleCheck} selectedAnswer={selectedAnswer} />
                {showFeedback && <FeedbackBanner isCorrect={isCorrect} handleContinue={handleContinue} />}
            </div>
        </QuestionBackground>
  );
};

export default SentenceSelect;