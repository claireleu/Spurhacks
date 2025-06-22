import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [questionData, setQuestionData] = useState(null)

  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [hasSubmitted, setHasSubmitted] = useState(false)
  const [isCorrect, setIsCorrect] = useState(null)

  const getDefmcq = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/generate-definition-mc')
      const data = await response.json()
      setQuestionData(data)
      setSelectedAnswer(null)
      setHasSubmitted(false)
      setIsCorrect(null)
      console.log('Got response and all set up, response:', data)
    } catch (err) {
      console.error('Failed to fetch question', err)
    }
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
      </div>

      <h1>Translate mc Q Generator</h1>

      {questionData && (
        <div className="card">
          <p>{questionData.word}</p>
          <div>
            {questionData.choices.map((choice, index) => (
              <button key={index} onClick={() => setSelectedAnswer(choice)}>{choice}</button>
            ))}
          </div>
        </div>
      )}

      <div className="card">
        <button onClick={() => {
          setCount((count) => count + 1)
          getDefmcq()}}>
          mc question counter: {count}
        </button>

      </div>

    </>
  )
}

export default App
