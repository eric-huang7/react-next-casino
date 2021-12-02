import styles from '../../../../styles/PaymentsModals/PaymentsCrypto.module.scss';


export const TextBlock = ({t, value, currency}) => {

  return (
    <p className={styles.cryptoText}>
      <span>{t("cryptoPayment.textBlock.firstBlock")}</span><span className={styles.cryptoValue}>{`${value} ${currency} \n`}</span>
      <span>{t("cryptoPayment.textBlock.secondBlock")}</span>
    </p>
  )
}