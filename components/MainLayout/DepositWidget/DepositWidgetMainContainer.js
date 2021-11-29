import styles from '../../../styles/DepostWidget/DepositWidgetMainContainer.module.scss';
import {CurrencyChooser} from "./CurrencyChooser";
import {AmountInputContainer} from "./AmountInputContainer";
import {PaymentMethodMainBlock} from "./PaymentMethodChooser/PaymentMethodMainBlock";
import {PlayWithButton} from "./PlayWithButton";
import {CloseButton} from "./CloseButton";


export const DepositWidgetMainContainer = ({t}) => {

  return (
    <div className={styles.depositWidgetMainContainer}>
      <CurrencyChooser t={t}/>
      <AmountInputContainer t={t}/>
      <PaymentMethodMainBlock t={t}/>
      <PlayWithButton t={t} />
      <CloseButton />
    </div>
  )
}