// React 
import React from 'react';
import ReactDOM from 'react-dom/client';

// Router
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
// Ressources
import './ressources/css/index.css';
import Kasa from './components/Kasa.jsx';
import APropos from './components/APropos.jsx';
import Error404 from './components/Error404.jsx';
// Vitals
import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/accueil"/>,
    errorElement: <Error404 />,
  },
  {
    path: "/accueil",
    element: <Kasa />,
  },
  {
    path: "/a-propos",
    element: <APropos />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
