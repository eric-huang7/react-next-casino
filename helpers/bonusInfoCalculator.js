

export const bonusInfoCalculator = (bonusData, userCurrency, t) => {
  let result = {
    max_bonus: '',
    free_spins: '',
    wagering: '',
    max_bet: '',
    min_deposit: '',
    free_spins_amount: 0,
  }

  if (bonusData?.spec) {
    let specArr = JSON.parse(JSON.stringify(eval("(" + bonusData.spec + ")")));
    let filteredBonusSpec = specArr.filter((elSpec) => {
      return elSpec.currency_id === Number(userCurrency.id)
    })

    if (filteredBonusSpec.length > 0) {
      if (filteredBonusSpec[0].max_cashout_type === 3) {
        result.max_bonus = `${t("depositPage.bonusInfo.maximumBonusAmount")}`;
      } else if (filteredBonusSpec[0].max_cashout_type === 1) {
        result.max_bonus = `${t("depositPage.bonusInfo.bonusUpTo")} ${filteredBonusSpec[0].max_cashout_value} ${userCurrency.abbreviation}`;
      } else if (filteredBonusSpec[0].max_cashout_type === 2) {
        result.max_bonus = `${filteredBonusSpec[0].max_cashout_value * 100}% ${t("depositPage.bonusInfo.bonusUpTo")} ${filteredBonusSpec[0].max_cashout_value * filteredBonusSpec[0].max_deposit} ${userCurrency.abbreviation}`;
      } else {
        result.max_bonus = `${t("depositPage.bonusInfo.maximumBonusAmount")}`;
      }

      if (filteredBonusSpec[0].max_bet) {
        result.max_bet = `${filteredBonusSpec[0].max_bet} ${userCurrency.abbreviation}`;
      } else {
        result.max_bet = 0;
      }

      if (filteredBonusSpec[0].min_deposit) {
        if (bonusData.free_spin_days && bonusData.free_spin_per_day) {
          let freeSpins = (bonusData.free_spin_days * bonusData.free_spin_per_day) + bonusData.free_spin_amount;

          result.min_deposit = t("bonusInfoContainer.bonusInfo.minimumDepositFreeSpins", {key_min_deposit: filteredBonusSpec[0].min_deposit, key_user_currency: userCurrency.abbreviation, key_free_spins: freeSpins});
          // `A minimum deposit of ${filteredBonusSpec[0].min_deposit} ${userCurrency.abbreviation} is required to receive the ${freeSpins} free spins.`;
        } else {
          if (bonusData.free_spin_amount) {
            result.min_deposit = t("bonusInfoContainer.bonusInfo.minimumDepositFreeSpins", {key_min_deposit: filteredBonusSpec[0].min_deposit, key_user_currency: userCurrency.abbreviation, key_free_spins: bonusData.free_spin_amount});
            // `A minimum deposit of ${filteredBonusSpec[0].min_deposit} ${userCurrency.abbreviation} is required to receive the ${bonusData.free_spin_amount} free spins.`
          } else {
            result.min_deposit =  t("bonusInfoContainer.bonusInfo.minimumDeposit", {key_min_deposit: filteredBonusSpec[0].min_deposit, key_user_currency: userCurrency.abbreviation});
            // `A minimum deposit of ${filteredBonusSpec[0].min_deposit} ${userCurrency.abbreviation}`;
          }
        }
      } else {
        result.min_deposit = 0;
        // `A minimum deposit of ${0} ${userCurrency.abbreviation}`;
      }

    } else {
      result.max_bonus = `${t("bonusInfoContainer.bonusInfo.maximumBonusAmount")}`;
      result.max_bet = 0;
      result.min_deposit = t("bonusInfoContainer.bonusInfo.minimumDeposit", {key_min_deposit: 0, key_user_currency: userCurrency.abbreviation});
      // `A minimum deposit of ${0} ${userCurrency.abbreviation}`;
    }
  } else {
    result.max_bonus = `${t("bonusInfoContainer.bonusInfo.maximumBonusAmount")}`;
    result.max_bet = 0;
    result.min_deposit = t("bonusInfoContainer.bonusInfo.minimumDeposit", {key_min_deposit: 0, key_user_currency: userCurrency.abbreviation});
    // `A minimum deposit of ${0} ${userCurrency.abbreviation}`;
  }

  if (bonusData.free_spin_days && bonusData.free_spin_per_day) {
    let multiply = (bonusData.free_spin_days * bonusData.free_spin_per_day);
    result.free_spins = t("bonusInfoContainer.bonusInfo.freeSpinsDescriptionLong", {free_spin_amount: bonusData.free_spin_amount, free_spin_value: multiply, free_spin_per_day: bonusData.free_spin_per_day});
    // `${bonusData.free_spin_amount} instant + ${bonusData.free_spin_days * bonusData.free_spin_per_day}(${bonusData.free_spin_per_day} per day, starting in 24 hours)`;
    result.free_spins_amount = multiply + bonusData.free_spin_amount;
  } else {
    if (bonusData.free_spin_amount) {
      result.free_spins = t("bonusInfoContainer.bonusInfo.freeSpinsDescriptionShort", {free_spin_amount: bonusData.free_spin_amount});
      result.free_spins_amount = bonusData.free_spin_amount;
    } else {
      result.free_spins = t("bonusInfoContainer.bonusInfo.freeSpinsNone");
      result.free_spins_amount = 0;
    }

    // `${bonusData.free_spin_amount} instant`;
  }

  if (bonusData.wager_requirements) {
    result.wagering = t("bonusInfoContainer.bonusInfo.wagering", {wager_requirements: Number(bonusData.wager_requirements)});
    // `X${Number(bonusData.wager_requirements)} Bonus`;
  } else {
    result.wagering = t("bonusInfoContainer.bonusInfo.noWagering");
    // `No Wagering`;
  }


  return result;
}