import styles from '../../../../styles/MyAccount/BonusHistory/BonusHistory.module.scss'

export const StatusSelector = ({ t, setStatusFilter, statusFilter }) => {

  return (
    <div className={styles.selectorWrapper}>
      <label
        htmlFor="statusSelectHistory"
        className={styles.statusSelectLabel}
      >
        {t('myAccount.history.bonus.inputsLabels.status')}
      </label>
      <select
        onChange={(e) => setStatusFilter(e.target.value)}
        type="select" className={styles.statusSelect}
        id={'statusSelectHistory'}
        value={statusFilter}
      >
        <option value={undefined}>{null}</option>
        <option value={1}>{t('myAccount.history.bonus.statusItems.active')}</option>
        <option value={2}>{t('myAccount.history.bonus.statusItems.lost')}</option>
        <option value={3}>{t('myAccount.history.bonus.statusItems.redeemed')}</option>
        <option value={4}>{t('myAccount.history.bonus.statusItems.canceled')}</option>
        <option value={6}>{t('myAccount.history.bonus.statusItems.expired')}</option>
      </select>
    </div>
  )
}