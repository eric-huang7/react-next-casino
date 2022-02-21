import styles from '../../../styles/MyAccount/BalancePage/BalancePage.module.scss'
import { Heading } from '../ComponentsForPages/Heading'
import { useSelector } from 'react-redux'
import { BalanceInfoContainer } from './BalanceInfoContainer'
import ErrorText from '../../ErrorBoundaryComponents/ErrorText'

export const BalancePage = ({ t }) => {

  const balanceInfo = useSelector((store) => store.authInfo)
  const currency = useSelector((store) => store.getCurrency)

  return (
    <div className={styles.mainContainer}>
      <Heading t={t} heading={'myAccount.pageHeadings.balance'}/>
      <ErrorText>
        <BalanceInfoContainer balanceInfo={balanceInfo} currency={currency} t={t}/>
      </ErrorText>
    </div>

  )
}