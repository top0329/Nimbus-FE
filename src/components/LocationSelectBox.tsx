import React, { useEffect, useState } from 'react';

import { locationData } from '../data';

interface Location {
    code: string;
    name: string;
    id: string;
}
interface LocationSelectBoxProps {
    locations: string[];
    setLocationId: (id: string) => void;
    setLocation: (id: string) => void;
}
export function filterLocations(locationData: Location[], locations: string[]) {
    // Filter the locationData based on the locations array
    return locationData.filter(location => locations.includes(location.id));
}
const LocationSelectBox: React.FC<LocationSelectBoxProps> = ({ locations, setLocationId, setLocation }) => {
    const locationList: Location[] = filterLocations(locationData, locations);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState<Location | null>(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    const handleOptionSelect = (country: Location) => {
        setSelectedOption(country);
        setIsOpen(false);
        setLocationId(country.id);
        setLocation(country.name);
    };
    useEffect(() => {
        setSelectedOption(null);
    }, [locations])

    return (
        <div className="relative w-full font-space-grotesk text-[16px]">
            <h1 className='text-[20px] dark-theme-color pb-[20px]'>Choose the Country (Data Center)<span className=' text-red-700'>*</span></h1>
            <button onClick={toggleDropdown} className="px-4 py-2 border-[1px] border-dashed rounded-[10px] light-theme-color flex flex-row w-full items-center gap-3">
                <img src={`https://flagcdn.com/w40/${selectedOption?.code}.png`} alt={selectedOption?.code} className={`rounded-full overflow-hidden ${selectedOption ? 'w-8' : 'w-0'} h-8`} />
                <h2>{selectedOption?.name}</h2>
            </button>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 md:top-[40px] top-[60%]">
                <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0H14V2H13V3H12V4H11V5H10V6H9V7H8V8H6V7H5V6H4V5H3V4H2V3H1V2H0V0ZM4 2V3H5V4H6V5H8V4H9V3H10V2H4Z" fill="#4D8CEC" />
                </svg>
            </div>
            {isOpen && (
                <div className="z-20 absolute mt-2 border rounded shadow-md w-full  max-h-[200px] overflow-y-auto" style={{ backgroundColor: "#F5FAFF" }}>
                    {locationList.map((country, index) => (
                        <div key={index} onClick={() => handleOptionSelect(country)} className="p-2 flex flex-row cursor-pointer items-center gap-3">
                            <img src={`https://flagcdn.com/w40/${country?.code}.png`} alt={country?.code} className='rounded-full overflow-hidden w-8 h-8' />
                            <h2>{country?.name}</h2>
                        </div>
                    ))
                    }
                </div >
            )}
        </div >
    );
};

export default LocationSelectBox;