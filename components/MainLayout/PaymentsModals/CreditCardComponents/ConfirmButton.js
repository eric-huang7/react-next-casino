import styles from "../../../../styles/PaymentsModals/CreditCardPayment.module.scss";

export const ConfirmButton = ({t, confirmButtonClickHandler}) => (
  <button onClick={confirmButtonClickHandler} className={styles.confirmButton}>
    {t("creditCardPayment.confirmButton")}
  </button>
)
