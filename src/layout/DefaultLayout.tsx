import React, { useState, useEffect, ReactNode } from 'react';
import toastr from "toastr";
import axios from 'axios';
import Header from '../components/Header/index';
import Sidebar from '../components/Sidebar/index';
import { useDispatch } from 'react-redux';
import { addUserInfo } from '../Redux/Reducers/userSlice';
import { useAccount } from 'wagmi'

const ENDPOINT = 'http://localhost:5000';
const DefaultLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { address, isConnected } = useAccount();

  const dispatch = useDispatch();
  useEffect(() => {
    if (isConnected) {
      //Backend Fetch & Register
      axios.post(`${ENDPOINT}/${address}`)
        .then(response => {
          const payload = {
            avatar: "./",
            address,
            balance: 0
          };
          dispatch(addUserInfo(payload));
        })
        .catch(error => {
          toastr.error("Server Disconnected.");
        })

    }
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
