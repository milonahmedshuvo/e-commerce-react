import React from 'react'
import Navber from '../Sheared/Navber'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='mx-0 md:mx-5'>
      <Navber></Navber>
      <Outlet></Outlet>
    </div>
  )
}

export default Layout
