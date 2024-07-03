import React from 'react';
import { CgArrowTopRight } from "react-icons/cg";

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 font-Inter w-11/12 mx-auto my-3">
  <div className="navbar-start">
   
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
       <li><a>Home</a></li>
      <li><a>Services</a></li>
      <li><a>Blog</a></li>
      <li><a>About Us</a></li>
      </ul>
    </div>
    <img className='w-20 md:w-32  ' src="https://i.ibb.co/0Gy87Gp/logo-dark.png" alt="" />
    
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-sm	">
      <li><a>Home</a></li>
      <li><a>Services</a></li>
      <li><a>Blog</a></li>
      <li><a>About Us</a></li>
    </ul>
  </div>
  <div className="navbar-end ">
    <div className=' w-36 h-8 md:w-44 md:h-12 btn bg-transparent hover:bg-black hover:text-white border-2 border-black  '>
    <a className="font-medium	">Appointment</a>
    <CgArrowTopRight className='font-extrabold md:text-xl' />
    </div>
    
  </div>
</div>
    );
};

export default Navbar;