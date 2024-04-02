import React from 'react';
import { SlLocationPin } from "react-icons/sl";

function Footer() {
  return (
    <div className='bg-custom-gray-dark py-12 px-6 md:px-12 lg:px-24 xl:px-32'>
      <div className='flex flex-wrap'>
        <div className='w-full md:w-1/2 lg:w-1/4 xl:w-1/5 mb-8'>
          <h1 className='text-custom-brown-dark font-bold text-lg mb-4'>Contact</h1>
          <ul className='text-sm text-custom-white-light'>
            <li className='flex items-center'>123 Road, Dhaka, Bangladesh</li>
            <li>+0987654321</li>
            <li>abc@gmail.com</li>
          </ul>
        </div>

        <div className='w-full md:w-1/2 lg:w-1/4 xl:w-1/5 mb-8'>
          <h1 className='text-custom-brown-dark font-bold text-lg mb-4'>Quick Links</h1>
          <ul className='text-sm text-custom-white-light'>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className='w-full md:w-1/2 lg:w-1/4 xl:w-1/5 mb-8'>
          <h1 className='text-custom-brown-dark font-bold text-lg mb-4'>Specialties</h1>
          <ul className='text-sm text-custom-white-light'>
            <li>Anesthesiology</li>
            <li>Psychiatry</li>
            <li>General Surgery</li>
            <li>Family Medicine</li>
            <li>Pediatrics</li>
          </ul>
        </div>

        <div className='w-full md:w-1/2 lg:w-1/4 xl:w-1/5 mb-8'>
          <h1 className='text-custom-brown-dark font-bold text-lg mb-4'>Services</h1>
          <ul className='text-sm text-custom-white-light'>
            <li>Medical</li>
            <li>Operation</li>
            <li>Laboratory</li>
            <li>ICU</li>
            <li>Patient Ward</li>
          </ul>
        </div>

        <div className='w-full md:w-1/2 lg:w-1/4 xl:w-1/5 mb-8'>
          <h1 className='text-custom-brown-dark font-bold text-lg mb-4'>Social Media</h1>
          <ul className='text-2xl flex gap-4 text-custom-white-light'>
            <li><i className="fab fa-facebook-square"></i></li>
            <li><i className="fab fa-linkedin"></i></li>
            <li><i className="fab fa-instagram-square"></i></li>
            <li><i className="fab fa-youtube"></i></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer;