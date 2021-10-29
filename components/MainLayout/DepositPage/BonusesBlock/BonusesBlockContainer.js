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

export const BonusesBlockContainer = ({t, isUseBonus, bonusData, userCurrency, showAllBonuses, chosenBonus, chooseBonusClickHandler, setDepositButtonText}) => {
  const dispatch = useDispatch();
  const currencies = useSelector((state) => state.getCurrency);
  const activeBonuses = useSelector((state) => state.bonuses);
  const userLogin = useSelector((state) => state.authInfo.isAuthenticated);
  const isShowDepositModal = useSelector((state) => state.showPopupsReducer.isShowDepositModal);

  const [bonusesArr, setBonusesArr] = useState([]);



  useEffect(() => {
    if (userLogin) {
      let bonuses = bonusesFinder(activeBonuses.activeBonuses?.offers, userCurrency);
      setBonusesArr(bonuses);
      console.log(activeBonuses, userCurrency, bonuses, '@@@@ Bonus Block');
      // bonusesCalculator(bonuses);
    } else {

    }
  }, [userCurrency, isShowDepositModal]);



  if (isUseBonus) {
    if (bonusesArr.length > 0) {
      let activeBonus = bonusesArr.find((el) => el.id === chosenBonus);

      let buttonText = bonusesCalculator(activeBonus, userCurrency);
      console.log(activeBonus,buttonText, '@@@ACTIVE BONUS')
      dispatch(setUserBonus(bonusesArr[0].id));
      return (
        <>
          <BonusesBlock
            t={t}
            bonusImage={`https://cimagehost1.sos-ch-gva-2.exoscale-cdn.com/icons/${(activeBonus) ? activeBonus.icon : bonusesArr[0].icon}`}
            bonusHeading={(activeBonus) ? activeBonus.title : bonusesArr[0].title}
            bonusDescription={(activeBonus) ? activeBonus.description_short : bonusesArr[0].description_short}
            isUseBonus={isUseBonus}
            bonusLink={'/#bonusLink'}
          />
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