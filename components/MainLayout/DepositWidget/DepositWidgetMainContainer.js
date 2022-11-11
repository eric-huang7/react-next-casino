import {PaymentMethodMainBlock} from "./PaymentMethodMainBlock";
import useWindowScroll from "../../../hooks/useWindowScroll";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import { VStack, Text } from "@chakra-ui/react";
import {
  showCreditCardModal,
  showCryptoModal,
  showMobilePaymentsStepper
} from "../../../redux/popups/action";
import {setUserCurrencySwitcher, setUserDepositValue} from "../../../redux/userFinance/action";
import {showRegister} from "../../../redux/ui/action";
import {siteID} from "../../../envs/envsForFetching";
import {postCryptoPayment} from "../../../redux/deposits/action";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import {setUserPaymentMethod} from "../../../redux/userFinance/action";
import ErrorEmpty from "../../ErrorBoundaryComponents/ErrorEmpty";
import ErrorText from "../../ErrorBoundaryComponents/ErrorText";
import {SelectCurrencyModal} from "../../currency/SelectCurrencyModal";
import {useDisclosure} from "@chakra-ui/hooks";
import {addCurrencyToUserList} from "../../../redux/user/action";
import {useTranslation} from "next-i18next";
import CurrencyIcon from "../../currency/CurrencyIcon";
import {Button} from "@chakra-ui/button";
import {Input} from "@chakra-ui/input";
import {Box, HStack} from "@chakra-ui/layout";
import {CloseIcon} from "@chakra-ui/icons";
import {Tooltip} from "@chakra-ui/tooltip";
import PrimaryButton from "../../buttons/PrimaryButton";

const Label = ({children, ...props}) => <Text
  as="div"
  fontSize={{base: "10px", lg: "14px"}}
  color="accent.850"
  fontWeight={600}
  {...props}
>
  {children}
</Text>

