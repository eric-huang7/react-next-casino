
import styles from '../../../../styles/Header/HeaderButtons.module.scss'


export const HeaderButtons = ({t}) => {

  return (
      <div className={styles.userMainBlockButtons}>
        <button>{t('header.navbarButtons.cashOut')}</button>
        <button>{t('header.navbarButtons.deposit')}</button>
      </div>
  )
}