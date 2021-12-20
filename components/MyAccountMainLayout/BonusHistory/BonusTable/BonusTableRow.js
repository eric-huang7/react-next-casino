import styles from '../../../../styles/MyAccount/BonusHistory/BonusHistory.module.scss';
import {currencyInfo} from "../../../../helpers/currencyInfo";
import {dateFormatter} from "../../../../helpers/dateTranslator";
import {useRouter} from "next/router";



export const BonusTableRow = ({t, bonusData, currencyData}) => {
const router = useRouter();

  let title = bonusData.title ? bonusData.title : "-";
  let status = statusValue (bonusData.status);
  let currency = currencyInfo(currencyData.currency.results, bonusData.currency_id)[0].abbreviation;
  let amount = `${Number(bonusData.max_cashout_amount)} ${currency}`;
  let wagerNumber = wagerValue(bonusData.rollover_achieved, bonusData.award_amount, bonusData.wager_requirements);
  let validUtil = dateFormatter(bonusData.time_expires, router.locale);
  let date = dateFormatter(bonusData.time_redeemed, router.locale);

  return (
    <tr className={styles.dataRow}>
      <td>
        {title}
      </td>
      <td>
        {t(status)}
      </td>
      <td>
        {amount}
      </td>
      <td className={styles.wagerData}>
        {wagerNumber}
      </td>
      <td>
        {validUtil}
      </td>
      <td>
        {date}
      </td>
    </tr>
  )
}

function wagerValue(rollover_achieved, award_amount, wager_requirements) {
  let wagerNumber = Number(award_amount) * Number(wager_requirements) === 0 ? 0 : (Number(rollover_achieved) / (Number(award_amount) * Number(wager_requirements))) * 100;
  let wager_rollover_achieved = Number(rollover_achieved);
  let wager_award_amount = Number(award_amount);
  let wager_wager_requirements = Number(wager_requirements);
  let res = `${wager_rollover_achieved} / (${wager_award_amount} * ${wager_wager_requirements}) (${wagerNumber}%)`
  return res
}

function statusValue (status) {
  switch (status) {
    case "1":
      return "myAccount.history.bonus.statusItems.active"
    case "2":
      return "myAccount.history.bonus.statusItems.lost"
    case "3":
      return "myAccount.history.bonus.statusItems.redeemed"
    case "4":
      return "myAccount.history.bonus.statusItems.canceled"
    case "5":
      return "myAccount.history.bonus.statusItems.pending"
    case "6":
      return "myAccount.history.bonus.statusItems.expired"
    default:
      return "-"
  }
}