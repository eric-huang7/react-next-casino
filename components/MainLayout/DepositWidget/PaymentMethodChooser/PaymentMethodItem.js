import styles from "../../../../styles/DepostWidget/DepositWidgetMainContainer.module.scss";
import Image from "next/image";
import {useDispatch} from "react-redux";
import {backButtonShouldDo, showDepositModal, showPaymentCurrencySwitcher} from "../../../../redux/actions/showPopups";
import {setErrorUserPaymentMethod, setUserPaymentMethod} from "../../../../redux/actions/setUserPaymentMethod";


export const PaymentMethodItem = ({t, userCurrency, setErrorPaymentMethod, paymentMethodChooser, type, method}) => {
  const dispatch = useDispatch();

  const fiatClickHandler = () => {

    let chosenMethod = method[3].filter((method) => {
      if (method.currency_from.currency === userCurrency.userCurrencyData.abbreviation && method.currency_to.currency === userCurrency.userCurrencyData.abbreviation) {
        return true;
      } else {
        return false;
      }
    })
    if (chosenMethod[0]) {
      dispatch(setUserPaymentMethod({
        methodData: chosenMethod[0],
        paymentImg: '/assets/img/depositPage/visa-2.svg',
        paymentSecImg: '/assets/img/depositPage/master-card.svg',
        paymentType: 'creditCard',
      }))
    } else {
      dispatch(setUserPaymentMethod({
        methodData: null,
        paymentImg: '/assets/img/depositPage/visa-2.svg',
        paymentSecImg: '/assets/img/depositPage/master-card.svg',
        paymentType: 'creditCard',
      }))
    }
    setErrorPaymentMethod('');
    paymentMethodChooser();
    // dispatch(setErrorUserPaymentMethod(''));
  }

  const cryptoClickHandler = () => {
    let paymentMethods = [];
    if (userCurrency.userCurrencyData.type === 3) {
      method[1].forEach((methodItem) => paymentMethods.push(methodItem));

      method[2].forEach((methodItem) => {
        if (method[1].length > 0) {
          let universalItem = universalizer(method[1], methodItem);
          if (universalItem) {
            paymentMethods.push(methodItem);
          } else {
            return methodItem;
          }
        } else {
          paymentMethods.push(methodItem);
        }
      });

    } else {
      method[3].forEach((methodItem) => paymentMethods.push(methodItem));

      method[1].forEach((methodItem) => paymentMethods.push(methodItem));

      method[2].forEach((methodItem) => {
        if (method[1].length > 0) {
          let universalItem = universalizer(method[1], methodItem);
          if (universalItem) {
            paymentMethods.push(methodItem);
          } else {
            return methodItem;
          }
        } else {
          paymentMethods.push(methodItem);
        }

      });
    }

    dispatch(setUserPaymentMethod({
      methodData: paymentMethods,
      paymentImg: '/assets/img/depositPage/visa-2.svg',
      paymentSecImg: '',
      paymentType: 'cryptoArr',
    }))
    dispatch(showPaymentCurrencySwitcher(true));
    paymentMethodChooser();
    // dispatch(showDepositModal(false));
    // dispatch(backButtonShouldDo(hidePaymentCurrencyShowDepositModal));
  }

  if (type === 'card') {
    return (
      <li onClick={() => fiatClickHandler()} className={styles.paymentMethodItem}>
        <p>{t('depositWidget.card')}</p>
        <div className={styles.paymentCardIconBlock}>
          <Image layout={'fixed'} width={60} height={25} alt={'visa/mastercard payment'} src={'/assets/img/depositWidget/cards.png'}/>
        </div>
      </li>
    )
  } else {
    return (
      <li onClick={() => cryptoClickHandler()} className={styles.paymentMethodItem}>
        <p>{t('depositWidget.cryptoPayment')}</p>
        <div className={styles.paymentCardIconBlock}>
          <Image layout={'fixed'} width={20} height={20} alt={"bitcoin payment"} src={'/assets/img/depositPage/payments/crypto.png'}/>
        </div>
      </li>
    )
  }


}


function universalizer (arrVerify, checkItem) {
  let sameItem = arrVerify.find((methodOne) => {
    if (methodOne.currency_from.currency === checkItem.currency_from.currency) {
      return true
    } else {
      return false
    }
  })
  if (!sameItem) {
    return true;
  } else {
    return false;
  }
}