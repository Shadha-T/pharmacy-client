import React from 'react'
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { BsBagPlus } from "react-icons/bs";
import Avatar from '@mui/material/Avatar';

import ToggleDropdown from './DropDown';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <div className='flex  justify-between  mt-4 bg-red-400 h-12 '>
        <h1 className='font-extrabold  size-9 text-2xl flex  ml-2 items-center  text-cyan-700'>Pharmacy</h1>

        <form className="flex items-center max-w-sm mx-auto">   
   
    <div className="relative w-full">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          
        </div>
        <input type="text" id="simple-search" className= "w-64 h-7 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block ps-10 p-2.5  dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search products... " required  />
       
    </div>
    <button type="submit" className="p-2.5 ms-2 text-sm font-medium text-white bg-cyan-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-10">
      
        <CiSearch  className='h-3'/>
    
    </button>
</form>
      
        
        <div className='flex  items-center gap-4 '>
       
      <Link to={"user-account"}><Avatar alt="Remy Sharp" src="" className=''/></Link>  
<ToggleDropdown/>
       
        
        </div>
      </div>
    </div>
  )
}

export default Navbar
