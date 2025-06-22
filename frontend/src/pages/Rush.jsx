import { useState, useEffect } from "react";
import FillTheBlank from "./questions/FillTheBlank";
import MultipleChoice from "./questions/MultipleChoice";
import ImageSelect from "./questions/ImageSelect";
import getRandomQuestionType from "./Randomiser";
import { DisplayPoints } from "./questions/components";
import { useMode, usePoints } from "../context/useContext";

function Rush() {
    const [timeLeft, setTimeLeft] = useState(30);
    const [questionKey, setQuestionKey] = useState(0);
    const [questionType, setQuestionType] = useState(() => getRandomQuestionType(["image", "fill-in-the-blank", "multiple-choice"]));
    const { setMode } = useMode();
    const { resetPoints } = usePoints();

    useEffect(() => {
      setMode("rush");
      resetPoints();
    }, [])

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      window.location.href = "/gameover";
    }
  }, [timeLeft]);

  const handleContinue = () => {
    setQuestionKey((prev) => prev + 1);
    setQuestionType(getRandomQuestionType(["fill-in-the-blank", "multiple-choice", "image"]));
  };

  const props = {
    onContinue: handleContinue,
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="absolute top-5 right-5 text-4xl font-Jersey-15 text-black">
        {timeLeft}s
      </div>
      <DisplayPoints />
      {questionType === "fill-in-the-blank" && <FillTheBlank key={questionKey} {...props} />}
      {questionType === "multiple-choice" && <MultipleChoice key={questionKey} {...props} />}
      {questionType === "image" && <ImageSelect key={questionKey} {...props} />}
    </div>
  );
}

export default Rush;
