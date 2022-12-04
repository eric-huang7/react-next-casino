import { useTranslation } from 'next-i18next'
import { Text, Box, Image } from '@chakra-ui/react'
import {HStack, VStack} from "@chakra-ui/layout";

const Info = () => {
  const { t } = useTranslation('common')

  return (
    <VStack w="100%" alignItems="center" pt="70px" pb="35px"
      backgroundColor="#f78d99"
      backgroundImage="url('/assets/img/affiliate/message.svg')"
      backgroundRepeat="no-repeat"
      backgroundPosition="95% 5%"
    >
      <VStack w={{base: '100%', lg: '70%'}} maxW={{base: '100%', lg: '70%'}} alignItems="center" px="16px">
        <Text alignItems="center" fontFamily="Roboto" fontWeight={700} fontSize="40px" color="white" pb="20px">
          {t('affiliates.fact.title')}
        </Text>
        <Text alignItems="center" fontFamily="Roboto" fontWeight={400} fontSize="24px" color="white" pb="54px"
            whiteSpace="pre-line">
          {t('affiliates.fact.text')}
        </Text>
      </VStack>
      <HStack w="100%" bg="rgba(0, 0, 0, 0.2)" h="70px" alignItems="center" justifyContent="center">
        <Text alignItems="center" fontFamily="Roboto" fontWeight={400} fontSize="24px" color="white">
          {t('affiliates.fact.termsLink')}
        </Text>
      </HStack>
    </VStack>
  )
}

export default Info;