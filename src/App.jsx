import { useState } from 'react'
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








function App() {
  const [count, setCount] = useState(0)

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
          path:"user-details",
          element:<Details/>
        }

 
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
       }
        
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

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
