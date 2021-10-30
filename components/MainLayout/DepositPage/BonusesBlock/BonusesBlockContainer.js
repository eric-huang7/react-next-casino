import {BonusesBlock} from "./BonusesBlock";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getActiveBonuses} from "../../../../redux/actions/getBonuses";
import {bonusesFinder} from "../bonusesFinder";
import {bonusesCalculator} from "../bonusesCalculator";
import {BonusesDropdown} from "./BonusesDropdown";
import {setUserBonus} from "../../../../redux/actions/setUserBonus";


const bonusData = [
  {
    id: 2,
    heading: "First 125% Deposit VIP Bonus",
    info: "125% Bonus up to $ 2,500 + 100 Free Spins",
    icon: '/assets/icons/home/bonus_info_icon.svg'
  },
  {
    id: 3,
    heading: "100% First Deposit Bonus",
    info: "100% Bonus up to $ 100 + 180 Free Spins",
    icon: '/assets/icons/home/bonus_info_icon.svg'
  },
]

const iDontNeedBonus = {id: 1, heading: "I don't need a bonus.", info: "", icon: '/assets/icons/stop.png'};

export const BonusesBlockContainer = ({t, isUseBonus, bonusData, userCurrency, showAllBonuses, chosenBonus, chooseBonusClickHandler, setDepositButtonText, userDepositValue}) => {
  const activeBonuses = useSelector((state) => state.bonuses);
  const userLogin = useSelector((state) => state.authInfo.isAuthenticated);
  const isShowDepositModal = useSelector((state) => state.showPopupsReducer.isShowDepositModal);

  const [bonusesArr, setBonusesArr] = useState([]);

  useEffect(() => {
    if (userLogin) {
      let bonuses = bonusesFinder(activeBonuses.activeBonuses?.offers, userCurrency);
      if (bonuses.length > 0) {
        setBonusesArr(bonuses);
      } else {
        setBonusesArr([]);
        chooseBonusClickHandler(0);
      }

    } else {

    }
  }, [userCurrency, isShowDepositModal]);



  if (isUseBonus) {
    if (bonusesArr.length > 0) {
      let activeBonus = bonusesArr.find((el) => el.id === chosenBonus);

      let buttonText = bonusesCalculator(activeBonus, userCurrency, userDepositValue);
      setDepositButtonText(buttonText);
      return (
        <>
          <BonusesDropdown
            t={t}
            bonusImage={'/assets/icons/home/bonus_info_icon.svg'}
            bonusHeading={'BonusHeading'}
            bonusDescription={'Bonus Description sdf sdf sdfa sdfwer wer dfsdf '}
            bonusLink={'/#bonusLink'}
            isUseBonus={isUseBonus}
            allBonuses={bonusesArr}
            showAllBonuses={showAllBonuses}
            chosenBonus={chosenBonus}
            chooseBonusClickHandler={chooseBonusClickHandler}

          />
        </>
      )
    } else {
      // chooseBonusClickHandler(0)
      setDepositButtonText(`Play with ${(userDepositValue < 0) ? "0" : Number(userDepositValue)} ${(userCurrency.currencySymbol.length > 0) ? userCurrency.currencySymbol : userCurrency.currencyAbbreviation}`);
      return (
        <BonusesBlock
          t={t}
          bonusImage={iDontNeedBonus.icon}
          bonusHeading={iDontNeedBonus.heading}
          bonusDescription={iDontNeedBonus.info}
          isUseBonus={isUseBonus}
          bonusLink={'/#bonusLink'}
        />
      )
    }
  } else {
    setDepositButtonText(`Play with ${(userDepositValue < 0) ? "0" : Number(userDepositValue)} ${(userCurrency.currencySymbol.length > 0) ? userCurrency.currencySymbol : userCurrency.currencyAbbreviation}`);
    return (
      <BonusesBlock
        t={t}
        bonusImage={iDontNeedBonus.icon}
        bonusHeading={iDontNeedBonus.heading}
        bonusDescription={iDontNeedBonus.info}
        isUseBonus={isUseBonus}
        bonusLink={'/#bonusLink'}
      />
    )
  }

}