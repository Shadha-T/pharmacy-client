import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { IoReorderFourSharp } from "react-icons/io5";
import { RiSecurePaymentLine } from "react-icons/ri";
import { FaHouseUser } from "react-icons/fa";
import { RiLogoutBoxLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";

function Sidebar() {
 return (
    <div className="  bg-cyan-400 w-[300px] h-fullscreen ">
      <ul className="mt-3 ">
        <div className="">
        <li className=" text-lg rounded-xl my-1 w-[90%] m-auto px-9 py-3 hover:bg-red-100 flex text-cyan-800">
          <NavLink to={""}> <FaHome />Home </NavLink>
        </li>
        </div>
        <li className=" text-lg rounded-xl my-1 w-[90%] m-auto px-9 py-3 hover:bg-red-100 text-cyan-800">
          <NavLink to={"/admin/product"}> Product </NavLink>
        </li>
        <li className=" text-lg rounded-xl my-1 w-[90%] m-auto px-9 py-3 hover:bg-red-100 text-cyan-800">
          <NavLink to={"/admin/admin-banner"}> <IoReorderFourSharp />Banner </NavLink>
        </li>
        <li className=" text-lg rounded-xl my-1 w-[90%] m-auto px-9 py-3 hover:bg-red-100 text-cyan-800">
          <NavLink to={"/admin/admin-blog"}><FaShoppingCart /> Blog </NavLink>
        </li>
        <li className=" text-lg rounded-xl my-1 w-[90%] m-auto px-9 py-3 hover:bg-red-100 text-cyan-800">
          <NavLink to={"/admin/admin-categories"}> <RiSecurePaymentLine />Categories </NavLink>
        </li>
        <li className=" text-lg rounded-xl my-1 w-[90%] m-auto px-9 py-3 hover:bg-red-100 text-cyan-800">
          <NavLink to={""}><FaHouseUser /> Users </NavLink>
        </li>
        <li className=" text-lg rounded-xl my-1 w-[90%] m-auto px-9 py-3 hover:bg-red-100 text-cyan-800">
          <NavLink to={""}><CgProfile /> Profile </NavLink>
        </li>
       
        <li className=" text-lg rounded-xl my-1 w-[90%] m-auto px-9 py-3 hover:bg-red-100 text-cyan-800">
          <NavLink  ><RiLogoutBoxLine /> Logout </NavLink>
        </li>
      </ul>
    </div>
    
  );
}

export default Sidebar;






