import styles from '../../../styles/PaymentsModals/CreditCardPayment.module.scss';

import Image from "next/image";
import {ConfirmButton} from "./CreditCardComponents/ConfirmButton";
import {InputsContainer} from "./CreditCardComponents/InputsContainer";
import {useDispatch, useSelector} from "react-redux";
import {
  setStepDepositModal,
  showCreditCardModal,
  showDepositModal
} from "../../../redux/popups/action";
import {annulDeposit, postCreditCardPayment} from "../../../redux/deposits/action";
import {useState} from "react";
import {siteID} from "../../../envs/envsForFetching";
import {setUserPaymentMethod} from "../../../redux/userFinance/action";
import {LoadingComponent} from "../../LoadingComponent/LoadingComponent";
import ErrorText from "../../ErrorBoundaryComponents/ErrorText";
import SelectModal from "../../modal/SelectModal";
import {useTranslation} from "next-i18next";

export const PaymentsCardWrapper = ({ userInfo, paymentsData }) => {
  const dispatch = useDispatch()
  const { t } = useTranslation('common')

  const userCurrency = useSelector((state) => state.userFinance);
  const userDepositValue = useSelector((state) => state.userFinance?.depositValue);
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
  const [amountError, setAmountError] = useState(null);

  // TODO: ADD AMOUNT VALUE
  const [amountValue, setAmountValue] = useState('');
  const [cardNumberError, setCardNumberError] = useState(null);
  const [dateInput, setDateInput] = useState('');
  const [cvvValue, setCvvValue] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cardDateError, setCardDateError] = useState('')
  const [cardNameInput, setCardNameInput] = useState('')
  const [cardNameErrorInput, setCardNameErrorInput] = useState('')

  const confirmButtonClickHandler = () => {
    if (!amountError && !cardNumberError && !cardDateError && !cardNameErrorInput) {
      let date = dateInput.split('/').join('')
      let paymentData = {
        senderCurrency_id: userCurrency?.userCurrencyData?.id,
        user_id: `${userInfo?.user?.user?.id}`,
        site_id: siteID,
        number: `${cardNumber}`,
        cvv: Number(cvvValue),
        name: `${cardNameInput}`,
        expiry: `${date}`,
        bonus_offer_id: '',
        deposit_amount: ''
      }
      dispatch(postCreditCardPayment(paymentData));
    }
  }

  if (!userPayment?.paymentMethodData?.methodData) {
    return (
      <SelectModal
        isOpen={true}
        w={430}
        onClose={closeCardPayment}
        onBack={backButtonClickHandler}
        header={<Image className={styles.cardImage} src={'/assets/img/depositWidget/cards.webp'} width={96} height={38}
                       layout={'fixed'} alt=""/>}
      >
        <div className={styles.confirmedPayment}>
          <LoadingComponent t={t} text={'creditCardPayment.errors.errorPaymentMethod'}/>
        </div>
      </SelectModal>
    )
  }
  if (paymentsData?.creditPaymentData?.data?.success) {
    return (
      <SelectModal
        isOpen={true}
        w={430}
        onClose={closeCardPayment}
        title={t("creditCardPayment.confirmHeading")}
      >
        <div className={styles.confirmedPayment}>
          <div className={styles.confirmedImageWrapper}>
            <Image src={'/assets/img/paymentsModals/confirmed.png'} width={120} height={126} layout={'fixed'} alt=""/>
          </div>
          <p className={styles.confirmedText}>{t("creditCardPayment.confirmText")}</p>
        </div>
      </SelectModal>
    )
  } else {
    return (
      <SelectModal
        isOpen={true}
        width={430}
        onClose={closeCardPayment}
        onBack={backButtonClickHandler}
        header={<Image className={styles.cardImage} src={'/assets/img/depositWidget/cards.webp'} width={96} height={38}
                       layout={'fixed'} alt=""/>}
        footer={<ConfirmButton
          t={t}
          confirmButtonClickHandler={confirmButtonClickHandler}
        />}
      >
        <ErrorText>
          <InputsContainer
            serverCardNumberError={paymentsData.isCreditPaymentError}
            userDepositValue={userDepositValue}
            userCurrency={userCurrency}
            t={t}
            amountError={amountError}
            setAmountError={setAmountError}
            cardNumberError={cardNumberError}
            setCardNumberError={setCardNumberError}
            dateInput={dateInput}
            setDateInput={setDateInput}
            cvvValue={cvvValue}
            setCvvValue={setCvvValue}
            cardNumber={cardNumber}
            setCardNumber={setCardNumber}
            cardDateError={cardDateError}
            setCardDateError={setCardDateError}
            cardNameInput={cardNameInput}
            setCardNameInput={setCardNameInput}
            setCardNameErrorInput={setCardNameErrorInput}
            cardNameErrorInput={cardNameErrorInput}
          />
        </ErrorText>
      </SelectModal>
    )
  }
}
