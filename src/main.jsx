import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './root.css';
import Home from './pages/Home';
import FillTheBlank from './FillTheBlank';
import Rush from './pages/Rush'
import SentenceSelect from './SentenceSelect.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  }, {
    path: "/fill-the-blank",
    element: <FillTheBlank />
  }, {
    path: "/rush",
    element: <Rush />
  }, {
    path: "/sentence-select",
    element: <SentenceSelect />
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);