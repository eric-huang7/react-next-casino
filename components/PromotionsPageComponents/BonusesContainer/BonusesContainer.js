import styles from '../../../styles/PromotionsPage/BonusesContainer.module.scss';
import {TypeOneBonusContainer} from "./TypeOneBonusContainer/TypeOneBonusContainer";
import {TypeTwoBonusContainer} from "./TypeTwoBonusContainer/TypeTwoBonusContainer";
import {bonusesFinder} from "../../MainLayout/DepositPage/bonusesFinder";

export const BonusesContainer = ({t, activeBonuses, userCurrency}) => {

  let bonuses = bonusesFinder(activeBonuses.activeBonuses?.offers, userCurrency);

  console.log(bonuses, "adasdasdasd")

  return (
    <div className={styles.bonusesContainerMainWrapper}>
      <TypeOneBonusContainer t={t}/>
      <TypeTwoBonusContainer t={t}/>
      <TypeOneBonusContainer t={t}/>
      <TypeTwoBonusContainer t={t}/>
    </div>
  )
}