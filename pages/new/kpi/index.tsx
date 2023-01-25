import React from "react";
import { Button, OrgTable, PeriodLevel, Title } from "src/components";
import { Input, Option, Select, Textarea } from "@material-tailwind/react";

const NewKPIPage = () => {
    return (
        <div className="pt-6 px-8 flex flex-col lg:flex-row overflow-y-auto h-screen" >
            <div className="flex-[2]">
                <Title title={'Link to Orgnization and Strategy'} />
                <div className="flex mt-4">
                    <div className="flex-1 md:max-w-[100%] lg:max-w-[90%]">
                        <OrgTable />
                    </div>
                    <div className="hidden lg:flex-1" />
                </div>
                <div className="mt-12" />
                <Title title={'Basic Information'} />
                <div className="hidden md:flex flex-row justify-between mt-4" >
                    <Title className="text-lg text-blue-600" title="English" />
                    <Title className="text-lg text-blue-600 px-8" title="عربي" />
                </div>
                <div className="flex flex-col md:flex-row gap-2 justify-between mt-3" >
                    <div className="flex flex-col flex-1">
                        <label className="text-gray-500 text-sm">{'KPI Name'}</label>
                        <div className="mt-2">
                            <Input placeholder="KPI Name" />
                        </div>
                    </div>
                    <div className="flex flex-col flex-1 text-right md:px-8">
                        <label className="text-gray-500 text-sm">{'إسم مؤشر الاداء'}</label>
                        <div className="mt-2">
                            <Input className="text-right" placeholder={'إسم مؤشر الاداء'} />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row gap-2 justify-between mt-3" >
                    <div className="flex flex-col flex-1">
                        <label className="text-gray-500 text-sm">{'Description'}</label>
                        <div className="mt-2">
                            <Textarea placeholder="Enter Description" />
                        </div>
                    </div>
                    <div className="flex flex-col flex-1 md:px-8">
                        <label className="text-gray-500 text-sm text-right">{'الوصف'}</label>
                        <div className="mt-2">
                            <Textarea className="text-right" placeholder={'ادخل الوصف'} />
                        </div>
                    </div>
                </div>
                <div className="mt-12" />
                <Title title={'Measurement Settings'} />
                <div className="flex flex-col md:flex-row gap-2 justify-between mt-3" >
                    <div className="flex flex-col flex-1">
                        <label className="text-gray-500 text-sm">{'Measuremennt Limit'}</label>
                        <div className="mt-2">
                            <Select label="Select">
                                <Option>{'1'}</Option>
                            </Select>
                        </div>
                    </div>
                    <div className="flex flex-col flex-1 md:px-8">
                        <label className="text-gray-500 text-sm">{'Data and Calculation Template'}</label>
                        <div className="mt-2">
                            <Select label="Select">
                                <Option>{'1'}</Option>
                            </Select>
                        </div>
                    </div>
                </div>
                <div className="mt-4" />
                <Title className="text-base text-gray-600" title={'Period Level'} />
                <div className="flex flex-col md:flex-row gap-2 justify-between mt-3" >
                    <PeriodLevel />
                </div>
                <div className="mt-12" />
                <Title title={'Owner'} />
                <div className="flex flex-col md:flex-row gap-2 justify-between mt-3" >
                    <div className="flex flex-col flex-1">
                        <label className="text-gray-500 text-sm">{'Owner'}</label>
                        <div className="mt-2">
                            <Select label="Select Owner">
                                <Option>{'1'}</Option>
                            </Select>
                        </div>
                    </div>
                    <div className="flex flex-col flex-1 px-8" />
                </div>

                <div className="mt-12 border w-full" />

            </div>

            <div className="flex justify-center flex-1 border p-4 px-8 bg-gray-50">
                <div className="flex w-[80%] h-20 border bg-white flex-col gap-2 rounded-xl" >
                    <div className="mt-auto mb-3 flex justify-center" >
                        <Button title="Submit" className="bg-blue-400 w-[80%] items-center justify-center text-white py-2" />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default NewKPIPage;