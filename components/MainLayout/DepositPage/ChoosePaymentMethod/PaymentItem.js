import styles from '../../../../styles/DepositPage/DepositPage.module.scss'
import { useDispatch } from 'react-redux'
import {
  backButtonShouldDo,
  showDepositModal,
  showPaymentCurrencySwitcher
} from '../../../../redux/popups/action'
import { setErrorUserPaymentMethod, setUserPaymentMethod } from '../../../../redux/userFinance/action'
import {useEffect, useTransition} from "react";
import {useTranslation} from "next-i18next";
import {svgSetterById} from "../../../../helpers/iconNameFinder";

export const PaymentItem = ({ onClick, isActive, image, title, currencyData }) => {
  useEffect(() => {
    if (currencyData) {
      const returnAbbr = false
      svgSetterById(currencyData, `currency${currencyData.id}`, returnAbbr);
    }
  }, [currencyData])

  return (
    <div className={styles.paymentItemWrapper} >
      <div
        onClick={onClick}
        className={`${styles.paymentItem} ${styles.paymentItemFiat} ${isActive ? styles.active : ''}`}
      >
        {image && <img src={image} alt=""/>}
        {currencyData && <div id={`currency${currencyData.id}`} className={styles.iconContainer}></div>}
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
}
