// 1. React core
import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// 2. Router
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'

// 3. Global CSS
import './index.css'
import './root.css'

// 4. API-backed question widgets
import Fitbq  from './Fillintheblank.jsx'
import Defmcq from './Defmcq.jsx'
import Imageq from './Imageqs'

// 5. App pages (for your <RouterProvider>)
import Home            from './pages/Home'
import Endurance       from './pages/Endurance.jsx'
import Rush            from './pages/Rush.jsx'
import FillTheBlank    from './pages/questions/FillTheBlank'
import SentenceSelect  from './pages/questions/SentenceSelect.jsx'
import GameOver        from './pages/GameOver'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  }, {
    path: "/endurance",
    element: <Endurance />
  },{
    path: "/fill-the-blank",
    element: <FillTheBlank />
  }, {
    path: "/rush",
    element: <Rush />
  }, {
    path: "/sentence-select",
    element: <SentenceSelect />
  }, {
    path: "/gameover",
    element: <GameOver />
  }

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)