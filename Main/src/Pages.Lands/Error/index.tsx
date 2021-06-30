import { Button } from '@chakra-ui/button';
import { Heading, VStack, Text, Box, Divider } from '@chakra-ui/layout';
import errors from './error.json';
import React from 'react';
import { useBreakpointValue } from '@chakra-ui/media-query';
import { useLocation } from 'react-router';

export function ErrorPage({ lang, setLang, width, height, drawer, drawerRef }: {
    lang: string;
    setLang: any;
    width: number;
    height: number;
    drawer: any;
    drawerRef: any;
}) {

    const boxWidth = useBreakpointValue(["95%", "75%", "60%"])

    function useQuery() {
        return new URLSearchParams(useLocation().search);
    }
    let errorCode: number = parseFloat(useQuery().get('errorCode') ? String(useQuery().get('errorCode')) : "1");
    return (
        <Box w={boxWidth} bg="gray.800">
            <Heading>Error Found!</Heading>
            <Divider />
            <VStack alignItems="left" p={20}>
                <Heading >
                    Error{errorCode}
                </Heading>
                <Text fontFamily="OpenSans.regular">
                    {errors[errorCode === 1020 || errorCode === 401 ? errorCode : 1098]}
                </Text>
            </VStack>
            <Divider />
            <VStack alignItems="right" justifyContent="right">
            <Button variant="outline">
                Go Back
            </Button>
            </VStack>
        </Box>

    )
}