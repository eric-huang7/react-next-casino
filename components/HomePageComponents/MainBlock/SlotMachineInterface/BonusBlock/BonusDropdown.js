import styles from "../../../../../styles/HomePage/SumInputs.module.scss";
import {BonusBlock} from "./BonusBlock";
import {BonusesBlock} from "../../../../MainLayout/DepositPage/BonusesBlock/BonusesBlock";
import {iconsUrl} from "../../../../../helpers/imageUrl";
import {BonusItem} from "./BonusItem";
import {useEffect, useState} from "react";

const iDontNeedBonus = {id: 1, heading: "bonuses.bonusBlockInfoNotBonus", info: "", icon: '/assets/icons/stop.png'};
export const BonusDropdown = ({bonusesArr, checkedInputHandler, isChecked, userSelectedBonus, userCurrency, chooseBonusClickHandler}) => {

  const [isShowDropdown, setIsShowDropdown] = useState(false);

  const [bonusForShow, setBonusForShow] = useState(null);

  const openBonusesDropdownHandler = (e) => {
    setIsShowDropdown((prevState => !prevState));
  }

  useEffect(() => {
    if (bonusesArr.length > 0) {
      if (userSelectedBonus.bonus_id === 0) {
        setBonusForShow(bonusesArr[0]);
      } else {
        let selectedBonusObj = bonusesArr.find((bonus) => bonus.id === userSelectedBonus.bonus_id);
        if (selectedBonusObj) {
          setBonusForShow(selectedBonusObj);
        } else {
          setBonusForShow(null);
        }
      }
    }
    return () => {
      setBonusForShow(null);
    }
  }, [userCurrency, userSelectedBonus.bonus_id])


  if (bonusesArr.length > 0) {


    return (
      <>
        <BonusBlock
          key={`${bonusForShow ? bonusForShow.id : bonusesArr[0].id} bonus slot machine`}
          isChecked={isChecked}
          checkedInputHandler={checkedInputHandler}
          bonusData={bonusForShow ? bonusForShow : bonusesArr[0]}
          isUseBonus={true}
          openBonusesDropdownHandler={openBonusesDropdownHandler}
        />
        <div className={`${styles.bonusDropdownContainer} ${isShowDropdown ? "" : styles.hideDropDown}`}>
          {
            bonusesArr.map((el) => {
              return(
                <BonusItem
                  key={`${el.id} bonus slot machine`}
                  bonusData={el}
                  openBonusesDropdownHandler={openBonusesDropdownHandler}
                  chooseBonusClickHandler={chooseBonusClickHandler}
                />
              )
            })
          }
        </div>
      </>

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

}