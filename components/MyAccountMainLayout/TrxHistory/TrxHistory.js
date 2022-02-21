import styles from '../../../styles/MyAccount/TrxHistory/TrxHistory.module.scss'
import { useSelector } from 'react-redux'
import { Heading } from '../ComponentsForPages/Heading'
import { TrxHistoryInputsContainer } from './TrxHistoryInputsContainer'
import { LoadingComponent } from '../../LoadingComponent/LoadingComponent'
import { TrxHistoryLinksContainer } from './TrxHistoryLinksContainer'
import { TrxHistoryTableContainer } from './TrxHistoryTableContainer'
import { useState } from 'react'
import ErrorEmpty from '../../ErrorBoundaryComponents/ErrorEmpty'
import ErrorText from '../../ErrorBoundaryComponents/ErrorText'

export const TrxHistory = ({ t }) => {
  const userInfo = useSelector((store) => store.authInfo)
  const currency = useSelector((store) => store.getCurrency)

  const [wasFiltering, setWasFiltering] = useState(false)

  if (userInfo?.balance?.success && !currency.loading) {
    return (
      <div className={styles.mainContainer}>
        <Heading t={t} heading={'myAccount.pageHeadings.trxHistory'}/>
        <TrxHistoryLinksContainer t={t}/>
        <ErrorEmpty>
          <TrxHistoryInputsContainer
            userInfo={userInfo}
            currencyData={currency}
            t={t}
            setWasFiltering={setWasFiltering}
          />
        </ErrorEmpty>
        {userInfo.loadingUserPayments
          ?
          <LoadingComponent t={t}/>
          :
          <ErrorText>
            <TrxHistoryTableContainer
              wasFiltering={wasFiltering} userInfo={userInfo} currencyData={currency} t={t}
            />
          </ErrorText>
        }
      </div>
    )
  } else {
    return (
      <div className={styles.mainContainer}>
        <Heading t={t} heading={'myAccount.pageHeadings.trxHistory'}/>
        <LoadingComponent t={t}/>
      </div>
    )
  }

}