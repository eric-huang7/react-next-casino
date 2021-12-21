import styles from "../../../../styles/MyAccount/BonusPage/BonusPage.module.scss";


export const AddPromoCodeContainer = ({
                                        t,
                                        isCenter,
                                        promoCodeValue,
                                        promoCodeInputHandler,
                                        savePromoCodeClickHandler,
                                        promoErrorValue,
                                        promoDepositText
                                      }) => {


  return (
    <div className={`${styles.addPromoCodeContainer} ${isCenter ? "" : styles.positionLeft}`}>
      <p className={styles.addPromoMainHeading}>{t("myAccount.bonusPage.addPromoCode.heading")}</p>
      <p className={styles.addPromoText}>{t("myAccount.bonusPage.addPromoCode.addText")}</p>
      <form onSubmit={(e) => savePromoCodeClickHandler(e)}>
        <div className={styles.addPromoInputWrapper}>

          <input onChange={(e) => promoCodeInputHandler(e.target.value)} type="text" className={styles.promoCodeInput}
                 value={promoCodeValue}/>
          <button type={"submit"} onClick={(e) => savePromoCodeClickHandler(e)}
                  className={styles.savePromoButton}>{t("myAccount.bonusPage.addPromoCode.saveButton")}</button>
        </div>
      </form>
      <span className={styles.promoDepositText}>{promoDepositText}</span>
      <span className={styles.errorMessage}>{promoErrorValue}</span>
    </div>
  )
}