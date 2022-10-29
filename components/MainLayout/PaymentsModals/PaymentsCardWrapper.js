import Image from "next/image";
import {Box, VStack} from "@chakra-ui/react";
import {useDispatch, useSelector} from "react-redux";
import {
  setStepDepositModal,
  showCreditCardModal,
  showDepositModal
} from "../../../redux/popups/action";
import {annulDeposit} from "../../../redux/deposits/action";
import {useState} from "react";
import {setUserPaymentMethod} from "../../../redux/userFinance/action";
import {LoadingComponent} from "../../LoadingComponent/LoadingComponent";
import ErrorText from "../../ErrorBoundaryComponents/ErrorText";
import SelectModal from "../../modal/SelectModal";
import {useTranslation} from "next-i18next";
import SubmitButton from "../../buttons/SubmitButton";
import {Text} from "@chakra-ui/layout";
import CardForm from "./CreditCardComponents/CardForm";

export const PaymentsCardWrapper = ({userInfo, paymentsData}) => {
  const dispatch = useDispatch()
  const {t} = useTranslation('common')

  const userPayment = useSelector((state) => state.userFinance);

  const closeCardPayment = () => {
    dispatch(showCreditCardModal(false));
    dispatch(annulDeposit());
    dispatch(setUserPaymentMethod(null));
    dispatch(setStepDepositModal(1));
  }

  const backButtonClickHandler = () => {
    dispatch(showCreditCardModal(false));
    dispatch(annulDeposit());
    dispatch(setUserPaymentMethod(null));
    dispatch(showDepositModal(true));
  }

  const [submitted, setSubmitted] = useState('');

  return !userPayment?.paymentMethodData?.methodData ? (
    <SelectModal
      isOpen={true}
      width={500}
      headerHeight={70}
      onClose={closeCardPayment}
      // onBack={backButtonClickHandler}
      header={<Image src={'/assets/img/depositWidget/cards.webp'} width={96} height={38}
                     layout={'fixed'} alt=""/>}
    >
      <VStack w="100%" display="flex" alignItems="center" marginTop="50px">
        <LoadingComponent t={t} text={'creditCardPayment.errors.errorPaymentMethod'}/>
      </VStack>
    </SelectModal>
  )
    : (paymentsData?.creditPaymentData?.data?.success ? (
      <SelectModal
        isOpen={true}
        width={500}
        headerHeight={70}
        onClose={closeCardPayment}
        title={t("creditCardPayment.confirmHeading")}
      >
        <VStack w="100%" alignItems="center" mt="50px">
          <Box mb="60px">
            <Image src={'/assets/img/paymentsModals/confirmed.png'} width={120} height={126} layout={'fixed'} alt=""/>
          </Box>
          <Text
            fontSize="20px"
            color="text.200"
            textAlign="center"
            pb="50px"
            fontFamily="Segoe UI"
          >
            {t("creditCardPayment.confirmText")}
          </Text>
        </VStack>
      </SelectModal>
    )
        : (
      <SelectModal
        isOpen={true}
        width={500}
        headerHeight={70}
        onClose={closeCardPayment}
        // onBack={backButtonClickHandler}
        title={t("depositPage.innerHeading")}
        footer={<SubmitButton title={t('creditCardPayment.confirmButton')} onClick={() => setSubmitted(true)}/>}
      >
        <ErrorText>
          <CardForm
            userInfo={userInfo}
            submitted={submitted}
            onSubmit={() => setSubmitted(false)}
            serverCardNumberError={paymentsData.isCreditPaymentError}
          />
        </ErrorText>
      </SelectModal>
    )
  )
}
