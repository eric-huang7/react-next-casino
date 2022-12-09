import { useTranslation } from 'next-i18next'
import { Box, Image } from "@chakra-ui/react"
import {HStack, Text, VStack} from "@chakra-ui/layout";
import React from "react";

const images = [
  {name: 'minute', key: 'whySlotsIdol.minuteRegistration', reverse: true},
  {name: 'deposits', key: 'whySlotsIdol.InstantDeposits'},
  {name: 'payouts', key: 'whySlotsIdol.FastPayouts', reverse: true},
  {name: 'licensed', key: 'whySlotsIdol.LicensedAndRegulated'},
]

export const WhySlotsIdol = ({ isBackShow, title }) => {
  const { t } = useTranslation('common')
  return (
    <Box w="100%" bg="url('/assets/img/mainLayoutImg/why-bg.jpg')" p={{base: "50px 0 40px", lg: "70px 0 85px 0"}}>
      <Text pb="25px" textAlign="center" color="white" fontSize={{base: "20px", lg: "48px"}} fontFamily="Roboto"
            fontWeight={700}>
        {title.toUpperCase()}
      </Text>
      <HStack w="90%" m="0 auto" alignItems={{base: "flex-start", lg: "center"}}
              justifyContent="center" flexWrap="wrap" spacing={3}>
        {images.map((item, index) => (
          <VStack
            display="flex"
            key={item.name}
            alignItems="center"
            justifyContent={item.reverse ? "flex-end" : "flex-start"}
            w={{base: '35%', lg: 'auto'}}
            mt={{base: !item.reverse ? "50px !important" : 0, lg: !item.reverse ? "135px !important" : 0}}
            mb={{base: item.reverse ? "50px !important" : 0, lg: item.reverse ? "135px !important" : 0}}
            spacing={0}
          >
            <Text fontFamily="Roboto" size={{base: "xs", lg: "md"}} textAlign="center" maxW="68%" py={{base: 0, lg: "23px"}}
                  color="white">
              {t(item.key)}
            </Text>
            <Image src={`/assets/img/whySlotsIdol/${item.name}.svg`} alt="" />
          </VStack>
        ))}
      </HStack>
      <Box backgroundColor="rgba(0, 0, 0, 0.3)" w="100%" p={{base: "8px 30px 13px", lg: "44px 0 27px"}}
           mt={{base: "20px", lg: "108px"}} textAlign="center">
        <Text as="h1" color="white" fontSize={{base: "16px", lg: "36px"}} fontFamily="Roboto" textAlign="center"
              mb="15px" fontWeight={700}>
          {t(`whySlotsIdol.GetMoreCustomerSupport`)}
        </Text>
        <Text color="white" fontSize={{base: "12px", lg: "24px"}} fontFamily="Roboto" maxW={{base: "360px", lg: "933px"}}
              fontWeight={700} textAlign="center" m="auto">
          {t(`whySlotsIdol.getSupportInnerText`)}
        </Text>
      </Box>
    </Box>
  )
}
