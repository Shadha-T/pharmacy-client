import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import axios from 'axios';
import { errorToast, successToast } from '../../Toast/toast';
import { Link } from 'react-router-dom';




function Product3() {

  const [result,setResult]= useState([])
const [refresh,setRefresh]=useState(true)


  

  const [pdctlimit,setPdctlimit]= useState(4)


    const Product3=[
        {
            id:"1",
            imgSrc:"https://static.vecteezy.com/system/resources/previews/025/202/057/original/hospital-bed-on-transparent-background-png.png",
            product3_name:'Hospital Bed',
            product3_price:'$109.89'
            
        },
        {
          id:"2",
          imgSrc:"https://static.vecteezy.com/system/resources/thumbnails/021/186/738/small_2x/walker-3d-illustration-png.png",
          product3_name:'Walker Mobility',
          product3_price:'$12.80'
          
      },
      {
        id:"3",
        imgSrc:"https://pngimg.com/d/wheelchair_PNG17844.png",
        product3_name:'Wheel Chair',
        product3_price:'$30.00'
        
    },
    {
      id:"4",
      imgSrc:"https://pngimg.com/d/crutch_PNG35.png",
      product3_name:'Crutches',
      product3_price:'$24.78'
      
  }
    ]
    const fetchdata = async()=>{
      try {
        const response= await axios.get('http://localhost:3000/api/product')
        setResult(response.data.result)
      } catch (error) {
      
      }
    }

    useEffect(()=>{
      fetchdata()
    },[refresh])
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
    <div className='mt-5 flex flex-col items-center'>
    <div className=' flex justify-between w-full max-w-screen-lg px-4 md:px-0'>
<h1 className='text-4xl text-custom-plum-dark'>Top Products</h1>
   
    {/* <div className='mr-56'> */}
    <Link to={'/top-products'}  >
    <p className='text-right text-xl text-custom-plum-dark'>View All<i className="fa-solid fa-arrow-right text-2xl"></i></p></Link>
    {/* </div> */} </div>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-screen-lg px-4 md:px-0'> 
    {
     result.map((item,index)=>{
       return(
         <>
          {
          index<pdctlimit&&
      <Card sx={{ minWidth: 100 }} >
         <div className='flex flex-col border-2 bg-purple-100' >
         <button onClick={()=> addToWishlist(item._id) } className='text-left flex mt-1 ml-1'><i class="fa-regular fa-heart"></i></button>

       
        <img src={item.image} className='h-52 w-40' ></img>
        </div>
        <div className=''>
        <p className='flex justify-center items-center'>{item.pdtname}</p>
        <p className='flex justify-center items-center'>${item.cost}</p>
        </div>
        <div className=''>
        {/* <button className='bg-custom-plum-light rounded-md text-white h-8 w-64 '>Add bag<i class="fa-solid fa-bag-shopping ml-2"></i></button>
         */}
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

export default Product3

