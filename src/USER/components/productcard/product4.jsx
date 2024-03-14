import React from 'react'
import Card from '@mui/material/Card';




function Product4() {
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
  return (
    <div className='mt-5'>
    <div className='ml-56'>
<h1 className='text-4xl'>Medical Products</h1>
    </div>
    <div className='mr-56'>
    <p className='text-right text-xl'>View All<i className="fa-solid fa-arrow-right text-2xl"></i></p>
    </div>
    <div className='flex justify-center gap-4'> 
       
    {
     Product4.map((item)=>{
       return(
         <>
      <Card sx={{ minWidth: 256 }} >
         <div className='flex flex-col border-2 bg-slate-200' >
       
        <img src={item.imgSrc} className='h-72 w-56' ></img>
        </div>
        <div className=''>
        <p>{item.product4_name}</p>
        <p>{item.product4_price}</p>
        </div>
        <div className=''>
        <button className='bg-cyan-600 rounded-md  text-white h-8 w-64'>Add bag<i class="fa-solid fa-bag-shopping ml-2"></i></button>
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

export default Product4

