import { BackgroundContainer } from "./components"
import { useState } from "react";

function Rush() {
    const temp = {
        sentence: 'After a long day of classes and extracurriculars, I just want to go home and become completely _____ in my bed.',
        choices: ['rizz', 'ate', 'cooked', 'delulu', 'goblinmode'], 
        answer: 'goblinmode'
    }

    // question is an object containing the question
    const [question, setQuestion] = useState(temp);

    return (
        <BackgroundContainer>
            <div className="flex flex-col items-center justify-center">
                <div className="bg-white">hello</div>
                
            </div>
        </BackgroundContainer>
    )
}

export default Rush