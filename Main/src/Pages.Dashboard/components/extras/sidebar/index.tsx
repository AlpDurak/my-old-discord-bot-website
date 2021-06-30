import { Avatar } from '@chakra-ui/avatar'
import React from 'react'
import { FaCode, FaExclamation, FaFilter, FaMoneyBill, FaLock } from 'react-icons/fa'
import { Bar, BarStack, SideLink, SideBarHeader } from './components/index'

type guildType = {
    icon: string | null;
    name: string;
    guildId: string;
}

interface sideBarProps {
    lang: string;
    data?: guildType;
}

export const SideBar = (props: sideBarProps) => {
    const { lang, data } = props;

    if (data) {
        return (
            <Bar>
                <BarStack>
                    <SideBarHeader avatar={<Avatar bg="null" size="sm" src={`${data.icon}`} />} link="#">
                        {data.name}
                    </SideBarHeader>
                    <SideLink icon={<FaCode />} link="/command">
                        Custom Commands
                </SideLink>
                    <SideLink icon={<FaExclamation />} link="/prefix">
                        Change Prefix
                </SideLink>
                    <SideLink icon={<FaFilter />} link="/filters">
                        Filters
                </SideLink>
                    <SideLink icon={<FaMoneyBill />} link="/discount">
                        Discounts
                </SideLink>
                </BarStack>
            </Bar>
        )
    } else {
        return (
            <Bar>
                <BarStack>
                    <SideBarHeader avatar={<Avatar size="sm" src="null" />} link="#">
                        Please select a guild
                </SideBarHeader>
                    <SideLink icon={<FaLock />} link="#">
                        Custom Commands
                    </SideLink>
                    <SideLink icon={<FaLock />} link="#">
                        Change Prefix
                    </SideLink>
                    <SideLink icon={<FaLock />} link="#">
                        Filters
                    </SideLink>
                    <SideLink icon={<FaLock />} link="#">
                        Discounts
                    </SideLink>
                </BarStack>
            </Bar>
        )
    }
}
