import { Box, Button, Heading, HStack, Spacer, VStack, Text, Avatar } from '@chakra-ui/react'
import * as React from 'react'
import { FaCog, FaCrown } from 'react-icons/fa'
import { Link } from 'react-router-dom'

type guildType = {
    name: string;
    id: string;
    icon: string | null;
}

type dataIdentifier = {
    getUser: {
        discordId: string;
        discordTag: string;
        avatar: string | null;
    };
    getMutualGuilds: {
        included: [guildType]
        excluded: [guildType]
    }
}

interface ServerBoxProps {
    data: dataIdentifier;
}

export const ServerBox = (props: ServerBoxProps) => {
    const { data } = props
    return (
        <>
            {
                data.getMutualGuilds.included.map(guild => (
                    <Box w="100%" shadow="xl" bg="gray.700" borderRadius="lg">
                        <HStack pt={2} pb={2} pl={4} pr={4}>
                            <Avatar bg="null" size="md" src={guild.icon ? `https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}` : 'https://cdn3.iconfinder.com/data/icons/popular-services-brands-vol-2/512/discord-512.png'} />
                            <Text fontFamily="OpenSans.regular">
                                {guild.name}
                            </Text>
                            <Spacer />
                            <Button leftIcon={<FaCrown />} colorScheme="yellow" variant="ghost" onClick={() => window.open('https://discord.gg/hFHKTQTEy5')}>
                                Use Code
                    </Button>
                            <Button leftIcon={<FaCog />} colorScheme="red" variant="ghost" onClick={() => window.open('https://discord.gg/hFHKTQTEy5')}>
                                Manage
                    </Button>
                            <Link to={`/dashboard/${guild.id}`}>
                                <Button as={Box} colorScheme="green">
                                    Dashboard
                    </Button>
                            </Link>
                        </HStack>
                    </Box>
                ))
            }
            {
                data.getMutualGuilds.excluded.map(guild => (
                    <Box w="100%" shadow="xl" bg="gray.700" borderRadius="lg">
                        <HStack pt={2} pb={2} pl={4} pr={4}>
                            <Avatar bg="null" size="md" src={guild.icon ? `https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}` : 'https://cdn3.iconfinder.com/data/icons/popular-services-brands-vol-2/512/discord-512.png'} />
                            <Text fontFamily="OpenSans.regular">
                                {guild.name}
                            </Text>
                            <Spacer />
                            <a href="https://top.gg/bot/791027511731552256/invite">
                                <Button as={Box}>
                                    Setup Syfac
                    </Button>
                            </a>
                        </HStack>
                    </Box>
                ))
            }
        </>
    )
}