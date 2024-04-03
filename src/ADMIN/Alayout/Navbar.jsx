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
        <div className='sm:flex justify-between bg-custom-gray-dark h-14 items-center'>
          <h1 className='font-sans  size-9 text-2xl flex  ml-2 items-center mt-2 text-custom-brown-dark mb-4 sm:mb-0'>Pharmacy</h1>
          <div className='flex items-center gap-3 justify-around '>
            {
              (localStorage.getItem("token")&& localStorage.getItem("admin")) ?
            
    <>
   <Link to={"admin-account"} >{JSON.parse(localStorage.getItem("admin")).fname+' ' +JSON.parse(localStorage.getItem("admin")).lname}</Link><Avatar alt="Remy Sharp" src="" className='hidden md:block' />

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