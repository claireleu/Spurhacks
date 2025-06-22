import { usePoints } from "../../context/useContext";

const QuestionBackground = ({ children }) => {
    return (
        <div className="bg-grey min-h-screen w-full flex flex-col items-center justify-center p-4 sm:p-6 md:p-8">
            {children}
        </div>
    );
}

const QuestionContent = ({ children }) => {
    return (
        <div className="w-full max-w-7xl mx-auto flex flex-col items-center justify-between h-full">
            {children}
        </div>
    );
}

const QuestionQuestion = ({ image, question }) => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 w-full my-8">
            <img className="w-1/2 md:w-1/3 lg:w-1/4 h-auto" alt="question" src={image} />
            <span className="font-Jersey-15 font-normal text-[#3c3c3c] text-4xl sm:text-5xl md:text-6xl tracking-wide">
                {question}
            </span>
        </div>
    )
}

const QuestionText = ({ question }) => (
    <div className="flex items-center justify-center my-8">
        <span className="font-Jersey-15 font-normal text-[#3c3c3c] text-4xl sm:text-5xl md:text-6xl tracking-wide text-center">
            {question}
        </span>
    </div>
);


const QuestionAnswers = ({ answers, selectedAnswer, handleWordClick, showFeedback, isCorrect }) => {

   const Word = ({ className, divClassName, state, text, onClick, disabled }) => {
    return (
        <div
            onClick={!disabled ? onClick : undefined}
            className={`${className} ${divClassName} ${state} rounded-lg hover:scale-105 ring-1 px-4 py-2 shadow-sm ${disabled ? "cursor-not-allowed" : "cursor-pointer"
                }`}
        >
            {text}
        </div>
    );
}

return (
    <div className="flex flex-wrap items-center justify-center gap-4 my-8">
        {answers.map((answer) => {
            let stateClasses =
                "bg-gray-100 text-gray-800 border border-gray-300 hover:bg-gray-200 transition duration-200 rounded-xl";

            if (showFeedback) {
                if (isCorrect) {
                    stateClasses =
                        answer === selectedAnswer
                            ? "bg-green-100 text-green-800 border-green-300"
                            : "bg-gray-100 text-gray-500 border-gray-200";
                } else {
                    if (answer === selectedAnswer) {
                        stateClasses = "bg-red-100 text-red-700 border-red-300";
                    } else {
                        stateClasses = "bg-gray-100 text-gray-400 border-gray-200";
                    }
                }
            } else if (answer === selectedAnswer) {
                stateClasses = "bg-gray-200 text-gray-900 border-gray-400";
            }

            return (
                <Word
                    key={answer}
                    text={answer}
                    onClick={() => handleWordClick(answer)}
                    disabled={showFeedback}
                    divClassName={`text-2xl md:text-3xl font-Jersey-15 px-6 py-2 rounded-lg transition-all duration-200 ${stateClasses}`}
                />
            );
        })}
    </div>
)

}

const QuestionCheck = ({ showFeedback, handleCheck, selectedAnswer }) => {
    return (
        <>
            {!showFeedback && (
                <div className="absolute bottom-0 w-full flex justify-center md:justify-end px-4 py-8 max-w-4xl mx-auto">
                    <button
                        className={`w-full max-w-xs rounded-full cursor-pointer text-center p-4 font-Jersey-15 font-normal text-3xl md:text-4xl transition-all duration-200 ${selectedAnswer
                            ? "bg-blue-500 hover:bg-blue-600 text-white"
                            : "bg-gray-300 text-gray-500 cursor-not-allowed"
                            }`}
                        onClick={handleCheck}
                        disabled={!selectedAnswer}
                    >
                        CHECK
                    </button>
                </div>
            )}
        </>
    );
}

