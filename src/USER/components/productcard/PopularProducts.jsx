import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import axios from 'axios';
import { errorToast, successToast } from '../../Toast/toast';
import { Link } from 'react-router-dom';

function PopularProducts() {
  const [result,setResult]= useState([])
const [refresh,setRefresh]=useState(true)

  const [pdctlimit,setPdctlimit]= useState(4)
       const PopularProducts=[
        {
            id:"1",
            imgSrc:"https://vanninhealthcare.com/wp-content/uploads/2021/04/DSC_7765-sredjena-fotka.png",
            Product2_name:'Medical mask',
            Product2_price:'$12.90'
            
        },
        {
          id:"2",
          imgSrc:"https://pngimg.com/d/medical_gloves_PNG3.png",
          Product2_name:'Surgical gloves',
          Product2_price:'$8.98'
          
      },
      {
        id:"3",
        imgSrc:"https://pngimg.com/d/antiseptic_PNG60.png",
        Product2_name:'Hand sanitizer',
        Product2_price:'$3.32'
        
    },
    {
      id:"4",
      imgSrc:"https://pngimg.com/d/bandage_PNG4.png",
      Product2_name:'Wound dressing',
      Product2_price:'$24.78'
      
  }
    ]
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
    
    <div className='mt-5 flex flex-col items-center'>
      <div className=' flex justify-between w-full max-w-screen-lg px-4 md:px-0'>
<h1 className='text-4xl text-custom-plum-dark'>Popular Products</h1>
   
      {/* <div className='mr-56'> */}
      <Link to={'/popular-products'}  > <p className=' text-xl text-custom-plum-dark'>View All<i className="fa-solid fa-arrow-right text-2xl"></i></p></Link>
      {/* </div> */}   </div>
      <div className='flex justify-center gap-6 '> 
    {
     result.map((item,index)=>{
       return(
         <>
         {
          index<pdctlimit&&
        
      <Card sx={{ minWidth: 100 }} >
         <div className='flex flex-col border-2 bg-purple-100 ' >
         <button onClick={()=> addToWishlist(item._id) } className='text-left flex mt-1 ml-1'><i class="fa-regular fa-heart"></i></button>
       
        <img src={item.image} className='h-52 w-40 ' ></img>
        </div>
        <div className=''>
        <p className='flex justify-center items-center'>{item.pdtname}</p>
        <p className='flex justify-center items-center'>${item.cost}</p>
        </div>
        <div className=''>
        {/* <button className='bg-custom-plum-light rounded-md text-white h-8 w-64 '>Add bag<i class="fa-solid fa-bag-shopping ml-2"></i></button> */}
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

  

export default PopularProducts
