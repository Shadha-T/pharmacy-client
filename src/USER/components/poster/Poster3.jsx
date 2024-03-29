import React from 'react'

function Poster3() {
  return (
   
       <div className='flex h-96 bg-cyan-400 text-white mt-5'>
      <div className='ml-14 mt-20'>
        <h1 className=''>Todays Hot Offer</h1>
        <h1 className='text-5xl font-mono text-red-400'>Unlock 50% on<br></br> Essential Medicines!</h1>
        <p>Embrace wellness without breaking the bank! Enjoy a generous<br></br>
        25% discount on a wide range of vital medicines at our online<br></br>pharmacy. Your health Matters,and so does your budget</p>
        <button className='bg-red-400 flex gap-3  h-8 justify-start items-center border-2 border-yellow-600 rounded-full py-2 px-4 mt-3 hover:bg-cyan-600'>Place An Order Now<i class="fa-solid fa-arrow-right"></i></button>
      </div>
     
      <div className=''>
       
         <img src='https://clipart-library.com/images_k/medicine-transparent-background/medicine-transparent-background-7.png' className=' h-80 w-full ml-60 rounded-full mt-8'></img>
      </div>
      </div>
    
  )
}

export default Poster3
