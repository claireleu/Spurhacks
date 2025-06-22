const getRandomQuestionType = (questionTypes) => {
    const length = questionTypes.length;
    const randomIndex = Math.floor(Math.random() * length);
    return questionTypes[randomIndex];
}; 

export default getRandomQuestionType