import styles from '../../../../styles/DepositPage/DepositPage.module.scss';
import {BonusesBlock} from "./BonusesBlock";
import {useSelector} from "react-redux";
import {iconsUrl} from "../../../../helpers/imageUrl";
import {bonusInfoCalculator} from "../../../../helpers/bonusInfoCalculator";


const iDontNeedBonus = {id: 1, heading: "bonuses.bonusBlockInfoNotBonus", info: "", icon: '/assets/icons/stop.png'};

export const BonusesDropdown = ({t, allBonuses, isUseBonus, showAllBonuses,
                                  chooseBonusClickHandler, userSelectedBonus, userCurrency}) => {
  // const userSelectedBonus = useSelector((state) => state.userBonus)

  if (allBonuses.length > 0) {
    // console.log(allBonuses, 'All bonuses');
    return (
      <div className={`${styles.bonusesDropdownWrapper} ${showAllBonuses ? styles.dropdownWrapperActive : ''}`}>
        {
          allBonuses.sort((el) => {
            let res = el.id === userSelectedBonus.bonus_id ? -1 : 1
            if (userSelectedBonus.bonus_id === 0){
              res = el.id === 1 ? -1 : 1
            }
  return res
  }).map((el) => {

            let bonusDescription = bonusInfoCalculator(el, userCurrency.userCurrencyData, t);

            return(
              <BonusesBlock
                key={`${el.id} bonus`}
                t={t}
                bonusId={el.id}
                bonusImage={iconsUrl(el.icon)}
                bonusHeading={`bonuses.${el.id}.deposit_bonus.heading`}
                bonusDescription={`${bonusDescription.max_bonus}${bonusDescription.free_spins_amount ? ` + ${bonusDescription.free_spins_amount} ${t('bonusInfoContainer.bonusInfo.freeSpins')}` : ''}`}
                isUseBonus={isUseBonus}
                chooseBonusClickHandler={chooseBonusClickHandler}
                bonusData={el}
                userCurrency={userCurrency}
                canShowInfo={true}
              />
            )
          })
        }
      </div>
    )
  } else {
    chooseBonusClickHandler(0)
    return (
      <BonusesBlock
        t={t}
        classImageNotActive={'imageNotActive'}
        bonusImage={iDontNeedBonus.icon}
        bonusHeading={iDontNeedBonus.heading}
        bonusDescription={iDontNeedBonus.info}
        isUseBonus={isUseBonus}
        bonusLink={'/#bonusLink'}
        canShowInfo={false}
      />
    )
  }

}