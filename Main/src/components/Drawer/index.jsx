import { Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, Avatar, DrawerBody, Link, Text, HStack, VStack } from '@chakra-ui/react'
import Texts from '../../../lang.json'

export function MenuDrawer({
    drawerRef,
    drawer,
    lang
}) {
    return (
        <Drawer
        size="xs"
        isOpen={drawer.isOpen}
        placement="left"
        onClose={drawer.onClose}
        finalFocusRef={drawerRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader cursor="pointer" onClick={() => window.location.href = "/"}><HStack><Avatar background="null" size="xs" src="https://cdn.syfac.xyz/images/wowl/wowl.png" /><Text css={{ marginLeft: "5px !important" }} color="brand.100" fontWeight="100" fontFamily="Comforta.regular">Wowl</Text></HStack></DrawerHeader>

          <DrawerBody>
            <VStack alignItems="left">
             <Link href="https://docs.syfac.xyz/" fontFamily="OpenSans.regular">{Texts[lang]._Drawer1["Documents"]}</ Link>
             <Link href="https://syfac.xyz/news" fontFamily="OpenSans.regular">{Texts[lang]._Drawer1["What's New"]}</ Link>
             <Link href="mailto:alpdurak06@gmail.com" fontFamily="OpenSans.regular" color="blue.400">{Texts[lang]._Drawer1["We're Hiring"]}</ Link>
             </VStack>
         </DrawerBody>
        </DrawerContent>
      </Drawer>
    )
}
