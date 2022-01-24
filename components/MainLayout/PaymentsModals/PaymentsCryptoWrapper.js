import styles from '../../../styles/PaymentsModals/PaymentsCrypto.module.scss';
import {PaymentHeading} from "./CreditCardComponents/Heading";
import {TextBlock} from "./CryptoComponents/TextBlock";
import {QRContainer} from "./CryptoComponents/QRContainer";
import {ValueContainer} from "./CryptoComponents/ValueContainer";
import {DepositAddressInput} from "./CryptoComponents/DepositAddressInput";
import {useDispatch, useSelector} from "react-redux";
import {setStepDepositModal, showCryptoModal} from "../../../redux/actions/showPopups";
import {annulDeposit} from "../../../redux/actions/depositPayments";
import useWindowScroll from "../../../hooks/useWindowScroll";
import {LoadingComponent} from "../../LoadingComponent/LoadingComponent";
import {setUserPaymentMethod} from "../../../redux/actions/setUserPaymentMethod";
import {useEffect} from "react";


export const PaymentsCryptoWrapper = ({t, paymentsData, isShow}) => {
  useEffect(() => {
    let timer = setTimeout(() => {
      if (isShow) {
        document.body.style.overflowY = "hidden"
      } else {
        document.body.style.overflowY = "auto"
      }
    }, 1);


    return () => {
      document.body.style.overflowY = "auto"
      clearTimeout(timer);
    }
  }, [])

  let scrollHeight = useWindowScroll();
  const userCurrency = useSelector((state) => state.userSelectedCurrency);
  const userDepositValue = useSelector((state) => state.userDepositValue.value);
  const currenciesList = useSelector((store) => store.getCurrency);

  const dispatch = useDispatch()
  const closeCrypto = () => {
    dispatch(showCryptoModal(false));
    dispatch(annulDeposit());
    dispatch(setStepDepositModal(1));
    dispatch(setUserPaymentMethod(null));
  }

  return (
    <div className={styles.paymentsMainWrapper}>
      <div className={`${styles.paymentsInnerWrapper} ${scrollHeight > 100 ? styles.marginNull : ''}`}>
        <div className={styles.paymentsMainContainer}>
          <PaymentHeading closeHandler={closeCrypto} t={t} type={'crypto'} />
          {
            paymentsData.isCryptoPaymentDataLoading || currenciesList.loading ?
              <>
                <LoadingComponent t={t} text={"loadingComponent"}/>
              </>
              :
              paymentsData.isCryptoPaymentError ?
                <>
                  <h2 style={{color: "#ff0000", textTransform: "uppercase"}}>{t("cryptoPayment.error")}</h2>
                  <p style={{color: "#ff0000"}}>{paymentsData.isCryptoPaymentError.data.extra_error_info.message}</p>
                </>
                :
              <>
                <TextBlock
                  t={t}
                  value={userDepositValue}
                  paymentsData={paymentsData.cryptoPaymentData}
                  currency={userCurrency}
                  currenciesList={currenciesList}
                />
                <QRContainer
                  qrData={paymentsData.cryptoPaymentData.data.address}
                />
                <ValueContainer
                  value={userDepositValue}
                  paymentsData={paymentsData.cryptoPaymentData}
                  currency={userCurrency}
                  currenciesList={currenciesList}
                />
                <DepositAddressInput
                  t={t}
                  addressData={paymentsData.cryptoPaymentData.data.address}
                  memoData={paymentsData.cryptoPaymentData.data.memo}
                />
              </>
          }
        </div>
      </div>
    </div>
  )
}