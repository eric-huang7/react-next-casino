export const currencyFinder = (balanceData, userInform, userCurrency) => {
  let currency = balanceData?.length === 0
    ?
    userCurrency?.currency?.results?.find((el) => userInform.user.user.base_currency_id
      ?
      Number(el.id) === Number(userInform.user.user.base_currency_id)
      :
      Number(el.id) === 1).abbreviation
    :
    userCurrency?.currency?.results?.find((el) => Number(el.id) === Number(balanceData[0].currency_id))?.abbreviation

  return currency;
}
