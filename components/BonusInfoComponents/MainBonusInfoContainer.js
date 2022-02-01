import styles from "../../styles/BonusInfoComponent/BonusInfoComponent.module.scss";
import {Heading} from "./MainContainerComponents/Heading";
import {BonusInfoBlock} from "./MainContainerComponents/BonusInfoBlock";
import {BonusAdditionalInfo} from "./MainContainerComponents/BonusAdditionalInfo";
import {BonusPageLink} from "./MainContainerComponents/BonusPageLink";
import {useTranslation} from "next-i18next";


export const MainBonusInfoContainer = ({closeButtonClickHandler, bonusData, userCurrency}) => {
    const {t} = useTranslation('common')

    console.log(bonusData, userCurrency.userCurrencyData, "!!!!!!")

    let bonusInfo = bonusInfoCalculator(bonusData, userCurrency.userCurrencyData, t);
    console.log(bonusInfo, "@@@@@@@@@@@@@@@@@@@@@@");

    return (
        <div className={styles.mainBonusContainer}>

            <Heading
                closeButtonClickHandler={closeButtonClickHandler}
            />
            <BonusInfoBlock
                bonusData={bonusInfo}
                userCurrency={userCurrency}
            />
            <BonusAdditionalInfo
                bonusData={bonusInfo}
                userCurrency={userCurrency}
            />
            <BonusPageLink/>

        </div>
    )
}

function bonusInfoCalculator(bonusData, userCurrency, t) {
    let result = {
        max_bonus: '',
        free_spins: '',
        wagering: '',
        max_bet: '',
        min_deposit: '',
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

                    result.min_deposit = `A minimum deposit of ${filteredBonusSpec[0].min_deposit} ${userCurrency.abbreviation} is required to receive the ${freeSpins} free spins.`
                } else {
                    if (bonusData.free_spin_amount) {
                        result.min_deposit = `A minimum deposit of ${filteredBonusSpec[0].min_deposit} ${userCurrency.abbreviation} is required to receive the ${bonusData.free_spin_amount} free spins.`
                    } else {
                        result.min_deposit = `A minimum deposit of ${filteredBonusSpec[0].min_deposit} ${userCurrency.abbreviation}`;
                    }
                }
            } else {
                result.min_deposit = `A minimum deposit of ${0} ${userCurrency.abbreviation}`;
            }

        } else {
            result.max_bonus = `${t("depositPage.bonusInfo.maximumBonusAmount")}`;
            result.max_bet = 0;
            result.min_deposit = `A minimum deposit of ${0} ${userCurrency.abbreviation}`;
        }
    } else {
        result.max_bonus = `${t("depositPage.bonusInfo.maximumBonusAmount")}`;
        result.max_bet = 0;
        result.min_deposit = `A minimum deposit of ${0} ${userCurrency.abbreviation}`;
    }

    if (bonusData.free_spin_days && bonusData.free_spin_per_day) {
        result.free_spins = `${bonusData.free_spin_amount} instant + ${bonusData.free_spin_days * bonusData.free_spin_per_day}(${bonusData.free_spin_per_day} per day, starting in 24 hours)`;
    } else {
        result.free_spins = `${bonusData.free_spin_amount} instant`;
    }

    if (bonusData.wager_requirements) {
        result.wagering = `X${Number(bonusData.wager_requirements)} Bonus`;
    } else {
        result.wagering = `No Wagering`;
    }


    return result;
}