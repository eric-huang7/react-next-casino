import {HStack, Text, VStack} from "@chakra-ui/layout"
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
import {Image} from "@chakra-ui/react";
import SubmitButton from "../../buttons/SubmitButton";

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
      hideClose
      isOpen={true}
      width={500}
      onClose={closeCrypto}
      header={<HStack w="100%" h="54px" bg='accent.700' m='30px 20px 0' borderRadius='15px'
                      justifyContent="space-between" alignItems="center" px="20px">
        <Image src="/assets/icons/deposit/arrow-left.svg"
               w="16px" h="16px" sx={{cursor: "pointer"}} onClick={whatDoBackButton}/>
        <Text color="white" fontFamily="Montserrat" fontSize='17px !important' letterSpacing='0.04em'
              textTransform="uppercase" fontWeight={400}>
          {t("cryptoPayment.heading")}
        </Text>
        <Image src="/assets/icons/deposit/close.svg" color="white"
               fontSize={18} _focus={{ boxShadow: 'none' }} cursor="pointer" onClick={closeCrypto}  />
      </HStack>}
      footer={<SubmitButton title="Confirm"/>}
    >
      <VStack alignItems="center" p={4} spacing={0}>
        {paymentsData.isCryptoPaymentDataLoading || currenciesList.loading
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
