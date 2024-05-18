// FaqCard.tsx
import React from 'react';

interface FaqCardProps {
    title: string;
    content: string;
    isOpen: boolean;
    onClick: () => void;
}

const FaqCard: React.FC<FaqCardProps> = ({ title, content, isOpen, onClick }) => {
    return (
        <div className='flex flex-col w-full py-[15px]'>
            <div className='flex flex-row justify-between w-full'>
                <h1 className='dark-theme-color font-bold text-[16px] text-left lg:text-[20px] font-space-grotesk'>{title}</h1>
                <img src={isOpen ? "downBtn.svg" : "upBtn.svg"} alt="icon" onClick={onClick} />
            </div>
            <p className={`pt-[20px] dark-theme-color text-[15px] lg:text-[16px] text-left font-space-grotesk dropdown-content ${isOpen ? 'show' : ''}`}>{content}</p>
        </div>
    );
};

export default FaqCard;




