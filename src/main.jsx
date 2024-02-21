import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import MainLayout from './Layouts/MainLayout'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home/Home'

import PrivateRoute from './routes/PrivateRoute'
import AuthProvider from './Providers/AuthProvider'
import AddProducts from './pages/Add/AddProducts'
import ErrorPage from './pages/ErrorPage/ErrorPage'
import MyCart from './pages/MyCart/MyCart'
import axios from 'axios'
import Update from './pages/Update/Update'
import Login from './Providers/Login'
import Register from './Providers/Register'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/addProduct",
        element: <PrivateRoute><AddProducts></AddProducts></PrivateRoute>,
      },
      {
        path: "/myCart",
        element: <PrivateRoute><MyCart></MyCart></PrivateRoute>,
        loader: ()=> axios.get('https://assignment-10-pied.vercel.app/cart/')
      },
      {
        path: '/update/:id',
        element: <PrivateRoute><Update></Update></PrivateRoute>,
        loader: ({ params }) => axios.get(`https://assignment-10-pied.vercel.app/product/${params.id}`)
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>,
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
