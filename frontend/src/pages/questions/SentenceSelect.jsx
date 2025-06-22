import React, { useState } from "react";
import crying from "../../assets/crying.png";

export const SentenceSelect = () => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  // Define the answer options
  const answers = [
    "Bro that fit is giving Ohio energy ngl, looking kinda skibidi toilet if you ask me",
    "Yo my rizz was unmatched, I was giving sigma energy the whole time",
    "Just been mewing all day to get that sigma jawline, gotta lock in and looksmax fr fr"
  ];

  // Set the correct answer (for example, let's say the second option is correct)
  const correctAnswer = answers[1];

  const handleWordClick = (answer) => {
    if (!showFeedback) {
      setSelectedAnswer(answer);
    }
  };

  const handleCheck = () => {
    if (selectedAnswer) {
      const correct = selectedAnswer === correctAnswer;
      setIsCorrect(correct);
      setShowFeedback(true);
    }
  };

  const handleContinue = () => {
    setSelectedAnswer(null);
    setShowFeedback(false);
    setIsCorrect(false);
  };

  const getAnswerStyles = (answer) => {
    let baseStyles = "w-[720px] h-20 top-0 left-1 rounded-xl border-2 border-solid shadow-[0px_2px_0px_#e5e5e5] transition-all duration-200 cursor-pointer";
    if (showFeedback) {
      if (answer === correctAnswer) {
        return `${baseStyles} bg-[#d7ffb8] border-green-300`;
      } else if (answer === selectedAnswer) {
        return `${baseStyles} bg-[#ffdfe0] border-red-300`;
      } else {
        return `${baseStyles} bg-gray-100 border-neutral-200`;
      }
    } else if (answer === selectedAnswer) {
      return `${baseStyles} bg-gray-300 border-gray-400`;
    } else {
      return `${baseStyles} bg-white border-neutral-200 hover:bg-gray-50`;
    }
  };

  return (
    <div className="bg-[#fff4ec] flex flex-row justify-center w-full">
      <div className="bg-[#fff4ec] w-[1440px] h-[1024px] relative">

        {/* Check Button */}
        {!showFeedback && (
          <div className="absolute w-[272px] h-[90px] top-[870px] left-[1080px]">
            <div className="relative w-[270px] h-[90px] rounded-[30px]">
              <button
                onClick={handleCheck}
                disabled={!selectedAnswer}
                className={`absolute w-[270px] h-[90px] top-0 left-0 rounded-[30px] transition-all duration-200 ${
                  selectedAnswer
                    ? "bg-[linear-gradient(180deg,rgba(223,208,196,1)_100%)] hover:bg-[linear-gradient(180deg,rgba(203,188,176,1)_100%)] cursor-pointer"
                    : "bg-gray-300 cursor-not-allowed"
                }`}
              />
              <div className={`absolute w-[132px] top-[17px] left-[75px] font-Jersey-15 font-normal text-[55px] tracking-[0] leading-[normal] pointer-events-none ${
                selectedAnswer ? "text-[#b69e92]" : "text-gray-500"
              }`}>
                CHECK
              </div>
            </div>
          </div>
        )}

        {/* Close Icon */}
        <div className="absolute top-[52px] left-[82px] font-Jersey-15 font-normal text-[#a6a6a6] text-[80px] tracking-[0] leading-[normal] whitespace-nowrap cursor-pointer hover:text-[#8a8a8a]">
          X
        </div>

        {/* Answer Options */}
        <div className="flex flex-col w-[827px] h-[280px] items-center justify-center gap-5 absolute top-[493px] left-[306px]">
          {/* Option 1 */}
          <div className="w-[730.73px] relative h-20">
            <div className="relative w-[729px] h-20">
              <div 
                className={getAnswerStyles(answers[0])}
                onClick={() => handleWordClick(answers[0])}
              />
              <p className="w-[729px] h-12 top-[21px] left-0 absolute font-Jersey-15 font-normal text-[#4b4b4b] text-[40px] text-center tracking-[0] leading-[26.6px] pointer-events-none">
                {answers[0]}
              </p>
            </div>
          </div>

          {/* Option 2 */}
          <div className="w-[730.73px] relative h-20">
            <div className="relative w-[729px] h-20">
              <div 
                className={getAnswerStyles(answers[1])}
                onClick={() => handleWordClick(answers[1])}
              />
              <p className="w-[729px] h-[43px] top-[19px] left-0 absolute font-Jersey-15 font-normal text-[#4b4b4b] text-[40px] text-center tracking-[0] leading-[26.6px] pointer-events-none">
                {answers[1]}
              </p>
            </div>
          </div>

          {/* Option 3 */}
          <div className="w-[722px] relative h-20">
            <div className="relative w-[720px] h-20">
              <div 
                className={getAnswerStyles(answers[2])}
                onClick={() => handleWordClick(answers[2])}
              />
              <p className="w-[688px] h-[43px] top-[17px] left-2.5 absolute font-Jersey-15 font-normal text-[#4b4b4b] text-[40px] text-center tracking-[0] leading-[26.6px] pointer-events-none">
                {answers[2]}
              </p>
            </div>
          </div>
        </div>

        {/* Prompt Section (Top Bubble) */}
        <div className="absolute w-[942px] h-[296px] top-[161px] left-[249px]">
          <div className="inline-flex top-0 left-0 flex-col items-end absolute">
            <div className="relative w-[686px] h-[169px]">
              <div className="inline-flex items-center gap-2.5 px-[26px] py-3.5 absolute top-[57px] left-[122px] bg-white rounded-[15px] border-2 border-solid border-neutral-200">
                <p className="relative w-fit mt-[-2.00px] font-Jersey-15 font-normal text-[#e0734f] text-6xl tracking-[0] leading-[39px] whitespace-nowrap">
                  What did you do today?
                </p>
              </div>
              <img
                src={crying}
                alt="Crying Blue Emoji"
                className="absolute w-[114px] h-[114px] top-7 left-0 object-cover rounded-full"
              />
            </div>
          </div>
        </div>

        {/* User Input Section (Bottom Bubble) */}
        <div className="absolute w-[942px] h-[169px] top-[296px] left-[249px]">
          <div className="inline-flex top-0 left-0 flex-col items-start absolute">
            <div className="relative w-[686px] h-[169px]">
              <div className="inline-flex items-center gap-2.5 px-[26px] py-3.5 absolute top-[57px] left-[122px] bg-white rounded-[15px] border-2 border-solid border-neutral-200 min-h-[100px]">
                <div className="relative w-[530px] h-[60px] border-b-2 border-solid border-[#afafaf]" />
              </div>
              <div className="absolute w-[114px] h-[114px] top-7 left-0 bg-orange-200 rounded-full flex items-center justify-center">
                <div className="w-[80px] h-[80px] bg-orange-300 rounded-full flex items-center justify-center">
                  <div className="text-orange-800 text-2xl">👤</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feedback Banner */}
        {showFeedback && (
          <div
            className={`fixed bottom-0 left-0 w-full p-6 text-white z-50 ${
              isCorrect ? "bg-[#d7ffb8]" : "bg-[#ffdfe0]"
            }`}
          >
            <div className="max-w-4xl mx-auto flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div
                  className={`w-10 h-10 flex items-center justify-center bg-white rounded-full text-3xl font-bold ${
                    isCorrect ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {isCorrect ? "✓" : "✗"}
                </div>
                <span className={`text-xl font-bold ${
                  isCorrect ? "text-green-800" : "text-red-800"
                }`}>
                  {isCorrect ? "Correct!" : "Try again!"}
                </span>
              </div>
              <button
                onClick={handleContinue}
                className={`px-8 py-3 rounded-lg text-xl font-bold ${
                  isCorrect
                    ? "bg-green-500 text-green-800 hover:bg-green-50"
                    : "bg-red-500 text-red-500 hover:bg-red-50"
                }`}
              >
                CONTINUE
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default SentenceSelect;