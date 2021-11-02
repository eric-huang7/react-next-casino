import styles from '../../../../styles/DepositPage/DepositPage.module.scss';
import {BonusesBlock} from "./BonusesBlock";
import {useSelector} from "react-redux";


const iDontNeedBonus = {id: 1, heading: "depositPage.bonusBlockInfoNotBonus", info: "", icon: '/assets/icons/stop.png'};

export const BonusesDropdown = ({t, allBonuses, isUseBonus, showAllBonuses, chosenBonus,
                                  chooseBonusClickHandler}) => {
  const userSelectedBonus = useSelector((state) => state.userBonus)

  if (allBonuses.length > 0) {
    console.log(allBonuses, 'All bonuses');
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
            return(
              <BonusesBlock
                key={`${el.id} bonus`}
                t={t}
                bonusId={el.id}
                bonusImage={`https://cimagehost1.sos-ch-gva-2.exoscale-cdn.com/icons/${el.icon}`}
                bonusHeading={el.title}
                bonusDescription={el.description_short}
                isUseBonus={isUseBonus}
                chooseBonusClickHandler={chooseBonusClickHandler}
                chosenBonus={chosenBonus}
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
      />
    )
  }

}