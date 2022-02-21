import styles from '../../../styles/MyAccount/DocumentsPage/DocumentsPage.module.scss'
import { Heading } from '../ComponentsForPages/Heading'
import { SecontHeading } from './PageComponents/SecontHeading'
import { LinksBlock } from './PageComponents/LinksBlock'
import { AvailableToCashoutBlock } from './PageComponents/AvailableToCashoutBlock'
import { TryBitcoinContainer } from './PageComponents/TryBitcoinContainer'
import { SelectPaymentContainer } from './PageComponents/SelectPaymentContainer/SelectPaymentContainer'
import { useSelector } from 'react-redux'
import { LoadingComponent } from '../../LoadingComponent/LoadingComponent'
import ErrorText from '../../ErrorBoundaryComponents/ErrorText'
import ErrorEmpty from '../../ErrorBoundaryComponents/ErrorEmpty'

export const CashoutPage = ({ t, activeLink, activeCurrencyId }) => {
  const balanceInfo = useSelector((store) => store.authInfo)
  const currency = useSelector((store) => store.getCurrency)

  if (balanceInfo.balance && currency.currency) {

    let typeOfCurrency = currency.currency.results.find((el) => Number(el.id) === Number(activeCurrencyId))

    return (
      <div className={styles.mainContainer}>
        <Heading
          t={t}
          heading={'myAccount.pageHeadings.cashoutPage'}
        />
        <SecontHeading t={t}/>
        <ErrorText>
          <LinksBlock
            balanceData={balanceInfo.balance.balances}
            currencyData={currency.currency.results}
            t={t}
            activeLink={activeLink}
            activeCurrencyId={activeCurrencyId}
          />
        </ErrorText>
        {
          typeOfCurrency
            ?
            <>
              <ErrorText>
                <AvailableToCashoutBlock
                  typeOfCurrency={typeOfCurrency}
                  balanceData={balanceInfo.balance.balances}
                  t={t}
                />
              </ErrorText>
              <ErrorText>
                <SelectPaymentContainer
                  t={t}
                  typeOfCurrency={typeOfCurrency}
                  currencyData={currency.currency.results}
                  balanceData={balanceInfo.balance.balances}
                  userInfo={balanceInfo.user.user}
                />
              </ErrorText>
            </>
            :
            <></>
        }
        {
          typeOfCurrency
            ?
            typeOfCurrency.type === 3
              ?
              <ErrorEmpty>
                <TryBitcoinContainer
                  btcCurrency={currency.currency.results.find((el) => el.abbreviation === 'BTC')}
                  t={t}
                />
              </ErrorEmpty>
              :
              <></>
            :
            <></>
        }

      </div>
    )
  } else {

    return (
      <div className={styles.mainContainer}>
        <Heading
          t={t}
          heading={'myAccount.pageHeadings.cashoutPage'}
        />
        <LoadingComponent t={t}/>
      </div>
    )
  }

}