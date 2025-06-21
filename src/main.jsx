import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './root.css';
import Home from './Home.jsx';
import FillTheBlank from './FillTheBlank.jsx';
import SentenceSelect from './SentenceSelect.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/fill-the-blank",
    element: <FillTheBlank />
  },
  {
    path: "/sentence-select",
    element: <SentenceSelect />
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);