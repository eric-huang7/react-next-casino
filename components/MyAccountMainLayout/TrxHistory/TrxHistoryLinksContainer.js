import styles from '../../../styles/MyAccount/TrxHistory/TrxHistory.module.scss';
import Link from "next/link";


export const TrxHistoryLinksContainer = ({t}) => {


  return (
    <div className={styles.linksWrapper}>
      <div className={`${styles.linkItemContainer} ${styles.linkTransactionsItem} ${styles.activeLink}`}>
        <Link href={'/accounts/history'}><a>Transaction History</a></Link>
      </div>
      <div className={`${styles.linkItemContainer} ${styles.linkBetsItem} `}>
        <Link href={'/accounts/bets-history'}><a>Bets History</a></Link>
      </div>
      <div className={`${styles.linkItemContainer} ${styles.linkBonusItem}`}>
        <Link href={'/accounts/bonus-history'}><a>Bonus History</a></Link>
      </div>
    </div>
  )
}