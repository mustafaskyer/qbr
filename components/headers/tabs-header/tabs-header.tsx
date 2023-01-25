import React, { FC } from "react";
import { HomeTabs, Status } from "src/components";

interface IProps {
    count?: number;
    tabs?: string[];
}
export const TabsHeader: FC<IProps> = ({ count = 8, tabs }) => {
    return (
        <div className="flex flex-row w-full p-5 px-10 h-12 items-start justify-between mt-4 bg-white">
            <div className="flex flex-1 mx-auto flex-col bg-white">
                <HomeTabs />
            </div>
        </div>
    )
}