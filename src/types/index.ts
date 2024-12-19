import { ContractRunner } from "ethers";
import { Address } from "viem";

export type Web3ContextType = {
  account?: Address;
  chainId?: number;
  isConnected?: boolean;
  library?: ContractRunner;
  web3?: any;
  stakingContract: any;
  stakingContractAddress: any;
  tokenContract: any;
  tokenContractAddress: any;
};