import {CurrencySelector} from "./CurrencySelector";

const suggestedCurrencies = [
  {id: 5702, abbreviation: "EUR", symbol: "€"},
  {id: 1, abbreviation: "BTC", symbol: ""},
];
const otherRealMoney = [
  {id: 3982, abbreviation: "CAD", symbol: ""},
  {id: 5694, abbreviation: "AUD", symbol: "$"},
  {id: 5713, abbreviation: "NOK", symbol: "kr"},
  {id: 5693, abbreviation: "USD", symbol: "$"},
  {id: 5718, abbreviation: "RUB", symbol: "₽"},
  {id: 5717, abbreviation: "PLN", symbol: "zł"},
  {id: 5714, abbreviation: "NZD", symbol: "$"},
  {id: 5709, abbreviation: "JPY", symbol: "¥"},
  {id: 5695, abbreviation: "BRL", symbol: "R$"},
]
const otherCryptoCurrencies = [
  {id: 2, abbreviation: "LTC", symbol: ""},
  {id: 391, abbreviation: "BCH", symbol: ""},
  {id: 168, abbreviation: "ETH", symbol: ""},
  {id: 29, abbreviation: "DOGE", symbol: ""},
]
const headingsCurrencies = {
  suggestedCurrencies: 'selectCurrency.suggestedCurrencies',
  otherRealMoney: 'selectCurrency.otherRealMoneyCurrencies',
  otherCryptoCurrencies: 'selectCurrency.otherCryptoCurrencies'
}

export const SelectCurrencyHoc = ({t}) => {

  return (
    <>
      <CurrencySelector t={t} heading={headingsCurrencies.suggestedCurrencies} currenciesList={suggestedCurrencies}/>
      <CurrencySelector t={t} heading={headingsCurrencies.otherRealMoney} currenciesList={otherRealMoney}/>
      <CurrencySelector t={t} heading={headingsCurrencies.otherCryptoCurrencies} currenciesList={otherCryptoCurrencies}/>
    </>
  )
}