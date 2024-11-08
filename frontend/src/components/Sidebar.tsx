import React from 'react';
// import { FaPlane, FaHotel, FaSuitcase, FaUserGraduate, FaPassport, FaMedkit, FaBoxes } from 'react-icons/fa';
// import { MdOutlineAirplaneTicket } from 'react-icons/md';
import Horizon from '../assets/RoadHorizon.svg'
import Buildings from '../assets/Buildings.svg'
import Tilt from '../assets/AirplaneTilt.svg'
import Student from '../assets/Student.svg'
import News from '../assets/NewspaperClipping.svg'
import Suit from '../assets/SuitcaseRolling.svg'
import Aid from '../assets/FirstAidKit.svg'
import Package from '../assets/Package.svg'

const Sidebar: React.FC = () => {
  return (
    <div className="hidden xl:flex flex-col fixed top-20 left-0 h-full w-64 ms-3 bg-white shadow-lg p-5">
      <nav className="flex flex-col space-y-6">
        <div className="flex items-center space-x-4 ">
          <img src={Horizon} alt="" />
          <span className="text-gray-700 font-medium">Activities</span>
        </div>
        <div className="flex items-center space-x-4">
        <img src={Buildings} alt="" />
          <span className="text-gray-700 font-medium">Hotels</span>
        </div>
        <div className="flex items-center space-x-4">
         <img src={Tilt} alt="" />
          <span className="text-gray-700 font-medium">Flights</span>
        </div>
        <div className="flex items-center space-x-4">
        <img src={Student} alt="" /> 
         
          <span className="text-gray-700 font-medium">Study</span>
        </div>
        <div className="flex items-center space-x-4">
          <img src={News} alt="" />
          <span className="text-gray-700 font-medium">Visa</span>
        </div>
        <div className="flex items-center space-x-4">
        <img src={Suit} alt="" />
          <span className="text-gray-700 font-medium">Immigration</span>
        </div>
        <div className="flex items-center space-x-4">
        <img src={Aid} alt="" />
          <span className="text-gray-700 font-medium">Medical</span>
        </div>
        <div className="flex items-center space-x-4">
        <img src={Package} alt="" />
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
