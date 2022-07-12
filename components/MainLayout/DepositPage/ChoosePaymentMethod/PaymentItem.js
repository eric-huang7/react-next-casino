import styles from '../../../../styles/DepositPage/DepositPage.module.scss'
import {useDispatch} from 'react-redux'
import {
  backButtonShouldDo,
  showDepositModal,
  showPaymentCurrencySwitcher
} from '../../../../redux/popups/action'
import {setErrorUserPaymentMethod, setUserPaymentMethod} from '../../../../redux/userFinance/action'
import {useEffect, useTransition} from "react";
import {useTranslation} from "next-i18next";
import CurrencyIcon from "../../../currency/CurrencyIcon";

export const PaymentItem = ({onClick, isActive, image, title, currencyData}) => (
  <div className={styles.paymentItemWrapper}>
    <div
      onClick={onClick}
      className={`${styles.paymentItem} ${styles.paymentItemFiat} ${isActive ? styles.active : ''}`}
    >
      {image && <img src={image} alt=""/>}
      {!image && currencyData && <CurrencyIcon id={currencyData?.abbreviation} size={6} mx={2}/>}
    </div>
    <div className={styles.itemTitle}>{title}</div>
  </div>
)

// if (type === 'creditCard') {
//   return (
//     <div className={styles.paymentItemWrapper} >
//       <div
//         onClick={() => fiatClickHandler()}
//         className={`${styles.paymentItem} ${userPayment?.paymentMethodData?.paymentType === 'creditCard' ? styles.active : ''}`}
//       >
//         <img src={'/assets/img/depositPage/card.svg'} alt={`payment method icon master-card`}/>
//       </div>
//       <div className={styles.itemTitle}>{t('myAccount.history.transactions.table.paymentSystem.creditCard')}</div>
//     </div>
//   )
// } else {
//   return (
//     <div className={styles.paymentItemWrapper} >
//       <div
//         onClick={() => cryptoClickHandler()}
//         className={`${styles.paymentItem} ${userPayment?.paymentMethodData?.paymentType === 'crypto' ? styles.active : ''}`}
//       >
//         <img src={'/assets/img/depositPage/payments/crypto.png'} alt={`payment method icon crypto`}/>
//       </div>
//       <div className={styles.itemTitle}>{t('selectCurrency.cryptoCurrencies')}</div>
//     </div>
//   )
// }
