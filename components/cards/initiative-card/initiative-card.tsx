import React, { FC } from "react";
import { CardContent, ChartLine, Chip, Pie, TextNumnber } from "src/components";
import { AiOutlineDashboard } from "react-icons/ai";
import { ITabData } from "src/assets/dummy";
interface IProps extends ITabData { }
export const InitiativeCard: FC<IProps> = ({ actual, target, progress, date, type }) => {
    return (
        <div className="flex flex-col p-4 gap-y-3 bg-gray-50 h-full border border-gray-200 bg-opacity-50 mx-2 rounded-lg items-center">
            <Chip className="bg-blue-100 text-blue-gray-900 font-medium" startIcon={<AiOutlineDashboard />} content={"KPI . " + date} />
            <p >{'Actual Progress'}</p>
            <ChartLine progress={progress} type={type} />
            <div className="flex flex-row gap-x-4" >
                <TextNumnber direction={'vertical'} text="Planned Progress" count={actual + '%'} />
                <TextNumnber direction={'vertical'} text="Variance" count={target + '%'} />
            </div>
            <CardContent />
        </div>
    )
}