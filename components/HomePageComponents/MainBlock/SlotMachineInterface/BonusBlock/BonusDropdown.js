import styles from "../../../../../styles/HomePage/SumInputs.module.scss";
import {BonusBlock} from "./BonusBlock";
import {BonusesBlock} from "../../../../MainLayout/DepositPage/BonusesBlock/BonusesBlock";
import {iconsUrl} from "../../../../../helpers/imageUrl";
import {BonusItem} from "./BonusItem";
import {useEffect, useRef, useState} from "react";
import {BonusInfoContainer} from "../../../../BonusInfoComponents/BonusInfoContainer";

const iDontNeedBonus = {id: 1, heading: "bonuses.bonusBlockInfoNotBonus", info: "", icon: '/assets/icons/stop.png'};
export const BonusDropdown = ({bonusesArr, checkedInputHandler, isChecked, userSelectedBonus, userCurrency, chooseBonusClickHandler}) => {

  const [isShowDropdown, setIsShowDropdown] = useState(false);

  const [bonusForShow, setBonusForShow] = useState(null);

  const openBonusesDropdownHandler = (e) => {


    if (e === 'close') {
      setIsShowDropdown(false);
    } else {
      setIsShowDropdown((prevState => !prevState));
    }

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
  }, [userCurrency, userSelectedBonus.bonus_id]);

  const bonusDropRef = useRef();

  const handleOutsideClick = (event) => {
    const path = event.path || (event.composedPath && event.composedPath());
    if (!path.includes(bonusDropRef.current)) {

      openBonusesDropdownHandler("close")
    }
    if (path.includes((bonusDropRef.current))) {

      openBonusesDropdownHandler();
    }
    if (path.includes((bonusDropRef.current))) {
      openBonusesDropdownHandler();
    }
  };



  useEffect(() => {
    document.body.addEventListener("click", handleOutsideClick);
    return () => {
      document.body.removeEventListener('click', handleOutsideClick);
    }
  }, []);


  const [isShowBonusInfo, setIsShowBonusInfo] = useState(false);

  const infoClickHandler = (e) => {
    e.stopPropagation()
    setIsShowBonusInfo((prevState => !prevState));
  }


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
          bonusDropRef={bonusDropRef}
          infoClickHandler={infoClickHandler}
        />
        {
          isShowBonusInfo
            ?
              <BonusInfoContainer
                  bonusData={bonusForShow ? bonusForShow : bonusesArr[0]}
                  infoClickHandler={setIsShowBonusInfo}
                  isShow={isShowBonusInfo}
                  userCurrency={userCurrency}
              />
              :
              <></>
        }
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