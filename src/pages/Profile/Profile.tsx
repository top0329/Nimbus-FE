import React, { useEffect, useRef } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';

import DefaultLayout from '../../layout/DefaultLayout';
import ProfileCard from './ProfileCard';
import { useAccount } from 'wagmi';
import { addOrder } from '../../Redux/Reducers/orderSlice';

// const ENDPOINT = 'http://localhost:5000';
const ENDPOINT = 'http://149.248.9.67:5000';
const Profile: React.FC = () => {

  const hasShownWarningRef = useRef(false); // Use a ref to track if warning has been shown
  const dispatch = useDispatch();
  const { isConnected, address } = useAccount();

  useEffect(() => {
    if (isConnected && !hasShownWarningRef.current) {
      //Backend Fetch & Register
      axios.post(`${ENDPOINT}/api/user/nodes/${address}`)
        .then(response => {
          const { nodes } = response.data.nodes;
          dispatch(addOrder(nodes));
        })
        .catch(error => {
          toastr.error("Server Disconnected.");
        })
    }
    hasShownWarningRef.current = true;
  }, [isConnected]);

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
