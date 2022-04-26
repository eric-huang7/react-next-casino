
import {BonusBlock} from "./BonusBlock";
import {useEffect, useRef, useState} from "react";
import {BonusInfoContainer} from "../../../../BonusInfoComponents/BonusInfoContainer";
import {BonusDropdownContainer} from "./BonusDropdownContainer";
import {useTranslation} from "next-i18next";
import BonusErrorHandler from "../../../../BonusInfoComponents/ErrorHandlers/BonusErrorHandler";
import ErrorText from "../../../../ErrorBoundaryComponents/ErrorText";

const iDontNeedBonus = {id: 1, heading: "bonuses.bonusBlockInfoNotBonus", info: "", icon: '/assets/icons/stop.webp'};
export const BonusDropdown = ({bonusesArr, checkedInputHandler, isChecked, userSelectedBonus, userCurrency, chooseBonusClickHandler}) => {

  const {t} = useTranslation('common');

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
        <ErrorText>
          <BonusBlock
            key={`${bonusForShow ? bonusForShow.id : bonusesArr[0].id} bonus slot machine`}
            isChecked={isChecked}
            checkedInputHandler={checkedInputHandler}
            bonusData={bonusForShow ? bonusForShow : bonusesArr[0]}
            isUseBonus={true}
            openBonusesDropdownHandler={openBonusesDropdownHandler}
            bonusDropRef={bonusDropRef}
            infoClickHandler={infoClickHandler}
            generalTranslate={t}
            userCurrency={userCurrency}
          />
        </ErrorText>
        {
          isShowBonusInfo
            ?
            <BonusErrorHandler>
              <BonusInfoContainer
                bonusData={bonusForShow ? bonusForShow : bonusesArr[0]}
                infoClickHandler={setIsShowBonusInfo}
                isShow={isShowBonusInfo}
                userCurrency={userCurrency}
              />
            </BonusErrorHandler>
            :
            <></>
        }
        <BonusDropdownContainer
          chooseBonusClickHandler={chooseBonusClickHandler}
          bonusesArr={bonusesArr}
          isShowDropdown={isShowDropdown}
          openBonusesDropdownHandler={openBonusesDropdownHandler}
          userCurrency={userCurrency}
          generalTranslate={t}
        />
      </>

    )
  } else {
    return (

      <BonusBlock
        checkedInputHandler={checkedInputHandler}
        isChecked={isChecked}
        bonusData={iDontNeedBonus}
        isUseBonus={false}
      />
    )
  }

}
