import React, { useState } from 'react';
interface CheckboxWithLabelProps {
    label: string;
    onChange: (status: boolean) => void;
}
const LabelCheckBox: React.FC<CheckboxWithLabelProps> = ({ label, onChange }) => {
    const [isChecked, setIsChecked] = useState(true);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
        onChange(!isChecked);
    };
    return (
        <label className="flex items-center cursor-pointer">
            <div className="relative">
                <input
                    type="checkbox"
                    className="hidden"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                    style={{ borderColor: "#4D8CEC" }}
                />
                <div className={`w-6 h-6 border-2 rounded-md flex items-center justify-center light-theme-color`}>
                    {isChecked && (
                        <svg width="6" height="6" viewBox="0 0 6 6" className='w-4 h-4 light-theme-color pointer-events-none' fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="3" cy="3" r="3" fill="#4D8CEC" />
                        </svg>
                    )}
                </div>
            </div>
            <span className="ml-3 light-theme-color">{label}</span>
        </label>

    );
};

export default LabelCheckBox;