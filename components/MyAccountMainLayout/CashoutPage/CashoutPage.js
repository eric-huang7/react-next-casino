import { Heading } from '../ComponentsForPages/Heading'
import { LinksBlock } from './PageComponents/LinksBlock'
import { AvailableToCashoutBlock } from './PageComponents/AvailableToCashoutBlock'
import { TryBitcoinContainer } from './PageComponents/TryBitcoinContainer'
import { SelectPaymentContainer } from './PageComponents/SelectPaymentContainer/SelectPaymentContainer'
import { useSelector } from 'react-redux'
import { Box } from "@chakra-ui/react"
import { LoadingComponent } from '../../LoadingComponent/LoadingComponent'
import ErrorText from '../../ErrorBoundaryComponents/ErrorText'
import ErrorEmpty from '../../ErrorBoundaryComponents/ErrorEmpty'
import SecondHeading from "../ComponentsForPages/SecondHeading";

export const CashoutPage = ({ t, activeLink, activeCurrencyId }) => {
  const balanceInfo = useSelector((store) => store.authInfo)
  const currency = useSelector((store) => store.currency)

  let typeOfCurrency = balanceInfo.balance && currency?.currency?.results?.find(
    (el) => Number(el.id) === Number(activeCurrencyId)
  )

  return (
    <Box>
      <Heading t={t} heading={'myAccount.pageHeadings.cashoutPage'}/>
      {balanceInfo.balance && currency.currency
        ? <>
          <SecondHeading title={t("myAccount.cashoutPage.secondHeading")} />
          <ErrorText>
            <LinksBlock
              balanceData={balanceInfo.balance.balances}
              currencyData={currency.currency.results}
              t={t}
              activeLink={activeLink}
              activeCurrencyId={activeCurrencyId}
            />
          </ErrorText>
          {typeOfCurrency && <>
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
          }
          {typeOfCurrency && typeOfCurrency.type === 3 &&
            <ErrorEmpty>
              <TryBitcoinContainer
                btcCurrency={currency.currency.results.find((el) => el.abbreviation === 'BTC')}
                t={t}
              />
            </ErrorEmpty>
          }
        </>
        : <LoadingComponent t={t}/>}
    </Box>
  )
}
