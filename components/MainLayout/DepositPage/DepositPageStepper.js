import styles from "../../../styles/DepositPage/DepositPage.module.scss";
import {DepositHeading} from "./DepositHeading";
import {DepositInputsContainer} from "./DepositInputs/DepositInputsContainer";
import {BonusesBlockMainContainer} from "./BonusesBlock/BonusesBlockMainContainer";
import {DepositImages} from "./DepositPaymentsImages";
import {BonusCodeActivator} from "./BonusCodeActivator";
import {DepositButtonSubmit} from "./DepositButtonSubmit";
import {ChoosePaymentMethod} from "./ChoosePaymentMethod/ChoosePaymentMethod";
import {DepositLastPage} from "./DepositLastPage/DepositLastPage";

export const DepositPageStepper = (props) => {
let {
  currencyData,
  step,
  t,
  closeDepositModalHandler,
  userCurrency,
  currencySwitcherShowHandler,
  isChecked,
  checkedInputHandler,
  isActiveBonusInput,
  bonusCodeInputActiveHandler,
  submitHandler,
  stepHandler,
  depositValueInputHandler,
  userDepositValue,
  userDepositValueError,
  userPayment,
  userInfo,
  showAllBonuses,
  showAllBonusesHandler,
  chosenBonus,
  chooseBonusClickHandler,
  setDepositButtonText,
  buttonText,
  userSelectedBonus,
  userLogin,
  activeBonuses,
  isShowDepositModal,
  bonusesArr,
  paymentMethods,
  setPaymentMethods
} = props;


  switch (step) {
    case  1:
      return (
        <>
          <div className={styles.depositInnerBlockWrapper}>
            <DepositHeading
              t={t}
              closeDepositModalHandler={closeDepositModalHandler}
            />
            <DepositInputsContainer
              userCurrency={userCurrency}
              t={t}
              userDepositValue={userDepositValue}
              depositValueInputHandler={depositValueInputHandler}
              currencySwitcherShowHandler={currencySwitcherShowHandler}
              userDepositValueError={userDepositValueError}
            />
            <div className={styles.divider}></div>
            <BonusesBlockMainContainer
              t={t}
              isChecked={isChecked}
              checkedInputHandler={checkedInputHandler}
              isActiveBonusInput={isActiveBonusInput}
              userCurrency={userCurrency}
              showAllBonuses={showAllBonuses}
              showAllBonusesHandler={showAllBonusesHandler}
              chosenBonus={chosenBonus}
              chooseBonusClickHandler={chooseBonusClickHandler}
              setDepositButtonText={setDepositButtonText}
              userDepositValue={userDepositValue}
              userSelectedBonus={userSelectedBonus}
              userLogin={userLogin}
              activeBonuses={activeBonuses}
              isShowDepositModal={isShowDepositModal}
              bonusesArr={bonusesArr}
            />
            <DepositImages/>
            <BonusCodeActivator
              t={t}
              isActiveBonusInput={isActiveBonusInput}
              bonusCodeInputActiveHandler={bonusCodeInputActiveHandler}
            />
          </div>
          <DepositButtonSubmit
            userPayment={userPayment}
            userDepositValue={userDepositValue}
            stepHandler={stepHandler}
            step={step}
            t={t}
            buttonText={buttonText}
            userCurrency={userCurrency}
            userInfo={userInfo}
            currencyData={currencyData}
          />
        </>
      )
    case 2:
      return (
        <>
          <div className={styles.depositInnerBlockWrapper}>
            <DepositHeading
              t={t}
              closeDepositModalHandler={closeDepositModalHandler}
            />
            <DepositInputsContainer
              userCurrency={userCurrency}
              t={t}
              userDepositValue={userDepositValue}
              depositValueInputHandler={depositValueInputHandler}
              currencySwitcherShowHandler={currencySwitcherShowHandler}
              userDepositValueError={userDepositValueError}
            />
            <BonusesBlockMainContainer
              t={t}
              isChecked={isChecked}
              checkedInputHandler={checkedInputHandler}
              isActiveBonusInput={isActiveBonusInput}
              userCurrency={userCurrency}
              showAllBonuses={showAllBonuses}
              showAllBonusesHandler={showAllBonusesHandler}
              chosenBonus={chosenBonus}
              chooseBonusClickHandler={chooseBonusClickHandler}
              setDepositButtonText={setDepositButtonText}
              userDepositValue={userDepositValue}
              userSelectedBonus={userSelectedBonus}
              userLogin={userLogin}
              activeBonuses={activeBonuses}
              isShowDepositModal={isShowDepositModal}
              bonusesArr={bonusesArr}
            />
            <ChoosePaymentMethod
              t={t}
              userPayment={userPayment}
              paymentMethods={paymentMethods}
              userCurrency={userCurrency}
              isShowDepositModal={isShowDepositModal}
              setPaymentMethods={setPaymentMethods}
            />
            <BonusCodeActivator
              t={t}
              isActiveBonusInput={isActiveBonusInput}
              bonusCodeInputActiveHandler={bonusCodeInputActiveHandler}
            />
          </div>
          <DepositButtonSubmit
            userPayment={userPayment}
            userDepositValue={userDepositValue}
            stepHandler={stepHandler}
            step={step}
            t={t}
            buttonText={buttonText}
            userCurrency={userCurrency}
            userInfo={userInfo}
            currencyData={currencyData}
          />
        </>
      )
    case 3:
      return (
        <>
          <div className={styles.depositInnerBlockWrapper}>
            <DepositHeading
              t={t}
              closeDepositModalHandler={closeDepositModalHandler}
            />
            <DepositLastPage
              t={t}
              userDepositValue={userDepositValue}
              depositValueInputHandler={depositValueInputHandler}
              userDepositValueError={userDepositValueError}
              userInfo={userInfo}
              userCurrency={userCurrency}
            />
          </div>
          <DepositButtonSubmit
            userPayment={userPayment}
            userDepositValue={userDepositValue}
            submitHandler={submitHandler}
            stepHandler={stepHandler}
            step={step}
            t={t}
            buttonText={"Submit"}
            userCurrency={userCurrency}
            userInfo={userInfo}
            currencyData={currencyData}
          />
        </>
      )
  }
}