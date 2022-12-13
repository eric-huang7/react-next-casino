import {Box, Text} from "@chakra-ui/layout";
import ErrorEmpty from '/components/ErrorBoundaryComponents/ErrorEmpty'
import {CurrencyItem} from "./CurrencyItem";

export const CurrencyList = ({subtitle, currenciesData = [], onSelect}) => (
  <Box>
    {subtitle && <Box py="20px" ml="12px">
      <Text as="span" color="text.200" fontSize={18}>{subtitle}</Text>
    </Box>}
    {
      currenciesData.map((currencyData) => (
          <ErrorEmpty key={`${currencyData.id} currency`}>
            <CurrencyItem
              currencyData={currencyData}
              onClick={() => onSelect(currencyData)}
              size={8}
              pl="12px"
              pr="6px"
              border
              pointer
            />
          </ErrorEmpty>
        )
      )
    }
  </Box>
)
