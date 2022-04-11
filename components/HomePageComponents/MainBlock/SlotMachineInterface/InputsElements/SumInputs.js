import styles from '../../../../../styles/HomePage/SumInputs.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {showCurrencySwitcher} from "../../../../../redux/popups/action";
import {setUserDepositValue} from "../../../../../redux/userFinance/action";
import {bonusesFinder} from "../../../../../helpers/bonusesFinder";
import {CurrencyButton} from "./CurrencyButton";
import {DepositValueInput} from "./DepositValueInput";
import {setUserBonus} from "../../../../../redux/userBonus/action";
import {BonusesContainer} from "../BonusBlock/BonusesContainer";

export const SumInputs = ({userLogin}) => {
  const dispatch = useDispatch();

  const sumInputVal = useSelector((state) => state.userFinance.depositValue);
  const isShowCurrencySwitcher = useSelector(({popups}) => popups.isShowCurrencySwitcher);
  const userCurrency = useSelector((state) => state.userFinance);

  const activeBonuses = useSelector((state) => state.bonuses);
  const userSelectedBonus = useSelector((state) => state.userBonus);

  const [isChecked, setIsChecked] = useState(true);
  const [bonusesArr, setBonusesArr] = useState([]);
  const [selectedBonus, setSelectedBonus] = useState();


  const sumInputChangeHandler = (e) => {
    dispatch(setUserDepositValue(e.target.value));
  }
  const checkedInputHandler = (e) => {
    e.stopPropagation();

    if (isChecked) {
      setIsChecked(false);
      chooseBonusClickHandler(0);
    } else {
      setIsChecked(true);
    }
  }

  const chooseBonusClickHandler = (chosenUserBonus) => {
    dispatch(setUserBonus(chosenUserBonus));
    setSelectedBonus(chosenUserBonus);
  }

  const currencyButtonClickHAndler = () => {
    if (isShowCurrencySwitcher) {
      dispatch(showCurrencySwitcher(false));
    } else {
      dispatch(showCurrencySwitcher(true));
    }
  }

  useEffect(() => {

      let bonuses = bonusesFinder(activeBonuses.activeBonuses?.offers, userCurrency);

      if (bonuses.length > 0) {
      setBonusesArr(bonuses);
      } else {
      setBonusesArr([]);
      chooseBonusClickHandler(0);
      }

  }, [userCurrency, userLogin, activeBonuses]);


  return (
    <>
      <div className={styles.inputsWrapper}>
        <DepositValueInput
          sumInputChangeHandler={sumInputChangeHandler}
          sumInputVal={sumInputVal}
        />
        <CurrencyButton
          userCurrency={userCurrency}
          currencyButtonClickHAndler={currencyButtonClickHAndler}
        />
      </div>
      <div className={styles.dividerUp}/>
      <BonusesContainer
        selectedBonus={selectedBonus}
        isChecked={isChecked}
        checkedInputHandler={checkedInputHandler}
        bonusesArr={bonusesArr}
        userSelectedBonus={userSelectedBonus}
        userCurrency={userCurrency}
        chooseBonusClickHandler={chooseBonusClickHandler}
      />
      <div className={styles.dividerDown}/>
      <div className={styles.typePayments}>
      </div>
    </>

  )
}
