import styles from '../../../styles/PromotionsPage/BonusesContainer.module.scss';
import {TypeOneBonusContainer} from "./TypeOneBonusContainer/TypeOneBonusContainer";
import {TypeTwoBonusContainer} from "./TypeTwoBonusContainer/TypeTwoBonusContainer";

export const BonusesContainer = ({t}) => {



  return (
    <div className={styles.bonusesContainerMainWrapper}>
      <TypeOneBonusContainer t={t}/>
      <TypeTwoBonusContainer t={t}/>
      <TypeOneBonusContainer t={t}/>
      <TypeTwoBonusContainer t={t}/>
    </div>
  )
}