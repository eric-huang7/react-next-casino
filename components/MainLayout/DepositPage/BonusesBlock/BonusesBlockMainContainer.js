import styles from '../../../../styles/DepositPage/DepositPage.module.scss';
import {BonusesBlockContainer} from "./BonusesBlockContainer";

export const BonusesBlockMainContainer = ({t, isChecked, checkedInputHandler, isActiveBonusInput, userCurrency, showAllBonuses, showAllBonusesHandler, chosenBonus,
                                            chooseBonusClickHandler, setDepositButtonText, userDepositValue, userSelectedBonus}) => {

  return (
    <div className={styles.depositsBonusesBlock}>
      <p className={styles.selectBonus}>{t("depositPage.bonusBlockHeading")}</p>
      <div onClick={() => showAllBonusesHandler()} className={`${styles.bonusesInformationBlock} ${showAllBonuses ? styles.showAllBonuses : styles.hideBonuses}`}>
        <BonusesBlockContainer showAllBonuses={showAllBonuses} userCurrency={userCurrency} t={t} isUseBonus={isChecked} bonusData={'bonusData'} chosenBonus={chosenBonus}
                               chooseBonusClickHandler={chooseBonusClickHandler} setDepositButtonText={setDepositButtonText} userDepositValue={userDepositValue} userSelectedBonus={userSelectedBonus}/>
      </div>
      <div className={styles.bonusesSwitcher}>
        <label className={styles.switch}>
          <input onChange={(e) => checkedInputHandler(e)} className={styles.bonusSwitcherInput} type="checkbox" checked={isChecked} />
          <span className={`${styles.slider} ${styles.round}`}>
                </span>
        </label>
      </div>
      <div  className={`${styles.bonusCodeInputWrapper} ${isActiveBonusInput ? styles.showDepositsBonusInput : ''}`}>
        <input
          className={styles.depositsBonusInput}
          id={'depositsBonusIn'}
          type="text"
          placeholder={t("depositPage.bonusBlockInput")}/>
      </div>
    </div>
  )
}