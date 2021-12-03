import styles from '../../../../styles/PaymentsModals/MobilePaymentsStepper.module.scss';
import {paymentMethodsData} from "../../../../envs/paymetsMethods";
import {PaymentMethodItem} from "./PaymentMethodItem";




export const StepTwoPaymentMethod = ({t, methodClickHandler}) => {


  return (
    <div className={styles.stepTwoWrapper}>
      {
        paymentMethodsData.map((el) => <PaymentMethodItem key={`${el.currency} payment stepper`} methodClickHandler={methodClickHandler} t={t} paymentData={el}/>)
      }
    </div>
  )
}