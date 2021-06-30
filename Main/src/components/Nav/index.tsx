import { HStack, IconButton, Text, Tooltip, MenuButton, Button, Menu, MenuList, MenuItem, Avatar, Spacer, AvatarBadge, Icon, VisuallyHidden, MenuDivider } from '@chakra-ui/react';
import { FaChevronDown, FaChevronUp, FaPlus, FaStar, FaCommentDots, FaBars, FaCrown, FaUserCog } from 'react-icons/fa';
import AdminData from '../../Pages.Lands/Admin/admins.json'
import Texts from  '../../../lang.json'

type guildType = {
  name: string;
  id: string;
  icon: string | null;
}

type mutualGuildsType = {
  included: [guildType]
  excluded: [guildType]
}

type userType = {
  discordId: string;
  discordTag: string;
  avatar: string | null;
}

type dataIdentifier = {
  getUser: userType | null | undefined;
  getMutualGuilds: mutualGuildsType | null | undefined;
}

export function Navigation({
  lang,
  drawerRef,
  drawer,
  menu,
  data
}: {
  lang: "en"|"tr";
  drawerRef: any;
  drawer: any;
  menu: any;
  data: dataIdentifier;
}) {

  const Login = () => {
    window.location.href = 'https://api.syfac.xyz/api/auth/discord'
  };


  return (
    <HStack alignItems="stretch" mb={16} w="100%">
      {
        menu ? (
          <IconButton ref={drawerRef} onClick={drawer.onOpen} aria-label="Menu Button" icon={<FaBars />} />
        ) : (
          <VisuallyHidden />
        )
      }
      <Spacer />
      <Tooltip label={Texts[lang]._Header1["Leave a comment to Wowl on Top.gg"]}>
        <IconButton aria-label="Leave a comment to Wowl on Top.gg" icon={<FaCommentDots />} href="https://top.gg/bot/791027511731552256/" />
      </Tooltip>
      <Tooltip label={Texts[lang]._Header1["Vote Wowl on Top.gg"]}>
        <IconButton aria-label="Vote Wowl on Top.gg" icon={<FaStar />} href="https://top.gg/bot/791027511731552256/" />
      </Tooltip>
      <Tooltip label={Texts[lang]._Header1["Invite Wowl to your guild"]}>
        <IconButton aria-label="Invite Wowl to your guild" icon={<FaPlus />} href="https://top.gg/bot/791027511731552256/invite/" />
      </Tooltip>

      {
        data.getUser ? (
          <Menu>
            {({ isOpen }) => (
              <>
                <MenuButton size="md" as={Button} rightIcon={isOpen ? <FaChevronUp /> : <FaChevronDown />} >
                  <HStack>
                    <Avatar
                      boxSize="1.7rem"
                      borderRadius="full"
                      src={data.getUser ? data.getUser.avatar !== null ? `https://cdn.discordapp.com/avatars/${data.getUser.discordId}/${data.getUser.avatar}` : "null" : "null"}
                      alt={data.getUser ? data.getUser.discordTag.substring(0, data.getUser.discordTag.indexOf("#")) : "null"}
                      mr="5px"
                    ><AvatarBadge boxSize=".8rem" bg="green.400" borderWidth="2px" /></Avatar>

                    <Text translate="no">{data.getUser ? data.getUser.discordTag.substring(0, data.getUser.discordTag.indexOf("#")) : "null"}</Text>
                  </HStack>
                </MenuButton>
                <MenuList>
                  <MenuItem minH="48px">{ Texts[lang]._Menu1["Profile"] }</MenuItem>
                  <MenuItem onClick={() => window.location.href = "/dashboard"} minH="40px">{ Texts[lang]._Menu1["My Servers"] }</MenuItem>
                  <MenuItem onClick={() => window.location.href = "#footer"} minH="40px">{ Texts[lang]._Menu1["Language"] }</MenuItem>
                  <MenuItem onClick={() => window.location.href = "/pricing"} color="yellow.300" minH="40px"><Text pr={1}>{ Texts[lang]._Menu1["Premium"] }</Text><Icon as={FaCrown} /></MenuItem>
                  {
                    AdminData.admins.some(adminId => data.getUser?.discordId === adminId) && (
                      <>
                        <MenuDivider />
                        <MenuItem onClick={() => window.location.href = "/admin"} color="green.400" minH="40px"><Text pr={1}>{ Texts[lang]._Menu1["Admin"] }</Text><Icon as={FaUserCog} /></MenuItem>
                      </>
                    )
                  }
                  <MenuDivider />
                  <MenuItem color="red.500" minH="40px">{ Texts[lang]._Menu1["Log Out"] }</MenuItem>
                </MenuList>
              </>
            )}
          </Menu>
        ) : (
          <Button colorScheme="blue" variant="outline" onClick={Login}>
            { Texts[lang]._Header1["Login"] }
          </Button>
        )
      }
    </HStack>
  )
}
