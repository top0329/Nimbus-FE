import TopUpModal from "./TopUpModal";
import { useState } from 'react';

const TopUpBtn = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const closeModal = () => {
        setModalOpen(false);
    };
    const handleConnect = () => {
        setModalOpen(true);
    };
    return (
        <div className="absolute left-[35%] md:relative md:left-0 px-0 md:px-2 z-10">
            <button onClick={handleConnect} className="walletBtn customBtn cursor-pointer flex w-[60px] h-[40px] md:w-[150px] text-[14px] box-border rounded-full border-[1px] items-center justify-center"
                style={{ borderColor: "#dde1e6", backgroundColor: "#f0f5fa" }}
            >
                < img src="/topUp.svg" alt="Icon" /> {/* Use the SVG icon here */}
                < span className="ml-2 text-[15px] md:text-[18px] md:block hidden" style={{ color: "#4D8CEC" }} >Top Up</span > {/* Add your button text here */}
            </button >
            <TopUpModal isOpen={isModalOpen} onClose={closeModal} />
        </div>

    );
};

export default TopUpBtn;
