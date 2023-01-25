import React, { FC } from "react";
import { twMerge } from "tailwind-merge";

interface IProps {
    startIcon?: React.ReactNode;
    content?: string;
    className?: string;
}
export const Chip: FC<IProps> = ({ startIcon, content, className }) => {
    const clss = twMerge("flex h-fit py-2 items-center justify-center rounded-full px-4 gap-x-3", className)
    return (
        <div className={clss}>
            {startIcon}
            <p className="text-xs">{content}</p>
        </div>
    )
}