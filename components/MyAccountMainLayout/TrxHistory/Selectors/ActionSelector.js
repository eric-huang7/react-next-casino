import styles from "../../../../styles/MyAccount/TrxHistory/TrxHistory.module.scss";


export const ActionSelector = ({t, setActionFilter}) => {


  return (
    <div className={styles.selectorWrapper}>
      <label htmlFor="actionSelectHistory" className={styles.actionSelectLabel}>{t("myAccount.history.transactions.inputsLabels.action")}</label>
      <select onChange={(e) => setActionFilter(e.target.value)} type="select" className={styles.actionSelect} id={'actionSelectHistory'}>
        <option value={null}>{null}</option>
        <option value={'Deposit'}>{t("myAccount.history.transactions.inputsItems.action.deposit")}</option>
        <option value={'Withdrawal'}>{t("myAccount.history.transactions.inputsItems.action.withdrawal")}</option>
      </select>
    </div>
  )
}