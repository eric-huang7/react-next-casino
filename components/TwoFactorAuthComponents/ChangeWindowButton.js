import styles from "../../styles/TwoFaAuth/TwoFaAuth.module.scss";


export const ChangeWindowButton = ({t, text, changeWindowAction}) => {

  return (
    <div
      className={styles.changeWindowButtonContainer}

    >
      <button onClick={() => changeWindowAction()}>
        {t(text)}
      </button>
    </div>
  )
}