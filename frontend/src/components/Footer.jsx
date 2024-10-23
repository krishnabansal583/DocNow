import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img className="mb-5 w-[200px]" src={assets.logo2} alt="" />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            Our platform connects you with a comprehensive network of trusted
            doctors across various specialties. Whether you're seeking a routine
            check-up or a specialist consultation, finding the right healthcare
            professional has never been easier. Simply browse our extensive list
            of verified doctors, read patient reviews, and choose a time that
            suits you.
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Home</li>
            <li>About</li>
            <li>Contact us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li> +1 234 567 890</li>
            <li>docnow@gmail.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2024@ DocNow - All Right Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
