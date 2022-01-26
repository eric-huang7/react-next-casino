import styles from '../../../../styles/HomePage/SlotMachineInterfase.module.scss'
import {useState} from "react";


export const SubmitButton = ({width}) => {


  const submitButtonClickHandler = () => {

  }


  return (
    <div
      onClick={() => submitButtonClickHandler()}
      className={styles.submitButton}
    >
      <span>Play with 300 BTC</span>
      {width <= 1065 ? <></> : <img src={'/assets/img/homeImg/buttonSlot.png'} alt="slot-machine button image"/>}

    </div>
  )
}