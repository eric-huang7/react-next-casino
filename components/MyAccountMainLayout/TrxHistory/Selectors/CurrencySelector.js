import styles from "../../../../styles/MyAccount/TrxHistory/TrxHistory.module.scss";
import {currencyInfo} from "../../../../helpers/currencyInfo";


export const CurrencySelector = ({t, currencyData, userInfo}) => {


  return (
    <div className={styles.selectorWrapper}>
      <label htmlFor="currencySelectHistory" className={styles.currencySelectLabel}>Currency</label>
      <select type="select" className={styles.currencySelect} id={'currencySelectHistory'}>
        <option key={`option currency select`} value={null}>{null}</option>
        {
          userInfo.balance.balances.map((el) => {
            return (
              <option key={`${el.id} option currency select`} value={el.currency_id}>{currencyInfo(currencyData.currency.results, el.currency_id)[0].abbreviation}</option>
            )
          })
        }
      </select>
    </div>
  )
}