import { useState } from "react";

import { Link } from "react-router-dom";


import { useNavigate } from "react-router-dom";



import { errorToast, successToast } from "../Toast/toast";
import axios from "axios";


function Login() {

  const navigate = useNavigate();

 
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')


  const handleSubmit = async(e) => {
    e.preventDefault();

    try {
      const response = await  axios.post('http://localhost:3000/api/user/login',{ email:email,password:password })
 navigate('/')
       successToast(response.data.message)

       localStorage.setItem("token",response.data.token);
       localStorage.setItem("user",JSON.stringify(response.data.users))
     } catch (error) {
       errorToast(error.response.data.message,'error')
     }
  };


  return (
    <div className="flex justify-center items-center flex-col h-screen">
      <form
        onSubmit={handleSubmit}
        action=""
        className="w-[40%] rounded-md bg-cyan-600 h-[400px] flex justify-center flex-col gap-5 items-center"
      >
        <h2 className="text-white text-xl">Sign in</h2>
        <input type="text" onChange={(e)=>setEmail(e.target.value)} placeholder="Email" className={`max-w-[300px] w-[80%] h-[40px] bg-white flex justify-start ps-5 rounded-md items-center`} />
        <input type="text" onChange={(e)=>setPassword(e.target.value)} placeholder="Password" className={`max-w-[300px] w-[80%] h-[40px] bg-white flex justify-start ps-5 rounded-md items-center`} />
        
        <input
          type="submit"
          className="text-white border-solid border-2 border-red-400 w-24 rounded-2xl "
        />

        <Link to={'/user-register'}>
        <p className="text-white text-xs font-semibold underline "> Signup  </p>
        </Link>
      </form>
    </div>
  );
}

export default Login;
