import { useState } from "react";

import { Link, NavLink } from "react-router-dom";
;
import InputField from "../components/Forms/InputField/InputField";
import { errorToast, successToast } from "../Toast/toast";



function UserRegister() {
  const [formFiled, setFormField] = useState({});

  const formdatas = [
    {
      type: "text",
      placeholder: "firstname",
      className: "",
      name: "Firstname",
    },
    {
      type: "text",
      placeholder: "lastname",
      className: "",
      name: "lastname",
    },
    {
      type: "email",
      placeholder: "Enter your Email",
      className: "",
      name: "email",
    },
    {
      type: "password",
      placeholder: " Enter your Password",
      className: "",
      name: "password",
    },
   
  ];

  const onChangeValues = (e) => {
    console.log(e.target.value);
    setFormField({ ...formFiled, [e.target.name]: e.target.value });
  };

  const handleSubmit =async (e) => {
    e.preventDefault();
    try {
     const response = await UserRegister(formFiled)

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
        <h2 className="text-white text-xl">Sign Up</h2>
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
