import styles from '../../../../styles/MyAccount/CashoutPage/CashoutPage.module.scss'
import Link from 'next/link'
import CurrencyIcon from "../../../currency/CurrencyIcon";

export const LinkItem = ({ balanceData, currencyData, activeCurrencyId }) => {

  let currency = currencyData?.find((el) => Number(el.id) === Number(balanceData.currency_id))

  return (
    <li className={`${styles.linkItem} ${Number(activeCurrencyId) === Number(currency.id) ? styles.activeLink : ''}`}>
      <Link
        href={{
          pathname: `/accounts/cashout/${currency.abbreviation}`,
          query: { currency_id: `${currency.id}` }
        }}
      >
        <a>
          <div className={styles.currencyContainer}>
            <CurrencyIcon id={currency?.abbreviation} size={6} mr={2}/>
            {currency.abbreviation}
          </div>
          <div className={styles.baseContainer}>{currency.base}</div>
        </a>
      </Link>
    </li>
  )
}
