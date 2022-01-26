import styles from "../../../../../styles/HomePage/SumInputs.module.scss";
import Link from "next/link";
import {useTranslation} from "next-i18next";
import {BonusSwitcher} from "./BonusSwitcher";
import {iconsUrl} from "../../../../../helpers/imageUrl";



export const BonusBlock = ({ checkedInputHandler, isChecked, bonusData, isUseBonus}) => {
  const {t} = useTranslation('promotionsPage');

  console.log(bonusData, 'bonusDAta########')


if (isUseBonus) {
  return (
    <div className={styles.bonusInfoBlockWrapper}>
      <div className={styles.bonusInfoBlock}>
        <div className={styles.bonusIconBlock}>
          <img src={iconsUrl(bonusData.icon)} alt="bonus icon"/>
        </div>
        <p>
          {t(`bonuses.${bonusData.id}.deposit_bonus.heading`)}
        </p>
        <span>{t("bonuses.bonusBlockInfoLink")}</span>
      </div>
      <p className={styles.bonusInfoText}>
        {t(`bonuses.${bonusData.id}.deposit_bonus.description`)}
      </p>
      <BonusSwitcher
        checkedInputHandler={checkedInputHandler}
        isChecked={isChecked}
      />
    </div>
  )
} else {
  return (
    <div className={styles.bonusInfoBlockWrapper}>
      <div className={styles.bonusInfoBlock}>
        <div className={styles.bonusIconBlock}>
          <img src={bonusData.icon} alt="no bonus icon"/>
        </div>
        <p>
          {t(bonusData.heading)}
        </p>
        {/*<span>info</span>*/}
      </div>
      <p className={styles.bonusInfoText}>
        100% dsf sadfsd fasdf asdfas dfasd fasdf asdfasdf asdf asdfasdfasdfdas
      </p>
      <BonusSwitcher
        checkedInputHandler={checkedInputHandler}
        isChecked={isChecked}
      />
    </div>
  )
}

}