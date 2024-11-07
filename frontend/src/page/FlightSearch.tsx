import React, { useState, useEffect, useRef } from 'react';

interface FlightSearchProps {
    onClose: () => void;
}

interface Airline {
    name: string;
    logoUrl: string;
    iataCode: string;
    count: number;
    minPrice: {
        currencyCode: string;
        units: number;
        nanos: number;
    };
}

const FlightSearch: React.FC<FlightSearchProps> = ({ onClose }) => {
    const [fromLocation, setFromLocation] = useState<string>('');
    const [toLocation, setToLocation] = useState<string>('');
    const [departDate, setDepartDate] = useState<string>('');
    const [airlines, setAirlines] = useState<Airline[]>([]);
    const modalRef = useRef<HTMLDivElement>(null);

    const api = import.meta.env.VITE_RAPIDAPI_KEY;

    const fetchLocationId = async (location: string): Promise<string | null> => {
        try {
            const response = await fetch(`https://booking-com15.p.rapidapi.com/api/v1/flights/searchDestination?query=${location}`, {
                method: 'GET',
                headers: {
                    'x-rapidapi-key': api,
                    'x-rapidapi-host': 'booking-com15.p.rapidapi.com'
                }
            });
            const data = await response.json();
            return data.data?.[0]?.id || null;
        } catch (error) {
            console.error("Error fetching location ID:", error);
            return null;
        }
    };

    const handleSearch = async () => {
        const fetchedFromId = await fetchLocationId(fromLocation);
        const fetchedToId = await fetchLocationId(toLocation);

        if (!fetchedFromId || !fetchedToId) {
            console.error("Please ensure both 'From' and 'To' locations are selected.");
            return;
        }

        const searchUrl = `https://booking-com15.p.rapidapi.com/api/v1/flights/searchFlights?fromId=${fetchedFromId}&toId=${fetchedToId}&departDate=${departDate}`;

        try {
            const response = await fetch(searchUrl, {
                method: 'GET',
                headers: {
                    'x-rapidapi-key': api,
                    'x-rapidapi-host': 'booking-com15.p.rapidapi.com'
                }
            });
            const result = await response.json();
            setAirlines(result.data.aggregation.airlines);
        } catch (error) {
            console.error("Error searching flights:", error);
        }
    };

    const handleOutsideClick = (event: MouseEvent) => {
        if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
            onClose();
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleOutsideClick);
        return () => document.removeEventListener('mousedown', handleOutsideClick);
    }, []);

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div ref={modalRef} className="bg-white p-6 rounded-lg shadow-lg w-[90%] md:w-[70%]  mx-4">
                <h2 className="text-2xl font-semibold mb-4 text-center">Flight Search</h2>

                <div className="flex flex-col sm:flex-row gap-4 mb-4">
                    <input
                        type="text"
                        placeholder="From Location"
                        value={fromLocation}
                        onChange={(e) => setFromLocation(e.target.value)}
                        className="border p-2 w-full rounded"
                    />

                    <input
                        type="text"
                        placeholder="To Location"
                        value={toLocation}
                        onChange={(e) => setToLocation(e.target.value)}
                        className="border p-2 w-full rounded"
                    />
                </div>

                <input
                    type="date"
                    value={departDate}
                    onChange={(e) => setDepartDate(e.target.value)}
                    className="border p-2 mb-4 w-full rounded"
                />

                <button
                    onClick={handleSearch}
                    className="bg-blue-500 text-white px-4 py-2 rounded w-full"
                >
                    Search Flights
                </button>

                {airlines.length > 0 && (
                    <div className="mt-6  h-64 overflow-y-auto">
                        <h3 className="text-xl font-semibold mb-2">Available Airlines</h3>
                        <div className="">
                            {airlines.map((airline) => (
                                <div key={airline.iataCode} className="flex items-center p-4  border rounded shadow-sm">
                                    <img src={airline.logoUrl} alt={airline.name} className=" mr-4 rounded-full" />
                                    <div>
                                        <h4 className="text-lg font-semibold">{airline.name}</h4>
                                        <p className="text-gray-600">IATA: {airline.iataCode}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                <button
                    onClick={onClose}
                    className="mt-6 text-gray-500 hover:text-gray-700 w-full text-center"
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default FlightSearch;
