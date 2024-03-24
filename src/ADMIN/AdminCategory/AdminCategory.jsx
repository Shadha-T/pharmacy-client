import axios from "axios"
import { useEffect, useState } from "react"
import { errorToast, successToast } from '../../USER/Toast/toast'
import { Link } from "react-router-dom"




function AdminCategory() {


    const [categories,setCategories] = useState([])
  
    useEffect(()=>{
        fetchdata()
    },[])

    const fetchdata = async()=>{
        try {
            const response = await axios.get('http://localhost:3000/api/category')
       
      setCategories(response.data.result)
      
           } catch (error) {
             errorToast(error.response.data.message,'error')
           }
    }


    const handleDelete =async (id)=>{
        try {
            const response = await axios.delete(`http://localhost:3000/api/category/${id}`)
            successToastt(response.data.message)
        } catch (error) {
            errorToast(error.message)
        }
    }

    const handleEdit=async(id)=>{
        try {
            const response= await axios.put(`http://localhost:3000/api/category/${id}`)
            successToast(response.data.message)
        } catch (error) {
           errorToast(error.message) 
        }
        
        
    }

    return (
        <div>
            <Link to={'/admin/add-category'} className='hover:underline'>Add Categories</Link>
          

           


            <div class="relative overflow-x-auto">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr className='bg-cyan-200'>
                            <th scope="col" class="px-6 py-3">
                                Category name
                            </th>
                            <th scope="col" class="px-6 py-3">
                              Category Description
                            </th>
                           
                        </tr>
                    </thead>
                    <tbody>
                       { categories.map((item)=>{
                        return(
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {item.categoryname}
                            </th>
                            <td class="px-6 py-4">
                              {item.categorydescription}
                            </td>
                           
                            
                            <td onClick={()=>handleDelete(item._id)} class="px-6 py-4">
                               delete
                            </td>
                            <Link to={`/admin/edit-category/${item._id}`} state={ item}>
                            <td  class="px-6 py-4">
                               edit
                            </td></Link>
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

export default AdminCategory

