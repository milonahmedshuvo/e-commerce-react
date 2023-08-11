import { useState } from 'react'
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import Home from './Components/Home/Home/Home'
import Product from './Components/Home/Home/Product/Product'


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
