import { Box, Link, SimpleGrid } from '@chakra-ui/react'
import * as React from 'react'
import { FcAcceptDatabase, FcAdvertising, FcEmptyFilter, FcOnlineSupport, FcOvertime, FcPrivacy, FcSalesPerformance, FcSettings } from 'react-icons/fc'
import { Feature } from './extras/index'
import Texts from "../../../lang.json"

export function LandingMiddle({
    lang,
}) {
    return (
        <>
            <svg style={{ flexDirection: "column" }} viewBox="0 0 1440 138" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0L120 32C240 64 480 128 720 128C960 128 1200 64 1320 32L1440 0V138H1320C1200 138 960 138 720 138C480 138 240 138 120 138H0V0Z" fill="#2C323D" />
            </svg>
            <Box flexDirection="column" className="LandingMiddle">
                <Box as="section" maxW="5xl" mx="auto" pb="12" pt={"20"} px={{ base: '6', md: '8' }}>
                    <SimpleGrid columns={{ base: 1, md: 2 }} spacingX="10" spacingY={{ base: '8', md: '14' }}>
                        <Feature title={Texts[lang]._Features1["We care about your Privacy"]} icon={<FcPrivacy />}>
                            { Texts[lang]._Features1["We only store your Avatar, Discord ID, Discord Tag and Guilds as User Data. Your guilds are encrypted in our DataBase."] }
                        </Feature>
                        <Feature title={Texts[lang]._Features1["Wowl is always there for you"]} icon={<FcOvertime />}>
                        { Texts[lang]._Features1["Wowl has a 99,7% uptime on its every system to give you the best service, just like you deserve 😊"] }
                        </Feature>
                        <Feature title={Texts[lang]._Features1["You are secure with Wowl"]} icon={<FcAcceptDatabase />}>
                            {Texts[lang]._Features1["All of your data is saved in a secure DataBase hosted by us."]}
                        </Feature>
                        <Feature title={Texts[lang]._Features1["Customize everything"]} icon={<FcSettings />}>
                            {Texts[lang]._Features1["You can customize pretty much everything in Wowl's commands."]}
                        </Feature>
                        <Feature title={Texts[lang]._Features1["Filter your messages"]} icon={<FcEmptyFilter />}>
                            {Texts[lang]._Features1["With Wowl you can choose your own words to filter in your guild."]}
                        </Feature>
                        <Feature title={Texts[lang]._Features1["Notify your members"]} icon={<FcAdvertising />}>
                            {Texts[lang]._Features1["Wowl can automatically post a message in your guild when you stream/post/tweet."]}
                        </Feature>
                        <Feature title={Texts[lang]._Features1["Save money and time"]} icon={<FcSalesPerformance />}>
                            {Texts[lang]._Features1["Wowl posts game discounts from your favorite Gaming Platforms"]}
                        </Feature>
                        <Feature title={Texts[lang]._Features1["Contact Support"]} icon={<FcOnlineSupport />}>
                            {Texts[lang]._Features1["We have a support team ready to help when you need!"]}<Link color="brand.500" href="#needSupport"> {Texts[lang]._Features1["contact support"]}</Link>
                        </Feature>
                    </SimpleGrid>
                </Box>
            </Box>
        </>
    )
}
