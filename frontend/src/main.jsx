import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Fitbq from './Fillintheblank.jsx' 
import Defmcq from './Defmcq.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Defmcq/>
  </StrictMode>,
)
