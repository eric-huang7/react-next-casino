import styles from '../../../styles/HomePage/SelectCurrency.module.scss';
import {useDispatch} from "react-redux";
import {setUserCurrencySwitcher} from "../../../redux/userFinance/action";
import {showCurrencySwitcher} from "../../../redux/popups/action";
import {CurrencyItem} from "./CurrencyItem";
import {addCurrencyToUserList} from "../../../redux/user/action";

export const CurrencySelector = ({t, heading, currenciesList, actionCurrencySelector}) => {
  const dispatch = useDispatch();

  const currencySelectorHandler = (e) => {
    if (actionCurrencySelector.isCurrencySelectorChooseCurrency) {
      dispatch(setUserCurrencySwitcher({
        currencyId: e.id,
        currencyAbbreviation: e.abbreviation,
        currencySymbol: e.symbol,
        currencyType: e.type,
        isDepositEnabled: e.isDepositEnabled,
        isWithdrawEnabled: e.isWithdrawEnabled,
      }));
    } else {
      let currency = {
        currency_id: e.id
      }
      dispatch(addCurrencyToUserList(currency));
    }

    // dispatch(showCurrencySwitcher(false));
  }

  return (
    <div className={styles.selectorCurrenciesWrapper}>
      <h3 className={styles.selectorCurrenciesHeading}>
        {t(heading)}
      </h3>
      <ul className={styles.selectorCurrenciesList}>
        {
          currenciesList.map((el) => {
            return (
              <CurrencyItem key={`${el.id} currency`} currencyData={el} currencySelectorHandler={currencySelectorHandler}/>
            )
          })
        }
      </ul>
    </div>
  )
}
