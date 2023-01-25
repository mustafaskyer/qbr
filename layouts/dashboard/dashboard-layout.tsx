import React, { FC } from "react"
import { MainHeader, ActionHeader } from "src/components"

interface IProps {
    children: React.ReactNode
}
export const DashboardLayout: FC<IProps> = ({ children }) => {
    return (
        <>
            <MainHeader />
            <ActionHeader title={'New Initiative Card'} chipContent="Strategic Objective" />
            <div className="flex flex-col flex-1 h-screen overflow-hidden">
                <div className="flex flex-col flex-1">
                    <main className="flex flex-col flex-1 overflow-x-hidden overflow-y-auto bg-white">
                        {children}
                    </main>
                </div>
            </div>
        </>
    )
}