import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import UserPage from './Pages/userPage';
import ClientPage from './Pages/clientPage';
import ServerPage from './Pages/ServerPage';



const router = createBrowserRouter([


  {


    path: "/",
    element: <App />

  },

  {
    path: "/UserPage",
    element: <UserPage />
  },


  {
    path: "/ClientPage",
    element: <ClientPage />,
    children: [
      {     
        path: "ServerPage",
        element: <ServerPage />
      }
    ]
  },




]);


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

  <React.StrictMode>

    <RouterProvider router={router} />

  </React.StrictMode>

);


