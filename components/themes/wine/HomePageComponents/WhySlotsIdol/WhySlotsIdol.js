import { useTranslation } from 'next-i18next'
import { Box, Image } from "@chakra-ui/react"
import {HStack, Text, VStack} from "@chakra-ui/layout";
import React from "react";
import {assetsPath} from "../../../../../envs/theme";

const images = [
  {name: 'minute', key: 'whySlotsIdol.minuteRegistration', reverse: true},
  {name: 'deposits', key: 'whySlotsIdol.InstantDeposits'},
  {name: 'payouts', key: 'whySlotsIdol.FastPayouts', reverse: true},
  {name: 'licensed', key: 'whySlotsIdol.LicensedAndRegulated'},
]

export const WhySlotsIdol = ({ isBackShow, title }) => {
  const { t } = useTranslation('common')
  return (
    <Box w="100%" backgroundImage={`url('${assetsPath}/img/mainLayoutImg/why-bg.jpg')`} backgroundSize="cover"
         pt={{base: '40px', lg: '70px'}} pb={{base: '45px', lg: '85px'}}>
      <Text pb="25px" textAlign="center" color="white" fontSize={{base: '28px', lg: "48px"}} fontFamily="Roboto"
        fontWeight={700}>
        {title.toUpperCase()}
      </Text>
      <HStack w="90%" m="0 auto" alignItems={{base: "flex-start", lg: "center"}}
              justifyContent="center" flexWrap="wrap" spacing={3}>
        {images.map((item, index) => (
          <Box
            display="flex"
            key={item.name}
            alignItems="center"
            flexDirection={{base: 'column', lg: item.reverse ? 'column-reverse' : 'column'}}
            w={{base: '35%', lg: 'auto'}}
            mt={{base: !item.reverse ? "50px !important" : 0, lg: 0}}
            spacing={0}
          >
            <Image src={`${assetsPath}/img/whySlotsIdol/${item.name}.svg`} alt="" />
            <Text fontFamily="Roboto" size={{base: "xs", lg: "md"}} textAlign="center" maxW="68%"
              pt={{base: '28px', lg: "23px"}} pb={{base: 0, lg: "23px"}} color="white">
              {t(item.key)}
            </Text>
          </Box>
        ))}
      </HStack>
      <Box backgroundColor="rgba(209, 0, 31, 0.31)" w="100%" px="16px" pt={{base: '16px', lg: "44px"}}
         pb={{base: '16px', lg: "27px"}} mt={{base: '20px', lg: "108px"}}
        textAlign="center">
        <Text as="h1" color="white" fontSize={{base: '20px', lg: "36px"}} fontFamily="Roboto" textAlign="center"
          mb="15px" fontWeight={700}>
          {t(`whySlotsIdol.GetMoreCustomerSupport`)}
        </Text>
        <Text color="white" fontSize={{base: '16px', lg: "24px"}} fontFamily="Roboto" maxW={{base: "360px", lg: "933px"}}
              fontWeight={700} textAlign="center" m="auto">
          {t(`whySlotsIdol.getSupportInnerText`)}
        </Text>
      </Box>
    </Box>
  )
}
