import React, { FC } from "react";
import { CardContent, Chip, Pie, TextNumnber } from "src/components";
import { AiOutlineDashboard } from "react-icons/ai";
import { ITabData } from "src/assets/dummy";
interface IProps extends ITabData { }
export const KPICard: FC<IProps> = ({ actual, target, progress, date }) => {
    return (
        <div className="flex flex-col p-4 gap-y-4 bg-gray-50 border border-gray-200 bg-opacity-50 mx-2 rounded-lg items-center">
            <Chip className="bg-blue-100 text-blue-gray-900 font-medium" startIcon={<AiOutlineDashboard />} content={"KPI . " + date} />
            <div className="flex w-36 h-36 rounded-full items-center justify-center" >
                <Pie progress={progress} />
            </div>
            <div className="flex flex-row gap-x-4" >
                <TextNumnber text="Actual" count={actual} />
                <TextNumnber text="Target" count={target} />
            </div>
            <CardContent />
        </div>
    )
}