import React from "react";
import { RxSwitch } from "react-icons/rx";
export const SwitchLang = () => {
    return (
        <div className="flex flex-row gap-x-2 items-center">
            <p className="text-xs">{'EN'}</p>
            <RxSwitch size={20} />
            <p className="text-xs">{'AR'}</p>
        </div>
    )
}