import { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useAccount, useBalance } from 'wagmi'
import { data } from '../../data';
import Identicon from "identicon.js";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {

  const { address, isConnected } = useAccount();
  const result = useBalance({ address: address });
  const balance = parseFloat(result.data?.formatted).toFixed(3);
  const symbol = result.data?.symbol;
  const user = useSelector((state: any) => state.user);
  const location = useLocation();
  const { pathname } = location;
  const trigger = useRef<any>(null);
  const sidebar = useRef<any>(null);

  const storedSidebarExpanded = localStorage.getItem('sidebar-expanded');
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === 'true'
  );
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sidebar.current && !sidebar.current.contains(event.target as Node)) {
        setSidebarOpen(false);
      }
    };

    const handleFocusOutside = (event: FocusEvent) => {
      if (sidebar.current && !sidebar.current.contains(event.target as Node)) {
        setSidebarOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('focusin', handleFocusOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('focusin', handleFocusOutside);
    };
  }, [sidebarOpen]);
  useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  useEffect(() => {
    localStorage.setItem('sidebar-expanded', sidebarExpanded.toString());
    if (sidebarExpanded) {
      document.querySelector('body')?.classList.add('sidebar-expanded');
    } else {
      document.querySelector('body')?.classList.remove('sidebar-expanded');
    }
  }, [sidebarExpanded]);
  useEffect(() => {
    if (sidebarOpen) {
      document.body.classList.remove('overflow-x-hidden');
    } else {
      document.body.classList.add('overflow-x-hidden');
    }
  }, [sidebarOpen]);

  return (
    <aside
      ref={sidebar}
      className={`absolute right-0 top-0 flex md:z-0 z-1 md:h-full h-[650px] w-60 md:w-72.5  flex-col overflow-y-hidden bg-black duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 ${sidebarOpen ? 'translate-x-0' : 'translate-x-full'
        } py-0 md:py-[30px] mt-[20px] md:mt-0 pl-0 pr-0 md:pl-[30px] md:pr-[10px] font-space-grotesk text-[20px]`}
      style={{
        backgroundColor: "#F5FAFF",
        backdropFilter: "blur(10px)",
      }}
    >
      <div className="h-full box-border md:rounded-[26px] rounded-r-none rounded-l-[26px] border-[1px] border-dashed no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear justify-between" style={{ borderColor: '#4D8CEC' }}>
        <nav className="mt-5 py-4 md:mt-5">
          <div className="mb-6 flex flex-col gap-1.5">
            {
              data.SideBar.map((item, index) => (
                (<div key={index}>
                  <NavLink
                    to={`/${item.path}`}
                    className={`group relative flex items-center gap-2.5 rounded-sm font-medium text-bodydark1 duration-300 ease-in-out hover:bg-sky-300/35 dark:hover:bg-sky-300/35`}
                  >

                    {pathname.includes(item.path) ? (
                      item.path == 'admin' ? (
                        (address == "0xDc0197708e59295E982928Ec23444A3B8B015677" || address == "0xBBa3114Ca655ed1F5C2eDea6cA72Eb5BB303a520") &&
                        <>
                          <div className='border-l-[4px] w-[15px] h-[40px] mr-3' style={{ borderColor: "#4D8CEC" }} />
                          <img src={item.img} alt='icon' />
                          <span style={{ color: "#4D8CEC", fontWeight: "bold" }}>
                            {item.content}
                          </span>
                        </>
                      ) : (<>
                        <div className='border-l-[4px] w-[15px] h-[40px] mr-3' style={{ borderColor: "#4D8CEC" }} />
                        <img src={item.img} alt='icon' />
                        <span style={{ color: "#4D8CEC", fontWeight: "bold" }}>
                          {item.content}
                        </span>
                      </>)

                    )
                      :
                      (
                        <>
                          {item.path == 'admin' ? (
                            (address == "0xDc0197708e59295E982928Ec23444A3B8B015677" || address == "0xBBa3114Ca655ed1F5C2eDea6cA72Eb5BB303a520") &&
                            <>
                              <div className='border-l-[4px] w-[15px] h-[40px] mr-3' style={{ borderColor: "#4D8CEC00" }} />
                              <img src={item.img} alt='icon' />
                              <span style={{ color: "#45628F" }}>
                                {item.content}
                              </span>
                            </>
                          ) : (
                            pathname == "/" && item.path == "dashboard" ? (
                              <>
                                <div className='border-l-[4px] w-[15px] h-[40px] mr-3' style={{ borderColor: "#4D8CEC" }} />
                                <img src={item.img} alt='icon' />
                                <span style={{ color: "#45628F" }}>
                                  {item.content}
                                </span>
                              </>
                            ) : (
                              (pathname.includes("/order") || pathname.includes("/overview")) && item.path == "rent" ? (
                                <>
                                  <div className='border-l-[4px] w-[15px] h-[40px] mr-3' style={{ borderColor: "#4D8CEC" }} />
                                  <img src={item.img} alt='icon' />
                                  <span style={{ color: "#45628F" }}>
                                    {item.content}
                                  </span>
                                </>
                              ) : (
                                <>
                                  <div className='border-l-[4px] w-[15px] h-[40px] mr-3' style={{ borderColor: "#4D8CEC00" }} />
                                  <img src={item.img} alt='icon' />
                                  <span style={{ color: "#45628F" }}>
                                    {item.content}
                                  </span>
                                </>
                              )
                            )

                          )}

                        </>
                      )}

                  </NavLink>
                </div>)
              ))
            }
          </div>
        </nav >
        <div className='flex flex-col px-[30px] py-[30px] gap-[50px]'>
          <div className='flex flex-row justify-start gap-5'>
            <a href="https://t.me/nimbusnetwork" target="_blank" rel="noopener noreferrer">
              <img src="/telegram.svg" alt="icon" className='socialImg' />
            </a>
            <a href="https://twitter.com/Nimbus_Network" target="_blank" rel="noopener noreferrer">
              <img src="/x.svg" alt="icon" className='socialImg' />
            </a>
          </div>
          <div className='flex flex-row items-center justify-between'>
            {
              isConnected ?
                (
                  <img src={`data:image/png;base64,${new Identicon(
                    (address ? address : ''),
                    40
                  ).toString()}`} alt="avatar" className='border-[1px] border-dashed light-theme-color rounded-[10px] h-[40px]' />
                )
                :
                (<img src="/Account.ico" alt="avatar" className='border-[1px] border-dashed light-theme-color rounded-[10px] h-[40px]' />)
            }
            <section className='font-space-grotesk'>
              {/* <h1 className='light-theme-color text-[16px]'>{isConnected ? 'James Bond' : 'No connected'}</h1> */}
              <p className='text-light text-[12px]'><b>Balance:</b> {isConnected && balance ? `${balance}` : 'No connected'} {isConnected && symbol ? `${symbol}` : ''}</p>
              <p className='text-light text-[12px]'><b>Wallet:</b> {isConnected && address ? `${address.substring(0, 4)}...${address.substring(address.length - 4)}` : 'No connected'}</p>
            </section>
          </div>
        </div>
      </div >
    </aside >
  );
};

export default Sidebar;
