import { useEffect, useState } from "react";
// import { FaMapMarkerAlt, FaPlane, FaStar } from "react-icons/fa";
import ActiviteImage from "../assets/Airplain.svg";
import X from "../assets/X.png";
// import Pool from "../assets/Pool.svg";
// import Bar from "../assets/Wine.svg";
// import Bed from "../assets/Bed.svg";
// import Calendar from "../assets/Calendar.svg";
import Duration from "../assets/duration.png";
import {
  FaPlaneDeparture,
  FaPlaneArrival,
  FaLuggageCart,
  FaUtensils,
  FaTv,
  FaUsb,
} from "react-icons/fa";

interface Flight {
  iataCode: string;
  logoUrl: string | undefined;
  property: any;
  reviewsStats: any;
  name?: string;
  primaryPhoto?: { small?: string };
  shortDescription?: string;
  representativePrice?: { chargeAmount?: number };
}
interface ChildComponentProps {
  onButtonClick: () => void;
}

const FlightCard: React.FC<
  ChildComponentProps & { refreshTrigger: boolean }
> = ({ onButtonClick, refreshTrigger }) => {
  const [savedFlights, setSavedFlights] = useState<Flight[]>([]);

  useEffect(() => {
    // Retrieve saved hotels from localStorage on component mount
    const flights = localStorage.getItem("savedFlights");

    if (flights) {
      const parsedFlights = JSON.parse(flights);
      setSavedFlights(parsedFlights);
    }
  }, [refreshTrigger]);
  return (
    <div className="p-6 bg-[#F0F2F5] mb-10 mx-3   rounded-md">
      <div className="flex justify-between mb-5">
        <div className="flex items-center">
          <img
            src={ActiviteImage}
            alt=""
            className="mr-4 w-6 h-6 object-contain"
          />
          <span className="text-xl font-semibold text-[#1D2433]">Flights</span>
        </div>
        {savedFlights.length > 0 ? (
          <button
            onClick={onButtonClick}
            className="text-[#0D6EFD] bg-white px-4 py-2 rounded font-semibold hover:bg-[#d1d1d1]"
          >
            Add Flights
          </button>
        ) : (
          ""
        )}
      </div>

      {savedFlights.length > 0 ? (
        savedFlights.map((airline, index) => (
          <div className="flex gap-0 mb-4" key={index}>
            <div className="w-full  border rounded-l-md md:p-10 p-10 shadow-sm bg-gray-50">
              <div className="md:flex md:flex-col flex-col">
                <div className="md:flex justify-between">
                  <div className="flex gap-x-2">
                    <div>
                      {" "}
                      <img
                        src={airline.logoUrl}
                        alt={"flight"}
                        className="md:w-14 mx-auto"
                      />
                    </div>
                    <div>
                      <span className="font-semibold text-lg text-[#1D2433]">
                        {airline.name || "Unnamed flight"}
                      </span>
                      <br />
                      <span className="text-[#676E7E] font-medium">
                        AA-829
                      </span>{" "}
                      <button className="p-1 bg-[#0A369D] rounded-md px-3 text-white">
                        first class
                      </button>
                    </div>
                  </div>

                  <div>
                    <div className="md:flex flex-col md:flex-row items-center text-center md:space-x-4 mt-4 md:mt-0">
                      <div>
                        <p className="text-2xl font-semibold">08:35</p>
                        <p className="text-sm text-gray-500">Sun, 20 Aug</p>
                        <p className="font-semibold">LOS</p>
                      </div>

                      <div className="flex flex-col items-center justify-center space-y-2 mt-2 md:mt-0">
                        <div className="flex items-center space-x-20">
                          <FaPlaneDeparture className="text-gray-400  " />
                          <span className="text-blue-500">
                            Duration: 1h 45m
                          </span>
                          <FaPlaneArrival className="text-gray-400" />
                        </div>
                        {/* Icon below duration */}
                        <img src={Duration} alt="" />
                      </div>

                      <div>
                        <p className="text-2xl font-semibold">09:55</p>
                        <p className="text-sm text-gray-500">Sun, 20 Aug</p>
                        <p className="font-semibold">SIN</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    {/* Price */}
                    <div className="text-right mt-4 md:mt-0">
                      <p className="text-2xl font-bold text-gray-800">
                        {" "}
                        $123.00
                      </p>
                    </div>
                  </div>
                </div>
                {/* Facilities */}
                <div className="border-y mt-4 py-4">
                  <div className="flex flex-wrap items-center space-x-4 text-gray-600">
                    <p className="font-semibold">Facilities:</p>
                    <div className="flex items-center space-x-2">
                      <FaLuggageCart />
                      <span>Baggage: 20kg, Cabin Baggage: 8kg</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <FaTv />
                      <span>In-flight entertainment</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <FaUtensils />
                      <span>In-flight meal</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <FaUsb />
                      <span>USB Port</span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-x-5 text-blue-500 mt-4">
                  <a href="#" className="hover:underline">
                    Flight details
                  </a>
                  <a href="#" className="hover:underline">
                    Price details
                  </a>
                  <a href="#" className="hover:underline">
                    Edit details
                  </a>
                </div>
              </div>
            </div>
            <div className="w-8 md:w-16 bg-[#FBEAE9] flex justify-center items-center rounded-r-md">
              <img src={X} className="w-6 h-6 cursor-pointer" alt="" />
            </div>
          </div>
        ))
      ) : (
        <div className="bg-white p-8 md:p-14 xl:p-24 flex flex-col justify-center items-center space-y-4">
          <h3>No Request yet</h3>
          <button
            onClick={onButtonClick}
            className="text-white bg-[#0D6EFD] px-4 py-2 rounded font-semibold hover:bg-[#0d6dfdab]"
          >
            Add Flights
          </button>
        </div>
      )}
    </div>
  );
};

export default FlightCard;
