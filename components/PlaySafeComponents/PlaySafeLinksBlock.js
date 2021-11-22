import styles from '../../styles/PlaySafe/PlaySafe.module.scss';
import Link from "next/link";


export const PlaySafeLinksBlock = ({t}) => {

  return (
    <div className={styles.linksBlock}>
      <p className={styles.linksHeading}>{t("playSafe.linksBlock.heading")}</p>

      <ul className={styles.linksList}>
        <li className={styles.linkItem}>
          <div className={styles.linkItemBlock}>
            <p>GamCare</p>
            <Link href={"https://gamcare.org/"}><a>gamcare.org</a></Link>
          </div>
        </li>
        <li className={styles.linkItem}>
          <div className={styles.linkItemBlock}>
            <p>GordonHouse</p>
            <Link href={"https://gordonhouse.org/"}><a>gordonhouse.org</a></Link>
          </div>
        </li>
        <li className={styles.linkItem}>
          <div className={styles.linkItemBlock}>
            <p>Gam-Anon</p>
            <Link href={"https://gamblersanonymous.org/"}><a>gamblersanonymous.org</a></Link>
          </div>
        </li>
      </ul>
    </div>
  )
}