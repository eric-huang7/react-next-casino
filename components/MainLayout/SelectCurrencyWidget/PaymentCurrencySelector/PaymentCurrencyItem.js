import styles from "../../../../styles/CurrencySelector/CurrencySelector.module.scss";
import {useEffect} from "react";


export const PaymentCurrencyItem = ({paymentMethod}) => {

  useEffect(() => {
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
    <li onClick={() => console.log(paymentMethod)} className={styles.currencyItem}>
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