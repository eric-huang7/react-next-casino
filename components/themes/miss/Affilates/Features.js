import { useTranslation } from 'next-i18next'
import { Text, Box, Image } from '@chakra-ui/react'
import {HStack, Stack, VStack} from "@chakra-ui/layout";

const items = [
  {key: 'affiliates.item1', image: '/assets/img/affiliate/wallet.png'},
  {key: 'affiliates.item2', image: '/assets/img/affiliate/clock.png'},
  {key: 'affiliates.item3', image: '/assets/img/affiliate/rocket.png'},
  {key: 'affiliates.item4', image: '/assets/img/affiliate/ok.png'},
]

const Features = () => {
  const { t } = useTranslation('common')

  return (
    <VStack h="auto" pb="100px" w="100%" bg="white" justifyContent="flex-start" alignItems="center">
      <Text alignItems="center" fontFamily="Roboto" fontWeight={700} fontSize={{base: "30px", lg: "40px"}} px="16px"
            color="primary.600" pb="24px">
        {t('affiliates.title1')}
      </Text>
      <Stack direction={{base: 'column', lg: 'row'}} justifyContent="center"
             alignItems={{base: "center", lg: "flex-start"}} w="100%">
        {items.map((item, index) => (
          <VStack key={index} alignItems="center" width={{base: "50%", lg: "15%"}}>
            <img src={item.image} alt="" />
            <Text textAlign="center" fontFamily="Roboto" fontWeight={400} fontSize="32px" color="primary.600"
              whiteSpace="pre-line">
              {t(item.key)}
            </Text>
          </VStack>
        ))}
      </Stack>
    </VStack>
  )
}

export default Features;