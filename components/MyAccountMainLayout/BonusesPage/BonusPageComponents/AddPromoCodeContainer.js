import styles from "../../../../styles/MyAccount/BonusPage/BonusPage.module.scss";


export const AddPromoCodeContainer = ({t, isCenter}) => {


  return (
    <div className={`${styles.addPromoCodeContainer} ${isCenter ? "" : styles.positionLeft}`}>
      <p className={styles.addPromoMainHeading}>{t("myAccount.bonusPage.addPromoCode.heading")}</p>
      <p className={styles.addPromoText}>{t("myAccount.bonusPage.addPromoCode.addText")}</p>
      <div className={styles.addPromoInputWrapper}>
        <input type="text" className={styles.promoCodeInput}/>
        <button className={styles.savePromoButton}>{t("myAccount.bonusPage.addPromoCode.saveButton")}</button>
      </div>
    </div>
  )
}