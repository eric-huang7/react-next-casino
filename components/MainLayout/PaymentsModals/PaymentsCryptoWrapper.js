import styles from '../../../styles/PaymentsModals/PaymentsCrypto.module.scss';
import {PaymentHeading} from "./CreditCardComponents/Heading";
import {TextBlock} from "./CryptoComponents/TextBlock";
import {QRContainer} from "./CryptoComponents/QRContainer";
import {ValueContainer} from "./CryptoComponents/ValueContainer";
import {DepositAddressInput} from "./CryptoComponents/DepositAddressInput";
import {useDispatch, useSelector} from "react-redux";
import {showCryptoModal} from "../../../redux/actions/showPopups";
import {annulDeposit} from "../../../redux/actions/depositPayments";
import useWindowScroll from "../../../hooks/useWindowScroll";
import {LoadingComponent} from "../../LoadingComponent/LoadingComponent";


export const PaymentsCryptoWrapper = ({t, paymentsData}) => {
  let scrollHeight = useWindowScroll();
  const userCurrency = useSelector((state) => state.userSelectedCurrency);
  const userDepositValue = useSelector((state) => state.userDepositValue.value);
  const dispatch = useDispatch()
  const closeCrypto = () => {
    dispatch(showCryptoModal(false));
    dispatch(annulDeposit());
  }
  console.log(paymentsData, 'chosen data payment####################');
  return (
    <div className={styles.paymentsMainWrapper}>
      <div className={`${styles.paymentsInnerWrapper} ${scrollHeight > 100 ? styles.marginNull : ''}`}>
        <div className={styles.paymentsMainContainer}>
          <PaymentHeading closeHandler={closeCrypto} t={t} type={'crypto'} />
          {
            paymentsData.isCryptoPaymentDataLoading ?
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
                  currency={userCurrency.userCurrencyData.abbreviation}
                />
                <QRContainer
                  qrData={paymentsData.cryptoPaymentData.data.address}
                />
                <ValueContainer
                  value={userDepositValue}
                  paymentsData={paymentsData.cryptoPaymentData}
                  currency={userCurrency.userCurrencyData.abbreviation}
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