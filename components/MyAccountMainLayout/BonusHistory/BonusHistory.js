import styles from '../../../styles/MyAccount/BonusHistory/BonusHistory.module.scss'
import { Heading } from '../ComponentsForPages/Heading'
import { useSelector } from 'react-redux'
import { TrxHistoryLinksContainer } from '../TrxHistory/TrxHistoryLinksContainer'
import { LoadingComponent } from '../../LoadingComponent/LoadingComponent'
import { SelectorsContainer } from './SelectorsContainer'
import { BonusTableContainer } from './BonusTable/BonusTableContainer'
import ErrorText from '../../ErrorBoundaryComponents/ErrorText'

export const BonusHistory = ({ t, router }) => {
  const userInfo = useSelector((store) => store.authInfo)
  const currency = useSelector((store) => store.currency)

  if (userInfo?.balance?.success && !currency.loading) {
    return (
      <div className={styles.mainContainer}>
        <Heading t={t} heading={'myAccount.pageHeadings.bonusHistory'}/>
        <TrxHistoryLinksContainer router={router} t={t}/>
        <ErrorText>
          <SelectorsContainer t={t} currencyData={currency} userInfo={userInfo}/>
        </ErrorText>
        {
          userInfo?.loadingBonusesHistory
            ?
            <LoadingComponent t={t}/>
            :
            <ErrorText>
              <BonusTableContainer
                currencyData={currency}
                userInfo={userInfo}
                t={t}
              />
            </ErrorText>
        }
      </div>
    )
  } else {
    return (
      <div className={styles.mainContainer}>
        <Heading t={t} heading={'myAccount.pageHeadings.bonusHistory'}/>
        <LoadingComponent t={t}/>
      </div>
    )
  }
}
