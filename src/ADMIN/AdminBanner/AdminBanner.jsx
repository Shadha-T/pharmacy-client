import axios from "axios"
import { useEffect, useState } from "react"
import { errorToast, successToast } from "../../USER/Toast/toast"
import { Link } from "react-router-dom"


function AdminBanner() {


    const [banners,setBanners] = useState([])
  
    useEffect(()=>{
        fetchdata()
    },[])

    const fetchdata = async()=>{
        try {
            const response = await axios.get('http://localhost:3000/api/banner')
       
      setBanners(response.data.result)
      
           } catch (error) {
             errorToast(error.response.data.message,'error')
           }
    }


    const handleDelete =async (id)=>{
        try {
            const response = await axios.delete(`http://localhost:3000/api/banner/${id}`)
            successToast(response.data.message)
        } catch (error) {
            errorToast(error.message)
        }
    }

    const handleEdit=async(id)=>{
        try {
            const response= await axios.put(`http://localhost:3000/api/banner/${id}`)
            successToast(response.data.message)
        } catch (error) {
           errorToast(error.message) 
        }
        
        
    }

    return (
        <div>
            <Link to={'/admin/add-banner'} className='hover:underline'>Add Banner</Link>
          

           


            <div class="relative overflow-x-auto">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr className='bg-cyan-200'>
                            <th scope="col" class="px-6 py-3">
                              title
                            </th>
                            <th scope="col" class="px-6 py-3">
                              Description
                            </th>
                            <th scope="col" class="px-6 py-3">
                           percentage
                            </th>
                            <th scope="col" class="px-6 py-3">
                              price
                            </th>
                            <th scope="col" class="px-6 py-3">
                              offerprice
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                       { banners.map((item)=>{
                        return(
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {item.title}
                            </th>
                            <td class="px-6 py-4">
                              {item.description}
                            </td>
                            <td class="px-6 py-4">
                            {item.price}
                            </td>
                            <td class="px-6 py-4">
                             {item.percentage}
                            </td>
                            <td class="px-6 py-4">
                             {item.offerprice}
                            </td>
                            <td onClick={()=>handleDelete(item._id)} class="px-6 py-4">
                               delete
                            </td>
                            <Link to={`/admin/edit-banner/${item._id}`} state={item} >
                            <td  class="px-6 py-4">
                               edit
                            </td></Link>
                        </tr>
                        
                        
                        )
                       }) }
                        
                       
                        
                    </tbody>
                </table>
            </div>

        
        </div>
    )
}

export default AdminBanner
