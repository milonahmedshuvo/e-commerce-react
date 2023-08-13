import React from "react";
import { Link } from "react-router-dom";

const AdminNavber = () => {




  const manuItem = (
    <>
      <Link to="/" className="text-lg font-medium text-blue-400  ml-5 ">
        Home
      </Link>

      <Link to="/admindashbord/adminOrder" className="text-lg font-medium  ml-5 text-blue-400">
        Admin order
      </Link>
      
      <Link to="/admindashbord/adminproduct" className="text-lg font-medium  ml-5 text-blue-400">
        Admin product
      </Link>
      <Link to="/admindashbord/addproduct" className="text-lg font-medium  ml-5 text-blue-400">
         Add product
      </Link>
    </>
  );





  return (
    <div className="navbar bg-white sticky top-0 z-30 ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2   w-52"
          >
            
          </ul>
        </div>
        <a className="  font-serif text-2xl font-semibold text-blue-500 uppercase">
        Admin Dashboard
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">


        </ul>
      </div>
      <div className="navbar-end">


      {manuItem}

        
      </div>
    </div>
  );
};

export default AdminNavber;
