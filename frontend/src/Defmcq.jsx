import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '../public/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [questionData, setQuestionData] = useState(null)

  const getDefmcq = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/generate-definition-mc')
      const data = await response.json()
      setQuestionData(data) /*added .text before by app.py is already only returning .text*/
      console.log('Got response:', data)
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
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Translate mc Q Generator</h1>

      {questionData && (
        <div className="card">
          <p>{questionData.word}</p>
          <div>
            {questionData.choices.map((choice, index) => (
              <button key={index} style={{ margin: '0.5rem' }}>{choice}</button>
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
