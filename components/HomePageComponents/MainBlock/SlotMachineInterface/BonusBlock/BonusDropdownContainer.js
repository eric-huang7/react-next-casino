import styles from "../../../../../styles/HomePage/SumInputs.module.scss";
import {BonusItem} from "./BonusItem";
import {useTranslation} from "next-i18next";
import ErrorEmpty from "../../../../ErrorBoundaryComponents/ErrorEmpty";


export const BonusDropdownContainer = ({isShowDropdown, bonusesArr, openBonusesDropdownHandler, chooseBonusClickHandler, userCurrency, generalTranslate}) => {



  return (
    <div className={`${styles.bonusDropdownContainer} ${isShowDropdown ? "" : styles.hideDropDown}`}>
      {
        bonusesArr.map((el) => {
          return(
            <ErrorEmpty key={`${el.id} bonus slot machine`}>
              <BonusItem
                key={`${el.id} bonus slot machine`}
                bonusData={el}
                openBonusesDropdownHandler={openBonusesDropdownHandler}
                chooseBonusClickHandler={chooseBonusClickHandler}
                generalTranslate={generalTranslate}
                userCurrency={userCurrency}
              />
            </ErrorEmpty>
          )
        })
      }
    </div>
  )
}