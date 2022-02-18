import styles from "../../../../styles/CurrencySelector/CurrencySelector.module.scss";
import {useEffect} from "react";
// import {useSelector} from "react-redux";


export const PaymentCurrencyItem = ({paymentMethod, chosePaymentClickHandler}) => {
  // const currencyData = useSelector((store) => store.getCurrency.currency.results);


  useEffect(() => {
    // paymentMethod.currency_from.currency
    // let currencyForPayment = paymentMethod;
    // console.log(currencyData, 'currencyData.getCurrency.currency.results')

    function svgSetter () {

      let svg = document.getElementById("currencyIframe");
      let container = document.getElementById(`currencyItemContainer${paymentMethod.currency_from.currency}`);
      if (svg) {
        let currencyIcon = svg.contentWindow.window.document.getElementById(paymentMethod.currency_from.currency.toLowerCase())

        if (currencyIcon) {
          container.innerHTML = currencyIcon.outerHTML;
        } else {
          container.innerHTML = paymentMethod.currency_from.currency;
        }
      } else {
        container.innerHTML = paymentMethod.currency_from.currency;
      }
    }
    svgSetter();
  }, [])




  return (
    <li onClick={() => chosePaymentClickHandler(paymentMethod)} className={`${styles.currencyItem} ${styles.paymentCurrencyItem}`}>
      <div id={`currencyItemContainer${paymentMethod.currency_from.currency}`} className={styles.iconContainer}>

      </div>
      <div  className={styles.currencyInfoContainer}>
        <div className={styles.currencyAbbrBaseWrapper}>
          <span className={styles.abbreviation}>{paymentMethod.currency_from.currency}</span>
        </div>
      </div>
    </li>
  )
}