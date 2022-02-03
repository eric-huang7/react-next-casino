import styles from "../../styles/TwoFaAuth/TwoFaAuth.module.scss";


export const Heading = ({t, text, closeHandler}) => {



  return (
    <div className={styles.heading}>
      <h3>
        {text}
      </h3>
      <button onClick={() => closeHandler()} className={styles.closeButton}>
        <span className={styles.closeOne}></span>
        <span className={styles.closeTwo}></span>
      </button>
    </div>
  )
}