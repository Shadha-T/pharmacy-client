import { ListItem } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Poster3() {
  const [result,setResult]= useState([])
  const fetchdata = async()=>{
    try {
      const response= await axios.get('http://localhost:3000/api/poster')
      setResult(response.data.result)
    } catch (error) {
    
    }
  }

  useEffect(()=>{
    fetchdata()
  },[])

  return (
   <div className=' flex text-white mt-5 bg-custom-gray-dark  flex-wrap h-96'>
    {
      result.map((item)=>{
        return(
          <>
           {/* //  <div className='flex h-96  text-white mt-5' style={{backgroundImage:"url('https://images.unsplash.com/photo-1549740425-5e9ed4d8cd34?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",backgroundAttachment:"fixed"}}> */}
      <div className='ml-14 mt-20'>
        <h1 className='text-custom-plum-dark'>Todays Hot Offer</h1>
        <h1 className='text-4xl font-mono text-custom-plum-dark'>{item.title}</h1>
        <p className='text-custom-plum-dark text-4xl font-mono'>{item.description}
       </p>
       <p className='text-custom-plum-dark font-mono'>Embrace wellness without breaking the bank! Enjoy a generous<br></br>
25% discount on a wide range of vital medicines at our online<br></br>
pharmacy. Your health Matters,and so does your budget</p>
        <button className='bg-custom-plum-light flex gap-3  h-8 justify-start items-center border-1 border-custom-plum-dark rounded-full py-2 px-4 mt-3 text-custom-plum-dark'>Place An Order Now<i class="fa-solid fa-arrow-right"></i></button>
      </div>
     
      <div className=''>
       
         <img src={item.posterimage} className=' h-80 w-full ml-60  mt-8 flex flex-wrap'></img>
      </div>
      {/* </div> */}
          </>
        )
      })
    }
     
      </div>
  )
}

export default Poster3
