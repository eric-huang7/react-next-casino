import styles from '../../../styles/PaymentsModals/PaymentsCrypto.module.scss';
import {PaymentHeading} from "./CreditCardComponents/Heading";
import {TextBlock} from "./CryptoComponents/TextBlock";
import {QRContainer} from "./CryptoComponents/QRContainer";
import {ValueContainer} from "./CryptoComponents/ValueContainer";
import {DepositAddressInput} from "./CryptoComponents/DepositAddressInput";
import {useDispatch} from "react-redux";
import {showCryptoModal} from "../../../redux/actions/showPopups";


export const PaymentsCryptoWrapper = ({t}) => {
  const dispatch = useDispatch()
  const closeCrypto = () => {
    dispatch(showCryptoModal(false));
  }

  return (
    <div className={styles.paymentsMainWrapper}>
      <div className={styles.paymentsInnerWrapper}>
        <div className={styles.paymentsMainContainer}>
          <PaymentHeading closeHandler={closeCrypto} t={t} type={'crypto'}/>
          <TextBlock t={t} value={0.203222455} currency={'BTC'}/>
          <QRContainer qrData={'4MHwwec8rfklj5oXSguWUk3OPGTRjw'} />
          <ValueContainer value={0.203222455} currency={'BTC'}/>
          <DepositAddressInput t={t} addressData={'4MHwwec8rfklj5oXSguWUk3OPGTRjw'} memoData={'teg-3348754'}/>
        </div>
      </div>
    </div>
  )
}