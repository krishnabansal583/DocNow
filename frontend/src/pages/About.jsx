import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div className="bg-gray-50 py-12 mb-40">
      
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-gray-800">
          ABOUT <span className="text-blue-600">US</span>
        </h2>
      </div>

    
      <div className="container mx-auto flex flex-col md:flex-row gap-12 px-6 md:px-0">
       
        <div className="flex-1 flex justify-center items-center">
          <img
            className="w-full md:max-w-md rounded-lg shadow-lg"
            src={assets.about_image}
            alt="About DocNow"
          />
        </div>
  
        <div className="flex-1 flex flex-col mr-4 justify-center space-y-6 text-gray-700">
          <p className="text-lg leading-relaxed">
            Welcome to <span className="font-semibold">DocNow</span>, where we
            strive to make healthcare accessible, convenient, and effective. Our
            goal is to connect patients with healthcare providers through an
            intuitive platform, allowing users to find and book appointments
            with top-rated doctors tailored to their needs.
          </p>
          <p className="text-lg leading-relaxed">
            <span className="font-semibold">Our Commitment</span> is to uphold
            trust, privacy, and service excellence. At DocNow, we adhere to
            stringent data protection protocols to ensure your personal
            information remains confidential, allowing you to browse and book
            appointments with peace of mind.
          </p>
          <h3 className="text-xl font-semibold text-gray-800">
            Our Vision
          </h3>
          <p className="text-lg leading-relaxed">
            At DocNow, we aim to enhance patient-doctor relationships and
            promote a culture of preventive healthcare. Our platform leverages
            technology to ensure that healthcare is just a click away, helping
            users make informed choices regarding their health and well-being.
          </p>
        </div>
      </div>

      <div className="container mx-auto mt-16">
        <h2 className="text-2xl text-center font-semibold text-gray-800 mb-8">
          Key <span className="text-blue-600">FUNCTIONALITIES</span>
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 px-10 md:px-0 m-3">
          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">
              User-Friendly Interface
            </h4>
            <p className="text-gray-600">
              Our intuitive platform ensures that users can easily navigate,
              search for doctors, and book appointments without hassle.
            </p>
          </div>
  
          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">
              Comprehensive Doctor Profiles
            </h4>
            <p className="text-gray-600">
              Access detailed profiles, including specialties, reviews, and
              appointment availability, to make informed choices.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">
              Appointment Reminders
            </h4>
            <p className="text-gray-600">
              Receive timely notifications for upcoming appointments to ensure
              you never miss a visit.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">
              Secure Messaging
            </h4>
            <p className="text-gray-600">
              Communicate directly with healthcare providers through our secure
              messaging feature for follow-ups and questions.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">
              Flexible Payment Options
            </h4>
            <p className="text-gray-600">
              Choose from various payment methods to make the booking process
              more convenient.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">
              Patient Reviews
            </h4>
            <p className="text-gray-600">
              Read reviews and ratings from other patients to help guide your
              healthcare decisions.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-16">
        <h2 className="text-2xl text-center font-semibold text-gray-800 mb-8">
          What Our Users Say
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 px-6 md:px-0 m-3">
          <div className="bg-white shadow-md rounded-lg p-6 text-center flex-1">
            <p className="text-gray-600 italic">
              "DocNow has made it so easy for me to find and book appointments.
              The platform is user-friendly and the doctors are great!"
            </p>
            <p className="mt-4 font-semibold text-gray-800">- Sarah L.</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 text-center flex-1">
            <p className="text-gray-600 italic">
              "I love the appointment reminders! It keeps me organized and I
              never miss a doctor's visit anymore."
            </p>
            <p className="mt-4 font-semibold text-gray-800">- John D.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
