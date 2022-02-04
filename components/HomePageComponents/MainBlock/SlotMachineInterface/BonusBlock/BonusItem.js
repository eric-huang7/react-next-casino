import styles from "../../../../../styles/HomePage/SumInputs.module.scss";
import {iconsUrl} from "../../../../../helpers/imageUrl";
import {useTranslation} from "next-i18next";
import {bonusInfoCalculator} from "../../../../../helpers/bonusInfoCalculator";


export const BonusItem = ({bonusData, chooseBonusClickHandler, openBonusesDropdownHandler, generalTranslate, userCurrency}) => {
  const {t} = useTranslation('promotionsPage');

  const bonusItemClickHandler = () => {
    chooseBonusClickHandler(bonusData.id);
    openBonusesDropdownHandler();
  }

  let bonusInfo = bonusInfoCalculator(bonusData, userCurrency.userCurrencyData, generalTranslate);

  return (
    <div onClick={() => bonusItemClickHandler()} className={styles.bonusDropItem}>
      <div className={styles.bonusIconWrapper}>
        <img src={iconsUrl(bonusData.icon)} alt="bonus icon"/>
      </div>
      <div className={styles.bonusInfoWrapper}>
        <span className={styles.bonusHeading}>{t(`bonuses.${bonusData.id}.deposit_bonus.heading`)}</span>
        <span className={styles.bonusDescription}>{`${bonusInfo.max_bonus}${bonusInfo.free_spins_amount ? ` + ${bonusInfo.free_spins_amount} ${generalTranslate('bonusInfoContainer.bonusInfo.freeSpins')}` : ''}`}</span>
        {/*<span className={styles.bonusDescription}>{t(`bonuses.${bonusData.id}.deposit_bonus.description`)}</span>*/}
      </div>
    </div>
  )
}