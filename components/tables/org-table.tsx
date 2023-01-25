import React from "react";
import { TbArrowsSplit2 } from "react-icons/tb";

export const OrgTable = () => {
    return (
        <table className="flex flex-col rounded-lg border border-gray-200">
            <thead >
                <tr className="flex flex-1 py-2 px-4 rounded-lg flex-row justify-between border w-full bg-gray-200">
                    <th className="text-sm text-gray-800">{'ORGNIZATION'}</th>
                    <th className="text-sm text-gray-800">{'STRATEGY'}</th>
                </tr>
            </thead>
            <tbody className="w-full">
                <tr className="flex flex-1 border-none py-2 px-4 rounded-lg flex-row justify-between border w-full">
                    <td>
                        <div className="py-3 h-28">
                            <div className="flex flex-row gap-x-6 items-center">
                                <p className="text-sm text-gray-400">{'Department'}</p>
                                <p className="text-sm text-blue-600 font-semibold">{'Marketting and communications'}</p>
                            </div>
                            <div className="w-full h-[1px] bg-gray-200 my-3" />
                            <div className="flex flex-row gap-x-6 items-center">
                                <p className="text-sm text-gray-400">{'Department'}</p>
                                <p className="text-sm text-blue-600 font-semibold">{'Marketting and communications'}</p>
                            </div>
                        </div>
                    </td>
                    <div className="relative" >
                        <div style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                        }} className="hidden lg:flex w-8 h-8 bg-white rounded-full z-10 items-center justify-center" >
                            <TbArrowsSplit2 size={32} />
                        </div>
                        <div style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                        }} className=" border border-gray-100 w-[1px] h-full" />
                    </div>
                    <td>
                        <div className="py-3 h-28">
                            <div className="flex flex-row gap-x-6 items-center">
                                <p className="text-sm text-gray-400">{'Department'}</p>
                                <p className="text-sm text-blue-600 font-semibold">{'Marketting and communications'}</p>
                            </div>
                            <div className="w-full h-[1px] bg-gray-200 my-3" />
                            <div className="flex flex-row gap-x-6 items-center">
                                <p className="text-sm text-gray-400">{'Department'}</p>
                                <p className="text-sm text-blue-600 font-semibold">{'Marketting and communications'}</p>
                            </div>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}