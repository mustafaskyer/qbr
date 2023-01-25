import React, { FC } from "react";
import { twMerge } from "tailwind-merge";

interface IProps {
    className?: string;
    content?: string;
    type?: 'default' | 'success' | 'error' | 'warning' | 'info'
}
export const Status: FC<IProps> = ({ className, content, type = 'default' }) => {
    const clss = twMerge(
        "w-2 h-2 rounded-full bg-green-600",
        type == 'default' && 'bg-gray-600',
        type == 'error' && 'bg-red-600',
        type == 'warning' && 'bg-yellow-600',
        type == 'info' && 'bg-blue-600',
        type == 'success' && 'bg-green-600',
        className
    )
    return (
        <div className="flex flex-row items-center gap-x-2">
            <div className={clss} />
            <p className="text-xs text-gray-500">{content}</p>
        </div>
    )
}