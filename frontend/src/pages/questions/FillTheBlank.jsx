import slangoEye from "../../assets/slango-eye.png";
import { usePoints, useHearts } from "../../context/useContext";
import { QuestionBackground, QuestionContent, QuestionQuestion, QuestionAnswers, QuestionCheck, FeedbackBanner, DisplayPoints } from "./components"
import React, { useState, useEffect } from "react";

function FillTheBlank({ onContinue }) {
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [showFeedback, setShowFeedback] = useState(false);
    const [questionData, setQuestionData] = useState(null);
    const { hearts, setHearts } = useHearts()
    const { addPoints } = usePoints()

    useEffect(() => {
        fetch("http://127.0.0.1:5000/generate-fill-in-blank")
            .then((res) => res.json())
            .then((data) => {
                console.log("Got response:", data);
                setQuestionData(data);
            })
            .catch((err) => console.error("Error fetching fill-in-the-blank:", err));
    }, []);

    const handleWordClick = (word) => { // clicking on a word before you submit 
        if (!showFeedback) {
            setSelectedAnswer(word);
        }
    };

    const handleCheck = () => {
        const correctAnswer = questionData?.answer;
        const isCorrect = selectedAnswer === correctAnswer;
        if (!isCorrect) {
            setHearts(prev => prev - 1);
            if (hearts === 1) {
                setTimeout(() => window.location.href = "/gameover", 100);
                return;
            }
        } else {
            addPoints()
        }
        setShowFeedback(true);
    };

    const handleContinue = () => {
        setSelectedAnswer(null);
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

    const correctAnswer = questionData.answer;
    const isCorrect = selectedAnswer === correctAnswer;

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

                <QuestionQuestion
                    image={slangoEye}
                    question={questionData.sentence.replace(questionData.answer,
                        showFeedback && selectedAnswer ? selectedAnswer : "________")}
                />

                <QuestionAnswers
                    answers={questionData.choices}
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
                {showFeedback && (
                    <FeedbackBanner
                        isCorrect={isCorrect}
                        handleContinue={handleContinue}
                        correctAnswer={correctAnswer}
                    />
                )}
            </div>
        </QuestionBackground>
    );
}

export default FillTheBlank;