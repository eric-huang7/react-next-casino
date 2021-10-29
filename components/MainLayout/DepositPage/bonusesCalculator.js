export const bonusesCalculator = (objOfBonuses, userCurrency) => {
  if (objOfBonuses?.spec) {
    let specArr =  JSON.parse(JSON.stringify(eval("(" + objOfBonuses.spec + ")")));
    console.log(specArr)
     let filteredBonus = specArr.filter((elSpec) => {
      return elSpec.currency_id === Number(userCurrency.currencyId)
    })
    let X = '';
    let Y = '';
    let Z = '';
    if (objOfBonuses.free_spin_amount === 0) {
      if (filteredBonus[0].max_cashout_type === 3) {
        return "Maximum bonus amount based on award amount";
      } else if (filteredBonus[0].max_cashout_type === 1) {
        return ``
      }
    } else {

    }



    return filteredBonus;
  } else {
    return false
  }
}