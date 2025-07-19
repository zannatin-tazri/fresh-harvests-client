import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import AuthContext from "../../context/AuthContext/AuthContext";
import logo from "../../assets/logo.png";
import { FaShoppingCart } from "react-icons/fa";
import { ScrollLink } from "react-scroll";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleSignout = () => {
    signOutUser()
      .then(() => console.log("Signed out"))
      .catch((error) => console.error("Signout error:", error));
  };

  const links = (
    <>
      <li className="text-gray-700 font-semibold text-lg">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="text-gray-700 font-semibold text-lg">
        <NavLink to="/aboutus">About Us</NavLink>
      </li>
      
      <li className="text-gray-700 font-semibold text-lg">
        <NavLink to="/shop">Shop</NavLink>
      </li>
      <li className="text-gray-700 font-semibold text-lg">
        <NavLink to="/blog">Blogs</NavLink>
      </li>
    </>
  );

  return (
    <div className="relative">
      <div className="p-5 navbar text-gray-800 h-24 bg-base-100 shadow-sm relative z-10">
       
        <div className="navbar-start">
          <div className="dropdown lg:hidden">
            <button
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="btn bg-white btn-ghost"
              aria-label="Toggle mobile menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            {showMobileMenu && (
              <ul className="menu menu-sm dropdown-content bg-green-700 text-white rounded-box z-20 mt-3 w-52 p-4 shadow-lg">
                {links}
                <div className="mt-3">
                  {user ? (
                    <button onClick={handleSignout} className="btn btn-sm w-full bg-white text-green-700">Sign Out</button>
                  ) : (
                    <>
                      <li className="mt-2">
                        <Link to="/register" className="btn btn-sm w-full bg-green-900 text-white" onClick={() => setShowMobileMenu(false)}>Sign Up</Link>
                      </li>
                      <li className="mt-2">
                        <Link to="/signin" className="btn btn-sm w-full bg-green-900 text-white" onClick={() => setShowMobileMenu(false)}>Sign In</Link>
                      </li>
                    </>
                  )}
                </div>
              </ul>
            )}
          </div>

          <div className="flex items-center gap-2">
            <img className="w-10" src={logo} alt="Logo" />
            <span className="text-3xl text-purple-950 font-semibold">Fresh Harvests</span>
          </div>
        </div>

       
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>

        
        <div className="absolute right-5 top-6">
          <Link to="/cart" className="btn bg-green-700 text-white border-none hover:bg-green-800 flex items-center gap-2">
            <FaShoppingCart size={20} />
            <span>Cart</span>
          </Link>
        </div>

        
        <div className="navbar-end gap-3 hidden lg:flex items-center pr-28">
          {user ? (
            <button onClick={handleSignout} className="btn">Sign Out</button>
          ) : (
            <>
              <Link className="btn border-none text-white bg-green-700 hover:bg-green-800" to="/register">Sign Up</Link>
              <Link className="btn border-none text-white bg-green-700 hover:bg-green-800" to="/signin">Sign In</Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
