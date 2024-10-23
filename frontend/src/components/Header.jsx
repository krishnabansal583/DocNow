// import React from "react";
// import { assets } from "../assets/assets";

// const Header = () => {
//   return (
    
//       <div className="flex flex-col md:flex-row flex-wrap bg-[#EBF4F6] px-6 md:px-10 lg:px-20">
//         <div className="md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]">
//           <p className="text-3xl md:text-4xl lg:text-5xl text-gray-800 font-semibold">
//             Book Appointment With Trusted Doctors
//           </p>
//           <div className="flex flex-col md:flex-row items-center gap-3 text-gray-700 text-sm font-light">
//             <img className="w-28" src={assets.group_profiles} alt="" />
//             <p>
//               Simply browse through our extensive list of trusted doctors, <br />
//               schedule your appointment hassle-free
//             </p>
//           </div>
//           <a
//             className="flex items-center gap-2 bg-[#071952] px-8 py-3 rounded-full text-white text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300"
//             href="#speciality"
//           >
//             Book Appointment <img className="w-3" src={assets.arrow_icon} alt="" />
//           </a>
//         </div>

//         <div className="md:w-1/2 relative pl-9">
//           <img
//             className="w-full md:absolute h-[450px] bottom-0"
//             src={assets.head}
//             alt=""
//           />
//         </div>
//       </div>
    
//   );
// };

// export default Header;

// import React, { useState } from "react";
// import { assets } from "../assets/assets";

// const Header = () => {
//   const [showPhoneNumber, setShowPhoneNumber] = useState(false);

//   const handleEmergencyClick = () => {
//     setShowPhoneNumber(!showPhoneNumber); // Toggle phone number display
//   };

//   return (
//     <div className="relative">
//       <div className="flex flex-col md:flex-row flex-wrap bg-[#EBF4F6] px-6 md:px-10 lg:px-20">
//         <div className="md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]">
//           <p className="text-3xl md:text-4xl lg:text-5xl text-gray-800 font-semibold">
//             Book Appointment With Trusted Doctors
//           </p>
//           <div className="flex flex-col md:flex-row items-center gap-3 text-gray-700 text-sm font-light">
//             <img className="w-28" src={assets.group_profiles} alt="" />
//             <p>
//               Simply browse through our extensive list of trusted doctors, <br />
//               schedule your appointment hassle-free
//             </p>
//           </div>
//           <a
//             className="flex items-center gap-2 bg-[#071952] px-8 py-3 rounded-full text-white text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300"
//             href="#speciality"
//           >
//             Book Appointment <img className="w-3" src={assets.arrow_icon} alt="" />
//           </a>
//         </div>

//         <div className="md:w-1/2 relative pl-9">
//           <img
//             className="w-full md:absolute h-[450px] bottom-0"
//             src={assets.head}
//             alt=""
//           />
//         </div>
//       </div>

//       {/* Emergency Button */}
//       <div className="fixed right-5 bottom-10">
//         <button
//           onClick={handleEmergencyClick}
//           className="bg-red-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-red-700 transition-all"
//         >
//           Emergency
//         </button>

//         {/* Show emergency phone number when clicked */}
//         {showPhoneNumber && (
//           <div className="mt-2 bg-white text-black p-3 rounded-lg shadow-lg">
//             Emergency Phone: <span className="font-bold">+1 234 567 890</span>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Header;

// import React, { useState } from "react";
// import { assets } from "../assets/assets";

// const Header = () => {
//   const [showPhoneNumber, setShowPhoneNumber] = useState(false);

//   const handleEmergencyClick = () => {
//     setShowPhoneNumber(!showPhoneNumber); // Toggle phone number display
//   };

//   return (
//     <div className="relative">
//       <div className="flex flex-col md:flex-row flex-wrap bg-[#EBF4F6] px-6 md:px-10 lg:px-20">
//         <div className="md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]">
//           <p className="text-3xl md:text-4xl lg:text-5xl text-gray-800 font-semibold">
//             Book Appointment With Trusted Doctors
//           </p>
//           <div className="flex flex-col md:flex-row items-center gap-3 text-gray-700 text-sm font-light">
//             <img className="w-28" src={assets.group_profiles} alt="" />
//             <p>
//               Simply browse through our extensive list of trusted doctors, <br />
//               schedule your appointment hassle-free
//             </p>
//           </div>
//           <a
//             className="flex items-center gap-2 bg-[#071952] px-8 py-3 rounded-full text-white text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300"
//             href="#speciality"
//           >
//             Book Appointment <img className="w-3" src={assets.arrow_icon} alt="" />
//           </a>
//         </div>

//         <div className="md:w-1/2 relative pl-9">
//           <img
//             className="w-full md:absolute h-[450px] bottom-0"
//             src={assets.head}
//             alt=""
//           />
//         </div>
//       </div>

//       {/* Emergency Button */}
//       <div className="fixed right-0 top-1/2 flex flex-col items-center space-y-4">
//         <button
//           onClick={handleEmergencyClick}
//           className="bg-blue-900 text-white px-4 py-2  shadow-lg hover:bg-blue-700 transition-all duration-300"
//         >
//           Emergency
//         </button>

//         {/* Show emergency phone number when clicked */}
//         {showPhoneNumber && (
//           <div className="bg-white text-black p-3 rounded-lg shadow-lg">
//             Emergency Phone: <span className="font-bold">+1 234 567 890</span>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Header;

import React, { useState } from "react";
import { assets } from "../assets/assets";

const Header = () => {
  const [showPhoneNumber, setShowPhoneNumber] = useState(false);

  const handleEmergencyClick = () => {
    setShowPhoneNumber(!showPhoneNumber); // Toggle phone number display
  };

  return (
    <div className="relative">
      <div className="flex flex-col md:flex-row flex-wrap bg-[#365486] px-6 md:px-10 lg:px-20">
        <div className="md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]">
          <p className="text-3xl md:text-4xl lg:text-5xl text-gray-100 font-semibold">
          Book <br /> Your Doctor Today
          </p>
          <div className="flex flex-col md:flex-row items-center gap-3 text-gray-200 text-base font-light">
            <img className="w-28" src={assets.group_profiles} alt="" />
            <p>
            Discover trusted doctors and schedule your <br />appointment quickly.
            </p>
          </div>
          <a
            className="flex items-center gap-2 bg-[#DCF2F1] px-8 py-3 rounded-full text-gray-900 font-semibold text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300"
            href="#speciality"
          >
            Book Appointment <img className="w-3" src={assets.arrow_icon} alt="" />
          </a>
        </div>

        <div className="md:w-1/2 relative pl-9">
          <img
            className="w-full md:absolute h-[90%] bottom-0"
            src={assets.head}
            alt=""
          />
        </div>
      </div>

      {/* Emergency Button */}
      <div className="fixed right-[15px] top-1/2">
        <button
          onClick={handleEmergencyClick}
          className="bg-blue-800 text-white px-4 py-2 shadow-lg hover:bg-blue-700 transition-all transform rotate-90 origin-right"
        >
          Emergency
        </button>

        {/* Show emergency phone number when clicked */}
        {showPhoneNumber && (
          <div className="bg-white text-black p-1 shadow-lg mt-4">
            Emergency Phone: <span className="font-bold">+1 234 567 890</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
