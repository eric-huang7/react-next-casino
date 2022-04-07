import styles from '../../../../styles/Header/UserBlock.module.scss'

import { HeaderButtonsDeposit } from '../HeaderButtons/HeaderButtonsDeposit'
import { BurgerButton } from '../BurgerButton/BurgerButton'
import { HeaderButtonsRegistration } from '../HeaderButtons/HeaderButtonsRegistration'
import { useSelector } from 'react-redux'
import { NotificationContainer } from './Notification'
import { UserInformationBlock } from './UserInformationBlock'
import ErrorEmpty from '../../../ErrorBoundaryComponents/ErrorEmpty'
import { useTranslation } from 'next-i18next'

export const UserBlockNavigation = ({ userInfo }) => {
  const { t } = useTranslation('common')
  const currency = useSelector((state) => state.currency)
  const messagesData = useSelector((store) => store.notifications)

  return (
    <div className={styles.userMainBlockWrapper}>
      <div className={`${styles.userMainBlock} ${userInfo.isAuthenticated ? '' : styles.hide}`}>
        {
          userInfo.isAuthenticated
            ?
            <ErrorEmpty>
              <NotificationContainer messagesData={messagesData} t={t}/>
            </ErrorEmpty>
            :
            ''
        }
        {userInfo.isAuthenticated && !currency.loading
          ?
          <ErrorEmpty>
            <UserInformationBlock t={t} userInfo={userInfo} userCurrency={currency}/>
          </ErrorEmpty>
          :
          ''
        }
      </div>
      {
        userInfo.isAuthenticated ? <HeaderButtonsDeposit isUserLogined={userInfo.isAuthenticated}/> :
          <HeaderButtonsRegistration isUserLogined={userInfo.isAuthenticated}/>
      }
      <ErrorEmpty>
        <BurgerButton userLogined={userInfo.isAuthenticated}/>
      </ErrorEmpty>
    </div>

  )
}
