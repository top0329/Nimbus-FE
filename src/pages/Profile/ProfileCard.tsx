import React from 'react';
import { useSelector } from 'react-redux';
import useScreenSize from '../../hooks/useScreenSize';

const nodesData = [
    {
        id: 1,
        name: "Node One",
        specification: "NVIDIA H100",
        type: "GPU",
        region: "USA East",
        status: "Active"
    },
    {
        id: 2,
        name: "Node Two",
        specification: "Data Analytics",
        type: "CPU",
        region: "Europe West",
        status: "Inactive"
    },
    {
        id: 3,
        name: "Node Three",
        specification: "Machine Learning",
        type: "GPU",
        region: "Asia South",
        status: "Active"
    }
];
const ProfileCard: React.FC = () => {
    const user = useSelector((state: any) => state.user);
    const currentBalance = user.balance;
    const screenSize = useScreenSize();
    const isSmallScreen = screenSize.width <= 640; // Assuming 640px is the breakpoint for small screens
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
                            nodesData.map((node, index) => (
                                <div key={index} className='flex flex-col font-space-grotesk border border-dashed rounded-[10px]' style={{ borderColor: '#4D8CEC' }}>
                                    <div className='flex flex-row py-2  px-2' >
                                        <h1 className='dark-theme-color text-[18px] font-bold'>Name:&nbsp;</h1>
                                        <h2 className='dark-theme-color text-[15px]'>{node.name}</h2>
                                    </div>
                                    <div className='flex flex-row py-2 px-2'>
                                        <h1 className='dark-theme-color text-[18px] font-bold'>Specification:&nbsp;</h1>
                                        <h2 className='dark-theme-color text-[15px]'>{node.specification}</h2>
                                    </div>
                                    <div className='flex flex-row py-2 px-2'>
                                        <h1 className='dark-theme-color text-[18px] font-bold'>Type:&nbsp;</h1>
                                        <h2 className='dark-theme-color text-[15px]'>{node.type}</h2>
                                    </div>
                                    <div className='flex flex-row py-2 px-2'>
                                        <h1 className='dark-theme-color text-[18px] font-bold'>Region:&nbsp;</h1>
                                        <div className='flex flex-row items-center justify-center gap-2'>
                                            <img src={`https://flagcdn.com/w40/us.png`} alt="us" className={`rounded-full overflow-hidden w-8 h-8`} />
                                            {node.region}
                                        </div>
                                    </div>
                                    <div className='flex flex-row py-2 px-2'>
                                        <h1 className='dark-theme-color text-[18px] font-bold'>Status:&nbsp;</h1>
                                        <h2 className='dark-theme-color text-[15px]'>{node.status}</h2>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="border border-dashed rounded-[20px] overflow-hidden" style={{ borderColor: "#4D8CEC" }}>
                                <table className="w-full font-space-grotesk">
                                    <thead className='bg-light-theme-color text-white text-[18px] h-[60px]'>
                                        <tr>
                                            <th>Name</th>
                                            <th>Specification</th>
                                            <th>Type</th>
                                            <th>Region</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody className='text-center justify-center text-[15px] dark-theme-color'>
                                        {nodesData.length > 0 ? (
                                            nodesData.map(node => (
                                                <tr key={node.id} className='h-[80px]'>
                                                    <td>{node.name}</td>
                                                    <td>{node.specification}</td>
                                                    <td>{node.type}</td>
                                                    <td>
                                                        <div className='flex flex-row items-center justify-center gap-2'>
                                                            <img src={`https://flagcdn.com/w40/us.png`} alt="us" className={`rounded-full overflow-hidden w-8 h-8`} />
                                                            {node.region}
                                                        </div>
                                                    </td>
                                                    <td>{node.status}</td>
                                                </tr>
                                            ))
                                        ) : (
                                            <tr>
                                                <td colSpan={5}>No nodes</td>
                                            </tr>
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




