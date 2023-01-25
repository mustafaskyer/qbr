import React from "react";

export const PeriodLevel = () => {
    return (
        <div className="flex flex-row border rounded-lg border-gray-200 bg-gray-100">
            {['Year', 'After Year', 'Quarter', 'Month'].map((item, index) => (
                <div key={index} className="flex flex-col cursor-pointer items-center justify-centers py-1 px-4 border-r border-gray-200">
                    <p className="text-sm text-gray-800">{item}</p>
                </div>
            ))}
        </div>
    )
};