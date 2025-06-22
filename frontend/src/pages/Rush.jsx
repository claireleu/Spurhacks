import { useState, useEffect } from "react";
import FillTheBlank from "./questions/FillTheBlank";
import MultipleChoice from "./questions/MultipleChoice";
import ImageSelect from "./questions/ImageSelect";
import getRandomQuestionType from "./Randomiser";
import { DisplayPoints } from "./questions/components";

function Rush() {
  const [timeLeft, setTimeLeft] = useState(60);
  const [questionKey, setQuestionKey] = useState(0);
  const [questionType, setQuestionType] = useState(() =>
    getRandomQuestionType(["fill-in-the-blank", "multiple-choice", "image"])
  );

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      window.location.href = "/gameover";
    }
  }, [timeLeft]);

  const handleContinue = () => {
    setQuestionKey((prev) => prev + 1); // to force remount if needed
    setQuestionType(getRandomQuestionType(["fill-in-the-blank", "multiple-choice", "image"]));
  };

  const props = {
    onContinue: handleContinue,
    key: questionKey,
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="absolute top-5 right-5 text-4xl font-Jersey-15 text-black">
        {timeLeft}s
      </div>
      <DisplayPoints />
      {questionType === "fill-in-the-blank" && <FillTheBlank {...props} />}
      {questionType === "multiple-choice" && <MultipleChoice {...props} />}
      {questionType === "image" && <ImageSelect {...props} />}
    </div>
  );
}

export default Rush;
