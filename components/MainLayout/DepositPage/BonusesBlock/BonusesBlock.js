import Link from "next/link";
import styles from '../../../../styles/DepositPage/DepositPage.module.scss';


export const BonusesBlock = ({t, isUseBonus, bonusHeading, bonusImage, bonusDescription, bonusLink, chosenBonus,
                               chooseBonusClickHandler, bonusId}) => {
  const bonusClickHandler = () => {
    if (chooseBonusClickHandler) {
      chooseBonusClickHandler(bonusId)
    } else {
      console.log('not choose bonus', bonusId);
    }
  }
  return (
    <div
      onClick={() => bonusClickHandler()}
      className={`${styles.activeBonusInfo} ${isUseBonus ? styles.activeBonusInfo : styles.notActiveBonusInfo}`}
    >
      <img src={bonusImage} alt="bonus image"/>
      <div className={styles.bonusInfoBlock}>
        <div className={styles.bonusHeadingBlock}>
          <span>{bonusHeading}</span>
          <span title={bonusLink} className={styles.infoLable}>info</span>
        </div>
        <p className={styles.bonusDescriptionInfo}>{bonusDescription}</p>
      </div>
    </div>
  )
}