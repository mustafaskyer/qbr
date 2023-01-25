import React, { FC } from "react";
import { SlArrowLeft } from "react-icons/sl";
import { RiDashboard3Line } from "react-icons/ri";

import { Chip, Button } from "src/components";

interface IProps {
    title: string;
    chipContent?: string;
    showEndButtons?: boolean;
}
export const ActionHeader: FC<IProps> = ({ title, chipContent, showEndButtons = true }) => {
    return (
        <div className="bg-blue-900 flex flex-wrap flex-row justify-between items-center text-white" >
            <div className="px-5 md:px-8 p-5">
                <div className="flex flex-row items-center gap-x-2">
                    <div className="flex w-6 h-6 rounded-full bg-gray-500 items-center justify-center">
                        <SlArrowLeft size={12} color='#fff' />
                    </div>
                    {chipContent && <Chip className="hidden md:block bg-gray-200 text-black" content={chipContent} />}
                    <h6 className="text-base md:text-xl">{title}</h6>
                </div>
            </div>

            {showEndButtons && (
                <div className="px-8 p-5 flex flex-col gap-y-2 md:flex-row gap-x-3">
                    <Button title="Q4/2021" endIconName="arrow" />
                    <Button title="Export Dashboard" endIconName="download" />
                </div>
            )}
        </div>
    )
}