import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Blog2() {
    const [result,setResult]= useState([])
    useEffect(()=>{
        fetchdata()
    },[])
 const fetchdata = async()=>{
    try {
       const response = await axios.get('http://localhost:3000/api/blog2') 
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

<div className='  '>
    <div className='flex'>
    {/* <div className=''> */}
    <img src={item.blog2image} className='w-32 h-40 mt-3 rounded-xl'></img>
    {/* </div> */}
       <div className=''>
        <div className='flex gap-3 ml-4 mt-3'>
            <p className='bg-slate-200 text-custom-plum-light rounded-md w-16 flex items-center justify-around '>Doctor</p>
            <p>24 March,2024 </p>
        </div>
        <div className=''>
        <p className='ml-3 text-2xl font-semibold'>{item.title}</p>
        <p className='ml-3 text-2xl font-semibold'>{item.description}
</p>
<p className='text-sm ml-4'>From nutrition advice to exercise routines,we are <br></br>here to support your journey toward a healthier</p>
        <button className='bg-custom-plum-light h-7 w-32 ml-2 text-white rounded-lg mt-2'>Read more</button>
        </div>
   

       </div>
       </div>
      </div>
                </>
            )
        })
       } 
        

    </div>
  )
}

export default Blog2
