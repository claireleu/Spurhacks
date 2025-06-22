import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [imageData, setImageData] = useState(null)

  const getImage = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/generate-imageqs')
      const data = await response.json()
      setImageData(data) 
      setCount(count => count + 1)
      console.log('Got response:', data)
    } catch (err) {
      console.error('Failed to fetch brainrot', err)
    }
  }

  return (
    <div style={{ padding: 20, fontFamily: 'sans-serif' }}>
      <h1>Image Q Generator</h1>

      {imageData && (
        <div className="card" style={{ marginBottom: 20 }}>
      
          <p style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
            {imageData.text}
          </p>

          <div style={{ display: 'flex', gap: 10 }}>
            {imageData.options.map((opt, idx) => (
              <div key={idx} style={{ cursor: 'pointer' }}>
                <img
                  src={opt}
                  alt={`Option ${idx}`}
                  width={150}
                  height={150}
                  style={{ objectFit: 'cover', borderRadius: 8 }}
                />
              </div>
            ))}
          </div>
        </div>
      )}


      <button onClick={getImage} style={{ padding: '0.5rem 1rem' }}>
        Generate Image Question ({count})
      </button>
    </div>
  )
      
}

export default App
