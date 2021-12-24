import styles from '../../../styles/MyAccount/GamblingLimitsPage/GamblingLimitsPage.module.scss';
import {SelectPeriodContainer} from "./InputsConponents/SelectPeriodContainer";
import {ButtonsContainer} from "./InputsConponents/ButtonsContainer";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {patchUserData} from "../../../redux/actions/userData";



export const InputsBlock = ({t, userInfo}) => {
  const dispatch = useDispatch();

  const [selfExclusionExpiry, setSelfExclusionExpiry] = useState(userInfo.self_exclusion_expiry ? userInfo.self_exclusion_expiry : '');

  const selfExclusionExpiryHandler = (value) => {
    setSelfExclusionExpiry(Number(value));
  }

  const saveButtonHandler = () => {
    let nowDate = new Date().getTime();
    let sendData = {
      id: userInfo.id,
      self_exclusion_expiry: (nowDate + selfExclusionExpiry) / 1000
    }
    dispatch(patchUserData(sendData));
  }

  return (
    <div  className={styles.inputsBlock}>
      <SelectPeriodContainer
        selfExclusionExpiry={selfExclusionExpiry}
        selfExclusionExpiryHandler={selfExclusionExpiryHandler}
        t={t}
      />
      <ButtonsContainer saveButtonHandler={saveButtonHandler} t={t} />
      <p  className={styles.innerText}>
        {t("myAccount.selfExclusionPage.textTwo")}
      </p>
    </div>
  )
}