import React, { useState, useEffect } from "react";
import DefaultLayout from "../../layout/DefaultLayout";
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from "react-router-dom";
import { RootState } from '../../Redux/Reducers/orderSlice';
// import CheckBoxWithLabel from "../../components/CheckBoxWithLabel";
import LabelCheckBox from "../../components/LabelCheckBox";
import SelectBox from "../../components/SelectBox";
import LocationBox from "../../components/LocationBox";
import Summary from "./Summary";
import { data } from "../../data";
type InstanceType = {
    id: string;
    vcpu_count: number;
    ram: number;
    disk: number;
    disk_count: number;
    bandwidth: number;
    monthly_cost: number;
    type: string;
    locations: string[];
    gpu_vram_gb: number;
    gpu_type: string;
};
const detail = data.assetsDetail;
// Function to safely get an instance by ID
function getInstanceById(data: Record<string, InstanceType[]>, id: string): InstanceType[] {
    const instances = data[id];
    return instances; // Return the first instance or undefined
}
interface optionType {
    value: string;
    label: string;
    locations: string[];
}
const Order: React.FC = () => {

    const [selectedInstanceId, setInstanceId] = useState<string>("");
    const [locationId, setLocationId] = useState<string>("");
    const [ddosProtection, setDdosProtection] = useState<boolean>(false);
    const [enableIP6, setEnableIP6] = useState<boolean>(false);
    const [enableBackUps, setEnableBackUps] = useState<boolean>(false);
    const [isModalOpen, setModalOpen] = useState(false);

    const closeModal = () => {
        setModalOpen(false);
    };

    // useEffect(() => {
    //     console.log("==========>", selectedInstanceId, locationId, ddosProtection);
    // }, [selectedInstanceId, locationId, ddosProtection]);

    const [locationList, setLocationList] = useState<string[]>([]);
    const instance = useParams<{ id: string }>();
    const instanceType = instance.id;
    const options: optionType[] = [];
    if (instanceType) {
        const gpuTypes = getInstanceById(detail, instanceType);
        gpuTypes.map((item) => {
            let detail = {
                value: item.id,
                label: `NVIDIA ${instanceType} - ${item.vcpu_count}vCPUs ${item.ram} GB RAM ${item.disk} GB NVMe`,
                locations: item.locations
            }
            options.push(detail);
        })
    }
    const orderList = useSelector((state: RootState) => state.orders);
    const lastOrder = orderList.orders[orderList.orders.length - 1];
    const navigate = useNavigate();

    const handleOrder = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        setModalOpen(true);
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
                                <LabelCheckBox onChange={setDdosProtection} label="DDoS Protection" />
                                <LabelCheckBox onChange={setEnableIP6} label="Enable IPv6" />
                                <LabelCheckBox onChange={setEnableBackUps} label="Enable Backups" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-10">
                    <SelectBox
                        heading="Select the server specification"
                        options={options}
                        setLocationList={setLocationList}
                        setInstanceId={setInstanceId}
                    />

                    <LocationBox locations={locationList} setLocationId={setLocationId} />

                    {/* <SelectBox
                        heading="Hostname"
                        options={options}
                        selectedValue="option2"
                    // onChange={handleChange}
                    /> */}
                    <hr className="h-[3px] light-theme-color" />
                    <button onClick={handleOrder} className='self-end customBtn text-[18px] h-[48px] rounded-[15px] text-white w-full font-space-grotesk md:w-[30%]' style={{ backgroundColor: "#4D8CEC" }}>
                        Proceed Order
                    </button>
                    <Summary isOpen={isModalOpen} onClose={closeModal} />
                </div>
            </div>
        </DefaultLayout>
    )
}
export default Order;