import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { errorToast, successToast } from '../../Toast/toast'

function Banner2() {
    const [result,setResult]= useState([])
    const[refresh,setRefresh]=useState(true)
    useEffect(()=>{
        fetchdata()
    },[])
 const fetchdata = async()=>{
    try {
       const response = await axios.get('http://localhost:3000/api/banner2') 
       console.log(response,"rrr");
       setResult(response.data.result)
    } catch (error) {
        
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
    <div>
          {
                result.map((item)=>{
                    return(
                        <>
                              <div className='my-2'>


<div className='flex bg-cyan-100 h-40 rounded-md '>
    <div className='mt-5 ml-2 '>
    <button onClick={()=> addToWishlist(item._id) } className='text-left flex mt-1 ml-1'><i class="fa-regular fa-heart"></i></button>

    {/* <span className='bg-red-500 h-6 w-24'>25%<span>Off</span>
    </span> */}
    <div className='flex bg-red-400 h-6 w-24 items-center justify-center rounded-md'>
        <p>{item.percentage}</p>
        <p>OFF</p>
    </div>
    <p>{item.title}</p>
    <p>{item.description}</p>
  
    <p className='text-sm'>{item.price}</p>
    <div className='flex gap-3'>
        <p className='font-bold'>{item.offerprice}</p>
        <p className='text-sm'>including tax</p>
    </div>
    </div>

    <div className=''>
        <img src={item.bannerimage2} className=' h-32 w-24 ml-28 '></img>
    </div>
</div>




{/* 
<div className='flex bg-green-100 h-36 mt-5 rounded-md'>
    <div className='mt-5 ml-2 '>
  
    <div className='flex bg-red-400 h-6 w-24 items-center justify-center rounded-md'>
        <p>25%</p>
        <p>OFF</p>
    </div>
    <p>BANANA FLAVOURED <br></br>TOOTHPASTE</p>
    <p className='text-sm'>$37.90</p>
    <div className='flex gap-3'>
        <p className='font-bold'>$28.90</p>
        <p className='text-sm'>including tax</p>
    </div>
    </div>

    <div className=''>
        <img src='https://www.luisbien.us/wp-content/uploads/2020/08/disbeyazlaticiset-2.png' className=' h-32 w-24 ml-28 '></img>
    </div>
</div> */}



</div>
                        </>
                    )
  
     })
    }

    </div>
  )
}

export default Banner2
