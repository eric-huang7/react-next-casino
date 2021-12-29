import styles from '../../../../styles/MyAccount/CashoutPage/CashoutPage.module.scss';
import Link from "next/link";

export const AvailableToCashoutBlock = ({t, balanceData, typeOfCurrency}) => {
  let balance = balanceData.filter((el) => Number(el.currency_id) === typeOfCurrency.id)[0].cash_amount

  return (
    <div  className={styles.availableCashoutBlock}>
      <p>{`Available to cash out: ${Number(balance)} ${typeOfCurrency.abbreviation}. Please refer to`} <Link href={"/accounts/balance"}><a>Balance</a></Link> page for detailed break down.</p>
    </div>
  )
}