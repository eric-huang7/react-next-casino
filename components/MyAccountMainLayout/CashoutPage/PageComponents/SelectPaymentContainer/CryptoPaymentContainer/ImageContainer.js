import styles from "../../../../../../styles/MyAccount/CashoutPage/CashoutPage.module.scss";
import CurrencyIcon from "../../../../../currency/CurrencyIcon";

export const ImageContainer = ({ typeOfCurrency }) => (
  <>
    <CurrencyIcon id={typeOfCurrency?.abbreviation} size={9} mx={2}/>
    <span className={styles.coinName}>
        {typeOfCurrency.name}
      </span>
  </>
)
