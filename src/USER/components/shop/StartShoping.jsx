import { Card } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { errorToast, successToast } from '../../Toast/toast'

function StartShoping() {
    const [result,setResult]= useState([])
    const [refresh,setRefresh] = useState(true)

    useEffect(()=>{
        fetchdata()
      },[refresh])
  
      const fetchdata = async()=>{
        try {
          const response= await axios.get('http://localhost:3000/api/product')
          setResult(response.data.result)
        } catch (error) {
        
        }
      }

      const handleAddToCart = async (e) => {
        try {
          const response = await axios.post('http://localhost:3000/api/cart/addtoCart', { productId: e, userId: JSON.parse(localStorage.getItem("user"))?._id })
    
          console.log(response);
          successToast("succesfully added to cart")
          setRefresh(!refresh)
        } catch (error) {
          console.log(error);
          errorToast(error.message || error.response.data.message, 'error')
        }
      }

      const addToWishlist  = async (e) => {
        try {
          const response = await axios.post('http://localhost:3000/api/wishlist/addtoWishlist', { productId: e, userId: JSON.parse(localStorage.getItem("user"))?._id })
    
          console.log(response);
          successToast("succesfully added to wishlist")
          setRefresh(!refresh)
        } catch (error) {
          console.log(error);
          errorToast(error.message || error.response.data.message, 'error')
        }
      }
  return (
    <div>
       <div className='flex justify-center gap-6 flex-wrap'>  
    {
     result.map((item)=>{
       return(
         <>
         {
      <Card sx={{ minWidth: 100 }} >
      
         <div className='flex flex-col border-2 bg-purple-100  justify-center gap-4' >
         <button onClick={()=> addToWishlist(item._id) } className='text-left flex mt-1 ml-1'><i class="fa-regular fa-heart"></i></button>

       
        <img src={item.image} className='h-52 w-40 flex justify-center items-center   '></img>
        </div>
        <div className=''>
        <p className='flex justify-center items-center'>{item.pdtname}</p>
        {/* <p>{item.desc}</p> */}
        {/* <p>{item.price}</p> */}
        <p className='flex justify-center items-center'>${item.cost}</p>
</div>
       
        <div className=''>
        <button onClick={()=> handleAddToCart(item._id) } className='bg-custom-plum-light  rounded-md h-8 w-64  text-white'>Add bag<i class="fa-solid fa-bag-shopping ml-2"></i></button>
        

        </div>
         
    </Card>
     }
        </>
       )
     })
    }
   </div>
    </div>
  )
}

export default StartShoping

