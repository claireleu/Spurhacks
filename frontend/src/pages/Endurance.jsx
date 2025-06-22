import { BackgroundContainer, Heart } from "./components"
import { useState } from "react";
import FillTheBlank from "./questions/FillTheBlank"

function Endurance() {
    const [hearts, setHearts] = useState(3)
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="absolute top-5 right-5 flex flex-row gap-2 w-fit h-6">
                {Array.from({ length: 3 }, (_, i) => (
                    <Heart key={i} filled={i < hearts} pulse={i === (hearts - 1)} />
                ))}
            </div>
            <FillTheBlank hearts={hearts} setHearts={setHearts}/>
        </div>
    )
}

export default Endurance