import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './root.css';
import Home from './pages/Home';
import FillTheBlank from './pages/questions/FillTheBlank';
import Endurance from './pages/Endurance'
import Rush from './pages/Rush.jsx'
import SentenceSelect from './pages/questions/SentenceSelect';
import GameOver from './pages/GameOver'
import PointsProvider from './context/Points'

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
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PointsProvider>
      <RouterProvider router={router} />
    </PointsProvider>
  </StrictMode>
);