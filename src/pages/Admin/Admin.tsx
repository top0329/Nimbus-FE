import React, { useEffect, useState } from 'react';
import axios from 'axios';
import toastr from 'toastr';
import DefaultLayout from '../../layout/DefaultLayout';
import { useAccount } from 'wagmi';
import { useNavigate } from 'react-router-dom';
import { ENDPOINT } from '../../data';

const Admin: React.FC = () => {
  const navigate = useNavigate();
  const { address, isConnected } = useAccount();
  const [wallet, setWallet] = useState<any>("");
  const [orderId, setOrderId] = useState<any>("");
  const [direct_connect, setDirectConnect] = useState<any>("");
  const [proxy_connect, setProxyConnect] = useState<any>("");
  const [default_password, setPassword] = useState<any>("");
  const [main_ip, setMainIp] = useState<any>("");
  const handleSibmit_GPU = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    //validate break point
    if (wallet && direct_connect && orderId) {
      const payload = {
        direct_connect,
        proxy_connect,
        orderId
      };
      await axios.put(`${ENDPOINT}/api/order/update/gpu/${wallet}`, payload, {
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
  const handleSibmit_CPU = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    //validate break point
    if (wallet && default_password && main_ip) {
      const payload = {
        default_password,
        main_ip,
        orderId
      }
      await axios.put(`${ENDPOINT}/api/order/update/cpu/${wallet}`, payload, {
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
    if (address == "0xDc0197708e59295E982928Ec23444A3B8B015677" || address == "0xBBa3114Ca655ed1F5C2eDea6cA72Eb5BB303a520") {
      toastr.success("You are an Administrator.")
    }
    else {
      navigate("/dashboard");
    }
  }, [isConnected]);

  return (
    <DefaultLayout>
      <div className="relative z-0 flex flex-col items-center py-0 md:py-[30px] min-h-[600px] md:min-h-[500px] justify-between px-2 lg:px-[60px] w-full box-border rounded-[26px] border-[1px] border-dashed" style={{ borderColor: '#4D8CEC', flex: "25%" }}>
        <img src="/cornerLB.svg" alt="img" className='absolute bottom-0 left-0 h-[50%] w-[100%] md:w-[50%] z-0' />
        <img src="/cornerRT.svg" alt="img" className='absolute top-0 right-0 h-[50%] w-[50%] z-0' />
        <div className='flex flex-row w-full gap-10 h-full z-0 mt-[50px]'>
          <div className='flex flex-col w-full gap-4'>
            <h1 className='text-[24px] dark-theme-color mb-[20px] w-full font-press-start-2p'>CPU Order</h1>
            <div className="font-space-grotesk w-full">
              <h1 className='text-[20px] dark-theme-color mb-[20px] w-full'>Wallet Address<span className=' text-red-700'>*</span></h1>
              <input type="text" value={wallet} onChange={(e) => setWallet(e.target.value)} placeholder="0x..." className="w-full border border-dashed rounded-[10px] light-theme-color text-[16px] py-3 px-2 customInput bg-transparent focus:outline-none" style={{ borderColor: "#4D8CEC" }}></input>
            </div>
            <div className="font-space-grotesk w-full">
              <h1 className='text-[20px] dark-theme-color mb-[20px]'>Order Id<span className=' text-red-700'>*</span></h1>
              <input type="text" value={orderId} onChange={(e) => setOrderId(e.target.value)} placeholder="0x..." className="w-full border border-dashed rounded-[10px] light-theme-color text-[16px] py-3 px-2 customInput bg-transparent focus:outline-none" style={{ borderColor: "#4D8CEC" }}></input>
            </div>
            <div className="font-space-grotesk w-full">
              <h1 className='text-[20px] dark-theme-color mb-[20px]'>IP Address<span className=' text-red-700'>*</span></h1>
              <input type="text" value={main_ip} onChange={(e) => setMainIp(e.target.value)} placeholder="0.0.0.0" className="w-full border border-dashed rounded-[10px] light-theme-color text-[16px] py-3 px-2 customInput bg-transparent focus:outline-none" style={{ borderColor: "#4D8CEC" }}></input>
            </div>
            <div className="font-space-grotesk w-full">
              <h1 className='text-[20px] dark-theme-color mb-[20px]'>Password<span className=' text-red-700'>*</span></h1>
              <input type="text" value={default_password} onChange={(e) => setPassword(e.target.value)} placeholder="j$X25Umf,cNw}F!p" className="w-full border border-dashed rounded-[10px] light-theme-color text-[16px] py-3 px-2 customInput bg-transparent focus:outline-none" style={{ borderColor: "#4D8CEC" }}></input>
            </div>
            <button onClick={handleSibmit_CPU} className='z-0 customBtn text-[18px] h-[48px] rounded-[15px] text-white w-full font-space-grotesk' style={{ backgroundColor: "#4D8CEC" }}>
              Submit
            </button>
          </div>
          <div className='flex flex-col w-full gap-4'>
            <h1 className='text-[24px] dark-theme-color mb-[20px] w-full font-press-start-2p'>GPU  Order</h1>
            <div className="font-space-grotesk w-full">
              <h1 className='text-[20px] dark-theme-color mb-[20px] w-full'>Wallet Address<span className=' text-red-700'>*</span></h1>
              <input type="text" value={wallet} onChange={(e) => setWallet(e.target.value)} placeholder="0x..." className="w-full border border-dashed rounded-[10px] light-theme-color text-[16px] py-3 px-2 customInput bg-transparent focus:outline-none" style={{ borderColor: "#4D8CEC" }}></input>
            </div>
            <div className="font-space-grotesk w-full">
              <h1 className='text-[20px] dark-theme-color mb-[20px]'>Order Id<span className=' text-red-700'>*</span></h1>
              <input type="text" value={orderId} onChange={(e) => setOrderId(e.target.value)} placeholder="0x..." className="w-full border border-dashed rounded-[10px] light-theme-color text-[16px] py-3 px-2 customInput bg-transparent focus:outline-none" style={{ borderColor: "#4D8CEC" }}></input>
            </div>
            <div className="font-space-grotesk w-full">
              <h1 className='text-[20px] dark-theme-color mb-[20px]'>SSH Connect<span className=' text-red-700'>*</span></h1>
              <input type="text" value={direct_connect} onChange={(e) => setDirectConnect(e.target.value)} placeholder="ssh-j$X25Umf,cNw}F!p" className="w-full border border-dashed rounded-[10px] light-theme-color text-[16px] py-3 px-2 customInput bg-transparent focus:outline-none" style={{ borderColor: "#4D8CEC" }}></input>
            </div>
            <button onClick={handleSibmit_GPU} className='z-0 customBtn text-[18px] h-[48px] rounded-[15px] text-white w-full font-space-grotesk' style={{ backgroundColor: "#4D8CEC" }}>
              Submit
            </button>
          </div>
        </div>
      </div >
    </DefaultLayout>
  );
};

export default Admin;
