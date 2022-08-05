import { BurgerButton } from '../BurgerButton/BurgerButton'
import { HeaderButtonsRegistration } from '../HeaderButtons/HeaderButtonsRegistration'
import { useSelector } from 'react-redux'
import { HStack } from "@chakra-ui/react"
import { NotificationContainer } from './Notification'
import { UserInformationBlock } from './UserInformationBlock'
import ErrorEmpty from '../../../ErrorBoundaryComponents/ErrorEmpty'
import { useTranslation } from 'next-i18next'

export const UserBlockNavigation = ({ userInfo }) => {
  const { t } = useTranslation('common')
  const currency = useSelector((state) => state.currency)
  const messagesData = useSelector((store) => store.notifications)

  return (
    <HStack pr="16px" spacing={0}>
      {userInfo.isAuthenticated && <HStack alignItems="center" h="100%" display={{base: 'none', lg: 'flex'}}>
        <ErrorEmpty>
          <NotificationContainer messagesData={messagesData} t={t}/>
        </ErrorEmpty>
        {!currency.loading && <ErrorEmpty>
          <UserInformationBlock t={t} userInfo={userInfo} userCurrency={currency}/>
        </ErrorEmpty>}
      </HStack>}
      {!userInfo.isAuthenticated && <HeaderButtonsRegistration />}
      <ErrorEmpty>
        <BurgerButton userLogined={userInfo.isAuthenticated}/>
      </ErrorEmpty>
    </HStack>

  )
}
