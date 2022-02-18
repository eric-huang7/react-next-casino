import styles from '../../../styles/MobileSideMenu/MobileSideMenu.module.scss'

import { HeaderButtonsRegistration } from '../../MainLayout/Header/HeaderButtons/HeaderButtonsRegistration'
import { UserInfoInnerContainer } from './UserInfoInnerContainer'
import ErrorEmpty from '../../ErrorBoundaryComponents/ErrorEmpty'

export const UserInfoBlock = ({ t, userInform, currency }) => {

  if (userInform.isAuthenticated && !currency.loading) {
    return (
      <ErrorEmpty>
        <UserInfoInnerContainer t={t} userInform={userInform} userCurrency={currency}/>
      </ErrorEmpty>
    )
  } else {

    return (
      <div className={styles.userInfoBlock}>
        <p className={styles.username}>{' '}</p>
        <p className={styles.userMoney}>{' '}</p>
        <div className={styles.userInfoDivider}>{' '}</div>
        <div className={styles.sideMenuButtonsBlock}>
          <HeaderButtonsRegistration isUserLogined={userInform.isAuthenticated} t={t}/>
        </div>
      </div>
    )
  }
}