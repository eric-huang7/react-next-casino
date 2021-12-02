import styles from '../../../../styles/PaymentsModals/PaymentsCrypto.module.scss';


export const ValueContainer = ({value, currency}) => {


  return (
    <h2 className={styles.valueText}>{`${value} ${currency}`}</h2>
  )
}