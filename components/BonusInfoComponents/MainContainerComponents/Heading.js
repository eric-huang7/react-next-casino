import styles from "../../../styles/BonusInfoComponent/BonusInfoComponent.module.scss";


export const Heading = () => {


  return (
    <div className={styles.heading}>
      <h4>{'Bonus info'}</h4>
      <button
        className={styles.closeButton}
      >
        <span className={styles.closeOne}></span>
        <span className={styles.closeTwo}></span>
      </button>
    </div>
  )
}