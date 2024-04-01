import { Card } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function ItemLayout() {
    const {page} = useParams()

    const [products,setProducts] = useState([])



    useEffect(()=>{
      fetchdata()
  },[])


  const fetchdata = async()=>{
    try {
        const response = await axios.get(`http://localhost:3000/api/product/getdetailsbyid/${page}`)
   
  setProducts(response.data.result)
  
       } catch (error) {
         errorToast(error.response.data.message,'error')
       }
}

  return (
    <div>
    
    <div className='flex justify-center gap-4 '>  
    {
     products.map((item,index)=>{
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

export default ItemLayout
