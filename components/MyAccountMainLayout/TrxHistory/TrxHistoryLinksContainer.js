import styles from '../../../styles/MyAccount/TrxHistory/TrxHistory.module.scss';
import Link from "next/link";
import {useRouter} from "next/router";


export const TrxHistoryLinksContainer = ({t}) => {
  const router = useRouter();

  console.log(router.query.typeOfHistory, 'LINKS+++++++++')
  return (
    <div className={styles.linksWrapper}>
      <div className={`${styles.linkItemContainer} ${styles.linkTransactionsItem} ${!router.query.typeOfHistory ? styles.activeLink : ''}`}>
        <Link href={'/accounts/history'}><a>Transaction History</a></Link>
      </div>
      <div className={`${styles.linkItemContainer} ${styles.linkBetsItem} ${router.query.typeOfHistory === "bets" ? styles.activeLink : ''}`}>
        <Link href={'/accounts/history/history/bets'}><a>Bets History</a></Link>
      </div>
      <div className={`${styles.linkItemContainer} ${styles.linkBonusItem} ${router.query.typeOfHistory === "bonus" ? styles.activeLink : ''}`}>
        <Link href={'/accounts/history/history/bonus'}><a>Bonus History</a></Link>
      </div>
    </div>
  )
}