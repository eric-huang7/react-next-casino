import styles from '../../../styles/HomePage/SelectCurrency.module.scss';

export const CurrencySelector = ({t, heading, currenciesList}) => {

  return (
    <div className={styles.selectorCurrenciesWrapper}>
      <h3 className={styles.selectorCurrenciesHeading}>
        {heading}
      </h3>
      <ul className={styles.selectorCurrenciesList}>
        {
          currenciesList.map((el) => {
            return (
              <li
                className={styles.selectorCurrenciesListItem}
                data-currency={el.id}
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