import styles from '../../../../styles/CurrencySelector/CurrencySelector.module.scss'
import {useDispatch} from 'react-redux'
import {setUserCurrencySwitcher} from '../../../../redux/userFinance/action'
import {addCurrencyToUserList} from '../../../../redux/user/action'
import ErrorEmpty from '../../../ErrorBoundaryComponents/ErrorEmpty'
import CurrencyIcon from "../../../CurrencyIcon";
import {Box, HStack, VStack} from "@chakra-ui/layout";
import {baseVariants} from "../../../../envs/currency";

export const CurrencyList = ({type, currenciesData, backButtonClickHandler, userAuth}) => {
  const dispatch = useDispatch()

  const currencySelectorHandler = (id) => {
    const currencyData = currenciesData.find(item => item.id === id)
    dispatch(setUserCurrencySwitcher(currencyData))

    if (userAuth) {
      let currency = {
        currency_id: currencyData.id
      }
      dispatch(addCurrencyToUserList(currency))
    }

    backButtonClickHandler()
  }

  const getColorBase = (base) => {
    return base && !!baseVariants[base] ? baseVariants[base] : '#ef8a13'
  }

  return (
    <ul className={styles.currenciesList}>
      <span className={styles.currencyCategory}>{type}</span>
      {
        currenciesData.map(({id, name, abbreviation, base}) => (
            <ErrorEmpty key={`${id} currency`}>
              <li onClick={() => currencySelectorHandler(id)} className={styles.currencyItem}>
                <CurrencyIcon id={abbreviation} size={35} mr={2}/>
                <VStack py="10px" px="3px" borderBottom="1px solid #cbcbcb" w="100%" alignItems="start" spacing={0}>
                  <HStack alignItems="center" spacing={0}>
                    <Box className={styles.abbreviation} mr="4px">{abbreviation}</Box>
                    {!!base && <Box className={styles.baseName} sx={{bg: `${getColorBase(base)}`}}>{base}</Box>}
                  </HStack>
                  <Box className={styles.name}>{name}</Box>
                </VStack>
              </li>
            </ErrorEmpty>
          )
        )
      }
    </ul>
  )
}
