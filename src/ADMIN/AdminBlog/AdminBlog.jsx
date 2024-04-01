import axios from "axios"
import { useEffect, useState } from "react"
import { errorToast, successToast } from "../../USER/Toast/toast"
import { Link } from "react-router-dom"



function AdminBlog() {


    const [blogs,setBlogs] = useState([])
  
    useEffect(()=>{
        fetchdata()
    },[])

    const fetchdata = async()=>{
        try {
            const response = await axios.get('http://localhost:3000/api/blog')
       
      setBlogs(response.data.result)
      
           } catch (error) {
             errorToast(error.response.data.message,'error')
           }
    }


    const handleDelete =async (id)=>{
        try {
            const response = await axios.delete(`http://localhost:3000/api/blog/${id}`)
            successToast(response.data.message)
        } catch (error) {
            errorToast(error.message)
        }
    }

    const handleEdit=async(id)=>{
        try {
            const response= await axios.put(`http://localhost:3000/api/blog/${id}`)
            successToast(response.data.message)
        } catch (error) {
           errorToast(error.message) 
        }
        
        
    }

    return (
        <div>
            <Link to={'/admin/add-blog'} className='hover:underline'>Add Blog</Link>
          

           


            <div class="relative overflow-x-auto">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr className='bg-cyan-200'>
                        <th scope="col" class="px-6 py-3 ">
                            image
                            </th>
                            <th scope="col" class="px-6 py-3">
                               title
                            </th>
                            <th scope="col" class="px-6 py-3">
                              Description
                            </th>
                           
                        </tr>
                    </thead>
                    <tbody>
                       { blogs.map((item)=>{
                        return(
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                            <td class="px-6 py-4">
                              <img src={item.blogimage} className="h-9 w-9"/>
                            </td>
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {item.title}
                            </th>
                            <td class="px-6 py-4">
                              {item.description}
                            </td>
                           
                            <td onClick={()=>handleDelete(item._id)} class="px-6 py-4">
                               delete
                            </td>
                            <Link to={`/admin/edit-blog/${item._id}`} state={ item}>
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

export default AdminBlog

