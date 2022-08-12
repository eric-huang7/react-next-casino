import { useTranslation } from 'next-i18next'
import { Box, Image } from "@chakra-ui/react"
import {HStack, Text, VStack} from "@chakra-ui/layout";

const images = [
  {name: 'minute', key: 'whySlotsIdol.minuteRegistration', reverse: true},
  {name: 'deposits', key: 'whySlotsIdol.InstantDeposits'},
  {name: 'payouts', key: 'whySlotsIdol.FastPayouts', reverse: true},
  {name: 'licensed', key: 'whySlotsIdol.LicensedAndRegulated'},
]

export const WhySlotsIdol = ({ isBackShow, title }) => {
  const { t } = useTranslation('common')
  return (
    <Box w="100%" backgroundImage="url('/assets/img/mainLayoutImg/section-bg-2.webp')" p="62px 0 85px 0">
      <HStack w="100%" px="54px" pb="30px" justifyContent="center">
        <Text variant="heading" size="lg">
          {title}
        </Text>
      </HStack>
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
            <Image src={`/assets/img/whySlotsIdol/${item.name}.svg`} alt="" />
            <Text variant="heading" size={{base: "xs", lg: "md"}} textAlign="center" maxW="68%" py={{base: 0, lg: "23px"}}>
              {t(item.key)}
            </Text>
          </Box>
        ))}
      </HStack>
      <Box backgroundColor="rgba(0,0,0,0.3)" w="100%" p="40px 0" mt="130px" textAlign="center">
        <Text as="h1" variant="heading" size="lg" textAlign="center" mb="55px">
          {t(`whySlotsIdol.GetMoreCustomerSupport`)}
        </Text>
        <Text variant="text" maxW={{base: "360px", lg: "933px"}} textAlign="center" m="auto">
          {t(`whySlotsIdol.getSupportInnerText`)}
        </Text>
      </Box>
    </Box>
  )
}
