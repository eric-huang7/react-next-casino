import styles from '../../../../styles/MyAccount/CashoutPage/CashoutPage.module.scss'
import Link from 'next/link'
import {useEffect} from "react";
import {svgSetter} from "../../../../helpers/iconNameFinder";

export const LinkItem = ({ balanceData, currencyData, activeCurrencyId }) => {

  let currency = currencyData.find((el) => Number(el.id) === Number(balanceData.currency_id))

  useEffect(() => {
    const returnAbbr = true
    svgSetter(currency, returnAbbr)
  }, [])

  return (
    <li className={`${styles.linkItem} ${Number(activeCurrencyId) === Number(currency.id) ? styles.activeLink : ''}`}>
      <Link
        href={{
          pathname: `/accounts/cashout/${currency.abbreviation}`,
          query: { currency_id: `${currency.id}` }
        }}
      >
        <a>
          <div id={`currencyImageContainer${currency.id}`} className={styles.iconContainer}></div>
          {currency.abbreviation}
        </a>
      </Link>
    </li>
  )
}
