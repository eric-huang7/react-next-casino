import { LinkItem } from './LinkItem'
import ErrorEmpty from '../../../ErrorBoundaryComponents/ErrorEmpty'
import { HStack } from "@chakra-ui/react"
import {Box, Stack, Text} from "@chakra-ui/layout";

export const LinksBlock = ({ t, balanceData, currencyData, activeLink, activeCurrencyId }) => {

  return (
    <Stack direction={{base: 'column', lg: 'row'}} pt="10px" alignItems={{base: 'flex-start', lg: 'center'}}>
      <Box>
        <Text my="16px" mr="24px" fontSize="16px" color="text.450" fontFamily="Verdana" whiteSpace="nowrap">
          {t('myAccount.cashoutPage.iWouldCashout')}
        </Text>
      </Box>
      <HStack flexWrap="wrap" spacing={0}>
        {balanceData.map((el) => (
          <ErrorEmpty key={`${el.id} balance id`}>
            <LinkItem
              key={`${el.id} balance id`}
              balanceData={el}
              currencyData={currencyData}
              activeLink={activeLink}
              activeCurrencyId={activeCurrencyId}
            />
          </ErrorEmpty>
        ))}
      </HStack>
    </Stack>
  )
}
