import { Heading } from '../ComponentsForPages/Heading'
import { UserInfoContainer } from './UserInfoContainer'
import { useSelector } from 'react-redux'
import { LoadingComponent } from '../../LoadingComponent/LoadingComponent'
import ErrorText from '../../ErrorBoundaryComponents/ErrorText'

export const ProfileInfoPage = ({ t }) => {
  const userInfo = useSelector((store) => store.authInfo)
  const currencyJurisdiction = useSelector((store) => store.currency)

  const isLoading = !userInfo.isAuthenticated || userInfo.loadingActiveSessions || userInfo.loadingClosedSessions
    || currencyJurisdiction.loading_currency_jurisdiction;

  return (
    <div>
      <Heading heading={t('myAccount.pageHeadings.profileInfo')}/>
      {isLoading
        ? <LoadingComponent t={t}/>
        : <ErrorText>
          <UserInfoContainer
            userInfo={userInfo}
            currencyJurisdiction={currencyJurisdiction.currency_jurisdiction}
            t={t}
          />
        </ErrorText>
      }
    </div>
  )
}
