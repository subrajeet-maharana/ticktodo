import React from 'react';

const Block = ({ text, isCrossed }) => {
    return (
        <div className="flex items-center mb-4">
            <div className="w-6 h-6 border border-black mr-4 cursor-pointer"></div>
            <div className={`flex-grow ${isCrossed ? "line-through" : ""}`}>{text}</div>
            <div className="ml-auto cursor-pointer">❌</div>
        </div>
    );
};

export default Block;
