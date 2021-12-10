import styles from '../../../styles/MyAccount/TrxHistory/TrxHistory.module.scss';
import Link from "next/link";
import {useRouter} from "next/router";


export const TrxHistoryLinksContainer = ({t}) => {
  const router = useRouter();


  return (
    <div className={styles.linksWrapper}>
      <div className={`${styles.linkItemContainer} ${styles.linkTransactionsItem} ${!router.query.typeOfHistory ? styles.activeLink : ''}`}>
        <Link href={'/accounts/history'}><a>{t("myAccount.history.transactions.links.transactions")}</a></Link>
      </div>
      <div className={`${styles.linkItemContainer} ${styles.linkBetsItem} ${router.query.typeOfHistory === "bets" ? styles.activeLink : ''}`}>
        <Link href={'/accounts/history/history/bets'}><a>{t("myAccount.history.transactions.links.bets")}</a></Link>
      </div>
      <div className={`${styles.linkItemContainer} ${styles.linkBonusItem} ${router.query.typeOfHistory === "bonus" ? styles.activeLink : ''}`}>
        <Link href={'/accounts/history/history/bonus'}><a>{t("myAccount.history.transactions.links.bonus")}</a></Link>
      </div>
    </div>
  )
}