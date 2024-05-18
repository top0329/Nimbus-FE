import React from 'react';
import { useFAQ } from '../../hooks/FaqContext';
import FaqCard from './FaqCard'; // Assuming you have a FaqCard component

const FAQList: React.FC = () => {
    const { openFAQ, setOpenFAQ } = useFAQ();

    const faqs = [
        {
            id: 1,
            title: 'How do I rent a GPU on Nimbus?',
            content: `To rent a GPU, navigate to the 'Rent GPU' section in your dashboard. Select the GPU type you need, specify the rental duration, and confirm your rental. You'll receive a confirmation and instructions on how to access your rented GPU.`
        },
        {
            id: 2,
            title: 'What types of nodes can I deploy on Nimbus?',
            content: `To rent a GPU, navigate to the 'Rent GPU' section in your dashboard. Select the GPU type you need, specify the rental duration, and confirm your rental. You'll receive a confirmation and instructions on how to access your rented GPU.`
        },
        {
            id: 3,
            title: 'How can I stake tokens on Nimbus?',
            content: `To rent a GPU, navigate to the 'Rent GPU' section in your dashboard. Select the GPU type you need, specify the rental duration, and confirm your rental. You'll receive a confirmation and instructions on how to access your rented GPU.`
        },
        {
            id: 4,
            title: 'How is my data kept secure on Nimbus?',
            content: `To rent a GPU, navigate to the 'Rent GPU' section in your dashboard. Select the GPU type you need, specify the rental duration, and confirm your rental. You'll receive a confirmation and instructions on how to access your rented GPU.`
        },
        {
            id: 5,
            title: 'How can I modify my node configurations?',
            content: `To rent a GPU, navigate to the 'Rent GPU' section in your dashboard. Select the GPU type you need, specify the rental duration, and confirm your rental. You'll receive a confirmation and instructions on how to access your rented GPU.`
        },
        {
            id: 6,
            title: 'How do I rent a GPU on Nimbus?',
            content: `To rent a GPU, navigate to the 'Rent GPU' section in your dashboard. Select the GPU type you need, specify the rental duration, and confirm your rental. You'll receive a confirmation and instructions on how to access your rented GPU.`
        },
        {
            id: 7,
            title: 'What types of nodes can I deploy on Nimbus?',
            content: `To rent a GPU, navigate to the 'Rent GPU' section in your dashboard. Select the GPU type you need, specify the rental duration, and confirm your rental. You'll receive a confirmation and instructions on how to access your rented GPU.`
        },
        {
            id: 8,
            title: 'How can I stake tokens on Nimbus?',
            content: `To rent a GPU, navigate to the 'Rent GPU' section in your dashboard. Select the GPU type you need, specify the rental duration, and confirm your rental. You'll receive a confirmation and instructions on how to access your rented GPU.`
        },
        {
            id: 9,
            title: 'How is my data kept secure on Nimbus?',
            content: `To rent a GPU, navigate to the 'Rent GPU' section in your dashboard. Select the GPU type you need, specify the rental duration, and confirm your rental. You'll receive a confirmation and instructions on how to access your rented GPU.`
        },
        {
            id: 10,
            title: 'How can I modify my node configurations?',
            content: `To rent a GPU, navigate to the 'Rent GPU' section in your dashboard. Select the GPU type you need, specify the rental duration, and confirm your rental. You'll receive a confirmation and instructions on how to access your rented GPU.`
        },
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



