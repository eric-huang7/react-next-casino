import {BonusBlock} from "./BonusBlock";
import {BonusDropdown} from "./BonusDropdown";
import ErrorEmpty from "../../../../ErrorBoundaryComponents/ErrorEmpty";


const iDontNeedBonus = {id: 1, heading: "bonuses.bonusBlockInfoNotBonus", info: "", icon: '/assets/icons/stop.png'};
export const BonusesContainer = ({isChecked, checkedInputHandler, bonusesArr, userSelectedBonus, userCurrency, selectedBonus, chooseBonusClickHandler}) => {

  if (isChecked) {

    if (bonusesArr.length > 0) {

      return (
        <ErrorEmpty>
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
        </ErrorEmpty>
      )

    } else {

      return (
        <BonusBlock
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
        checkedInputHandler={checkedInputHandler}
        isChecked={isChecked}
        bonusData={iDontNeedBonus}
        isUseBonus={false}
      />
    )
  }


}