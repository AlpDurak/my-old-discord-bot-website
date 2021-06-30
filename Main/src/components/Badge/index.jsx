import { VStack, HStack, Heading, Button, Box, Center } from '@chakra-ui/react';
import { FaBookOpen } from 'react-icons/fa';
import Texts from '../../../lang.json'

export function BadgeCreator({
    lang,
}) {

    const title = Texts[lang]._QuestionBanner1["Still have questions?"].split(Texts[lang]._QuestionBanner1["keyword"])
    let a = "#3182CE", b = "#00B5D8", c = "#3182CE"

    return (
        <Box bg="gray.900">
            <Center>
                <VStack p={5} mt={10} mb={10}>
                    <HStack mb={2}><Heading>{title[0]}<span style={{ background: `-webkit-linear-gradient(45deg, ${a}, ${b}, ${c})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{ Texts[lang]._QuestionBanner1["keyword"] }</span>{title[1]}</Heading></HStack>
                    <Button leftIcon={<FaBookOpen />} boxShadow="lg" onClick={() => window.location.href = "/about"}>{ Texts[lang]._QuestionBanner1["FAQ"] }</Button>
                </VStack>
            </Center>
        </Box>
    )
}
