import React from "react";
import DefaultLayout from "../../layout/DefaultLayout";
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { RootState } from '../../Redux/Reducers/orderSlice';
// import CheckBoxWithLabel from "../../components/CheckBoxWithLabel";
import LabelCheckBox from "../../components/LabelCheckBox";
import SelectBox from "../../components/SelectBox";
import CountryBox from "../../components/CountryBox";

const options = [
    { value: 'option1', label: 'NVIDIA H100 - 3vCPUs 30 GB RAM 350 GB NVMe' },
    { value: 'option2', label: 'NameHo|' },
    // Add more options as needed
];


const Order: React.FC = () => {
    const orderList = useSelector((state: RootState) => state.orders);
    const lastOrder = orderList.orders[orderList.orders.length - 1];
    const navigate = useNavigate();
    const handleOrder = (event: React.MouseEvent<HTMLButtonElement>) => {
        console.log("dfsdfsdfs")
        event.preventDefault();
        navigate("/overview");
    }
    return (
        <DefaultLayout>
            <div className="flex flex-col w-full gap-10">
                <div className="flex flex-row gap-8 w-full">
                    <div className="md:visible hidden md:flex flex-col text-center gap-5 border-[1px] border-dashed rounded-[27px] py-5 px-10 items-center justify-between" style={{ borderColor: "#4D8CEC" }}>
                        <img src={lastOrder?.instanceImage || 'N/A'} />
                        <h1 className="font-press-start-2p text-4 font-press-start-2p">
                            {lastOrder?.instanceName || 'N/A'}
                        </h1>
                    </div>
                    <div className="flex flex-col justify-between gap-[30px] w-full">
                        <div className="flex flex-col gap-[30px]">
                            <h1 className="font-press-start-2p text-[24px]">
                                {lastOrder?.instanceName || 'N/A'}
                            </h1>
                            <p className="font-space-grotesk text-4 md:w-[50%]">
                                {lastOrder?.instanceDesc || 'N/A'}
                            </p>
                        </div>
                        <div className="flex flex-col font-space-grotesk text-4 gap-4">
                            <h1 className="light-theme-color font-bold">Additional Feature</h1>
                            <div className="py-4 pl-4 md:px-4 gap-4 flex flex-col md:flex-row flex-wrap border-[1px] border-dashed rounded-[10px] p-1 justify-between" style={{ borderColor: "#4D8CEC" }}>
                                <LabelCheckBox label="DDoS Protection" />
                                <LabelCheckBox label="Enable IPv6" />
                                <LabelCheckBox label="Enable Backups" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-10">
                    <SelectBox
                        heading="Select the server specification"
                        options={options}
                        selectedValue="option1"
                    // onChange={handleChange}
                    />
                    <CountryBox />
                    <SelectBox
                        heading="Hostname"
                        options={options}
                        selectedValue="option2"
                    // onChange={handleChange}
                    />
                    <hr className="h-[3px] light-theme-color" />
                    <button onClick={handleOrder} className='self-end customBtn text-[18px] h-[48px] rounded-[15px] text-white w-full font-space-grotesk md:w-[30%]' style={{ backgroundColor: "#4D8CEC" }}>
                        Proceed Order
                    </button>
                </div>
            </div>
        </DefaultLayout>
    )
}
export default Order;