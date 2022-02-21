import styles from '../../../../styles/MyAccount/CashoutPage/CashoutPage.module.scss'
import Link from 'next/link'

export const LinkItem = ({ balanceData, currencyData, activeCurrencyId }) => {

  let currency = currencyData.find((el) => Number(el.id) === Number(balanceData.currency_id))

  return (
    <li className={`${styles.linkItem} ${Number(activeCurrencyId) === Number(currency.id) ? styles.activeLink : ''}`}>
      <Link
        href={{
          pathname: `/accounts/cashout/${currency.abbreviation}`,
          query: { currency_id: `${currency.id}` }
        }}
      >
        <a>
          {currency.abbreviation}
        </a>
      </Link>
    </li>
  )
}