import { Heart } from "./components"
import { useState } from "react";
import FillTheBlank from "./questions/FillTheBlank"
import SentenceSelect from "./questions/SentenceSelect";
import { DisplayPoints } from "./questions/components";
import { getRandomQuestionType } from "./questionUtils";

function Endurance() {
    const [hearts, setHearts] = useState(3)
    const currentQuestionTypes =  ["fill-in-the-blank", "multiple-choice", "image"]
    const randomQuestionType = getRandomQuestionType(currentQuestionTypes)

    return (
        <div className="flex flex-col items-center justify-center">
            <div className="absolute top-5 right-5 flex flex-row gap-2 w-fit h-6">
                {Array.from({ length: 3 }, (_, i) => (
                    <Heart key={i} filled={i < hearts} pulse={i === (hearts - 1)} />
                ))}
            </div>
            <DisplayPoints />
            {randomQuestionType === "fill-in-the-blank" && <FillTheBlank hearts={hearts} setHearts={setHearts} />}
            {randomQuestionType === "multiple-choice" && <ImageSelect />}
            {randomQuestionType === "image" && <SentenceSelect />}
        </div>
    )
}

export default Endurance