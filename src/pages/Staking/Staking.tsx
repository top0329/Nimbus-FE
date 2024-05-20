import React from 'react';

import DefaultLayout from '../../layout/DefaultLayout';
import StakingCard from './StakingCard';

const Staking: React.FC = () => {
  return (
    <DefaultLayout>
      <div className="relative flex items-center py-2 justify-center px-[30px] md:px-[60px] w-full min-h-[1000px] md:min-h-[900px] lg:min-h-[800px]  box-border rounded-[26px] border-[1px] border-dashed" style={{ borderColor: '#4D8CEC', flex: "25%" }}>
        <img src="./cornerLB.svg" alt="img" className='absolute bottom-0 left-0 h-[50%] w-[50%] z-[0]' />
        <img src="./cornerRT.svg" alt="img" className='absolute top-0 right-0 h-[50%] w-[50%] z-[0]' />
        <StakingCard />
      </div >
    </DefaultLayout>
  );
};

export default Staking;
