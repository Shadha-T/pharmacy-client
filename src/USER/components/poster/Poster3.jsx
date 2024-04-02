import React from 'react'

function Poster3() {
  return (
   <div className=' flex text-white mt-5 bg-custom-gray-dark  flex-wrap h-96'>
      {/* //  <div className='flex h-96  text-white mt-5' style={{backgroundImage:"url('https://images.unsplash.com/photo-1549740425-5e9ed4d8cd34?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",backgroundAttachment:"fixed"}}> */}
      <div className='ml-14 mt-20'>
        <h1 className='text-custom-plum-dark'>Todays Hot Offer</h1>
        <h1 className='text-5xl font-mono text-custom-plum-dark'>Unlock 50% on<br></br> Essential Medicines!</h1>
        <p className='text-custom-plum-dark'>Embrace wellness without breaking the bank! Enjoy a generous<br></br>
        25% discount on a wide range of vital medicines at our online<br></br>pharmacy. Your health Matters,and so does your budget</p>
        <button className='bg-custom-plum-light flex gap-3  h-8 justify-start items-center border-1 border-custom-plum-dark rounded-full py-2 px-4 mt-3 text-custom-plum-dark'>Place An Order Now<i class="fa-solid fa-arrow-right"></i></button>
      </div>
     
      <div className=''>
       
         <img src='https://82e.com/cdn/shop/files/CHP-SCL-Thumbnail_1_1.png?v=6326281000614731625' className=' h-80 w-full ml-60 rounded-full mt-8 flex flex-wrap'></img>
      </div>
      {/* </div> */}
      </div>
  )
}

export default Poster3
