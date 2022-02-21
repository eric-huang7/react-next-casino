import styles from '../../../../styles/MyAccount/CashoutPage/CashoutPage.module.scss'
import { LinkItem } from './LinkItem'
import ErrorEmpty from '../../../ErrorBoundaryComponents/ErrorEmpty'

export const LinksBlock = ({ t, balanceData, currencyData, activeLink, activeCurrencyId }) => {

  return (
    <div className={styles.linksBlock}>
      <div className={styles.textContainer}>
        <p>{t('myAccount.cashoutPage.iWouldCashout')}</p>
      </div>
      <div className={styles.linksContainer}>
        <ul className={styles.linksList}>
          {
            balanceData.map((el) => {
              return (
                <ErrorEmpty key={`${el.id} balance id`}>
                  <LinkItem
                    key={`${el.id} balance id`}
                    balanceData={el}
                    currencyData={currencyData}
                    activeLink={activeLink}
                    activeCurrencyId={activeCurrencyId}
                  />
                </ErrorEmpty>
              )
            })
          }
        </ul>
      </div>
    </div>
  )
}