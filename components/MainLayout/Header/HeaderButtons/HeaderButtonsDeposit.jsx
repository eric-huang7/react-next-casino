import styles from '../../../../styles/Header/HeaderButtons.module.scss'


export const HeaderButtonsDeposit = ({t, isUserLogined}) => {

  return (
      <div className={`${styles.userMainBlockButtons} ${styles.depositButtons} ${isUserLogined ? '' : styles.hide}`}>
        <button>{t('header.navbarButtons.cashOut')}</button>
        <button>{t('header.navbarButtons.deposit')}</button>
      </div>
  )
}