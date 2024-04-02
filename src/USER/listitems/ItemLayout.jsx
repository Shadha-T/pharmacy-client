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
    
    <div className='flex justify-center gap-6 my-2'>  
    {
     products.map((item,index)=>{
       return(
         <>
       
      <Card sx={{ minWidth: 256 }} >
      
         <div className='flex flex-col border-2 bg-purple-100 ' >
       
        <img src={item.image} className='h-52 w-64    '></img>
        </div>
        <div className=''>
        <p className='flex justify-center items-center'>{item.pdtname}</p>
        {/* <p className='flex justify-center items-center'>{item.desc}</p> */}
        <p className='flex justify-center items-center'>${item.price}</p>
        {/* <p className='flex justify-center items-center'>delivery:${item.cost}</p> */}
</div>
       
        <div className=''>
        <button className='bg-custom-plum-light rounded-md h-8 w-64  text-white'>Add bag<i class="fa-solid fa-bag-shopping ml-2"></i></button>
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
