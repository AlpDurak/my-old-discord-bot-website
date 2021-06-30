import { VStack } from '@chakra-ui/react'
import * as React from 'react'

interface DisplayLinkProps {
  children: React.ReactNode
}

export const BarStack = (props: DisplayLinkProps) => {
  const { children } = props
  return (
    <VStack alignSelf="baseline" w="100%" p={4}>
        { children }
    </VStack>
  )
} 