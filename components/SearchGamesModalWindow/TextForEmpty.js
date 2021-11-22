import styles from "../../styles/SearchModalWindow/SearchModalWindow.module.scss";

export const TextForEmpty = ({t, text}) => {

  return (
    <h2 className={styles.textForEmpty}>{t(text)}</h2>
  )
}