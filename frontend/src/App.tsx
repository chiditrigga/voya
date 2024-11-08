import React, { useState } from "react";
import "./App.css";
import FlightSearch from "./page/FlightSearch";
import HotelSearch from "./page/HotelSearch";
import AttractionSearch from "./page/AttractionSearch";
import AttractionCard from "./components/AttractionCard";
import HotelCard from "./components/HotelCard";
import FlightCard from "./components/FlightCard";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Banner from "../src/assets/banner.png";
import { ToastContainer } from "react-toastify";

const App: React.FC = () => {
  const [isFlightModalOpen, setIsFlightModalOpen] = useState<boolean>(false);
  const [isHotelModalOpen, setIsHotelModalOpen] = useState<boolean>(false);
  const [isAttractionlModalOpen, setIsAttractionModalOpen] =
    useState<boolean>(false);
    const [refreshTrigger, setRefreshTrigger] = useState(false);
  const openFlightModal = () => setIsFlightModalOpen(true);

  const openAttractionModal = () => setIsAttractionModalOpen(true);

  const openHotelModal = () => setIsHotelModalOpen(true);
  const toggleRefresh = () => setRefreshTrigger((prev) => !prev);

  const closeFlightModal = () => {
    setIsFlightModalOpen(false);
    toggleRefresh();
  };

  const closeAttractionModal = () => {
    setIsAttractionModalOpen(false);
    toggleRefresh();
  };

  const closeHotelModal = () => {
    setIsHotelModalOpen(false);
    toggleRefresh();
  };

  

  return (
    <>
      <ToastContainer />
      <Navbar />
      <div className="flex">
      

        <Sidebar />

        <div className="App bg-white  flex-1 p-6 xl:ml-64 mt-14 mx-3">
          <img src={Banner} className="w-full" alt="" />
          <div className="flex justify-between">
            <div className="flex items-center bg-[#F5E4CE] px-2 py-1 rounded-md">
              <span role="img" aria-label="calendar" className="mr-1">
                📅
              </span>
              <span>21 March 2024</span>
              <span className="mx-1">→</span>
              <span>21 April 2024</span>
            </div>

            <div>good</div>
          </div>
          <div className="flex justify-between">
            <div className="text-[#000000] font-semibold text-3xl">
              Bahamas Family Trip <br />{" "}
              <span className="text-lg font-medium text-[#676E7E]">
                New York, United States of America | Solo Trip
              </span>
            </div>
            <div>dd</div>
          </div>

          <div className="md:flex space-x-2 m-7">
            <Card
              title="Activities"
              description="Build, personalize, and optimize your itineraries with our trip planner."
              buttonLabel="Add Activities"
              onButtonClick={openAttractionModal}
              bgColor="bg-[#000031]"
              textColor="text-white"
              btcolor="bg-[#0D6EFD]"
              btext="text-white"
            />
            <Card
              title="Hotels"
              description="Build, personalize, and optimize your itineraries with our trip planner."
              buttonLabel="Add Hotels"
              onButtonClick={openHotelModal}
              bgColor="bg-blue-100"
              textColor="text-black"
              btcolor="bg-[#0D6EFD]"
              btext="text-white"
            />
            <Card
              title="Flights"
              description="Build, personalize, and optimize your itineraries with our trip planner."
              buttonLabel="Add Flights"
              onButtonClick={openFlightModal}
              bgColor="bg-[#0D6EFD]"
              textColor="text-white"
              btcolor="bg-white"
              btext="text-[#0D6EFD]"
            />
          </div>

          {isFlightModalOpen && <FlightSearch onClose={closeFlightModal} />}
          {isHotelModalOpen && <HotelSearch onClose={closeHotelModal} />}
          {isAttractionlModalOpen && (
            <AttractionSearch onClose={closeAttractionModal} />
          )}

          <div className="ms-7">
            {" "}
            <h3 className="text-[#1D2433] text-2xl font-semibold">
              Trip itineraries
            </h3>{" "}
            <p className="#647995 font-medium">
              Your trip itineraries are placed here
            </p>{" "}
          </div>
          <FlightCard
            refreshTrigger={refreshTrigger}
            onButtonClick={openFlightModal}
          />
          <HotelCard
            refreshTrigger={refreshTrigger}
            onButtonClick={openHotelModal}
          />
          <AttractionCard
            refreshTrigger={refreshTrigger}
            onButtonClick={openAttractionModal}
          />
        </div>
      </div>
    </>
  );
};

export default App;
