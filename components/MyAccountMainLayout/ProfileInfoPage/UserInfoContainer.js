import { UserInfoBlock } from './ProfileInfoComponents/UserInfoBlock'
import { PhoneVerification } from './ProfileInfoComponents/PhoneVerification/PhoneVerification'
import { ChangePasswordBlock } from './ChangePasswordBlock/ChangePasswordBlock'
import { SocialNetworkBlock } from './SocialNetworkBlock/SocialNetworkBlock'
import { ActiveSessionsBlock } from './ActiveSessionsBlock/ActiveSessionsBlock'
import { LastClosedSessionsBlock } from './LastClosedSessionsBlock/LastClosedSessionsBlock'
import { GoogleAuthBlock } from './GoogleAuthBlock/GoogleAuthBlock'
import ErrorEmpty from '../../ErrorBoundaryComponents/ErrorEmpty'

export const UserInfoContainer = ({ t, userInfo, currencyJurisdiction }) => (
  <div>
    <ErrorEmpty>
      <UserInfoBlock userInfo={userInfo} t={t} currencyJurisdiction={currencyJurisdiction}/>
    </ErrorEmpty>
    <ErrorEmpty>
      <PhoneVerification t={t} userInfo={userInfo}/>
    </ErrorEmpty>
    <ErrorEmpty>
      <ChangePasswordBlock t={t} userInfo={userInfo}/>
    </ErrorEmpty>
    <ErrorEmpty>
      <SocialNetworkBlock t={t} userInfo={userInfo}/>
    </ErrorEmpty>
    <ErrorEmpty>
      <ActiveSessionsBlock t={t} userInfo={userInfo}/>
    </ErrorEmpty>
    <ErrorEmpty>
      <LastClosedSessionsBlock t={t} userInfo={userInfo}/>
    </ErrorEmpty>
    <ErrorEmpty>
      <GoogleAuthBlock t={t}/>
    </ErrorEmpty>
  </div>
)
