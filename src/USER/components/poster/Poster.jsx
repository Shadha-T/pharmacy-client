import React from 'react'
import { Link } from 'react-router-dom'

function Poster() {
  return (
   
       <div className='flex h-96 bg-custom-plum-light text-white mt-3 '>
      <div className='ml-14 mt-20 text-custom-plum-dark'>
        <h1 className='text-5xl font-mono '>Your Prescription for<br></br> Affordable Health<br></br> Solutions!</h1>
        <p>Elevate your health journey with exclusive discounts and unparalleled<br></br>
         convenience.Your path to well-being starts here,where every purchase<br></br> is a prescription for savings</p>
    <Link to={'/start-shoping'}>  <button  type="button" className='bg-custom-gray-dark  flex gap-3  h-8 justify-start items-center border-2 border-custom-gray-dark rounded-full py-2 px-4 mt-3 hover:bg-custom-gray-dark'>Start Shopping<i class="fa-solid fa-bag-shopping"></i></button></Link>   
      </div>
     
      <div className=''>
        
         <img src='https://static.vecteezy.com/system/resources/previews/022/923/884/non_2x/pastel-color-medicine-pills-pills-flying-up-out-of-tablet-capsule-3d-rendering-pharmacy-concept-drugs-awareness-free-png.png' className=' h-80 w-full ml-60 rounded-full mt-8'></img>
      </div>
      </div>
    
  )
}

export default Poster
