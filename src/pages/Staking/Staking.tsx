import React from 'react';
import { useEffect, useRef } from 'react';
import { useAccount } from 'wagmi';
import { useNavigate } from 'react-router-dom';
import toastr from 'toastr';

import DefaultLayout from '../../layout/DefaultLayout';
import StakingCard from './StakingCard';

const Staking: React.FC = () => {
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
      <div className="relative flex items-center py-2 justify-center px-[30px] md:px-[60px] w-full min-h-[1000px] md:min-h-[900px] lg:min-h-[800px]  box-border rounded-[26px] border-[1px] border-dashed" style={{ borderColor: '#4D8CEC', flex: "25%" }}>
        <img src="./cornerLB.svg" alt="img" className='absolute bottom-0 left-0 h-[50%] w-[50%] z-[0]' />
        <img src="./cornerRT.svg" alt="img" className='absolute top-0 right-0 h-[50%] w-[50%] z-[0]' />
        <StakingCard />
      </div >
    </DefaultLayout>
  );
};

export default Staking;
