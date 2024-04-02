import React from 'react'

function Card2() {
  return (
    <div className='flex gap-12 justify-center mt-6 mb-6'>
    <div className=' bg-custom-gray-light  text-xl h-32 w-60 rounded-2xl '>
      <div className='pt-5 '>
        <div className='flex gap-2 items-center ml-5 '>
      <p className='text-xl' > <i class="fa-solid fa-user"></i></p>
        <p className='text-xl'>14k+</p>
        </div>
        <p className='ml-5 text-xl' >Orders<br></br>Completed</p>
       </div>
    </div>


    <div className=' bg-custom-plum-light h-32 w-60 rounded-2xl '>
      <div className='pt-5 '>
        <div className='flex gap-2 items-center ml-5 '>
      <p className='text-xl' > <i class="fa-solid fa-users"></i></p>
        <p className='text-xl'>250k+</p>
        </div>
        <p className='ml-5 text-xl' >Won<br></br>Awards</p>
       </div>
    </div>


    <div className=' bg-custom-gray-light h-32 w-60  rounded-2xl '>
      <div className='pt-5 '>
        <div className='flex gap-2 items-center ml-5 '>
      <p className='text-xl' ><i class="fa-solid fa-user-tie"></i></p>
        <p className='text-xl'>8k+</p>
        </div>
        <p className='ml-5 text-xl' >Happy<br></br>Customers</p>
       </div>
    </div>

    <div className=' bg-custom-plum-light h-32 w-60 rounded-2xl '>
      <div className='pt-5'>
        <div className='flex gap-2 items-center ml-5 '>
      <p className='text-xl' > <i class="fa-solid fa-users-viewfinder"></i></p>
        <p className='text-xl'>14k+</p>
        </div>
        <p className='ml-5 text-xl' >Positive<br></br>Reviews</p>
       </div>
    </div>

    </div>
  )
}

export default Card2
