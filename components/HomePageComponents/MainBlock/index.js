import styles from '../../../styles/HomePage/MainBlock.module.scss'
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import {SlotMachineInterface} from "./SlotMachineInterface/SlotMachineInterfase";

export const MainBlock = () => {
  const {height, width} = useWindowDimensions();

  console.log('height> ',height, "width> ", width);
  return  (
    <div className={styles.mainBlockWrapper}>
      <section className={styles.welcomeBonusSection}>
        <div className={styles.welcomeBonusImg}>
          <img src={`/assets/img/homeImg/Welcome-Bonus${width > 1065 ? '' : '-mobile'}.png`} alt="greetings words"/>
        </div>
        <div className={styles.slotsDancerWrapper}>
          <div className={styles.slotsDancer}>
            <div className={styles.slotMachineIng}>
              <SlotMachineInterface />
              <img src={`/assets/img/homeImg/slot_machine${width > 1065 ? '' : '-mobile'}.png`}  alt="slot machine"/>
            </div>
            <div className={styles.dancingGirlImg}>
              <img src={`/assets/img/homeImg/dance-girl${width > 1065 ? '' : '-mobile'}.png`}  alt="dancing girl"/>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}