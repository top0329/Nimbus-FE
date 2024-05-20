import React, { useState, ReactNode } from 'react';

import Header from '../components/Header/index';
import Sidebar from '../components/Sidebar/index';

const DefaultLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

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
