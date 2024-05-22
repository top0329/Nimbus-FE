import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addLocations } from '../Redux/Reducers/locationSlice';
import { useNavigate } from 'react-router-dom';
import { data, locationData } from '../data';
interface SpecificationBoxProps {
    heading: string,
    setInstanceId: (id: string) => void;
    setInstanceLable: (id: string | null) => void;
    setMonthlyCost: (cost: number) => void;
    instanceType: string;
}
export interface optionType {
    value: string;
    label: string;
    locations: string[];
    monthlyCost: number;
}
const SpecificationBox: React.FC<SpecificationBoxProps> = ({ heading, setInstanceId, setInstanceLable, setMonthlyCost, instanceType }) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const specs = useSelector((state: any) => state.specs);
    const [selectedOption, setSelectedOption] = useState<string | null>("");

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedLabel = e.target.options[e.target.selectedIndex].getAttribute('data-label');
        const selectedMonthlyCost: any = e.target.options[e.target.selectedIndex].getAttribute('data-cost');
        let locations = locationData.filter(location => specs[e.target.selectedIndex].locations.includes(location.id));

        setSelectedOption(selectedLabel);
        setInstanceId(e.target.value);
        setInstanceLable(selectedLabel);
        setMonthlyCost(parseInt(selectedMonthlyCost));
        dispatch(addLocations(locations))
    };
    useEffect(() => {
        if (specs.length != 0) {
            let locations = locationData.filter(location => specs[0].locations.includes(location.id));
            setSelectedOption(specs[0].label);
            setInstanceId(specs[0].value);
            setInstanceLable(specs[0].label);
            setMonthlyCost(parseInt(specs[0].monthlyCost));
            dispatch(addLocations(locations))
        }
        else {
            navigate('/rent');
        }
    }, [specs]);

    return (
        <div className='flex flex-col gap-5 font-space-grotesk'>
            <h1 className='text-[20px] dark-theme-color'>{heading}<span className=' text-red-700'>*</span></h1>
            <div className="relative inline-block w-full">
                <select className="py-3 border-[1px] border-dashed rounded-[10px] light-theme-color block appearance-none w-full border-gray-400 hover:border-gray-500 px-4 pr-8 shadow leading-tight focus:outline-none focus:shadow-outline"
                    onChange={handleSelectChange}
                    value={selectedOption ? selectedOption : ''}
                    style={{ backgroundColor: "#F5FAFF" }}
                >
                    {specs.map((spec: any, index: number) => (
                        <option key={index} data-label={spec.label} data-cost={spec.monthlyCost} value={spec.value} className='text-[11px] md:text-[16px]'>
                            {spec.label}
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

export default SpecificationBox;