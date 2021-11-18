import styles from '../../../../../styles/NotificationPopup/NotificationPopup.module.scss';
import Link from "next/link";

export const MoreButton = () => {

  return (
    <div className={styles.moreButtonBlock}>
      <Link href={'/notifications'}><a>more...</a></Link>
    </div>
  )
}
// TODO: need add logic when mobile or desktop