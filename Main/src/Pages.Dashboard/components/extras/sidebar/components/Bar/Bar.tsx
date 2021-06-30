import { Box, Spacer, useBreakpointValue as modifyAs } from '@chakra-ui/react'
import * as React from 'react'

interface DisplayLinkProps {
  children: React.ReactNode
}

export const Bar = (props: DisplayLinkProps) => {
  const { children } = props

  const BoxWidth = modifyAs(["100%", "50%", "30%", "20%", "15%"])

  return (
    <Box position="fixed" bg="gray.900" w={BoxWidth} h="100vh" top="0" display="flex" justifyContent="center" alignItems="center">
        { children }
    </Box>
  )
} 