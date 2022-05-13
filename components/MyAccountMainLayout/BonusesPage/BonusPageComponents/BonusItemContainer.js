import { currencyInfo } from '../../../../helpers/currencyInfo'
import { dateFormatter } from '../../../../helpers/dateTranslator'
import { useRouter } from 'next/router'
import { ActiveBonus } from './ActiveBonus'
import { PendingBonus } from './PendingBonus'
import ErrorText from '../../../ErrorBoundaryComponents/ErrorText'
import {BonusItem} from "./BonusItem";

export const BonusItemContainer = ({
  t,
  bonusData,
  currencyData,
  activateBonusClickHandler,
  cancelBonusClickHandler
}) => {
  const router = useRouter()

  let title = bonusData.title ? bonusData.title : '-'
  let stage = statusValue(bonusData.status)
  let currency = currencyInfo(currencyData.currency.results, bonusData.currency_id)[0].abbreviation
  let dateReceived = dateFormatter(bonusData.time_redeemed, router.locale)
  let expiryDate = dateFormatter(bonusData.time_expires, router.locale)
  let wagerOrFreeSpins,
    wagerOrFreeSpinsAmount,
    amount,
    wagerPercent,
    amountName

  if (Number(bonusData.free_spins_awarded) > 0) {
    wagerOrFreeSpins = 'myAccount.bonusPage.bonusItems.freeSpins'
    wagerOrFreeSpinsAmount = Number(bonusData.free_spins_awarded)
    amount = bonusData.game_names
    amountName = 'myAccount.bonusPage.bonusItems.games'
  } else {
    wagerOrFreeSpins = 'myAccount.bonusPage.bonusItems.wager'
    wagerOrFreeSpinsAmount = bonusData.wager_requirements === null ? `0 ${currency}` : `${Number(bonusData.wager_requirements)} ${currency}`
    amount = `${Number(bonusData.max_cashout_amount)} ${currency}`
    amountName = 'myAccount.bonusPage.bonusItems.amount'
    wagerPercent = wagerPercentCalculator(bonusData.rollover_achieved, bonusData.wager_requirements, bonusData.award_amount)
  }
  
  return (
    <ErrorText>
      <BonusItem
        t={t}
        title={title}
        amount={amount}
        amountName={amountName}
        expiryDate={expiryDate}
        dateReceived={dateReceived}
        stage={stage}
        wagerPercent={wagerPercent}
        wagerOrFreeSpins={wagerOrFreeSpins}
        wagerOrFreeSpinsAmount={wagerOrFreeSpinsAmount}
        activateBonusClickHandler={activateBonusClickHandler}
        cancelBonusClickHandler={cancelBonusClickHandler}
        bonusData={bonusData}
        status={bonusData.status}
      />
    </ErrorText>
  )
}

function wagerPercentCalculator (rollover_achieved, wager_requirements) {
  if (Number(wager_requirements) === 0) {
    return 0
  } else if (Number(rollover_achieved) === 0) {
    return 0
  } else {
    return Math.trunc((Number(rollover_achieved) / Number(wager_requirements)) * 100)
  }
}

function statusValue (status) {
  switch (status) {
    case '1':
      return 'myAccount.history.bonus.statusItems.active'
    case '2':
      return 'myAccount.history.bonus.statusItems.lost'
    case '3':
      return 'myAccount.history.bonus.statusItems.redeemed'
    case '4':
      return 'myAccount.history.bonus.statusItems.canceled'
    case '5':
      return 'myAccount.history.bonus.statusItems.pending'
    case '6':
      return 'myAccount.history.bonus.statusItems.expired'
    default:
      return '-'
  }
}
