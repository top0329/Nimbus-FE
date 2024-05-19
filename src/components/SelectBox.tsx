import React, { useState } from 'react';

interface SelectBoxProps {
    heading: string,
    options: optionType[];
    setLocationList: (locations: string[]) => void;
    setInstanceId: (id: string) => void;
}
interface optionType {
    value: string;
    label: string;
    locations: string[];
}
const SelectBox: React.FC<SelectBoxProps> = ({ heading, options, setLocationList, setInstanceId }) => {
    const [selectedOption, setSelectedOption] = useState<string>(""); // State to track the selected option

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedOption(e.target.value);
        setLocationList(options[e.target.selectedIndex].locations)
        setInstanceId(e.target.value);
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
                        <option key={index} value={option.value} className='text-[13px] md:text-[16px]'>
                            {option.label}
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

export default SelectBox;