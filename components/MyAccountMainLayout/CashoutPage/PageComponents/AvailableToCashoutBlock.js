import styles from '../../../../styles/MyAccount/CashoutPage/CashoutPage.module.scss';
import Link from "next/link";

export const AvailableToCashoutBlock = ({t}) => {


  return (
    <div  className={styles.availableCashoutBlock}>
      <p>Available to cash out: 0 BRL. Please refer to <Link href={"/accounts/balance"}><a>Balance</a></Link> page for detailed break down.</p>
    </div>
  )
}