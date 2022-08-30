import { Text, Image } from "@chakra-ui/react"
import {HStack, VStack, Stack, Box} from "@chakra-ui/layout";

export const ContactsBlocks = ({ t }) => {
  let blocksInfo = [
    {
      id: 1,
      heading: 'contactUsPage.contactsBlock.liveChat.heading',
      text: 'contactUsPage.contactsBlock.liveChat.textInfo',
      image: '/assets/img/contactUs/icons/liveChat.svg',
    },
    {
      id: 2,
      heading: 'contactUsPage.contactsBlock.email.heading',
      text: 'contactUsPage.contactsBlock.email.textInfo',
      image: '/assets/img/contactUs/icons/email.svg'
    },
    {
      id: 3,
      heading: 'contactUsPage.contactsBlock.phone.heading',
      text: 'contactUsPage.contactsBlock.phone.textInfo',
      image: '/assets/img/contactUs/icons/phone.svg'
    },
  ]

  return (
    <Box w="100%" p="0 20px">
      <Box maxW="1300px" m="0 auto">
        {
          blocksInfo.map((el) => {
            return (
              <Box
                key={el.id}
                bg="rgba(58, 25, 18, 0.7)"
                p="10px"
                m="0 auto 35px"
                minH="205px"
                maxW="830px"
              >
                <Stack
                  direction={{base: "column", lg: "row"}}
                  border="1px solid #E39735"
                  p="16px"
                  alignItems="center"
                  minH="inherit"
                  position="relative"
                  justifyContent="flex-start"
                  spacin={0}
                >
                  <HStack w="150px" minW="150px" justifyContent="center" alignItems="center" p="30px">
                    <Image w="100%" src={el.image} alt='' />
                  </HStack>
                  <VStack justifyContent={{base: "center", lg: "flex-start"}}>
                    <Text as="h3" fontSize={{base: "16px", lg: "18px"}} lineHeight="30px" color="white"
                          fontFamily="Verdana" textTransform="uppercase" m={0}>
                      {t(el.heading)}
                    </Text>
                    <Text fontSize={{base: "14px", lg: "16px"}} lineHeight="30px" color="white"
                      whiteSpace="break-spaces" m={0} textAlign={{base: "center", lg: "left"}}>
                      {t(el.text)}
                    </Text>
                  </VStack>
                </Stack>
              </Box>
            )
          })
        }
      </Box>
    </Box>
  )
}
