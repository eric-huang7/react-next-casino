import {BonusBlock} from "./BonusBlock";
import {BonusDropdown} from "./BonusDropdown";


const iDontNeedBonus = {id: 1, heading: "bonuses.bonusBlockInfoNotBonus", info: "", icon: '/assets/icons/stop.png'};
export const BonusesContainer = ({isChecked, checkedInputHandler, bonusesArr, userSelectedBonus, userCurrency, selectedBonus, chooseBonusClickHandler}) => {

  if (isChecked) {

    if (bonusesArr.length > 0) {

      return (
          <BonusDropdown
            selectedBonus={selectedBonus}
            isChecked={isChecked}
            checkedInputHandler={checkedInputHandler}
            bonusesArr={bonusesArr}
            isUseBonus={true}
            userSelectedBonus={userSelectedBonus}
            userCurrency={userCurrency}
            chooseBonusClickHandler={chooseBonusClickHandler}
          />
      )

    } else {

      return (
        <BonusBlock
          // bonusImage={iDontNeedBonus.icon}
          // bonusHeading={iDontNeedBonus.heading}
          // bonusDescription={iDontNeedBonus.info}
          checkedInputHandler={checkedInputHandler}
          isChecked={isChecked}
          bonusData={iDontNeedBonus}
          isUseBonus={false}
        />
      )

    }
  } else {

    return (
      <BonusBlock
        // bonusImage={iDontNeedBonus.icon}
        // bonusHeading={iDontNeedBonus.heading}
        // bonusDescription={iDontNeedBonus.info}
        checkedInputHandler={checkedInputHandler}
        isChecked={isChecked}
        bonusData={iDontNeedBonus}
        isUseBonus={false}
      />
    )
  }


}