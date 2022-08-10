import { HStack } from "@chakra-ui/react"
import {Text} from "@chakra-ui/layout";

export const MainBlock = ({ title }) => (
  <HStack
    w="100%"
    h="100%"
    backgroundImage="url('/assets/img/homeImg/home_header_bckgr.jpg')"
    alignItems="center"
    justifyContent="flex-start"
    p="0  10%"
    minH="22vw"
  >
    <Text as="h1" color="white" lineHeight={1.38} fontSize="60px" fontWeight="bold" fontFamily="Lithograph">
      {title}
    </Text>
  </HStack>
)
