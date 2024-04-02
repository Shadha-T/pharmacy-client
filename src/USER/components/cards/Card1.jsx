import React from 'react'

function Card1() {
  return (
    <div className='flex gap-12 justify-center mt-6 mb-6'>
      <div className='flex my-3'>
        <div className='bg-custom-gray-light  items-center flex justify-around text-xl h-32 w-60 rounded-2xl '>
        <i className="fa-solid fa-circle-dollar-to-slot"></i>
            <h5 className=''>Get 25%<br/>
           OFF</h5>
       <i className="fa-solid fa-chevron-right"></i>    
        </div>
      </div>


      <div className='flex my-3'>
        <div className='bg-custom-plum-light items-center flex justify-around text-xl h-32 w-60  rounded-2xl '>
        <i className="fa-solid fa-truck-ramp-box"></i>
            <h5 className=''>Free Home<br/>
           Delivery</h5>
  
           <i className="fa-solid fa-chevron-right"></i>   
        </div>
      </div>



      <div className='flex my-3'>
        <div className='bg-custom-gray-light  items-center flex justify-around text-xl h-32 w-60 rounded-2xl '>
        <i className="fa-solid fa-user-doctor"></i>
            <h5 className=''>Doctor's<br/>
           Appointment</h5>
       <i className="fa-solid fa-chevron-right"></i>    
        </div>
      </div>



      <div className='flex my-3'>
        <div className='bg-custom-plum-light items-center flex justify-around text-xl h-32 w-60  rounded-2xl '>
        <i class="fa-solid fa-stethoscope"></i>
            <h5 className=''>Health<br/>
           Advice</h5>
       <i className="fa-solid fa-chevron-right"></i>    
        </div>
      </div>
    </div>
  )
}

export default Card1