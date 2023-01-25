import React, { FC } from "react";
import { twMerge } from "tailwind-merge";

interface IProps {
    title?: string;
    className?: string;
};
export const Title: FC<IProps> = ({ title, className }) => {
    const clss = twMerge("text-xl text-blue-900 font-bold", className)
    return (
        <h2 className={clss}>{title}</h2>
    )
};