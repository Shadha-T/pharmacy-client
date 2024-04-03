import React, { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import UserLayout from './USER/Layout/UserLayout'
import Home from './USER/Home/Home'
import ItemLayout from './USER/listitems/ItemLayout'
import Login from './USER/Login/Login'
import UserRegister from './USER/register/UserRegister'
import Cart from './USER/components/purchase/Cart/Cart'
import Orders from './USER/components/purchase/Orders/Orders'
import Wishlist from './USER/components/purchase/Wishlist/Wishlist'
import Payment from './USER/components/purchase/Payment/Payment'
import AdminLayout from './ADMIN/Alayout/AdminLayout'
import AdminHome from './ADMIN/Ahome/AdminHome'
import AdminRegister from './ADMIN/Aregister/AdminRegister'
import AdminLogin from './ADMIN/Alogin/AdminLogin'
import Account from './USER/Account/Account'
import Aorders from './ADMIN/Admincomponent/components/Aorder/Aorders'
import Apayment from './ADMIN/Admincomponent/components/Apayment/Apayment'
import Acart from './ADMIN/Admincomponent/components/Acart/Acart'
import Profile from './ADMIN/profile/Profile'
import AdminProduct from "./ADMIN/AdminProduct/AdminProduct.jsx"
import AdminAddProduct from "./ADMIN/AdminAddProduct/AdminAddProduct.jsx"
import AdminEditProduct from "./ADMIN/AdminEditProduct/AdminEditProduct.jsx"
import AdminBanner from './ADMIN/AdminBanner/AdminBanner.jsx'
import AdminAddBanner from './ADMIN/AdminBanner/AdminAddBanner.jsx'
import AdminBannerEdit from './ADMIN/AdminBanner/AdminBannerEdit.jsx'
import AdminBlog from './ADMIN/AdminBlog/AdminBlog.jsx'
import AdminBlogAdd from './ADMIN/AdminBlog/AdminBlogAdd.jsx'
import AdminBlogEdit from './ADMIN/AdminBlog/AdminBlogEdit.jsx'
import Details from './USER/details/Details.jsx'
import AdminCategory from './ADMIN/AdminCategory/AdminCategory.jsx'
import AdminAddCategory from './ADMIN/AdminCategory/AdminAddCategory.jsx'
import AdminEditCategory from './ADMIN/AdminCategory/AdminEditCategory.jsx'
import AdminBanner2 from './ADMIN/AdminBanner2/AdminBanner2.jsx'
import AdminAddBanner2 from './ADMIN/AdminBanner2/AdminAddBanner2.jsx'
import AdminEditBanner2 from './ADMIN/AdminBanner2/AdminEditBanner2.jsx'
import NwProductsAll from './USER/viewproduct/NwProductsAll.jsx'
import AddAdminCategory from './ADMIN/AdminCategory/AdminCategory.jsx'
import Banner from './ADMIN/Banner/Banner.jsx'
import AdminBlog2 from './ADMIN/Admin2Blog/AdminBlog2.jsx'
import AdminBlog2Edit from './ADMIN/Admin2Blog/AdminBlog2Edit.jsx'
import AdminBlog2Add from './ADMIN/Admin2Blog/AdminBlog2Add.jsx'
import Blogg from './USER/blog/Blogg.jsx'
import axios from 'axios'
import PopularProductsAll from './USER/viewproduct/PopularProductsAll.jsx'
import PosterAdmin from './ADMIN/AdminPoster/PosterAdmin.jsx'
import PosterAdd from './ADMIN/AdminPoster/PosterAdd.jsx'
import PosterEdit from './ADMIN/AdminPoster/PosterEdit.jsx'
import StartShoping from './USER/components/shop/StartShoping.jsx'
import TpProductAll from './USER/viewproduct/TpProductAll.jsx'
import MedProductsAll from './USER/viewproduct/MedProductsAll.jsx'
export const Context = React.createContext()


function App() {
  const [count, setCount] = useState(0)
  const [refresh, setRefresh] = useState(true)



  const [result, setResult] = useState([])


  const router= createBrowserRouter([
    {
      path:"/",
      element:<UserLayout/>,
      children: [
        {
          path:"",
          element:<Home/>,
        },
        {
          path:"shop/:page",
          element:<ItemLayout/>
        },
       
        {
          path:"user-cart",
          element:<Cart/>
        },
        {
          path:"user-orders",
          element:<Orders/>
        },
        {
          path:"user-wishlist",
          element:<Wishlist/>
        },
        {
          path:"user-payment",
          element:<Payment/>
        },
        {
          path:"user-account",
          element:<Account/>
        },
        {
          path:"product/:userdetails",
          element:<Details/>
        },
        {
          path:"nw-products",
          element:<NwProductsAll/>
        },
        {
          path:"popular-products",
          element:<PopularProductsAll/>
        },
        {
          path:"start-shoping",
          element:<StartShoping/>
        },
        {
          path:"top-products",
          element:<TpProductAll/>
        },
        {
          path:"med-products",
          element:<MedProductsAll/>
        },

 
      ]
    },
    
    {
      path:"user-login",
      element:<Login/>
    }, 
  {
    path:"user-register",
    element:<UserRegister/>
  },
 
  
  
    {
      path:"/admin",
      element:<AdminLayout/>,
      children:[
        {
          path:"",
          element:<AdminHome/>
        },
        {
          path:"admin-categories",
          element:<AddAdminCategory/>
        },
        {
          path:"product",
          element:<AdminProduct/>
        },
        {
          path:"edit-product/:id",
          element:<AdminEditProduct/>
        },
        {
          path:"add-product",
          element:<AdminAddProduct/>
        },
        {
          path:"admin-banner",
          element:<AdminBanner/>
        },
       {
        path:"add-banner",
        element:<AdminAddBanner/>
       },
       {
        path:"edit-banner/:id",
        element:<AdminBannerEdit/>

       },
       {
        path:"admin-banner2",
        element:<AdminBanner2/>
      },
      {
        path:"add-banner2",
        element:<AdminAddBanner2/>
       },
       {
        path:"edit-banner2/:id",
        element:<AdminEditBanner2/>

       },
       {
        path:"admin-blog",
        element:<AdminBlog/>
      },
      {
        path:"add-blog",
        element:<AdminBlogAdd/>
       },
       {
        path:"edit-blog/:id",
        element:<AdminBlogEdit/>

       },
       {
        path:"add-blog2",
        element:<AdminBlog2Add/>
       },
       {
        path:"admin-blog2",
        element:<AdminBlog2/>
       },
       {
        path:"edit-blog2/:id",
        element:<AdminBlog2Edit/>

       },
       {
        path:"admin-category",
        element:<AdminCategory/>
       },
       {
        path:"add-category",
        element:<AdminAddCategory/>
       },
       {
        path:"edit-category/:id",
        element:<AdminEditCategory/>
       },
       {
        path:"banner",
        element:<Banner/>
       },
       {
        path:"blogg",
        element:<Blogg/>
       },
       {
        path:"admin-poster",
        element:<PosterAdmin/>
      },
     {
      path:"add-poster",
      element:<PosterAdd/>
     },
     {
      path:"edit-poster/:id",
      element:<PosterEdit/>

     },
        
      ],
    },
   
    {
      path:"admin-orders",
      element:<Aorders/>,
    },
    {
      path:"admin-payment",
      element:<Apayment/>,
    },
    {
      path:"admin-cart",
      element:<Acart/>,
    },   
    {
      path:"admin-profile",
      element:<Profile/>
    },   
   
    
















{
  path:"admin-register",
  element:<AdminRegister/>
},
{
  path:"admin-login",
  element:<AdminLogin/>
},



     
  ])


  const fetchdata = async () => {
    try {
        const response = await axios.get('http://localhost:3000/api/cart/viewall')
        setResult(response.data.result)
    } catch (error) {

    }
}



useEffect(() => {
  fetchdata()
}, [refresh])



  return (
    <>
    <Context.Provider value={{carts:result,refresh,setRefresh }}>
    


    <RouterProvider router={router}/>
    </Context.Provider>
    </>
  )
}

export default App
