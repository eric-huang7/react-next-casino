import styles from '../../../styles/DepositPage/DepositPage.module.scss'
import {Header} from "../Header/Header";
import {DepositInputCount} from "./DepositInputs/DepositInputCount";
import {BonusesBlock} from "./BonusesBlock/BonusesBlock";
import {BonusesBlockContainer} from "./BonusesBlock/BonusesBlockContainer";
import {DepositImages} from "./DepositPaymentsImages";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {showCurrencySwitcher, showDepositModal} from "../../../redux/actions/showPopups";
import {ChoosePaymentMethod} from "./ChoosePaymentMethod/ChoosePaymentMethod";
import {DepositLastPage} from "./DepositLastPage/DepositLastPage";


export const DepositPage = ({t}) => {
  const dispatch = useDispatch();

  const isShowDepositModal = useSelector((state) => state.showPopupsReducer.isShowDepositModal);
  const isShowCurrencyModal = useSelector((state) => state.showPopupsReducer.isShowCurrencySwitcher);
  const userCurrency = useSelector((state) => state.userSelectedCurrency);

  const [activeBonus, setActiveBonus] = useState(false);
  const [isActiveBonusInput, setIsActiveBonusInput] = useState(false);

  console.log(userCurrency, "@@@@@@@")

  const [isChecked, setIsChecked] = useState(true)
  const checkedInputHandler = (e) => {
    if (isChecked) {
      setIsChecked(false);
    } else {
      setIsChecked(true);
    }
    // console.log(e);
  }

  const bonusCodeInputActiveHandler = () => {
    if (isActiveBonusInput) {
      setIsActiveBonusInput(false);
    } else {
      setIsActiveBonusInput(true);
    }
  }

  const currencySwitcherShowHandler = () => {
    console.log(userCurrency, '!!!!')
    dispatch(showCurrencySwitcher(true));
  }

  const closeDepositModalHandler = () => {
    dispatch(showDepositModal(false));
  }

  return (
    <div className={`${styles.depositPageWrapper} ${isShowDepositModal ? "" : styles.hide}`}>
      <Header t={t}/>
      <div className={styles.depositsMainBlock}>
        <h2>DEPOSIT $ 100 AND GET $ 200</h2>
        <div className={styles.depositInnerBlockWrapper}>
          <div className={styles.depositHeadingBlock}>
            <h3>
              DEPOSIT AMOUNT
            </h3>
            <div onClick={() => closeDepositModalHandler()} className={styles.depositPageCloseButton}>
              <span className={styles.closeOne}></span>
              <span className={styles.closeTwo}></span>
            </div>
          </div>
          <div className={styles.depositInputsBlock}>
            {/*<DepositLastPage />*/}
            <div className={styles.depositInputCurrencyBlock}>
              <DepositInputCount currencySymbol={userCurrency.currencySymbol}/>
              <div
                onClick={() => currencySwitcherShowHandler()}
                className={styles.depositCurrencyButton}
              >
                {userCurrency.currencyAbbreviation}
                <div className={styles.depositCurrencyButtonArrow}>
                </div>
              </div>
            </div>
          </div>
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
          <div className={styles.depositPayments}>
            <DepositImages />
            <ChoosePaymentMethod />
          </div>
          <div onClick={() => bonusCodeInputActiveHandler()} className={styles.depositsIhaveBonusCodeBlock}>
            <p>{isActiveBonusInput ? "I don't have a promo code" : 'I have a bonus code'}</p>
          </div>
        </div>
        <div className={styles.depositsButton}>
          <p>PLAY WITH $100 PLUS 200 FREE SPINS</p>
        </div>
      </div>
    </div>
  )
}