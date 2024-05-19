import React, { useState } from 'react';
import NetworkSelector from '../NetworkSelector';
import DepositSelector from '../DepositSelector';
import { Loading } from '../Loading';
interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;
    const [depositAmount, setDepositAmount] = useState<string>("");
    const [status, setStatus] = useState<string>("");
    const handleSubmit = () => {
        setStatus("loading");
        setTimeout(() => {
            setStatus("");
            onClose();
        }, 1000);
    }
    return (
        <div className="fixed z-[20] inset-0 overflow-y-auto flex items-center justify-center">
            <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm transition-opacity" aria-hidden="true"></div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
            <div className="py-4 inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div className="w-full">
                        <div className="mt-3 text-center sm:mt-0 sm:text-left">
                            <div className="mt-2">
                                <NetworkSelector />

                                <div className="relative font-space-grotesk w-full">
                                    < h1 className='text-[16px] dark-theme-color py-3' >Total Amount in USDT</h1 >
                                    <section className='flex flex-row justify-between gap-1'>
                                        <DepositSelector setDepositAmount={setDepositAmount} />
                                        <div className='flex flex-row items-center gap-2'>
                                            <h2 className='text-[20px] dark-theme-color'>$</h2>
                                            <input type="text" value={depositAmount} onChange={(e) => setDepositAmount(e.target.value)} className="w-[80px] md:w-[100px] rounded-[10px] border-[1px] px-3 py-[10px] font-space-grotesk text-[18px] focus:outline-none" style={{ borderColor: "#4D8CEC", color: "#4D8CEC" }} />
                                        </div>
                                    </section>
                                </div >

                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full px-4 py-2'>
                    <button type="button" className="w-full submitBtn border-dashed border rounded-[10px] py-3 text-4" onClick={handleSubmit} style={{ borderColor: "#4D8CEC" }}>
                        < span className="ml-2 text-[15px] md:text-[18px]" >{status === "loading" ? <Loading /> : "Submit"}</span >
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;