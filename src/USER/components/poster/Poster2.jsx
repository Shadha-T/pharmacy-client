import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Poster2() {


    const [result,setResult]= useState([])
    useEffect(()=>{
        fetchdata()
    },[])
 const fetchdata = async()=>{
    try {
       const response = await axios.get('http://localhost:3000/api/banner') 
       console.log(response,"rrr");
       setResult(response.data.result)
    } catch (error) {
        
    }
 }
  return (
    <>
    <div className='h-96 flex justify-center gap-5 mt-5 '>
        <div className='bg-pink-200 h-80  flex ml-2 justify-center items-center rounded-md'>
            <div className='ml-5 mt-5'>
            <div className='flex bg-red-400 h-6 w-24 items-center justify-center rounded-md'>
        <p>25%</p>
        <p>OFF</p>
    </div>
<p className='text-2xl font-bold'> BLACK GARLIC OIL</p>
<p className='font-serif'>Stronger and Thicker<br></br> Hair With Black Garlic <br></br>Oil.</p>

<p>$37.00</p>
<div className='flex gap-3'>
    <p className='font-bold'>$37.00</p>
    <p className='text-sm'>including tax</p>
</div>
</div>
<div className=''>
    <img src='https://www.bazarea.com/black-garlic-set-luis-bien-135812-en-garlic-oils-luis-bien-499788-13-B.png ' className='h-64 ' alt="loading"/>
</div>
        </div>




   <div className=''>


<div className='flex bg-cyan-100 h-36 rounded-md'>
    <div className='mt-5 ml-2 '>
    {/* <span className='bg-red-500 h-6 w-24'>25%<span>Off</span>
    </span> */}
    <div className='flex bg-red-400 h-6 w-24 items-center justify-center rounded-md'>
        <p>25%</p>
        <p>OFF</p>
    </div>
    <p>Dental Care Set for Vivid<br></br>and Bright Smiles</p>
    <p className='text-sm'>$33.90</p>
    <div className='flex gap-3'>
        <p className='font-bold'>$22.90</p>
        <p className='text-sm'>including tax</p>
    </div>
    </div>

    <div className=''>
        <img src='https://en.luisbien-kw.com/wp-content/uploads/2021/06/muz.aromali.dis_.macunu.png' className=' h-32 w-24 ml-28 '></img>
    </div>
</div>





<div className='flex bg-green-100 h-36 mt-5 rounded-md'>
    <div className='mt-5 ml-2 '>
    {/* <span className='bg-red-500 h-6 w-24'>25%<span>Off</span>
    </span> */}
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
</div>



</div>


    </div>
    </>
//  


  )
}

export default Poster2
