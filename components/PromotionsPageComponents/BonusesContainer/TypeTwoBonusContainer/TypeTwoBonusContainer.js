import styles from '../../../../styles/PromotionsPage/TypeTwoBonusContainer.module.scss';

import {BonusMainHeading} from "./BonusMainHeading";
import {BonusImage} from './BonusImage';
import {BonusButton} from "./BonusButton";
import {BonusShortDescriptionBlock} from "./BonusShortDescriptionBlock";
import {BonusLongDescriptionBlock} from "./BonusLongDescriptionBlock";
import {BonusAmountInfo} from "./BonusAmountInfo";

import useWindowDimensions from "../../../../hooks/useWindowDimensions";


export const TypeTwoBonusContainer = ({t, bonusInfo, locale, bonusCalculations}) => {

  const {height, width} = useWindowDimensions();

  return (
    <>
      <BonusMainHeading locale={locale} t={t} bonusInfo={bonusInfo}/>
      <div className={styles.typeTwoBonusWrapper}>
        <BonusImage bonusInfo={bonusInfo}/>
        <div className={styles.bonusFrame}>
          <div className={styles.bonusInfoBlock}>
            <BonusButton bonusInfo={bonusInfo}/>
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