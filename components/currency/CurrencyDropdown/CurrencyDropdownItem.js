import {Box, HStack, VStack, Text} from "@chakra-ui/layout";
import {baseVariants} from "../../../envs/currency";
import CurrencyIcon from "../CurrencyIcon";

const CurrencyDropdownItem = ({ currencyData, border, pointer, ...props }) => {
  const { abbreviation, name, base } = currencyData

  const getColorBase = (base) => {
    return base && !!baseVariants[base] ? baseVariants[base] : '#ef8a13'
  }

  return (
    <HStack alignItems="center" spacing={0} sx={{cursor: pointer && 'pointer'}} {...props}>
      <CurrencyIcon id={abbreviation} size={7} mr={2}/>
      <VStack py="0" w="100%" alignItems="start" spacing={0}>
        <HStack alignItems="center" spacing={0}>
          <Text as="div" fontSize="15px" lineHeight="20px" color="white" mr={1} minW={45} textAlign="left">
            {abbreviation}
          </Text>
          {!!base && <Box
            ml="5px"
            p="0px 5px 2px"
            borderRadius="5px"
            lineHeight="20px"
            sx={{bg: `${getColorBase(base) || '#4fadcf'}`}}
          >
            <Text as="span" fontSize="13px" lineHeight="15px" color="white">
              {base}
            </Text>
          </Box>}
        </HStack>
        <Text as="div" fontSize="14px" lineHeight="14px" color="white">
          {name}
        </Text>
      </VStack>
    </HStack>
  )
}

export default CurrencyDropdownItem;