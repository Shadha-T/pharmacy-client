
import { Card } from "@mui/material"
import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"





function TpProductAll() {
  const [result,setResult]= useState([])


   


    useEffect(()=>{
      fetchdata()
    },[])

    const fetchdata = async()=>{
      try {
        const response= await axios.get('http://localhost:3000/api/product')
        setResult(response.data.result)
      } catch (error) {
      
      }
    }
    



  return (
   <> 
    
       
       
     <div className='flex justify-center gap-6 flex-wrap'>  
    {
     result.map((item)=>{
       return(
         <>
        
      <Card sx={{ minWidth: 100 }} >
      <Link to={`/product/${item._id}`} state={item}>
         <div className='flex flex-col border-2 bg-purple-100  justify-center gap-4 ' >
       
        <img src={item.image} className='h-52 w-40   '></img>
        </div>
        <div className=''>
        <p className='flex justify-center items-center'>{item.pdtname}</p>
        {/* <p className='flex justify-center items-center'>{item.desc}</p> */}
        <p className='flex justify-center items-center'>${item.price}</p>
        {/* <p className='flex justify-center items-center'>${item.cost}</p> */}
</div>
       
        <div className=''>
        <button className='bg-custom-plum-light rounded-md h-8 w-64  text-white'>Add bag<i class="fa-solid fa-bag-shopping ml-2"></i></button>
        </div>
        </Link> 
    </Card>
     
        </>
       )
     })
    }
   </div>
   </>
  )
}

export default TpProductAll



