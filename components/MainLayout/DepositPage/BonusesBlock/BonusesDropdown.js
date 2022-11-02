import {BonusesBlock} from "./BonusesBlock";
import {iconsUrl} from "../../../../helpers/imageUrl";
import {bonusInfoCalculator} from "../../../../helpers/bonusInfoCalculator";
import ErrorText from "../../../ErrorBoundaryComponents/ErrorText";
import {Box} from "@chakra-ui/react";

const iDontNeedBonus = {id: 1, heading: "bonuses.bonusBlockInfoNotBonus", info: "", icon: '/assets/icons/stop.png'};

export const BonusesDropdown = ({
  t, allBonuses, isUseBonus,
  chooseBonusClickHandler, userSelectedBonus, userCurrency
}) => {
  const isEmpty = !(allBonuses?.length && isUseBonus);

  if (isEmpty) {
    chooseBonusClickHandler(0)
  }

  return isEmpty
    ? <BonusesBlock
      t={t}
      classImageNotActive={'imageNotActive'}
      bonusImage={iDontNeedBonus.icon}
      bonusHeading={iDontNeedBonus.heading}
      bonusDescription={iDontNeedBonus.info}
      isUseBonus={isUseBonus}
      bonusLink={'/#bonusLink'}
      canShowInfo={false}
    />
    : <Box flex={1}>
      {allBonuses.sort((el) => {
        let res = el.id === userSelectedBonus.bonus_id ? -1 : 1
        if (userSelectedBonus.bonus_id === 0) {
          res = el.id === 1 ? -1 : 1
        }
        return res
      }).map((el) => {

        let bonusDescription = bonusInfoCalculator(el, userCurrency.userCurrencyData, t);

        return (
          <ErrorText key={`${el.id} bonus`}>
            <BonusesBlock
              key={`${el.id} bonus`}
              t={t}
              bonusId={el.id}
              bonusImage={iconsUrl(el.icon)}
              bonusHeading={`bonuses.bonus_${el.id}.deposit_bonus.heading`}
              bonusDescription={`${bonusDescription.max_bonus}${bonusDescription.free_spins_amount ? ` + ${bonusDescription.free_spins_amount} ${t('bonusInfoContainer.bonusInfo.freeSpins')}` : ''}`}
              isUseBonus={isUseBonus}
              chooseBonusClickHandler={chooseBonusClickHandler}
              bonusData={el}
              userCurrency={userCurrency}
              canShowInfo={true}
            />
          </ErrorText>
        )
      })}
    </Box>
}
