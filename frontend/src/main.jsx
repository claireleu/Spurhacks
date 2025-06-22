import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Fitbq from './Fillintheblank.jsx' 
import Defmcq from './Defmcq.jsx'
import Imageq from './Imageqs'
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './root.css';
import Home from './pages/Home';
import FillTheBlank from './pages/questions/FillTheBlank';
import Endurance from './pages/Endurance.jsx'
import Rush from './pages/Rush.jsx'
import SentenceSelect from './pages/questions/SentenceSelect.jsx';
import GameOver from './pages/GameOver'

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
    <Imageq/>
  </StrictMode>,
)

    <RouterProvider router={router} />
  </StrictMode>
);