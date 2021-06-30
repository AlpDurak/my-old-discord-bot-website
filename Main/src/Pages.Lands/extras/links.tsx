import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Box, Icon, Link, Stack, Text, useColorModeValue as mode } from '@chakra-ui/react'
import * as React from 'react'

interface DisplayLinkProps {
  link: string
  children: React.ReactNode
}

export const DisplayLink = (props: DisplayLinkProps) => {
  const { link, children } = props
  return (
    <Link href={link} color="gray.300">{children} <sup><Icon as={ExternalLinkIcon} /></sup></Link>
  )
} 