import { useDispatch, useSelector } from 'react-redux'
import {
  backButtonShouldDo,
  setStepDepositModal,
  showMobileCryptoPayments,
} from '../../redux/popups/action'
import {setCurrencySelectorType} from '../../redux/userFinance/action'
import { PaymentCurrencySelector } from './CurrencySelector/PaymentCurrencySelector'
import { setUserPaymentMethod } from '../../redux/userFinance/action'
import ErrorText from '../ErrorBoundaryComponents/ErrorText'
import {SelectModal} from "../modal/SelectModal";
import {LoadingComponent} from "../LoadingComponent/LoadingComponent";
import {useEffect, useRef, useState} from "react";
import {useTranslation} from "next-i18next";

const PaymentSelectCurrencyModal = ({ isOpen, onClose, onBack, isShowMobileCryptoPayments }) => {
  const {t} = useTranslation("common")
  const [height, setHeight] = useState(0)
  const wrapperRef = useRef();
  const isLoading = false;

  const dispatch = useDispatch()

  const backButtonShouldDoState = useSelector((state) => state.popups.actionForBackButton)
  const currencies = useSelector((store) => store.currency)
  const userAuth = useSelector((store) => store.authInfo)
  const userPayment = useSelector((state) => state.userFinance)
  const userDepositValue = useSelector((state) => state.userFinance?.depositValue)
  const userCurrency = useSelector((state) => state.userFinance)

  const handleClose = () => {
    if (isOpen) {
      dispatch(setUserPaymentMethod(null))
      onClose()
      dispatch(showMobileCryptoPayments(false))
    }
    dispatch(setStepDepositModal(1))
    dispatch(setCurrencySelectorType(true))
    if (backButtonShouldDoState !== null) {
      dispatch(backButtonShouldDo(false))
    }
  }

  const backHandler = () => {
    if (backButtonShouldDoState !== false) {
      backButtonShouldDoState()
      dispatch(backButtonShouldDo(false))
    } else {
      if (isOpen) {
        onClose()
      } else {
        onClose()
      }
    }
    dispatch(showMobileCryptoPayments(false))
    dispatch(setCurrencySelectorType(true))
  }

  useEffect(() => {
    if (wrapperRef?.current?.offsetHeight > 0) {
      setHeight(wrapperRef?.current?.offsetHeight)
    }
  }, [wrapperRef?.current?.offsetHeight, height])

  return (<SelectModal
    isOpen={isOpen}
    onClose={handleClose}
    onBack={backHandler}
    wrapperRef={wrapperRef}
    title={t('selectCurrency.heading')}
  >
    <ErrorText>
      {isLoading || !height
        ? <LoadingComponent t={t}/>
        : <PaymentCurrencySelector
              t={t}
              userPayment={userPayment}
              backButtonClickHandler={backHandler}
              isShowMobileCryptoPayments={isShowMobileCryptoPayments}
              currencyData={currencies.currency}
              userDepositValue={userDepositValue}
              userInfo={userAuth.user}
              userCurrency={userCurrency}
              parentHeight={height}
            />
      }
    </ErrorText>
  </SelectModal>)

}

export default PaymentSelectCurrencyModal;
