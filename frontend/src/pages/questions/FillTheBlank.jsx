import amongus from "../../assets/amongus.png";
import React, { useState } from "react";
import { QuestionBackground, QuestionContent, QuestionQuestion, QuestionAnswers, QuestionCheck, FeedbackBanner } from "./components"

function FillTheBlank({ hearts, setHearts }) {
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
            setHearts(prev => prev - 1);
            if (hearts === 1) {
                setTimeout(() => window.location.href = "/gameover", 100);
                return;
            } 
            setShowFeedback(true);
        }
    };

    const handleContinue = () => {
        setSelectedAnswer(null);
        setShowFeedback(false);
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
                    image={amongus}
                    question={`Erm what the ${showFeedback && selectedAnswer ? selectedAnswer : "________"}.`}
                />
                <QuestionAnswers
                    answers={["sigma", "sus", "skibidi", "toilet"]}
                    selectedAnswer={selectedAnswer}
                    handleWordClick={handleWordClick}
                    showFeedback={showFeedback}
                    isCorrect={isCorrect}
                />
            </QuestionContent>
            <div className="relative w-full" style={{ height: "125px" }}>
                <QuestionCheck
                    showFeedback={showFeedback}
                    handleCheck={handleCheck}
                    selectedAnswer={selectedAnswer}
                />
                {showFeedback && <FeedbackBanner isCorrect={isCorrect} handleContinue={handleContinue} />}
            </div>
        </QuestionBackground>
    );
}

export default FillTheBlank;