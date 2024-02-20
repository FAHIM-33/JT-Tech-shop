import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import MainLayout from './Layouts/MainLayout'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home/Home'

import PrivateRoute from './routes/PrivateRoute'
import AuthProvider from './Providers/AuthProvider'
import AddProducts from './pages/Add/AddProducts'

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
      {
        path: "/addProduct",
        element: <PrivateRoute><AddProducts></AddProducts></PrivateRoute>,
      },
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
