import styles from "../../styles/ExitIntentComponent/ExitInentPopup.module.scss";


export const InnerHeading = ({t, text}) => {


  return (
    <div className={styles.innerHeading}>
      <p>{text}</p>
    </div>
  )
}