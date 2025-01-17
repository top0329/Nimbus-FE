import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { data } from '../../data';
import { addSpecs } from '../../Redux/Reducers/specificationSlice';
interface CardProps {
  instanceId: string;
  img: string;
  name: string;
  desc: string;
  serviceType: string;
}
const AssetCard: React.FC<CardProps> = ({ instanceId, img, name, desc, serviceType }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const addOrderHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    let specificatoinDetail: any;
    let specifications;
    let specs: any = [];

    if (serviceType == "GPU") {
      specificatoinDetail = data["GPU"].assetsDetail;
      specifications = specificatoinDetail[instanceId];
      specifications.map((item: any) => {
        let detail = {
          value: item.id,
          label: `NVIDIA ${instanceId} - ${item.vcpu_count}vCPUs ${item.ram} GB RAM ${item.disk} GB NVMe`,
          locations: item.locations,
          monthlyCost: item.monthly_cost,
          cpuCount: item.vcpu_count,
          ram: item.ram,
          storage: item.disk,
          bandwidth: item.bandwidth
        }
        specs.push(detail);
      })
    }
    else {
      specificatoinDetail = data["CPU"].assetsDetail;
      specifications = specificatoinDetail[instanceId];
      specifications.map((item: any) => {
        let detail = {
          value: item.id,
          label: `CPU ${instanceId} - ${item.vcpu_count}vCPUs ${item.ram} GB RAM ${item.disk} GB NVMe`,
          locations: item.locations,
          monthlyCost: item.monthly_cost,
          cpuCount: item.vcpu_count,
          ram: item.ram,
          storage: item.disk,
          bandwidth: item.bandwidth
        }
        specs.push(detail);
      })
    }
    dispatch(addSpecs(specs));
    event.preventDefault();
    navigate(`/order/${serviceType}/${instanceId}`);
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