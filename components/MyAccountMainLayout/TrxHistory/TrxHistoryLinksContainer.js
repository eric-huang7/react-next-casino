import styles from '../../../styles/MyAccount/TrxHistory/TrxHistory.module.scss';
import Link from "next/link";


export const TrxHistoryLinksContainer = ({t}) => {


  return (
    <div className={styles.linksWrapper}>
      <div className={styles.linkTransactionsItemContainer}>
        <Link href={'/accounts/history'}><a>Transaction History</a></Link>
      </div>
      <div className={styles.linkBetsItemContainer}>
        <Link href={'/accounts/bets-history'}><a>Bets History</a></Link>
      </div>
      <div className={styles.linkBonusItemContainer}>
        <Link href={'/accounts/bonus-history'}><a>Bonus History</a></Link>
      </div>
    </div>
  )
}