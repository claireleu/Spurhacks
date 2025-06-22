import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [brainrotData, setBrainrotData] = useState(null)

  const getBrainrot = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/generate-fill-in-blank')
      const data = await response.json()
      setBrainrotData(data)
      console.log('Got response:', data)
    } catch (err) {
      console.error('Failed to fetch brainrot', err)
    }
  }

  return (
    <>
      <h1>Fill in the Blank Generator</h1>
      {brainrotData && (
        <div className="card">
          <p>{brainrotData.sentence}</p>
          <div>
            {brainrotData.choices.map((choice, index) => (
              <button key={index} style={{ margin: '0.5rem' }}>{choice}</button>
            ))}
          </div>
        </div>
      )}
      <div className="card">
        <button onClick={() => {
          setCount((count) => count + 1)
          getBrainrot()}}>
          brainrot counter: {count}
        </button>
      </div>
    </>
  )
}

export default App
