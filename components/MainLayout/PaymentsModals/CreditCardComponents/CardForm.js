import styles from "../../../../styles/PaymentsModals/CreditCardPayment.module.scss";
import Image from "next/image";
import { HStack } from "@chakra-ui/react";
import {useEffect, useState} from "react";
import {validateExpiry} from "../../../../helpers/validateExpiryCardDate";
import {useDispatch, useSelector} from "react-redux";
import {useTranslation} from "next-i18next";
import {postCreditCardPayment} from "../../../../redux/deposits/action";
import {siteID} from "../../../../envs/envsForFetching";
import InputField from "../../../form/InputField";
import InputFieldRound from "../../../form/InputFieldRound";
import {Text, VStack} from "@chakra-ui/layout";

const CardForm = ({serverCardNumberError, userInfo, submitted}) => {
  const dispatch = useDispatch()
  const {t} = useTranslation('common')
  const [amountError, setAmountError] = useState(null);
  const [cardNumberError, setCardNumberError] = useState(null);
  const [dateInput, setDateInput] = useState('');
  const [cvvValue, setCvvValue] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cardDateError, setCardDateError] = useState('')
  const [cardNameInput, setCardNameInput] = useState('')
  const [cardNameErrorInput, setCardNameErrorInput] = useState('')

  const userCurrency = useSelector((state) => state.userFinance);
  const userDepositValue = useSelector((state) => state.userFinance?.depositValue);


  useEffect(() => {
    if (submitted) {
      confirmButtonClickHandler();
    }
  }, [submitted])

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

  const amountValueInputHandler = (e) => {
    if (e.target.value < 20) {
      setAmountError(t("creditCardPayment.errors.moreValue"));
    } else if (e.target.value > 4000) {
      setAmountError(t("creditCardPayment.errors.lessValue"));
    } else {
      setAmountError(null);
    }
  }

  const cardDateValue = (e) => {

    let date = e.target.value.replace(/\//g, "").substring(0, 2) + (e.target.value.length > 2 ? '/' : '') + e.target.value.replace(/\//g, "").substring(2, 4);

    if (date.length > 5) {
    } else {
      if (date.length > 0) {
        if (date[0].match(/[2-9]/)) {
          setDateInput("0" + date);
        } else {
          setDateInput(date);
        }
      } else {
        setDateInput(date);
      }
    }
    if (validateExpiry(date)) {
      setCardDateError('')
    } else {
      if (serverCardNumberError?.data?.extra_error_info?.errors?.filter((el) => el.property === 'expiry')[0]?.constraints?.isNotEmpty) {
        setCardDateError('')
        if (date.length === 0) {
          setCardDateError('');
        }
      } else {
        setCardDateError(t("creditCardPayment.errors.wrongDate"))
        if (date.length === 0) {
          setCardDateError('');
        }
      }
    }
  }

  const cvvInputHandler = (e) => {
    if (e.target.value.length > 4) {

    } else if (e.target.value.length < 3) {

      setCvvValue(e.target.value);
    } else {

      setCvvValue(e.target.value);
    }
  }

  const cardNumberInputHandler = (e) => {
    if (e.target.value.length === 0) {
      setCardNumberError(null);
      setCardNumber(e.target.value);
    } else if (e.target.value.length > 16) {

    } else if (e.target.value.length < 16) {

      if (serverCardNumberError?.data?.extra_error_info?.errors[0]?.constraints?.isCreditCard) {
        setCardNumberError('');
        setCardNumber(e.target.value);
      } else {
        setCardNumberError(t("creditCardPayment.errors.wrongCard"));
        setCardNumber(e.target.value);
      }
    } else {
      setCardNumberError(null);
      setCardNumber(e.target.value);
    }
  }

  const cardNameInputHandler = (e) => {
    if (e.target.value.trim().length === 0) {
      if (serverCardNumberError?.data?.extra_error_info?.errors?.filter((el) => el.property === 'name')[0]?.constraints?.isNotEmpty) {
        setCardNameInput(e.target.value);
        setCardNameErrorInput('');
      } else {
        setCardNameInput(e.target.value);
        setCardNameErrorInput(t("creditCardPayment.errors.wrongName"));
      }

    } else {
      setCardNameErrorInput('');
      setCardNameInput(e.target.value)
    }
  }

  return (
    <div className={styles.inputsWrapper}>
      <HStack alignItems="flex-start">
        <InputFieldRound
          error={cardNumberError}
          onChange={cardNumberInputHandler}
          value={cardNumber}
          type="number"
          id={'usernameLogIn'}
          placeholder={t("creditCardPayment.creditCard")}
          icon={<Image src="/assets/img/paymentsModals/card.webp" width="36px" height="31px" alt="" />}
        />
        <InputFieldRound
          w="35%"
          error={cardDateError}
          onChange={cardDateValue}
          value={dateInput}
          id={'dateInput'}
          placeholder={t("creditCardPayment.expiryDate")}
          autoComplete={"cc-exp"}
        />
      </HStack>
      {/*<div className={styles.cardNumberDate}>*/}

      {/*  <div className={styles.cardNumberWrapper}>*/}
      {/*    <input*/}
      {/*      onChange={(e) => cardNumberInputHandler(e)}*/}
      {/*      id={'cardNumber'}*/}
      {/*      type="number"*/}
      {/*      value={cardNumber}*/}
      {/*      className={styles.cardNumberInput}*/}
      {/*      placeholder={t("creditCardPayment.creditCard")}*/}
      {/*    />*/}
      {/*    <span className={styles.errorText}>{cardNumberError}</span>*/}
      {/*    <span*/}
      {/*      className={styles.errorText}>{serverCardNumberError?.data?.extra_error_info?.errors[0]?.constraints?.isCreditCard}</span>*/}
      {/*    /!*<span className={styles.errorText}>{serverCardNumberError?.data?.extra_error_info?.errors[0]?.constraints?.isCreditCard*!/*/}
      {/*    /!*  ? t("creditCardPayment.errors.serverCardNumberError")*!/*/}
      {/*    /!*  :*!/*/}
      {/*    /!*  ''*!/*/}
      {/*    /!*}</span>*!/*/}
      {/*    <label htmlFor="cardNumber" className={styles.cardNumberLabel}>*/}
      {/*    </label>*/}
      {/*  </div>*/}
      {/*  <div className={styles.cardDateWrapper}>*/}
      {/*    <input*/}
      {/*      onChange={(e) => cardDateValue(e)}*/}
      {/*      value={dateInput}*/}
      {/*      id={'dateInput'}*/}
      {/*      type="text"*/}
      {/*      className={styles.dateInput}*/}
      {/*      placeholder={t("creditCardPayment.expiryDate")}*/}
      {/*      autoComplete={"cc-exp"}*/}
      {/*    />*/}
      {/*    <span className={styles.errorText}>{cardDateError}</span>*/}
      {/*    <span*/}
      {/*      className={`${styles.errorText} ${styles.errorTextLong}`}>{serverCardNumberError?.data?.extra_error_info?.errors?.filter((el) => el.property === 'expiry')[0]?.constraints?.isNotEmpty}</span>*/}
      {/*  </div>*/}
      {/*</div>*/}
      <HStack alignItems="flex-start">
        <InputFieldRound
          error={cardNameErrorInput}
          onChange={cardNameInputHandler}
          value={cardNameInput}
          id={'cardName'}
          placeholder={t("creditCardPayment.creditHolder")}
          icon={<Image src="/assets/img/paymentsModals/user.webp" width="36px" height="31px" alt="" />}
        />
        <InputFieldRound
          w="35%"
          type="number"
          onChange={cvvInputHandler}
          value={cvvValue}
          id={'amountValueModal'}
          placeholder="CVV"
        />
      </HStack>
      {/*<div className={styles.nameCardCvv}>*/}
      {/*  <div className={styles.cardNameWrapper}>*/}
      {/*    <input*/}
      {/*      id={'cardName'}*/}
      {/*      type="text"*/}
      {/*      value={cardNameInput}*/}
      {/*      className={styles.cardNameInput}*/}
      {/*      placeholder={t("creditCardPayment.creditHolder")}*/}
      {/*      onChange={(e) => cardNameInputHandler(e)}*/}
      {/*    />*/}
      {/*    <span className={styles.errorText}>{cardNameErrorInput}</span>*/}
      {/*    <span*/}
      {/*      className={styles.errorText}>{serverCardNumberError?.data?.extra_error_info?.errors?.filter((el) => el.property === 'name')[0]?.constraints?.isNotEmpty}</span>*/}
      {/*    <label htmlFor="cardName" className={styles.cardNameLabel}></label>*/}
      {/*  </div>*/}
      {/*  <input onChange={(e) => cvvInputHandler(e)} type="number" value={cvvValue} className={styles.cardCvv}*/}
      {/*         placeholder={'CVV'}/>*/}
      {/*</div>*/}
      <VStack alignItems="flex-start" spacing={0}>
        <Text color="primary.500">{t("creditCardPayment.amountValue")}(Min 20.00, max 4000.00)</Text>
        <InputFieldRound
          type="number"
          error={amountError}
          onChange={amountValueInputHandler}
          id={'amountValueModal'}
          defaultValue={`${userDepositValue}`}
        />
      </VStack>
      <div className={styles.amountValue}>
        <p>{t("creditCardPayment.amountValue")}(Min 20.00, max 4000.00)</p>
        <input id={"amountValueModal"} onChange={(e) => amountValueInputHandler(e)} defaultValue={`${userDepositValue}`}
               type="number" className={styles.amountValueInput}/>
        <label htmlFor="amountValueModal"
               className={styles.amountValueLabel}>{userCurrency?.userCurrencyData?.symbol}</label>
        <span className={styles.errorText}>{amountError}</span>
      </div>
      <div className={styles.secureBlock}>
        <Image src={'/assets/img/paymentsModals/lock.webp'} layout={'fixed'} width={20} height={28} alt={'lock icon'}/>
        <p className={styles.secureText}>{t("creditCardPayment.secureText")}</p>
      </div>
    </div>
  )
}

export default CardForm;
