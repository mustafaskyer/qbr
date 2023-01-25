import { FC, useMemo } from 'react';
import dynamic from 'next/dynamic'
import Circle from 'react-circle';
import colors from "tailwindcss/colors";

interface IProps {
    progress: number;
}

const colorsHash = {
    success: { wrapper: colors.green[500], inner: colors.green[100] },
    warning: { wrapper: colors.orange[500], inner: colors.orange[100] },
    error: { wrapper: colors.red[500], inner: colors.red[100] }
}
export const Pie: FC<IProps> = ({ progress = 85 }) => {
    const color = useMemo(() => {
        if (progress >= 80)
            return colorsHash.success
        if (progress >= 50)
            return colorsHash.warning
        return colorsHash.error
    }, [progress, colorsHash])
    return (
        <Circle
            progress={progress}
            size={'200'}
            lineWidth={'50'}
            progressColor={color.wrapper}
            bgColor={color.inner}
        />
    )
}