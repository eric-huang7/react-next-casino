import styles from '../../../../styles/PromotionsPage/TypeTwoBonusContainer.module.scss';

import {BonusMainHeading} from "./BonusMainHeading";
import {BonusImage} from './BonusImage';
import {BonusButton} from "./BonusButton";
import {BonusShortDescriptionBlock} from "./BonusShortDescriptionBlock";
import {BonusLongDescriptionBlock} from "./BonusLongDescriptionBlock";
import {BonusAmountInfo} from "./BonusAmountInfo";

import useWindowDimensions from "../../../../hooks/useWindowDimensions";


export const TypeTwoBonusContainer = ({t}) => {
  const {height, width} = useWindowDimensions();

  return (
    <>
      <BonusMainHeading />
      <div className={styles.typeTwoBonusWrapper}>
        <BonusImage />
        <div className={styles.bonusFrame}>
          <div className={styles.bonusInfoBlock}>
            <BonusButton />
            <BonusShortDescriptionBlock />
            <BonusAmountInfo />
            {width > 700 ? <BonusLongDescriptionBlock /> : ""}
          </div>
          {width <= 700 ? <BonusLongDescriptionBlock /> : ""}
        </div>
      </div>
    </>
  )
}