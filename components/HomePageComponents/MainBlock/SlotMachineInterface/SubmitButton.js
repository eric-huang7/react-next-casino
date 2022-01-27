import styles from '../../../../styles/HomePage/SlotMachineInterfase.module.scss'
import {useState} from "react";
import {showDepositModal} from "../../../../redux/actions/showPopups";
import {useDispatch} from "react-redux";
import {useTranslation} from "next-i18next";
import {showRegister} from "../../../../redux/actions/registerShow";


export const SubmitButton = ({width, userLogin}) => {
  const {t} = useTranslation('common');

  const dispatch = useDispatch();

  const submitButtonClickHandler = () => {
    if (userLogin) {
      dispatch(showDepositModal(true));
    } else {
      dispatch(showRegister(true));
    }
  }


  return (
    <div
      onClick={() => submitButtonClickHandler()}
      className={styles.submitButton}
    >
      <span>{t('homePage.playButton')}</span>
      {width <= 1065 ? <></> : <img src={'/assets/img/homeImg/buttonSlot.png'} alt="slot-machine button image"/>}

    </div>
  )
}