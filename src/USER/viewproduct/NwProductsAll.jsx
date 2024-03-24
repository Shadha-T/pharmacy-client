import { Card } from "@mui/material"
import axios from "axios"
import { useEffect, useState } from "react"





function NwProductsAll() {
  const [result,setResult]= useState([])


   


    useEffect(()=>{
      fetchdata()
    },[])

    const fetchdata = async()=>{
      try {
        const response= await axios.get('http://localhost:3000/api/product')
        setResult(response.data.result)
      } catch (error) {
      
      }
    }



  return (
    <div className='mt-5'>
    
        <div className=' ml-56'>
        <h1 className='text-4xl'>New Products</h1>
        </div>
        <div className='mr-56 '>
        <p className='text-right text-xl'>View All<i className="fa-solid fa-arrow-right text-2xl"></i></p>
        </div>
     <div className='flex justify-center gap-4'>  
    {
     result.map((item)=>{
       return(
         <>
        
      <Card sx={{ minWidth: 256 }} >
      
         <div className='flex flex-col border-2 bg-slate-200 ' >
       
        <img src={item.image} className='h-72 w-56   '></img>
        </div>
        <div className=''>
        <p>{item.pdtname}</p>
        <p>{item.desc}</p>
        <p>{item.price}</p>
        <p>{item.cost}</p>
</div>
       
        <div className=''>
        <button className='bg-cyan-600 rounded-md h-8 w-64  text-white'>Add bag<i class="fa-solid fa-bag-shopping ml-2"></i></button>
        </div>
         
    </Card>
     
        </>
       )
     })
    }
   </div>
   </div>
  )
}

export default NwProductsAll

