export const bonusesCalculator = (objOfBonus, userCurrency, t) => {
  let res = {
    x_key: "",
    y_key: "",
    min_deposit_key: "",
    wagner_require_key: Number(objOfBonus.wager_requirements)
  }

  if (objOfBonus?.spec) {
    let specArr =  JSON.parse(JSON.stringify(eval("(" + objOfBonus.spec + ")")));
    let filteredBonus = specArr.filter((elSpec) => {
      return elSpec.currency_id === Number(userCurrency.currencyId)
    })

    if (filteredBonus[0].max_cashout_type === 3) {
      res.y_key = t("bonuses.max_bonus");
    }
    if (filteredBonus[0].max_cashout_type === 2) {
      res.x_key = filteredBonus[0].max_cashout_value * 100;
      res.y_key = userCurrency.currencySymbol ? `${userCurrency.currencySymbol}${filteredBonus[0].max_cashout_value * filteredBonus[0].max_deposit}` : `${filteredBonus[0].max_cashout_value * filteredBonus[0].max_deposit} ${userCurrency.currencyAbbreviation}`;
    }
    if (filteredBonus[0].max_cashout_type === 1) {
      res.x_key = '';
      res.y_key = userCurrency.currencySymbol ? `${userCurrency.currencySymbol}${filteredBonus[0].max_cashout_value}` : `${filteredBonus[0].max_cashout_value} ${userCurrency.currencyAbbreviation}`;
    }
    res.min_deposit_key = userCurrency.currencySymbol ? `${userCurrency.currencySymbol}${filteredBonus[0].min_deposit}` : `${filteredBonus[0].min_deposit} ${userCurrency.currencyAbbreviation}`;
    return res;
  } else {
    return {
      x_key: "#",
      y_key: "#",
      min_deposit_key: "#",
      wagner_require_key: Number(objOfBonus.wager_requirements)
    }
  }
}