import styles from '../../styles/BalanceMenu/BalanceMenu.module.scss';
import {numberTransformer} from "../../helpers/numberTransformer";
import {patchUserActiveCurrency} from "../../redux/actions/userData";
import {useDispatch} from "react-redux";


export const BalanceItem = ({balanceData, currencyData}) => {
  const dispatch = useDispatch();

  const chooseClickHandler = () => {
    let userData = {
      id: balanceData.user_id,
      base_currency_id: balanceData.currency_id
    }
    dispatch(patchUserActiveCurrency(userData));

  }


  let currency = currencyData.currency.results.find((el) => Number(el.id) === Number(balanceData.currency_id));
  let amount = numberTransformer(balanceData.current_balance);


  return (
    <li onClick={() => chooseClickHandler()} className={styles.balanceItem}>
      <span >{amount}</span>
      <span>{currency.abbreviation}</span>
    </li>
  )
}