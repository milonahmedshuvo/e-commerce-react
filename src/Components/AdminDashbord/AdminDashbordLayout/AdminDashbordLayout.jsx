import React from 'react'
import AdminNavber from '../AdminNavber/AdminNavber'
import { Outlet } from 'react-router-dom'

const AdminDashbordLayout = () => {
      

  return (
    <div>
      <AdminNavber></AdminNavber>
      <Outlet></Outlet>
    </div>
  )
}

export default AdminDashbordLayout