const DisplayPoints = () => {
    const { points } = usePoints()
    return (
        <div className="absolute top-25 right-5 font-Jersey-15 text-4xl text-white bg-black bg-opacity-30 px-4 py-2 rounded-lg">
            Points: {points}
        </div>
    )
}
const FeedbackBanner = ({ isCorrect, handleContinue, correctAnswer }) => (
  <div
    className={`fixed bottom-0 left-0 w-full p-6 text-white ${
      isCorrect ? "bg-[#d7ffb8]" : "bg-[#ffdfe0]"
    }`}
  >
    <div className="max-w-4xl mx-auto flex items-center justify-between gap-6">
      <div
        className={`w-10 h-10 flex items-center justify-center bg-white rounded-full text-3xl font-bold ${
          isCorrect ? "text-green-500" : "text-red-500"
        }`}
      >
        {isCorrect ? "✓" : "✗"}
      </div>

      <div className="flex-1 font-semibold text-lg text-gray-800 text-left">
        {isCorrect
          ? "Correct!"
          : (
            <>
              Incorrect! The correct answer was{" "}
              <span className="font-bold">{correctAnswer}</span>
            </>
          )
        }
      </div>

      <button
        onClick={handleContinue}
        className={`px-6 py-2 rounded-xl text-lg font-bold transition-colors duration-200 shadow-md ${
          isCorrect
            ? "bg-green-400 hover:bg-green-500 text-white"
            : "bg-red-400 hover:bg-red-500 text-white"
        }`}
      >
        CONTINUE
      </button>
    </div>
  </div>
);


const QuestionLongOptions = ({ answers, selectedAnswer, handleWordClick, showFeedback, isCorrect }) => {

    const Word = ({ className, divClassName, state, text, onClick, disabled }) => {
        return (
            <div
                onClick={!disabled ? onClick : undefined}
                className={`${className} ${divClassName} ${state} rounded-lg px-4 py-4 shadow-md w-full ${disabled ? "cursor-not-allowed" : "cursor-pointer"
                    }`}
            >
                {text}
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center gap-4 my-8 w-full">
            {answers.map((answer) => {
                let stateClasses = "bg-white";
                if (showFeedback) {
                    if (isCorrect) {
                        stateClasses =
                            answer === selectedAnswer
                                ? "bg-[#d7ffb8]"
                                : "bg-gray-100 text-gray-400";
                    } else {
                        if (answer === selectedAnswer) {
                            stateClasses = "bg-[#ffdfe0]";
                        } else {
                            stateClasses = "bg-gray-100 text-gray-400";
                        }
                    }
                } else if (answer === selectedAnswer) {
                    stateClasses = "bg-gray-300";
                }

                return (
                    <Word
                        key={answer}
                        text={answer}
                        onClick={() => handleWordClick(answer)}
                        disabled={showFeedback}
                        divClassName={`text-2xl md:text-3xl font-Jersey-15 px-6 py-4 rounded-lg transition-all duration-200 ${stateClasses}`}
                    />
                );
            })}
        </div>
    )
}

const QuestionImages = ({ answers, selectedAnswer, handleWordClick, showFeedback, isCorrect, imageDataset }) => {
    return (
        <div className="flex justify-between items-center space-x-4">
            {answers.map((answer) => {
                // Find the image URL that matches the answer
                const imageUrl = imageDataset.find((img) => img.name === answer)?.link;

                // Determine the state classes for styling
                let stateClasses = "";
                if (showFeedback) {
                    if (isCorrect && answer === selectedAnswer) {
                        stateClasses = "border-green-500";
                    } else if (!isCorrect && answer === selectedAnswer) {
                        stateClasses = "border-red-500";
                    } else {
                        stateClasses = "border-gray-300";
                    }
                } else if (answer === selectedAnswer) {
                    stateClasses = "border-gray-500";
                }

                return (
                    <div
                        key={answer}
                        className={`relative w-1/3 aspect-[2/3] border-4 rounded-lg overflow-hidden transition-all duration-200 ${stateClasses}`}
                        onClick={() => !showFeedback && handleWordClick(answer)}
                        style={{ cursor: showFeedback ? "not-allowed" : "pointer" }}
                    >
                        {imageUrl ? (
                            <img
                                src={imageUrl}
                                alt={answer}
                                className="w-full h-full object-cover object-center p-2"
                            />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-500">
                                No Image
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
};


export { QuestionBackground, QuestionContent, QuestionQuestion, QuestionText, QuestionAnswers, QuestionCheck, FeedbackBanner, DisplayPoints, QuestionLongOptions, QuestionImages };