import styles from "../../../../styles/MyAccount/TrxHistory/TrxHistory.module.scss";


export const StatusSelector = ({t, setStatusFilter}) => {


  return (
    <div className={styles.selectorWrapper}>
      <label htmlFor="statusSelectHistory" className={styles.statusSelectLabel}>{t("myAccount.history.transactions.inputsLabels.status")}</label>
      <select onChange={(e) => setStatusFilter(e.target.value)} type="select" className={styles.statusSelect} id={'statusSelectHistory'}>
        <option value={null}>{null}</option>
        <option value={1}>{t("myAccount.history.transactions.inputsItems.status.pending")}</option>
        <option value={2}>{t("myAccount.history.transactions.inputsItems.status.success")}</option>
        <option value={3}>{t("myAccount.history.transactions.inputsItems.status.error")}</option>
      </select>
    </div>
  )
}