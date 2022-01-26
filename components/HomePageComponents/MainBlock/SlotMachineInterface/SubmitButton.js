import styles from '../../../../styles/HomePage/SlotMachineInterfase.module.scss'
import {useState} from "react";


export const SubmitButton = ({width}) => {
  const [isClick, setIsClick] = useState(false);
  const buttonClickSimulate = () => {
    setIsClick(prevState => !prevState);
  }


  return (
    <div
      // onMouseDown={() => buttonClickSimulate()}
      // onMouseUp={() => buttonClickSimulate()}
      className={`${styles.submitButton} ${isClick ? styles.submitButtonActive : ''}`}
    >
      <span>Play with 300 BTC</span>
      {width <= 1065 ? <></> : <img src={'/assets/img/homeImg/buttonSlot.png'} alt="slot-machine button image"/>}

    </div>
  )
}