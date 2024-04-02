import { Card } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Wishlist() {
  const [result,setResult] = useState([])
  const [refresh,setRefresh] = useState(true)

 
  const fetchdata = async()=>{
    try {
      const response= await axios.get('http://localhost:3000/api/wishlist/viewall')
      setResult(response.data.result)
    } catch (error) {
    
    }
  }

  
    useEffect(()=>{
      fetchdata()
    },[refresh])
  
  const handleRemoveQuantity = async(id)=>{
    try {
      const response = await axios.get(`http://localhost:3000/api/wishlist/remove-wishlist/${JSON.parse(localStorage.getItem("user"))._id}/${id}`)
      console.log(response.data,"ttt");
      // setData(response.data.data);
      // setData(response.data.data);
      setRefresh(!refresh)
  
  } catch (error) {
      console.log(error);
  }
  }
  const cartproducts=[
    {
        id:"1",
        imgSrc:"https://png.pngtree.com/png-vector/20220518/ourmid/pngtree-catheter-icon-color-flat-outline-png-image_4686148.png",
        product_name:'Foley Catheter',
        product_price:'$12.90'
        
    },
    
]


  return (
    <div>
    <div className=''>
        <div className=''>
          <h1 className='text-2xl flex justify-center font-semibold text-red-500 mt-3 items-center'>My wishlist</h1>
        </div>
        <div className='flex justify-center'>
          {
            result.map((item)=>{
              return(
                <>
                <Card className='mt-4'>
                  <div className='flex justify-center h-96 w-80 bg-cyan-200 my-3 items-center mx-6 rounded-md'>
                  <div className=''>
                    <div className='bg-slate-300 w-32 h-36 rounded-md mt-2'>
                    <img src={item.product.image} className='h-28 w-20 flex justify-center items-center'/>
                  </div>
                  <div className='text-xl font-bold'>
                  <p className='flex items-center ml-3 rounded-sm'>{item.product.pdtname}</p>
                      <p className='flex items-center ml-3 rounded-sm'>{item.product.price}</p>
                  </div>
                 <div className='flex gap-2'>
                 
                  <div className='flex text-cyan-700 h-8 w-24 items-center justify-center rounded-md  bg-red-200 mt-2 hover:bg-red-400 border-3 border-cyan-400'>
                
                <Link to={'/user-cart'}><button className=''>Add to cart</button></Link>   
                <button className='hover:underline' onClick={()=>handleRemoveQuantity(item.productId)}>delete</button>
                   
                  </div>
                  <div className='flex text-cyan-700 h-8 w-24 items-center justify-center rounded-md  bg-red-200 mt-2 hover:bg-red-400 border-3 border-cyan-400'>
                
                {/* <button className=''>Buy now</button> */}
                <button type='button' onClick={()=>{
                  addToWishlist(item._id)
                }} className=''>Buy now</button>
                {/* <button className=''>remove</button> */}
               
              </div>
              </div>
                  </div>
                  </div>
                </Card>
                </>
              )
                          })
                        }
                      </div>
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
                    </div>
    </div>
  )
}

export default Wishlist
