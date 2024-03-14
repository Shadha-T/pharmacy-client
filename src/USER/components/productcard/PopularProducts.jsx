import React from 'react'
import Card from '@mui/material/Card';

function PopularProducts() {
 
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
  return (
    
    <div className='mt-5'>
      <div className='ml-56'>
<h1 className='text-4xl'>Popular Products</h1>
      </div>
      <div className='mr-56'>
      <p className='text-right text-xl'>View All<i className="fa-solid fa-arrow-right text-2xl"></i></p>
      </div>
      <div className='flex justify-center gap-4'> 
    {
     PopularProducts.map((item)=>{
       return(
         <>
      <Card sx={{ minWidth: 256 }} >
         <div className='flex flex-col border-2 bg-slate-200 ' >
       
        <img src={item.imgSrc} className='h-72 w-56' ></img>
        </div>
        <div className=''>
        <p>{item.Product2_name}</p>
        <p>{item.Product2_price}</p>
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

  

export default PopularProducts
