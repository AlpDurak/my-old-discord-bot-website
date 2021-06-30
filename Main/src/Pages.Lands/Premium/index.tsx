import { VStack } from '@chakra-ui/react'
import React from 'react'
import { PulseLoader } from 'react-spinners'
import { Navigation, Footer, BadgeCreator, MenuDrawer, Pricing } from '../../components'

export function PremiumPage({ lang, setLang, width, height, drawer, drawerRef, data }: {
    lang: string;
    setLang: any;
    width: number;
    height: number;
    drawer: any;
    drawerRef: any;
    data: any;
}) {
    return (
        <>
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
                <Pricing />
            </VStack>
            <Footer
                date={{ expires: "2021" }}
                lang={lang}
                setLang={setLang}
                bg="gray.900"
            />
        </>
    )
}


