import styles from '../../../styles/MyAccount/TrxHistory/TrxHistory.module.scss';
import {currencyInfo} from "../../../helpers/currencyInfo";
import {CurrencySelector} from "./Selectors/CurrencySelector";
import {ActionSelector} from "./Selectors/ActionSelector";
import {StatusSelector} from "./Selectors/StatusSelector";


export const TrxHistoryInputsContainer = ({t, balanceInfo, currencyData}) => {
  console.log(balanceInfo, currencyData, '<<<<< TrxHistory')


  return (
    <div className={styles.inputsContainer}>
      <CurrencySelector t={t} currencyData={currencyData} balanceInfo={balanceInfo}/>
      <ActionSelector t={t} />
      <div className={styles.lastSelectorButtonWrapper}>
        <StatusSelector t={t} />
        <button className={styles.filterButton}>
          Filter
        </button>
      </div>
    </div>
  )
}