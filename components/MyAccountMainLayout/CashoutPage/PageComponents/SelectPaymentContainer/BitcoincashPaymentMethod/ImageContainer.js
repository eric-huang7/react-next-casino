import styles from "../../../../../../styles/MyAccount/CashoutPage/CashoutPage.module.scss";


export const ImageContainer = ({t}) => {


  return (
    <div  className={styles.methodImageContainer}>
      <img src="/assets/img/myAccount/cashoutPage/BCH.png" alt="bitcoinCash icon"/>
    </div>
  )
}