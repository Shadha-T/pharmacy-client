import React, { useEffect } from 'react'
import Avatar from '@mui/material/Avatar';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Navbar() {

  useEffect(()=>{
fetchdata()
  },[])
  // const [admin,seAdmin]
 const fetchdata = async()=>{
  try {
    const response = await axios.get('http://localhost:3000/api/admin',{headers:{
      'Authorization':`Bearer ${localStorage.getItem('admin')}`
    }})
console.log(response,"jjjjjjj");

    
  } catch (error) {
    
  }
 }
  return (
    <div>
      <div>
        <div className='sm:flex justify-between bg-red-400 sm:h-12 px-4 sm:px-6 '>
          <h1 className='font-extrabold text-2xl flex items-center text-cyan-700'>Pharmacy</h1>
          <div className='flex items-center gap-4'>
            {
              (localStorage.getItem("token")&& localStorage.getItem("admin"))?
            
    <>
   <Link to={"admin-account"} ><Avatar alt="Remy Sharp" src="" className='hidden md:block' />{JSON.parse(localStorage.getItem("admin")).fname+' ' +JSON.parse(localStorage.getItem("admin")).lname}</Link>

    </>
    :"login/signup"
            }
 
        </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar