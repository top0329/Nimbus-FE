import React, { useEffect, useState } from 'react';
import axios from 'axios';
import toastr from 'toastr';
import DefaultLayout from '../../layout/DefaultLayout';
import { useAccount } from 'wagmi';
import { useNavigate } from 'react-router-dom';
const ENDPOINT = "http://localhost:5000";
// const ENDPOINT = 'http://149.248.9.67:5000';

const Admin: React.FC = () => {
  const navigate = useNavigate();
  const { address, isConnected } = useAccount();
  const [wallet, setWallet] = useState<any>("");
  const [orderId, setOrderId] = useState<any>("");
  const [password, setPassword] = useState<any>("");
  const [mainIp, setIp] = useState<any>("");
  const handleSibmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    //validate break point
    if (wallet && password && mainIp) {
      const payload = {
        password,
        mainIp,
        orderId
      }
      await axios.put(`${ENDPOINT}/api/order/update/${wallet}`, payload, {
        headers: {
          'Content-type': "application/json"
        },
      })
        .then((response) => {
          toastr.success("Succefully Updated!")
        })
        .catch((error) => {
          toastr.error("Server Error");
        });
    }
    else {
      toastr.error("All Input Required");
    }
  }
  useEffect(() => {
    if (address == "0xDc0197708e59295E982928Ec23444A3B8B015677" || address == "0x03966d64D440E1D6BbD3c1Ee58bA3b743C386A2f") {
      toastr.success("You are an Administrator.")
    }
    else {
      navigate("/dashboard");
    }
  }, [isConnected]);

  return (
    <DefaultLayout>
      <div className="relative z-0 flex flex-col items-center py-0 md:py-[30px] min-h-[600px] md:min-h-[500px] justify-between px-2 lg:px-[60px] w-full box-border rounded-[26px] border-[1px] border-dashed" style={{ borderColor: '#4D8CEC', flex: "25%" }}>
        <img src="./cornerLB.svg" alt="img" className='absolute bottom-0 left-0 h-[50%] w-[100%] md:w-[50%] z-0' />
        <img src="./cornerRT.svg" alt="img" className='absolute top-0 right-0 h-[50%] w-[50%] z-0' />
        <div className='flex flex-col w-full items-center gap-4 justify-center'>
          <div className="font-space-grotesk w-full">
            <h1 className='text-[20px] dark-theme-color mb-[20px] w-full'>Wallet Address<span className=' text-red-700'>*</span></h1>
            <input type="text" value={wallet} onChange={(e) => setWallet(e.target.value)} placeholder="0x..." className="w-full border border-dashed rounded-[10px] light-theme-color text-[16px] py-3 px-2 customInput bg-transparent focus:outline-none" style={{ borderColor: "#4D8CEC" }}></input>
          </div>
          <div className="font-space-grotesk w-full">
            <h1 className='text-[20px] dark-theme-color mb-[20px]'>Order Id<span className=' text-red-700'>*</span></h1>
            <input type="text" value={orderId} onChange={(e) => setOrderId(e.target.value)} placeholder="0x..." className="w-full border border-dashed rounded-[10px] light-theme-color text-[16px] py-3 px-2 customInput bg-transparent focus:outline-none" style={{ borderColor: "#4D8CEC" }}></input>
          </div>
          <div className="font-space-grotesk w-full">
            <h1 className='text-[20px] dark-theme-color mb-[20px]'>Password<span className=' text-red-700'>*</span></h1>
            <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="j$X25Umf,cNw}F!p" className="w-full border border-dashed rounded-[10px] light-theme-color text-[16px] py-3 px-2 customInput bg-transparent focus:outline-none" style={{ borderColor: "#4D8CEC" }}></input>
          </div>
          <div className="z-0 font-space-grotesk w-full">
            <h1 className='text-[20px] dark-theme-color mb-[20px]'>Server IP<span className=' text-red-700'>*</span></h1>
            <input type="text" value={mainIp} onChange={(e) => setIp(e.target.value)} placeholder="149.28.117.73" className="w-full border border-dashed rounded-[10px] light-theme-color text-[16px] py-3 px-2 customInput bg-transparent focus:outline-none" style={{ borderColor: "#4D8CEC" }}></input>
          </div>
          <button onClick={handleSibmit} className='z-0 customBtn text-[18px] h-[48px] rounded-[15px] text-white w-full font-space-grotesk' style={{ backgroundColor: "#4D8CEC" }}>
            Submit
          </button>
        </div>
      </div >
    </DefaultLayout>
  );
};

export default Admin;
