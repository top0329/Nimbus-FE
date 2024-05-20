import React from 'react';
import { useEffect, useRef } from 'react';
import { useAccount } from 'wagmi';
import { useNavigate } from 'react-router-dom';
import toastr from 'toastr';
import DefaultLayout from '../../layout/DefaultLayout';
import SupportCard from './SupportCard';

const Support: React.FC = () => {
  const navigate = useNavigate();
  const { isConnected } = useAccount();
  const hasShownWarningRef = useRef(false); // Use a ref to track if warning has been shown

  // useEffect(() => {
  //   if (!isConnected && !hasShownWarningRef.current) {
  //     toastr.warning("Please Connect the Wallet");
  //     hasShownWarningRef.current = true; // Mark the warning as shown using the ref
  //     navigate("/dashboard");
  //   }
  // }, [isConnected, navigate]);
  return (
    <DefaultLayout>
      <div className="relative z-0 flex flex-col items-center py-0 md:py-[30px] min-h-[600px] md:min-h-[500px] justify-between px-2 lg:px-[60px] w-full box-border rounded-[26px] border-[1px] border-dashed" style={{ borderColor: '#4D8CEC', flex: "25%" }}>
        <img src="./cornerLB.svg" alt="img" className='absolute bottom-0 left-0 h-[50%] w-[100%] md:w-[50%] z-0' />
        <img src="./cornerRT.svg" alt="img" className='absolute top-0 right-0 h-[50%] w-[50%] z-0' />
        <SupportCard />
      </div >
    </DefaultLayout>
  );
};

export default Support;
