import styles from '../../../../styles/MyAccount/CashoutPage/CashoutPage.module.scss';


export const TryBitcoinContainer = ({t}) => {


  return (
    <div  className={styles.tryBitcoinContainer}>
      <p>{"Haven't found your Payment Method? Maybe it's time to try Bitcoin."}</p>
      <button
        className={styles.playWithBitcoinButton}
      >
        <span>{"Play with"}</span>
        <img src="/assets/img/myAccount/cashoutPage/bitcoinIcon.png" alt="bincoin icon"/>
        <span>{"Bitcoin"}</span>
      </button>
    </div>
  )
}