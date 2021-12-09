import styles from "../../../../styles/MyAccount/TrxHistory/TrxHistory.module.scss";


export const ActionSelector = ({t, setActionFilter}) => {


  return (
    <div className={styles.selectorWrapper}>
      <label htmlFor="actionSelectHistory" className={styles.actionSelectLabel}>Action</label>
      <select onChange={(e) => setActionFilter(e.target.value)} type="select" className={styles.actionSelect} id={'actionSelectHistory'}>
        <option value={null}>{null}</option>
        <option value={'Deposit'}>{'Deposit'}</option>
        <option value={'Withdrawal'}>{'Withdrawal'}</option>
      </select>
    </div>
  )
}