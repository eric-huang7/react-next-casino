import styles from "../../../styles/DepositPage/DepositPage.module.scss";
import {DepositHeading} from "./DepositHeading";
import {DepositInputsContainer} from "./DepositInputs/DepositInputsContainer";
import {BonusesBlockMainContainer} from "./BonusesBlock/BonusesBlockMainContainer";
import {DepositImages} from "./DepositPaymentsImages";
import {BonusCodeActivator} from "./BonusCodeActivator";
import {DepositButtonSubmit} from "./DepositButtonSubmit";
import {ChoosePaymentMethod} from "./ChoosePaymentMethod/ChoosePaymentMethod";
import {DepositLastPage} from "./DepositLastPage/DepositLastPage";
import {useState} from "react";


export const DepositPageStepper = ({
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
                                     chooseBonusClickHandler
                                   }) => {
let buttonText = `Play with ${(userDepositValue < 0) ? "0" : Number(userDepositValue)} ${(userCurrency.currencySymbol.length > 0) ? userCurrency.currencySymbol : userCurrency.currencyAbbreviation}`;
  const setDepositButtonText = (newButtonText) => {
      buttonText = newButtonText;
  }

  switch (step) {
    case  1:
      return (
        <>
          <div className={styles.depositInnerBlockWrapper}>
            <DepositHeading closeDepositModalHandler={closeDepositModalHandler}/>
            <DepositInputsContainer userCurrency={userCurrency}
                                    t={t}
                                    userDepositValue={userDepositValue}
                                    depositValueInputHandler={depositValueInputHandler}
                                    currencySwitcherShowHandler={currencySwitcherShowHandler}
                                    userDepositValueError={userDepositValueError}
            />
            <div className={styles.divider}></div>
            <BonusesBlockMainContainer t={t} isChecked={isChecked} checkedInputHandler={checkedInputHandler}
                                       isActiveBonusInput={isActiveBonusInput}
                                       userCurrency={userCurrency}
                                       showAllBonuses={showAllBonuses}
                                       showAllBonusesHandler={showAllBonusesHandler}
                                       chosenBonus={chosenBonus}
                                       chooseBonusClickHandler={chooseBonusClickHandler}
                                       setDepositButtonText={setDepositButtonText}
            />
            <DepositImages/>
            <BonusCodeActivator t={t} isActiveBonusInput={isActiveBonusInput}
                                bonusCodeInputActiveHandler={bonusCodeInputActiveHandler}/>
          </div>
          <DepositButtonSubmit userPayment={userPayment} userDepositValue={userDepositValue} stepHandler={stepHandler}
                               step={step} t={t}
                               buttonText={buttonText}/>
        </>
      )
    case 2:
      return (
        <>
          <div className={styles.depositInnerBlockWrapper}>
            <DepositHeading closeDepositModalHandler={closeDepositModalHandler}/>
            <DepositInputsContainer userCurrency={userCurrency}
                                    t={t}
                                    userDepositValue={userDepositValue}
                                    depositValueInputHandler={depositValueInputHandler}
                                    currencySwitcherShowHandler={currencySwitcherShowHandler}
                                    userDepositValueError={userDepositValueError}
            />
            <BonusesBlockMainContainer t={t} isChecked={isChecked} checkedInputHandler={checkedInputHandler}
                                       isActiveBonusInput={isActiveBonusInput}
                                       userCurrency={userCurrency}
                                       showAllBonuses={showAllBonuses}
                                       showAllBonusesHandler={showAllBonusesHandler}
                                       chosenBonus={chosenBonus}
                                       chooseBonusClickHandler={chooseBonusClickHandler}
                                       setDepositButtonText={setDepositButtonText}
            />
            <ChoosePaymentMethod t={t} userPayment={userPayment}/>
            <BonusCodeActivator t={t} isActiveBonusInput={isActiveBonusInput}
                                bonusCodeInputActiveHandler={bonusCodeInputActiveHandler}/>
          </div>
          <DepositButtonSubmit userPayment={userPayment} userDepositValue={userDepositValue} stepHandler={stepHandler}
                               step={step} t={t}
                               buttonText={buttonText}/>
        </>
      )
    case 3:
      return (
        <>
          <div className={styles.depositInnerBlockWrapper}>
            <DepositHeading closeDepositModalHandler={closeDepositModalHandler}/>
            <DepositLastPage
              t={t}
              userDepositValue={userDepositValue}
              depositValueInputHandler={depositValueInputHandler}
              userDepositValueError={userDepositValueError}
              userInfo={userInfo}
            />
          </div>
          <DepositButtonSubmit userPayment={userPayment} userDepositValue={userDepositValue}
                               submitHandler={submitHandler} stepHandler={stepHandler} step={step} t={t}
                               buttonText={"Submit"}/>
        </>
      )
  }
}