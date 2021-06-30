import { Box, Heading, VStack } from '@chakra-ui/layout'
import React from 'react'
import { InviteComponent } from './DiscordInvite/index'
import Texts from '../../../lang.json'

export function InviteBadge({
    lang
}) {

    const title = Texts[lang]._SupportBanner1["Need help?"].split(Texts[lang]._SupportBanner1["keyword"])

    return ( 
        <Box id="needSupport" bg="gray.900">
            <VStack p={5} pt={20} pb={20}>
            <Heading mb={5}>{title[0]}<span style={{ background: "-webkit-linear-gradient(45deg, #48BB78, #9AE6B4, #48BB78)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{Texts[lang]._SupportBanner1["keyword"]}</span>{title[1]}</Heading>
            <InviteComponent lang={lang} />
            </VStack>
        </Box>
    )
}
