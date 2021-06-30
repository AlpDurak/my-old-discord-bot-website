import { Avatar } from '@chakra-ui/avatar'
import { Button } from '@chakra-ui/button'
import { Box, HStack, Spacer, Text } from '@chakra-ui/layout'
import Texts from '../../../../lang.json'
import React from 'react'

export function InviteComponent({
    lang
}) {



    return (
        <>
            <Box shadow="xl" bg="gray.800" borderRadius="lg">
                <HStack pt={2} pb={2} pl={4} pr={4}>
                    <Avatar bg="null" size="md" src="https://cdn.discordapp.com/icons/721107683507306597/1b7b95c2f67b7e759737fc9970c6f60a.webp?size=128" />
                    <Text>
                        {Texts[lang]._SupportBanner1["Wowl Help Centre"]}
                    </Text>
                    <Spacer />
                    <Button onClick={() => window.open('https://discord.gg/hFHKTQTEy5')}>
                        {Texts[lang]._SupportBanner1["Join"]}
                    </Button>
                </HStack>
            </Box>
        </>
    )
}
