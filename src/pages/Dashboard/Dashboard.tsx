import React from 'react';
import { useEffect, useRef } from 'react';
import { useAccount } from 'wagmi';
import toastr from 'toastr';
import { useDispatch } from 'react-redux';
import { addUserInfo } from '../../Redux/Reducers/userSlice';
import axios from 'axios';

import WelcomeCard from './WelcomCard';
import LocationCard from './LocationCard';
import DefaultLayout from '../../layout/DefaultLayout';

const ENDPOINT = 'http://localhost:5000';
const Dashboard: React.FC = () => {
  const { address, isConnected } = useAccount();
  const hasShownWarningRef = useRef(false); // Use a ref to track if warning has been shown
  const dispatch = useDispatch();
  useEffect(() => {
    if (isConnected && !hasShownWarningRef.current) {
      //Backend Fetch & Register
      axios.post(`${ENDPOINT}/api/user/${address}`)
        .then(response => {
          const { avatar, balance, wallet, nodes } = response.data.user;
          dispatch(addUserInfo(
            {
              address: wallet,
              avatar,
              balance
            }
          ))
          console.log("====>userData", wallet);
        })
        .catch(error => {
          toastr.error("Server Disconnected.");
        })

    }
  }, [isConnected]);

  return (
    <DefaultLayout>
      <div className="w-full flex flex-col gap-4 items-center" style={{ color: "#4D8CEC" }}>
        <WelcomeCard />
        <LocationCard />
      </div>
    </DefaultLayout>
  );
};

export default Dashboard;
