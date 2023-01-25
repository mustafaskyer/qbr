import React, { FC } from "react";
import { twMerge } from "tailwind-merge";
import { RenderIconName, TIconName } from "./icon-name";

interface IProps {
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    startIconName?: TIconName
    endIconName?: TIconName
    title?: string;
    className?: string;
}
export const Button: FC<IProps> = ({ startIconName, endIconName, startIcon, title, endIcon, className }) => {
    const clss = twMerge("flex flex-row bg-white text-gray-600 rounded-md px-2 md:px-4 py-1 items-center gap-x-1 md:gap-x-2", className)
    return (
        <button className={clss}>
            {startIcon ?? <RenderIconName name={startIconName} />}
            <p className="font-medium">{title}</p>
            {endIcon ?? <RenderIconName name={endIconName} />}
        </button>
    )
}