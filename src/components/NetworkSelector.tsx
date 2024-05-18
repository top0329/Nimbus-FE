import React, { useState } from 'react';

interface Nework {
    svgPath: string;
    networkName: string;
}

const networkData: Nework[] = [
    { svgPath: "./ethereum-logo.svg", networkName: "Ethereum" },
    { svgPath: "./tether-logo.svg", networkName: "USDT" }

];

const NetworkSelector: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState<Nework>({ svgPath: "./ethereum-logo.svg", networkName: "Ethereum" });

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionSelect = (network: Nework) => {
        setSelectedOption(network);
        setIsOpen(false);
    };

    return (
        <div className="relative w-full font-space-grotesk text-[16px]">
            <h1 className='text-[16px] dark-theme-color py-3'>Network Name</h1>
            <button onClick={toggleDropdown} className="px-4 py-2 border-[1px] border-dashed rounded-[10px] light-theme-color flex flex-row w-full items-center gap-3">
                <img src={`${selectedOption.svgPath}`} alt={selectedOption.svgPath} className='rounded-full overflow-hidden w-8 h-8' />
                <h2>{selectedOption.networkName}</h2>
            </button>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 top-[48px]">
                <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0H14V2H13V3H12V4H11V5H10V6H9V7H8V8H6V7H5V6H4V5H3V4H2V3H1V2H0V0ZM4 2V3H5V4H6V5H8V4H9V3H10V2H4Z" fill="#4D8CEC" />
                </svg>
            </div>
            {isOpen && (
                <div className="z-20 absolute mt-2 rounded shadow-md w-full  max-h-[200px] overflow-y-auto" style={{ backgroundColor: "#F5FAFF" }}>
                    {networkData.map((network, index) => (
                        <div key={index} onClick={() => handleOptionSelect(network)} className="p-2 flex flex-row cursor-pointer items-center gap-3  hover:bg-sky-500 hover:text-white">
                            <img src={`${network.svgPath}`} alt={network.svgPath} className='rounded-full overflow-hidden w-8 h-8' />
                            <h2>{network.networkName}</h2>
                        </div>
                    ))
                    }
                </div >
            )}
        </div >
    );
};

export default NetworkSelector;