import styles from "../../../../../../styles/MyAccount/CashoutPage/CashoutPage.module.scss";
import {useEffect} from "react";
import {svgSetter} from "../../../../../../helpers/iconNameFinder";


export const ImageContainer = ({t, typeOfCurrency}) => {

  useEffect(() => {
      svgSetter(typeOfCurrency);
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