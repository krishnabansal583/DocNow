import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { AiOutlineCalendar, AiOutlineClockCircle } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";

const MyAppointments = () => {
  const { doctors } = useContext(AppContext);

  return (
    <div className="p-6 mt-10 max-w-4xl mx-auto bg-white rounded-lg shadow-xl mb-40">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-4">
        My Appointments
      </h2>

      {doctors.slice(0, 3).map((item, index) => (
        <div
          className="grid sm:grid-cols-[1fr_2fr_1fr] gap-6 py-4 border-b last:border-b-0"
          key={index}
        >
          <div className="flex justify-center items-center">
            <img
              className="w-24 h-24 rounded-full shadow-md object-cover bg-indigo-50"
              src={item.image}
              alt={`${item.name}'s profile`}
            />
          </div>

          <div className="text-sm text-gray-700">
            <p className="text-xl font-semibold text-gray-800 mb-1">
              {item.name}
            </p>
            <p className="text-gray-500 mb-3">{item.speciality}</p>
            <p className="flex items-center gap-2 text-sm text-gray-600">
              <MdLocationOn className="text-primary" />
              <span>
                {item.address.line1}, {item.address.line2}
              </span>
            </p>
            <p className="flex items-center gap-2 mt-2">
              <AiOutlineCalendar className="text-primary" />
              <span>1, MAY, 2024</span>
              <AiOutlineClockCircle className="text-primary ml-4" />
              <span>8:30 PM</span>
            </p>
          </div>

          <div className="flex flex-col justify-center gap-3">
            <button className="py-2 w-full text-center rounded-md text-white bg-primary hover:bg-primary-dark transition duration-200">
              Pay Online
            </button>
            <button className="py-2 w-full text-center rounded-md border text-gray-600 hover:bg-red-500 hover:text-white transition duration-200">
              Cancel Appointment
            </button>
            <button className="py-2 w-full text-center rounded-md border text-gray-600 hover:bg-yellow-500 hover:text-white transition duration-200">
              Reschedule Appointment
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyAppointments;
