import styles from '../../styles/PaymentsMethodsPage/PaymentsInformationBlock.module.scss';


export const PaymentsInformationBlock = ({t}) => {

  return (
    <section className={styles.informationBlockMainWrapper}>
      <div  className={styles.informationBlockWrapper}>
        <div className={styles.informationBlockFrame}>
          <h2 className={styles.informationHeading}>Payments methods</h2>
          <p className={styles.informationText}>
            We are proud to be a safe multi-currency online casino. Currently, we accept the following currencies: Euro, US Dollars, Canadian Dollar, Australian Dollar, New Zealand Dollar, Japanese Yen, Renminbi, Polish Złoty, Russian Ruble, Norwegian Krone, Bitcoins, Bitcoin Cash, Ethereum, Dogecoin, Tether and Litecoin.
          </p>
        </div>
      </div>
    </section>

  )
}