import { Button } from '@chakra-ui/button';
import { Box, Divider, Heading, VStack, Text, Link, Center } from '@chakra-ui/layout';
import { useBreakpointValue } from '@chakra-ui/media-query';
import { Table, TableCaption, Tbody, Td, Thead, Tr } from '@chakra-ui/table';
import React from 'react';
import { MenuDrawer, Navigation } from '../../components';
import AdminData from './admins.json'
import { getSizeData } from '../../utils/discord.js'
import { useColorModeValue } from '@chakra-ui/color-mode';
import { Card } from './extras/Card';
import { CardHeader } from './extras/CardHeader';
import { CardContent } from './extras/CardContent';
import { Property } from './extras/Proprety';
import { HiPencilAlt, HiRefresh } from 'react-icons/hi'

type guildType = {
    name: string;
    id: string;
    icon: string | null;
}

type mutualGuildsType = {
    included: [guildType]
    excluded: [guildType]
}

type userType = {
    discordId: string;
    discordTag: string;
    avatar: string | null;
}

type dataIdentifier = {
    getUser: userType | null | undefined;
    getMutualGuilds: mutualGuildsType | null | undefined;
}

export function AdminPage({ lang, setLang, width, height, drawer, drawerRef, data }: {
    lang: string;
    setLang: any;
    width: number;
    height: number;
    drawer: any;
    drawerRef: any;
    data: dataIdentifier;
}) {

    const [refresh, setRefresh] = React.useState<any>(null)
    const [buttonLoading, setButtonLoading] = React.useState<boolean>(true)

    const [guildSize, setGuildSize] = React.useState<string | number>("loading...");
    const [activeUserSize, setActiveUserSize] = React.useState<string | number>("loading...");
    const [dbUserSize, setDbUserSize] = React.useState<string | number>("loading...");
    const [discountPluginSize, setDiscountPluginSize] = React.useState<string | number>("loading...");
    const [filterPluginSize, setFilterPluginSize] = React.useState<string | number>("loading...");
    const [twitchPluginSize, setTwitchPluginSize] = React.useState<string | number>("loading...");

    const runAll = async () => {

        const ParentData = await getSizeData();

        setGuildSize(ParentData.g)
        setActiveUserSize(ParentData.au)
        setDbUserSize(ParentData.dbu)
        setDiscountPluginSize(ParentData.dps)
        setFilterPluginSize(ParentData.fps)
        setTwitchPluginSize(ParentData.tps)
    }

    React.useEffect(() => {
        runAll()
    }, [refresh])

    React.useEffect(() => {
        setTimeout(() => {
            setButtonLoading(false)
        }, 20000)
    }, [buttonLoading])

    const boxWidth = useBreakpointValue(["95%", "85%", "70%"])
    return (

        data.getUser ? (
            AdminData.admins.some(admin => admin === (data.getUser ? data.getUser.discordId : "null")) ? (
                <VStack p={4}>
                    <Navigation
                        data={data}
                        drawer={drawer}
                        drawerRef={drawerRef}
                        lang={lang}
                        menu={true}
                    />
                    <MenuDrawer
                        drawer={drawer}
                        drawerRef={drawerRef}
                        lang={lang}
                    />
                    <Box w={boxWidth} as="section" bg={useColorModeValue('gray.100', 'inherit')} py="12" px={{ md: '8' }}>
                        <Card w="100%" mx="auto">
                            <CardHeader
                                title="User & Guild Data"
                                action={
                                    <Button loadingText="20s" isLoading={buttonLoading} variant="outline" minW="20" onClick={() => {
                                        setButtonLoading(true)
                                        setRefresh(Math.floor(Math.random() * 20))
                                    }} leftIcon={<HiRefresh />}>
                                        Refresh
                                    </Button>
                                }
                            />
                            <CardContent>
                                <Property label="Guild Size" value={guildSize} />
                                <Property label="Active User Size" value={activeUserSize} />
                                <Property label="Dashboard User Size" value={dbUserSize} />
                            </CardContent>
                        </Card>
                    </Box>
                    <Box w={boxWidth} as="section" bg={useColorModeValue('gray.100', 'inherit')} py="12" px={{ md: '8' }}>
                        <Card w="100%" mx="auto">
                            <CardHeader
                                title="Plugin Data"
                                action={
                                    <Button loadingText="20s" isLoading={buttonLoading} variant="outline" minW="20" onClick={() => {
                                        setButtonLoading(true)
                                        setRefresh(Math.floor(Math.random() * 20))
                                    }} leftIcon={<HiRefresh />}>
                                        Refresh
                                    </Button>
                                }
                            />
                            <CardContent>
                                <Property label="Discount Plugin Users" value={discountPluginSize} />
                                <Property label="Filter Plugin Users" value={filterPluginSize} />
                                <Property label="Twitch Plugin Users" value={twitchPluginSize} />
                                <Property label="Youtube Plugin Users" value="Plugin Not Launched" />
                                <Property label="Reddit Plugin Users" value="Plugin Not Launched" />
                                <Property label="Github Plugin Users" value="Plugin Not Launched" />
                                <Property label="Twitter Plugin Users" value="Plugin Not Launched" />
                                <Property label="Auto Role Plugin Users" value="Plugin Not Launched" />
                            </CardContent>
                        </Card>
                    </Box>
                </VStack>
            ) : (
                <Center p={4}>
                    <Box w={boxWidth} bg="gray.700" borderRadius="lg">
                        <Heading p={4} >Error Occured</Heading>
                        <Divider />
                        <VStack p={4} alignItems="left">
                            <Heading >
                                Error 1020
                </Heading>
                            <Text fontFamily="OpenSans.regular">
                                Access Denied, you are not an admin.
                </Text>
                        </VStack>
                        <Divider />
                        <VStack p={4} alignItems="right" justifyContent="right">
                            <Button size="md" as={Link} href="https://next.syfac.xyz/" colorScheme="blue" variant="outline">
                                Go Back
                </Button>
                        </VStack>
                    </Box>
                </Center>
            )
        ) : (
            <Center p={4}>
                <Box w={boxWidth} bg="gray.700" borderRadius="lg">
                    <Heading p={4} >Error Occured</Heading>
                    <Divider />
                    <VStack p={4} alignItems="left">
                        <Heading >
                            Error 401
                </Heading>
                        <Text fontFamily="OpenSans.regular">
                            You're not logged in.
                </Text>
                    </VStack>
                    <Divider />
                    <VStack p={4} alignItems="right" justifyContent="right">
                        <Button size="md" as={Link} href="https://next.syfac.xyz/" colorScheme="blue" variant="outline">
                            Go Back
                </Button>
                    </VStack>
                </Box>
            </Center>
        )

    )
}
