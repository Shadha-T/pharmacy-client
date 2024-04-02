import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Items() {

  const [result,setResult] = useState([])

  useEffect(()=>{
    fetchdata()
  },[])

  const fetchdata = async()=>{
    try {
      const response = await axios.get('http://localhost:3000/api/category')
      setResult(response.data.result)
    } catch (error) {
      
    }
  }
  return (
    <div >
         <div className='flex bg-purple-100 gap-5 text-md justify-center mt-1  h-9 items-center'>
      {
        result.map((item)=>{
          return(
            <>
           
             <Link to={`/shop/${item._id}`} >
          <p>{item.categoryname}</p>
        </Link>
      
            </>
          )
        })
      }
    
       
      
      
      </div>

    </div>
  )
}

export default Items
