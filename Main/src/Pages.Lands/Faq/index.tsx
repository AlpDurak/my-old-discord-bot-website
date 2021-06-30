import { Box, Heading, VStack, Link, Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel, Divider, useBreakpointValue, Icon } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Footer, MenuDrawer, Navigation } from '../../components'
import { FaqHeader } from './svg/index'
import { DisplayLink } from '../extras/index'
import './style/motion.css'


export function AboutLanding({ lang, setLang, width, height, drawer, drawerRef, data }: {
    lang: "en" | "tr";
    setLang: any;
    width: number;
    height: number;
    drawer: any;
    drawerRef: any;
    data: any;
}) {

    const headerImageWidth = useBreakpointValue({ base: "280", md: "300", lg: "350", xl: "400" })
    const questionFontSize = useBreakpointValue(['sm', 'md'])

    return (
        <Box minH="100vh">
            <VStack p={4}>
                <Navigation
                    data={data}
                    menu={true}
                    drawer={drawer}
                    drawerRef={drawerRef}
                    lang={lang}
                />
                <MenuDrawer
                    drawer={drawer}
                    drawerRef={drawerRef}
                    lang={lang}
                />
            </VStack>
            <VStack>


<p style={{color: "black", fontSize: "10px"}}>Turkish version coming soon</p>


                <FaqHeader headerImageWidth={headerImageWidth} />

                <Heading px="10" textAlign="center" pt={10} pb={40.1} fontFamily="Inter.regular" mb={5}>Frequently Asked Questions</Heading>

                <Accordion pb={40} borderRadius="xl" w={['80%', '65%', '50%']} defaultIndex={[0]} allowMultiple>
                    <AccordionItem borderTopRadius="xl" borderX="0.5px solid #3F444E">
                        <AccordionButton>
                            <Heading mt={1} fontFamily="OpenSans.regular" fontWeight="100" size={questionFontSize} flex="1" textAlign="left">
                                Why should I use Syfac?
                                </Heading>
                            <AccordionIcon />
                        </AccordionButton>
                        <Divider />
                        <AccordionPanel mt={3} color="brand.100" fontFamily="Ubuntu.regular" pb={4}>
                            Will be edited due to community responses
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem borderX="0.5px solid #3F444E">
                        <AccordionButton>
                            <Heading mt={1} fontFamily="OpenSans.regular" fontWeight="100" size={questionFontSize} flex="1" textAlign="left">
                                How does Syfac discount tracker work?
                                </Heading>
                            <AccordionIcon />
                        </AccordionButton>
                        <Divider />
                        <AccordionPanel mt={3} color="brand.100" fontFamily="Ubuntu.regular" pb={4}>
                            So we start by listing all of our posts from <DisplayLink link="https://twitter.com">Twitter</DisplayLink>
                                using <DisplayLink link="https://ifttt.com">IFTTT</DisplayLink>. We track 5 accounts for now and they are
                                <DisplayLink link="https://steam.com"> Steam</DisplayLink>, <DisplayLink link="https://epicgames.com">EpicGames</DisplayLink>,
                                <DisplayLink link="https://ubisoft.com"> Ubisoft</DisplayLink>, <DisplayLink link="https://humble.com">Humble Bundle</DisplayLink> and
                                <DisplayLink link="https://gog.com"> GOG.com</DisplayLink>. After these accounts post a tweet Syfac's little workers decide if it's
                                 a discount or not. If it's a discount it goes through Syfac Factory which gets the Tweet's text using Twitter API, prettifies the
                                 providers username, gets the link for the providers icon from <DisplayLink link="https://cdn.syfac.xyz/images">Syfac's CDN</DisplayLink> and
                                 bunch of more stuff. Using the output of Syfac Factory, Syfac API sends the data to its users.
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem borderX="0.5px solid #3F444E">
                        <AccordionButton>
                            <Heading mt={1} fontFamily="OpenSans.regular" fontWeight="100" size={questionFontSize} flex="1" textAlign="left">
                                Is Syfac API public?
                                </Heading>
                            <AccordionIcon />
                        </AccordionButton>
                        <Divider />
                        <AccordionPanel mt={3} color="brand.100" fontFamily="Ubuntu.regular" pb={4}>
                            It is public and free-to-use, but to use it you have to have permission from my <Link href="mailto:alpdurak06@gmail.com" color="gray.300">developer <sup><Icon as={ExternalLinkIcon} /></sup></Link>. It's free-to-use but we need credit in your posts as "Powered by Syfac API ⚡"
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem borderBottomRadius="xl" borderX="0.5px solid #3F444E">
                        <AccordionButton>
                            <Heading mt={1} fontFamily="OpenSans.regular" fontWeight="100" size={questionFontSize} flex="1" textAlign="left">
                                How can I use Syfac's discount API?
                                </Heading>
                            <AccordionIcon />
                        </AccordionButton>
                        <Divider />
                        <AccordionPanel mt={3} color="brand.100" fontFamily="Ubuntu.regular" pb={4}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat.
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </VStack>
            <Footer
                date={{ expires: "2021" }}
                lang={lang}
                setLang={setLang}
                bg="gray.900"
            />
        </Box>
    )
}
