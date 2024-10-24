import React from "react";
import { assets } from "../assets/assets";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#f8fafc] text-gray-800 py-5">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-8">
          <div className="flex-1">
            <img
              className="mb-4 w-[160px]"
              src={assets.logo2}
              alt="DocNow Logo"
            />
            <p className="text-gray-600 leading-7 text-sm md:text-base">
              Our platform connects you with a network of trusted doctors across
              various specialties. Whether you're seeking a routine check-up or
              a specialist consultation, finding the right healthcare
              professional has never been easier.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="flex flex-col gap-2 text-gray-600">
              <li className="hover:text-gray-800 transition-all duration-300 cursor-pointer">
                Home
              </li>
              <li className="hover:text-gray-800 transition-all duration-300 cursor-pointer">
                About
              </li>
              <li className="hover:text-gray-800 transition-all duration-300 cursor-pointer">
                Contact us
              </li>
              <li className="hover:text-gray-800 transition-all duration-300 cursor-pointer">
                Privacy Policy
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <ul className="flex flex-col gap-2 text-gray-600">
              <li className="flex items-center gap-2">
                <FaPhoneAlt className="text-gray-800" /> +1 234 567 890
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope className="text-gray-800" /> docnow@gmail.com
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center gap-6 mt-8">
          <a
            href="#"
            className="text-gray-600 hover:text-gray-800 transition-all duration-300"
          >
            <FaFacebook size={20} />
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-gray-800 transition-all duration-300"
          >
            <FaTwitter size={20} />
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-gray-800 transition-all duration-300"
          >
            <FaInstagram size={20} />
          </a>
        </div>
        <div className="mt-4">
          <hr className="border-gray-300" />
          <p className="text-center text-sm text-gray-600">
            &copy; 2024 DocNow - All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
