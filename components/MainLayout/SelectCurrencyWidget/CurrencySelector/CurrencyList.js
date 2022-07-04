import styles from '../../../../styles/CurrencySelector/CurrencySelector.module.scss'
import {useDispatch} from 'react-redux'
import {setUserCurrencySwitcher} from '../../../../redux/userFinance/action'
import {addCurrencyToUserList} from '../../../../redux/user/action'
import ErrorEmpty from '../../../ErrorBoundaryComponents/ErrorEmpty'
import {CurrencyItem} from "./CurrencyItem";

export const CurrencyList = ({type, currenciesData, backButtonClickHandler, userAuth}) => {
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
    <ul className={styles.currenciesList}>
      <span className={styles.currencyCategory}>{type}</span>
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
    </ul>
  )
}
