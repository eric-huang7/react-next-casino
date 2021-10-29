import styles from '../../../../styles/DepositPage/DepositPage.module.scss';
import {BonusesBlock} from "./BonusesBlock";
import {useDispatch} from "react-redux";
import {setUserBonus} from "../../../../redux/actions/setUserBonus";

const iDontNeedBonus = {id: 1, heading: "I don't need a bonus.", info: "", icon: '/assets/icons/stop.png'};

export const BonusesDropdown = ({t, allBonuses, isUseBonus, showAllBonuses, chosenBonus,
                                  chooseBonusClickHandler}) => {
  const dispatch = useDispatch();
  // console.log(allBonuses, "DROPDOWN")



  if (allBonuses.length > 0) {

    return (
      <div className={`${styles.bonusesDropdownWrapper} ${showAllBonuses ? styles.dropdownWrapperActive : ''}`}>
        {
          allBonuses.map((el) => {
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