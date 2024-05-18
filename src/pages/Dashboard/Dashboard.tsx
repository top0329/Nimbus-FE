import React from 'react';
import WelcomeCard from './WelcomCard';
import LocationCard from './LocationCard';
import DefaultLayout from '../../layout/DefaultLayout';

const Dashboard: React.FC = () => {
  return (
    <DefaultLayout>
      <div className="w-full flex flex-col gap-4 items-center" style={{ color: "#4D8CEC" }}>
        <WelcomeCard />
        <LocationCard />
      </div>
    </DefaultLayout>
  );
};

export default Dashboard;
