import { Card } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

function Wishlist() {
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
            cartproducts.map((item)=>{
              return(
                <>
                <Card className='mt-4'>
                  <div className='flex justify-center h-96 w-80 bg-cyan-200 my-3 items-center mx-6 rounded-md'>
                  <div className=''>
                    <div className='bg-slate-300 w-32 h-36 rounded-md mt-2'>
                    <img src={item.imgSrc} className='h-28 w-20 flex justify-center items-center'/>
                  </div>
                  <div className='text-xl font-bold'>
                  <p className='flex items-center ml-3 rounded-sm'>{item.product_name}</p>
                      <p className='flex items-center ml-3 rounded-sm'>{item.product_price}</p>
                  </div>
                 <div className='flex gap-2'>
                 
                  <div className='flex text-cyan-700 h-8 w-24 items-center justify-center rounded-md  bg-red-200 mt-2 hover:bg-red-400 border-3 border-cyan-400'>
                
                <Link to={'/user-cart'}><button className=''>Add to cart</button></Link>   
                   
                  </div>
                  <div className='flex text-cyan-700 h-8 w-24 items-center justify-center rounded-md  bg-red-200 mt-2 hover:bg-red-400 border-3 border-cyan-400'>
                
                <button className=''>Buy now</button>
               
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
