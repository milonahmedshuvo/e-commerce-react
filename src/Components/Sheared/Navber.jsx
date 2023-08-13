import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "../Context/ContextApp";

const Navber = () => {
      const {user} = useContext(MyContext)
     

    const manuItem = <>
     <Link to="/" className='text-lg font-medium  ml-5 text-black'>Home</Link> 
     <Link to="/cardpage" className='text-lg font-medium  ml-5 text-black'>Cart View</Link>
     <Link to="/admindashbord" className='text-lg font-medium  ml-5 text-black'>Admin Dashboard</Link>  
</>
    


    return (
        <div className="navbar bg-white sticky top-0 z-30 ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2   w-52">
            
          { manuItem}
          
          </ul>
        </div>
        <a className=" text-black font-serif text-2xl font-semibold uppercase">E commerce</a>
       
    
        
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          
        { manuItem}
    
        
        </ul>
      </div>
      <div className="navbar-end">
        {/* <a className="btn">Button</a> */}
    
          
        <Link to="/phoneauth" className='uppercase text-black mr-3 text font-medium'>Login/Register</Link>
          
    <img className="rounded-full mr-2 ml-2 h-10 w-10 " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2sl3kmWLEHd_w4_ez9nh-2BYZcSQ8GviTaA&usqp=CAU" alt="" />
    
          
        
      
        
    
      </div>
    </div>
      )
};

export default Navber;
