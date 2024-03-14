import { useState } from "react";
// import InputField from "../../components/Forms/InputField/InputField";
import { Link, NavLink } from "react-router-dom";


import { useNavigate } from "react-router-dom";


import InputField from "../components/Forms/InputField/InputField";
import { errorToast, successToast } from "../Toast/toast";


function Login() {

  const navigate = useNavigate();

 

  const [formFiled, setFormField] = useState({});

  const formdatas = [
    {
      type: "email",
      placeholder: "Enter your Email",
      className: "",
      name: "email",
    },
    {
      type: "password",
      placeholder: "Enter your password ",
      className: "",
      name: "password",
    },
  ];

  const onChangeValues = (e) => {
    console.log(e.target.value);
    setFormField({ ...formFiled, [e.target.name]: e.target.value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(formFiled);
    try {
      const response = await userLogin(formFiled)
 
       successToast(response.data.message)

       console.log(response.data.token);

       if(!response.data.token){
        return errorToast('token is not provided')
       }

       localStorage.setItem("token",response.data.token)
       localStorage.setItem("users",JSON.stringify(response.data.users))
     
         navigate('/')
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
        {formdatas.map(({ className, placeholder, type, name }, index) => (
          <InputField
            onChange={onChangeValues}
            key={index}
            type={type}
            placeholder={placeholder}
            name={name}
            className={`${className} max-w-[300px] w-[80%] h-[40px] bg-white flex justify-start ps-5 rounded-md items-center`}
          />
        ))}
        <input
          type="submit"
          className="text-white border-solid border-2 border-red-400 w-24 rounded-2xl "
        />
        {/* <button  onClick className="text-white border-1 border-b-red-400 h-14 w-44">submit</button> */}
        <Link to={'/user-register'}>
        <p className="text-white text-xs font-semibold underline "> Signup  </p>
        </Link>
      </form>
    </div>
  );
}

export default Login;
