import React, { useState } from 'react';
import './App.css';
import FlightSearch from './page/FlightSearch';
import HotelSearch from './page/HotelSearch';
import AttractionSearch from './page/AttractionSearch';

const App: React.FC = () => {
    const [isFlightModalOpen, setIsFlightModalOpen] = useState<boolean>(false);
    const [isHotelModalOpen, setIsHotelModalOpen] = useState<boolean>(false);
    const [isAttractionlModalOpen, setIsAttractionModalOpen] = useState<boolean>(false);

    const openFlightModal = () => setIsFlightModalOpen(true);
    const closeFlightModal = () => setIsFlightModalOpen(false);

    const openAttractionModal = () => setIsAttractionModalOpen(true);
    const closeAttractionModal = () => setIsAttractionModalOpen(false);

    const openHotelModal = () => setIsHotelModalOpen(true);
    const closeHotelModal = () => setIsHotelModalOpen(false);



    return (
        <div className="App">
            <button
                onClick={openFlightModal}
                className="bg-green-500 text-white px-4 py-2 rounded mt-4 mr-2"
            >
                Add Flight
            </button>

            <button
                onClick={openHotelModal}
                className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
            >
                Add Hotel
            </button>
            <button
                onClick={openAttractionModal}
                className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
            >
                Add Attraction
            </button>


            {isFlightModalOpen && <FlightSearch onClose={closeFlightModal} />}
            {isHotelModalOpen && <HotelSearch onClose={closeHotelModal} />}
            {isAttractionlModalOpen && <AttractionSearch onClose={closeAttractionModal} />}
        </div>
    );
};

export default App;
