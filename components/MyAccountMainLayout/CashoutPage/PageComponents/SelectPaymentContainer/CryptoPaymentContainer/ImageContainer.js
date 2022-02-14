import styles from "../../../../../../styles/MyAccount/CashoutPage/CashoutPage.module.scss";
import {useEffect} from "react";


export const ImageContainer = ({t, typeOfCurrency}) => {
  useEffect(() => {
    function svgSetter() {
      let svg = document.getElementById("currencyIframe");
      let container = document.getElementById(`currencyImageContainer${typeOfCurrency}`);
      if (svg) {
        let currencyIcon = svg.contentWindow.window.document.getElementById(typeOfCurrency.toLowerCase())
        if (currencyIcon) {
          container.innerHTML = currencyIcon.outerHTML;
        } else {
          container.innerHTML = typeOfCurrency;
        }
      } else {
        container.innerHTML = typeOfCurrency;
      }
    }

    svgSetter();

  }, [typeOfCurrency])

  return (
    <div id={`currencyImageContainer${typeOfCurrency}`} className={styles.methodImageContainer}>

    </div>
  )
}