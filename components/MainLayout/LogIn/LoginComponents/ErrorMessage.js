import styles from "../../../../styles/LogIn.module.scss";

export const ErrorMessage = ({errorMessage}) => (
  <span className={styles.errorMessage}>
    {errorMessage ? errorMessage : ''}
  </span>
)
