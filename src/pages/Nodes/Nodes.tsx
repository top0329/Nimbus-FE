import React from 'react';

import DefaultLayout from '../../layout/DefaultLayout';
import NodeCard from './NodeCard';

const Nodes: React.FC = () => {
  return (
    <DefaultLayout>
      <div className="relative flex items-center justify-center py-8 md:py-2 w-full min-h-[600px] box-border rounded-[26px] border-[1px] border-dashed" style={{ borderColor: '#4D8CEC' }}>
        <img src="./cornerLB.svg" alt="img" className='absolute md:bottom-0 bottom-[-80px] left-0 h-[50%] w-[100%] md:w-[50%] z-0' />
        <img src="./cornerRT.svg" alt="img" className='absolute top-0 right-0 h-[50%] w-0 md:w-[50%] z-0' />
        <NodeCard />
      </div >
    </DefaultLayout>
  );
};

export default Nodes;
