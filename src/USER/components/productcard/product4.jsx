import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import axios from 'axios';
import { errorToast, successToast } from '../../Toast/toast';
import { Link } from 'react-router-dom';




function Product4() {

  const [result,setResult]= useState([])
  const [refresh,setRefresh]=useState(true)
  
  
    
  
    const [pdctlimit,setPdctlimit]= useState(4)
    const Product4=[
        {
            id:"1",
            imgSrc:"https://freepngimg.com/save/138703-pressure-manual-blood-monitor-download-hd/643x735",
            product4_name:'Sphygmomanometer',
            product4_price:'$15.09'
            
        },
        {
          id:"2",
          imgSrc:"https://pngimg.com/d/stethoscope_PNG34.png",
          product4_name:'Digital stethescope',
          product4_price:'$29.99'
          
      },
      {
        id:"3",
        imgSrc:"https://www.accu-chek.in/sites/g/files/iut376/f/accu-chek_active_meter_image_ccexpress.png",
        product4_name:'Glucometer',
        product4_price:'$12.08'
        
    },
    {
      id:"4",
      imgSrc:"https://technocart.com/cdn/shop/files/Oximeter_0bc34652-3234-468a-ab12-5f4db7e2b669.png?v=1695461731",
      product4_name:'Pulse oximeter',
      product4_price:'$30.00'
      
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
    <div className='mt-5'>
    <div className='ml-56'>
<h1 className='text-4xl text-custom-plum-dark'>Medical Products</h1>
    </div>
    <div className='mr-56'>
    <Link to={'/med-products'}  >  <p className='text-right text-xl text-custom-plum-dark'>View All<i className="fa-solid fa-arrow-right text-2xl"></i></p></Link>
    </div>
    <div className='flex justify-center gap-6'> 
       
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
        {/* <button className='bg-custom-plum-light rounded-md  text-white h-8 w-64'>Add bag<i class="fa-solid fa-bag-shopping ml-2"></i></button> */}
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

export default Product4

