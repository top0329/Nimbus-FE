import React from 'react';
import { worldMap } from './WorldWide';
const LocationCard: React.FC = () => {

  return (
    <div className={`relative w-full flex overflow-hidden flex-1 flex-col-reverse box-border rounded-[26px] border-[1px] border-dashed min-h-[500px] bg-cover md:bg-contain`}>
      {worldMap}
      <div className="absolute pl-[30px] pb-[20px] flex flex-row gap-6 justify-start [text-shadow:-1.5px_0px_0px_#232323] text-[16px] text-brand-blue font-press-start-2p">
        <span>32 Locations</span>
        <img src="./world.png" alt="icon" className="spin-animation" style={{ width: "30px", height: "30px" }}></img>
      </div>
    </div >
  );
};

export default LocationCard;