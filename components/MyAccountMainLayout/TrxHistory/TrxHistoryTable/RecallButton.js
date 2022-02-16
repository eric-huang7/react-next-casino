import styles from "../../../../styles/MyAccount/TrxHistory/TrxHistory.module.scss";


export const RecallButton = ({t, recallClickHandler}) => {


  return (
    <button
      onClick={() => recallClickHandler()}
      className={styles.recallButton}
    >
      {t('myAccount.history.transactions.table.recallButton')}
    </button>
  )
}