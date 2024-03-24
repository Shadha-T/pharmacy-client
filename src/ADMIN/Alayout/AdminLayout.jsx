import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Sidebar from './Sidebar'


function AdminLayout() {
  return (
    <div className=''>
      <div className="">
        <Navbar />
        <div className="flex">

        <Sidebar />
        <div className="ms-5 mt-4">
        <Outlet/>
        </div>
        </div>
      </div>
      
    </div>
  )
}

export default AdminLayout
