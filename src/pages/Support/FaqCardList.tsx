import React from 'react';
import { useFAQ } from '../../hooks/FaqContext';
import FaqCard from './FaqCard'; // Assuming you have a FaqCard component

const FAQList: React.FC = () => {
    const { openFAQ, setOpenFAQ } = useFAQ();

    const faqs = [
        {
            id: 1,
            title: 'How do I rent a GPU on Nimbus?',
            content: `To rent a GPU on Nimbus, connect your wallet to the DApp, navigate to the 'Rent GPU' section, select the GPU model that suits your project needs, and follow the prompts to finalize your rental by making the payment. You can make payments using supported cryptocurrencies directly from your digital wallet.`
        },
        {
            id: 2,
            title: 'What types of nodes can I deploy on Nimbus?',
            content: `The node deployment feature is currently under development. Once live, you will be able to deploy various blockchain nodes directly through our platform. Stay tuned for updates on this feature!`
        },
        {
            id: 3,
            title: 'How can I stake tokens on Nimbus?',
            content: `Staking features are also in the development phase. We will notify all users when this function becomes available, allowing you to stake tokens and earn rewards directly on our platform.`
        },
        {
            id: 4,
            title: 'How is my data kept secure on Nimbus?',
            content: `Nimbus leverages blockchain technology to ensure security and transparency in all transactions. You can securely rent GPUs and utilize services without the need for KYC verification, maintaining your privacy and security throughout your interactions with the platform.`
        }
    ];

    return (
        <div className='flex flex-col w-full z-10'>
            {faqs.map((faq) => (
                <FaqCard
                    key={faq.id}
                    title={faq.title}
                    content={faq.content}
                    isOpen={openFAQ === faq.id}
                    onClick={() => setOpenFAQ(openFAQ === faq.id ? null : faq.id)}
                />
            ))}
        </div>
    );
};

export default FAQList;



