import styles from '../../styles/BalanceMenu/BalanceMenu.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {BalanceItem} from "./BalanceItem";
import {patchUserActiveCurrency} from "../../redux/actions/userData";


export const BalanceMenuContainer = ({t, balanceData, currencyData, activeBalance}) => {

  console.log(balanceData.balance.balances, activeBalance, '<<< balance');



  return (
    <div className={styles.balanceMenuContainer}>
      <ul className={styles.balanceList}>
        {
          balanceData.balance.balances.filter((el) => Number(el.currency_id) !== Number(activeBalance[0].currency_id)).map((el) => {

            return (
              <BalanceItem key={`${el.id} balance item`} balanceData={el} currencyData={currencyData} />
            )
          })
        }

      </ul>
    </div>
  )
}