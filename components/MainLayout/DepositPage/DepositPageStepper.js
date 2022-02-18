import styles from "../../../styles/DepositPage/DepositPage.module.scss";
import {DepositHeading} from "./DepositHeading";
import {DepositInputsContainer} from "./DepositInputs/DepositInputsContainer";
import {BonusesBlockMainContainer} from "./BonusesBlock/BonusesBlockMainContainer";
import {DepositImages} from "./DepositPaymentsImages";
import {BonusCodeActivator} from "./BonusCodeActivator";
import {DepositButtonSubmit} from "./DepositButtonSubmit";
import {ChoosePaymentMethod} from "./ChoosePaymentMethod/ChoosePaymentMethod";
import {DepositLastPage} from "./DepositLastPage/DepositLastPage";
import ErrorText from "../../ErrorBoundaryComponents/ErrorText";
import ErrorEmpty from "../../ErrorBoundaryComponents/ErrorEmpty";

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
    chooseBonusClickHandler,
    setDepositButtonText,
    buttonText,
    userSelectedBonus,
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
            <ErrorText>
              <DepositInputsContainer
                userCurrency={userCurrency}
                t={t}
                userDepositValue={userDepositValue}
                depositValueInputHandler={depositValueInputHandler}
                currencySwitcherShowHandler={currencySwitcherShowHandler}
                userDepositValueError={userDepositValueError}
              />
            </ErrorText>
            <div className={styles.divider}></div>
            <ErrorText>
              <BonusesBlockMainContainer
                t={t}
                isChecked={isChecked}
                checkedInputHandler={checkedInputHandler}
                isActiveBonusInput={isActiveBonusInput}
                userCurrency={userCurrency}
                showAllBonuses={showAllBonuses}
                showAllBonusesHandler={showAllBonusesHandler}
                chooseBonusClickHandler={chooseBonusClickHandler}
                setDepositButtonText={setDepositButtonText}
                userDepositValue={userDepositValue}
                userSelectedBonus={userSelectedBonus}
                isShowDepositModal={isShowDepositModal}
                bonusesArr={bonusesArr}
              />
            </ErrorText>
            <DepositImages/>
            <BonusCodeActivator
              t={t}
              isActiveBonusInput={isActiveBonusInput}
              bonusCodeInputActiveHandler={bonusCodeInputActiveHandler}
            />
          </div>
          <ErrorEmpty>
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
          </ErrorEmpty>

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
            <ErrorText>
              <DepositInputsContainer
                userCurrency={userCurrency}
                t={t}
                userDepositValue={userDepositValue}
                depositValueInputHandler={depositValueInputHandler}
                currencySwitcherShowHandler={currencySwitcherShowHandler}
                userDepositValueError={userDepositValueError}
              />
            </ErrorText>
            <ErrorText>
              <BonusesBlockMainContainer
                t={t}
                isChecked={isChecked}
                checkedInputHandler={checkedInputHandler}
                isActiveBonusInput={isActiveBonusInput}
                userCurrency={userCurrency}
                showAllBonuses={showAllBonuses}
                showAllBonusesHandler={showAllBonusesHandler}
                chooseBonusClickHandler={chooseBonusClickHandler}
                setDepositButtonText={setDepositButtonText}
                userDepositValue={userDepositValue}
                userSelectedBonus={userSelectedBonus}
                isShowDepositModal={isShowDepositModal}
                bonusesArr={bonusesArr}
              />
            </ErrorText>
            <ErrorText>
              <ChoosePaymentMethod
                t={t}
                userPayment={userPayment}
                paymentMethods={paymentMethods}
                userCurrency={userCurrency}
                isShowDepositModal={isShowDepositModal}
                setPaymentMethods={setPaymentMethods}
              />
            </ErrorText>
            <BonusCodeActivator
              t={t}
              isActiveBonusInput={isActiveBonusInput}
              bonusCodeInputActiveHandler={bonusCodeInputActiveHandler}
            />
          </div>
          <ErrorEmpty>
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
          </ErrorEmpty>
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
            <ErrorText>
              <DepositLastPage
                t={t}
                userDepositValue={userDepositValue}
                depositValueInputHandler={depositValueInputHandler}
                userDepositValueError={userDepositValueError}
                userInfo={userInfo}
                userCurrency={userCurrency}
              />
            </ErrorText>
          </div>
          <ErrorEmpty>
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
          </ErrorEmpty>
        </>
      )
  }
}