import styles from "../../../styles/BonusInfoComponent/BonusInfoComponent.module.scss";


export const Heading = ({closeButtonClickHandler, t}) => {


  return (
    <div className={styles.heading}>
        <div className={styles.empty}>

        </div>
      <h4>{t('bonusInfoContainer.bonusInfo.heading')}</h4>
      <button
          onClick={(e) => closeButtonClickHandler(e)}
        className={styles.closeButton}
      >
        <span className={styles.closeOne}></span>
        <span className={styles.closeTwo}></span>
      </button>
    </div>
  )
}