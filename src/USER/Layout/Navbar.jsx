import React, { useContext, useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import Avatar from '@mui/material/Avatar';
import ToggleDropdown from './DropDown';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Card } from '@mui/material';
import { Context } from '../../App';


function Navbar() {
  const [count, setCount] = useState(0)
  const [search, setSearch] = useState('')
  const [searchresult, setSearchResult] = useState([])

  const { carts } = useContext(Context)

  const handleSubmitSearch = async (se) => {
    try {
      const response = await axios.get(`http://localhost:3000/api/product/search?name=${se}`)

      console.log(response.data);
      setSearchResult(response.data.result)
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      < div className='flex  flex-row justify-between   	bg-custom-gray-dark h-14 items-center'>
        <h1 className='font-sans  size-9 text-2xl flex  ml-2 items-center mt-2 text-custom-brown-dark mb-4 sm:mb-0'>Pharmacy</h1>

        <form className="flex items-center max-w-sm mx-auto">

          <div className="flex items-center mb-4 sm:mb-0">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">

            </div>

            <input type="text" id="simple-search" className="w-64 h-7 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block ps-10 p-2.5  dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search products...  " onChange={(e) => {
                setSearch(e.target.value)
                handleSubmitSearch(e.target.value)
              }} />

          </div>
          <button type="submit" onClick={handleSubmitSearch} className="p-2.5 ms-2 text-sm font-medium text-white bg-custom-brown-dark rounded-lg border border-bg-custom-gray-light hover:bg-custom-gray-light focus:ring-4 focus:outline-none focus:ring-custom-brown-dark    w-10">

            <CiSearch className='h-3' />

          </button>
        </form>

        {
          search?.length > 0 && <div className='max-h-80 overflow-y-scroll absolute top-14 bg-white w-[400px] px-4  ml-96'>
            {
              searchresult.map((item) => {
                return (
                  <>

                    <Card sx={{ minWidth: 256 }} >
                      <Link to={`/product/${item._id}`} state={item}>
                        <div className='mt-1 mb-1 gap-4 justify-start items-center ' >
                          <div className=''>
                            <img src={item.image} className='h-72 w-56   '></img>
                          </div>
                         
                          <div className=''>
                            <p>{item.pdtname}</p>
                            <p>{item.cost}</p>
                          </div>
                          <div className=''>
                            <button className='bg-custom-plum-light rounded-md h-8 w-64  text-white'>Add bag<i class="fa-solid fa-bag-shopping ml-2"></i></button>
                          </div>
                          </div >
                      </Link>
                    </Card>
                   
                </>
              )
            })
          }
        
      </div>
}

      <div className='flex  items-center gap-3 justify-around '>
        {
          (localStorage.getItem("token") && localStorage.getItem("user")) ?
            <>
              <Link to={"user-account"}> {JSON.parse(localStorage.getItem("user")).fname + ' ' + JSON.parse(localStorage.getItem("user")).lname}</Link><Avatar alt="" src="" className='' />
              <span className='flex gap-1 items-center'><IoCartOutline className='text-custom-brown-dark' />{carts?.length}</span>
              <ToggleDropdown />

            </>
            : 'login / signup'
        }


      </div>
    </div>
    </div >
  )
}

export default Navbar
