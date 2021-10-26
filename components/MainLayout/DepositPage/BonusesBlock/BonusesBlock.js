import Link from "next/link";
import styles from '../../../../styles/DepositPage/DepositPage.module.scss';


export const BonusesBlock = ({t, isUseBonus, bonusHeading, bonusImage, bonusDescription, bonusLink}) => {

  return (
    <div className={`${styles.activeBonusInfo} ${isUseBonus ? styles.activeBonusInfo : styles.notActiveBonusInfo}`}>
      <img src={bonusImage} alt="bonus image"/>
      <div className={styles.bonusInfoBlock}>
        <div className={styles.bonusHeadingBlock}>
          <span>{bonusHeading}</span>
          {isUseBonus ? <Link href={bonusLink}><a>info</a></Link> : ''}
        </div>
        <p className={styles.bonusDescriptionInfo}>{bonusDescription}</p>
      </div>
    </div>
  )
}