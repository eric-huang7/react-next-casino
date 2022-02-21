import styles from '../../../../styles/MyAccount/TrxHistory/TrxHistory.module.scss'

export const FilterButton = ({ t, filterButtonClickHandler }) => {

  return (
    <button onClick={() => filterButtonClickHandler()} className={styles.filterButton}>
      {t('myAccount.history.transactions.inputsItems.filterButton')}
    </button>
  )
}