import styles from '../../styles/DesktopMenu/DesktopMenu.module.scss'
import { useDispatch } from 'react-redux'
import { logout } from '../../redux/user/action'
import { useTranslation } from 'next-i18next'

export const SignOutItem = () => {
  const { t } = useTranslation('common')
  const dispatch = useDispatch()

  const logoutButtonHandler = () => {
    dispatch(logout())
  }

  return (
    <li className={styles.linkItem}>
      <div className={styles.iconContainer}>
        <img src={'/assets/icons/desktopMenu/signOut.png'} alt={`sign out link icon`}/>
      </div>
      <button onClick={() => logoutButtonHandler()}
              className={styles.signoutButton}>{t('header.userDesktopMenu.signOut')}</button>
    </li>
  )
}
