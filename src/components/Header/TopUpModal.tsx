import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import toastr from 'toastr';
import NetworkSelectBox from '../NetworkSelectBox';
import DepositSelector from '../DepositSelector';
import { Loading } from '../Loading';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useAccount, useSendTransaction } from 'wagmi';
import { updateBalance } from '../../Redux/Reducers/userSlice';
import axios from 'axios';
// const ENDPOINT = "http://localhost:5000";
const ENDPOINT = 'http://149.248.9.67:5000';

const OWNERADDRESS = "0x3b69246ca867264090c0F6565b24cAB109292F15";
interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}
interface CoinGeckoApiResponse {
    ethereum: {
        usd: number;
    };
}
async function fetchUsdToEthRate(): Promise<number> {
    const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd');
    const data: CoinGeckoApiResponse = await response.json();
    return data.ethereum.usd;
}
function calculateEthFromUsd(usdAmount: number, usdToEthRate: number): number {
    return usdAmount / usdToEthRate;
}
const TopUpModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;
    const [depositAmount, setDepositAmount] = useState<string>("");
    const [status, setStatus] = useState<string>("");
    const { address } = useAccount();
    const { sendTransaction, isLoading, isSuccess, isError, isIdle } = useSendTransaction()
    const hasShownWarningRef = useRef(false);
    const dispatch = useDispatch();
    const userInfo = useSelector((state: any) => state.user);

    const handleSubmit = async () => {
        setStatus("loading");
        const usdToEthRate = await fetchUsdToEthRate();
        let ethAmount = calculateEthFromUsd(parseInt(depositAmount), usdToEthRate);
        const weiAmount = BigInt(Math.floor(ethAmount * 1e18));
        const transaction = {
            to: OWNERADDRESS,
            from: address,
            value: weiAmount,
        };
        sendTransaction(transaction);
    }
    useEffect(() => {

        if (isSuccess && !hasShownWarningRef.current) {
            const newBalance = (parseFloat(depositAmount) + userInfo.balance);
            axios.put(`${ENDPOINT}/api/user/${address}`, { newBalance })
                .then(response => {
                    dispatch(updateBalance(
                        {
                            balance: newBalance
                        }
                    ))
                    setStatus("");
                    onClose();
                    toastr.success("Successfully Deposited.");
                })
                .catch(error => {
                    setStatus("");
                    toastr.error("Server Disconnected.");
                })
        }
        if (isError && !hasShownWarningRef.current) {
            toastr.error("Please check out the Wallet Balance.");
            setStatus("")
        }
    }, [isSuccess, isError, isIdle])

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
                                <NetworkSelectBox />

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
                    <button disabled={isLoading} type="button" className="w-full submitBtn bg-light-theme-color text-white rounded-[10px] py-3 text-4" onClick={handleSubmit} style={{ borderColor: "#4D8CEC" }}>
                        < span className="ml-2 text-[15px] md:text-[18px]" >{status === "loading" ? <Loading /> : "Submit"}</span >
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TopUpModal;