import styles from '../../../styles/HomePage/SelectCurrency.module.scss';
import {useDispatch} from "react-redux";
import {setUserCurrencySwitcher} from "../../../redux/actions/setSelectedCurrency";
import {showCurrencySwitcher} from "../../../redux/actions/showPopups";

export const CurrencySelector = ({t, heading, currenciesList}) => {
  const dispatch = useDispatch();

  const currencySelectorHandler = (e) => {
    dispatch(setUserCurrencySwitcher({
      currencyId: e.target.dataset.currency_id,
      currencyAbbreviation: e.target.dataset.currency_abbr,
      currencySymbol: e.target.dataset.currency_symbol,
    }))
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
              <li
                className={styles.selectorCurrenciesListItem}
                data-currency_id={el.id}
                data-currency_symbol={el.symbol}
                data-currency_abbr={el.abbreviation}
                key={el.id}
                onClick={(e) => currencySelectorHandler(e)}
              >
                {el.abbreviation}
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}