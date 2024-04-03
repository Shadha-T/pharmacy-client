
import { useEffect, useState } from "react"
import { errorToast, successToast } from "../../USER/Toast/toast.js"
import axios from "axios"
import { useLocation, useParams } from "react-router-dom"
import FileBase64 from "react-file-base64"



function PosterEdit() {
    const {id} = useParams()

    const {state} = useLocation()
    console.log(state);
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [percentage, setPercentage] = useState('')
    const [price, setPrice] = useState('')
    const [offerprice,setOfferprice ] = useState('')
    const [posterimage,setPosterimage]= useState('')


  
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(`http://localhost:3000/api/poster/${id}`, { title:title, description:description,percentage:percentage, offerprice:offerprice ,price:price,posterimage:posterimage})
            successToast("succesfully edited")
        } catch (error) {
            errorToast(error.message|| error.response.data.message, 'error')
        }
    };
    useEffect(()=>{
        setTitle(state?.title)
        setDescription(state?.description)
        setPercentage(state?.percentage)
        setPrice(state?.price)
        setOfferprice(state?.offerprice)
        setPosterimage(state?.posterimage)




      
      },[])


   
  return (
    <div>
       <div className='flex justify-center items-center ms-4 mt-5'>


       <form onSubmit={handleSubmit} className="max-w-md mx-auto ">
       <div className="relative z-0 w-full mb-5 group">
                    <img src={posterimage} />
                 <FileBase64 onDone={(res)=>setPosterimage(res.base64)}/>
                  </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input type="title" value={title} onChange={(e) => setTitle(e.target.value)} name="title" id="title" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label for="title" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Poster title</label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input type="description"value={description} onChange={(e) => setDescription(e.target.value)} name="description" id="description" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label for="description" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"> Poster Description</label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input type="price" value={percentage}onChange={(e) => setPercentage(e.target.value)} name="price" id="price" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label for="price" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"> Poster Percentage</label>
                </div>
                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="cost" value={price}onChange={(e) => setPrice(e.target.value)} name="floating_cost" id="floating_cost" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label for="floating_first_cost" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">price</label>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="cost" value={offerprice}onChange={(e) =>setOfferprice (e.target.value)} name="floating_cost" id="floating_cost" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label for="floating_first_cost" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">offer price</label>
                    </div>
         
         
                </div>
                <div className="grid md:grid-cols-2 md:gap-6">
           
                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">ADD</button>
            </form>


</div>
    </div>
  )
}

export default PosterEdit


