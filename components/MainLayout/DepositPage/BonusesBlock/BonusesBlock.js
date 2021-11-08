import Link from "next/link";
import styles from '../../../../styles/DepositPage/DepositPage.module.scss';
import {useTranslation} from "next-i18next";


export const BonusesBlock = (props) => {
  const {t} = useTranslation('promotionsPage');
  let {
    // t,
    isUseBonus,
    bonusHeading,
    bonusImage,
    bonusDescription,
    bonusLink,
    chosenBonus,
    chooseBonusClickHandler,
    bonusId,
    classImageNotActive
  } = props;
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
      <img className={styles[classImageNotActive]} src={bonusImage} alt="bonus image"/>
      <div className={styles.bonusInfoBlock}>
        <div className={styles.bonusHeadingBlock}>
          <span className={styles.bonusInfoHeading}>{t(bonusHeading)}</span>
          <span title={bonusLink} className={styles.infoLable}>{t("bonuses.bonusBlockInfoLink")}</span>
        </div>
        <p className={styles.bonusDescriptionInfo}>{t(bonusDescription)}</p>
      </div>
    </div>
  )
}