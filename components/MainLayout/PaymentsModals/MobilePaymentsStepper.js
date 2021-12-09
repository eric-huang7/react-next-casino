import styles from '../../../styles/PaymentsModals/MobilePaymentsStepper.module.scss';
import {PaymentHeading} from "./CreditCardComponents/Heading";
import {StepOneEnterAmount} from "./MobilePaymentsStepperComponents/StepOneEnterAmount";
import {StepTwoPaymentMethod} from "./MobilePaymentsStepperComponents/StepTwoPaymentMethod";
import {useDispatch, useSelector} from "react-redux";
import {setUserDepositValue} from "../../../redux/actions/setUserDepositValue";
import {useState} from "react";
import {
  backButtonShouldDo,
  showCreditCardModal,
  showCryptoModal,
  showCurrencySwitcher,
  showMobilePaymentsStepper
} from "../../../redux/actions/showPopups";
import {siteID} from "../../../envs/envsForFetching";
import {annulDeposit, postCryptoPayment} from "../../../redux/actions/depositPayments";
import {showRegister} from "../../../redux/actions/registerShow";
import useWindowScroll from "../../../hooks/useWindowScroll";


export const MobilePaymentsStepper = ({t, paymentsData, userAuth}) => {
  const [pageStep, setPageStep] = useState(1);
  let scrollHeight = useWindowScroll();

  const dispatch = useDispatch();
  const userCurrency = useSelector((state) => state.userSelectedCurrency);
  const userDepositValue = useSelector((state) => state.userDepositValue.value);

  const currencySwitcherShowHandler = () => {
    dispatch(showCurrencySwitcher(true));
  }

  const [errorInputValue, setErrorInputValue] = useState();
  const valueInputHandler = (e) => {
    if (e.target.value > 9999999999) {
      e.target.value = userDepositValue;
      return false;
    } else if (!Number(e.target.value)) {
      setErrorInputValue('Enter deposit amount');
      dispatch(setUserDepositValue(0));
    } else {
      setErrorInputValue('');
      dispatch(setUserDepositValue(Number(e.target.value)));
    }
  }
  const openPaymentMethods = () => {
    dispatch(showMobilePaymentsStepper(true));
    setPageStep(2);

  }


  const openWindow = (type, method = null) => {
    if (!userAuth.isAuthenticated) {
      dispatch(showRegister(true));
    } else if (type === 'crypto') {
      let paymentData = {
        senderCurrency_id: userCurrency.currencyId,
        user_id: `${userAuth.user.user.id}`,
        site_id: siteID,
        award_amount: `${userDepositValue}`,
        receiverCurrency_id: userCurrency.currencyId
      }
      dispatch(postCryptoPayment(paymentData, null));
      dispatch(showCryptoModal(true));
      dispatch(showMobilePaymentsStepper(false));
    } else if (type === 'crypto chosen type') {
      let paymentData = {
        senderCurrency_id: method.currency_id,
        user_id: `${userAuth.user.user.id}`,
        site_id: siteID,
        award_amount: `${userDepositValue}`,
        receiverCurrency_id: userCurrency.currencyId
      }
      dispatch(postCryptoPayment(paymentData, method));
      dispatch(showCryptoModal(true));
      dispatch(showMobilePaymentsStepper(false));
    } else if (type === 'card') {
      dispatch(showCreditCardModal(true));
      dispatch(showMobilePaymentsStepper(false));
    }
  }

  const whatShouldDoPlayWith = () => {
    if (userCurrency.type === 3) {
      if (errorInputValue) {
        return
      } else {
        setPageStep(2);
      }
    } else {
      openWindow('crypto')
    }
  }

  const whatShouldDoBackButton = () => {
    setPageStep(1);
  }


  const closeMobilePayments = () => {
    dispatch(showMobilePaymentsStepper(false));
    dispatch(annulDeposit());
  }
  const methodClickHandler = (method) => {
    if (method.type === 'crypto') {
      openWindow('crypto chosen type', method);
    } else {
      openWindow('card');
    }
  }

  return (
    <div className={styles.paymentsStepperWrapper}>
      <div className={`${styles.paymentsInnerWrapper} ${scrollHeight > 100 ? styles.marginNull : ''}`}>
        <div className={styles.paymentsMainContainer}>
          <PaymentHeading
            whatShouldDoBackButton={whatShouldDoBackButton}
            closeHandler={closeMobilePayments}
            t={t} type={'stepper'}
            pageStep={pageStep}
          />
          {
            pageStep === 1 ?
              <StepOneEnterAmount
                userCurrency={userCurrency}
                userDepositValue={userDepositValue}
                t={t}
                valueInputHandler={valueInputHandler}
                errorInputValue={errorInputValue}
                currencySwitcherShowHandler={currencySwitcherShowHandler}
                whatShouldDoPlayWith={whatShouldDoPlayWith}
              />
              :
              <StepTwoPaymentMethod
                methodClickHandler={methodClickHandler}
                t={t}
              />
          }
        </div>
      </div>
    </div>
  )
}