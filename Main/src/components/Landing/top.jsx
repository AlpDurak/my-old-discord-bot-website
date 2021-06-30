import { VStack, Heading, Text, Button, Icon } from '@chakra-ui/react';
import {ArrowForwardIcon} from '@chakra-ui/icons'
import Texts from '../../../lang.json'

export function LandingTop({
    lang,
}) {

    const title = Texts[lang]._Action1["Never Miss a Discount"].split(Texts[lang]._Action1["keyword"])

    return (
        <VStack>
            <Heading textAlign="center" fontFamily="Inter.regular" fontSize={['40px', '40px', '48px']} color='white' mt={8} mb={3}>{title[0]}<span style={{ background: `-webkit-linear-gradient(45deg, rgb(49, 130, 206), rgb(0, 181, 216), rgb(49, 130, 206))`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{Texts[lang]._Action1["keyword"]}</span>{title[1]}</Heading>
            <Text maxW="500px" color="gray.400" textAlign="center" fontSize={["14px", "17px", "19px"]} fontFamily="Ubuntu.regular" pb={2}>{Texts[lang]._Action1["Wowl is a Discord Bot that can post game discounts, notify your members when you post/stream/tweet. Wowl can filter messages and moderate your server pretty well."]}</Text>
            <Button verticalAlign="middle" _pressed={{background: "#4299E1", opacity: '.7'}} _active={{background: "#4299E1", opacity: '.7'}} _hover={{background: "#4299E1", opacity: '.8'}} color="white" size="lg" onClick={() => window.location.href = "https://top.gg/bot/791027511731552256/invite/"} bg="blue.400">{Texts[lang]._Action1["Get Started"]}<Icon ml={1} as={ArrowForwardIcon}></Icon></Button>
        </VStack>
    )
}
