import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { errorToast, successToast } from '../../USER/Toast/toast'

function AdminProduct() {


    const [products,setProducts] = useState([])
  
    useEffect(()=>{
        fetchdata()
    },[])

    const fetchdata = async()=>{
        try {
            const response = await axios.get('http://localhost:3000/api/product')
       
      setProducts(response.data.result)
      
           } catch (error) {
             errorToast(error.response.data.message,'error')
           }
    }


    const handleDelete =async (id)=>{
        try {
            const response = await axios.delete(`http://localhost:3000/api/product/${id}`)
            successToast(response.data.message)
        } catch (error) {
            errorToast(error.message)
        }
    }

    const handleEdit=async(id)=>{
        try {
            const response= await axios.put(`http://localhost:3000/api/product/${id}`)
            successToast(response.data.message)
        } catch (error) {
           errorToast(error.message) 
        }
        
        
    }

    return (
        <div>
            <Link to={'/admin/add-product'} className='hover:underline h-7 w-44 bg-slate-300 text-center flex justify-center items-center rounded-md text-red-600  border-red-400'>Add Product</Link>
          

           


            <div class="relative overflow-x-auto mt-2">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr className='bg-cyan-200'>
                        <th scope="col" class="px-6 py-3">
                           image
                            </th>
                            <th scope="col" class="px-6 py-3">
                           images
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Product name
                            </th>
                            <th scope="col" class="px-6 py-3">
                              Description
                            </th>
                            <th scope="col" class="px-6 py-3">
                                price
                            </th>
                            <th scope="col" class="px-6 py-3">
                               delivery cost
                            </th>
                            <th scope="col" class="px-6 py-3">
                            Delete
                            </th>
                            <th scope="col" class="px-6 py-3 ">
                              Edit
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                       { products.map((item)=>{
                        return(
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                 <td class="px-6 py-4">
                              <img src={item.image} className='h-9 w-9'/>
                            </td>
                            <td class="px-6 py-4">
                              {
                                item?.images.map((image)=>{
                                    return(
                                        <>
                                        <img src={image.images} className='w-[50px] h-[50px] sm:w-[70px] sm:h-[70px]'/>
                                        </>
                                    )
                                })
                              }
                            </td>
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {item.pdtname}
                            </th>
                            <td class="px-6 py-4">
                              {item.desc}
                            </td>
                            <td class="px-6 py-4">
                            {item.price}
                            </td>
                            <td class="px-6 py-4">
                             {item.cost}
                            </td>
                            <td onClick={()=>handleDelete(item._id)} class="px-6 py-4">
                               delete
                            </td>
                            <td  class="px-6 py-4">
                            <Link to={`/admin/edit-product/${item._id}`} state={ item} className='bg-red-400 py-2 px-4 rounded-md text-center text-white'>
                          
                               edit
                          </Link>  </td>
                        </tr>
                        
                        
                        )
                       }) }
                        
                       
                        
                    </tbody>
                </table>
            </div>

            {/*  */}
        </div>
    )
}

export default AdminProduct
