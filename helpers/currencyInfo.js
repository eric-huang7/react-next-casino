export const currencyInfo = (currency, currency_id) => {
  return currency.filter((el) => Number(el.id) === Number(currency_id));
}