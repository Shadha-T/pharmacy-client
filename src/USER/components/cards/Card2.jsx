import React from 'react'

function Card2() {
  return (
    <div className='flex gap-5 justify-center mt-3'>
    <div className=' bg-cyan-300 h-44 w-72 rounded-2xl '>
      <div className='pt-9 '>
        <div className='flex gap-2 items-center ml-5 '>
      <p className='text-3xl' > <i class="fa-solid fa-user"></i></p>
        <p className='text-3xl'>14k+</p>
        </div>
        <p className='ml-5 text-2xl' >Orders<br></br>Completed</p>
       </div>
    </div>


    <div className=' bg-red-400 h-44 w-72 rounded-2xl '>
      <div className='pt-9 '>
        <div className='flex gap-2 items-center ml-5 '>
      <p className='text-3xl' > <i class="fa-solid fa-users"></i></p>
        <p className='text-3xl'>250k+</p>
        </div>
        <p className='ml-5 text-2xl' >Won<br></br>Awards</p>
       </div>
    </div>


    <div className=' bg-cyan-300 h-44 w-72 rounded-2xl '>
      <div className='pt-9 '>
        <div className='flex gap-2 items-center ml-5 '>
      <p className='text-3xl' ><i class="fa-solid fa-user-tie"></i></p>
        <p className='text-3xl'>8k+</p>
        </div>
        <p className='ml-5 text-2xl' >Happy<br></br>Customers</p>
       </div>
    </div>

    <div className=' bg-red-400 h-44 w-72 rounded-2xl '>
      <div className='pt-9 '>
        <div className='flex gap-2 items-center ml-5 '>
      <p className='text-3xl' > <i class="fa-solid fa-users-viewfinder"></i></p>
        <p className='text-3xl'>14k+</p>
        </div>
        <p className='ml-5 text-2xl' >Positive<br></br>Reviews</p>
       </div>
    </div>

    </div>
  )
}

export default Card2
