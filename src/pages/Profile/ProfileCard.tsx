import React from 'react';
const nodesData = [
    {
        id: 1,
        name: "Node One",
        specification: "High Performance Computing",
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
    const currentBalance = 200;
    return (
        <div className='z-0 flex h-full w-full items-center justify-start flex-col py-[40px] pt-[30px] md:pt-[70px]'>
            <section className='flex flex-col gap-10 w-full pb-[40px]'>
                <h1 className='font-press-start-2p light-theme-color md:text-[20px] text-[18px]'>My Balance</h1>
                <div className='flex flex-col w-[300px] px-6 py-4 font-space-grotesk gap-4 border-2 rounded-[10px]' style={{ borderColor: "#4D8CEC" }}>
                    <h2 className='dark-theme-color md:text-[20px] text-[18px]'>Current Balance</h2>
                    <h1 className='light-theme-color lg:text-[24px] xl:text-[36px] text-[21px]'>${currentBalance}</h1>
                </div>
            </section>
            <section className='flex flex-col gap-10 w-full pb-[40px]'>
                <h1 className='font-press-start-2p light-theme-color md:text-[20px] text-[18px]'>My Nodes</h1>
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
                                        <td>{node.region}</td>
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
            </section>
        </div >
    );
};

export default ProfileCard;




