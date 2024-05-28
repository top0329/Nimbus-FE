import React from 'react';
import { useFAQ } from '../../hooks/FaqContext';
import FaqCard from './FaqCard'; // Assuming you have a FaqCard component
import { FAQs } from '../../data';
const FAQList: React.FC = () => {
    const { openFAQ, setOpenFAQ } = useFAQ();

    return (
        <div className='flex flex-col w-full z-10'>
            {FAQs.map((faq) => (
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



