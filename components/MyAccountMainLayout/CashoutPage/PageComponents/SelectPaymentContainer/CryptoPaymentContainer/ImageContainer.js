import styles from "../../../../../../styles/MyAccount/CashoutPage/CashoutPage.module.scss";
import {useEffect} from "react";


export const ImageContainer = ({t, typeOfCurrency}) => {

  useEffect(() => {
    function svgSetter() {
      let svg = document.getElementById("currencyIframe");
      let container = document.getElementById(`currencyImageContainer${typeOfCurrency.id}`);
      if (svg) {
        let currencyIcon = svg.contentWindow.window.document.getElementById(typeOfCurrency.abbreviation.toLowerCase())
        if (currencyIcon) {
          container.innerHTML = currencyIcon.outerHTML;
        } else {
          container.innerHTML = "";
        }
      } else {
        container.innerHTML = "";
      }
    }

      svgSetter();

  }, [typeOfCurrency])

  return (
    <>
      <div id={`currencyImageContainer${typeOfCurrency.id}`} className={styles.methodImageContainer}>

      </div>
      <span className={styles.coinName}>
        {typeOfCurrency.name}
      </span>
    </>

  )
}