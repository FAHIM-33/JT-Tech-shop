import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import MainLayout from './Layouts/MainLayout'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    errorElement: <div>This is error page</div>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
