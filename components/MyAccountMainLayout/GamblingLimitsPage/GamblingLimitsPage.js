import { Heading } from '../ComponentsForPages/Heading'
import { MainBlock } from './MainBlock'
import { useSelector } from 'react-redux'

export const GamblingLimitsPage = ({ t }) => {
  const userInfo = useSelector((store) => store.authInfo)

  return (
    <div>
      <Heading t={t} heading={'myAccount.pageHeadings.gamblingLimits'}/>
      <MainBlock t={t} userInfo={userInfo.user.user}/>
    </div>
  )
}