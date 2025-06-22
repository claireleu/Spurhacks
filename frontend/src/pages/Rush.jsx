import { useState, useEffect, useMemo } from "react";
import FillTheBlank from "./questions/FillTheBlank"
import MultipleChoice from "./questions/MultipleChoice";
import ImageSelect from "./questions/ImageSelect";
import getRandomQuestionType from "./Randomiser";
import { DisplayPoints } from "./questions/components";
import { useMode } from "../context/useContext";

function Rush() {
    const [timeLeft, setTimeLeft] = useState(10);
    const { setMode } = useMode()

    useEffect(() => {
      setMode("rush")
    }, [])

    useEffect(() => {
        if (timeLeft > 0) {
            const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
            return () => clearTimeout(timer);
        } else if (timeLeft === 0) {
            window.location.href = "/gameover";
        }
    }, [timeLeft]);

    const currentQuestionTypes = ["fill-in-the-blank", "multiple-choice", "image"]
    const randomQuestionType = useMemo(() => getRandomQuestionType(currentQuestionTypes), [])

    return (
        <div className="flex flex-col items-center justify-center">
            <div className="absolute top-5 right-5 text-4xl font-Jersey-15 text-black">
                {timeLeft}s
            </div>
            <DisplayPoints />
            {randomQuestionType === "fill-in-the-blank" && <FillTheBlank />}
            {randomQuestionType === "multiple-choice" && <MultipleChoice />}
            {randomQuestionType === "image" && <ImageSelect />}
        </div>
    )
}

export default Rush