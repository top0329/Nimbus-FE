import React from 'react';
import { useAccount } from 'wagmi'
const ProfileCard: React.FC = () => {
    const { address, isConnected } = useAccount();
    return (
        <div className='z-0 flex h-full w-full items-center justify-between text-center flex-col py-[40px] pt-[30px] md:pt-[70px]'>
            <section className='flex flex-col gap-10 w-full pb-[40px]'>
                <h1 className='font-press-start-2p lg:text-[24px] xl:text-[36px] text-[21px]' style={{ color: "#4D8CEC" }}>My Profile</h1>
            </section>
            <img src="./BOT.gif" alt="" className='h-[250px] w-[250px]' />
            <section className="flex flex-col gap-2 text-[16px] box-border py-[40px]  w-full lg:w-[50%] items-center justify-center font-space-grotesk">
                <h2 className='light-theme-color text-[30px] lg:text-[40px] dark-theme-color font-bold'>{isConnected ? 'James Bond' : 'No Connected'}</h2>
                <div className="flex h-[50px] w-[200px] text-[16px] py-2 rounded-[10px] items-center justify-center" style={{ borderColor: '#4D8CEC' }}>
                    < img src="./walletBtn.svg" alt="Icon" />
                    < span className="ml-2 text-sm" style={{ color: "#4D8CEC" }} >{isConnected && address ? `${address.substring(0, 4)}...${address.substring(address.length - 4)}` : 'No connected'}</span > {/* Add your button text here */}
                </div >
            </section >
            <section className="flex flex-col lg:flex-row py-4 items-center justify-center w-full gap-10 font-space-grotesk">
                <div className="profileContainer cursor-pointer flex flex-col gap-2 text-[16px] box-border py-[20px] w-full lg:w-[25%] rounded-[10px] border-[1px] border-dashed items-center justify-center" style={{ borderColor: '#4D8CEC' }}>
                    <h2 className='text-[14px] light-theme-color'>My Balance</h2>
                    <h1 className='text-[20px] dark-theme-color'>$200</h1>
                </div >
                <div className="profileContainer cursor-pointer flex flex-col gap-2 text-[16px] box-border py-[20px] w-full lg:w-[25%] rounded-[10px] border-[1px] border-dashed items-center justify-center" style={{ borderColor: '#4D8CEC' }}>
                    <h2 className='text-[14px] light-theme-color'>My Nodes</h2>
                    <h1 className='text-[20px] dark-theme-color'>3</h1>
                </div >
            </section>
        </div >
    );
};

export default ProfileCard;




