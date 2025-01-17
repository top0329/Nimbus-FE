import React, { useEffect, useState } from "react";
import toastr from "toastr";
import { useParams } from "react-router-dom";

import DefaultLayout from "../../layout/DefaultLayout";
import LabelCheckBox from "../../components/LabelCheckBox";
import SpecificationBox from "../../components/SpecificationBox";
import LocationSelectBox from "../../components/LocationSelectBox";
import SummaryModal, { orderSummary } from "./SummaryModal";
import { data } from "../../data";
import OsVersionSelectBox from "../../components/OsVersionSelectBox";
import OsTypeSelectBox from "../../components/OsTypeSelectBox";

function getAssetDescription(id: string | undefined, serviceId: string) {
    const assets = data[serviceId].assets;
    const asset = assets.find(asset => asset.id === id);
    return asset ? asset.desc : 'Asset not found';
}
function getAssetImage(id: string | undefined, serviceId: string) {
    const assets = data[serviceId].assets;
    const asset = assets.find(asset => asset.id === id);
    return asset ? asset.img : 'Asset not found';
}

const Order: React.FC = () => {
    const instance = useParams<{ service: string, instance: string }>();
    const serviceType = instance.service;
    const instanceType = instance.instance;
    let instanceDesc;
    let instanceImg;
    if (serviceType != undefined) {
        instanceDesc = getAssetDescription(instanceType, serviceType);
        instanceImg = getAssetImage(instanceType, serviceType);
    }

    const [selectedInstanceId, setInstanceId] = useState<string>("");

    const [hostname, setHostName] = useState<string>("");

    const [osId, setOsId] = useState<number>(0);
    const [osType, setOsType] = useState<string>("");
    const [osList, setOsList] = useState<any>([]);
    const [osLable, setOsLable] = useState<string | null>("");

    const [selectedInstanceLable, setInstanceLable] = useState<string | null>("");
    const [locationId, setLocationId] = useState<string>("");
    const [location, setLocation] = useState<string>("");
    const [monthlyCost, setMonthlyCost] = useState<number>(0);
    const [cpuCount, setCpu] = useState<number>(0);
    const [ram, setRam] = useState<number>(0);
    const [storage, setStorage] = useState<number>(0);
    const [bandwidth, setBandWidth] = useState<number>(0);
    const [ddosProtection, setDdosProtection] = useState<boolean>(false);
    const [enableIP6, setEnableIP6] = useState<boolean>(false);
    const [enableBackUps, setEnableBackUps] = useState<boolean>(false);

    const [orderDetail, setDetail] = useState<orderSummary>();
    const [isModalOpen, setModalOpen] = useState<boolean>(false);

    useEffect(() => {
        setDetail({
            serviceType:serviceType,
            instanceId: selectedInstanceId,
            name: hostname,
            locationId: locationId,
            osId: osId,
            monthlyCost: monthlyCost,
            enableIpv6: enableIP6,
            enableBackUps: enableBackUps,
            ddosProtection: ddosProtection,
            os: osLable,
            location: location,
            summary: selectedInstanceLable,
            cpuCount: cpuCount,
            ram: ram,
            storage: storage,
            bandwidth: bandwidth,
        })
    }, [selectedInstanceId, hostname, osId, selectedInstanceLable, locationId, location, monthlyCost, ddosProtection, enableIP6, enableBackUps])

    const closeModal = () => {
        setModalOpen(false);
    };

    const handleOrder = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        //validate break point
        if (selectedInstanceId && locationId && osId && hostname && monthlyCost) {
            setModalOpen(true);
        }
        else {
            toastr.error("All Input Required");
        }
    }

    return (
        <DefaultLayout>
            <div className="flex flex-col w-full gap-10">
                <div className="flex flex-row gap-8 w-full">
                    <div className="md:visible hidden md:flex flex-col text-center gap-5 border-[1px] border-dashed rounded-[27px] py-[30px] px-[40px] items-center justify-between" style={{ borderColor: "#4D8CEC" }}>
                        <img src={instanceImg} className="h-[150px] w-[220px]" />
                        <h1 className="font-press-start-2p text-4 font-press-start-2p">
                            {
                                instanceType == "CPU" ? (
                                    <>
                                        Cloud Computer Shared CPU
                                    </>
                                ) : (
                                    <>
                                        NVIDIA {instanceType}
                                    </>
                                )
                            }
                        </h1>
                    </div>
                    <div className="flex flex-col justify-between gap-[30px] w-full">
                        <div className="flex flex-col gap-[30px]">
                            <h1 className="font-press-start-2p text-[24px]">
                                {
                                    instanceType == "CPU" ? (
                                        <>
                                            Cloud Computer Shared CPU
                                        </>
                                    ) : (
                                        <>
                                            NVIDIA {instanceType}
                                        </>
                                    )
                                }
                            </h1>
                            <p className="font-space-grotesk text-[18px] md:w-[50%]">
                                {instanceDesc}
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
                    <SpecificationBox
                        heading="Select the server specification"
                        setInstanceId={setInstanceId}
                        setMonthlyCost={setMonthlyCost}
                        setInstanceLable={setInstanceLable}
                        setCpu={setCpu}
                        setRam={setRam}
                        setStorage={setStorage}
                        setBandWidth={setBandWidth}
                    />
                    <LocationSelectBox setLocationId={setLocationId} setLocation={setLocation} />
                    <OsTypeSelectBox
                        heading="Select the operating System"
                        setOsType={setOsType}
                        setOsList={setOsList}
                        serviceType={serviceType}
                    />
                    <OsVersionSelectBox
                        heading="Select the operating Version"
                        osVersion={osType}
                        osVersionList={osList}
                        setOsId={setOsId}
                        setOsLable={setOsLable}
                    />
                    <div className="font-space-grotesk">
                        <h1 className='text-[20px] dark-theme-color mb-[20px]'>Host Name<span className=' text-red-700'>*</span></h1>
                        <input type="text" value={hostname} onChange={(e) => setHostName(e.target.value)} placeholder="Host Name" className="border border-dashed rounded-[10px] light-theme-color text-[16px] py-3 px-2 customInput bg-transparent focus:outline-none" style={{ borderColor: "#4D8CEC" }}></input>
                    </div>
                    <hr className="h-[3px] light-theme-color" />
                    <button onClick={handleOrder} className='self-end customBtn text-[18px] h-[48px] rounded-[15px] text-white w-full font-space-grotesk md:w-[30%]' style={{ backgroundColor: "#4D8CEC" }}>
                        Proceed Order
                    </button>
                    <SummaryModal isOpen={isModalOpen} onClose={closeModal} orderDetail={orderDetail} />
                </div>
            </div>
        </DefaultLayout>
    )
}
export default Order;