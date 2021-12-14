import styles from "../../../../styles/MyAccount/BonusPage/BonusPage.module.scss";


export const AddPromoCodeContainer = ({t, isCenter}) => {


  return (
    <div className={`${styles.addPromoCodeContainer} ${isCenter ? "" : styles.positionLeft}`}>
      <p className={styles.addPromoMainHeading}>Add Promo Code</p>
      <p className={styles.addPromoText}>and receive a bonus</p>
      <div className={styles.addPromoInputWrapper}>
        <input type="text" className={styles.promoCodeInput}/>
        <button className={styles.savePromoButton}>Save</button>
      </div>
    </div>
  )
}