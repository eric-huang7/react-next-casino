import styles from '../../../../styles/CurrencySelector/CurrencySelector.module.scss'
import { CurrencyItem } from './CurrencyItem'
import { useDispatch } from 'react-redux'
import { setUserCurrencySwitcher } from '../../../../redux/userFinance/action'
import { addCurrencyToUserList } from '../../../../redux/user/action'
import ErrorEmpty from '../../../ErrorBoundaryComponents/ErrorEmpty'

export const CurrencyList = ({ t, type, currenciesData, backButtonClickHandler, userAuth, onSelect }) => {
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
        currenciesData.map((currency) => {

          return (
            <ErrorEmpty key={`${currency.id} currency`}>
              <CurrencyItem
                t={t}
                currencyData={currency}
                key={`${currency.id} currency`}
                currencySelectorHandler={onSelect}
              />
            </ErrorEmpty>
          )
        })
      }
    </ul>
  )
}