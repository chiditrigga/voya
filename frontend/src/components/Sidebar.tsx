import React from 'react';
import { FaPlane, FaHotel, FaSuitcase, FaUserGraduate, FaPassport, FaMedkit, FaBoxes } from 'react-icons/fa';
import { MdOutlineAirplaneTicket } from 'react-icons/md';

const Sidebar: React.FC = () => {
  return (
    <div className="hidden lg:flex flex-col fixed top-20 left-0 h-full w-64 bg-white shadow-lg p-5">
      <nav className="flex flex-col space-y-6">
        <div className="flex items-center space-x-4">
          <MdOutlineAirplaneTicket size={24} />
          <span className="text-gray-700 font-medium">Activities</span>
        </div>
        <div className="flex items-center space-x-4">
          <FaHotel size={24} />
          <span className="text-gray-700 font-medium">Hotels</span>
        </div>
        <div className="flex items-center space-x-4">
          <FaPlane size={24} />
          <span className="text-gray-700 font-medium">Flights</span>
        </div>
        <div className="flex items-center space-x-4">
          <FaUserGraduate size={24} />
          <span className="text-gray-700 font-medium">Study</span>
        </div>
        <div className="flex items-center space-x-4">
          <FaPassport size={24} />
          <span className="text-gray-700 font-medium">Visa</span>
        </div>
        <div className="flex items-center space-x-4">
          <FaSuitcase size={24} />
          <span className="text-gray-700 font-medium">Immigration</span>
        </div>
        <div className="flex items-center space-x-4">
          <FaMedkit size={24} />
          <span className="text-gray-700 font-medium">Medical</span>
        </div>
        <div className="flex items-center space-x-4">
          <FaBoxes size={24} />
          <span className="text-gray-700 font-medium">Vacation Packages</span>
        </div>
      </nav>

      {/* Account Section */}
      <div className="mt-10 bg-gray-100 p-3 rounded-lg flex items-center space-x-3">
        <div className="bg-blue-500 w-8 h-8 rounded-full"></div>
        <span className="text-gray-700 font-semibold">Personal Account</span>
        <div className="flex flex-col items-center">
          <span>▲</span>
          <span>▼</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
