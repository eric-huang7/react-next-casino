import {Box, Text} from "@chakra-ui/layout";
import ErrorEmpty from '../../../ErrorBoundaryComponents/ErrorEmpty'
import {CurrencyItem} from "../../../currency/CurrencyItem";

export const CurrencyList = ({type, currenciesData = [], onSelect}) => (
  <Box>
    <Box py="20px" ml="12px">
      <Text as="span" color="text.200" fontSize={18}>{type}</Text>
    </Box>
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
