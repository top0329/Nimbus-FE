import React from 'react';
import AssetCard from './AssetCard';
import DefaultLayout from '../../layout/DefaultLayout';
import { data } from '../../data';

import { useEffect, useRef } from 'react';
import { useAccount } from 'wagmi';
import { useNavigate } from 'react-router-dom';
import toastr from 'toastr';
const Rent: React.FC = () => {
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
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-10 xl:grid-cols-3 2xl:gap-10 2xl:grid-cols-4">
        {
          data.assets.map((item, index) => (
            <AssetCard key={index} instanceId={item.id} img={item.img} name={item.name} desc={item.desc} />
          ))
        }
      </div>
    </DefaultLayout>
  );
};

export default Rent;
