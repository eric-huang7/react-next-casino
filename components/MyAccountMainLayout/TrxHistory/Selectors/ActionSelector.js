import styles from "../../../../styles/MyAccount/TrxHistory/TrxHistory.module.scss";


export const ActionSelector = ({t}) => {


  return (
    <div className={styles.selectorWrapper}>
      <label htmlFor="actionSelectHistory" className={styles.actionSelectLabel}>Action</label>
      <select type="select" className={styles.actionSelect} id={'actionSelectHistory'}>
        <option value={null}>{null}</option>
        <option value={'Deposit'}>{'Deposit'}</option>
        <option value={'Withdrawal'}>{'Withdrawal'}</option>
      </select>
    </div>
  )
}