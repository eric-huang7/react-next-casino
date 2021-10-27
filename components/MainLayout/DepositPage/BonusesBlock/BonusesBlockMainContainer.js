import styles from '../../../../styles/DepositPage/DepositPage.module.scss';
import {BonusesBlockContainer} from "./BonusesBlockContainer";

export const BonusesBlockMainContainer = ({t, isChecked, checkedInputHandler, isActiveBonusInput}) => {

  return (
    <div className={styles.depositsBonusesBlock}>
      <p className={styles.selectBonus}>SELECT YOUR BONUS</p>
      <div className={styles.bonusesInformationBlock}>
        <BonusesBlockContainer t={t} isUseBonus={isChecked} bonusData={'bonusData'}/>
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
          placeholder={'Enter your bonus code'}/>
      </div>
    </div>
  )
}