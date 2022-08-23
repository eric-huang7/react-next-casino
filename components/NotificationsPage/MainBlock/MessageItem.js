import { urlGen } from '../../../helpers/imageUrl'
import Link from 'next/link'
import { Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { dateTranslator } from '../../../helpers/dateTranslator'
import { messageStyle } from '../../../helpers/messageStyler'
import {HStack, VStack} from "@chakra-ui/layout";

const TimeText = ({children, ...props}) => (
  <Text
    as="span"
    fontSize="14px"
    lineHeight="30px"
    color="grey.700"
    fontFamily="Verdana"
    alignSelf="flex-end"
    flexShrink={0}
    {...props}
  >
    {children}
  </Text>
)

export const MessageItem = ({ messageType, icon, additionalText, text, link, time, read }) => {
  const router = useRouter()
  let locale = router.locale

  let messageIcon = messageStyle(messageType).messageIcon;

  let colorOfLink = messageStyle(messageType).colorOfLink;

  return (
    <HStack w="100%" alignItems="center" p="19px 14px 13px 17px" borderTop="1px solid #4f4d4d" bg="grey.850">
      <HStack w={{base: "67px", lg: "50px"}} h={{base: "59px", lg: "43px"}} alignItems="center" justifyContent="center" mr="30px">
        <img src={icon ? urlGen(icon) : messageIcon} alt="message icon"/>
      </HStack>
      <VStack w="100%" flexShrink={1} alignItems="start" spacing={0}>
        <Text fontSize="16px" lineHeight={{base: "16px", lg: "30px"}} color={{base: "white", lg: "grey.370"}}
          fontFamily="Verdana" m={0}>
          {text}
        </Text>
        {additionalText && <Link href={link}><a style={{ color: colorOfLink }}>{additionalText}</a></Link>}
        <TimeText display={{base: 'block', lg: 'none'}}>{dateTranslator(time, locale)}</TimeText>
      </VStack>
      <TimeText display={{base: 'none', lg: 'block'}}>{dateTranslator(time, locale)}</TimeText>
    </HStack>
  )
}

