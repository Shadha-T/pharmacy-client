import React from 'react'
import Avatar from '@mui/material/Avatar';

function Navbar() {
  return (
    <div>
       <div className='flex  justify-between   bg-red-400 h-12'>
        <h1 className='font-extrabold  size-9 text-2xl flex  ml-2 items-center  text-cyan-700'>Pharmacy</h1>
        <div className='flex  items-center gap-4 '>
          <p className=''>profile</p>
         <Avatar alt="Remy Sharp" src="" className=''/>
         </div>
      </div>
    </div>
  )
}

export default Navbar
