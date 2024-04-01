import axios from 'axios'
import React, { useEffect, useState } from 'react'


function Banner1() {
    const [result,setResult]= useState([])
    useEffect(()=>{
        fetchdata()
    },[])
 const fetchdata = async()=>{
    try {
       const response = await axios.get('http://localhost:3000/api/banner') 
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
                                <div className='bg-pink-200 h-80  flex ml-2 justify-center items-center rounded-md'>
          
          <div className='ml-5 mt-5'>
          <div className='flex bg-red-400 h-6 w-24 items-center justify-center rounded-md'>
      <p className=''>{item.percentage}</p>
      <p>OFF</p>
  </div>
<p className='text-2xl font-bold'> {item.title}</p>
<p className='font-serif'>{item.description}<br></br>Hair With Black Garlic <br></br>Oil.</p>

<p>{item.price}</p>
<div className='flex gap-3'>
  <p className='font-bold'>{item.offerprice}</p>
  <p className='text-sm'>including tax</p>
</div>
</div>
<div className=''>
  <img src={item.bannerimage} />
</div>
      </div>
                        </>
                    )
            
            
        })
    }

    </div>
  )
}

export default Banner1
