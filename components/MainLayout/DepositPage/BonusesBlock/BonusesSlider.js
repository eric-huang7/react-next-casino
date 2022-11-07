import {useTranslation} from "next-i18next";
import { Text, HStack, Box, Image } from "@chakra-ui/react";
import {VStack} from "@chakra-ui/layout";
import BonusesSlide from "./BonusesSlide";

const BonusesSlider = (props) => {
  const {t} = useTranslation('promotionsPage');

  return (
    <VStack
      w="100%"
      flexWrap="nowrap"
      px="0"
      cursor="pointer"
      spacing={3}
      alignItems="flex-start"
      justifyContent="flex-start"
    >
      <Text px="20px" fontSize={17} fontWeight={300} color="white" fontFamily="Montserrat" textTransform="capitalize">
        Choose a bonus
      </Text>
      <HStack h={270} justifyContent="center" alignItems="center" width="100%">
        <BonusesSlide />
      </HStack>
    </VStack>
  )
}

export default BonusesSlider;