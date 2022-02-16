import styles from '../../../../styles/MyAccount/CashoutPage/CashoutPage.module.scss';
import Link from "next/link";
import {LinkItem} from "./LinkItem";


export const LinksBlock = ({t, balanceData, currencyData, activeLink, activeCurrencyId}) => {


  return (
    <div  className={styles.linksBlock}>
      <div className={styles.textContainer}>
        <p>{t("myAccount.cashoutPage.iWouldCashout")}</p>
      </div>
      <div className={styles.linksContainer}>
        <ul className={styles.linksList}>
          {
            balanceData.map((el) => {
              return (
                <LinkItem
                  key={`${el.id} balance id`}
                  balanceData={el}
                  currencyData={currencyData}
                  activeLink={activeLink}
                  activeCurrencyId={activeCurrencyId}
                />
            )
          })
          }
        </ul>
      </div>
    </div>
  )
}