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

  return (
    <div>
      <Heading heading={t('myAccount.pageHeadings.bonusHistory')}/>
      {userInfo?.balance?.success && !currency.loading
        ? <>
          <TrxHistoryLinksContainer router={router} t={t}/>
          <ErrorText>
            <SelectorsContainer t={t} currencyData={currency} userInfo={userInfo}/>
          </ErrorText>

          {userInfo?.loadingBonusesHistory
            ? <LoadingComponent t={t}/>
            : <ErrorText>
              <BonusTableContainer
                currencyData={currency}
                userInfo={userInfo}
                t={t}
              />
            </ErrorText>
          }
        </> : <LoadingComponent t={t}/>
      }

    </div>
  )
}
