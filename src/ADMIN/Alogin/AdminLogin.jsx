import { useState } from "react";

import { Link } from "react-router-dom";


import { useNavigate } from "react-router-dom";
import { errorToast, successToast } from "../../USER/Toast/toast";
import axios from "axios";





function AdminLogin() {

  const navigate = useNavigate();

  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
 


  

  const handleSubmit = async(e) => {
    e.preventDefault();
 
    try {
      const response = await axios.post('http://localhost:3000/api/admin/login',{ email:email,password:password })
 
       successToast(response.data.message)

       console.log(response.data.token);

       if(!response.data.token){
        return errorToast('token is not provided')
       }

       localStorage.setItem("token",response.data.token)
       localStorage.setItem("admin",JSON.stringify(response.data.admin))
     
         navigate('/admin')
     } catch (error) {
       errorToast(error.response.data.message,'error')
     }
  };


  return (
    <div className="flex justify-center items-center flex-col h-screen">
      <form
        onSubmit={handleSubmit}
        action=""
        className="w-[40%] rounded-md bg-red-400 h-[400px] flex justify-center flex-col gap-5 items-center"
      >
        <input type="text" onChange={(e)=>setEmail(e.target.value)} placeholder="Email" className={`max-w-[300px] w-[80%] h-[40px] bg-white flex justify-start ps-5 rounded-md items-center`} />
        <input type="text" onChange={(e)=>setPassword(e.target.value)} placeholder="Password" className={`max-w-[300px] w-[80%] h-[40px] bg-white flex justify-start ps-5 rounded-md items-center`} />
        
       
        <input
          type="submit"
          className="text-white border-solid border-2 border-cyan-400 w-24 rounded-2xl "
        />
        {/* <button  onClick className="text-white border-1 border-b-red-400 h-14 w-44">submit</button> */}
        <Link to={'/admin-register'}>
        <p className="text-white text-xs font-semibold underline "> Signup  </p>
        </Link>
      </form>
    </div>
  );
}

export default AdminLogin;
