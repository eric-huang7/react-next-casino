import {useTranslation} from "next-i18next";
import { Text, HStack, Box, Image } from "@chakra-ui/react";
import {VStack} from "@chakra-ui/layout";

const BonusesSlide = (props) => {
  const {t} = useTranslation('promotionsPage');

  return (
    <VStack
      w="220px"
      h="201px"
      px="0"
      py="20px"
      cursor="pointer"
      spacing={0}
      borderRadius="12px"
      alignItems="center"
      justifyContent="center"
      border="4px solid"
      borderColor="#097E2E"
      bg="url('assets/img/mainLayoutImg/background.webp')"

    >
      <HStack height="30px" justifyContent="center" alignItems="center" width="calc(100% - 40px)" bg="#AD4B1D" borderRadius="12px"
      >
        <img src="/assets/icons/deposit/gift.svg" width="22px" height="22px" alt="" />
        <Text fontSize={16} fontWeight={500} color="white" fontFamily="Montserrat">
          50 Free Spains
        </Text>
      </HStack>
      <Text pt="11px" pb="9px" px="20px" fontSize={17} fontWeight={500} color="white" fontFamily="Montserrat" textTransform="capitalize">
        Min Deposit: $20.00
      </Text>

      <HStack mt="15px" height="44px" justifyContent="center" alignItems="center" width="calc(100% - 30px)" bg="#AD4B1D" borderRadius="12px" mx="15px">
        <Text px="20px" fontSize={24} fontWeight={500} color="white" fontFamily="Montserrat">1:20:35:5</Text>
      </HStack>
    </VStack>
  )
}

export default BonusesSlide;