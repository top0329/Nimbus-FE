import React, { useState } from 'react';

const deposits = ["50", "100", "200"];


const DepositSelector: React.FC<({ setDepositAmount: (amount: string) => void })> = ({ setDepositAmount }) => {
    const [selectedIndex, setIndex] = useState<number>(-1);

    return (
        <>
            {
                deposits.map((deposit, index) => (
                    <button key={index} onClick={() => { setIndex(index); setDepositAmount(deposit); }} className={`border-[1px] rounded-[10px] px-5 py-3 ${(selectedIndex == index) ? 'bg-light-theme-color text-white' : 'bg-transparent light-theme-color'} text-[18px]`} style={{ borderColor: "#4D8CEC" }}>${deposit}</button >
                ))
            }
        </>
    );
};

export default DepositSelector;