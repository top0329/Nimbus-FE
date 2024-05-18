import React from 'react';
import DefaultLayout from '../../layout/DefaultLayout';
import ProfileCard from './ProfileCard';


const Profile: React.FC = () => {
 
  return (
    <DefaultLayout>
      <div className="relative flex py-2 items-center justify-center px-[30px] md:px-[60px] w-full min-h-[600px] md:min-h-[800px] box-border rounded-[26px] border-[1px] border-dashed" style={{ borderColor: '#4D8CEC', flex: "25%" }}>
        <img src="./cornerLB.svg" alt="img" className='absolute md:bottom-0 bottom-[-80px] left-0 h-[50%] w-[100%] md:w-[50%] z-0' />
        <img src="./cornerRT.svg" alt="img" className='absolute top-0 right-0 h-[50%] w-[50%] z-0' />
        <ProfileCard />
      </div >
    </DefaultLayout>
  );
};

export default Profile;
