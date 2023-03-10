import Image from "next/image";
import { HStack } from "@chakra-ui/react";
import {useEffect, useState} from "react";
import {validateExpiry} from "../../../../helpers/validateExpiryCardDate";
import {useDispatch, useSelector} from "react-redux";
import {useTranslation} from "next-i18next";
import {postCreditCardPayment} from "../../../../redux/deposits/action";
import {siteID} from "../../../../envs/envsForFetching";
import InputFieldRound from "../../../form/InputFieldRound";
import {Text, VStack} from "@chakra-ui/layout";

const CardForm = ({serverCardNumberError, userInfo, submitted, onSubmit}) => {
  const dispatch = useDispatch()
  const {t} = useTranslation('common')
  const [amountValue, setAmountValue] = useState('');
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

  useEffect(() => {
    const errors = {};

    if (serverCardNumberError?.data?.extra_error_info?.errors) {
      serverCardNumberError?.data?.extra_error_info?.errors?.forEach((error) => {
        if (Object.keys(error.constraints).length > 0) {
          const errorMessage = error.constraints[Object.keys(error.constraints)[0]]
          errors[error.property] = errorMessage

          switch (error.property) {
            case 'name':
              setCardNameErrorInput(errorMessage)
              break;
            case 'expiry':
              setCardDateError(errorMessage)
              break;
            case 'number':
              setCardNumberError(errorMessage)
              break;
            case 'bonus_offer_id':
              break;
          }
        }
      });
    }

  }, [serverCardNumberError?.data?.extra_error_info?.errors])

  const confirmButtonClickHandler = () => {
    if (!amountError && amountVaidation(amountValue) &&  !cardNumberError && !cardDateError && !cardNameErrorInput) {
      let date = dateInput.split('/').join('')
      let paymentData = {
        senderCurrency_id: userCurrency?.userCurrencyData?.id,
        user_id: `${userInfo?.user?.user?.id}`,
        site_id: siteID,
        number: `${cardNumber}`,
        cvv: Number(cvvValue),
        name: `${cardNameInput}`,
        expiry: `${date}`,
        // bonus_offer_id: '', // TODO
        deposit_amount: amountValue
      }

      dispatch(postCreditCardPayment(paymentData));
    }

    onSubmit();
  }

  const amountValueInputHandler = (e) => {
    setAmountValue(e.target.value)
    amountVaidation(e.target.value)
  }

  const amountVaidation = (value) => {
    if (value < 20) {
      setAmountError(t("creditCardPayment.errors.moreValue"));
      return false;
    } else if (value > 4000) {
      setAmountError(t("creditCardPayment.errors.lessValue"));
      return false;
    } else {
      setAmountError(null);
    }
    return true;
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
    <VStack p="10px 20px 30px" spacing={0}>
      <HStack w="100%" h="54px" justifyContent="flex-start" alignItems="center" bg="#51241A" borderRadius="12px"
              mb="25px" px="20px">
        <Text fontSize={16} fontFamily="Montserrat" color="white" textTransform="capitalize">
          {t('creditCardPayment.notCrypto')}
        </Text>
      </HStack>
      <HStack w="100%" alignItems="flex-start" spacing={4}>
        <InputFieldRound
          error={cardNumberError}
          onChange={cardNumberInputHandler}
          value={cardNumber}
          type="number"
          id={'usernameLogIn'}
          placeholder={t("creditCardPayment.creditCard")}
          icon={<Image src="/assets/icons/deposit/card.svg" width="28px" height="24px" alt="" />}
        />
        <InputFieldRound
          w="45%"
          error={cardDateError}
          onChange={cardDateValue}
          value={dateInput}
          id={'dateInput'}
          placeholder={t("creditCardPayment.expiryDate")}
          autoComplete={"cc-exp"}
          inputProps={{textAlign: "center"}}
        />
      </HStack>
      <HStack w="100%" alignItems="flex-start" spacing={4}>
        <InputFieldRound
          error={cardNameErrorInput}
          onChange={cardNameInputHandler}
          value={cardNameInput}
          id={'cardName'}
          placeholder={t("creditCardPayment.creditHolder")}
          icon={<Image src="/assets/icons/deposit/user.svg" width="26px" height="26px" alt="" />}
        />
        <InputFieldRound
          w="45%"
          type="number"
          onChange={cvvInputHandler}
          value={cvvValue}
          id={'amountValueModal'}
          placeholder="CVV"
          inputProps={{textAlign: "center"}}
        />
      </HStack>
      <HStack w="100%" alignItems="center" justifyContent="center" py={2}>
        <Text fontSize={16} fontFamily="Montserrat" color="white" textTransform="uppercase">
          {t('creditCardPayment.or')}
        </Text>
      </HStack>
      <HStack w="100%" alignItems="flex-start" spacing={4}>
        <InputFieldRound
          error={cardNameErrorInput}
          onChange={cardNameInputHandler}
          value={cardNameInput}
          id={'ewallet'}
          placeholder={t("creditCardPayment.ewallet")}
          icon={<Image src="/assets/icons/deposit/wallet.svg" width="24px" height="20px" alt="" />}
        />
      </HStack>
      <VStack alignItems="flex-start" spacing={0} pb={4} w="100%">
        <Text fontSize={16} fontFamily="Montserrat" color="accent.550">
          {t("creditCardPayment.amountValue")}(Min 20.00, max 4000.00)
        </Text>
        <InputFieldRound
          type="number"
          error={amountError}
          onChange={amountValueInputHandler}
          id={'amountValueModal'}
          defaultValue={`${userDepositValue}`}
        />
      </VStack>
      <HStack justifyContent="flex-start" spacing={3} w="100%">
        <Image src={'/assets/icons/deposit/lock.svg'} layout={'fixed'} width={20} height={28} alt={'lock icon'}/>
        <Text
          fontSize="16px"
          fontWeight={300}
          color="#C1AFAB"
          fontFamily="Montserrat"
          textAlign="center"
        >
          {t("creditCardPayment.secureText")}
        </Text>
      </HStack>
    </VStack>
  )
}

export default CardForm;
