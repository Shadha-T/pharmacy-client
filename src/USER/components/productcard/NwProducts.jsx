import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { errorToast } from '../../Toast/toast';




function NwProducts() {
  const [result,setResult]= useState([])
  const [pdctlimit,setPdctlimit]= useState(4)

    const NwProducts=[
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
      {
        id:"3",
        imgSrc:"https://www.create-biotech.com/comm/upimage/p_201110_05598.png",
        product_name:'Non-rebrether mask',
        product_price:'$3.32'
        
    },
    {
      id:"4",
      imgSrc:"https://png.pngtree.com/png-vector/20220623/ourmid/pngtree-an-oxygen-mask-white-method-breathing-vector-png-image_36933556.png",
      product_name:'oxygen mask',
      product_price:'$24.78'
      
  }
    ]


    useEffect(()=>{
      fetchdata()
    },[])

    const fetchdata = async()=>{
      try {
        const response= await axios.get('http://localhost:3000/api/product')
        setResult(response.data.result)
      } catch (error) {
      
      }
    }



  return (
    <div className='mt-5'>
    
        <div className=' ml-56'>
        <h1 className='text-4xl'>New Products</h1>
        </div>
        <div className='mr-56 '>
        <p className='text-right text-xl'>View All<i className="fa-solid fa-arrow-right text-2xl"></i></p>
        </div>
     <div className='flex justify-center gap-4'>  
    {
     result.map((item,index)=>{
       return(
         <>
         {index<pdctlimit &&
      <Card sx={{ minWidth: 256 }} >
      
         <div className='flex flex-col border-2 bg-slate-200 ' >
       
        <img src={item.image} className='h-72 w-56   '></img>
        </div>
        <div className=''>
        <p>{item.pdtname}</p>
        <p>{item.desc}</p>
        <p>{item.price}</p>
        <p>{item.cost}</p>
</div>
       
        <div className=''>
        <button className='bg-cyan-600 rounded-md h-8 w-64  text-white'>Add bag<i class="fa-solid fa-bag-shopping ml-2"></i></button>
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

export default NwProducts
// https://static.vecteezy.com/system/resources/previews/019/617/119/original/digital-thermometer-temperature-png.png