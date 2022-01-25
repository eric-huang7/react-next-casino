import styles from '../../../../styles/HomePage/SlotMachineInterfase.module.scss'


export const SubmitButton = () => {



  return (
    <div  className={styles.submitButton}>
      <span>Play with 300 BTC</span>
      <img src={'/assets/img/homeImg/buttonSlot.png'} alt="slot-machine button image"/>
    </div>
  )
}