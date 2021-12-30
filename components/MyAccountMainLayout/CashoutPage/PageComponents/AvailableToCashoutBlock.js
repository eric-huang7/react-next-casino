import styles from '../../../../styles/MyAccount/CashoutPage/CashoutPage.module.scss';
import Link from "next/link";

export const AvailableToCashoutBlock = ({t, balanceData, typeOfCurrency}) => {
  let balance = balanceData.filter((el) => Number(el.currency_id) === typeOfCurrency.id)[0].cash_amount

  return (
    <div  className={styles.availableCashoutBlock}>
      <p>{t("myAccount.cashoutPage.availableTo", {value: `${Number(balance)} ${typeOfCurrency.abbreviation}`})} <Link href={"/accounts/balance"}><a>{t("myAccount.cashoutPage.balance")}</a></Link> {t("myAccount.cashoutPage.pageDetailed")}</p>
    </div>
  )
}