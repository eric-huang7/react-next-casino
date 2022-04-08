import styles from '../../styles/BalanceMenu/BalanceMenu.module.scss'
import { numberTransformer } from '../../helpers/numberTransformer'
import { patchUserActiveCurrency } from '../../redux/user/action'
import { useDispatch } from 'react-redux'
import {useEffect} from "react";
import {svgSetter} from "../../helpers/iconNameFinder";
import {CurrencyItemShort} from "../MainLayout/Header/UserBlock/CurrencyItemShort";

export const BalanceItem = ({ balanceData, currencyData }) => {
  const dispatch = useDispatch()

  const chooseClickHandler = () => {
    let userData = {
      id: balanceData.user_id,
      base_currency_id: balanceData.currency_id
    }
    dispatch(patchUserActiveCurrency(userData))

  }

  let currency = currencyData.currency.results.find((el) => Number(el.id) === Number(balanceData.currency_id))
  let amount = numberTransformer(balanceData.current_balance)

  useEffect(() => {
    const returnAbbr = false
    svgSetter(currency, returnAbbr)
  }, [])

  return (
    <li onClick={() => chooseClickHandler()} className={styles.balanceItem}>
      <span>{amount}</span>
      <span>
        <CurrencyItemShort currencyData={currency} />
      </span>
    </li>
  )
}
