import styles from '../../../styles/MyAccount/BonusHistory/BonusHistory.module.scss';


export const FilterButton = ({t, filterButtonClickHandler}) => {

  return (
    <div>
      <button onClick={() => filterButtonClickHandler()} className={styles.filterButton}>
        {t("myAccount.history.bonus.filterButton")}
      </button>
    </div>
  )
}