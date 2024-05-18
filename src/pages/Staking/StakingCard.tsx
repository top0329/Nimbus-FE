import React from 'react';
import useScreenSize from '../../hooks/useScreenSize';
const StakingCard: React.FC = () => {
    const screenSize = useScreenSize();
    const isSmallScreen = screenSize.width <= 640; // Assuming 640px is the breakpoint for small screens
    return (
        <div className='flex w-full lg:h-full items-center justify-between text-center flex-col pb-[80px] z-0'>
            <section className='flex flex-col gap-10 py-[30px] md:pb-0 md:pt-[60px] w-full'>
                <h1 className='font-press-start-2p lg:text-[24px] xl:text-[36px] text-[16px]' style={{ color: "#4D8CEC" }}>Staking & Claim</h1>
                <p style={{ color: "#45628F" }} className='16px font-space-grotesk'>Select one of our Nodes Packages and Start Running DApps.</p>
            </section>
            <section className="flex flex-col lg:flex-row lg:px-0 flex-wrap pt-8 md:py-0 items-center justify-between w-full gap-8 lg:gap-0 font-space-grotesk">
                <div className="stakeContainer cursor-pointer flex flex-col gap-2 text-[16px] box-border py-[20px]  w-full lg:w-[25%] rounded-[10px] border-[1px] border-dashed items-center justify-center" style={{ borderColor: '#4D8CEC' }}>
                    <h2 className='text-[14px] light-theme-color'>Token Value Locked</h2>
                    <h1 className='text-[20px] dark-theme-color'>$119,460.8</h1>
                </div >
                <div className="stakeContainer cursor-pointer flex flex-col gap-2 text-[16px] box-border py-[20px] w-full lg:w-[25%] rounded-[10px] border-[1px] border-dashed items-center justify-center" style={{ borderColor: '#4D8CEC' }}>
                    <h2 className='text-[14px] light-theme-color'>Total Tokens Staked</h2>
                    <h1 className='text-[20px] dark-theme-color'>519,460.8</h1>
                </div >
                <div className="stakeContainer cursor-pointer flex flex-col gap-2 text-[16px] box-border py-[20px] w-full lg:w-[25%] rounded-[10px] border-[1px] border-dashed items-center justify-center" style={{ borderColor: '#4D8CEC' }}>
                    <h2 className='text-[14px] light-theme-color'>Total Claimed ETH Value</h2>
                    <h1 className='text-[20px] dark-theme-color'>$5500</h1>
                </div >
            </section>
            {
                isSmallScreen ?
                    (
                        <div className='w-full'>
                            <div className='flex flex-row'>
                                <div className='border-r-2' style={{ flex: "50%", height: "50px", borderColor: "#4D8CEC" }}></div>
                                <div className='' style={{ flex: "50%" }}></div>
                            </div>
                            <section className="flex flex-col lg:gap-[20px] gap-8 w-full lg:px-0">
                                <div className="stakeContainer cursor-pointer flex flex-col gap-2 text-[16px] box-border py-[20px] w-full rounded-[10px] border-[1px] border-dashed items-center justify-center" style={{ borderColor: '#4D8CEC' }}>
                                    <h2 className='text-[14px] light-theme-color'>My Balance</h2>
                                    <h1 className='text-[20px] dark-theme-color'>$10100</h1>
                                </div >
                                <div className="stakeContainer cursor-pointer flex flex-col gap-2 text-[16px] box-border py-[20px] w-full rounded-[10px] border-[1px] border-dashed items-center justify-center" style={{ borderColor: '#4D8CEC' }}>
                                    <h2 className='text-[14px] light-theme-color'>My Stake Balance</h2>
                                    <h1 className='text-[20px] dark-theme-color'>$520</h1>
                                </div >
                                <div className="stakeContainer cursor-pointer flex flex-col gap-2 text-[16px] box-border py-[20px] w-full rounded-[10px] border-[1px] border-dashed items-center justify-center" style={{ borderColor: '#4D8CEC' }}>
                                    <h2 className='text-[14px] light-theme-color'>Total ETH Claimed</h2>
                                    <h1 className='text-[20px] dark-theme-color'>$1500</h1>
                                </div >
                            </section>
                            <div className='flex flex-row'>
                                <div className='border-r-2' style={{ flex: "50%", height: "50px", borderColor: "#4D8CEC" }}></div>
                                <div className='' style={{ flex: "50%" }}></div>
                            </div>
                            <section className="flex flex-col lg:gap-[20px] gap-8 w-full lg:px-0">
                                <div className="stakeContainer cursor-pointer flex flex-col gap-2 text-[16px] box-border py-[20px] w-full rounded-[10px] border-[1px] border-dashed items-center justify-center" style={{ borderColor: '#4D8CEC' }}>
                                    <h2 className='text-[14px] light-theme-color'>Early Unstake Fee</h2>
                                    <h1 className='text-[20px] dark-theme-color'>5%</h1>
                                </div >
                                <div className="stakeContainer cursor-pointer flex flex-col gap-2 text-[16px] box-border py-[20px] w-full rounded-[10px] border-[1px] border-dashed items-center justify-center" style={{ borderColor: '#4D8CEC' }}>
                                    <h2 className='text-[14px] light-theme-color'>APY Rate</h2>
                                    <h1 className='text-[20px] dark-theme-color'>Dynamic</h1>
                                </div >
                                <div className="stakeContainer cursor-pointer flex flex-col gap-2 text-[16px] box-border py-[20px] w-full rounded-[10px] border-[1px] border-dashed items-center justify-center" style={{ borderColor: '#4D8CEC' }}>
                                    <h2 className='text-[14px] light-theme-color'>Locked at</h2>
                                    <h1 className='text-[20px] dark-theme-color'>--</h1>
                                </div >
                            </section>
                            <div className='flex flex-row'>
                                <div className='border-r-2' style={{ flex: "50%", height: "50px", borderColor: "#4D8CEC" }}></div>
                                <div className='' style={{ flex: "50%" }}></div>
                            </div>
                            <section className="stakeContainer flex flex-col border-[1px] border-dashed rounded-[10px] px-3 lg:px-8 lg:my-0 py-[20px] w-full" style={{ borderColor: "#4D8CEC" }} >
                                <h2 className='text-[15px] light-theme-color py-3'>Minimum lock period: 3 days</h2>
                                <div className='flex flex-row py-3 relative'>
                                    <input type="text" className="rounded-[10px] border-[1px] px-7 py-[10px] w-[75%] font-space-grotesk text-[18px] customInput focus:outline-none" />
                                    <button className='customBtn absolute right-0 bg-light-theme-color text-white px-7 py-[11px] rounded-[10px] w-[40%] text-[15px]'>MAX</button>
                                </div>
                                <section className='grid grid-cols-4 gap-4 py-[20px]'>
                                    <button className='border-[1px] rounded-[10px] px-2 py-3 bg-transparent text-[13px]' style={{ borderColor: "#4D8CEC", color: "#4D8CEC" }}>25%</button>
                                    <button className='border-[1px] rounded-[10px] px-2 py-3 bg-transparent text-[13px]' style={{ borderColor: "#4D8CEC", color: "#4D8CEC" }}>50%</button>
                                    <button className='border-[1px] rounded-[10px] px-2 py-3 bg-transparent text-[13px]' style={{ borderColor: "#4D8CEC", color: "#4D8CEC" }}>75%</button>
                                    <button className='border-[1px] rounded-[10px] px-2 py-3 bg-transparent text-[13px]' style={{ borderColor: "#4D8CEC", color: "#4D8CEC" }}>100%</button>
                                </section>
                                <button className='customBtn bg-light-theme-color text-[15px] text-white w-full border-[1px] rounded-[10px] px-3 py-3'>Connect Wallet</button>
                            </section>
                        </div >
                    )
                    :
                    (

                        <div className='grid grid-cols-12 gap-0 w-full mt-8'>
                            <div className='col-span-3'>
                                <section className="flex flex-col lg:gap-[20px] w-full gap-8 lg:px-0">
                                    <div className="stakeContainer cursor-pointer flex flex-col gap-2 text-[16px] box-border py-[20px] w-full rounded-[10px] border-[1px] border-dashed items-center justify-center" style={{ borderColor: '#4D8CEC' }}>
                                        <h2 className='text-[14px] light-theme-color'>My Balance</h2>
                                        <h1 className='text-[20px] dark-theme-color'>$10100</h1>
                                    </div >
                                    <div className="stakeContainer cursor-pointer flex flex-col gap-2 text-[16px] box-border py-[20px] w-full rounded-[10px] border-[1px] border-dashed items-center justify-center" style={{ borderColor: '#4D8CEC' }}>
                                        <h2 className='text-[14px] light-theme-color'>My Stake Balance</h2>
                                        <h1 className='text-[20px] dark-theme-color'>$520</h1>
                                    </div >
                                    <div className="stakeContainer cursor-pointer flex flex-col gap-2 text-[16px] box-border py-[20px] w-full rounded-[10px] border-[1px] border-dashed items-center justify-center" style={{ borderColor: '#4D8CEC' }}>
                                        <h2 className='text-[14px] light-theme-color'>Total ETH Claimed</h2>
                                        <h1 className='text-[20px] dark-theme-color'>$1500</h1>
                                    </div >
                                </section>
                            </div>
                            <div className='col-span-1 grid-rows-3 grid gap-[20px]'>
                                <div className='row-span-1'>
                                    <hr className='relative top-[50%] tranlate-y-[50%] light-theme-color' />
                                </div>
                                <div className='row-span-1'>
                                    <hr className='relative top-[50%] tranlate-y-[50%] light-theme-color' />
                                </div>
                                <div className='row-span-1'>
                                    <hr className='relative top-[50%] tranlate-y-[50%] light-theme-color' />
                                </div>
                            </div>
                            <div className='col-span-4 flex items-center justify-center'>
                                <section className="stakeContainer flex flex-col flex-wrap border-[1px] border-dashed rounded-[10px] px-3 lg:px-8 my-[30px] lg:my-0 py-[20px] w-full" style={{ borderColor: "#4D8CEC" }} >
                                    <h2 className='text-[15px] light-theme-color py-3'>Minimum lock period: 3 days</h2>
                                    <div className='flex flex-row py-3 relative'>
                                        <input type="text" className="rounded-[10px] border-[1px] px-7 py-[10px] w-[75%] font-space-grotesk text-[18px] customInput focus:outline-none" />
                                        <button className='customBtn absolute right-0 bg-light-theme-color text-white px-7 py-[11px] rounded-[10px] lg:w-[45%] text-[15px] text-center'>MAX</button>
                                    </div>
                                    <section className='grid grid-cols-4 gap-4 py-[20px]'>
                                        <button className='border-[1px] rounded-[10px] px-3 py-3 bg-transparent text-[13px]' style={{ borderColor: "#4D8CEC", color: "#4D8CEC" }}>25%</button>
                                        <button className='border-[1px] rounded-[10px] px-3 py-3 bg-transparent text-[13px]' style={{ borderColor: "#4D8CEC", color: "#4D8CEC" }}>50%</button>
                                        <button className='border-[1px] rounded-[10px] px-3 py-3 bg-transparent text-[13px]' style={{ borderColor: "#4D8CEC", color: "#4D8CEC" }}>75%</button>
                                        <button className='border-[1px] rounded-[10px] px-3 py-3 bg-transparent text-[13px]' style={{ borderColor: "#4D8CEC", color: "#4D8CEC" }}>100%</button>
                                    </section>
                                    <button className='customBtn bg-light-theme-color text-[15px] text-white w-full border-[1px] rounded-[10px] px-3 py-3'>Connect Wallet</button>
                                </section>
                            </div>
                            <div className='col-span-1 grid-rows-3 grid gap-[20px]'>
                                <div className='row-span-1'>
                                    <hr className='relative top-[50%] tranlate-y-[50%] light-theme-color' />
                                </div>
                                <div className='row-span-1'>
                                    <hr className='relative top-[50%] tranlate-y-[50%] light-theme-color' />
                                </div>
                                <div className='row-span-1'>
                                    <hr className='relative top-[50%] tranlate-y-[50%] light-theme-color' />
                                </div>
                            </div>
                            <div className='col-span-3'>
                                <section className="flex flex-col lg:gap-[20px] gap-8 w-full lg:px-0">
                                    <div className="stakeContainer cursor-pointer flex flex-col gap-2 text-[16px] box-border py-[20px] w-full rounded-[10px] border-[1px] border-dashed items-center justify-center" style={{ borderColor: '#4D8CEC' }}>
                                        <h2 className='text-[14px] light-theme-color'>Early Unstake Fee</h2>
                                        <h1 className='text-[20px] dark-theme-color'>5%</h1>
                                    </div >
                                    <div className="stakeContainer cursor-pointer flex flex-col gap-2 text-[16px] box-border py-[20px] w-full rounded-[10px] border-[1px] border-dashed items-center justify-center" style={{ borderColor: '#4D8CEC' }}>
                                        <h2 className='text-[14px] light-theme-color'>APY Rate</h2>
                                        <h1 className='text-[20px] dark-theme-color'>Dynamic</h1>
                                    </div >
                                    <div className="stakeContainer cursor-pointer flex flex-col gap-2 text-[16px] box-border py-[20px] w-full rounded-[10px] border-[1px] border-dashed items-center justify-center" style={{ borderColor: '#4D8CEC' }}>
                                        <h2 className='text-[14px] light-theme-color'>Locked at</h2>
                                        <h1 className='text-[20px] dark-theme-color'>--</h1>
                                    </div >
                                </section>
                            </div>
                        </div>
                    )
            }


        </div >
    );
};

export default StakingCard;




