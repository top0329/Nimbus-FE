import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Loading } from '../../components/Loading';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { error } from 'toastr';
import { useAccount } from 'wagmi';
import toastr from 'toastr';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { addOrder } from '../../Redux/Reducers/orderSlice';

const ENDPOINT = "http://localhost:5000";
interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    orderDetail: orderSummary | undefined;
}

export interface orderSummary {
    instanceId: string;
    name: string;
    os: string | null;
    osId: number;
    monthlyCost: number;
    location: string;
    locationId: string;
    summary: string | null;
    ddosProtection: boolean;
    enableIpv6: boolean;
    enableBackUps: boolean;
}

const SummaryModal: React.FC<ModalProps> = ({ isOpen, onClose, orderDetail }) => {
    console.log("orderdetail", orderDetail);
    //meta detail
    const name = orderDetail?.name.replace(/[^a-zA-Z\-]/g, '');
    const instanceId = orderDetail?.instanceId;
    const osId = orderDetail?.osId;
    const monthlyCost = orderDetail?.monthlyCost;
    const locationId = orderDetail?.locationId;
    const ddosProtection = orderDetail?.ddosProtection;
    const enableBackUps = orderDetail?.enableBackUps;
    const enableIpv6 = orderDetail?.enableIpv6;
    //aside detail
    const location = orderDetail?.location;
    const os = orderDetail?.os;
    const summary = orderDetail?.summary;

    if (!isOpen) return null;
    const [status, setStatus] = useState<string>("");
    //wallet
    const { address } = useAccount();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userInfo = useSelector((state: any) => state.user);

    const handleSubmit = async () => {

        if (monthlyCost) {
            if (userInfo.balance < monthlyCost) {
                toastr.error("You balance is not enough. Please confirm the balance.")
                onClose();
            }
            else {
                setStatus("loading");
                //Backend logic
                let orderId = uuidv4();
                const payload = {
                    orderId,
                    name,
                    instanceId,
                    locationId,
                    location,
                    osId,
                    ddosProtection,
                    enableBackUps,
                    enableIpv6,
                    summary,
                    os,
                    monthlyCost
                }
                await axios.post(`${ENDPOINT}/api/order/${address}`, payload, {
                    headers: {
                        'Content-type': "application/json"
                    },
                })
                    .then((response) => {
                        dispatch(addOrder(response.data));
                        setStatus("");
                        onClose();
                        toastr.success("Succefully Ordered!")
                        navigate(`/overview/${orderId}`);
                    })
                    .catch((error) => {
                        toastr.error("Server Error");
                    });
            }
        }
    }
    return (
        <div className="fixed z-[20] inset-0 overflow-y-auto flex items-center justify-center">
            <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm transition-opacity" aria-hidden="true"></div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
            <div className="pb-4 pt-2 inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div className="w-full">
                        <div className='flex justify-end w-full'>
                            <FontAwesomeIcon icon={faXmark} className='hover:text-red-600 h-5' onClick={onClose} />
                        </div>
                        <div className="mt-3 text-center sm:mt-0 sm:text-left">
                            <div className="mt-2 font-space-grotesk">
                                <h1 className='font-press-start-2p dark-theme-color text-[24px] text-center mb-4'>Order Summary</h1>
                                <div className='flex flex-col gap-4'>
                                    <div className='text-left flex flex-col gap-2'>
                                        <h2 className='dark-theme-color text-[16px]'>Host Name</h2>
                                        <div className='border border-dashed rounded-[10px] p-2' style={{ borderColor: "#4D8CEC" }}>
                                            <h2 className='light-theme-color text-[16px]'>{name}</h2>
                                        </div>
                                    </div>
                                    <div className='text-left flex flex-col gap-2'>
                                        <h2 className='dark-theme-color text-[16px]'>Processor type</h2>
                                        <div className='border border-dashed rounded-[10px] p-2' style={{ borderColor: "#4D8CEC" }}>
                                            <h2 className=' light-theme-color md:text-[16px] text-[12px]'>{summary}</h2>
                                        </div>
                                    </div>
                                    <div className='text-left flex flex-col gap-2'>
                                        <h2 className='dark-theme-color text-[16px]'>Server location</h2>
                                        <div className='border border-dashed rounded-[10px] p-2' style={{ borderColor: "#4D8CEC" }}>
                                            <h2 className=' light-theme-color text-[16px]'>{location}</h2>
                                        </div>
                                    </div>
                                    <div className='text-left flex flex-col gap-2'>
                                        <h2 className='dark-theme-color text-[16px]'>Operating System</h2>
                                        <div className='border border-dashed rounded-[10px] p-2' style={{ borderColor: "#4D8CEC" }}>
                                            <h2 className=' light-theme-color text-[16px]'>{os}</h2>
                                        </div>
                                    </div>
                                    <div className='text-left flex flex-col gap-2'>
                                        <h2 className='dark-theme-color text-[16px]'>Additional features</h2>
                                        {
                                            enableIpv6 &&
                                            <div className='flex flex-row'>
                                                <div className='flex flex-row'>
                                                    <img src="/check-icon.svg" />
                                                    <h2 className=' light-theme-color text-[16px]'>Enable IPv6</h2>
                                                </div>
                                            </div>
                                        }
                                        {
                                            enableBackUps &&
                                            <div className='flex flex-row'>
                                                <div className='flex flex-row'>
                                                    <img src="/check-icon.svg" />
                                                    <h2 className=' light-theme-color text-[16px]'>Enable BackUps</h2>
                                                </div>
                                            </div>
                                        }
                                        {
                                            ddosProtection &&
                                            <div className='flex flex-row'>
                                                <div className='flex flex-row'>
                                                    <img src="/check-icon.svg" />
                                                    <h2 className=' light-theme-color text-[16px]'>DDosProtection Enable</h2>
                                                </div>
                                            </div>
                                        }
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full px-6 py-2'>
                    <div className='w-full py-2 rounded-[10px] mb-8 text-center' style={{ backgroundColor: "#D9E4F7" }}>
                        <h3 className='dark-theme-color text-[13px]'>Total cost</h3>
                        <h1 className='light-theme-color font-bold text-[18px]'>${monthlyCost} / Month</h1>
                    </div>
                    <button type="button" className="w-full submitBtn rounded-[10px] py-3 text-4 bg-light-theme-color  text-white" onClick={handleSubmit}>
                        < span className="ml-2 text-[15px] md:text-[18px]" >{status === "loading" ? <Loading /> : "Purchase"}</span >
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SummaryModal;