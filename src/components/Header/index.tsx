import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import TopUpBtn from './TopUpBtn';
import Balance from './Balance';
import WalletConnectBtn from "./WalletConnectBtn"
const Header = (props: {
  sidebarOpen: string | boolean | undefined;
  setSidebarOpen: (arg0: boolean) => void;
}) => {
  return (
    <header className="sticky top-0 z-1 flex w-full bg-white font-space-grotesk" style={{ backgroundColor: "#F5FAFF" }} >
      <div className="flex flex-grow items-center justify-between px-[30px] pt-[30px] md:px-[30px] 2xl:px-[30px] md:pr-0 pr-0">
        <NavLink to="/">
          <img src="/logo.svg" className='h-[40px] w-[80px] md:h-[50px] md:w-[100px]' alt="Logo" />
        </NavLink>
        <div className='flex flex-row items-center md:gap-[20px] lg:pr-[30px] xl:pr-[30px] 2xl:pr-0'>
          <div className="flex items-center">
            <TopUpBtn />
            <Balance />
            <WalletConnectBtn />
          </div>
          <button
            aria-controls="sidebar"
            onClick={(e) => {
              e.stopPropagation();
              props.setSidebarOpen(!props.sidebarOpen);
            }}
            className="h-[40px] mr-[10px] rounded-sm lg:hidden md:block"
          >
            <FontAwesomeIcon className='light-theme-color px-2 text-[25px] icon-hover-effect icon-active-effect' icon={faBars} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
