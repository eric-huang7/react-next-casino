import styles from '../../../../styles/MyAccount/CashoutPage/CashoutPage.module.scss';



export const SecontHeading = ({t}) => {


  return (
    <div className={styles.secondHeadingContainer}>
      <h3>{t("myAccount.cashoutPage.secondHeading")}</h3>
    </div>
  )
}