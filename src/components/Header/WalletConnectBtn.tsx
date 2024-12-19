import React from 'react';
import { useWeb3Modal } from '@web3modal/ethers/react';
import useWeb3 from '../../hooks/useWeb3';
// import { ConnectButton } from '@rainbow-me/rainbowkit';

function WalletConnectBtn() {
  const { open } = useWeb3Modal();
  const { isConnected } = useWeb3();

  return (
    <React.Fragment>
      {isConnected ? (
        <div className="flex flex-row gap-2">
          <w3m-network-button />
          <w3m-account-button />
        </div>
      ) : (
        <React.Fragment>
          <w3m-connect-button />
          {/* <button
            className="customBtn bg-light-theme-color rounded-full w-[150px] lg:w-[200px] h-[40px] text-[2xl] text-white"
            type="button"
            onClick={() => open()}
          >
            Connect Wallet
          </button> */}
        </React.Fragment>
      )}
    </React.Fragment>
    // <ConnectButton.Custom>
    //   {({
    //     account,
    //     chain,
    //     openAccountModal,
    //     openChainModal,
    //     openConnectModal,
    //     authenticationStatus,
    //     mounted,
    //   }) => {

    //     const ready = mounted && authenticationStatus !== 'loading';
    //     const connected =
    //       ready &&
    //       account &&
    //       chain &&
    //       (!authenticationStatus ||
    //         authenticationStatus === 'authenticated');

    //     return (
    //       <div className='flex justify-end items-center h-[6vh] text-[2xl] text-[white]  '
    //         {...(!ready && {
    //           'aria-hidden': true,
    //           'style': {
    //             opacity: 0,
    //             pointerEvents: 'none',
    //             userSelect: 'none',
    //           },
    //         })}
    //       >
    //         {(() => {
    //           if (!connected) {
    //             return (
    //               <button className='customBtn bg-light-theme-color rounded-full w-[150px] lg:w-[200px] h-[40px] text-[2xl]' onClick={openConnectModal} type="button">
    //                 Connect Wallet
    //               </button>
    //             );
    //           }

    //           if (chain.unsupported) {
    //             return (
    //               <button onClick={openChainModal} type="button">
    //                 Wrong network
    //               </button>
    //             );
    //           }

    //           return (
    //             <div className='flex flex-row justify-center items-center gap-1'>
    //               <button className='walletBtn customBtn hidden md:flex items-center justify-center px-2 w-[120px]  h-[40px] light-theme-color cursor-pointer box-border rounded-full border-[1px] focus:outline-none'
    //                 onClick={openChainModal}
    //                 style={{ borderColor: "#dde1e6", backgroundColor: "#f0f5fa" }}
    //                 type="button"
    //               >
    //                 {chain.hasIcon && (
    //                   <div
    //                     style={{
    //                       background: chain.iconBackground,
    //                       borderRadius: 999,
    //                       overflow: 'hidden',
    //                       marginRight: 4,
    //                     }}
    //                   >
    //                     {chain.iconUrl && (
    //                       <img
    //                         alt={chain.name ?? 'Chain icon'}
    //                         src={chain.iconUrl}
    //                         style={{ width: 16, height: 16 }}
    //                       />
    //                     )}
    //                   </div>
    //                 )}
    //                 {chain.name}
    //               </button>

    //               <button className='walletBtn customBtn px-2 light-theme-color w-[200px] h-[40px] rounded-full  box-border border-[1px] p-1 focus:outline-none' onClick={openAccountModal}
    //                 type="button"
    //                 style={{ borderColor: "#dde1e6", backgroundColor: "#f0f5fa" }}
    //               >
    //                 {account.displayName}
    //                 {account.displayBalance
    //                   ? ` (${account.displayBalance})`
    //                   : ''}
    //               </button>
    //             </div>
    //           );
    //         })()}
    //       </div>
    //     );
    //   }}
    // </ConnectButton.Custom>
  );
}

export default WalletConnectBtn;
