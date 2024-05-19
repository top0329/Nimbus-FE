import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Loading } from '../../components/Loading';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}
interface orderSummary {
    instanceType: string;
    instanceDetail: string;
    location: string;
    

}

const Summary: React.FC<ModalProps> = ({ isOpen, onClose }) => {

    //instanceType
    const instanceType = 'nvidia';
    const instanceDetail = '';
    const location = ''




    const navigate = useNavigate();
    if (!isOpen) return null;
    const [status, setStatus] = useState<string>("");
    const handleSubmit = () => {
        setStatus("loading");
        setTimeout(() => {
            setStatus("");
            onClose();
        }, 1000);
        navigate('/overview');
    }
    return (
        <div className="fixed z-[20] inset-0 overflow-y-auto flex items-center justify-center">
            <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm transition-opacity" aria-hidden="true"></div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
            <div className="py-4 inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div className="w-full">
                        <div className="mt-3 text-center sm:mt-0 sm:text-left">
                            <div className="mt-2 font-space-grotesk">
                                <h1 className='font-press-start-2p dark-theme-color text-[24px] text-center mb-4'>Order Summary</h1>
                                <div className='flex flex-col gap-4'>
                                    <div className='text-left flex flex-col gap-2'>
                                        <h2 className='dark-theme-color text-[16px]'>Processor type</h2>
                                        <div className='border border-dashed rounded-[10px] p-2' style={{ borderColor: "#4D8CEC" }}>
                                            <h2 className='light-theme-color text-[16px]'>nvidia</h2>
                                        </div>
                                    </div>
                                    <div className='text-left flex flex-col gap-2'>
                                        <h2 className='dark-theme-color text-[16px]'>Processor type</h2>
                                        <div className='border border-dashed rounded-[10px] p-2' style={{ borderColor: "#4D8CEC" }}>
                                            <h2 className=' light-theme-color text-[16px]'>nvidia</h2>
                                        </div>
                                    </div>
                                    <div className='text-left flex flex-col gap-2'>
                                        <h2 className='dark-theme-color text-[16px]'>Server location</h2>
                                        <div className='border border-dashed rounded-[10px] p-2' style={{ borderColor: "#4D8CEC" }}>
                                            <h2 className=' light-theme-color text-[16px]'>Operating system</h2>
                                        </div>
                                    </div>
                                    <div className='text-left flex flex-col gap-2'>
                                        <h2 className='dark-theme-color text-[16px]'>Order Summary</h2>
                                        <div className='border border-dashed rounded-[10px] p-2' style={{ borderColor: "#4D8CEC" }}>
                                            <h2 className=' light-theme-color text-[16px]'>nvidia</h2>
                                        </div>
                                    </div>
                                    <div className='text-left flex flex-col gap-2'>
                                        <h2 className='dark-theme-color text-[16px]'>Additional features</h2>
                                        <div className='flex flex-row'>
                                            <div className='flex flex-row'>
                                                <img src="/check-icon.svg" />
                                                <h2 className=' light-theme-color text-[16px]'>Enable IPv6</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full px-6 py-2'>
                    <div className='w-full py-2 rounded-[10px] mb-8 text-center' style={{ backgroundColor: "#D9E4F7" }}>
                        <h3 className='dark-theme-color text-[13px]'>Total cost</h3>
                        <h1 className='light-theme-color font-bold text-[18px]'>$1050/month</h1>
                    </div>
                    <button type="button" className="w-full submitBtn rounded-[10px] py-3 text-4 bg-light-theme-color  text-white" onClick={handleSubmit}>
                        < span className="ml-2 text-[15px] md:text-[18px]" >{status === "loading" ? <Loading /> : "Purchase"}</span >
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Summary;