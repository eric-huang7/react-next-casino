import styles from "../../../../styles/MyAccount/GamblingLimitsPage/GamblingLimitsPage.module.scss";
import Link from "next/link";


export const ButtonsContainer = ({t}) => {


  return (
    <div className={styles.buttonsBlock}>
      <button className={styles.saveButton}>Save</button>
      <Link href={'/accounts/balance'}><a className={styles.cancelButton}>Cancel</a></Link>
    </div>
  )
}