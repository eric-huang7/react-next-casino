import styles from '../../../../styles/MyAccount/BonusHistory/BonusHistory.module.scss';
import {currencyInfo} from "../../../../helpers/currencyInfo";


export const CurrencyBonusSelector = ({t, currencyData, userInfo, setCurrencyFilter}) => {


  return (
    <div className={styles.selectorWrapper}>
      <label htmlFor="currencySelectHistory" className={styles.currencySelectLabel}>Currency</label>
      <select onChange={(e) => setCurrencyFilter(e.target.value)} className={styles.currencySelect} id={'currencySelectHistory'}>
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