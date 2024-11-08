import { useEffect, useState } from "react";
import { FaMapMarkerAlt, FaStar } from "react-icons/fa";
import ActiviteImage from "../assets/Airplain.svg";
import X from "../assets/X.png";
import Pool from "../assets/Pool.svg";
import Bar from "../assets/Wine.svg";
import Bed from "../assets/Bed.svg";
import Calendar from "../assets/Calendar.svg";



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

const FlightCard: React.FC<ChildComponentProps & { refreshTrigger: boolean }> = ({ onButtonClick,refreshTrigger  }) => {
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
      {savedFlights.length > 0?     <button onClick={onButtonClick} className="text-[#0D6EFD] bg-white px-4 py-2 rounded font-semibold hover:bg-[#d1d1d1]">
        Add Flights
      </button>:''}
   
    </div>

    {savedFlights.length > 0 ? (
      savedFlights.map((airline, index) => (
        <div className="flex gap-0 mb-4" key={index}>
          <div className="w-full px-2 border rounded-l-md shadow-sm bg-gray-50">
            <div className="flex md:flex-col flex-col">
              <img
                src={airline.logoUrl}
                alt={ "flight"}
                className="w-fit rounded-md object-cover mb-4 md:mb-0"
              />
              <div className="flex-1 sm:ml-4">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-2xl font-semibold text-black">
                    {airline.name|| "Unnamed flight"}
                  </h4>
                  <div className="text-right text-[#1D2433] font-semibold">
                    {/* <p className="text-3xl">
                      $
                      {Math.floor(
                        airline.property.priceBreakdown.grossPrice.value || 0
                      )}
                    </p> */}
                    <p className="text-md text-[#1D2433]">
                      10:30 AM on Mar 19
                    </p>
                  </div>
                </div>

                <p className="text-[#1D2433] text-lg font-medium mb-2 md:max-w-[50%]">
                  {airline.iataCode || "No description available."}
                </p>

                <div className="flex items-center space-x-2 text-gray-600 text-sm">
                  <FaMapMarkerAlt className="text-blue-500" />
                  <span className="font-semibold text-[#0D6EFD] text-lg">
                    Show in map
                  </span>
                  <FaStar className="text-yellow-400 ml-4" />
                  <span className="text-lg">
                    {airline.reviewsStats?.combinedNumericStats.average ||
                      "N/A"}{" "}
                    ({airline.reviewsStats?.combinedNumericStats.total || "0"})
                  </span>
                  <span className="flex items-start space-x-2">
                    <img src={Bed} alt="Bed" className="w-6 h-6" />
                    <span>Bed</span>
                  </span>
                </div>

                <div className="border-y border-[#E4E7EC] w-full text-lg text-[#647995] py-2 mt-2">
                  <div className="flex justify-between pb-3">
                    <div className="flex gap-x-3">
                      <span>Facilities:</span>
                      <span className="flex items-start space-x-2">
                        <img src={Pool} alt="calendar" className="w-6 h-6" />
                        <span>Pool</span>
                      </span>
                      <span className="flex items-start space-x-2">
                        <img src={Bar} alt="calendar" className="w-6 h-6" />
                        <span>Bar</span>
                      </span>
                    </div>
                    <span className="flex items-start space-x-2">
                      <img src={Calendar} alt="pool" className="w-6 h-6" />
                      <span>Check In: 20-04-2024</span>
                      <img src={Calendar} alt="pool" className="w-6 h-6" />
                      <span>Check In: 20-04-2024</span>
                    </span>
                  </div>
                </div>

                <div className="flex justify-between font-medium text-[#0D6EFD] mt-3">
                  <div className="flex gap-x-4">
                    <span>Hotel details</span>
                    <span>Price details</span>
                  </div>
                  <span>Edit details</span>
                </div>
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
        <button onClick={onButtonClick} className="text-white bg-[#0D6EFD] px-4 py-2 rounded font-semibold hover:bg-[#0d6dfdab]">
          Add Flights
        </button>
      </div>
      
    )}
  </div>
  )
}

export default FlightCard