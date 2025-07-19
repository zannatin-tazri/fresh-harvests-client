import React from "react";
import logo from "../../assets/logo.png";
import { FaFacebookF, FaTwitter, FaInstagram, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { SiVisa, SiApplepay, SiPaypal, SiAppstore, SiGoogleplay } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 px-6 py-10 border-t">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 p-8">
        
        
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img src={logo} alt="Logo" className="w-10" />
            <h2 className="text-2xl font-bold text-gray-800">Fresh Harvests</h2>
          </div>
          <p className="mb-4">Download App:</p>
          <div className="flex gap-2">
            <a href="#" aria-label="App Store">
              <SiAppstore size={36} />
            </a>
            <a href="#" aria-label="Google Play">
              <SiGoogleplay size={36} />
            </a>
          </div>
        </div>

        
        <div>
          <h4 className="font-semibold mb-3">Quick links 1</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">Shop</a></li>
            <li><a href="#" className="hover:underline">About us</a></li>
            <li><a href="#" className="hover:underline">Blog</a></li>
            <li><a href="#" className="hover:underline">Detail Blog</a></li>
          </ul>
        </div>

        
        <div>
          <h4 className="font-semibold mb-3">Quick links 2</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Favorites</a></li>
            <li><a href="#" className="hover:underline">Cart</a></li>
            <li><a href="#" className="hover:underline">Sign in</a></li>
            <li><a href="#" className="hover:underline">Register</a></li>
          </ul>
        </div>

      
        <div>
          <h4 className="font-semibold mb-3">Contact us</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-green-600" />
              <span>1234 5678 90</span>
            </li>
            <li className="flex items-center gap-2">
              <MdEmail className="text-green-600" />
              <span>Freshharvests@gmail.com</span>
            </li>
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-green-600" />
              <span>Tanjung Sari Street, Pontianak, Indonesia</span>
            </li>
          </ul>

          <p className="mt-4 font-semibold">Accepted Payment Methods:</p>
          <div className="flex gap-3 mt-2">
            <SiVisa size={30} />
            <SiPaypal size={30} />
            <SiApplepay size={30} />
          </div>
        </div> 
      </div>

      
      <div className="mt-6 border-t pt-4 flex flex-col md:flex-row justify-between items-center text-sm">
        <p>© Copyright 2024, All Rights Reserved by Banana Studio</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#" aria-label="Facebook">
            <FaFacebookF />
          </a>
          <a href="#" aria-label="Twitter">
            <FaTwitter />
          </a>
          <a href="#" aria-label="Instagram">
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
