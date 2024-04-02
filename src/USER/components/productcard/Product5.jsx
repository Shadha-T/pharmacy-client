import React from 'react'
import Card from '@mui/material/Card';




function Product5() {
    const Product5=[
        {
            id:"1",
            imgSrc:"https://pngimg.com/d/bandage_PNG4.png",
            product5_name:'Wound Dressing',
            product5_price:'$5.78'
            
        },
        {
          id:"2",
          imgSrc:"https://www.bd.com/content/dam/bd-assets/bd-com/en-us/images/product-family/medication-delivery-solutions/bd-insyte-autoguard-bc-shielded-iv-catheter-with-blood-control-technology/insyte-autoguard-bc-catheter_RC_MMS_VA_0816-0002.png",
          product5_name:'IV Catheter',
          product5_price:'$2.00'
          
      },
      {
        id:"3",
        imgSrc:"https://purepng.com/public/uploads/large/purepng.com-blood-pressure-monitorobjectsblood-pressure-monitormedicine-hospital-monitor-tool-object-meter-medical-health-equipment-check-631522325467qrjnz.png",
        product5_name:'Blood Pressure Cuff',
        product5_price:'$24.78'
        
    },
    {
      id:"4",
      imgSrc:"https://html.romsons.net.in/domestic/products/images_product/romo_seal.png",
      product5_name:'Chest tube',
      product5_price:'$58.59'
      
  }
    ]
  return (
    <div className='mt-5'>
    <div className='ml-56'>
<h1 className='text-4xl text-custom-plum-dark'>Upcoming Products</h1>
    </div>
    <div className='mr-56'>
    <p className='text-right text-xl text-custom-plum-dark'>View All<i className="fa-solid fa-arrow-right text-2xl"></i></p>
    </div>
    <div className='flex justify-center gap-6'> 
    {
     Product5.map((item)=>{
       return(
         <>
      <Card sx={{ minWidth: 100 }} >
         <div className='flex flex-col border-2  bg-purple-100' >
       
        <img src={item.imgSrc} className='h-52 w-40' ></img>
        </div>
        <div className=''>
        <p className='flex justify-center items-center'>{item.product5_name}</p>
        <p className='flex justify-center items-center'>{item.product5_price}</p>
        </div>
        <div className=''>
        <button className='bg-custom-plum-light rounded-md h-8 w-64 text-white'>Add bag<i class="fa-solid fa-bag-shopping ml-2"></i></button>
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

export default Product5

