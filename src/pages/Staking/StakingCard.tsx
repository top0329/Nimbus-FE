import React, { useEffect } from 'react';
import Web3 from 'web3';

import useScreenSize from '../../hooks/useScreenSize';
import useWeb3 from '../../hooks/useWeb3';
import useSpinner from '../../hooks/useSpinner';
import { getTokenPrice } from '../../utils/getTokenPrice';

const StakingCard: React.FC = () => {
  const screenSize = useScreenSize();
  const isSmallScreen = screenSize.width <= 640; // Assuming 640px is the breakpoint for small screens
  const {
    account,
    library,
    isConnected,
    web3,
    stakingContract,
    stakingContractAddress,
    tokenContract,
  } = useWeb3();
  const { openSpin, closeSpin } = useSpinner();

  const [isApproved, setIsApproved] = React.useState<boolean>(false);
  const [inputValue, setInputValue] = React.useState<number>(0);
  const [myTokenBalance, setMyTokenBalance] = React.useState<number>(0);
  const [myStakeBalance, setMyStakeBalance] = React.useState<number>(0);
  const [totalClaimedETHValue, setTotalClaimedETHValue] =
    React.useState<number>(0);
  const [totalETHClaimed, setTotalETHClaimed] = React.useState<number>(0);
  const [claimableRewards, setClaimableRewards] = React.useState<number>(0);
  const [claimableETHRewards, setClaimableETHRewards] =
    React.useState<number>(0);
  const [apyRate, setAPYRate] = React.useState<number>(0);
  const [tokenValueLocked, setTokenValueLocked] = React.useState<number>(0);
  const [totalTokenStaked, setTotalTokenStaked] = React.useState<number>(0);
  const [earlyUnstakeFee, setEarlyUnstakeFee] = React.useState<number>(0);
  const [minimumLockPeriod, setMinimumLockPeriod] = React.useState<number>(0);
  const [tokenPrice, setTokenPrice] = React.useState<number>(0);

  useEffect(() => {
    const fetchTokenPrice = async () => {
      try {
        const tokenPrice = (await getTokenPrice()) || 0;
        setTokenPrice(tokenPrice);
        setTokenValueLocked(Number(totalTokenStaked) * tokenPrice);
      } catch (err) {
        console.log(err);
      }
    };

    fetchTokenPrice();

    const interval = setInterval(fetchTokenPrice, 60000);

    return () => clearInterval(interval);
  }, [totalTokenStaked]);

  useEffect(() => {
    async function init() {
      try {
        const _myTokenWeiBalance = await tokenContract.methods
          .balanceOf(account)
          .call();
        const _myTokenEthBalance = await web3.utils.fromWei(
          _myTokenWeiBalance,
          'ether',
        );
        const _myStakingInfo = await stakingContract.methods
          .userInfo(account)
          .call();
        const _myStakingEthBalance = await web3.utils.fromWei(
          _myStakingInfo.amount,
          'ether',
        );
        const _totalETHClaimed = await web3.utils.fromWei(
          _myStakingInfo.rewardETHClaimed,
          'ether',
        );
        const _claimableRewardsWei = await stakingContract.methods
          .claimableRewards(account)
          .call();
        const _claimableRewards = await web3.utils.fromWei(
          _claimableRewardsWei,
          'ether',
        );
        const _claimableETHRewardsWei = await stakingContract.methods
          .claimableETHReward(account)
          .call();
        const _claimableETHRewards = await web3.utils.fromWei(
          _claimableETHRewardsWei,
          'ether',
        );
        const _poolInfo = await stakingContract.methods.pool().call();
        const _totalTokenStaked = await web3.utils.fromWei(
          _poolInfo.currentPoolSize,
          'ether',
        );
        const _totalClaimedETHValue = await web3.utils.fromWei(
          _poolInfo.totalETHRewardsClaimed,
          'ether',
        );
        setMyTokenBalance(Number(_myTokenEthBalance));
        setMyStakeBalance(Number(_myStakingEthBalance));
        setTotalClaimedETHValue(Number(_totalClaimedETHValue));
        setClaimableRewards(Number(_claimableRewards));
        setClaimableETHRewards(Number(_claimableETHRewards));
        setAPYRate(Number(_poolInfo.apy) / 10);
        setTokenValueLocked(Number(_totalTokenStaked) * tokenPrice);
        setTotalTokenStaked(Number(_totalTokenStaked));
        setTotalETHClaimed(Number(_totalETHClaimed));
        setEarlyUnstakeFee(Number(_poolInfo.emergencyFees) / 10);
        setMinimumLockPeriod(Number(_poolInfo.minLockDays));
      } catch (err) {
        console.log(err);
      }
    }
    init();
  }, []);

  const handleApprove = async () => {
    const web3 = new Web3(window.ethereum);
    try {
      openSpin('Approving');
      if (isConnected && library) {
        let receipt = null;
        while (receipt === null || receipt.status === undefined) {
          let res: any;
          const decimals = await tokenContract.methods.decimals().call();
          res = await tokenContract.methods
            .approve(
              stakingContractAddress,
              (inputValue * 10 ** Number(decimals)).toString(),
            )
            .send({ from: account });
          receipt = await web3.eth.getTransactionReceipt(
            (await res).transactionHash,
          );
        }
        if (receipt && receipt.status !== undefined) {
          if (receipt.status) {
            setIsApproved(true);
          } else {
            setIsApproved(false);
          }
        } else {
          alert('Transaction is still pending');
          await new Promise((resolve) => setTimeout(resolve, 1000)); // Wait for 1 second before checking again
        }
      }
    } catch (err: any) {
      console.log(err);
    } finally {
      closeSpin();
    }
  };

  const handleStake = async () => {
    try {
      openSpin('Staking');
      const _stakeWeiValue = web3.utils.toWei(inputValue.toString(), 'ether');
      await stakingContract.methods
        .stakeTokens(_stakeWeiValue)
        .send({ from: account });
    } catch (err) {
      console.log(err);
    } finally {
      closeSpin();
    }
  };

  const handleUnStake = async () => {
    try {
      openSpin('Unstaking');
      await stakingContract.methods.unstakeTokens().send({
        from: account,
      });
    } catch (err) {
      console.log(err);
    } finally {
      closeSpin();
    }
  };

  const handleEmergencyWithdraw = async () => {
    try {
      openSpin('Emergency Withdrawing');
      await stakingContract.methods.emergencyWithdraw().send({
        from: account,
      });
    } catch (err) {
      console.log(err);
    } finally {
      closeSpin();
    }
  };

  const handleClaimReward = async () => {
    try {
      openSpin('Claiming Rewards');
      //   const _unStakeTx = await stakingContract.methods.claimRewards().send({
      await stakingContract.methods.claimETHReward().send({
        from: account,
      });
    } catch (err) {
      console.log(err);
    } finally {
      closeSpin();
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setInputValue(Number(value));
  };

  const handleMaxClicked = () => {
    setInputValue(myTokenBalance);
  };

  return (
    <div className="flex w-full lg:h-full items-center justify-between text-center flex-col pb-[80px] z-0">
      <section className="flex flex-col gap-10 py-[30px] md:pb-0 md:pt-[60px] w-full">
        <h1
          className="font-press-start-2p lg:text-[24px] xl:text-[36px] text-[16px]"
          style={{ color: '#4D8CEC' }}
        >
          Staking & Claim
        </h1>
        <p style={{ color: '#45628F' }} className="16px font-space-grotesk">
          Select one of our Nodes Packages and Start Running DApps.
        </p>
      </section>
      <section className="flex flex-col lg:flex-row lg:px-0 flex-wrap pt-8 md:py-0 items-center justify-between w-full gap-8 lg:gap-0 font-space-grotesk">
        <div
          className="stakeContainer cursor-pointer flex flex-col gap-2 text-[16px] box-border py-[20px]  w-full lg:w-[25%] rounded-[10px] border-[1px] border-dashed items-center justify-center"
          style={{ borderColor: '#4D8CEC' }}
        >
          <h2 className="text-[14px] light-theme-color">Token Value Locked</h2>
          <h1 className="text-[20px] dark-theme-color">
            ${tokenValueLocked.toFixed(4)}
          </h1>
        </div>
        <div
          className="stakeContainer cursor-pointer flex flex-col gap-2 text-[16px] box-border py-[20px] w-full lg:w-[25%] rounded-[10px] border-[1px] border-dashed items-center justify-center"
          style={{ borderColor: '#4D8CEC' }}
        >
          <h2 className="text-[14px] light-theme-color">Total Tokens Staked</h2>
          <h1 className="text-[20px] dark-theme-color">{totalTokenStaked}</h1>
        </div>
        <div
          className="stakeContainer cursor-pointer flex flex-col gap-2 text-[16px] box-border py-[20px] w-full lg:w-[25%] rounded-[10px] border-[1px] border-dashed items-center justify-center"
          style={{ borderColor: '#4D8CEC' }}
        >
          <h2 className="text-[14px] light-theme-color">
            Total Claimed ETH Value
          </h2>
          <h1 className="text-[20px] dark-theme-color">
            {totalClaimedETHValue}
          </h1>
        </div>
      </section>
      {isSmallScreen ? (
        <div className="w-full">
          <div className="flex flex-row">
            <div
              className="border-r-2"
              style={{ flex: '50%', height: '50px', borderColor: '#4D8CEC' }}
            ></div>
            <div className="" style={{ flex: '50%' }}></div>
          </div>
          <section className="flex flex-col lg:gap-[20px] gap-8 w-full lg:px-0">
            <div
              className="stakeContainer cursor-pointer flex flex-col gap-2 text-[16px] box-border py-[20px] w-full rounded-[10px] border-[1px] border-dashed items-center justify-center"
              style={{ borderColor: '#4D8CEC' }}
            >
              <h2 className="text-[14px] light-theme-color">My Balance</h2>
              <h1 className="text-[20px] dark-theme-color">{myTokenBalance}</h1>
            </div>
            <div
              className="stakeContainer cursor-pointer flex flex-col gap-2 text-[16px] box-border py-[20px] w-full rounded-[10px] border-[1px] border-dashed items-center justify-center"
              style={{ borderColor: '#4D8CEC' }}
            >
              <h2 className="text-[14px] light-theme-color">
                My Stake Balance
              </h2>
              <h1 className="text-[20px] dark-theme-color">{myStakeBalance}</h1>
            </div>
            <div
              className="stakeContainer cursor-pointer flex flex-col gap-2 text-[16px] box-border py-[20px] w-full rounded-[10px] border-[1px] border-dashed items-center justify-center"
              style={{ borderColor: '#4D8CEC' }}
            >
              <h2 className="text-[14px] light-theme-color">
                Total ETH Claimed
              </h2>
              <h1 className="text-[20px] dark-theme-color">
                {totalETHClaimed} ETH
              </h1>
            </div>
          </section>
          <div className="flex flex-row">
            <div
              className="border-r-2"
              style={{ flex: '50%', height: '50px', borderColor: '#4D8CEC' }}
            ></div>
            <div className="" style={{ flex: '50%' }}></div>
          </div>
          <section className="flex flex-col lg:gap-[20px] gap-8 w-full lg:px-0">
            <div
              className="stakeContainer cursor-pointer flex flex-col gap-2 text-[16px] box-border py-[20px] w-full rounded-[10px] border-[1px] border-dashed items-center justify-center"
              style={{ borderColor: '#4D8CEC' }}
            >
              <h2 className="text-[14px] light-theme-color">
                Early Unstake Fee
              </h2>
              <h1 className="text-[20px] dark-theme-color">
                {earlyUnstakeFee} %
              </h1>
            </div>
            <div
              className="stakeContainer cursor-pointer flex flex-col gap-2 text-[16px] box-border py-[20px] w-full rounded-[10px] border-[1px] border-dashed items-center justify-center"
              style={{ borderColor: '#4D8CEC' }}
            >
              <h2 className="text-[14px] light-theme-color">APY Rate</h2>
              <h1 className="text-[20px] dark-theme-color">{apyRate}</h1>
            </div>
            <div
              className="stakeContainer cursor-pointer flex flex-col gap-2 text-[16px] box-border py-[20px] w-full rounded-[10px] border-[1px] border-dashed items-center justify-center"
              style={{ borderColor: '#4D8CEC' }}
            >
              <h2 className="text-[14px] light-theme-color">Locked at</h2>
              <h1 className="text-[20px] dark-theme-color">--</h1>
            </div>
          </section>
          <div className="flex flex-row">
            <div
              className="border-r-2"
              style={{ flex: '50%', height: '50px', borderColor: '#4D8CEC' }}
            ></div>
            <div className="" style={{ flex: '50%' }}></div>
          </div>
          <section
            className="stakeContainer flex flex-col border-[1px] border-dashed rounded-[10px] px-3 lg:px-8 lg:my-0 py-[20px] w-full"
            style={{ borderColor: '#4D8CEC' }}
          >
            <h2 className="text-[15px] light-theme-color py-3">
              Minimum lock period: {minimumLockPeriod} days
            </h2>
            <div className="flex flex-row py-3 relative">
              <input
                className="rounded-[10px] border-[1px] px-7 py-[10px] w-[75%] font-space-grotesk text-[18px] customInput focus:outline-none"
                step={1}
                onChange={handleInputChange}
                value={inputValue}
              />
              <button
                className="maxBtn absolute right-0 bg-light-theme-color text-white px-7 py-[11px] rounded-[10px] w-[40%] text-[15px]"
                onClick={handleMaxClicked}
              >
                MAX
              </button>
            </div>
            <section className="grid grid-cols-4 gap-4 py-[20px]">
              <button
                className="border-[1px] rounded-[10px] px-2 py-3 bg-transparent text-[13px]"
                style={{ borderColor: '#4D8CEC', color: '#4D8CEC' }}
              >
                25%
              </button>
              <button
                className="border-[1px] rounded-[10px] px-2 py-3 bg-transparent text-[13px]"
                style={{ borderColor: '#4D8CEC', color: '#4D8CEC' }}
              >
                50%
              </button>
              <button
                className="border-[1px] rounded-[10px] px-2 py-3 bg-transparent text-[13px]"
                style={{ borderColor: '#4D8CEC', color: '#4D8CEC' }}
              >
                75%
              </button>
              <button
                className="border-[1px] rounded-[10px] px-2 py-3 bg-transparent text-[13px]"
                style={{ borderColor: '#4D8CEC', color: '#4D8CEC' }}
              >
                100%
              </button>
            </section>
            <section className="grid grid-cols-2 gap-4 py-1">
              {isApproved ? (
                <button
                  className="customBtn bg-light-theme-color text-[15px] text-white w-full border-[1px] rounded-[10px] px-3 py-3"
                  onClick={handleStake}
                >
                  Stake
                </button>
              ) : (
                <button
                  className="customBtn bg-light-theme-color text-[15px] text-white w-full border-[1px] rounded-[10px] px-3 py-3"
                  onClick={handleApprove}
                >
                  Approve
                </button>
              )}
              <button className="customBtn bg-light-theme-color text-[15px] text-white w-full border-[1px] rounded-[10px] px-3 py-3">
                Unstake
              </button>
            </section>
            <button
              className="customBtn bg-light-theme-color text-[15px] text-white w-full border-[1px] rounded-[10px] px-3 py-3"
              onClick={handleEmergencyWithdraw}
            >
              Emergency Withdraw
            </button>
            <section className="grid grid-cols-2 gap-2 py-1">
              <div className="text-center">
                <h2 className="text-[15px] light-theme-color">
                  Claimable Reward
                </h2>
                <h2 className="text-[15px] dark-theme-color">
                  {claimableETHRewards} ETH
                </h2>
              </div>
              <button
                className="customBtn bg-light-theme-color text-[15px] text-white w-full border-[1px] rounded-[10px] px-3"
                onClick={handleClaimReward}
              >
                Claim ETH
              </button>
            </section>
          </section>
        </div>
      ) : (
        <div className="grid grid-cols-12 gap-0 w-full mt-8">
          <div className="col-span-2">
            <section className="flex flex-col lg:gap-[20px] w-full gap-8 lg:px-0 pt-6">
              <div
                className="stakeContainer cursor-pointer flex flex-col gap-2 text-[16px] box-border py-[10px] w-full rounded-[10px] border-[1px] border-dashed items-center justify-center"
                style={{ borderColor: '#4D8CEC' }}
              >
                <h2 className="text-[14px] light-theme-color">My Balance</h2>
                <h1 className="text-[20px] dark-theme-color">
                  {myTokenBalance}
                </h1>
              </div>
              <div
                className="stakeContainer cursor-pointer flex flex-col gap-2 text-[16px] box-border py-[10px] w-full rounded-[10px] border-[1px] border-dashed items-center justify-center"
                style={{ borderColor: '#4D8CEC' }}
              >
                <h2 className="text-[14px] light-theme-color">
                  My Stake Balance
                </h2>
                <h1 className="text-[20px] dark-theme-color">
                  {myStakeBalance}
                </h1>
              </div>
              <div
                className="stakeContainer cursor-pointer flex flex-col gap-2 text-[16px] box-border py-[10px] w-full rounded-[10px] border-[1px] border-dashed items-center justify-center"
                style={{ borderColor: '#4D8CEC' }}
              >
                <h2 className="text-[14px] light-theme-color">
                  Total ETH Claimed
                </h2>
                <h1 className="text-[20px] dark-theme-color">
                  {totalETHClaimed} ETH
                </h1>
              </div>
            </section>
          </div>
          <div className="col-span-1 grid-rows-3 grid mb-[30px]">
            <div className="row-span-1">
              <hr className="relative top-[50%] tranlate-y-[50%] light-theme-color" />
            </div>
            <div className="row-span-1">
              <hr className="relative top-[50%] tranlate-y-[50%] light-theme-color" />
            </div>
            <div className="row-span-1">
              <hr className="relative top-[40%] tranlate-y-[50%] light-theme-color" />
            </div>
          </div>
          <div className="col-span-6 flex items-center justify-center">
            <section
              className="stakeContainer flex flex-col flex-wrap border-[1px] border-dashed rounded-[10px] px-3 lg:px-8 my-[30px] lg:my-0 py-[20px] w-full"
              style={{ borderColor: '#4D8CEC' }}
            >
              <h2 className="text-[15px] light-theme-color py-3">
                Minimum lock period: 3 days
              </h2>
              <div className="flex flex-row py-1 relative">
                <input
                  className="rounded-[10px] border-[1px] px-7 py-[10px] w-[75%] font-space-grotesk text-[18px] customInput focus:outline-none"
                  step={1}
                  onChange={handleInputChange}
                  value={inputValue || ''}
                />
                <button
                  className="maxBtn absolute right-0 bg-light-theme-color text-white px-7 py-[11px] rounded-[10px] lg:w-[45%] text-[15px] text-center"
                  onClick={handleMaxClicked}
                >
                  MAX
                </button>
              </div>
              <section className="grid grid-cols-4 gap-4 py-1">
                <button
                  className="border-[1px] rounded-[10px] px-3 py-1 bg-transparent text-[13px]"
                  style={{ borderColor: '#4D8CEC', color: '#4D8CEC' }}
                >
                  25%
                </button>
                <button
                  className="border-[1px] rounded-[10px] px-3 py-1 bg-transparent text-[13px]"
                  style={{ borderColor: '#4D8CEC', color: '#4D8CEC' }}
                >
                  50%
                </button>
                <button
                  className="border-[1px] rounded-[10px] px-3 py-1 bg-transparent text-[13px]"
                  style={{ borderColor: '#4D8CEC', color: '#4D8CEC' }}
                >
                  75%
                </button>
                <button
                  className="border-[1px] rounded-[10px] px-3 py-1 bg-transparent text-[13px]"
                  style={{ borderColor: '#4D8CEC', color: '#4D8CEC' }}
                >
                  100%
                </button>
              </section>
              <section className="grid grid-cols-2 gap-4 py-1">
                {isApproved ? (
                  <button
                    className="customBtn bg-light-theme-color text-[15px] text-white w-full border-[1px] rounded-[10px] px-3 py-3"
                    onClick={handleStake}
                  >
                    Stake
                  </button>
                ) : (
                  <button
                    className="customBtn bg-light-theme-color text-[15px] text-white w-full border-[1px] rounded-[10px] px-3 py-3"
                    onClick={handleApprove}
                  >
                    Approve
                  </button>
                )}
                <button
                  onClick={handleUnStake}
                  className="customBtn bg-light-theme-color text-[15px] text-white w-full border-[1px] rounded-[10px] px-3 py-3"
                >
                  Unstake
                </button>
              </section>
              <button
                className="customBtn bg-light-theme-color text-[15px] text-white w-full border-[1px] rounded-[10px] px-3 py-3"
                onClick={handleEmergencyWithdraw}
              >
                Emergency Withdraw
              </button>
              <section className="grid grid-cols-2 gap-2 py-1">
                <div className="text-center">
                  <h2 className="text-[15px] light-theme-color">
                    Claimable Reward
                  </h2>
                  <h2 className="text-[15px] dark-theme-color">
                    {claimableETHRewards} ETH
                  </h2>
                </div>
                <button
                  className="customBtn bg-light-theme-color text-[15px] text-white w-full border-[1px] rounded-[10px] px-3"
                  onClick={handleClaimReward}
                >
                  Claim ETH
                </button>
              </section>
            </section>
          </div>
          <div className="col-span-1 grid-rows-3 grid mb-[30px]">
            <div className="row-span-1">
              <hr className="relative top-[50%] tranlate-y-[50%] light-theme-color" />
            </div>
            <div className="row-span-1">
              <hr className="relative top-[50%] tranlate-y-[50%] light-theme-color" />
            </div>
            <div className="row-span-1">
              <hr className="relative top-[40%] tranlate-y-[50%] light-theme-color" />
            </div>
          </div>
          <div className="col-span-2">
            <section className="flex flex-col lg:gap-[20px] gap-8 w-full lg:px-0 pt-6">
              <div
                className="stakeContainer cursor-pointer flex flex-col gap-2 text-[16px] box-border py-[10px] w-full rounded-[10px] border-[1px] border-dashed items-center justify-center"
                style={{ borderColor: '#4D8CEC' }}
              >
                <h2 className="text-[14px] light-theme-color">
                  Early Unstake Fee
                </h2>
                <h1 className="text-[20px] dark-theme-color">
                  {earlyUnstakeFee} %
                </h1>
              </div>
              <div
                className="stakeContainer cursor-pointer flex flex-col gap-2 text-[16px] box-border py-[10px] w-full rounded-[10px] border-[1px] border-dashed items-center justify-center"
                style={{ borderColor: '#4D8CEC' }}
              >
                <h2 className="text-[14px] light-theme-color">APY Rate</h2>
                <h1 className="text-[20px] dark-theme-color">{apyRate}</h1>
              </div>
              <div
                className="stakeContainer cursor-pointer flex flex-col gap-2 text-[16px] box-border py-[10px] w-full rounded-[10px] border-[1px] border-dashed items-center justify-center"
                style={{ borderColor: '#4D8CEC' }}
              >
                <h2 className="text-[14px] light-theme-color">Locked at</h2>
                <h1 className="text-[20px] dark-theme-color">--</h1>
              </div>
            </section>
          </div>
        </div>
      )}
    </div>
  );
};

export default StakingCard;
