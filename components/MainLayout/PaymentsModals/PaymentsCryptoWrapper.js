import styles from '../../../styles/PaymentsModals/PaymentsCrypto.module.scss';
import {PaymentHeading} from "./CreditCardComponents/Heading";
import {TextBlock} from "./CryptoComponents/TextBlock";
import {QRContainer} from "./CryptoComponents/QRContainer";
import {ValueContainer} from "./CryptoComponents/ValueContainer";
import {DepositAddressInput} from "./CryptoComponents/DepositAddressInput";
import {useDispatch, useSelector} from "react-redux";
import {showCryptoModal} from "../../../redux/actions/showPopups";
import {annulDeposit} from "../../../redux/actions/depositPayments";


export const PaymentsCryptoWrapper = ({t, paymentsData}) => {
  const userCurrency = useSelector((state) => state.userSelectedCurrency);
  const userDepositValue = useSelector((state) => state.userDepositValue.value);
  const dispatch = useDispatch()
  const closeCrypto = () => {
    dispatch(showCryptoModal(false));
    dispatch(annulDeposit());
  }
  return (
    <div className={styles.paymentsMainWrapper}>
      <div className={styles.paymentsInnerWrapper}>
        <div className={styles.paymentsMainContainer}>
          <PaymentHeading closeHandler={closeCrypto} t={t} type={'crypto'}/>
          {
            paymentsData.isCryptoPaymentDataLoading ?
              <><h1>LOADING...</h1></>
              :
              <>
                <TextBlock
                  t={t}
                  value={userDepositValue}
                  paymentsData={paymentsData.cryptoPaymentData}
                  currency={userCurrency.currencyAbbreviation}
                />
                <QRContainer
                  qrData={paymentsData.cryptoPaymentData.data.address}
                />
                <ValueContainer
                  value={userDepositValue}
                  paymentsData={paymentsData.cryptoPaymentData}
                  currency={userCurrency.currencyAbbreviation}
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