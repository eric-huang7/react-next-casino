import {useDispatch} from 'react-redux'
import {Text} from "@chakra-ui/react";
import {Box} from "@chakra-ui/layout";
import {setUserCurrencySwitcher} from '../../../../redux/userFinance/action'
import {addCurrencyToUserList} from '../../../../redux/user/action'
import ErrorEmpty from '../../../ErrorBoundaryComponents/ErrorEmpty'
import {CurrencyItem} from "../../../currency/CurrencyItem";

export const CurrencyList = ({type, currenciesData = [], backButtonClickHandler, userAuth}) => {
  const dispatch = useDispatch()

  const currencySelectorHandler = (currencyData) => {
    dispatch(setUserCurrencySwitcher(currencyData))

    if (userAuth) {
      let currency = {
        currency_id: currencyData.id
      }
      dispatch(addCurrencyToUserList(currency))
    }

    backButtonClickHandler()
  }

  return (
    <Box>
      <Text as="span" color="text.200" fontSize={15} my="20px" ml="12px">{type}</Text>
      {
        currenciesData.map((currencyData) => (
            <ErrorEmpty key={`${currencyData.id} currency`}>
              <CurrencyItem
                currencyData={currencyData}
                onClick={() => currencySelectorHandler(currencyData)}
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
}
