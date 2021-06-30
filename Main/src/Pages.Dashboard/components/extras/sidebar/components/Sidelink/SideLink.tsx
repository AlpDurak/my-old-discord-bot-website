import { Box, Button, HStack, Icon, Text } from '@chakra-ui/react'
import * as React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { createLink } from './linkCreator'

interface DisplayLinkProps {
  link: string
  icon: React.ReactElement
  children: React.ReactNode
}

export const SideLink = (props: DisplayLinkProps) => {
  const { icon, link, children } = props

  const currentPath = useLocation();

  const path = currentPath.pathname;
  if(link === "#") {
    return (
      <Link style={{ width: "100%" }} to="/dashboard">
        <Button leftIcon={icon} py={6} justifyContent="left" w="100%" as={Box}>
          {children}
        </Button>
      </Link>
    )
  } else {
    const newLink = createLink(path, link);
    return (
      <Link style={{ width: "100%" }} to={newLink}>
        <Button leftIcon={icon} py={6} justifyContent="left" w="100%" as={Box}>
          {children}
        </Button>
      </Link>
    )
  }
}