import {BonusesBlock} from "./BonusesBlock";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getActiveBonuses} from "../../../../redux/actions/getBonuses";


const bonusData = [
  {id: 2, heading: "First 125% Deposit VIP Bonus", info: "125% Bonus up to $ 2,500 + 100 Free Spins", icon: '/assets/icons/home/bonus_info_icon.svg'},
  {id: 3, heading: "100% First Deposit Bonus", info: "100% Bonus up to $ 100 + 180 Free Spins", icon: '/assets/icons/home/bonus_info_icon.svg'},
]

const iDontNeedBonus = {id: 1, heading: "I don't need a bonus.", info: "", icon: '/assets/icons/stop.png'};

export const BonusesBlockContainer = ({t, isUseBonus, bonusData}) => {
  const dispatch = useDispatch();
  const currencies = useSelector((state) => state.getCurrency);
  const activeBonuses = useSelector((state) => state.bonuses);
  const userLogin = useSelector((state) => state.authInfo.isAuthenticated);
  const choosenCurrnecy = useSelector((state) => state.userSelectedCurrency);


// if (userLogin) {
//   let needetBonuses = activeBonuses.activeBonuses?.offers.find((el) => {
//     if (el.spec) {
//       let specArr = JSON.parse(el.spec)
//       let arrOfBonuses = specArr.find((elSpec) => {
//         return elSpec.currency_id === choosenCurrnecy.currencyId
//       })
//       if (arrOfBonuses.length > 0) {
//         return true
//       } else {
//         return false
//       }
//     } else {
//       return false
//     }
//
//   })
//
//   console.log(activeBonuses, choosenCurrnecy, needetBonuses, '@@@@ Bonus Block');
// } else {
//
// }


  // useEffect(() => {
  //   if (!activeBonuses.loadingActiveBonuses) {
  //     dispatch(getActiveBonuses());
  //     return <h3>Loading...</h3>
  //   }
  //   console.log(activeBonuses, "@@@@bonuses block")
  // }, [activeBonuses]);





  if (isUseBonus) {
    return (
      <BonusesBlock
        t={t}
        bonusImage={'/assets/icons/home/bonus_info_icon.svg'}
        bonusHeading={'BonusHeading'}
        bonusDescription={'Bonus Description sdf sdf sdfa sdfwer wer dfsdf '}
        bonusLink={'/#bonusLink'}
        isUseBonus={isUseBonus}
      />
    )
  } else {
    return (
      <BonusesBlock
        t={t}
        bonusImage={iDontNeedBonus.icon}
        bonusHeading={iDontNeedBonus.heading}
        bonusDescription={iDontNeedBonus.info}
        isUseBonus={isUseBonus}
      />
    )
  }

}