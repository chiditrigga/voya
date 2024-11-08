import React from 'react';

interface CardProps {
  title: string;
  description: string;
  buttonLabel: string;
  onButtonClick: () => void;
  bgColor: string;
  textColor: string;
  btcolor:string;
  btext:string;
}

const Card: React.FC<CardProps> = ({ title, description, buttonLabel, onButtonClick, bgColor, textColor,btcolor,btext }) => {
  return (
    <div className={`p-6 rounded-md ${bgColor} ${textColor} w-fit lg:w-64 shadow-md`}>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="mb-4 text-sm">{description}</p>
      <button
        onClick={onButtonClick}
        className={`mt-auto px-4 py-2 ${btcolor} ${btext} font-semibold rounded hover:opacity-80`}
      >
        {buttonLabel}
      </button>
    </div>
  );
};

export default Card;
