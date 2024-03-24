import { useState } from "react";

import { Link,  useNavigate } from "react-router-dom";

import { errorToast, successToast } from "../Toast/toast";
import axios from "axios";



function UserRegister() {

  const navigate = useNavigate()

  const [fname,setFname] = useState('')
  const [lname,setLname] = useState('')
  const [email,setEmail] = useState('')

  const [password,setPassword] = useState('')

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
     const response = await  axios.post('http://localhost:3000/api/user/register',{ fname:fname,lname:lname,email:email,password:password })
navigate('/user-login')
      successToast(response.data.message)
    } catch (error) {
      errorToast(error.response.data.message,'error')
    }
  };

  

  return (
    <div className="flex justify-center items-center flex-col h-screen">
      <form
        onSubmit={handleSubmit}
        action=""
        className="w-1/3 rounded-md bg-cyan-600 h-[500px] flex justify-center flex-col gap-5 items-center "
      >
 
        <input type="text" onChange={(e)=>setFname(e.target.value)} placeholder="firstName" className={`max-w-[300px] w-[80%] h-[40px] bg-white flex justify-start ps-5 rounded-md items-center`} />
        <input type="text" onChange={(e)=>setLname(e.target.value)} placeholder="lastName" className={`max-w-[300px] w-[80%] h-[40px] bg-white flex justify-start ps-5 rounded-md items-center`} />
        <input type="text" onChange={(e)=>setEmail(e.target.value)} placeholder="Email" className={`max-w-[300px] w-[80%] h-[40px] bg-white flex justify-start ps-5 rounded-md items-center`} />
        <input type="text" onChange={(e)=>setPassword(e.target.value)} placeholder="Password" className={`max-w-[300px] w-[80%] h-[40px] bg-white flex justify-start ps-5 rounded-md items-center`} />
        
        <input
          type="submit"
          className="text-white border-solid border-2 border-red-400 bg-cyan-600 w-24 rounded-2xl"
        />
      <Link to={"/user-login"}>
        <p className="text-white  font-semibold text-xs underline ">Sign in </p>
      </Link>
      </form>
    </div>
  );
}
export default UserRegister;
