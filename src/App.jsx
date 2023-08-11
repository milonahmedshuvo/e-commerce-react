import { useState } from 'react'
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import Home from './Components/Home/Home/Home'


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children: [
         {
           path: "/",
           element: <Home></Home>
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
