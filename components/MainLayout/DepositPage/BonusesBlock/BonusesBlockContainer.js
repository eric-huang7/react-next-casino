import {BonusesBlock} from "./BonusesBlock";


const bonusData = [
  {id: 2, heading: "First 125% Deposit VIP Bonus", info: "125% Bonus up to $ 2,500 + 100 Free Spins", icon: '/assets/icons/home/bonus_info_icon.svg'},
  {id: 3, heading: "100% First Deposit Bonus", info: "100% Bonus up to $ 100 + 180 Free Spins", icon: '/assets/icons/home/bonus_info_icon.svg'},
]

const iDontNeedBonus = {id: 1, heading: "I don't need a bonus.", info: "", icon: '/assets/icons/stop.png'};

export const BonusesBlockContainer = ({t, isUseBonus, bonusData}) => {

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