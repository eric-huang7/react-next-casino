import styles from '../../../../styles/HomePage/SlotMachineInterfase.module.scss'
import {useState} from "react";
import {showDepositModal} from "../../../../redux/actions/showPopups";
import {useDispatch} from "react-redux";
import {useTranslation} from "next-i18next";


export const SubmitButton = ({width}) => {
  const {t} = useTranslation('common');

  const dispatch = useDispatch();

  const submitButtonClickHandler = () => {
    dispatch(showDepositModal(true));
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