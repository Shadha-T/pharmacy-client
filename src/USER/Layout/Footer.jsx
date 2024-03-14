import React from 'react'
import { SlLocationPin } from "react-icons/sl";
// 
function Footer() {
  return (
    <div className='bg-red-400 h-72 flex '>
   {/*  */}
   <div className='mt-6 flex '>
      <div className=' ml-14'>
        
        <h1 className='text-blue-600 font-bold text-lg'>Contact</h1>
        <ul className='text-sm text-wrap'>
            <li className='text-gray-50 flex justify-center items-center ' ><span><SlLocationPin className='text-blue-600'/></span>123 Road,Dhaka,Bangladesh</li>
            <li className='text-gray-50'>+0987654321</li>
            <li className='text-gray-50'>abc@gmail.com</li>
            </ul>
      </div>

      <div className=' ml-14'>
        
        <h1 className='text-blue-600 font-bold text-lg'>Quik Links</h1>
        <ul className='text-sm'>
            <li className='text-gray-50'>Home</li>
            <li className='text-gray-50'>About</li>
            <li className='text-gray-50'>Services</li>
            <li className='text-gray-50'>Careers</li>
            <li className='text-gray-50'>Contact</li>
            </ul>
      </div>
      <div className='ml-14 '>
      <h1 className='text-blue-600 font-bold text-lg'>Specialities</h1>
        <ul className='text-sm'>
            <li className='text-gray-50'>Anesthesilogy</li>
            <li className='text-gray-50'>Psychiatry</li>
            <li className='text-gray-50'>General Sergery</li>
            <li className='text-gray-50'>Family Medicine</li>
            <li className='text-gray-50'>Pediatrics</li>
            </ul>
    </div>

    <div className='ml-14 '>
      <h1 className='text-blue-600 font-bold text-lg'>Services</h1>
        <ul className='text-sm'>
            <li className='text-gray-50'>Medical</li>
            <li className='text-gray-50'>Operation</li>
            <li className='text-gray-50'>Laboratory</li>
            <li className='text-gray-50'>ICU</li>
            <li className='text-gray-50'>Patient Ward</li>
            </ul>
    </div>

    <div className='ml-14 '>
      <h1 className='text-blue-600 font-bold text-lg'>Social Media</h1>
        <ul className='text-2xl flex gap-4'>
        <i className="fa-brands fa-square-facebook text-blue-900"></i>
        <i className="fa-brands fa-linkedin"></i>
        <i className="fa-brands fa-square-instagram"></i>
        <i className="fa-brands fa-youtube"></i>
         
            </ul>
    </div>
  
    </div>
   
    </div>
  )
}

export default Footer
