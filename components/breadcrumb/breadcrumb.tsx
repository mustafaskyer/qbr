import { FC } from "react";
import { MdArrowForwardIos } from "react-icons/md";

export interface ILink {
    title: string;
    link?: string;
}
interface IProps {
    links: ILink[]
}
export const BreadCrumb: FC<IProps> = ({ links }) => {
    return (
        <div className="flex items-center flex-row gap-x-[4px]">
            {links.map((link, index) => {
                return (
                    <>
                        <div className="breadcrumb__item">
                            <a className="text-xs" href={link.link}>{link.title}</a>
                        </div>
                        {link?.link && index !== links.length - 1 && (
                            <MdArrowForwardIos className="mt-1" size={14} />
                        )}
                    </>
                )
            })}
        </div>
    );
};