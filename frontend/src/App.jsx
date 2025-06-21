import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '../public/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [brainrotText, setBrainrot] = useState('')

  const getBrainrot = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/generate-brainrot')
      const data = await response.json()
      setBrainrot(data.text)
      console.log('Got response:', data)
    } catch (err) {
      console.error('Failed to fetch brainrot', err)
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
      <h1>Brainrot Generator</h1>
      <div className="card">
        <button onClick={() => {
          setCount((count) => count + 1)
          getBrainrot()}}>
          brainrot counter: {count}
        </button>
        {/* 🆕 show the sentence if we have one */}
        {brainrotText && <p style={{ marginTop: '1rem' }}>sentence: {brainrotText}</p>}
      </div>
    </>
  )
}

export default App
