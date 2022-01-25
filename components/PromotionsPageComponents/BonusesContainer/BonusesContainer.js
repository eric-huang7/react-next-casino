import styles from '../../../styles/PromotionsPage/BonusesContainer.module.scss';
import {TypeOneBonusContainer} from "./TypeOneBonusContainer/TypeOneBonusContainer";
import {TypeTwoBonusContainer} from "./TypeTwoBonusContainer/TypeTwoBonusContainer";
import {bonusesFinder} from "../../../helpers/bonusesFinder";
import {useRouter} from "next/router";
import {bonusesCalculator} from "./bonusesCalculator";

export const BonusesContainer = ({t, activeBonuses, userCurrency, userData}) => {
  const router = useRouter();
  let locale = router.locale
  let bonuses = bonusesFinder(activeBonuses.activeBonuses?.offers, userCurrency);

  // console.log(bonuses, "adasdasdasd")
  if (bonuses.length > 0) {
    return (
      <div className={styles.bonusesContainerMainWrapper}>
        {
          bonuses.map((bonus, index) => {
            if (index % 2 === 0) {
              let bonusCalculations = bonusesCalculator(bonus, userCurrency, t);
              return (
                <div key={bonus.id}>
                  <TypeOneBonusContainer
                    bonusCalculations={bonusCalculations}
                    locale={locale}
                    bonusInfo={bonus}
                    t={t}
                    userData={userData}
                  />
                </div>
              )
            } else {
              let bonusCalculations = bonusesCalculator(bonus, userCurrency);
              return (
                <div key={bonus.id}>
                  <TypeTwoBonusContainer
                    bonusCalculations={bonusCalculations}
                    locale={locale}
                    bonusInfo={bonus}
                    t={t}
                    userData={userData}
                  />
                </div>
              )
            }
          })
        }
      </div>
    )
  } else {
    return (
      <p className={styles.noBonuses}>{t('bonuses.noBonuses')}</p>
    )
  }

}