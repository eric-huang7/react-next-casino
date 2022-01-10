import {log} from "qrcode/lib/core/galois-field";

export const bonusesFinder = (offers, userCurrency) => {
  if (offers) {
    let neededBonuses = offers.filter((el) => {
      if (el.spec) {
        // console.log(JSON.parse(el.spec))
        let arrOfBonuses = [];
        try {
          let specArr = JSON.parse(JSON.stringify(eval("(" + el.spec + ")")));


          arrOfBonuses = specArr.filter((elSpec) => {
            return elSpec.currency_id === Number(userCurrency.currencyId)
          })
        } catch (e) {
          arrOfBonuses = [];
        }

        if (arrOfBonuses.length > 0) {
          return true
        } else {
          return false
        }
      } else {
        return false
      }
    })
    return neededBonuses

  } else {
    return []
  }
}