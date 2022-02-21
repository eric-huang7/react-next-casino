import { Heading } from '../ComponentsForPages/Heading'
import { useSelector } from 'react-redux'
import { BonusPageInfoContainer } from './BonusPageInfoContainer'
import ErrorText from '../../ErrorBoundaryComponents/ErrorText'

export const BonusesPageContainer = ({ t }) => {
  const bonusInfo = useSelector((store) => store.authInfo)
  const currency = useSelector((store) => store.getCurrency)

  return (
    <div>
      <Heading t={t} heading={'myAccount.pageHeadings.bonuses'}/>
      <ErrorText>
        <BonusPageInfoContainer bonusInfo={bonusInfo} currency={currency} t={t}/>
      </ErrorText>
    </div>
  )
}