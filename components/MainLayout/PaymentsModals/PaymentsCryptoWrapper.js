import styles from '../../../styles/PaymentsModals/PaymentsCrypto.module.scss'
import { PaymentHeading } from './CreditCardComponents/Heading'
import { TextBlock } from './CryptoComponents/TextBlock'
import { QRContainer } from './CryptoComponents/QRContainer'
import { ValueContainer } from './CryptoComponents/ValueContainer'
import { DepositAddressInput } from './CryptoComponents/DepositAddressInput'
import { useDispatch, useSelector } from 'react-redux'
import { setStepDepositModal, showCryptoModal } from '../../../redux/popups/action'
import { annulDeposit } from '../../../redux/deposits/action'
import useWindowScroll from '../../../hooks/useWindowScroll'
import { LoadingComponent } from '../../LoadingComponent/LoadingComponent'
import { setUserPaymentMethod } from '../../../redux/actions/setUserPaymentMethod'
import ErrorText from '../../ErrorBoundaryComponents/ErrorText'
import ErrorEmpty from '../../ErrorBoundaryComponents/ErrorEmpty'

export const PaymentsCryptoWrapper = ({ t, paymentsData }) => {

  let scrollHeight = useWindowScroll()
  const userCurrency = useSelector((state) => state.userSelectedCurrency)
  const userDepositValue = useSelector((state) => state.userDepositValue.value)
  const currenciesList = useSelector((store) => store.currency)

  const dispatch = useDispatch()
  const closeCrypto = () => {
    dispatch(showCryptoModal(false))
    dispatch(annulDeposit())
    dispatch(setStepDepositModal(1))
    dispatch(setUserPaymentMethod(null))
  }

  return (
    <div className={styles.paymentsMainWrapper}>
      <div className={`${styles.paymentsInnerWrapper} ${scrollHeight > 100 ? styles.marginNull : ''}`}>
        <div className={styles.paymentsMainContainer}>
          <ErrorText>
            <PaymentHeading closeHandler={closeCrypto} t={t} type={'crypto'}/>
          </ErrorText>
          {
            paymentsData.isCryptoPaymentDataLoading || currenciesList.loading ?
              <>
                <LoadingComponent t={t} text={'loadingComponent'}/>
              </>
              :
              paymentsData.isCryptoPaymentError ?
                <>
                  <h2 style={{ color: '#ff0000', textTransform: 'uppercase' }}>{t('cryptoPayment.error')}</h2>
                  <p
                    style={{ color: '#ff0000' }}>{paymentsData.isCryptoPaymentError?.data?.extra_error_info?.message}</p>
                </>
                :
                <>
                  <ErrorText>
                    <TextBlock
                      t={t}
                      value={userDepositValue}
                      paymentsData={paymentsData.cryptoPaymentData}
                      currency={userCurrency}
                      currenciesList={currenciesList}
                    />
                  </ErrorText>
                  <ErrorEmpty>
                    <QRContainer
                      qrData={paymentsData.cryptoPaymentData.data.address}
                    />
                  </ErrorEmpty>
                  <ErrorEmpty>
                    <ValueContainer
                      value={userDepositValue}
                      paymentsData={paymentsData.cryptoPaymentData}
                      currency={userCurrency}
                      currenciesList={currenciesList}
                    />
                  </ErrorEmpty>
                  <ErrorEmpty>
                    <DepositAddressInput
                      t={t}
                      addressData={paymentsData.cryptoPaymentData.data.address}
                      memoData={paymentsData.cryptoPaymentData.data.memo}
                    />
                  </ErrorEmpty>
                </>
          }
        </div>
      </div>
    </div>
  )
}
