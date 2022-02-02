import styles from "../../styles/TwoFaAuth/TwoFaAuth.module.scss";


export const InstructionsTextContainer = ({t, text}) => {


  return (
    <p className={styles.instructionsText}>
      {text}
    </p>
  )
}