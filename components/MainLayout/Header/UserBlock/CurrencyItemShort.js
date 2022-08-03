import {baseVariants} from "../../../../envs/currency";
import CurrencyIcon from "../../../currency/CurrencyIcon";
import {Text} from "@chakra-ui/react";
import {Box, HStack, VStack} from "@chakra-ui/layout";

export const CurrencyItemShort = ({ currencyData, isMilli }) => {
  const abbr = currencyData?.abbreviation
  const base = currencyData?.base
  let colorBase = '#4fadcf'

  if (base) {
    colorBase = !!baseVariants[base] ? baseVariants[base] : '#ef8a13'
  } else {
    colorBase = null
  }

  return (
    <HStack spacing={0}>
      <CurrencyIcon id={currencyData?.abbreviation} size={6} mx={2}/>
      <VStack alignItems="flex-start" spacing={0}>
        <Text fontSize="14px" color="currency.500" fontFamily="Verdana">{isMilli && 'm'}{abbr}</Text>
        {!!base && <Box
          h="16px"
          lineHeight="16px"
          fontSize="12px"
          color="white"
          px="3px"
          m={0}
          w="max-content"
          borderRadius="3px"
          bg="primary.500"
          style={{ backgroundColor: `${colorBase}` }}
        >
          {base}
        </Box>}
      </VStack>
    </HStack>
  )
}
