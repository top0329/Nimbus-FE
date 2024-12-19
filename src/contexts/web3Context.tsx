import {
  createContext,
  useEffect,
  useState,
  useCallback,
  useMemo,
} from 'react';
import Web3 from 'web3';
import { ethers, Contract, ContractRunner } from 'ethers';
import { useWeb3ModalAccount } from '@web3modal/ethers/react';

import { useEthersProvider, useEthersSigner } from '../utils/wagmi-ethers';
import { Web3ContextType } from '../types';
import StakingAbi from '../contract/Staking.json';
import TokenAbi from '../contract/Token.json';
import {
  StakingContractAddress_Sepolia,
  TokenContractAddress_MainNet,
  TokenContractAddress_Sepolia,
  StakingContractAddress_MainNet,
} from '../constant';

declare let window: any;

const Web3Context = createContext<Web3ContextType | null>(null);

export const Web3Provider = ({ children }: { children: React.ReactNode }) => {
  const { address, chainId, isConnected } = useWeb3ModalAccount();
  const signer = useEthersSigner();
  const ethersProvider: any = useEthersProvider();
  const defaultProvider = new ethers.JsonRpcProvider(
    'https://ethereum-sepolia-rpc.publicnode.com',
  );
  const web3 = new Web3(window.ethereum);

  const [provider, setProvider] = useState<ContractRunner>(defaultProvider);
  const [stakingContractAddress, setStakingContractAddress] = useState<any>();
  const [stakingContract, setStakingContract] = useState<Contract>(
    {} as Contract,
  );
  const [tokenContractAddress, setTokenContractAddress] = useState<any>();
  const [tokenContract, setTokenContract] = useState<Contract>({} as Contract);

  const init = useCallback(async () => {
    try {
      if (!isConnected || !ethersProvider) {
        console.log('Not connected wallet');
      } else {
        setProvider(ethersProvider);
        console.log('Connected wallet');
      }

      let _stakingContract: any;
      let _tokenContract: any;
      if (chainId === 1) {
        _stakingContract = new web3.eth.Contract(
          StakingAbi,
          StakingContractAddress_MainNet,
        );
        _tokenContract = new web3.eth.Contract(
          TokenAbi,
          TokenContractAddress_MainNet,
        );
        setStakingContractAddress(StakingContractAddress_MainNet);
        setTokenContractAddress(TokenContractAddress_MainNet);
      } else if (chainId === 11155111) {
        _stakingContract = new web3.eth.Contract(
          StakingAbi,
          StakingContractAddress_Sepolia,
        );
        _tokenContract = new web3.eth.Contract(
          TokenAbi,
          TokenContractAddress_Sepolia,
        );
        setStakingContractAddress(StakingContractAddress_Sepolia);
        setTokenContractAddress(TokenContractAddress_Sepolia);
      }

      setStakingContract(_stakingContract);
      setTokenContract(_tokenContract);
    } catch (err) {
      console.log(err);
    }
  }, [isConnected, ethersProvider, provider]);

  useEffect(() => {
    init();
  }, [init]);

  const value = useMemo(
    () => ({
      account: address,
      chainId,
      isConnected,
      library: provider ?? signer,
      web3,
      stakingContract,
      stakingContractAddress,
      tokenContract,
      tokenContractAddress,
    }),
    [
      address,
      chainId,
      isConnected,
      provider,
      signer,
      web3,
      stakingContract,
      stakingContractAddress,
      tokenContract,
      tokenContractAddress,
    ],
  );

  return <Web3Context.Provider value={value}>{children}</Web3Context.Provider>;
};

export default Web3Context;
