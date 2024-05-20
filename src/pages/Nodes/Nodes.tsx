import React from 'react';
import { useEffect, useRef } from 'react';
import { useAccount } from 'wagmi';
import { useNavigate } from 'react-router-dom';
import toastr from 'toastr';

import DefaultLayout from '../../layout/DefaultLayout';
import NodeCard from './NodeCard';

const Nodes: React.FC = () => {
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
      <div className="relative flex items-center justify-center py-8 md:py-2 w-full min-h-[600px] box-border rounded-[26px] border-[1px] border-dashed" style={{ borderColor: '#4D8CEC' }}>
        <img src="./cornerLB.svg" alt="img" className='absolute md:bottom-0 bottom-[-80px] left-0 h-[50%] w-[100%] md:w-[50%] z-0' />
        <img src="./cornerRT.svg" alt="img" className='absolute top-0 right-0 h-[50%] w-0 md:w-[50%] z-0' />
        <NodeCard />
      </div >
    </DefaultLayout>
  );
};

export default Nodes;
