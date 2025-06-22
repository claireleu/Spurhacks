import { Heart } from "./components"
import { useState, useEffect } from "react";
import FillTheBlank from "./questions/FillTheBlank"
import ImageSelect from "./questions/ImageSelect"
import MultipleChoice from "./questions/MultipleChoice"
import { DisplayPoints } from "./questions/components";
import getRandomQuestionType from "./Randomiser";
import { useMode, useHearts, usePoints } from "../context/useContext";

function Endurance() {
  const { hearts, setHearts } = useHearts();
  const { resetPoints } = usePoints();
  const [questionKey, setQuestionKey] = useState(0);
  const [questionType, setQuestionType] = useState(() => getRandomQuestionType(["image", "fill-in-the-blank", "multiple-choice"]));
  const { setMode } = useMode()

  useEffect(() => {
    setMode("endurance");
    setHearts(3);
    resetPoints();
  }, [])

  useEffect(() => {
    if (hearts <= 0) {
      setTimeout(() => {
        window.location.href = "/gameover"
      }, 100);
    }
  }, [hearts]);

  const handleContinue = () => {
    setQuestionKey(prev => prev + 1);
    setQuestionType(getRandomQuestionType(["image", "fill-in-the-blank", "multiple-choice"]));
  };

  const renderQuestion = () => {
    const props = {
      onContinue: handleContinue,
      key: questionKey,
    };

    if (questionType === "fill-in-the-blank") {
      return <FillTheBlank key={questionKey} {...props} />;
    } else if (questionType === "multiple-choice") {
      return <MultipleChoice key={questionKey} {...props} />;
    } else if (questionType === "image") {
      return <ImageSelect key={questionKey} {...props} />;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="absolute top-5 right-5 flex flex-row gap-2 w-fit h-6">
        {Array.from({ length: 3 }, (_, i) => (
          <Heart key={i} filled={i < hearts} pulse={i === hearts - 1} />
        ))}
      </div>
      <DisplayPoints />
      {renderQuestion()}
    </div>
  );
}

export default Endurance;
