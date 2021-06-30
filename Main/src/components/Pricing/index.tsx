import { ReactNode } from 'react';
import {
  Box,
  Stack,
  HStack,
  Heading,
  Text,
  VStack,
  useColorModeValue,
  List,
  ListItem,
  ListIcon,
  Button,
  Badge,
  Icon,
} from '@chakra-ui/react';
import { FaCheckCircle, FaCrown, FaDiscord } from 'react-icons/fa';

function PriceWrapper({ children }: { children: ReactNode }) {
  return (
    <Box
      mb={4}
      shadow="base"
      borderWidth="1px"
      alignSelf={{ base: 'center', lg: 'flex-start' }}
      borderColor={'gray.500'}
      borderRadius={'xl'}>
      {children}
    </Box>
  );
}

export function Pricing() {
  return (
    <Box py={12}>
      <VStack mb={16} spacing={2} textAlign="center">
        <Badge display="block" colorScheme="yellow" variant="subtle">
          <Text fontWeight="900" fontFamily="Ubuntu.regular">
            <Icon as={FaCrown}></Icon> premium <Icon as={FaCrown}></Icon>
          </Text>
        </Badge>
        <Heading as="h1" fontSize="4xl">
          Syfac Premium Plans
        </Heading>
        <Text fontSize="lg" color={'gray.500'}>
          with Syfac premium you will get access to all exclusive commands!
        </Text>
      </VStack>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        textAlign="center"
        justify="center"
        spacing={{ base: 4, lg: 10 }}
        py={10}>
        <PriceWrapper>
          <Box py={4} px={12}>
            <Text fontWeight="500" fontSize="2xl">
              Basic
            </Text>
            <HStack mt={10} justifyContent="center">
              <Text fontSize="3xl" fontWeight="600">
                $
              </Text>
              <Text fontSize="5xl" fontWeight="900">
                3,00
              </Text>
              <Text fontSize="3xl" color="gray.500">
                /month
              </Text>
            </HStack>
          </Box>
          <VStack
            bg='gray.700'
            py={4}
            borderBottomRadius={'xl'}>
            <List pt={10} spacing={3} textAlign="start" px={12}>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                1 Syfac Premium Code
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                You can vote on Syfac's exclusive polls
              </ListItem>
              <ListItem>
                <ListIcon as={FaDiscord} color="blue.300" />
                  Includes Discord benefits
              </ListItem>
            </List>
            <Box w="80%" pt={7}>
              <Button onClick={() => window.location.replace("https://www.patreon.com/join/syfac/checkout?rid=6902336&cadence=1")} w="full" colorScheme="blue" variant="outline">
                Join
              </Button>
            </Box>
          </VStack>
        </PriceWrapper>

        <PriceWrapper>
          <Box position="relative">
            <Box
              position="absolute"
              top="-16px"
              left="50%"
              style={{ transform: 'translate(-50%)' }}>
              <Text
                textTransform="uppercase"
                bg='twitter.500'
                px={3}
                py={1}
                fontSize="sm"
                fontWeight="600"
                rounded="xl">
                Most Popular
              </Text>
            </Box>
            <Box py={4} px={12}>
              <Text fontWeight="500" fontSize="2xl">
                Standart
              </Text>
              <HStack mt={10} justifyContent="center">
                <Text fontSize="3xl" fontWeight="600">
                  $
                </Text>
                <Text color="brand.100" fontSize="5xl" fontWeight="900">
                  3,99
                  <span style={{ fontSize: "20px" }}><s style={{ color: "white", textDecorationColor: "red", textDecorationWidth: "100px" }}>5,00</s></span>
                </Text>
                <Text fontSize="3xl" color="gray.500">
                  /month
                </Text>
              </HStack>
            </Box>
            <VStack
              bg='gray.700'
              py={4}
              borderBottomRadius={'xl'}>
              <List pt={10} spacing={3} textAlign="start" px={12}>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                2 Syfac Premium Codes
              </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                You can vote on Syfac's exclusive polls
              </ListItem>
                <ListItem>
                  <ListIcon as={FaDiscord} color="blue.300" />
                  Includes Discord benefits
              </ListItem>
              </List>
              <Box w="80%" pt={7}>
                <Button onClick={() => window.location.replace("https://www.patreon.com/join/syfac/checkout?rid=6902337&cadence=1")} w="full" colorScheme="blue">
                  Join
                </Button>
              </Box>
            </VStack>
          </Box>
        </PriceWrapper>
        <PriceWrapper>
          <Box py={4} px={12}>
            <Text fontWeight="500" fontSize="2xl">
              Ultra
            </Text>
            <HStack mt={10} justifyContent="center">
              <Text fontSize="3xl" fontWeight="600">
                $
              </Text>
              <Text fontSize="5xl" fontWeight="900">
                6,00
              </Text>
              <Text fontSize="3xl" color="gray.500">
                /month
              </Text>
            </HStack>
          </Box>
          <VStack
            bg='gray.700'
            py={4}
            borderBottomRadius={'xl'}>
            <List pt={10} spacing={3} textAlign="start" px={12}>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                3 Syfac Premium Codes
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                You can vote on Syfac's exclusive polls
              </ListItem>
              <ListItem>
                <ListIcon as={FaDiscord} color="blue.300" />
                  Includes Discord benefits
              </ListItem>
            </List>
            <Box w="80%" pt={7}>
              <Button onClick={() => window.location.replace("https://www.patreon.com/join/syfac/checkout?rid=6902338&cadence=1")} w="full" colorScheme="blue" variant="outline">
                Join
              </Button>
            </Box>
          </VStack>
        </PriceWrapper>
      </Stack>
    </Box>
  )
}
