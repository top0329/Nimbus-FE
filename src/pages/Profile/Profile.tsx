import React from 'react';
import { useEffect, useRef } from 'react';
import { useAccount } from 'wagmi';
import { useNavigate } from 'react-router-dom';
import toastr from 'toastr';

import DefaultLayout from '../../layout/DefaultLayout';
import ProfileCard from './ProfileCard';


const Profile: React.FC = () => {
  const navigate = useNavigate();
  const { isConnected } = useAccount();
  const hasShownWarningRef = useRef(false); // Use a ref to track if warning has been shown

  useEffect(() => {
    if (!isConnected && !hasShownWarningRef.current) {
      toastr.warning("Please Connect the Wallet");
      hasShownWarningRef.current = true; // Mark the warning as shown using the ref
      navigate("/dashboard");
    }
  }, [isConnected, navigate]);

  return (
    <DefaultLayout>
      <div className="relative flex py-2 items-center justify-center px-0 md:px-[60px] w-full min-h-[600px] md:min-h-[800px] border-none box-border rounded-[26px] border-[1px] md:border-dashed" style={{ borderColor: '#4D8CEC', flex: "25%" }}>
        <img src="./cornerLB.svg" alt="img" className='absolute md:bottom-0 bottom-[-80px] left-0 h-[50%] w-[100%] md:w-[50%] z-0' />
        <img src="./cornerRT.svg" alt="img" className='absolute top-0 right-0 h-[50%] w-[50%] z-0' />
        <ProfileCard />
      </div >
    </DefaultLayout>
  );
};

export default Profile;