export const DepositWidgetMainContainer = ({userAuth}) => {
  const { t } = useTranslation('common')
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {width, height} = useWindowDimensions();

  const userCurrency = useSelector((state) => state.userFinance);
  const userDepositValue = useSelector((state) => state.userFinance?.depositValue);
  const userPayment = useSelector((state) => state.userFinance);
  const currencyData = useSelector((store) => store.currency?.currency);

  useEffect(() => {
    if (userCurrency?.userCurrencyData?.depositMin) {
      dispatch(setUserDepositValue(Number(userCurrency?.userCurrencyData?.depositMin)));
    }
  }, [userCurrency?.userCurrencyData?.depositMin])

  let scrollHeight = useWindowScroll();
  const [activeWidget, setActiveWidget] = useState(true);

  const valueInputHandler = (e) => {
    if (e.target.value > 9999999999) {
      e.target.value = userDepositValue;
      return false;
    } else if (!Number(e.target.value)) {
      setErrorDepositValue(true);
      dispatch(setUserDepositValue(0));
    } else {
      setErrorDepositValue(false);
      dispatch(setUserDepositValue(Number(e.target.value)));
    }
  }

  const [isActivePayments, setIsActivePayments] = useState(false);
  const [paymentMethods, setPaymentMethods] = useState(null);

  const paymentMethodChooser = (method) => {
    setIsActivePayments(false);
    setErrorPaymentMethod(false);
  }

  const [errorPaymentMethod, setErrorPaymentMethod] = useState(false);
  const [errorDepositValue, setErrorDepositValue] = useState(false);

  const openWindow = (type) => {
    if (!userAuth.isAuthenticated) {
      dispatch(showRegister(true));
    } else if (type === 'fiat') {

      dispatch(showCreditCardModal(true));

    } else if (type === 'crypto' || type === 'crypto chosen type') {
      let currencyInfo = currencyData?.results.find((currency) => currency.id === userPayment?.paymentMethodData.methodData.currency_from.currency_id);

      let paymentData = {
        senderCurrency_id: currencyInfo.id,
        user_id: `${userAuth.user.user.id}`,
        site_id: siteID,
        award_amount: `${userDepositValue}`,
        receiverCurrency_id: userCurrency?.userCurrencyData?.id
      }

      dispatch(postCryptoPayment(paymentData, userPayment));
      dispatch(showCryptoModal(true));

    }
  }

  const whatShouldDoPlayWithButton = () => {
    if (!userAuth.isAuthenticated) {
      dispatch(showRegister(true));
    }

    if ((userCurrency.userCurrencyData.type === 3 && width > 680)) {
      if (!userPayment && Number(userDepositValue) === 0) {
        setErrorPaymentMethod(true);
        setErrorDepositValue(true);
      } else if (!userPayment) {
        setErrorPaymentMethod(true);
      } else if (Number(userDepositValue) === 0) {
        setErrorDepositValue(true);
      } else if (!userPayment?.paymentMethodData) {
        setErrorPaymentMethod(true);
      } else if (!userPayment?.paymentMethodData.paymentType) {
        setErrorPaymentMethod(true);
      } else if (userPayment?.paymentMethodData.paymentType === 'cryptoArr') {
        setErrorPaymentMethod(true);
      } else {
        if (userPayment?.paymentMethodData.paymentType === 'crypto') {
          setErrorPaymentMethod(false);
          setErrorDepositValue(false);
          openWindow('crypto chosen type');
        } else {
          setErrorPaymentMethod(false);
          setErrorDepositValue(false);
          openWindow('fiat');
        }
      }
    } else if (width <= 680) {
      console.log('showMobilePaymentsStepper')
      if (Number(userDepositValue) === 0) {
        setErrorDepositValue(true);
      } else {
        setErrorPaymentMethod(false);
        setErrorDepositValue(false);
        dispatch(showMobilePaymentsStepper(true));
      }
    } else {
        if (Number(userDepositValue) === 0) {
          setErrorDepositValue(true);
        } else if (!userPayment) {
          setErrorPaymentMethod(true);
        } else if (Number(userDepositValue) === 0) {
          setErrorDepositValue(true);
        } else if (!userPayment?.paymentMethodData) {
          setErrorPaymentMethod(true);
        } else if (!userPayment?.paymentMethodData.paymentType) {
          setErrorPaymentMethod(true);
        } else if (userPayment?.paymentMethodData.paymentType === 'cryptoArr') {
          setErrorPaymentMethod(true);
        } else {
          if (userPayment?.paymentMethodData.paymentType === 'crypto') {
            setErrorPaymentMethod(false);
            setErrorDepositValue(false);
            openWindow('crypto chosen type');
          } else {
            setErrorPaymentMethod(false);
            setErrorDepositValue(false);
            openWindow('fiat');
          }
        }
      }
    }

  const onSelectCurrency = (currencyData) => {
    dispatch(setUserCurrencySwitcher(currencyData))

    if (userAuth) {
      let currency = {
        currency_id: currencyData.id
      }
      dispatch(addCurrencyToUserList(currency))
    }

    onClose()
  }

  useEffect(() => {
    if (scrollHeight < 900 && (isActivePayments || errorPaymentMethod || errorDepositValue)) {
      setIsActivePayments(false);
      setErrorPaymentMethod(false);
      setErrorDepositValue(false);

      dispatch(setUserPaymentMethod(null));
    }
  }, [scrollHeight])

  useEffect(() => {
    if (width <= 680) {
      setIsActivePayments(false)
    }
  }, [width])

  const closeButtonClickHandler = () => {
    setActiveWidget(false);
    setIsActivePayments(false);
    setErrorPaymentMethod(false);
    setErrorDepositValue(false);
  }

  return (
    <>
      <HStack
        transform={(scrollHeight > 900) && activeWidget && 'translateY(-223px)'}
        position="fixed"
        bottom="-200px"
        zIndex={12}
        alignItems="flex-end"
        h="70px"
        borderRadius="8px"
        bg="accent.500"
        left="50%"
        ml={{base: "-50%", lg: userAuth?.isAuthenticated ? "-327px" : "-190px"}}
        p="19px 7px 8px"
        w={{base: '100%', lg: 'auto'}}
        transition="transform 1s ease-in-out"
        spacing={{base: 0, lg: 2}}
        justifyContent="space-between"
      >
        <VStack spacing={0} order={{base: 2, lg: 1}}>
          <Label display={{base: 'none', lg: 'block'}}>{t("depositWidget.currency")}</Label>
          <Button onClick={onOpen} w={{base: "77px", lg: "138px"}} h="42px" bg="text.100" borderRadius="8px">
            <CurrencyIcon id={userCurrency?.userCurrencyData?.abbreviation} size={6} mr={1}/>
            {userCurrency?.userCurrencyData?.abbreviation}
          </Button>
        </VStack>

        <VStack spacing={0} order={{base: 1, lg: 2}}>
          <Label display={{base: 'none', lg: 'block'}}>{t("depositWidget.amount")}</Label>
          <Label display={{base: 'block', lg: 'none'}}>{t("depositWidget.enterDeposit")}</Label>
          <Tooltip hasArrow placement="top" label={t("depositWidget.valueError")} bg='red'
             color='white' px="5px" isOpen={errorDepositValue}>
            <Input
              onChange={valueInputHandler}
              w="138px"
              h="42px"
              bg="text.100"
              // border="1px solid"
              // borderColor="grey.600"
              focusBorderColor="primary.500"
              borderRadius="8px"
              textAlign="center"
              type="number"
              id={'widgetAmountInput'}
              placeholder={`${userCurrency?.userCurrencyData?.symbol} ${userDepositValue}`}
            />
          </Tooltip>
        </VStack>

        {userAuth.isAuthenticated && <ErrorText>
          <PaymentMethodMainBlock
            scrollHeight={scrollHeight}
            paymentMethodChooser={paymentMethodChooser}
            isActivePayments={isActivePayments}
            setIsActivePayments={setIsActivePayments}
            t={t}
            errorPaymentMethod={errorPaymentMethod}
            userCurrency={userCurrency}
            setPaymentMethods={setPaymentMethods}
            paymentMethods={paymentMethods}
            setErrorPaymentMethod={setErrorPaymentMethod}
            userPayment={userPayment}
          />
        </ErrorText>}

        <ErrorEmpty>
          <PrimaryButton
            onClick={whatShouldDoPlayWithButton}
            disabled={userCurrency?.userCurrencyData?.isDepositEnabled === 0}
            fontSize="14px"
            px={{base: "12px", lg: "5px"}}
            height="42px"
            order={3}
            width="auto"
          >
            <Text display={{base: 'block', lg: 'none'}}>{t("depositWidget.deposit")}</Text>
            <Text display={{base: 'none', lg: 'block'}}>
              {`${t("depositWidget.playWith")}\n${userCurrency?.userCurrencyData?.symbol ? userCurrency?.userCurrencyData?.symbol : ''}${userDepositValue} ${userCurrency?.userCurrencyData?.symbol ? "" : userCurrency?.userCurrencyData?.abbreviation}`}
            </Text>
          </PrimaryButton>
        </ErrorEmpty>

        <Box cursor="pointer" onClick={closeButtonClickHandler} order={5} pb={3}>
          <CloseIcon size={20} color="accent.850" />
        </Box>
      </HStack>

      <SelectCurrencyModal
        isOpen={isOpen}
        onClose={onClose}
        onSelect={onSelectCurrency}
        onBack={onClose}
      />
    </>
  )
}
