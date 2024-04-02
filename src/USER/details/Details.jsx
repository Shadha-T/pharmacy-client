import React, { useContext, useEffect } from 'react'
import { FaHeart } from "react-icons/fa";
import { useLocation, useParams } from 'react-router-dom';
import { errorToast, successToast } from '../Toast/toast';
import axios from 'axios';
import { Context } from '../../App';

function Details() {
  const { userdetails } = useParams()
  const { state } = useLocation()
  const item = state;

  const { carts, refresh, setRefresh } = useContext(Context)

  const handleAddToCart = async () => {
    try {
      const response = await axios.post('http://localhost:3000/api/cart/addtoCart', { productId: item._id, userId: JSON.parse(localStorage.getItem("user"))?._id })

      console.log(response);
      successToast("succesfully added to cart")
      setRefresh(!refresh)
    } catch (error) {
      console.log(error);
      errorToast(error.message || error.response.data.message, 'error')
    }
  }
 
  
  return (
    <div>
      <div class="font-[sans-serif] bg-white">
        <div class="p-4 lg:max-w-7xl max-w-4xl mx-auto">
          <div class="grid items-start grid-cols-1 lg:grid-cols-5 gap-12 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] p-6">
            <div class="lg:col-span-3 w-full lg:sticky top-0 text-center">
              <div class="px-4 py-10 rounded-xl shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative">
                <img src={item?.image} alt="Product" class="w-4/5 rounded object-cover" />
                <button type="button" class="absolute top-4 right-4 text-red-600">

                  <FaHeart />
                </button>
              </div>
              <div class="mt-6 flex flex-wrap justify-center gap-6 mx-auto">
                {
                item.images.map((item) => {

                    return (
                      <>
                        <div class="rounded-xl p-4 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)]">

                          <img src={item.images} alt='' className='w-24' />
                        </div>
                      </>
                    )
                  }
                  )
                }
                {/* <div class="rounded-xl p-4 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)]">
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
              </div> */}
              </div>
            </div>
            <div class="lg:col-span-2">
              <h2 class="text-2xl font-extrabold text-[#333]">{item.pdtname}</h2>
              <div class="flex flex-wrap gap-4 mt-6">
                <p class="text-[#333] text-4xl font-bold">{item.price}</p>
                <p class="text-gray-400 text-xl"><strike>${item.price}</strike> <span class="text-sm ml-1">Tax included</span></p>
              </div>


              <div class="flex flex-wrap gap-4 mt-10">
                <button type="button" class="min-w-[200px] px-4 py-3 bg-[#333] hover:bg-[#111] text-white text-sm font-bold rounded">Buy now</button>
                <button type="button" onClick={() => handleAddToCart(item._id)} class="min-w-[200px] px-4 py-2.5 border border-[#333] bg-transparent hover:bg-gray-50 text-[#333] text-sm font-bold rounded">Add to cart</button>
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

