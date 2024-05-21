import React, { useEffect, useState, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import axios from 'axios';
import toastr from 'toastr';

import { addUserInfo } from '../Redux/Reducers/userSlice';
// import {addin}

import Header from '../components/Header/index';
import Sidebar from '../components/Sidebar/index';
import { useAccount } from 'wagmi';
import { useDispatch } from 'react-redux';


const ENDPOINT = 'http://localhost:5000';

const DefaultLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const hasShownWarningRef = useRef(false); // Use a ref to track if warning has been shown
  const dispatch = useDispatch();
  const { isConnected, address } = useAccount();
  const navigate = useNavigate();

  useEffect(() => {
    if (isConnected && !hasShownWarningRef.current) {
      //Backend Fetch & Register
      axios.post(`${ENDPOINT}/api/user/${address}`)
        .then(response => {
          const { avatar, balance, wallet } = response.data.user;
          console.log("Succefully UserInfo");
          dispatch(addUserInfo(
            {
              address: wallet,
              avatar,
              balance
            }
          ));
          hasShownWarningRef.current = true; // Mark the warning as shown using the ref
        })
        .catch(err => {
          toastr.error("Server Disconnected.");
          navigate("/dashboard");
        })
    }
    // if (!isConnected && !hasShownWarningRef.current) {
    //   toastr.warning("Please Connect the Wallet");
    //   hasShownWarningRef.current = true; // Mark the warning as shown using the ref
    //   navigate("/dashboard");
    // }
  }, [isConnected]);

  return (
    <div className="dark:bg-boxdark-2 dark:text-bodydark">
      <div className="flex flex-col h-auto sm:h-screen md:h-screen lg:h-screen overflow-hidden">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="flex flex-1 flex-row overflow-hidden">
          <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          <main className='flex flex-1 py-[30px] px-[30px] overflow-x-hidden custom-scrollbar' style={{ backgroundColor: "#F5FAFF" }}>
            {children}
          </main>
        </div>
      </div>
    </div>
  );
};

export default DefaultLayout;
