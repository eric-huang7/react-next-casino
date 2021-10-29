export const bonusesFinder = (offers, userCurrency) => {
  if (offers) {
    let needetBonuses = offers.filter((el) => {
      if (el.spec) {
        let specArr = JSON.parse(JSON.stringify(eval("(" + el.spec + ")")));


        let arrOfBonuses = specArr.filter((elSpec) => {
          return elSpec.currency_id === Number(userCurrency.currencyId)
        })

        if (arrOfBonuses.length > 0) {
          return true
        } else {
          return false
        }
      } else {
        return false
      }
    })
    return needetBonuses

  } else {
    return false
  }
}