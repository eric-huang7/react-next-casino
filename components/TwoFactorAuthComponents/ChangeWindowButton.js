import styles from "../../styles/TwoFaAuth/TwoFaAuth.module.scss";


export const ChangeWindowButton = ({t, text, changeWindowAction}) => {

  return (
    <div
      className={styles.changeWindowButtonContainer}
      onClick={() => changeWindowAction()}
    >
      <button>
        {text}
      </button>
    </div>
  )
}