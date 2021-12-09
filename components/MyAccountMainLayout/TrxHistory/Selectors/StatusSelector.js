import styles from "../../../../styles/MyAccount/TrxHistory/TrxHistory.module.scss";


export const StatusSelector = ({t}) => {


  return (
    <div className={styles.selectorWrapper}>
      <label htmlFor="statusSelectHistory" className={styles.statusSelectLabel}>Status</label>
      <select type="select" className={styles.statusSelect} id={'statusSelectHistory'}>
        <option value={null}>{null}</option>
        <option value={1}>{'Pending'}</option>
        <option value={2}>{'Success'}</option>
        <option value={3}>{'Error'}</option>
      </select>
    </div>
  )
}