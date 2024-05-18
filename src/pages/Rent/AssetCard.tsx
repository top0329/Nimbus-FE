import React from 'react';
import { useDispatch } from 'react-redux';
import { addOrder } from '../../Redux/Reducers/orderSlice';
import { useNavigate } from 'react-router-dom';

interface CardProps {
  img: string;
  name: string;
  desc: string;
}
const AssetCard: React.FC<CardProps> = ({ img, name, desc }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const addOrderHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log("calling.......")
    event.preventDefault();
    const payload = {
      instanceImage: img,
      instanceName: name,
      instanceDesc: desc
    }
    dispatch(addOrder(payload));
    navigate('/order');
  };

  return (
    <div className='max-h-[400px] assetContainer text-center flex flex-col gap-5 border-[1px] border-dashed rounded-[27px] p-5 items-center justify-between' style={{ borderColor: "#4D8CEC" }}>
      <img src={img} alt="icon" className='h-[120px] w-[120px]' />
      <section className='flex flex-col gap-1 group'>
        <h1 className='font-press-start-2p text-[16px] font-press-start-2p'>{name}</h1>
        <p className='text-[14px] font-space-grotesk'>
          {desc}
        </p>
      </section>
      <button onClick={addOrderHandler} className='text-[18px] h-[48px] rounded-[15px] text-white w-full font-space-grotesk customBtn' style={{ backgroundColor: "#4D8CEC" }}>
        Choose Plan
      </button>
    </div>
  );
};

export default AssetCard;