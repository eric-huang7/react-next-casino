import styles from '../../styles/DesktopMenu/DesktopMenu.module.scss'
import { useDispatch } from 'react-redux'
import { logout } from '../../redux/user/action'
import { useTranslation } from 'next-i18next'
import {useRouter} from "next/router";

export const SignOutItem = () => {
  const { t } = useTranslation('common')
  const dispatch = useDispatch()
  const router = useRouter();

  const logoutButtonHandler = () => {
    router.push('/');
    dispatch(logout());
  }

  return (
    <li className={styles.linkItem}>
      <div onClick={() => logoutButtonHandler()}
              className={styles.signoutButton}>{t('header.userDesktopMenu.signOut')}</div>
    </li>
  )
}
