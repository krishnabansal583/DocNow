import React, { useState } from "react";
import { assets } from "../assets/assets";

const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: "Krishna Bansal",
    image: assets.profile_pic,
    email: "krishnabansal583@gmail.com",
    phone: "+91 8650156202",
    address: {
      line1: "57th Cross, Richard",
      line2: "Circle, Church Road, India",
    },
    gender: "Male",
    dob: "2004-05-01",
  });
  const [isEdit, setIsEdit] = useState(false);

  return (
    <div className="flex justify-center items-center min-h-screen mb-40">
      <div className="bg-gray-100 rounded-xl shadow-xl p-8 w-full max-w-2xl">
        <div className="flex flex-col items-center">
          <img
            className="w-32 h-32 rounded-full shadow-md mb-4"
            src={userData.image}
            alt="Profile"
          />
          {isEdit ? (
            <input
              className="text-center text-2xl font-semibold mt-2 bg-gray-50 border rounded px-2 py-1 w-64"
              type="text"
              value={userData.name}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, name: e.target.value }))
              }
            />
          ) : (
            <h2 className="text-2xl font-semibold text-gray-800">
              {userData.name}
            </h2>
          )}
        </div>
        <hr className="my-6 border-gray-300" />
        <div>
          <h3 className="text-lg font-medium text-gray-600 mb-3">
            Contact Information
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
            <div>
              <p className="font-semibold">Email:</p>
              <p className="text-blue-500">{userData.email}</p>
            </div>
            <div>
              <p className="font-semibold">Phone:</p>
              {isEdit ? (
                <input
                  className="w-full bg-gray-100 border rounded px-2 py-1"
                  type="text"
                  value={userData.phone}
                  onChange={(e) =>
                    setUserData((prev) => ({ ...prev, phone: e.target.value }))
                  }
                />
              ) : (
                <p className="text-blue-500">{userData.phone}</p>
              )}
            </div>
            <div className="sm:col-span-2">
              <p className="font-semibold">Address:</p>
              {isEdit ? (
                <div className="space-y-1">
                  <input
                    className="w-full bg-gray-100 border rounded px-2 py-1"
                    type="text"
                    value={userData.address.line1}
                    onChange={(e) =>
                      setUserData((prev) => ({
                        ...prev,
                        address: { ...prev.address, line1: e.target.value },
                      }))
                    }
                  />
                  <input
                    className="w-full bg-gray-100 border rounded px-2 py-1"
                    type="text"
                    value={userData.address.line2}
                    onChange={(e) =>
                      setUserData((prev) => ({
                        ...prev,
                        address: { ...prev.address, line2: e.target.value },
                      }))
                    }
                  />
                </div>
              ) : (
                <p className="text-gray-500">
                  {userData.address.line1} <br />
                  {userData.address.line2}
                </p>
              )}
            </div>
          </div>
        </div>

        <hr className="my-6 border-gray-300" />
        <div>
          <h3 className="text-lg font-medium text-gray-600 mb-3">
            Basic Information
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
            <div>
              <p className="font-semibold">Gender:</p>
              {isEdit ? (
                <select
                  className="w-full bg-gray-100 border rounded px-2 py-1"
                  onChange={(e) =>
                    setUserData((prev) => ({ ...prev, gender: e.target.value }))
                  }
                  value={userData.gender}
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              ) : (
                <p className="text-gray-500">{userData.gender}</p>
              )}
            </div>
            <div>
              <p className="font-semibold">Birthday:</p>
              {isEdit ? (
                <input
                  className="w-full bg-gray-100 border rounded px-2 py-1"
                  type="date"
                  value={userData.dob}
                  onChange={(e) =>
                    setUserData((prev) => ({ ...prev, dob: e.target.value }))
                  }
                />
              ) : (
                <p className="text-gray-500">{userData.dob}</p>
              )}
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-8">
          <button
            className="px-6 py-2 rounded-full font-semibold border transition-colors duration-200 
                       border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"
            onClick={() => setIsEdit(!isEdit)}
          >
            {isEdit ? "Save Information" : "Edit Profile"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
