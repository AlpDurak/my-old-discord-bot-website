import { Box, Button, HStack, Icon, Text } from '@chakra-ui/react'
import * as React from 'react'
import { FaArrowRight, FaChevronDown, FaChevronRight } from 'react-icons/fa'
import { GoTriangleDown, GoTriangleRight } from 'react-icons/go'
import { Link, useLocation } from 'react-router-dom'

interface DisplayLinkProps {
  link: string
  avatar: React.ReactElement
  children: React.ReactNode
}

export const SideBarHeader = (props: DisplayLinkProps) => {
  const { avatar, link, children } = props

  const currentPath = useLocation();

  return (
    <Link style={{width: "100%"}} to={`/dashboard`}>
        <Button leftIcon={avatar} rightIcon={<Icon width="10px" as={GoTriangleDown} />} color="white" colorScheme="null" py={6} justifyContent="left" w="100%" as={Box}>
            { children }
        </Button>
    </Link>
  )
} 