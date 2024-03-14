import React from 'react'

function Card1() {
  return (
    <div className='flex gap-5 justify-center mt-3'>
      <div className='flex my-3'>
        <div className='bg-red-400 items-center flex justify-around text-3xl h-44 w-72 rounded-2xl '>
        <i className="fa-solid fa-circle-dollar-to-slot"></i>
            <h5 className=''>Get 25%<br/>
           OFF</h5>
       <i className="fa-solid fa-chevron-right"></i>    
        </div>
      </div>


      <div className='flex my-3'>
        <div className='bg-cyan-300 items-center flex justify-around text-3xl h-44 w-72 rounded-2xl '>
        <i className="fa-solid fa-truck-ramp-box"></i>
            <h5 className=''>Free Home<br/>
           Delivery</h5>
  
           <i className="fa-solid fa-chevron-right"></i>   
        </div>
      </div>



      <div className='flex my-3'>
        <div className='bg-red-400 items-center flex justify-around text-3xl h-44 w-72 rounded-2xl '>
        <i className="fa-solid fa-user-doctor"></i>
            <h5 className=''>Doctor's<br/>
           Appointment</h5>
       <i className="fa-solid fa-chevron-right"></i>    
        </div>
      </div>



      <div className='flex my-3'>
        <div className='bg-cyan-300 items-center flex justify-around text-3xl h-44 w-72 rounded-2xl '>
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