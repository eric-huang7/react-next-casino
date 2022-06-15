import styles from '../../../styles/DepostWidget/DepositWidgetMainContainer.module.scss';
import {CurrencyChooser} from "./CurrencyChooser";
import {AmountInputContainer} from "./AmountInputContainer";
import {PaymentMethodMainBlock} from "./PaymentMethodChooser/PaymentMethodMainBlock";
import {PlayWithButton} from "./PlayWithButton";
import {CloseButton} from "./CloseButton";
import useWindowScroll from "../../../hooks/useWindowScroll";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
  showCreditCardModal,
  showCryptoModal,
  showCurrencySwitcher,
  showMobilePaymentsStepper
} from "../../../redux/popups/action";
import {setUserDepositValue} from "../../../redux/userFinance/action";
import {showRegister} from "../../../redux/ui/action";
import {siteID} from "../../../envs/envsForFetching";
import {postCryptoPayment} from "../../../redux/deposits/action";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import {setUserPaymentMethod} from "../../../redux/userFinance/action";
import ErrorEmpty from "../../ErrorBoundaryComponents/ErrorEmpty";
import ErrorText from "../../ErrorBoundaryComponents/ErrorText";


export const DepositWidgetMainContainer = ({t, userAuth}) => {
  const dispatch = useDispatch();
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

  const currencySwitcherShowHandler = () => {
    dispatch(showCurrencySwitcher(true));
  }
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

  return (
    <div
      className={`${styles.depositWidgetMainContainer} ${userAuth.isAuthenticated ? '' : styles.moveRight} ${(scrollHeight > 900) && activeWidget ? styles.showDepositWidget : ''}`}>
      <ErrorEmpty>
        <CurrencyChooser
          width={width}
          currencySwitcherShowHandler={currencySwitcherShowHandler}
          userCurrency={userCurrency}
          t={t}
        />
      </ErrorEmpty>
      <ErrorEmpty>
        <AmountInputContainer
          width={width}
          userDepositValue={userDepositValue}
          userCurrency={userCurrency}
          valueInputHandler={valueInputHandler}
          errorDepositValue={errorDepositValue}
          t={t}
        />
      </ErrorEmpty>
      {
        width > 680 && userAuth.isAuthenticated && true
          ?
          <ErrorText>
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
          </ErrorText>
          :
          <>
          </>
      }
      <ErrorEmpty>
        <PlayWithButton
          width={width}
          userCurrency={userCurrency}
          userDepositValue={userDepositValue}
          whatShouldDoPlayWithButton={whatShouldDoPlayWithButton}
          t={t}
        />
      </ErrorEmpty>

      <CloseButton
        userCurrency={userCurrency}
        setActiveWidget={setActiveWidget}
        setIsActivePayments={setIsActivePayments}
        setErrorPaymentMethod={setErrorPaymentMethod}
        setErrorDepositValue={setErrorDepositValue}
      />
    </div>
  )
}
