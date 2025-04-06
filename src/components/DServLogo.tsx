
import React from 'react';

interface LogoProps {
  className?: string;
}

const DServLogo: React.FC<LogoProps> = ({ className = "" }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <div className="text-2xl font-bold flex items-center">
        <span className="text-white">D</span>
        <span className="text-logistics-accent">Serv</span>
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="ml-1"
        >
          <path
            d="M14 2C7.373 2 2 7.373 2 14C2 20.627 7.373 26 14 26C20.627 26 26 20.627 26 14C26 7.373 20.627 2 14 2Z"
            stroke="#F79327"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8 14H20"
            stroke="#F79327"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16 8L22 14L16 20"
            stroke="#F79327"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default DServLogo;
