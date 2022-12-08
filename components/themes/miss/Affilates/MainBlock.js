import { useTranslation } from 'next-i18next'
import { Text, Box, Image } from '@chakra-ui/react'
import {HStack} from "@chakra-ui/layout";
import {Button} from "@chakra-ui/button";
// import {buttonGradient} from "../../../../styles/theme";
import {getTheme} from "../../../../helpers/theme";

const {buttonGradient} = getTheme();

const MainBlock = () => {
  const { t } = useTranslation('common')

  return (
    <Box position="relative" minH="400px" bg="white">
      <Image src="/assets/img/affiliate/affiliate-1.jpg" alt="" w="100%" />
      <HStack position="absolute" w="100%" h="100%" left={0} top={0} justifyContent="center" alignItems="flex-start"
              pt="15%" px="16px">
        <Box>
          <Text fontFamily="Roboto" fontWeight={700} fontSize={{base: "30px", lg: "3vw"}} color="primary.600"
                textTransform="uppercase">
            {t('affiliates.heading1')}
          </Text>
          <Text fontFamily="Roboto" fontWeight={700} fontSize={{base: "30px", lg: "3vw"}} color="primary.500"
                textTransform="uppercase" pb="16px">
            {t('affiliates.heading2')}
          </Text>
          <Button bg={buttonGradient} color="white">
            <Text fontFamily="Roboto" fontWeight={400} fontSize={16} color="white" textTransform="uppercase">
              {t('affiliates.become')}
            </Text>
          </Button>
        </Box>
      </HStack>
    </Box>
  )
}

export default MainBlock;