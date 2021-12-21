import {log} from "qrcode/lib/core/galois-field";

export const bonusesFinder = (offers, userCurrency) => {
  if (offers) {
    let needetBonuses = offers.filter((el) => {
      if (el.spec) {
        console.log(el, "><<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<")
        // console.log(JSON.parse(el.spec))

        // let specArr = JSON.parse(JSON.stringify(eval("(" + el.spec + ")")));
        //
        //
        // let arrOfBonuses = specArr.filter((elSpec) => {
        //   return elSpec.currency_id === Number(userCurrency.currencyId)
        // })

        let arrOfBonuses = [];

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
    return []
  }
}