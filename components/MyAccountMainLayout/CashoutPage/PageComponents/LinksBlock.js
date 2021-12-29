import styles from '../../../../styles/MyAccount/CashoutPage/CashoutPage.module.scss';
import Link from "next/link";


export const LinksBlock = ({t}) => {


  return (
    <div  className={styles.linksBlock}>
      <div className={styles.textContainer}>
        <p>I would like to cash out</p>
      </div>
      <div className={styles.linksContainer}>
        <ul className={styles.linksList}>
          <li className={`${styles.linkItem} ${styles.activeLink}`}>
            <Link href={"#"}><a>BTC</a></Link>
          </li>
          <li className={`${styles.linkItem}`}>
            <Link href={"#"}><a>LTC</a></Link>
          </li>
          <li className={`${styles.linkItem}`}>
            <Link href={"#"}><a>USD</a></Link>
          </li>
        </ul>
      </div>
    </div>
  )
}