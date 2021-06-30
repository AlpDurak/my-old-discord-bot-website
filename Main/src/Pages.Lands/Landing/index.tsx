import React from 'react';
import '../../App.css';
import { VStack, Box, Text, Heading, Button, Icon, Badge } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons'
import { FaCrown } from 'react-icons/fa'
import { Navigation, LandingTop, Footer, LandingMiddle, BadgeCreator, MenuDrawer, InviteBadge } from '../../components'
import Texts from '../../../lang.json';

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

export function LandingPage({ lang, setLang, width, height, drawer, drawerRef, data }: {
  lang: "en"|"tr";
  setLang: any;
  width: number;
  height: number;
  drawer: any;
  drawerRef: any;
  data: dataIdentifier;
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
        <LandingTop
          lang={lang}
        />
      </VStack>

      <LandingMiddle
        lang={lang}
      />
      <BadgeCreator
        lang={lang}
      />
      <Box bg="gray.1000">
        <VStack p={2} textAlign="center" alignItems='center' pt={20} pb={20}>
          <Badge display="block" colorScheme="yellow" variant="subtle">
            <Text fontWeight="900" fontFamily="Ubuntu.regular">
              <Icon as={FaCrown}></Icon> { Texts[lang]._PremiumBanner1["premium commands"] } <Icon as={FaCrown}></Icon>
            </Text>
          </Badge>
          <Heading maxW="lg" fontFamily="Inter.regular">
          { Texts[lang]._PremiumBanner1["Create your dream guild with Wowl Premium"] }
          </Heading>
          <Text pt={2} maxW="sm" color="gray.400">
          { Texts[lang]._PremiumBanner1["access all the exclusive commands that Wowl has, you will be one step forward then others."] }
          </Text>
          <Button onClick={() => window.location.href = "/pricing"} size="lg" display="block">
          { Texts[lang]._PremiumBanner1["Learn More"] } <Icon as={ArrowForwardIcon}></Icon>
          </Button>

        </VStack>
      </Box>
      <InviteBadge lang={lang} />
      <Footer
        date={{ expires: "2021" }}
        lang={lang}
        setLang={setLang}
        bg="none"
      />
    </>
  );
}
