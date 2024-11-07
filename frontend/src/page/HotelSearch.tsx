import React, { useState, useEffect, useRef } from 'react';

interface HotelSearchProps {
    onClose: () => void;
}

interface Hotel {
    property: any;
    priceBreakdown: {
        grossPrice:{
            value:number
        }
    }
    name: string;
    logoUrl: string;
    count: number;
    minPrice: {
        currencyCode: string;
        units: number;
        nanos: number;
    };
    photoUrls : string[]
}

const HotelSearch: React.FC<HotelSearchProps> = ({ onClose }) => {
    const [location, setLocation] = useState<string>('');
    const [arrivalDate, setArrivalDate] = useState<string>('');
    const [departureDate, setDepartureDate] = useState<string>('');
    const [destId, setDestId] = useState<string | null>(null);
    const [searchType, setSearchType] = useState<string>('CITY');
    const [hotels, setHotels] = useState<Hotel[]>([]);
    const modalRef = useRef<HTMLDivElement>(null);

    const apiKey = import.meta.env.VITE_RAPIDAPI_KEY;

    // Fetch destination ID
    const fetchDestId = async (location: string): Promise<void> => {
        try {
            const response = await fetch(
                `https://booking-com15.p.rapidapi.com/api/v1/hotels/searchDestination?query=${location}`,
                {
                    method: 'GET',
                    headers: {
                        'x-rapidapi-key': apiKey,
                        'x-rapidapi-host': 'booking-com15.p.rapidapi.com'
                    }
                }
            );
            const data = await response.json();
            const dest = data.data?.[0];
            console.log('destid main thing ', dest.dest_id, dest.search_type);
           
            setDestId(dest?.dest_id || null);
            setSearchType(dest?.search_type || 'CITY');
        } catch (error) {
            console.error("Error fetching destination ID:", error);
        }
    };

    // Fetch hotel results
    const handleSearch = async () => {
        if (!destId || !arrivalDate || !departureDate) {
            console.error("Please provide all required information.");
            return;
        }

        const searchUrl = `https://booking-com15.p.rapidapi.com/api/v1/hotels/searchHotels?dest_id=${destId}&search_type=${searchType}&arrival_date=${arrivalDate}&departure_date=${departureDate}`;

        try {
            const response = await fetch(searchUrl, {
                method: 'GET',
                headers: {
                    'x-rapidapi-key': apiKey,
                    'x-rapidapi-host': 'booking-com15.p.rapidapi.com'
                }
            });
            const result = await response.json();
          
            setHotels(result.data.hotels || []);
            console.log('hotels ', result.data.hotels);
        } catch (error) {
            console.error("Error fetching hotels:", error);
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
            <div ref={modalRef} className="bg-white p-6 rounded-lg shadow-lg w-[90%] md:w-[70%] mx-4">
                <h2 className="text-2xl font-semibold mb-4 text-center">Hotel Search</h2>

                <div className="flex flex-col sm:flex-row gap-4 mb-4">
                    <input
                    required
                        type="text"
                        placeholder="Location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        onBlur={() => fetchDestId(location)}
                        className="border p-2 w-full rounded"
                    />
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mb-4">
                    <input
                    required
                        type="date"
                        placeholder="Arrival Date"
                        value={arrivalDate}
                        onChange={(e) => setArrivalDate(e.target.value)}
                        className="border p-2 w-full rounded"
                    />
                    <input
                     required
                        type="date"
                        placeholder="Departure Date"
                        value={departureDate}
                        onChange={(e) => setDepartureDate(e.target.value)}
                        className="border p-2 w-full rounded"
                    />
                </div>

                <button
                    onClick={handleSearch}
                    className="bg-blue-500 text-white px-4 py-2 rounded w-full"
                >
                    Search Hotels
                </button>

                {hotels.length > 0 && (
                    <div className="mt-6 h-64 overflow-y-auto">
                        <h3 className="text-xl font-semibold mb-2">Available Hotels</h3>
                        <div className="space-y-4">
                            {hotels.map((hotel, index) => (
                                <div key={index} className="flex items-center p-4 border rounded shadow-sm">
                                    <img src={hotel.property.photoUrls[0]} alt='not found' className="mr-4  w-48 h-48" />
                                    <div>
                                        <h4 className="text-lg font-semibold">{hotel.property.name}</h4>
                                        <p className="text-gray-600">
                                            Price: {hotel.property.priceBreakdown.grossPrice.value} $
                                        </p>
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

export default HotelSearch;
