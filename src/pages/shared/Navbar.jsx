import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import AuthContext from "../../context/AuthContext/AuthContext";
import logo from "../../assets/logo.png";
import { Link as ScrollLink } from "react-scroll";
import { FaShoppingCart } from "react-icons/fa";

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
      {user && (
        <li className="text-gray-700 font-semibold text-lg">
          <NavLink to="/profile">Profile</NavLink>
        </li>
      )}
      <li className="text-gray-700 font-semibold text-lg">
        <ScrollLink to="about" smooth duration={500} className="cursor-pointer">About</ScrollLink>
      </li>
      <li className="text-gray-700 font-semibold text-lg">
        <ScrollLink to="program" smooth duration={500} className="cursor-pointer">Program</ScrollLink>
      </li>
      <li className="text-gray-700 font-semibold text-lg">
        <ScrollLink to="contact" smooth duration={500} className="cursor-pointer">Contact</ScrollLink>
      </li>
      <li className="text-gray-700 font-semibold text-lg">
        <NavLink to="/dashboard">Dashboard</NavLink>
      </li>
    </>
  );

  return (
    <div className="relative">
      <div className="p-5 navbar text-gray-800 h-24 bg-base-100 shadow-sm relative z-10">
        {/* Start */}
        <div className="navbar-start">
          <div className="dropdown lg:hidden">
            <button
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="btn bg-white btn-ghost"
              aria-label="Toggle mobile menu"
            >
              {/* Hamburger Icon */}
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

        {/* Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>

        {/* Cart Icon (Always visible top-right) */}
        <div className="absolute right-5 top-6">
          <button className="btn bg-green-700 text-white border-none hover:bg-green-800 flex items-center gap-2">
            <FaShoppingCart size={20} />
            <span>Cart</span>
          </button>
        </div>

        {/* Auth Buttons (only for large screens) */}
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
