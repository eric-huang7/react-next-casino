import Link from 'next/link'
import { chakra } from "@chakra-ui/react"
import {HStack, Text} from "@chakra-ui/layout";
import CurrencyItemShort from "../../../currency/CurrencyItemShort";

export const LinkItem = ({ balanceData, currencyData, activeCurrencyId }) => {
  let currency = currencyData?.find((el) => Number(el.id) === Number(balanceData.currency_id))
  const isActive = Number(activeCurrencyId) === Number(currency.id);

  return (
    <HStack border="2px solid" borderColor="primary.500" borderRadius="20px 20px 0 0" cursor="pointer"
        mr="7px !important" mb="10px !important" minW="80px" h="50px" bg={isActive ? 'primary.500' : 'transparent'}
    >
      <Link
        href={{
          pathname: `/accounts/cashout/${currency.abbreviation}`,
          query: { currency_id: `${currency.id}` }
        }}
      >
        <chakra.a>
          <CurrencyItemShort
            currencyData={currency}
            hideBase
            fontProps={{color: isActive ? 'white': 'primary.500', fontSize: '18px'}}
            mr="7px"
            py="2px"
          />
          <HStack h="16px" fontSize="12px" justifyContent="center" alignItems="center" w="100%" bg="primary.500">
            <Text color="white" fontWeight={600} fontFamily="Verdana">{currency.base}</Text>
          </HStack>
        </chakra.a>
      </Link>
    </HStack>
  )
}
