import { Card, ListItem } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

function Cart() {
    const cartproducts=[
        {
            id:"1",
            imgSrc:"https://png.pngtree.com/png-vector/20220518/ourmid/pngtree-catheter-icon-color-flat-outline-png-image_4686148.png",
            product_name:'Foley Catheter',
            product_price:'$12.90'
            
        },
        {
          id:"2",
          imgSrc:"https://www.pngitem.com/pimgs/b/8-82410_fever-thermometer-transparent-background-hd-png-download.png",
          product_name:'Thermometer',
          product_price:'$8.98'
          
      }, 
    ]
  return (
    <div className=''>
      <div className='flex gap-3 justify-center'>
        <div className=''>
            <div className='bg-cyan-100 h-96 w-96 my-4 border-2 border-red-200'>
                <div className='flex justify-center'>
                    <h1 className='text-4xl text-red-500 '>Your Bag</h1>
                </div>
                <div className='flex gap-4 ml-3 items-center justify-center'>
               {
                cartproducts.map((item)=>{
                        return(
                            <>
<Card className='mt-4 '>
<div className=''>
    <div className='bg-slate-300 w-32 h-36 rounded-md '>
        <img src={item.imgSrc} className='h-28 w-20 flex justify-center items-center '/>
    </div>
    <div className=''>
        <p className='flex items-center ml-3 rounded-sm'>{item.product_name}</p>
        <p className='flex items-center ml-3 rounded-sm'>{item.product_price}</p>
    </div>
    <div className='bg-red-300 ml-3 flex items-center justify-center border-2 border-slate-400 rounded-md gap-3'>
        <button className='font-bold'>+</button>0
        <button className='font-bold'>-</button>

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
        <div className='bg-red-100 h-96 w-96  my-4 border-2 border-cyan-100  '>
            <div className='flex justify-center'>
                <h1 className='text-4xl text-cyan-800'>Order Summary</h1>
            </div>
<div className='ml-5'>
    <div className='my-4 '>
        <h1 className='text-2xl font-semibold'>Price Details</h1>
    </div>
    <div className='flex  gap-48 font-light '>
        <p className='text-sm'>Bag MRP(2 items)</p>
        <p className='text-sm'>price</p>
    </div>
    <div className='flex gap-60'>
        <p className='font-light'>Shipping</p>
        <p className='text-green-700'>Free</p>
    </div>
    <div className='flex gap-64 '>
        <p className='font-semibold'>price</p>
        <p className=''>total </p>
    </div>
</div>
<div className='border-b-2 mt-10 border-slate-300'>
    
</div>
<div className='mt-5 flex justify-around'>
    <p className=''>Grand total</p>
   <Link to={'/user-orders'} ><button className='text-xl bg-cyan-400 w-28 h-10 flex items-center justify-center rounded-md text-red-400 hover:bg-cyan-800'>PlaceOrder</button></Link>
</div>
        </div>
      </div>
    </div>
  )
}

export default Cart
