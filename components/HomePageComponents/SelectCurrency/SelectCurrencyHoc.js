import {CurrencySelector} from "./CurrencySelector";

const suggestedCurrencies = [
  {id: 5702, abbreviation: "EUR", symbol: "€", type: 3, isDepositEnabled: 1, isWithdrawEnabled: 1},
  {id: 1, abbreviation: "BTC", symbol: "", type: 4, isDepositEnabled: 1, isWithdrawEnabled: 0},
];
const otherRealMoney = [
  {id: 3982, abbreviation: "CAD", symbol: "", type: 0, isDepositEnabled: 0, isWithdrawEnabled: 0},
  {id: 5694, abbreviation: "AUD", symbol: "$", type: 0, isDepositEnabled: 0, isWithdrawEnabled: 0},
  {id: 5713, abbreviation: "NOK", symbol: "kr", type: 0, isDepositEnabled: 0, isWithdrawEnabled: 0},
  {id: 5693, abbreviation: "USD", symbol: "$", type: 3, isDepositEnabled: 1, isWithdrawEnabled: 1},
  {id: 5718, abbreviation: "RUB", symbol: "₽", type: 0, isDepositEnabled: 0, isWithdrawEnabled: 0},
  {id: 5717, abbreviation: "PLN", symbol: "zł", type: 0, isDepositEnabled: 0, isWithdrawEnabled: 0},
  {id: 5714, abbreviation: "NZD", symbol: "$", type: 0, isDepositEnabled: 0, isWithdrawEnabled: 0},
  {id: 5709, abbreviation: "JPY", symbol: "¥", type: 0, isDepositEnabled: 0, isWithdrawEnabled: 0},
  {id: 5695, abbreviation: "BRL", symbol: "R$", type: 0, isDepositEnabled: 0, isWithdrawEnabled: 0},
]
const otherCryptoCurrencies = [
  {id: 2, abbreviation: "LTC", symbol: "", type: 4, isDepositEnabled: 1, isWithdrawEnabled: 0},
  {id: 391, abbreviation: "BCH", symbol: "", type: 0, isDepositEnabled: 0, isWithdrawEnabled: 0},
  {id: 168, abbreviation: "ETH", symbol: "", type: 2, isDepositEnabled: 1, isWithdrawEnabled: 0},
  {id: 29, abbreviation: "DOGE", symbol: "", type: 1, isDepositEnabled: 0, isWithdrawEnabled: 0},
]
const headingsCurrencies = {
  suggestedCurrencies: 'selectCurrency.suggestedCurrencies',
  otherRealMoney: 'selectCurrency.otherRealMoneyCurrencies',
  otherCryptoCurrencies: 'selectCurrency.otherCryptoCurrencies'
}

export const SelectCurrencyHoc = ({t, actionCurrencySelector}) => {

  return (
    <>
      <CurrencySelector actionCurrencySelector={actionCurrencySelector} t={t} heading={headingsCurrencies.suggestedCurrencies} currenciesList={suggestedCurrencies}/>
      <CurrencySelector actionCurrencySelector={actionCurrencySelector} t={t} heading={headingsCurrencies.otherRealMoney} currenciesList={otherRealMoney}/>
      <CurrencySelector actionCurrencySelector={actionCurrencySelector} t={t} heading={headingsCurrencies.otherCryptoCurrencies} currenciesList={otherCryptoCurrencies}/>
    </>
  )
}