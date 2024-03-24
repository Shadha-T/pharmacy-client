import React from 'react'
import { FaHeart } from "react-icons/fa";

function Details() {
  return (
    <div>
      <div class="font-[sans-serif] bg-white">
      <div class="p-4 lg:max-w-7xl max-w-4xl mx-auto">
        <div class="grid items-start grid-cols-1 lg:grid-cols-5 gap-12 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] p-6">
          <div class="lg:col-span-3 w-full lg:sticky top-0 text-center">
            <div class="px-4 py-10 rounded-xl shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative">
              <img src="https://en.luisbien-kw.com/wp-content/uploads/2021/06/muz.aromali.dis_.macunu.png" alt="Product" class="w-4/5 rounded object-cover" />
              <button type="button" class="absolute top-4 right-4 text-red-600">
               
                <FaHeart />
              </button>
            </div>
            <div class="mt-6 flex flex-wrap justify-center gap-6 mx-auto">
              <div class="rounded-xl p-4 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)]">
                <img src="https://en.luisbien-kw.com/wp-content/uploads/2021/06/muz.aromali.dis_.macunu.png" alt="Product2" class="w-24 cursor-pointer" />
              </div>
              <div class="rounded-xl p-4 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)]">
                <img src="https://en.luisbien-kw.com/wp-content/uploads/2021/06/muz.aromali.dis_.macunu.png" alt="Product2" class="w-24 cursor-pointer" />
              </div>
              <div class="rounded-xl p-4 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)]">
                <img src="https://en.luisbien-kw.com/wp-content/uploads/2021/06/muz.aromali.dis_.macunu.png" alt="Product2" class="w-24 cursor-pointer" />
              </div>
              <div class="rounded-xl p-4 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)]">
                <img src="https://en.luisbien-kw.com/wp-content/uploads/2021/06/muz.aromali.dis_.macunu.png" alt="Product2" class="w-24 cursor-pointer" />
              </div>
            </div>
          </div>
          <div class="lg:col-span-2">
            <h2 class="text-2xl font-extrabold text-[#333]">Banana flavoured Toothpaste</h2>
            <div class="flex flex-wrap gap-4 mt-6">
              <p class="text-[#333] text-4xl font-bold">200</p>
              <p class="text-gray-400 text-xl"><strike>$100</strike> <span class="text-sm ml-1">Tax included</span></p>
            </div>
           
           
            <div class="flex flex-wrap gap-4 mt-10">
              <button type="button" class="min-w-[200px] px-4 py-3 bg-[#333] hover:bg-[#111] text-white text-sm font-bold rounded">Buy now</button>
              <button type="button" class="min-w-[200px] px-4 py-2.5 border border-[#333] bg-transparent hover:bg-gray-50 text-[#333] text-sm font-bold rounded">Add to cart</button>
            </div>
          </div>
        </div>
        <div class="mt-16 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] p-6">
          <h3 class="text-lg font-bold text-[#333]">Product information</h3>
          <p class="mt-6 space-y-6 text-[#333]">
            <p class="text-sm">Toothpaste <span class="ml-4 float-right">Dental Care Set for Vivid
and Bright Smiles</span></p>
           
           
          </p>
        </div>
        
              </div>
            </div>
           
          </div>

  )
}

export default Details

