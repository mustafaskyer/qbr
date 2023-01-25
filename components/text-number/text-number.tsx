import React, { FC } from "react";
import { twMerge } from "tailwind-merge";

interface IProps {
    text?: string;
    count?: number | string;
    direction?: 'vertical' | 'horizontal'
};
export const TextNumnber: FC<IProps> = ({ text, count, direction }) => {
    const clss = twMerge(
        "flex w-fit gap-x-1 items-center",
        direction === 'vertical' ? 'flex-col-reverse gap-y-2' : 'flex-row'
    )
    const textClss = twMerge(
        "text-xs text-gray-600 font-bold",
        direction === 'vertical' ? 'text-base' : undefined
    )
    return (
        <div className={clss}>
            <p className="text-xs text-gray-600">{text}</p>
            <p className={textClss}>{count}</p>
        </div>
    )
}