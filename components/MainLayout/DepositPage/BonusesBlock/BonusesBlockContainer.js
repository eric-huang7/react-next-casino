import { BonusesBlock } from './BonusesBlock'
import { BonusesDropdown } from './BonusesDropdown'
import ErrorEmpty from '../../../ErrorBoundaryComponents/ErrorEmpty'

const iDontNeedBonus = { id: 1, heading: 'bonuses.bonusBlockInfoNotBonus', info: '', icon: '/assets/icons/stop.png' }

export const BonusesBlockContainer = (props) => {
  let {
    t,
    isUseBonus,
    userCurrency,
    showAllBonuses,
    chooseBonusClickHandler,
    setDepositButtonText,
    userDepositValue,
    userSelectedBonus,
    bonusesArr
  } = props

  return isUseBonus && bonusesArr.length > 0 ? (
    <ErrorEmpty>
      <BonusesDropdown
        t={t}
        bonusImage={'/assets/icons/home/bonus_info_icon.svg'}
        bonusHeading={'BonusHeading'}
        bonusDescription={'Bonus Description'}
        bonusLink={'/#bonusLink'}
        isUseBonus={isUseBonus}
        allBonuses={bonusesArr}
        showAllBonuses={showAllBonuses}
        chooseBonusClickHandler={chooseBonusClickHandler}
        userSelectedBonus={userSelectedBonus}
        userCurrency={userCurrency}
      />
    </ErrorEmpty>
  ) : (
    <BonusesBlock
      classImageNotActive={'imageNotActive'}
      bonusImage={iDontNeedBonus.icon}
      bonusHeading={iDontNeedBonus.heading}
      bonusDescription={iDontNeedBonus.info}
      isUseBonus={isUseBonus}
      bonusLink={'/#bonusLink'}
      canShowInfo={false}
    />
  )
}
