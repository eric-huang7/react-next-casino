import { Heading } from '../ComponentsForPages/Heading'
import { ChangePasswordContainer } from './ChangePasswordContainer'
import { useSelector } from 'react-redux'
import ErrorText from '../../ErrorBoundaryComponents/ErrorText'

export const ChangePasswordPage = ({ t }) => {
  const userInfo = useSelector((store) => store.authInfo)

  return (
    <div>
      <Heading t={t} heading={'myAccount.pageHeadings.changePassword'}/>
      <ErrorText>
        <ChangePasswordContainer userInfo={userInfo} t={t}/>
      </ErrorText>
    </div>
  )
}