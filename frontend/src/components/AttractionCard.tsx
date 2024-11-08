import { useEffect, useState } from "react";
import { FaMapMarkerAlt, FaStar, FaRegClock, FaArrowLeft } from 'react-icons/fa'
import ActiviteImage from '../assets/activities.png'
import X from '../assets/X.png'

interface Attraction {
    reviewsStats: any;
    name?: string;
    primaryPhoto?: { small?: string };
    shortDescription?: string;
    representativePrice?: { chargeAmount?: number };
}
interface ChildComponentProps {
    onButtonClick: () => void;
  }

const AttractionCard: React.FC<ChildComponentProps & { refreshTrigger: boolean }> = ({ onButtonClick,refreshTrigger  }) => {

    const [savedAttractions, setSavedAttractions] = useState<Attraction[]>([]);
    
    useEffect(() => {
        // Retrieve saved attractions from localStorage on component mount
        const attractions = localStorage.getItem("savedAttractions");
 
        if (attractions) {
            const parsedAttractions = JSON.parse(attractions);
         
            setSavedAttractions(parsedAttractions);
        }
    }, [refreshTrigger]);

    return (
        <div className="p-6 bg-[#0054E4] my-10 md:mx-8 mx-3 rounded-md">
            <div className="flex justify-between mb-5">
            <div className="flex items-center">
  <img src={ActiviteImage} alt="" className="mr-4 w-6 h-6 object-contain" />
  <span className="text-xl font-semibold text-white text-center">Activities</span>
</div>


<div>
{savedAttractions.length > 0? 
    <button onClick={onButtonClick} className="text-[#0D6EFD] bg-white px-4 py-2 rounded font-semibold hover:bg-[#F1F1F1]">
    Add Activitie
    </button>:'' }
</div>
            </div>


    
            {savedAttractions.length > 0 ? (
  savedAttractions.map((attraction, index) => (
    <div className="flex gap-0 md:gap-0 mb-4 " key={index}>
      {/* Main attraction content */}
      <div className=" w-full  p-4 border rounded-l-md shadow-sm bg-gray-50">
        <div className="flex flex-col sm:flex-row">
          <img
            src={attraction.primaryPhoto?.small || "/fallback-image.png"}
            alt={attraction.name || "Activity"}
            className="md:w-56 rounded-md object-cover mb-4 md:mb-0"
          />

          <div className="flex-1 sm:ml-4">
            <div className="flex justify-between items-center mb-2">
              <h4 className="text-2xl font-semibold text-black">
                {attraction.name || "Unnamed Attraction"}
              </h4>
              <div className="text-right text-[#1D2433] font-semibold">
                <p className="text-3xl ">
                  ${attraction.representativePrice?.chargeAmount || "N/A"}
                </p>
                <p className="text-md text-[#1D2433]">10:30 AM on Mar 19</p>
              </div>
            </div>

            <p className="text-[#1D2433] text-lg font-medium mb-2 md:max-w-[50%]">
              {attraction.shortDescription || "No description available."}
            </p>

            <div className="flex items-center space-x-2 text-gray-600 text-sm">
              <FaMapMarkerAlt className="text-blue-500" />
              <span className="font-semibold text-[#0D6EFD] text-lg">Directions</span>
              <FaStar className="text-yellow-400 ml-4" />
              <span className="text-lg">
                {attraction.reviewsStats?.combinedNumericStats.average || "N/A"} (
                {attraction.reviewsStats?.combinedNumericStats.total || "0"})
              </span>
              <FaRegClock className="ml-4" />
              <span className="text-lg">1 Hour</span>
            </div>

            <div className="border-y border-[#E4E7EC] w-full text-lg text-[#647995] py-2 mt-2">
              <div className="flex justify-between pb-3">
                <div className="flex gap-x-3">
                  <span>What's Included:</span>
                  <span>Admission to the Empire State Building</span>
                  <span className="text-[#0D6EFD]">See more</span>
                </div>
                <div className="font-medium">
                  <button className="bg-[#0D6EFD] text-white px-4 py-2 rounded font-semibold hover:bg-[#3e77cc]">Day 2</button>
                </div>
              </div>
            </div>
            
            <div className="flex justify-between font-medium text-[#0D6EFD] mt-3">
              <div className="flex gap-x-4">
                <span>Activity details</span>
                <span>Price details</span>
              </div>
              <div>
                <span className="text-end flex">Edit details</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Red sidebar with centered back icon */}
      <div className="w-full  md:w-16 bg-[#FBEAE9] flex justify-center items-center rounded-r-md">
    <img src={X} className="w-6 h-6 cursor-pointer" alt="" />
  </div>
</div>
  ))
) : (
  <div className="bg-white p-8 md:p-14 xl:p-24 flex flex-col justify-center items-center space-y-4">
  <h3>No Request yet</h3> 
  <button onClick={onButtonClick} className="text-white bg-[#0D6EFD] px-4 py-2 rounded font-semibold hover:bg-[#0d6dfdab]">
    Add Activitis
  </button>
</div>
)}



</div>
    );
};


export default AttractionCard;
