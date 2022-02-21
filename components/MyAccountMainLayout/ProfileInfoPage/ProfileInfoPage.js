import { Heading } from '../ComponentsForPages/Heading'
import { UserInfoContainer } from './UserInfoContainer'
import { useSelector } from 'react-redux'
import { LoadingComponent } from '../../LoadingComponent/LoadingComponent'
import ErrorText from '../../ErrorBoundaryComponents/ErrorText'

export const ProfileInfoPage = ({ t }) => {
  const userInfo = useSelector((store) => store.authInfo)
  const currencyJurisdiction = useSelector((store) => store.getCurrency)

  if (!userInfo.isAuthenticated || userInfo.loadingActiveSessions || userInfo.loadingClosedSessions || currencyJurisdiction.loading_currency_jurisdiction) {
    return (
      <div>
        <Heading t={t} heading={'myAccount.pageHeadings.profileInfo'}/>
        <LoadingComponent t={t}/>
      </div>
    )
  } else {
    return (
      <div>
        <Heading t={t} heading={'myAccount.pageHeadings.profileInfo'}/>
        <ErrorText>
          <UserInfoContainer
            userInfo={userInfo}
            currencyJurisdiction={currencyJurisdiction.currency_jurisdiction}
            t={t}
          />
        </ErrorText>
      </div>
    )
  }

}