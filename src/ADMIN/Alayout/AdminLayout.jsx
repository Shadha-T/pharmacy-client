import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Sidebar from './Sidebar'


function AdminLayout() {
  return (
    <div>
<Navbar/>
<Outlet/>
<Sidebar/>
    </div>
  )
}

export default AdminLayout
