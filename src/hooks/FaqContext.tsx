import React, { createContext, useState, useContext } from 'react';

type FaqContextType = {
    openFAQ: number | null;
    setOpenFAQ: (index: number | null) => void;
};

const FAQContext = createContext<FaqContextType | undefined>(undefined);

export const FaqContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    const [openFAQ, setOpenFAQ] = useState<number | null>(null);

    return (
        <FAQContext.Provider value={{ openFAQ, setOpenFAQ }}>
            {children}
        </FAQContext.Provider>
    );
};

export const useFAQ = () => {
    const context = useContext(FAQContext);
    if (!context) {
        throw new Error('useFAQ must be used within a FAQProvider');
    }
    return context;
};