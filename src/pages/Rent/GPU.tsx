import React from 'react';

import AssetCard from './AssetCard';
import DefaultLayout from '../../layout/DefaultLayout';
import { data } from '../../data';

const GPU: React.FC = () => {
  return (
    <DefaultLayout>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-10 xl:grid-cols-3 2xl:gap-10 2xl:grid-cols-4">
        {
          data.GPU.assets.map((item, index) => (
            <AssetCard key={index} instanceId={item.id} img={item.img} name={item.name} desc={item.desc} serviceType = "GPU" />
          ))
        }
      </div>
    </DefaultLayout>
  );
};

export default GPU;
