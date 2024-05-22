import React from 'react';
import { FaqContextProvider } from '../../hooks/FaqContext';
import FAQList from './FaqCardList';
const SupportCard: React.FC = () => {
    return (
        <div className='flex w-full items-center justify-center text-center flex-col'>
            <section className='flex flex-col w-full pt-[30px] md:pt-[60px]'>
                <h1 className='font-press-start-2p lg:text-[24px] xl:text-[36px] text-[21px]' style={{ color: "#4D8CEC" }}>Support</h1>
            </section>
            <section className="flex flex-row gap-2 text-[16px] box-border pb-[20px] md:mb-[30px] py-[20px] lg:py-0 w-full items-end justify-between">
                <img src="./solution1.svg" alt="" className='z-1 w-[0%] lg:w-[180px]' />
                <div className='flex flex-row w-[100%] lg:w-[40%] py-3 gap-4 items-center justify-center'>
                    {/* <img src="./pen.svg" alt="icon" className='absolute h-[28px] top-[22px] left-[5px]' /> */}
                    {/* <input type="text" className="mt-1 rounded-[10px] h-[50px] pl-[40px] py-2 bg-white border border-dashed focus:border-collapse shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full text-[18px] focus:ring-1 font-space-grotesk" placeholder="Type your problem here..." /> */}
                    {/* <input type="text" className="h-[50px] w-full rounded-[10px] border-[1px] px-[35px] py-[10px] font-space-grotesk text-[18px] customInput focus:outline-none" placeholder='Type your problem here...'/> */}
                    <img src="/telegram.svg" alt="icon" className='h-[28px]' />
                    <a href='https://t.me/+D0VlHqtqG243ZmQ0' className='light-theme-color font-space-grotesk hover:opacity-70 underline font-bold text-[24px]'>Get Support on Telegram</a>
                </div>
                <img src="./solution2.svg" alt="" className='z-1 w-[0%] lg:w-[180px]' />
            </section >
            <section className='flex flex-col px-2 lg:px-[20px] md:px-[20px] xl:px-[20px] xl2:px-[20px]  w-full lg:w-[80%] md:w-full xl:w-[60%] 2xl:w-[60%] overflow-auto h-[50vh] md:h-[35vh]'>
                <FaqContextProvider>
                    <FAQList />
                </FaqContextProvider>
            </section>
        </div >
    );
};

export default SupportCard;




