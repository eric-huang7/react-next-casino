import styles from "../../../../../../styles/MyAccount/CashoutPage/CashoutPage.module.scss";


export const ImageContainer = ({t}) => {


  return (
    <div  className={`${styles.methodImageContainer} ${styles.creditCardImageContainer}`}>
      <img src="/assets/img/myAccount/cashoutPage/Visa.png" alt="method visa"/>
      <img src="/assets/img/myAccount/cashoutPage/MasterCard.png" alt="method mastercard"/>
      <img src="/assets/img/myAccount/cashoutPage/Maestro.png" alt="method maestro"/>
    </div>
  )
}