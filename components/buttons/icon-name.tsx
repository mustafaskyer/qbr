import React, { FC } from "react";
import { FiChevronDown } from "react-icons/fi";
import { TfiDownload } from "react-icons/tfi";
export type TIconName = 'arrow' | 'download'

interface IProps {
    name?: TIconName
}
export const RenderIconName: FC<IProps> = ({ name, ...props }) => {
    if (name === 'arrow')
        return <FiChevronDown size={20} {...props} />
    if (name === 'download')
        return <TfiDownload size={18} {...props} />
    return null;
};