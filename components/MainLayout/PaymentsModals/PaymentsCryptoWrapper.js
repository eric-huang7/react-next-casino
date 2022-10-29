import {VStack} from "@chakra-ui/layout"
import {TextBlock} from './CryptoComponents/TextBlock'
import {QRContainer} from './CryptoComponents/QRContainer'
import {ValueContainer} from './CryptoComponents/ValueContainer'
import {DepositAddressInput} from './CryptoComponents/DepositAddressInput'
import {useDispatch, useSelector} from 'react-redux'
import {setStepDepositModal, showCryptoModal, showDepositModal} from '../../../redux/popups/action'
import {annulDeposit} from '../../../redux/deposits/action'
import {LoadingComponent} from '../../LoadingComponent/LoadingComponent'
import {setUserPaymentMethod} from '../../../redux/userFinance/action'
import ErrorText from '../../ErrorBoundaryComponents/ErrorText'
import ErrorEmpty from '../../ErrorBoundaryComponents/ErrorEmpty'
import {useTranslation} from "next-i18next";
import SelectModal from "../../modal/SelectModal";

export const PaymentsCryptoWrapper = ({paymentsData}) => {
  const {t} = useTranslation('common')
  const dispatch = useDispatch()

  const userCurrency = useSelector((state) => state.userFinance)
  const userDepositValue = useSelector((state) => state.userFinance?.depositValue)
  const currenciesList = useSelector((store) => store.currency)

  const closeCrypto = () => {
    dispatch(showCryptoModal(false))
    dispatch(annulDeposit())
    dispatch(setStepDepositModal(1))
    dispatch(setUserPaymentMethod(null))
  }

  const whatDoBackButton = () => {
    dispatch(showCryptoModal(false))
    dispatch(showDepositModal(true));
    dispatch(annulDeposit());
    dispatch(setUserPaymentMethod(null))
  }

  return (
    <SelectModal
      isOpen={true}
      width={430}
      onClose={closeCrypto}
      // onBack={whatDoBackButton}
      title={t("cryptoPayment.heading")}
    >
      <VStack alignItems="center" p={4} spacing={0}>
        {
          paymentsData.isCryptoPaymentDataLoading || currenciesList.loading
            ? <LoadingComponent t={t} text={'loadingComponent'}/>
            : (paymentsData.isCryptoPaymentError ? <>
              <h2 style={{color: '#ff0000', textTransform: 'uppercase'}}>{t('cryptoPayment.error')}</h2>
              <p
                style={{color: '#ff0000'}}>{paymentsData.isCryptoPaymentError?.data?.extra_error_info?.message}</p>
            </> : <>
              <ErrorText>
                <TextBlock
                  t={t}
                  value={userDepositValue}
                  paymentsData={paymentsData.cryptoPaymentData}
                  currency={userCurrency}
                  currenciesList={currenciesList}
                  pb="25px"
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
            </>)
        }
      </VStack>
    </SelectModal>
  )
}
