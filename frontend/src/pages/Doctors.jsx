import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Doctors = () => {
  const [filterDoc, setFilterDoc] = useState([]);
  const { speciality } = useParams();
  const { doctors } = useContext(AppContext);
  const navigate = useNavigate();
  const [visible, setVisible] = useState(8);
  const [selectedSpeciality, setSelectedSpeciality] = useState(
    speciality || ""
  );

  const applyFilter = () => {
    if (selectedSpeciality) {
      setFilterDoc(
        doctors
          .filter((doc) => doc.speciality === selectedSpeciality)
          .map((doc) => ({ ...doc, available: true }))
      );
    } else {
      setFilterDoc(doctors.map((doc) => ({ ...doc, available: true })));
    }
  };

  useEffect(() => {
    applyFilter();
  }, [doctors, selectedSpeciality]);

  const handleSpecialityChange = (e) => {
    setSelectedSpeciality(e.target.value);
    navigate(`/doctors/${e.target.value}`);
  };

  const loadMoreDoctors = () => {
    setVisible((prevValue) => prevValue + 6);
  };

  return (
    <div className="p-8 mb-40 bg-[#D2E0FB] min-h-screen">
      <div className="text-gray-950 text-center text-3xl font-bold mb-8">
        Browse Through Our Specialists
      </div>

      <div className="mb-8 flex justify-center">
        <select
          className="p-3 border border-gray-300 rounded-lg text-sm focus:ring-blue-500 focus:border-blue-500"
          onChange={handleSpecialityChange}
          value={selectedSpeciality}
        >
          <option value="">All Specialties</option>
          <option value="General physician">General Physician</option>
          <option value="Gynecologist">Gynecologist</option>
          <option value="Dermatologist">Dermatologist</option>
          <option value="Pediatricians">Pediatricians</option>
          <option value="Neurologist">Neurologist</option>
          <option value="Gastroenterologist">Gastroenterologist</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {filterDoc.slice(0, visible).map((item, index) => (
          <div
            onClick={() => navigate(`/appointment/${item._id}`)}
            className="border bg-white border-gray-200 shadow-md rounded-lg overflow-hidden cursor-pointer hover:shadow-2xl transition-shadow duration-300"
            key={index}
          >
            <div className="w-full h-72 bg-[#EBF4F6]">
              <img
                className="w-full h-full object-cover"
                src={item.image}
                alt={item.name}
              />
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between">
                <p className="text-gray-900 text-lg font-semibold">
                  {item.name}
                </p>
                <div className="flex items-center gap-1 text-yellow-500">
                  <span className="text-sm">{item.rating || 4.5}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 .587l3.668 7.513L24 9.747l-6 5.849L19.334 24 12 19.771 4.666 24 6 15.596 0 9.747l8.332-1.647L12 .587z" />
                  </svg>
                </div>
              </div>
              <p className="text-gray-600 text-sm">{item.speciality}</p>
              <div className="flex items-center gap-2 text-sm mt-2">
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${
                    item.available
                      ? "bg-green-100 text-green-600"
                      : "bg-red-100 text-red-600"
                  }`}
                >
                  {item.available ? "Available" : "Unavailable"}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {visible < filterDoc.length && (
        <div className="flex justify-center mt-10">
          <button
            onClick={loadMoreDoctors}
            className="px-6 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default Doctors;
