import React from 'react';
const WelcomeCard: React.FC = () => {
  return (
    <div className="w-full lg:px-[40px] md:px-[40px] xl:px-[40px] 2xl:px-[40px] px-[20px] py-[30px] box-border rounded-[26px] border-[1px] border-dashed" style={{ borderColor: '#4D8CEC' }}>
      <div className="relative [text-shadow:-1.5px_0px_0px_#232323] text-[18px] md:text-[24px] font-press-start-2p">
        Welcome to Nimbus Network
      </div>
      <div className="text-wrap 2xl:w-[50%] w-[100%] pt-[15px] relative text-[20px] leading-[150%] font-medium font-space-grotesk text-paragraph-text inline-block" style={{ color: "#45628F" }}>
        Your Gateway To Decentralized and Democratized Compute , enabling you not only to access but also contribute to the next generation of computing power and digital solutions.
      </div>
    </div >
  );
};

export default WelcomeCard;