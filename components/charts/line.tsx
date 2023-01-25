import React, { FC, useMemo } from "react";
import { twMerge } from "tailwind-merge";

interface IProps {
    progress?: number;
    type?: 'success' | 'warning' | 'error'
}

const colorsTypesClss = {
    success: { wrapper: 'bg-green-50', inner: 'bg-green-600' },
    warning: { wrapper: 'bg-orange-50', inner: 'bg-orange-300' },
    error: { wrapper: 'bg-red-50', inner: 'bg-red-300' }
}
export const ChartLine: FC<IProps> = ({ progress = 25, type = 'success' }) => {
    const wrapperClss = twMerge("w-full relative h-8 rounded-2xl", colorsTypesClss[type].wrapper)
    const innerClss = twMerge(
        "h-full rounded-2xl flex flex-row items-center justify-end px-4 text-white",
        colorsTypesClss[type].inner,
    )
    return (
        <div className={wrapperClss}>
            <div style={{ width: `${progress}%` }} className={innerClss}>
                <p className={"text-xs font-bold text-center"}>{(progress ?? '') + '%'}</p>
            </div>
        </div>
    )
};