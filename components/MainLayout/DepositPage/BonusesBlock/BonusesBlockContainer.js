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

  if (isUseBonus) {
    if (bonusesArr.length > 0) {
      // let activeBonus = bonusesArr.find((el) => el.id === userSelectedBonus.bonus_id);
      // let buttonText = bonusesCalculator(activeBonus, userCurrency, userDepositValue, t);
      // setDepositButtonText(buttonText);
      return (
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
      )
    } else {
      // chooseBonusClickHandler(0)
      // setDepositButtonText(`${t("depositPage.bonusInfo.playWith")} ${(userDepositValue < 0) ? "0" : Number(userDepositValue)} ${(userCurrency?.userCurrencyData?.symbol.length > 0) ? userCurrency?.userCurrencyData?.symbol : userCurrency?.userCurrencyData?.abbreviation}`);
      return (
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
  } else {
    // setDepositButtonText(`${t("depositPage.bonusInfo.playWith")} ${(userDepositValue < 0) ? "0" : Number(userDepositValue)} ${(userCurrency?.userCurrencyData?.symbol.length > 0) ? userCurrency?.userCurrencyData?.symbol : userCurrency?.userCurrencyData?.abbreviation}`);
    return (
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

}
