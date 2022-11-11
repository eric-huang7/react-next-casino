import { useSelector } from 'react-redux'
import { BalanceInfoContainer } from './BalanceInfoContainer'
import ErrorText from '../../ErrorBoundaryComponents/ErrorText'
import Heading from "../components/Heading";

export const BalancePage = ({ t }) => {

  const balanceInfo = useSelector((store) => store.authInfo)
  const currency = useSelector((store) => store.currency)

  return (
    <>
      <Heading title={t('myAccount.pageHeadings.balance')} />
      <ErrorText>
        <BalanceInfoContainer balanceInfo={balanceInfo} currency={currency} t={t}/>
      </ErrorText>
    </>

  )
}
