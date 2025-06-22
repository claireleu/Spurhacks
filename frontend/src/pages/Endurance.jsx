import { Heart } from "./components"
import { useState, useEffect } from "react";
import FillTheBlank from "./questions/FillTheBlank"
import ImageSelect from "./questions/ImageSelect"
import MultipleChoice from "./questions/MultipleChoice"
import { DisplayPoints } from "./questions/components";
import getRandomQuestionType from "./Randomiser";
import { useMode } from "../context/useContext";

function Endurance() {
  const [hearts, setHearts] = useState(3)
  const [questionKey, setQuestionKey] = useState(0);
  const [questionType, setQuestionType] = useState(() => getRandomQuestionType(["image", "fill-in-the-blank", "multiple-choice"]));

  const { setMode } = useMode()

  useEffect(() => {
    setMode("endurance")
  }, [])

  const handleContinue = () => {
    setQuestionKey(prev => prev + 1);
    setQuestionType(getRandomQuestionType(["image", "fill-in-the-blank", "multiple-choice"]));
  };

  const renderQuestion = () => {
    const props = {
      hearts,
      setHearts,
      onContinue: handleContinue,
      /*key: questionKey,*/
    };

    if (questionType === "fill-in-the-blank") {
      return <FillTheBlank {...props} />;
    } else if (questionType === "multiple-choice") {
      return <MultipleChoice {...props} />;
    } else if (questionType === "image") {
      return <ImageSelect {...props} />;
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


/*

    const currentQuestionTypes = ["image", "multiple-choice", "fill-in-the-blank"];
    const randomQuestionType = getRandomQuestionType(currentQuestionTypes);

    /*return (
        <div className="flex flex-col items-center justify-center">
            <div className="absolute top-5 right-5 flex flex-row gap-2 w-fit h-6">
                {Array.from({ length: 3 }, (_, i) => (
                    <Heart key={i} filled={i < hearts} pulse={i === (hearts - 1)} />
                ))}
            </div>
            <DisplayPoints />
            {randomQuestionType === "fill-in-the-blank" && <FillTheBlank hearts={hearts} setHearts={setHearts} />}
            {randomQuestionType === "multiple-choice" && <MultipleChoice />}
            {randomQuestionType === "image" && <ImageSelect />}
        </div>
    )*/

/*
    const renderQuestion = () => {
    if (randomQuestionType === "fill-in-the-blank") {
      return (
        <FillTheBlank
          hearts={hearts}
          setHearts={setHearts}
          onContinue={handleContinue}
          key={questionKey}
        />
      );
    } else if (randomQuestionType === "multiple-choice") {
      return (
        <MultipleChoice
          hearts={hearts}
          setHearts={setHearts}
          onContinue={handleContinue}
          key={questionKey}
        />
      );
    } else if (randomQuestionType === "image") {
      return (
        <ImageSelect
          hearts={hearts}
          setHearts={setHearts}
          onContinue={handleContinue}
          key={questionKey}
        />
      );
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

export default Endurance


*/