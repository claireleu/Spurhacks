import { BackgroundContainer, Heart } from "./components"
import { useState, useEffect } from "react";
import FillTheBlank from "./questions/FillTheBlank"

function Rush() {
    const [timeLeft, setTimeLeft] = useState(60);

    useEffect(() => {
        if (timeLeft > 0) {
            const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
            return () => clearTimeout(timer);
        } else if (timeLeft === 0) {
            window.location.href = "/gameover";
        }
    }, [timeLeft]);

    return (
        <div className="flex flex-col items-center justify-center">
            <div className="absolute top-5 right-5 text-4xl font-Jersey-15 text-black">
                {timeLeft}s
            </div>
            <FillTheBlank />
        </div>
    )
}

export default Rush