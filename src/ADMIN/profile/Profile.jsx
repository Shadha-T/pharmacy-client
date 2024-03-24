

import React from 'react'

function Profile() {
  return (
    <div className=''>
      <div className='flex justify-center my-8'>
        <div className='h-2/5 w-72 bg-cyan-200 '>
        <div className='text-3xl font-semibold my-3 flex items-center justify-center'>
            <p className='text-red-400'>My Account</p>
        </div>
        <div className='ml-5'>
            <p className=''>name</p>
            <p className=''>email</p>
        </div>
        <div className='flex justify-center gap-3'>
          <button className='h-7 w-16 bg-slate-400 rounded-md'>Orders</button>
          <button className='h-7 w-16 bg-slate-400 rounded-md'>Wishlist</button><br></br>
           </div>
           <div className='flex justify-center gap-3 my-2'>
           <button className='h-7 w-16 bg-slate-400 rounded-md'>Coupons</button>
          <button className='h-7 w-20 bg-slate-400 rounded-md'>Helpcenter</button>
           </div>
        <div className=' bg-red-100 '>
            <h1 className='border-2'>Account Setting</h1>
            <p className='flex justify-center'>Edit Profile</p>
            <p className='flex justify-center'>Saved Addresses</p>
            <p className='flex justify-center'>Select language</p>
        </div>
        <div className='ml-5'>
            <p className=''>My Activity</p>
            <p className=''>Questions and Answers</p>
        </div>
        <div className='ml-5'>
            <h1 className=''>Feedback & information</h1>
            <p className=''>Terms,Policies and Liscenses</p>
            <p className=''>Browse FAQS</p>
        </div>
        <div className='ml-5'>
            <button className=''>Log out</button>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
