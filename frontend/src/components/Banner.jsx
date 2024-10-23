import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Banner = () => {

    const navigate = useNavigate()
  return (
    <div className="flex bg-[#365486] rounded-lg px-6 sm:px-10 md:px-10 lg:px-10 my-40 md:mx-10">
      <div className="flex-1 py-8 sm:py-10 md:py-16 lg:py-20 lg:pl-6">
        <div className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold text-white">
          <p>Need a Best Doctor?</p>
          <p className="mt-6 text-2xl">
            Create Your Account to get the suitable Doctors for you
          </p>
        </div>
        <button onClick={()=>{navigate('/login'); scrollTo(0,0)}} className="bg-[#DCF2F1] text-sm sm:test-base text-gray-950 px-8 py-3 rounded-full mt-6 hover:scale-105 transition-all">
          Create Account
        </button>
      </div>
      <div className="hidden md:block md:w-1/2 lg:w-[420px] relative">
        <img
          className="w-full absolute bottom-0 right-0 max-w-md"
          src={assets.create_account}
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
