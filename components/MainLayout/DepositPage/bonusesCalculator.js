export const bonusesCalculator = (objOfBonuses, userCurrency, userDepositValue, t) => {
  if (objOfBonuses?.spec) {
    let specArr =  JSON.parse(JSON.stringify(eval("(" + objOfBonuses.spec + ")")));
     let filteredBonus = specArr.filter((elSpec) => {
      return elSpec.currency_id === Number(userCurrency.currencyId)
    })
    if (filteredBonus.length > 0) {
      if (objOfBonuses.free_spin_amount === 0) {
        if (filteredBonus[0].max_cashout_type === 3) {
          return `${t("depositPage.bonusInfo.maximumBonusAmount")}`;
        } else if (filteredBonus[0].max_cashout_type === 1) {
          return `${t("depositPage.bonusInfo.bonusUpTo")} ${filteredBonus[0].max_cashout_value} ${userCurrency.currencyAbbreviation}`;
        } else if (filteredBonus[0].max_cashout_type === 2) {
          return `${filteredBonus[0].max_cashout_value * 100}% ${t("depositPage.bonusInfo.bonusUpTo")} ${filteredBonus[0].max_cashout_value * filteredBonus[0].max_deposit} ${userCurrency.currencyAbbreviation}`;
        }
      } else {
        if (filteredBonus[0].max_cashout_type === 3) {
          return `${t("depositPage.bonusInfo.maximumBonusAmount")}`;
        } else if (filteredBonus[0].max_cashout_type === 1) {
          return `${t("depositPage.bonusInfo.bonusUpTo")} ${filteredBonus[0].max_cashout_value} ${userCurrency.currencyAbbreviation} + ${objOfBonuses.free_spin_amount} ${t("depositPage.bonusInfo.freeSpins")}`;
        } else if (filteredBonus[0].max_cashout_type === 2) {
          return `${filteredBonus[0].max_cashout_value * 100}% ${t("depositPage.bonusInfo.bonusUpTo")} ${filteredBonus[0].max_cashout_value * filteredBonus[0].max_deposit} ${userCurrency.currencyAbbreviation} + ${objOfBonuses.free_spin_amount} ${t("depositPage.bonusInfo.freeSpins")}`;
        }
      }
    }else {
      return `${t("depositPage.bonusInfo.playWith")} ${(userDepositValue < 0) ? "0" : Number(userDepositValue)} ${(userCurrency.currencySymbol.length > 0) ? userCurrency.currencySymbol : userCurrency.currencyAbbreviation}`;
    }
  } else {
    return `${t("depositPage.bonusInfo.playWith")} ${(userDepositValue < 0) ? "0" : Number(userDepositValue)} ${(userCurrency.currencySymbol.length > 0) ? userCurrency.currencySymbol : userCurrency.currencyAbbreviation}`
  }
}