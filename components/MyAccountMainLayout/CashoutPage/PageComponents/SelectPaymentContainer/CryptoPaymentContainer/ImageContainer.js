import styles from "../../../../../../styles/MyAccount/CashoutPage/CashoutPage.module.scss";


export const ImageContainer = ({t, typeOfCurrency}) => {


  return (
    <div  className={styles.methodImageContainer}>
      <img src={`/assets/img/myAccount/cashoutPage/${typeOfCurrency}.png`} alt="coin icon"/>
    </div>
  )
}