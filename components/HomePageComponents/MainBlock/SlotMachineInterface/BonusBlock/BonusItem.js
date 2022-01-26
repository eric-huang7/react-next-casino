import styles from "../../../../../styles/HomePage/SumInputs.module.scss";
import {iconsUrl} from "../../../../../helpers/imageUrl";
import {useTranslation} from "next-i18next";


export const BonusItem = ({bonusData, chooseBonusClickHandler, openBonusesDropdownHandler}) => {
  const {t} = useTranslation('promotionsPage');

  const bonusItemClickHandler = () => {
    chooseBonusClickHandler(bonusData.id);
    openBonusesDropdownHandler();
  }

  return (
    <div onClick={() => bonusItemClickHandler()} className={styles.bonusDropItem}>
      <div className={styles.bonusIconWrapper}>
        <img src={iconsUrl(bonusData.icon)} alt="bonus icon"/>
      </div>
      <div className={styles.bonusInfoWrapper}>
        <span className={styles.bonusHeading}>{t(`bonuses.${bonusData.id}.deposit_bonus.heading`)}</span>
        <span className={styles.bonusDescription}>{t(`bonuses.${bonusData.id}.deposit_bonus.description`)}</span>
      </div>
    </div>
  )
}