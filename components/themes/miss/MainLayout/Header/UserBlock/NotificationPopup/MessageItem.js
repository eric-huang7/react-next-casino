import Link from 'next/link'
import { Text } from "@chakra-ui/react"
import { urlGen } from '/helpers/imageUrl'
import { dateTranslator } from '/helpers/dateTranslator'
import { useRouter } from 'next/router'
import { messageStyle } from '/helpers/messageStyler'
import {Box, HStack, VStack} from "@chakra-ui/layout";

export const MessageItem = ({ messageType, icon, additionalText, text, link, time }) => {
  const router = useRouter()
  let locale = router.locale

  let messageIcon = messageStyle(messageType).messageIcon
  let colorOfLink = messageStyle(messageType).colorOfLink

  return (
    <HStack
      minH="100px"
      borderTop="2px solid"
      borderColor="grey.800"
      alignItems="center"

      pr="10px"
      bg="grey.850"
      fontFamily="Franklin Gothic"
    >
      <Box
        w="45px"
        minW="45px"
        h="100%"
        mx="15px"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <img src={icon ? urlGen(icon) : messageIcon} alt=""/>
      </Box>
      <VStack
        minH="100px"
        p="10px 0 5px"
        alignItems="flex-start"
        justifyContent="space-around"
        mr="15px"
      >
        <Text fontSize="14px" color="white" wordBreak="break-word" whiteSpace="pre-line" m={0}>
          {text}
        </Text>

        {additionalText ? <Link href={link}><a style={{ color: colorOfLink }}>{additionalText}</a></Link> : ''}

        <Text fontSize="14px" color="text.250">{dateTranslator(time, locale)}</Text>
      </VStack>
    </HStack>
  )
}
