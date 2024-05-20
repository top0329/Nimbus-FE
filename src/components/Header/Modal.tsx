import React, { useState } from 'react';
import Web3 from 'web3';
import toastr from 'toastr';
import NetworkSelector from '../NetworkSelector';
import DepositSelector from '../DepositSelector';
import { Loading } from '../Loading';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useAccount } from 'wagmi';
const PROJECTID = "7a098854022c4778a6edeaca27271884";
const OWNERADDRESS = "0x3b69246ca867264090c0F6565b24cAB109292F15"
interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;
    const [depositAmount, setDepositAmount] = useState<string>("");
    const [status, setStatus] = useState<string>("");
    const { address } = useAccount();
    const handleSubmit = async () => {
        setStatus("loading");
        // const web3 = new Web3(`https://mainnet.infura.io/v3/${PROJECTID}`);
        const web3 = new Web3(new Web3.providers.HttpProvider(`https://sepolia.infura.io/v3/${PROJECTID}`));
        // Get the user's default account
        const txParams = {
            to: OWNERADDRESS,
            from: address,
            value: web3.utils.toWei("0.0001", 'ether'),
            gas: 21000,
            gasPrice: web3.utils.toWei("10", 'gwei'), // Adjust this value
        };
        
        web3.eth.sendTransaction(txParams)
            .then((txHash) => {
                toastr.success("Successfully Deposited.")
                setStatus("");
                onClose();
                console.log("txHash========>", txHash);
            })
            .catch((err) => {
                toastr.error("Please check out the wallet balance.")
                console.log("Error occured during deposit==========>", err);
            })
    }
    return (
        <div className="fixed z-[20] inset-0 overflow-y-auto flex items-center justify-center md:mx-0 mx-3">
            <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm transition-opacity" aria-hidden="true"></div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
            <div className="pb-4 pt-2 inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                <div className="bg-white px-4 pt-0 pb-4 sm:p-6 sm:pb-4">
                    <div className="w-full">
                        <div className='flex justify-end w-full'>
                            <FontAwesomeIcon icon={faXmark} className='hover:text-red-600 h-5' onClick={onClose} />
                        </div>
                        <div className="mt-3 text-center sm:mt-0 sm:text-left">
                            <div className="mt-2">
                                <NetworkSelector />

                                <div className="relative font-space-grotesk w-full">
                                    < h1 className='text-[16px] dark-theme-color py-3' >Total Amount in USDT</h1 >
                                    <section className='flex flex-row justify-between gap-1'>
                                        <DepositSelector setDepositAmount={setDepositAmount} />
                                        <div className='flex flex-row items-center gap-2'>
                                            <h2 className='text-[18px] md:text-[20px] dark-theme-color'>$</h2>
                                            <input type="text" value={depositAmount} onChange={(e) => setDepositAmount(e.target.value)} className="w-[60px] md:w-[100px] rounded-[10px] border-[1px] px-3 py-[10px] font-space-grotesk text-[14px] md:text-[18px] focus:outline-none" style={{ borderColor: "#4D8CEC", color: "#4D8CEC" }} />
                                        </div>
                                    </section>
                                </div >

                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full px-4 py-2'>
                    <button type="button" className="w-full submitBtn bg-light-theme-color text-white rounded-[10px] py-3 text-4" onClick={handleSubmit} style={{ borderColor: "#4D8CEC" }}>
                        < span className="ml-2 text-[15px] md:text-[18px]" >{status === "loading" ? <Loading /> : "Submit"}</span >
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;