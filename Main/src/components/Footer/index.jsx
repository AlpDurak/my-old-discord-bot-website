import { VStack, HStack, Heading, Text, Spacer, Box, Wrap, VisuallyHidden, Select } from '@chakra-ui/react';

import Texts from '../../../lang.json'

export function Footer({
    lang,
    setLang,
    date,
    bg
}) {
    return (
        <Box w="100%" bg={bg} id="footer" display="flex" justifyContent="center">
            <Wrap alignItems="stretch" w={["90%", "90%", "90%", "60%"]} pt={10} pb={10}>

                <VStack alignItems="flex-start">
                    <Heading fontFamily="OMEGLE.regular" size="xl">wowl</Heading>
                    <Text color="grey.400">{Texts[lang]._Footer1["All Rights Reserved"]} © 2020 - {date.expires} Wowl</Text>
                </VStack>

                <Spacer />
                <VStack>
                    <Select variant="filled" value={lang} onChange={(e) => {
                        console.log(e.target.value)
                        setLang(e.target.value)
                    }} w="-moz-min-content">
                        {
                            Object.keys(Texts).map((key, index) => {
                                return (
                                    <option value={key}>{Texts[key].Language}</option>
                                )
                            })
                        }
                    </Select>
                    <a href="//www.dmca.com/Protection/Status.aspx?ID=af3d590a-ac46-49c4-a3d4-861b422959c5" title="DMCA.com Protection Status" className="dmca-badge"> <img src="https://images.dmca.com/Badges/dmca-badge-w100-5x1-10.png?ID=af3d590a-ac46-49c4-a3d4-861b422959c5"  alt="DMCA.com Protection Status" /></a>
                </VStack>
                <VisuallyHidden>
                    <HStack p={1}>
                        <VStack alignItems="flex-start">
                            <Text color="grey.400">Moderation</Text>
                            <Text color="grey.400">Fun</Text>
                        </VStack>
                        <VStack alignItems="flex-start" ml={5}>
                            <Text color="grey.400">Discount Tracker</Text>
                            <Text color="grey.400">Filters</Text>
                        </VStack>
                    </HStack>
                </VisuallyHidden>


            </Wrap>
        </Box>
    )
}