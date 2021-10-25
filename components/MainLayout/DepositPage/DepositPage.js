import styles from '../../../styles/DepositPage/DepositPage.module.scss'
import {Header} from "../Header/Header";
import {DepositInputCount} from "./DepositInputs/DepositInputCount";
import {BonusesBlock} from "./BonusesBlock/BonusesBlock";
import {BonusesBlockContainer} from "./BonusesBlock/BonusesBlockContainer";
import {DepositImages} from "./DepositPaymentsImages";
import {useSelector} from "react-redux";

export const DepositPage = ({t}) => {

  const userCurrency = useSelector((state) => state.userSelectedCurrency);

  console.log()

  return (
    <div className={styles.depositPageWrapper}>
      <Header />
      <div className={styles.depositsMainBlock}>
        <h2>DEPOSIT $ 100 AND GET $ 200</h2>
        <div className={styles.depositInnerBlockWrapper}>
          <div className={styles.depositHeadingBlock}>
            <h3>
              DEPOSIT AMOUNT
            </h3>
            <div className={styles.depositPageCloseButton}>
              <span className={styles.closeOne}></span>
              <span className={styles.closeTwo}></span>
            </div>
          </div>
          <div className={styles.depositInputsBlock}>
            <div className={styles.depositInputCurrencyBlock}>
              <DepositInputCount />
              <div className={styles.depositCurrencyButton}>
                USD
              </div>
            </div>
          </div>
          <div className={styles.depositsBonusesBlock}>
            <p className={styles.selectBonus}>SELECT YOUR BONUS</p>
            <div className={styles.bonusesInformationBlock}>
              <BonusesBlockContainer t={t} bonusData={bonusData}/>
            </div>
            <div className={styles.bonusesSwitcher}>

            </div>
          </div>
          <div className={styles.depositPayments}>
            <DepositImages />
          </div>
          <div className={`${styles.depositsIhaveBonusCodeBlock} ${activeBonus ? styles.showDepositsBonusInput : ''}`}>
            <p>{'I have a bonus code'}</p>
            <input
              className={styles.depositsBonusInput}
              id={'depositsBonusIn'}
              type="text"
              placeholder={'Enter your bonus code'}/>
          </div>
        </div>
        <div className={styles.depositsButton}>
          <p>PLAY WITH $100 PLUS 200 FREE SPINS</p>
        </div>
      </div>
    </div>
  )
}