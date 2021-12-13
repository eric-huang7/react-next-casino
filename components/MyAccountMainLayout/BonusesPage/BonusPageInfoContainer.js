import styles from '../../../styles/MyAccount/BonusPage/BonusPage.module.scss';
import {LoadingComponent} from "../../LoadingComponent/LoadingComponent";

export const BonusPageInfoContainer = ({t, bonusInfo, currency}) => {


  if (bonusInfo?.activePendingBonuses?.success && !currency.loading) {
    return (
      <div className={styles.mainContainer}>

      </div>
    )
  } else {
    return (
      <LoadingComponent t={t}/>
    )
  }
}