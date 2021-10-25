import {BonusesBlock} from "./BonusesBlock";


export const BonusesBlockContainer = ({t, bonusData}) => {

  return (
    <BonusesBlock
      t={t}
      bonusImage={'bonusImage'}
      bonusHeading={'BonusHeading'}
      bonusDescription={'Bonus Description'}
      bonusLink={'#bonusLink'}
    />
  )
}