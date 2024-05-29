import React from 'react';
import { useSelector } from 'react-redux';
import useScreenSize from '../../hooks/useScreenSize';
import { useNavigate } from 'react-router-dom';
import { locationData } from '../../data';

const ProfileCard: React.FC = () => {
    const user = useSelector((state: any) => state.user);
    const nodesData = useSelector((state: any) => state.orders);
    const navigate = useNavigate();
    const currentBalance = user.balance;
    const screenSize = useScreenSize();
    const isSmallScreen = screenSize.width <= 640; // Assuming 640px is the breakpoint for small screens

    const handleClick = (e: React.MouseEvent<HTMLTableRowElement>) => {
        const orderId = e.currentTarget.getAttribute('data-val');
        navigate(`/overview/${orderId}`);
    }
    const handleClick1 = (orderId: string) => {
        navigate(`/overview/${orderId}`);
    }
    const handleRent = () => {
        navigate('/rent');
    }
    return (
        <div className='z-0 flex h-full w-full items-center justify-start flex-col py-[40px] pt-[30px] md:pt-[70px]'>
            <section className='flex flex-col gap-10 w-full pb-[40px]'>
                <h1 className='font-press-start-2p light-theme-color md:text-[20px] text-[18px]'>My Balance</h1>
                <div className='flex flex-row justify-between text-left md:w-[350px] w-[280px] px-4 md:px-6 py-4 font-space-grotesk gap-4 border-2 rounded-[10px]' style={{ borderColor: "#4D8CEC" }}>
                    <div className='flex flex-col justify-between gap-4'>
                        <h2 className='dark-theme-color md:text-[20px] text-[18px]'>Current Balance</h2>
                        <h1 className='light-theme-color lg:text-[24px] xl:text-[36px] text-[21px]'>${currentBalance}</h1>
                    </div>
                    <img src="/crown.png" alt="crown" className={`h-[60px] ${currentBalance > 0 ? 'block' : 'hidden'}`} />
                </div>
            </section>
            <section className='flex flex-col gap-10 w-full pb-[40px]'>
                <h1 className='font-press-start-2p light-theme-color md:text-[20px] text-[18px]'>My Nodes</h1>
                {
                    isSmallScreen ?
                        (
                            nodesData.length > 0 ? (nodesData.map((node: any, index: number) => (
                                <div key={index} onClick={() => handleClick1(node.orderId)} className='customTr flex flex-col font-space-grotesk border border-dashed rounded-[10px]' style={{ borderColor: '#4D8CEC' }}>
                                    <div className='flex flex-row py-2  px-2' >
                                        <h1 className='dark-theme-color text-[18px] font-bold w-[150px]'>Name:&nbsp;</h1>
                                        <h2 className='dark-theme-color text-[15px]'>{node.hostname}</h2>
                                    </div>
                                    <div className='flex flex-row py-2 px-2'>
                                        <h1 className='dark-theme-color text-[18px] font-bold w-[250px]' >Specification:&nbsp;</h1>
                                        <h2 className='dark-theme-color text-[14px]'>{node.specification}</h2>
                                    </div>
                                    <div className='flex flex-row py-2 px-2'>
                                        <h1 className='dark-theme-color text-[18px] font-bold w-[150px]'>Os:&nbsp;</h1>
                                        <h2 className='dark-theme-color text-[15px]'>{node.os}</h2>
                                    </div>
                                    <div className='flex flex-row py-2 px-2'>
                                        <h1 className='dark-theme-color text-[18px] font-bold w-[150px]'>Region:&nbsp;</h1>
                                        <div className='flex flex-row items-center justify-center gap-2'>
                                            <img src={`https://flagcdn.com/w40/${(locationData.find(loc => loc.id === node?.region))?.code}.png`} alt="us" className={`rounded-full overflow-hidden w-8 h-8`} />
                                            {node.locationDetail}
                                        </div>
                                    </div>
                                    <div className='flex flex-row py-2 px-2'>
                                        <h1 className='dark-theme-color text-[18px] font-bold w-[150px]'>Status:&nbsp;</h1>
                                        <h2 className='dark-theme-color text-[15px]'>{node.status}</h2>
                                    </div>
                                </div>
                            ))) : (
                                <div className='flex flex-col px-3 gap-4 text-[20px] text-center font-space-grotesk dark-theme-colorborder border py-5 border-dashed rounded-[10px] items-center' style={{ borderColor: '#4D8CEC' }}>
                                    <h1>No nodes</h1>
                                    <button onClick={handleRent} className='light-theme-color rounded-[10px] px-4 py-2 w-full justify-center gap-3 customBtn flex flex-row items-center border-2' style={{ borderColor: "#4D8CEC" }}>
                                        <img src='/ethereum.svg' />
                                        <span>
                                            RENT
                                        </span>
                                    </button>
                                </div>
                            )
                        ) : (
                            <div className="border border-dashed rounded-[20px] border-t-0 overflow-y-scroll md:max-h-[400px]" style={{ borderColor: "#4D8CEC" }}>
                                <table className="w-full font-space-grotesk">
                                    <thead className='bg-light-theme-color text-white text-[18px] h-[60px]'>
                                        <tr>
                                            <th>Name</th>
                                            <th>Specification</th>
                                            <th>Os</th>
                                            <th>Region</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody className='text-center justify-start text-[15px] dark-theme-color'>
                                        {nodesData.length > 0 ? (
                                            nodesData.map((node: any, index: number) => (
                                                <tr key={index} className='h-[80px] customTr' data-val={node.orderId} onClick={handleClick}>
                                                    <td>{node.hostname}</td>
                                                    <td>{node.specification}</td>
                                                    <td>{node.os}</td>
                                                    <td>
                                                        <div className='flex pl-[25%] flex-col lg:flex-row items-center justify-center gap-2'>
                                                            <img className={`rounded-full overflow-hidden w-8 h-8`} src={`https://flagcdn.com/w40/${(locationData.find(loc => loc.id === node?.region))?.code}.png`} alt="us" />
                                                            <h1 className='text-left flex-1'>
                                                                {node.locationDetail}
                                                            </h1>
                                                        </div>
                                                    </td>
                                                    <td>{node.status}</td>
                                                </tr>
                                            ))
                                        ) : (
                                            <>
                                                <tr className='h-[100px] text-[18px]'>
                                                    <td colSpan={5} className='px-20 py-10'>
                                                        <h1 className='mb-10'>No nodes</h1>
                                                        <button onClick={handleRent} className='light-theme-color rounded-[10px] px-4 py-2 w-full justify-center gap-3 customBtn flex flex-row items-center border-2' style={{ borderColor: "#4D8CEC" }}>
                                                            <img src='/ethereum.svg' />
                                                            <span>
                                                                RENT
                                                            </span>
                                                        </button>
                                                    </td>
                                                </tr>
                                            </>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        )
                }
            </section>
        </div >
    );
};

export default ProfileCard;




