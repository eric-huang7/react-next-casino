import styles from '../../../styles/MyAccount/BonusPage/BonusPage.module.scss';
import {LoadingComponent} from "../../LoadingComponent/LoadingComponent";
import {BonusItemContainer} from "./BonusPageComponents/BonusItemContainer";

export const BonusPageInfoContainer = ({t, bonusInfo, currency}) => {


  if (bonusInfo?.activePendingBonuses?.success && !currency.loading) {
    return (
      <div className={styles.mainContainer}>
        {
          bonusInfo.activePendingBonuses.bonuses.map((bonus) => {
          return (
            <BonusItemContainer key={`${bonus.id} bonus key`} currencyData={currency} bonusData={bonus} t={t}/>
          )
          })
        }
      </div>
    )
  } else {
    return (
      <LoadingComponent t={t}/>
    )
  }
}