import { useState } from 'react'
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import Home from './Components/Home/Home/Home'
import Product from './Components/Home/Home/Product/Product'
import CardPage from './Components/CardRoute/CardPage/CardPage'
import PhoneAuth from './Components/PhoneAuth'
import CheckOutPage from './Components/CardRoute/CardPage/CheckOutPage'
import AdminDashbordLayout from './Components/AdminDashbord/AdminDashbordLayout/AdminDashbordLayout'
import AdminOrder from './Components/AdminDashbord/AdminOrder/AdminOrder'
import AdminProduct from './Components/AdminDashbord/AdminProduct/AdminProduct'


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children: [
         {
           path: "/",
           element: <Home></Home>
         },
         {
           path:"/product",
           element: <Product></Product>
         },
         {
            path:'/cardpage',
            element: <CardPage></CardPage>
         },
         {
            path: '/phoneauth',
            element: <PhoneAuth></PhoneAuth>
         },
         {
            path: '/checkout',
            element: <CheckOutPage></CheckOutPage>
         }           
      ],
      
    },
    {
       path: "/admindashbord",
       element: <AdminDashbordLayout></AdminDashbordLayout>,
       children: [
          {
              path: "/admindashbord/adminOrder",
              element: <AdminOrder></AdminOrder>
          },
          {
              path: "/admindashbord/adminproduct",
              element: <AdminProduct></AdminProduct>
          }
       ]
    }
  ])







  
  return (
    <>
      <RouterProvider router={router}>

      </RouterProvider>
    </>
  )
}

export default App
