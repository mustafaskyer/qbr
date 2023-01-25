import { SyntheticEvent, useState } from "react";
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";
import { Status } from "../status";
import { TabsData } from "src/assets";
import { CardContainer, InitiativeCard, KPICard } from "../cards";
import { statusesKey, TTabKey } from "src/assets/dummy";

export const HomeTabs = () => {
    const [activeKey, setActiveKey] = useState<TTabKey>("kpis");

    const handleOnChange = (k: any) => {
        setActiveKey(k)
    };

    return (
        <Tabs value="kpis" className={'w-full'}>
            <TabsHeader defaultChecked={true} className="bg-transparent w-full">
                <div className="hidden w-0 lg:block lg:w-[25%]">
                    <p className="text-lg">{8} {'Total'}</p>
                </div>
                <div className="flex flex-1 items-center justify-center flex-row flex-wrap md:flex-nowrap gap-2 md:gap-x-2  ">
                    {TabsData.map(({ key, title, disabled }) => (
                        <Tab disabled={disabled} onClick={() => handleOnChange(key)} className="w-[45%] md:w-[150px] px-2 py-1 h-[40px] rounded-md bg-gray-100" key={key} value={key}>
                            {title}
                        </Tab>
                    ))}
                </div>
                <div className="hidden lg:flex flex-row gap-x-2 w-[30%] justify-end">
                    {statusesKey[activeKey].map((item) => (
                        <Status type={item?.type} content={item?.label} />
                    ))}
                </div>
            </TabsHeader>
            <TabsBody className="p-4 flex-1 mt-4 min-w-full">
                {TabsData.map(({ key, data }) => (
                    <TabPanel className=" flex flex-row gap-y-4 flex-wrap" key={key} value={key}>
                        {data?.map((item) => (
                            <CardContainer>
                                {item?.cardType === 'kpis' && <KPICard {...item} />}
                                {item?.cardType === 'initatives' && <InitiativeCard {...item} />}
                            </CardContainer>
                        ))}
                    </TabPanel>
                ))}
            </TabsBody>
        </Tabs>
    );
}