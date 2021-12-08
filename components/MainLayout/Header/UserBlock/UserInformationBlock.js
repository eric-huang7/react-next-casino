import styles from "../../../../styles/Header/UserBlock.module.scss";


export const UserInformationBlock = ({userInfo, userCurrency}) => {
  console.log(userInfo, '<<<< user info heading');
  console.log(userCurrency, '<<< currency')



  if (userCurrency.currency && userInfo.balance) {
    let balanceData = userInfo?.balance?.balances.filter((el) => !!Number(el.is_default))
    let balance = balanceData.length === 0 ? "0.0" : Number(balanceData[0].current_balance) === 0 ? "0.0" : Number(balanceData[0].current_balance);
    let currency = balanceData.length === 0 ? userCurrency?.currency?.results.find((el) => Number(el.id) === Number(userInfo.user.user.base_currency_id)).abbreviation : userCurrency?.currency?.results.find((el) => Number(el.id) === Number(balanceData[0].currency_id)).abbreviation;

    console.log(balanceData, balance, currency.abbreviation)

    return (
      <div className={styles.userMainBlockUserInfoBlock}>
        <span>{userInfo.user.user.username}</span>
        <span>{`${balance} ${currency}`}</span>
      </div>
    )

  } else {
    return (
      <div className={styles.userMainBlockUserInfoBlock}>
        <span>{'     '}</span>
        <span>{'     '}</span>
      </div>
    )

  }
}