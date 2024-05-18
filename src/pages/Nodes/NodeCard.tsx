import React from 'react';
import { data } from '../../data';
const NodeCard: React.FC = () => {
    return (
        <div className='flex items-center justify-center text-center flex-col gap-5 lg:px-5 px-[30px] z-0'>
            <section className='flex flex-col gap-10'>
                <h1 className='font-press-start-2p lg:text-[24px] xl:text-[36px] text-[18px]' style={{ color: "#4D8CEC" }}>Coming Soon...</h1>
                <p style={{ color: "#45628F" }} className='16px font-space-grotesk'>Select one of our Nodes and Start Running</p>
            </section>
            <section className="w-full grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-10 xl:grid-cols-2 2xl:gap-4 2xl:grid-cols-2 font-space-grotesk">
                {
                    data.NodesButtons.map((item, index) => (
                        <div key={index} className="cursor-pointer my-4 flex h-[50px] w-full lg:w-[300px] text-[16px] box-border py-2 rounded-[10px] border-[1px] border-dashed bg-gray items-center justify-center nodeBtn" style={{ borderColor: '#4D8CEC' }}>
                            < img src={item.img} alt="Icon" />
                            < span className="ml-2 text-[18px]" style={{ color: "#4D8CEC" }} >{item.tokenName}</span >
                        </div >
                    ))
                }
            </section>
            <img src = "./Line.svg" alt = "line" className='w-full py-8' />
            <button className='customBtn text-[18px] h-[48px] rounded-[15px] text-white w-full font-space-grotesk' style={{ backgroundColor: "#4D8CEC" }}>
                Choose Plan
            </button>
        </div >
    );
};

export default NodeCard;




