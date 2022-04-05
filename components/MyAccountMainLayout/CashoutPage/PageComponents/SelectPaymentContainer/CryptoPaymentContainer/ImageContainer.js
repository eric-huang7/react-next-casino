import styles from "../../../../../../styles/MyAccount/CashoutPage/CashoutPage.module.scss";
import {useEffect} from "react";
import {svgSetterById} from "../../../../../../helpers/iconNameFinder";


export const ImageContainer = ({t, typeOfCurrency}) => {

  useEffect(() => {
      svgSetterById(typeOfCurrency, `currencyIcon${typeOfCurrency.id}`,true);
  }, [typeOfCurrency])

  return (
    <>
      <div id={`currencyIcon${typeOfCurrency.id}`} className={styles.methodImageContainer}></div>
      <span className={styles.coinName}>
        {typeOfCurrency.name}
      </span>
    </>

  )
}
