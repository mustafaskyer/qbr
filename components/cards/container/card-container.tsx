import React, { FC } from "react";
import { twMerge } from "tailwind-merge";

interface IProps {
    className?: string;
    children?: React.ReactNode;
}
export const CardContainer: FC<IProps> = ({ className, children }) => {
    const clss = twMerge("flex flex-col sm:w-full md:w-1/2 lg:w-1/4 h-[372px] mt-4", className)
    return (
        <div className={clss}>
            {children}
        </div>
    )
};