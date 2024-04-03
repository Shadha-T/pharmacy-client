import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Blog1() {
    const [result,setResult]= useState([])
    useEffect(()=>{
        fetchdata()
    },[])
 const fetchdata = async()=>{
    try {
       const response = await axios.get('http://localhost:3000/api/blog') 
       console.log(response,"rrr");
       setResult(response.data.result)
    } catch (error) {
        
    }
 }
  return (
    <div>
      {
    result.map((item)=>{
        return(

       
        <>
        
<div className='mt-10'>
    <div className=''>
        <img src={item.blogimage} className='w-3/4 ml-7 h-60  rounded-2xl my-3'>
        </img>
        <div className='flex'>
        <p className='bg-slate-200 text-custom-plum-light ml-8 rounded-2xl w-16 flex items-center justify-around '>Doctor</p>
                   <p>24 Dec,2024</p>
        </div>
        <div className='ml-8'>
        <p className='text-3xl'>{item.title}</p>
                   <p className='text-3xl'>{item.description}
                  </p>
                  <p>Explore the world of medical specialities through our blog's<br></br> spotlightfeature.From cardiology to
                  pediatrics,we share  <br></br>articles writtenby our experts physicians</p>
        </div>
        <button className='bg-custom-plum-light h-7 w-44 ml-8 text-white rounded-lg mt-2 mb-3'>Read more</button>

    </div>
</div>
        </>
         )
    })
}
    </div>
  )
}

export default Blog1
