import styles from "../../../styles/ExitIntentComponent/BonusesContainer/BonusesContainer.module.scss";


export const BonusSubmitButton = ({submitBonusHandler, userData}) => {


  return (
    <button onClick={() => submitBonusHandler()} className={styles.submitBonusButton}>{userData ? "Claim Now" : "Sign Up"}</button>
  )
}