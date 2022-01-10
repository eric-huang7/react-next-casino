import styles from '../../../styles/ExitIntentComponent/BonusesContainer/BonusesContainer.module.scss';
import {iconsUrl, urlGen} from "../../../helpers/imageUrl";
import {BonusImageContainer} from "./BonusImageContainer";
import {BonusTittle} from "./BonusTittle";
import {BonusIcon} from "./BonusIcon";
import {BonusDescription} from "./BonusDescription";
import {BonusSubmitButton} from "./BonusSubmitButton";
import {useTranslation} from "next-i18next";
import {useRouter} from "next/router";


export const BonusItemContainer = ({bonusData}) => {
  const {t} = useTranslation('promotionsPage');
  const router = useRouter();

  return (
    <div className={styles.bonusItemContainer}>
      <BonusImageContainer bonusData={bonusData} />
      <div  className={styles.bonusInfoContainer}>
        <BonusTittle locale={router.locale} title={t(`bonuses.${bonusData.id}.deposit_bonus.heading`)} />
        <div className={styles.bonusInfoInnerContainer}>
          <BonusIcon bonusData={bonusData} />
          <div  className={styles.bonusDataContainer}>
            <BonusDescription locale={router.locale} description={t(`bonuses.${bonusData.id}.deposit_bonus.description`)} />
            <BonusSubmitButton />
          </div>
        </div>
      </div>
    </div>
  )
}