import React from "react";
import { BiBarChart } from "react-icons/bi"
import { CiHome } from "react-icons/ci"
import { SlArrowDown } from "react-icons/sl"
import { AiOutlineBell, AiOutlineMenu, AiOutlineSearch } from "react-icons/ai"
import { BreadCrumb, ILink } from "src/components/breadcrumb";
import { SwitchLang } from "src/components/switch-lang";

// copied from freepik.com
const profileImg = "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=826&t=st=1674566092~exp=1674566692~hmac=913aecf58dd6f61f73ea45dfc4d7419c6b2413a03f03dd001e514cba6dff5239"

// ** constants links
const links: ILink[] = [
    { title: 'Cascade Strategy', link: '#', },
    { title: 'This is long name of division', link: '#', },
    { title: 'This is the name of a strategic objective' },
]
export const MainHeader = () => {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    return (
        <header className="body-font max-h-[80px] bg-blue-500 text-white ">
            <div className="flex flex-row justify-between">
                <div className="flex flex-wrap p-5 flex-col md:flex-row items-center gap-x-1">
                    <a className="title-font font-medium items-center mb-4 md:mb-0 hidden md:flex" >
                        <BiBarChart size={32} />
                    </a>
                    <a className="flex title-font font-medium items-center mb-4 md:mb-0" >
                        <h4 className="text-2xl" >{'QPR'}</h4>
                    </a>
                    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" >
                    </a>
                    <div className="hidden md:flex">
                        <CiHome className="hidden lg:flex" size={20} />
                        <BreadCrumb links={links} />
                    </div>
                </div>

                <div className="hidden lg:flex p-5 flex-row items-center gap-x-3">
                    <AiOutlineBell size={20} />
                    <AiOutlineSearch size={20} />
                    <div className="flex flex-row items-center gap-x-2 md:inline-flex">
                        <img className="w-10 h-10 rounded-full border-2" alt="profile avatar" src={profileImg} />
                        <SlArrowDown size={10} />
                    </div>
                    <div >
                        <SwitchLang />
                    </div>
                    <AiOutlineMenu size={20} />
                </div>

                <div className="fle lg:hidden p-5 flex-row items-center gap-x-3">
                    <AiOutlineMenu size={20} />
                </div>
            </div>
        </header>
    )
}