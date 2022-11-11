import {Box, HStack, Text, VStack} from "@chakra-ui/layout"
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
import {useEffect, useState} from "react";
import {iconsUrl} from "../../../helpers/imageUrl";
import {BonusesBlock} from "../DepositPage/BonusesBlock/BonusesBlock";
import useBonuses from "../../../hooks/useBonuses";
import {BonusesItem} from "../DepositPage/BonusesBlock/BonusItem";

export const PaymentsCryptoWrapper = ({paymentsData}) => {
  const {t} = useTranslation('common')
  const dispatch = useDispatch()
  const [isConfirmed, setIsConfirmed] = useState(false)
  const [bonusData, setBonusData] = useState()

  const {allBonuses} = useBonuses();

  const userCurrency = useSelector((state) => state.userFinance)
  const userDepositValue = useSelector((state) => state.userFinance?.depositValue)
  const currenciesList = useSelector((store) => store.currency)
  const userSelectedBonus = useSelector((state) => state.userBonus)

  useEffect(() => {
    if (allBonuses?.length > 0) {
      if (userSelectedBonus) {
        const selectedItem = allBonuses?.find(item => item.id === userSelectedBonus.id);

        setBonusData(selectedItem || allBonuses[0])
      } else {
        setBonusData(allBonuses[0])
      }
    }

  }, [allBonuses, userSelectedBonus]);

  const closeCrypto = () => {
    setIsConfirmed(false);
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

  const handleSubmit = () => {
    setIsConfirmed(true);
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
      footer={!isConfirmed && <SubmitButton title="Confirm" onClick={handleSubmit}/>}
    >
      <VStack w="100%" alignItems="center" p={4} spacing={0}>
        {isConfirmed
          ? (<VStack h="380px" alignItems="center" justifyContent="flex-start" spacing={0}
               bg="url('/assets/icons/deposit/check.svg') no-repeat center center">
            <Text pt="35px" color="white" fontFamily="Montserrat" fontSize="24px" textAlign="center" fontWeight={300}>
              You choose <Text as="span" color="primary.500">XX</Text> Bonus
            </Text>
            <Text maxW="70%" lineHeight="34px" pt="70px" color="white" fontFamily="Montserrat" fontSize="24px"
                textAlign="center" fontWeight={300}>
              Your Deposit has been
              approved and bonus will
              be awarded as per <Text as="span" color="primary.500">T&Cs</Text>
            </Text>

          </VStack>
          ) : (
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
                {bonusData && <Box pt="16px" w="100%">
                  <BonusesItem bonusData={bonusData} />
                </Box>}
              </>)
          )}
      </VStack>
    </SelectModal>
  )
}
