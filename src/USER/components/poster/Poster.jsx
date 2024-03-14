import React from 'react'

function Poster() {
  return (
   
       <div className='flex h-96 bg-cyan-600 text-white mt-3 '>
      <div className='ml-14 mt-20'>
        <h1 className='text-5xl font-mono'>Your Prescription for<br></br> Affordable Health<br></br> Solutions!</h1>
        <p>Elevate your health journey with exclusive discounts and unparalleled<br></br>
         convenience.Your path to well-being starts here,where every purchase<br></br> is a prescription for savings</p>
        <button className='bg-cyan-800 flex gap-3  h-8 justify-start items-center border-2 border-yellow-600 rounded-full py-2 px-4 mt-3 hover:bg-cyan-600'>Start Shopping<i class="fa-solid fa-bag-shopping"></i></button>
      </div>
     
      <div className=''>
        {/* <img src='https://cdn.imgbin.com/25/4/24/pill-pharmaceutical-drug-capsule-medicine-analgesic-x2f9cZQ5.jpg' className='rounded-full h-2/4 w-64'></img>
         */}
         <img src='https://img.freepik.com/free-vector/pharmacy-paper-bag-medicine_603843-3825.jpg?size=626&ext=jpg&ga=GA1.1.203772696.1695057119&semt=sph' className=' h-80 w-full ml-60 rounded-full mt-8'></img>
      </div>
      </div>
    
  )
}

export default Poster
