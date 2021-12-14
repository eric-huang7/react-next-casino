import styles from '../../../../styles/MyAccount/BonusPage/BonusPage.module.scss';
import {currencyInfo} from "../../../../helpers/currencyInfo";
import {dateFormatter} from "../../../../helpers/dateTranslator";
import {useRouter} from "next/router";

export const BonusItemContainer = ({t, bonusData, currencyData}) => {
  const router = useRouter();
  console.log(bonusData, 'Bonus data')

  let title = bonusData.title ? bonusData.title : "-";
  let stage = statusValue(bonusData.status);
  let currency = currencyInfo(currencyData.currency.results, bonusData.currency_id)[0].abbreviation;
  let amountName = bonusData.status === '1' ? 'Amount' : 'Games';
  let amount = bonusData.status === '1' ? `${Number(bonusData.max_cashout_amount)} ${currency}` : bonusData.game_names;
  let wagerPercent = wagerPercentCalculator(bonusData.rollover_achieved, bonusData.wager_requirements, bonusData.award_amount);

  let dateReceived = dateFormatter(bonusData.time_redeemed, router.locale);
  let expiryDate = dateFormatter(bonusData.time_expires, router.locale);

  if (bonusData.status === '1') {
    let wagerOrFreeSpins = 'Amount wager requirement';
    let wagerOrFreeSpinsAmount = bonusData.wager_requirements === null ? `0 ${currency}` : `${Number(bonusData.wager_requirements)} ${currency}`;

    return (
      <div className={styles.bonusItemContainer}>
        <div className={styles.bonusItemHeading}>
          <p className={styles.headingText}>{title}</p>
          <p className={`${styles.bonusItemStatus}`}>{t(stage)}</p>
        </div>
        <ul className={styles.bonusInfoList}>
          <li className={styles.bonusInfoListItem}>
            <div className={styles.amountName}>{amountName}</div>
            <div className={styles.amountValue}>{amount}</div>
          </li>
          <li className={styles.bonusInfoListItem}>
            <div className={styles.amountWagerReq}>{wagerOrFreeSpins}</div>
            <div className={styles.amountWagerReqValue}>{wagerOrFreeSpinsAmount}</div>
          </li>
          <li className={styles.bonusInfoListItem}>
            <div className={styles.wagerPercent}>Wager Percent</div>
            <div className={styles.wagerPercentValue}>{wagerPercent}%</div>
          </li>
          <li className={styles.bonusInfoListItem}>
            <div className={styles.dateReceived}>Date received</div>
            <div className={styles.dateReceivedValue}>{dateReceived}</div>
          </li>
          <li className={styles.bonusInfoListItem}>
            <div className={styles.expiryDate}>Expiry date</div>
            <div className={styles.expiryDate}>{expiryDate}</div>
          </li>
        </ul>
        <button className={styles.cancelBonus}>Cancel Bonus</button>
      </div>
    )
  } else {
    let wagerOrFreeSpins = 'Free Spins awarded';
    let wagerOrFreeSpinsAmount = Number(bonusData.free_spins_awarded);

    return (
      <div className={styles.bonusItemContainer}>
        <div className={styles.bonusItemHeading}>
          <p className={styles.headingText}>{title}</p>
          <p className={`${styles.bonusItemStatus} ${styles.pendingStatus}`}>{t(stage)}</p>
        </div>
        <ul className={styles.bonusInfoList}>
          <li className={styles.bonusInfoListItem}>
            <div className={styles.amountName}>{amountName}</div>
            <div className={styles.amountValue}>{amount}</div>
          </li>
          <li className={styles.bonusInfoListItem}>
            <div className={styles.amountWagerReq}>{wagerOrFreeSpins}</div>
            <div className={styles.amountWagerReqValue}>{wagerOrFreeSpinsAmount}</div>
          </li>
          <li className={styles.bonusInfoListItem}>
            <div className={styles.wagerPercent}>{" "}</div>
            <div className={styles.wagerPercentValue}>{""}</div>
          </li>
          <li className={styles.bonusInfoListItem}>
            <div className={styles.dateReceived}>Date received</div>
            <div className={styles.dateReceivedValue}>{dateReceived}</div>
          </li>
          <li className={styles.bonusInfoListItem}>
            <div className={styles.expiryDate}>Activate until</div>
            <div className={styles.expiryDate}>{expiryDate}</div>
          </li>
        </ul>
        <button className={styles.activateBonus}>Activate</button>
      </div>
    )
  }

}


function wagerPercentCalculator(rollover_achieved, wager_requirements, award_amount) {
  let wagerNumber = (Number(award_amount) * Number(wager_requirements)) === 0 ? 0 : (Number(rollover_achieved) / (Number(award_amount) * Number(wager_requirements))) * 100;

  return wagerNumber;
}

function statusValue(status) {
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