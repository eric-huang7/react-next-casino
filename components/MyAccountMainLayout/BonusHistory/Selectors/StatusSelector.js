import styles from '../../../../styles/MyAccount/BonusHistory/BonusHistory.module.scss';



export const StatusSelector = ({t, setStatusFilter, statusFilter}) => {

  return (
    <div className={styles.selectorWrapper}>
      <label htmlFor="statusSelectHistory" className={styles.statusSelectLabel}>Status</label>
      <select
        onChange={(e) => setStatusFilter(e.target.value)}
        type="select" className={styles.statusSelect}
        id={'statusSelectHistory'}
        value={statusFilter}
      >
        <option value={undefined}>{null}</option>
        <option value={1}>{'Active'}</option>
        <option value={2}>{'Lost'}</option>
        <option value={3}>{'Redeemed'}</option>
        <option value={4}>{'Canceled'}</option>
        {/*<option value={5}>{'Pending'}</option>*/}
        <option value={6}>{'Expired'}</option>
      </select>
    </div>
  )
}