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
    <img src='https://cdn.create.vista.com/api/media/small/25496823/stock-photo-colorful-tablets-with-capsules-and-pills-on-blue-background' className='w-44 h-48 mt-3 rounded-xl'></img>
    {/* </div> */}
       <div className=''>
        <div className='flex gap-3 ml-4'>
            <p className='bg-slate-200 text-rose-500 rounded-md w-16 flex items-center justify-around '>Doctor</p>
            <p>24 March,2024 </p>
        </div>
        <div className=''>
        <p className='ml-3 text-2xl font-semibold'>{item.title}</p>
        <p className='ml-3 text-sm'>{item.description}
</p>
        <button className='bg-rose-400 h-7 w-44 ml-2 text-white rounded-xl mt-3'>Read more</button>
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
