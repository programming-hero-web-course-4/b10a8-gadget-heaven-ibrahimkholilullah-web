import React from 'react';
import { NavLink, useLocation } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { GiSelfLove } from "react-icons/gi";

const Navber = () => {
  const location = useLocation();

  // Determine if the current path is home
  const isHome = location.pathname === '/';

  // Set background color and text color based on path
  const backgroundColor = isHome ? '#9538E2' : '#FFFFFF'; // Purple for Home, white for other paths
  const textColor = isHome ? 'text-white' : 'text-black'; // White text for Home, black text for other paths

  const data = (
    <>
      <NavLink to="/" className={textColor}>Home</NavLink>
      <NavLink to="/statistics" className={textColor}>Statistics</NavLink>
      <NavLink to="/dashboard" className={textColor}>Dashboard</NavLink>
      <NavLink to="/myditails" className={textColor}>My Details</NavLink>
    </>
  );

  return (
    <div>
      <div className={`navbar mt-4 rounded-t-xl ${textColor}`} style={{ backgroundColor }}>
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content gap-3 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              style={{ backgroundColor }}
            >
              {data}
            </ul>
          </div>
          <a className={`btn btn-ghost text-xl ${textColor}`}>Gadget Heaven</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-5">
            {data}
          </ul>
        </div>
        <div className="navbar-end gap-4 mr-4">
          <FaCartShopping size="30px" color={isHome ? 'white' : 'black'} />
          <GiSelfLove size="30px" color={isHome ? 'white' : 'black'} />
        </div>
      </div>
    </div>
  );
};

export default Navber;
