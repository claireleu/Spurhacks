// 1. React core
import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// 2. Router
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'

// 3. Global CSS
import './root.css'

// 4. API-backed question widgets
import Fitbq from './Fillintheblank.jsx'
import Defmcq from './Defmcq.jsx'
import Imageq from './Imageqs'

// 5. App pages (for your <RouterProvider>)
import Home from './pages/Home'
import Endurance from './pages/Endurance.jsx'
import Rush from './pages/Rush.jsx'
import FillTheBlank from './pages/questions/FillTheBlank'
import SentenceSelect from './pages/questions/SentenceSelect.jsx'
import GameOver from './pages/GameOver'

import PointsProvider from './context/Points'
import ImageSelect from './pages/questions/ImageSelect.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  }, {
    path: "/endurance",
    element: <Endurance />
  }, {
    path: "/rush",
    element: <Rush />
  }, {
    path: "/gameover",
    element: <GameOver />
  },
  // Testing
  {
    path: "/fill-the-blank",
    element: <FillTheBlank />
  }, {
    path: "/sentence-select",
    element: <SentenceSelect />
  }, {
    path: "/gameover",
    element: <GameOver />
  }, {
    path: "/image-select",
    element: <ImageSelect />
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PointsProvider>
      <RouterProvider router={router} />
    </PointsProvider>
  </StrictMode>
)