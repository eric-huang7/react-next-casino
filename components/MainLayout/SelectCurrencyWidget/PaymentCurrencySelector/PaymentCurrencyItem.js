import styles from '../../../../styles/CurrencySelector/CurrencySelector.module.scss'
import { useEffect } from 'react'
import {useSelector} from "react-redux";
import { svgSetter } from '../../../../helpers/iconNameFinder'

export const PaymentCurrencyItem = ({ paymentMethod, chosePaymentClickHandler }) => {
  const currencyData = useSelector((store) => store.currency.currency.results);

  useEffect(() => {
    let currencyForPayment = currencyData.filter((currency) => currency.id === paymentMethod.currency_from.currency_id);
    const returnAbbr = true
    svgSetter(currencyForPayment[0], returnAbbr);
  }, [])

  return (
    <li onClick={() => chosePaymentClickHandler(paymentMethod)}
        className={`${styles.currencyItem} ${styles.paymentCurrencyItem}`}>
      <div id={`currencyImageContainer${paymentMethod.currency_from.currency_id}`} className={styles.iconContainer}>

      </div>
      <div className={styles.currencyInfoContainer}>
        <div className={styles.currencyAbbrBaseWrapper}>
          <span className={styles.abbreviation}>{paymentMethod.currency_from.currency}</span>
        </div>
      </div>
    </li>
  )
}
