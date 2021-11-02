import styles from '../../styles/PaymentsMethodsPage/PaymentsInformationBlock.module.scss';


export const PaymentsInformationBlock = ({t}) => {

  return (
    <section className={styles.informationBlockMainWrapper}>
      <div  className={styles.informationBlockWrapper}>
        <div className={styles.informationBlockFrame}>
          <h2 className={styles.informationHeading}>{t("paymentsMethodsPage.mainBlock.heading")}</h2>
          <p className={styles.informationText}>
            {t("paymentsMethodsPage.mainBlock.textInfo")}
          </p>
        </div>
      </div>
    </section>

  )
}