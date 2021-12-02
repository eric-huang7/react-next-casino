import styles from '../../../../styles/PaymentsModals/PaymentsCrypto.module.scss';


export const ValueContainer = ({value, currency, paymentsData}) => {


  return (
    <h2 className={styles.valueText}>{paymentsData.paymentMethod ? `${paymentsData.data.sender_amount} ${paymentsData.paymentMethod.currency}` : `${value} ${currency}`}</h2>
  )
}