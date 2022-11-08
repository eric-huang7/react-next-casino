import {useTranslation} from "next-i18next";
import { Text, HStack, Box, Image } from "@chakra-ui/react";
import {VStack} from "@chakra-ui/layout";
import CurrencyIcon from "../../../currency/CurrencyIcon";

const BonusesSlide = ({amount = '', abbr = 'BTC', active = fals, onClick}) => {
  const {t} = useTranslation('promotionsPage');

  return (
    <Box px="10px" w="240px">
      <VStack
        w="220px"
        h="201px"
        px="0"
        pt="23px"
        pb="19px"
        cursor="pointer"
        spacing={0}
        borderRadius="12px"
        alignItems="center"
        justifyContent="center"
        position="relative"
        bg="url('assets/img/mainLayoutImg/background.webp')"
        onClick={() => onClick && onClick()}
      >
        {active && <Box position="absolute" top={0} right={0} w="220px" h="201px" border="4px solid"
            borderColor="#097E2E" borderRadius="12px" />}
        {active && <Box position="absolute" top={0} right={0} w="23px" h="23px" bg="#097E2E" borderBottomLeftRadius="6px"
             borderTopRightRadius="12px" display="flex" alignItems="center" justifyContent="center">
          <img src="/assets/icons/deposit/check-small.svg" width="12px" height="8px" />
        </Box>}

        <HStack minH="30px" justifyContent="center" alignItems="center" w="calc(100% - 50px)" bg="#AD4B1D"
          borderRadius="100px"
        >
          <img src="/assets/icons/deposit/gift.svg" width="22px" height="22px" alt="" />
          <Text fontSize={16} fontWeight={500} color="white" fontFamily="Montserrat">
            50 Free Spains
          </Text>
        </HStack>
        <Text pt="9px" pb="7px" px="20px" fontSize={17} fontWeight={400} color="white" fontFamily="Montserrat" textTransform="capitalize">
          Min Deposit: $20.00
        </Text>
        <HStack justifyContent="center" alignItems="center" pb="12px">
          <CurrencyIcon id={abbr} size={8}/>
          <Text fontSize={18} fontWeight={500} color="white" fontFamily="Montserrat">{amount} {abbr}</Text>
        </HStack>
        <HStack minH="44px" justifyContent="center" alignItems="center" w="calc(100% - 30px)" bg="#AD4B1D"
          borderRadius="12px" mx="15px">
          <Text px="20px" fontSize={24} fontWeight={500} color="white" fontFamily="Montserrat" letterSpacing="0.25em">
            1:20:35:5
          </Text>
        </HStack>
      </VStack>
    </Box>
  )
}

export default BonusesSlide;