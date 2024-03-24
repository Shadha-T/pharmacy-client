import React, { useEffect, useState } from 'react'
import { errorToast, successToast } from '../../USER/Toast/toast'
import axios from 'axios'
import { useLocation, useParams } from 'react-router-dom'

function AdminEditProduct() {
    const [pdtname, setPdtname] = useState('')
    const {id} = useParams()
    const {state} = useLocation()
    console.log(state);
    const [desc, setDesc] = useState('')
    const [price, setPrice] = useState('')
    const [cost, setCost] = useState('')
  
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(`http://localhost:3000/api/product/${id}`,  { pdtname: pdtname, desc: desc, price: price, cost: cost })
            successToast(response.data.message)
        } catch (error) {
            errorToast(error.message|| error.response.data.message, 'error')
        }
    };
useEffect(()=>{
  setPdtname(state?.pdtname)
  setDesc(state?.desc)
  setPrice(state?.price)
  setCost(state?.cost)

  

},[])

   
  return (
    <div>
       <div className='flex justify-center items-center ms-4 mt-5'>



<form onSubmit={handleSubmit} className="max-w-md mx-auto ">
    <div className="relative z-0 w-full mb-5 group">
        <input type="pdtname" value={pdtname} onChange={(e) => setPdtname(e.target.value)} name="pdtname" id="pdtname" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label for="pdtname" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Product Name</label>
    </div>
    <div className="relative z-0 w-full mb-5 group">
        <input type="desc" value={desc}onChange={(e) => setDesc(e.target.value)} name="desc" id="desc" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label for="desc" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Description</label>
    </div>
    <div className="relative z-0 w-full mb-5 group">
        <input type="price" value={price} onChange={(e) => setPrice(e.target.value)} name="price" id="price" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label for="price" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Price</label>
    </div>
   
    <div className="grid md:grid-cols-2 md:gap-6">
        <div className="relative z-0 w-full mb-5 group">
            <input type="cost" value={cost}onChange={(e) =>setCost(e.target.value)} name="floating_cost" id="floating_cost" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
            <label for="floating_first_cost" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Delivery cost</label>
        </div>

    </div>
    <div className="grid md:grid-cols-2 md:gap-6">

    </div>
    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">EDIT</button>
</form>

</div>
    </div>
  )
}

export default AdminEditProduct
