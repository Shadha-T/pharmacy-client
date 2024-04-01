import React from 'react'
import Card from '@mui/material/Card';




function Product3() {
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
  return (
    <div className='mt-5 flex flex-col items-center'>
    <div className=' flex justify-between w-full max-w-screen-lg px-4 md:px-0'>
<h1 className='text-4xl'>Top Products</h1>
   
    {/* <div className='mr-56'> */}
    <p className='text-right text-xl'>View All<i className="fa-solid fa-arrow-right text-2xl"></i></p>
    {/* </div> */} </div>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-screen-lg px-4 md:px-0'> 
    {
     Product3.map((item)=>{
       return(
         <>
      <Card sx={{ minWidth: 256 }} >
         <div className='flex flex-col border-2 bg-slate-200' >
       
        <img src={item.imgSrc} className='h-72 w-56' ></img>
        </div>
        <div className=''>
        <p>{item.product3_name}</p>
        <p>{item.product3_price}</p>
        </div>
        <div className=''>
        <button className='bg-cyan-600 rounded-md text-white h-8 w-64 '>Add bag<i class="fa-solid fa-bag-shopping ml-2"></i></button>
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

export default Product3

