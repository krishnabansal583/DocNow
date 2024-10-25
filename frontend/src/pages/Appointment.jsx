import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { assets } from "../assets/assets";
import RelatedDoctors from "../components/RelatedDoctors";

const Appointment = () => {
  const { docId } = useParams();
  const { doctors, currencySymbol } = useContext(AppContext);

  const [docInfo, setDocInfo] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [timeSlots, setTimeSlots] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState(null);

  useEffect(() => {
    const doctor = doctors.find((doc) => doc._id === docId);
    setDocInfo(doctor);
  }, [doctors, docId]);

  useEffect(() => {
    if (docInfo) generateTimeSlots();
  }, [docInfo, selectedDate]);

  const generateTimeSlots = () => {
    const slots = [];
    const start = new Date(selectedDate.setHours(10, 0, 0));
    const end = new Date(selectedDate.setHours(21, 0, 0));

    while (start < end) {
      slots.push(
        start.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
      );
      start.setMinutes(start.getMinutes() + 30);
    }
    setTimeSlots(slots);
  };

  return (
    docInfo && (
      <div>
      <div className="flex flex-col lg:flex-row gap-6 p-6 bg-[#D2E0FB] mb-40">
        <div className=" bg-white rounded-lg shadow-lg p-6 lg:w-1/3 space-y-4">
          <img
            className=" bg-[#EBF4F6] rounded-lg w-full mb-4"
            src={docInfo.image}
            alt={docInfo.name}
          />
          <h2 className=" flex items-center text-2xl font-semibold text-gray-800">
            {docInfo.name}{" "}
            <img className=" ml-2 w-5 h-5" src={assets.verified_icon} />
          </h2>
          <p className="text-gray-600">
            {docInfo.degree} - {docInfo.speciality}
          </p>
          <button className="py-0.5 px-2 border text-xs rounded-full">
            {docInfo.experience} of experience{" "}
          </button>
          <p className="text-gray-700 mt-4">{docInfo.about}</p>
          <p className="text-primary font-semibold mt-4">
            Fee: {currencySymbol}
            {docInfo.fees}
          </p>

        </div>
        <div className="flex-1 bg-white rounded-lg shadow-lg p-6 space-y-6">
          <h3 className="text-2xl font-semibold text-gray-800">Booking Slot</h3>

          <div className="flex justify-center">
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              minDate={new Date()}
              className="border border-gray-300 rounded-lg p-2 text-gray-700"
              inline
            />
          </div>
          <div className="mt-4 space-y-2">
            <h4 className="text-lg font-medium text-gray-700">
              Available Time Slots
            </h4>
            <div className="grid grid-cols-3 gap-2">
              {timeSlots.map((time, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedSlot(time)}
                  className={`p-2 rounded-xl text-sm ${
                    selectedSlot === time
                      ? "bg-primary text-white"
                      : "bg-gray-100 text-gray-700"
                  }`}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>

          <button className="bg-[#071952] text-white w-full py-3 rounded-xl mt-6 text-lg font-medium">
            Book Appointment
          </button>
        </div>
       
      </div>
     
       <RelatedDoctors docId = {docId} speciality={docInfo.speciality}/>
       </div>
     
    )
  );
};

export default Appointment;
