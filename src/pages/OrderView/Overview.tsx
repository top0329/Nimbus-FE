import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import toastr from "toastr";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, faCopy, faAsterisk } from '@fortawesome/free-solid-svg-icons';
import DefaultLayout from "../../layout/DefaultLayout";
import { useParams } from "react-router-dom";
import { useAccount } from "wagmi";
import { ENDPOINT } from "../../data";

const Overview: React.FC = () => {
    const hasShownWarningRef = useRef(false); // Use a ref to track if warning has been shown
    const orderId = useParams<{ id: string }>();
    const [node, setNode] = useState<any>();
    const [publickey, setPublickey] = useState<string>();
    const { isConnected, address } = useAccount();
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const [showMessage, setShowMessage] = useState(false);
    const navigate = useNavigate();
    const handleSubmit = () => {
        axios.put(`${ENDPOINT}/api/order/update/publickey/${address}`,
            {
                publickey: publickey,
                orderId: orderId?.id
            },
            {
                headers: {
                    'Content-type': "application/json"
                },
            }
        ).then((result) => {
            toastr.success("Activating...\nPlease wait.");
        }).catch(err => {
            toastr.error("Server Error.");
        })
    }
    useEffect(() => {
        if (isConnected && !hasShownWarningRef.current) {
            //Backend Fetch & Register
            axios.get(`${ENDPOINT}/api/order/${address}?orderId=${orderId?.id}`)
                .then(response => {
                    setNode(response.data);
                })
                .catch(error => {
                    toastr.error("Server Disconnected.");
                })
        }
        hasShownWarningRef.current = true;
    }, [isConnected]);
    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    const copyToClipboard = async (text: any) => {
        try {
            await navigator.clipboard.writeText(text);
            setShowMessage(true);
            setTimeout(() => setShowMessage(false), 500); // Hide the message after 1.5 seconds
        } catch (err) {
            toastr.error("Something went wrong...")
        }
    };
    return (
        <DefaultLayout>
            <div className="flex flex-col w-full">
                <div className="flex flex-row pb-10 gap-[30px]">
                    <div className="border-[1px] border-dashed rounded-[12px] p-2 grow-0">
                        <img src="/unjs_uncrypto.svg" alt="icon" className="h-[50px] w-[50px]" />
                    </div>
                    <div className="flex flex-col justify-between">
                        <h1 className="text-[20px] font-space-grotesk light-theme-color">{node?.hostname}</h1>
                        <div className="flex flex-col md:flex-row-reverse">
                            <div className="flex flex-row">
                                <h2 className="md:text-[20px] md:block hidden text-[16px] font-space-grotesk light-theme-color">&nbsp;&nbsp;//&nbsp;&nbsp;</h2>
                                <h2 className="md:text-[20px] text-[16px] font-space-grotesk dark-theme-color">Created {(Math.floor((new Date().setHours(0, 0, 0, 0) - new Date(node?.startDate).setHours(0, 0, 0, 0)) / (1000 * 60 * 60 * 24)))} days ago</h2>
                            </div>
                            <div className="flex flex-row">
                                <h2 className="md:text-[20px] text-[16px] font-space-grotesk dark-theme-color">{node?.locationDetail}</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="h-[4px] light-theme-color" />
                <h1 className="font-press-start-2p light-theme-color text-[24px] py-10">Overview</h1>
                <div className="flex flex-row flex-wrap gap-[40px] font-space-grotesk">
                    <div className="flex flex-col gap-[30px] flex-[100%] md:flex-[30%] font-space-grotesk">
                        <div className="flex flex-col gap-3" >
                            <h2>Bandwidth Usage</h2>
                            <div className="bg-white font-press-start-2p light-theme-color text-[20px] text-center border-[1px] border-dashed rounded-[12px] p-5">
                                -GB
                            </div>
                        </div>
                        <div className="flex flex-row text-left gap-2">
                            <h3 className="dark-theme-color text-[20px] w-[50%]">Location:</h3>
                            <h3 className="light-theme-color text-[20px]">{node?.locationDetail}</h3>
                        </div>
                        <div className="flex flex-row text-left gap-2">
                            <h3 className="dark-theme-color text-[20px] w-[50%]">Username:</h3>
                            <h3 className="light-theme-color text-[20px]">{node?.user_scheme}</h3>
                        </div>
                        {
                            node?.serviceType == "GPU" ? (
                                <div className="flex flex-row text-left gap-2">
                                    <h3 className="dark-theme-color text-[20px] w-[50%]">SSH Connect:</h3>
                                    <h3 className="light-theme-color text-[20px]">{node?.direct_connect}</h3>
                                </div>
                            ) : (
                                <>
                                    <div className="flex flex-row text-left gap-2">
                                        <h3 className="dark-theme-color text-[20px] w-[50%]">IP Address:</h3>
                                        <h3 className="light-theme-color text-[20px]">{node?.main_ip}</h3>
                                    </div>
                                    <div className="flex flex-row text-left items-center gap-2">
                                        <h3 className="dark-theme-color text-[20px] w-[50%]">Password:</h3>
                                        <div className="flex flex-row items-center">
                                            <div className="w-[100px] overflow-hidden mr-2">
                                                {
                                                    isVisible ?
                                                        (<h2 className="light-theme-color text-[16px]">{node?.default_password}</h2>) : (
                                                            <>
                                                                <FontAwesomeIcon icon={faAsterisk} className="light-theme-color h-[12px] w-[12px]" />
                                                                <FontAwesomeIcon icon={faAsterisk} className="light-theme-color h-[12px] w-[12px]" />
                                                                <FontAwesomeIcon icon={faAsterisk} className="light-theme-color h-[12px] w-[12px]" />
                                                                <FontAwesomeIcon icon={faAsterisk} className="light-theme-color h-[12px] w-[12px]" />
                                                                <FontAwesomeIcon icon={faAsterisk} className="light-theme-color h-[12px] w-[12px]" />
                                                                <FontAwesomeIcon icon={faAsterisk} className="light-theme-color h-[12px] w-[12px]" />
                                                                <FontAwesomeIcon icon={faAsterisk} className="light-theme-color h-[12px] w-[12px]" />
                                                            </>
                                                        )
                                                }
                                            </div>
                                            <div className="flex flex-row gap-3 items-center">
                                                {
                                                    isVisible ?
                                                        <FontAwesomeIcon onClick={toggleVisibility} icon={faEyeSlash} className="light-theme-color cursor-pointer" />
                                                        :
                                                        <FontAwesomeIcon onClick={toggleVisibility} icon={faEye} className="light-theme-color cursor-pointer" />
                                                }
                                                <div className="relative">
                                                    <FontAwesomeIcon icon={faCopy} className="light-theme-color cursor-pointer" onClick={() => copyToClipboard(node?.default_password)} />
                                                    {showMessage && (
                                                        <div className="absolute bottom-[25px] right-[10px] w-[80px] light-theme-color border border-dashed shadow-md p-1 rounded mt-0 transition-opacity">
                                                            copied !
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        }
                    </div>
                    <div className="flex flex-col gap-[30px] flex-[100%] md:flex-[30%]">
                        <div className="flex flex-col gap-3">
                            <h2>vCPU Usage</h2>
                            <div className="bg-white light-theme-color font-press-start-2p text-[20px] text-center border-[1px] border-dashed rounded-[12px] p-5">
                                -%
                            </div>
                        </div>
                        <div className="flex flex-row text-left">
                            <h3 className="dark-theme-color text-[20px] font-space-grotesk w-[50%]">vCPU/s:</h3>
                            <h3 className="light-theme-color text-[20px] font-space-grotesk">{node?.vcpu_count} vCPUs</h3>
                        </div>
                        <div className="flex flex-row text-left">
                            <h3 className="dark-theme-color text-[20px] font-space-grotesk w-[50%]">RAM:</h3>
                            <h3 className="light-theme-color text-[20px] font-space-grotesk">{node?.ram} MB</h3>
                        </div>
                        <div className="flex flex-row text-left">
                            <h3 className="dark-theme-color text-[20px] font-space-grotesk w-[50%]">Storage:</h3>
                            <h3 className="light-theme-color text-[20px] font-space-grotesk">{node?.disk} GB</h3>
                        </div>
                        <div className="flex flex-row text-left">
                            <h3 className="dark-theme-color text-[20px] font-space-grotesk w-[50%]">Bandwidth:</h3>
                            <h3 className="light-theme-color text-[20px] font-space-grotesk4TB" >{node?.allowed_bandwidth}TB</h3>
                        </div>
                    </div>
                    <div className="flex flex-col gap-[30px] flex-[100%] md:flex-[30%]">
                        <div className="flex flex-col gap-3">
                            <h2>Cost</h2>
                            <div className="bg-white light-theme-color font-press-start-2p text-[20px] text-center border-[1px] border-dashed rounded-[12px] p-5">
                                ${node?.monthlyCost}
                            </div>
                        </div>
                        <div className="flex flex-row text-left">
                            <h3 className="dark-theme-color text-[20px] font-space-grotesk w-[50%]">Label:</h3>
                            <h3 className="light-theme-color text-[20px] font-space-grotesk">{node?.label}</h3>
                        </div>
                        <div className="flex flex-row text-left">
                            <h3 className="dark-theme-color text-[20px] font-space-grotesk w-[50%]">OS:</h3>
                            <h3 className="light-theme-color text-[20px] font-space-grotesk">{node?.os}</h3>
                        </div>
                        <div className="flex flex-row text-left">
                            <h3 className="dark-theme-color text-[20px] font-space-grotesk w-[50%]">Status:</h3>
                            <h3 className="light-theme-color text-[20px] font-space-grotesk">{node?.status}</h3>
                        </div>
                    </div>
                </div>
                {
                    (node?.status == "pending" && node?.serviceType == "GPU") &&
                    <div className="flex flex-row gap-4 w-full justify-center mt-4">
                        <div className="font-space-grotesk">
                            <input type="text" value={publickey} onChange={(e) => setPublickey(e.target.value)} placeholder="Public SSH Key" className="border border-dashed rounded-[10px] light-theme-color text-[16px] py-3 px-2 customInput bg-transparent focus:outline-none" style={{ borderColor: "#4D8CEC" }}></input>
                        </div>
                        <button onClick={handleSubmit} className='self-end customBtn text-[18px] h-[48px] rounded-[15px] text-white w-full font-space-grotesk md:w-[30%]' style={{ backgroundColor: "#4D8CEC" }}>
                            Submit
                        </button>
                    </div>
                }
                {
                    node?.status == "pending" &&
                    (
                        node?.serviceType == "GPU" ? (
                            <div className="flex flex-col gap-2 text-[20px] py-[15px] px-[30px] mt-[10px] rounded-[24px] dark-theme-color font-space-grotesk"
                                style={{ backgroundColor: "#fdf5e6" }}
                            >
                                <h1 className="md:text-[20px]">👋Dear valued customer,</h1>
                                <p className=" leading-7 ">Please submit your Public SSH key and wait for your node status to become active.<br />
                                    Due to our beta version, it may take 10 to 30 minutes for your order to be approved.<br />
                                    Kindly check your node status on your profile page for updates.<br />
                                </p>
                                <div className="flex flex-row gap-2">
                                    <img src="/telegram.svg" alt="icon" className='h-[28px]' />
                                    <a href="https://t.me/+D0VlHqtqG243ZmQ0" className="underline hover:opacity-80">Contact us on telegram for any queries</a><br />
                                </div>
                                Thank you for your understanding.
                            </div>
                        ) : (
                            <div className="flex flex-col gap-2 text-[20px] py-[15px] px-[30px] mt-[10px] rounded-[24px] dark-theme-color font-space-grotesk"
                                style={{ backgroundColor: "#fdf5e6" }}
                            >
                                <h1 className="md:text-[20px]">👋Dear valued customer,</h1>
                                <p className=" leading-7 ">Please note that due to our beta version, your order may take 10-15 minutes to be approved.<br />
                                    Kindly check your <b className="cursor-pointer hover:opacity-70 underline" onClick={() => navigate('/profile')}>Profile</b> page for updates.<br />
                                    Thank you for your understanding.<br />
                                </p>
                                <div className="flex flex-row gap-2">
                                    <img src="/telegram.svg" alt="icon" className='h-[28px]' />
                                    <a href="https://t.me/+D0VlHqtqG243ZmQ0" className="underline hover:opacity-80">Contact us on telegram for any queries</a><br />
                                </div>
                                Thank you for your understanding.
                            </div>
                        )
                    )
                }
            </div>
        </DefaultLayout >
    )
}
export default Overview;