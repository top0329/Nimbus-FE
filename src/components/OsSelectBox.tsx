import React, { useState } from 'react';
import { os } from '../data';
interface SelectBoxProps {
    heading: string;
    osType: string;
    options: osType[];
    setOsId: (id: number) => void;
    setOsLable: (id: string | null) => void;
}
export interface osType {
    "id": number;
    "name": string;
    "arch": string;
    "family": string;
}
// Function to safely get an instance by ID
function getOsById(data: Record<string, osType[]>, id: string): osType[] {
    const osList = data[id];
    return osList; // Return the first instance or undefined
}
function getNameById(id: number, osData: osType[]) {
    const osItem = osData.find(os => os.id == id);
    return osItem ? osItem.name : 'OS not found';
}
const OsSelectBox: React.FC<SelectBoxProps> = ({ heading, osType, options, setOsId, setOsLable }) => {

    const [selectedOption, setSelectedOption] = useState<string>("");

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedId = e.target.options[e.target.selectedIndex].getAttribute('data-label');
        setSelectedOption(e.target.value);
        setOsId(selectedId);
        console.log(selectedId);
        const osData = getOsById(os, osType);
        const osLabel = getNameById(selectedId, osData);
        setOsLable(osLabel);
        console.log("======>", selectedId, osLabel);
    };

    return (
        <div className='flex flex-col gap-5 font-space-grotesk'>
            <h1 className='text-[20px] dark-theme-color'>{heading}<span className=' text-red-700'>*</span></h1>
            <div className="relative inline-block w-full">
                <select className="py-3 border-[1px] border-dashed rounded-[10px] light-theme-color block appearance-none w-full border-gray-400 hover:border-gray-500 px-4 pr-8 shadow leading-tight focus:outline-none focus:shadow-outline"
                    onChange={handleSelectChange}
                    value={selectedOption}
                    style={{ backgroundColor: "#F5FAFF" }}
                >
                    {options.map((option, index) => (
                        <option key={index} data-label={option.id} value={option.name} className='text-[13px] md:text-[16px]'>
                            {option.name}
                        </option>
                    ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0H14V2H13V3H12V4H11V5H10V6H9V7H8V8H6V7H5V6H4V5H3V4H2V3H1V2H0V0ZM4 2V3H5V4H6V5H8V4H9V3H10V2H4Z" fill="#4D8CEC" />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default OsSelectBox;