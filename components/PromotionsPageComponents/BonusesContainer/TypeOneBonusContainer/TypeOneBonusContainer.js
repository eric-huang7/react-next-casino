import styles from '../../../../styles/PromotionsPage/TypeOneBonusContainer.module.scss';
import {BonusImage} from "./BonusImage";
import {BonusButton} from "./BonusButton";
import {BonusShortDescriptionBlock} from "./BonusShortDescriptionBlock";
import {BonusLongDescriptionBlock} from "./BonusLongDescriptionBlock";
import {BonusMainHeading} from "./BonusMainHeading";
import {BonusAmountInfo} from "./BonusAmountInfo";
import useWindowDimensions from "../../../../hooks/useWindowDimensions";


export const TypeOneBonusContainer = ({t, bonusInfo, locale, bonusCalculations, userData}) => {
  const {height, width} = useWindowDimensions();

  return (
    <>
      <BonusMainHeading locale={locale} t={t} bonusInfo={bonusInfo}/>
      <div className={styles.typeOneBonusWrapper}>
        <BonusImage bonusInfo={bonusInfo}/>
        <div className={styles.bonusFrame}>
          <div className={styles.bonusInfoBlock}>
            <BonusButton bonusInfo={bonusInfo} userData={userData}/>
            <BonusShortDescriptionBlock locale={locale} t={t} bonusInfo={bonusInfo}/>
            <BonusAmountInfo bonusCalculations={bonusCalculations} t={t} bonusInfo={bonusInfo}/>
            {width > 700 ? <BonusLongDescriptionBlock bonusCalculations={bonusCalculations} t={t} bonusInfo={bonusInfo}/> : ""}
          </div>
          {width <= 700 ? <BonusLongDescriptionBlock bonusCalculations={bonusCalculations} t={t} bonusInfo={bonusInfo}/> : ""}
        </div>
      </div>
    </>

  )
}