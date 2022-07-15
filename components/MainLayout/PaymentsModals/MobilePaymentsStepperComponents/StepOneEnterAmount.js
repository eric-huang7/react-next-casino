import styles from '../../../../styles/PaymentsModals/MobilePaymentsStepper.module.scss'
import { StepperPlayWithButton } from './StepperPlayWithButton'
import ErrorEmpty from '../../../ErrorBoundaryComponents/ErrorEmpty'
import CurrencyIcon from "../../../currency/CurrencyIcon";

export const StepOneEnterAmount = ({
  t,
  userCurrency,
  userDepositValue,
  valueInputHandler,
  errorInputValue,
  currencySwitcherShowHandler,
  whatShouldDoPlayWith
}) => {

  return (
    <div className={styles.stepOneWrapper}>
      <div className={styles.stepperAmountContainer}>
        <label className={styles.stepperAmountLabel} htmlFor="stepperAmount">{t('paymentsStepper.headingOne')}</label>
        <input
          type="number"
          className={styles.stepperAmountInput}
          id={'stepperAmount'}
          placeholder={`${userCurrency?.userCurrencyData?.symbol} ${userDepositValue}`}
          onChange={(e) => valueInputHandler(e)}
        />
        <span className={styles.errorMessage}>{errorInputValue}</span>
        <button onClick={() => currencySwitcherShowHandler()}
                className={styles.stepperCurrencyButton}>
          <CurrencyIcon id={userCurrency?.userCurrencyData?.abbreviation} size={6} mr={1}/>
          {userCurrency?.userCurrencyData?.abbreviation}
        </button>
      </div>
      <ErrorEmpty>
        <StepperPlayWithButton
          t={t}
          userCurrency={userCurrency}
          userDepositValue={userDepositValue}
          whatShouldDoPlayWith={whatShouldDoPlayWith}
        />
      </ErrorEmpty>
    </div>
  )
}
