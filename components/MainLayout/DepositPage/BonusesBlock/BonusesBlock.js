import Link from "next/link";
import styles from '../../../styles/DepositPage/DepositPage.module.scss';


export const BonusesBlock = ({t, bonusHeading, bonusImage, bonusDescription, bonusLink}) => {

  return (
    <div className={styles.activeBonusInfo}>
      <img src={bonusImage} alt="bonus image"/>
      <div className={styles.bonusInfoBlock}>
        <div className={styles.bonusHeadingBlock}>
          <span>{bonusHeading}</span>
          <Link href={bonusLink}><a>info</a></Link>
        </div>
        <p className={styles.bonusDescriptionInfo}>{bonusDescription}</p>
      </div>
    </div>
  )
}